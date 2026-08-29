import { useVModel } from "@vueuse/core";
import { computed, defineComponent, nextTick, onMounted, reactive, ref, watch } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import { ElIcon, ElInput, ElScrollbar, ElTree, treeEmits, treeProps, useGlobalSize } from "element-plus";
import { isArray, isBoolean, isNull, isNumber, isObject, isString } from "lodash-unified";
import { addCssUnit, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import type { FilterValue, TreeNodeData } from "element-plus";
import type { ComponentInternalInstance, VNode } from "vue";
import type { PagedInput } from "../../table";
import type { FilterNodeMethodFunction, TreeNode } from "./tree.props";
import type { ElTreeOutput } from "./tree.type";

/** FaTree 的运行时 Props 定义。 */
export const faTreeProps = {
	...treeProps,
	/** 树节点筛选方法。 */
	filterNodeMethod: {
		type: definePropType<FilterNodeMethodFunction>(Function),
	},
	/** @description whether Select is disabled 重载使其支持 ElForm*/
	disabled: {
		type: Boolean,
		default: undefined,
	},
	/** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
	nodeKey: {
		type: String,
		default: "value",
	},
	/** @description 是否默认展开所有节点 */
	defaultExpandAll: {
		type: Boolean,
		default: true,
	},
	/** @description 是否在点击节点的时候选中节点 */
	checkOnClickNode: {
		type: Boolean,
		default: true,
	},
	/** @description 是否高亮当前选中节点 */
	highlightCurrent: {
		type: Boolean,
		default: true,
	},
	/** @description 点击折叠节点，需要开启 'expandOnClickNode' */
	collapseOnClickNode: Boolean,
	/** @description v-model绑定值 */
	modelValue: {
		type: definePropType<string | number | boolean | object | null>([String, Number, Boolean, Object]),
		default: undefined,
	},
	/** @description v-model:label绑定值 */
	label: String,
	/** @description 宽度 */
	width: {
		type: [String, Number],
		default: 180,
	},
	/** @description 默认选择 */
	defaultSelection: [String, Number],
	/** @description 标题 */
	title: String,
	/** @description 折叠 */
	hamburger: Boolean,
	/** @description 隐藏全部 */
	hideAll: Boolean,
	/** @description 隐藏过滤 */
	hideFilter: Boolean,
	/** @description 全部值 */
	allValue: {
		type: definePropType<string | number | boolean | object | null>([String, Number, Boolean, Object]),
		default: "",
	},
	/** @description 树形数据 */
	data: {
		type: definePropType<ElTreeOutput[]>(Array),
		default: (): ElTreeOutput[] => [],
	},
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: string | number | PagedInput) => Promise<ElTreeOutput[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | PagedInput>([String, Number, Object]),
};

/** FaTree 的运行时 Emits 定义。 */
export const faTreeEmits = {
	...treeEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: string | number | boolean | object | null): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string): boolean => isString(value) || isNull(value),
	/** @description 数据改变 */
	dataChangeCallBack: (data: ElTreeOutput[]): boolean => isArray(data),
	/** @description 改变 */
	change: (_data: ElTreeOutput, _node: TreeNode, _instance: ComponentInternalInstance, _event: MouseEvent): boolean => true,
	/** @description 节点点击 */
	"node-click": (_data: ElTreeOutput, _node: TreeNode, _instance: ComponentInternalInstance, _event: MouseEvent): boolean => true,
};

/** FaTree 的插槽参数。 */
export interface FaTreeSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: { node: TreeNode; data: ElTreeOutput };
	/** @description 当数据为空时自定义的内容 */
	empty: never;
	/** @description 显示内容插槽 */
	label: { node: TreeNode; data: ElTreeOutput };
}

export default defineComponent({
	name: "FaTree",
	props: faTreeProps,
	emits: faTreeEmits,
	slots: makeSlots<FaTreeSlots>(),
	setup(props, { slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });
		const _globalSize = useGlobalSize();

		const state = reactive({
			value: withDefineType<string | number | boolean | object | null>(props.modelValue),
			loading: false,
			searchValue: withDefineType<string>(),
			orgTreeData: withDefineType<ElTreeOutput[]>([]),
			treeData: withDefineType<ElTreeOutput[]>([]),
			hamburger: props.hamburger || false,
			width: computed(() => {
				if (state.hamburger) {
					return "130px";
				} else {
					const width = addCssUnit(props.width);
					if (_globalSize.value === "small") {
						return `calc(${width} * 0.9)`;
					} else {
						return width;
					}
				}
			}),
		});

		/** @description 只有一层节点 */
		const fold = computed<boolean>(() => {
			const childrenKey = props.props.children ?? "children";
			return state.orgTreeData.every((item) => !Array.isArray(item[childrenKey]) || item[childrenKey].length === 0);
		});

		const treeRef = ref<InstanceType<typeof ElTree>>();
		let requestVersion = 0;

		const loadData = async (): Promise<void> => {
			const currentRequestVersion = ++requestVersion;
			let curSelectedData: string | number | undefined;
			if (props.nodeKey) {
				// 记录原本选中的值
				const currentKey = treeRef.value?.getCurrentKey();
				if (typeof currentKey === "string" || typeof currentKey === "number") curSelectedData = currentKey;
			}
			let treeData: ElTreeOutput[];
			// 判断是否需要自动请求
			if (props.requestApi) {
				state.loading = true;
				const params = {
					...(typeof props.initParam === "object" && props.initParam !== null ? props.initParam : {}),
					searchValue: state.searchValue,
				};
				try {
					const responseData = await props.requestApi(params);
					treeData = responseData.map((item) => ({ ...item }));
				} catch (error) {
					if (currentRequestVersion !== requestVersion) return;
					throw error;
				} finally {
					if (currentRequestVersion === requestVersion) state.loading = false;
				}
			} else {
				treeData = props.data.map((item) => ({ ...item }));
			}
			if (currentRequestVersion !== requestVersion) return;
			if (!props.hideAll) {
				treeData.unshift({ [props.nodeKey]: props.allValue, label: "全部", value: null, all: true });
			}
			state.orgTreeData = treeData;
			state.treeData = treeData;
			emit("dataChangeCallBack", state.treeData);
			const selectedKey = curSelectedData ?? props.modelValue ?? props.defaultSelection;
			if (props.nodeKey && (typeof selectedKey === "string" || typeof selectedKey === "number")) {
				void nextTick(() => {
					// 设置原本选中的值
					treeRef.value?.setCurrentKey(selectedKey);
				});
			}
		};

		const handleHamburgerClick = (): void => {
			if (state.hamburger) {
				state.treeData = state.orgTreeData;
			} else {
				// 折叠只显示一级数据
				state.treeData = state.orgTreeData.map((item) => ({ ...item, [props.props.children ?? "children"]: [] }));
			}
			state.hamburger = !state.hamburger;
		};

		const handleFilterNode = (value: FilterValue, data: TreeNodeData, child: TreeNode): boolean => {
			if (!value) return true;
			const isAll: unknown = data["all"];
			const dataLabel: unknown = data["label"];
			let parentNode = child.parent,
				labels: unknown[] = isAll ? [dataLabel] : [child.label],
				level = 1;
			while (level < child.level && parentNode) {
				labels = [...labels, parentNode.label];
				parentNode = parentNode.parent;
				level++;
			}
			const filterText = typeof value === "string" || typeof value === "number" ? String(value) : "";
			const result = labels.some((label) =>
				typeof label === "string" || typeof label === "number" ? String(label).includes(filterText) : false
			);
			if (props.filterNodeMethod) {
				return result && props.filterNodeMethod(value, data, child);
			}
			return result;
		};

		const handleNodeClick = (data: ElTreeOutput, node: TreeNode, instance: ComponentInternalInstance | null, event: MouseEvent): void => {
			if (!instance) return;
			// 判断是否开启点击展开节点，并且节点是折叠状态，则自动展开，否则需要点击箭头图标才能折叠或开启 'collapseOnClickNode'
			if (props.expandOnClickNode) {
				if (!node.expanded) {
					node.expand();
				} else if (node.expanded && props.collapseOnClickNode) {
					node.collapse();
				}
			}
			if (!data["all"] && (node.key === undefined || node.key === null)) return;
			state.value = data["all"] ? (props.allValue ?? null) : (node.key ?? null);
			selectedLabel.value = node.label;
			emit("update:modelValue", state.value);
			emit("change", data, node, instance, event);
			emit("node-click", data, node, instance, event);
		};

		onMounted(async () => {
			await loadData();
			watch(
				() => props.data,
				() => {
					if (!props.requestApi) {
						return loadData();
					}
				},
				{ deep: true }
			);
		});

		watch(
			() => props.modelValue,
			(newValue) => {
				state.value = newValue ?? null;
				if (typeof newValue === "string" || typeof newValue === "number") treeRef.value?.setCurrentKey(newValue);
			}
		);

		const elTreeProps = useProps(props, treeProps, ["data", "expandOnClickNode", "filterNodeMethod"]);
		const elTreeEmits = useEmits(treeEmits, emit, ["node-click"]);

		useRender(() => (
			<div
				class={["el-card fa-tree", `fa-tree-${_globalSize.value}`, { "fa-tree__fold": state.hamburger || fold.value }]}
				style={{ width: state.width }}
				vLoading={state.loading}
			>
				{(props.title !== undefined || props.hamburger) && (
					<div class="fa-tree__title">
						{props.title && <h4>{props.title}</h4>}
						{props.hamburger &&
							(state.hamburger ? (
								<ElIcon onClick={handleHamburgerClick} title="展开">
									<Expand />
								</ElIcon>
							) : (
								<ElIcon onClick={handleHamburgerClick} title="折叠">
									<Fold />
								</ElIcon>
							))}
					</div>
				)}
				{!props.hideFilter && (
					<ElInput
						class="fa-tree__search-input"
						vModel_trim={state.searchValue}
						placeholder={state.hamburger ? "关键字过滤" : "输入关键字进行过滤"}
						clearable={Boolean(state.searchValue)}
						onInput={(value) => treeRef.value?.filter(value)}
					/>
				)}
				<ElScrollbar class="fa-tree__scrollbar">
					<ElTree
						{...elTreeProps.value}
						{...elTreeEmits.value}
						ref={treeRef}
						data={state.treeData}
						expandOnClickNode={props.checkOnClickNode ? false : props.expandOnClickNode}
						filterNodeMethod={handleFilterNode}
						onNode-click={handleNodeClick}
					>
						{{
							default: ({ node, data }: { node: TreeNode; data: ElTreeOutput }) => (
								<span
									class="el-tree-node__label"
									title={data["all"] ? data.label : node.label}
									style={{ paddingLeft: fold.value ? "3px" : "" }}
								>
									<div>{data["all"] ? data.label : slots.label ? slots.label({ node, data }) : node.label}</div>
									{node.key && data.showQuantity ? <span>[{data.quantity}]</span> : null}
									{!data["all"] && slots.default && <span>{slots.default({ node, data })}</span>}
								</span>
							),
							...(slots.empty && { empty: (): VNode[] => slots.empty?.() ?? [] }),
						}}
					</ElTree>
				</ElScrollbar>
			</div>
		));

		return useExpose(expose, {
			/** @description 过滤所有树节点，过滤后的节点将被隐藏 */
			filter: computed(() => treeRef.value?.filter),
			/** @description 获取节点的唯一标识。 */
			getNodeKey: computed(() => treeRef.value?.getNodeKey),
			/** @description 获取指定节点的路径数据。 */
			getNodePath: computed(() => treeRef.value?.getNodePath),
			/** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
			updateKeyChildren: computed(() => treeRef.value?.updateKeyChildren),
			/** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
			getCheckedNodes: computed(() => treeRef.value?.getCheckedNodes),
			/** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
			setCheckedNodes: computed(() => treeRef.value?.setCheckedNodes),
			/** @description 	若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
			getCheckedKeys: computed(() => treeRef.value?.getCheckedKeys),
			/** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
			setCheckedKeys: computed(() => treeRef.value?.setCheckedKeys),
			/** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
			setChecked: computed(() => treeRef.value?.setChecked),
			/** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
			getHalfCheckedNodes: computed(() => treeRef.value?.getHalfCheckedNodes),
			/** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
			getHalfCheckedKeys: computed(() => treeRef.value?.getHalfCheckedKeys),
			/** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
			getCurrentKey: computed(() => treeRef.value?.getCurrentKey),
			/** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
			getCurrentNode: computed(() => treeRef.value?.getCurrentNode),
			/** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性 */
			setCurrentKey: computed(() => treeRef.value?.setCurrentKey),
			/** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
			setCurrentNode: computed(() => treeRef.value?.setCurrentNode),
			/** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
			getNode: computed(() => treeRef.value?.getNode),
			/** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
			remove: computed(() => treeRef.value?.remove),
			/** @description 为 Tree 中的一个节点追加一个子节点 */
			append: computed(() => treeRef.value?.append),
			/** @description 在 Tree 中给定节点前插入一个节点 */
			insertBefore: computed(() => treeRef.value?.insertBefore),
			/** @description 在 Tree 中给定节点后插入一个节点 */
			insertAfter: computed(() => treeRef.value?.insertAfter),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 刷新 */
			refresh: loadData,
		});
	},
});
