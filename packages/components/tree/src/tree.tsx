import { computed, defineComponent, nextTick, onMounted, reactive, ref, watch } from "vue";
import { ElIcon, ElInput, ElScrollbar, ElTree, treeEmits, useGlobalSize } from "element-plus";
import { Expand, Fold } from "@element-plus/icons-vue";
import { addUnit, consoleError, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isArray, isBoolean, isNull, isNumber, isObject, isString } from "lodash-unified";
import { treeProps } from "./tree.props";
import type { FilterValue, TreeNodeData } from "./tree.props";
import type { ElTreeOutput } from "./tree.type";
import type { ComponentInternalInstance, VNode } from "vue";

export const faTreeProps = {
	...treeProps,
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
		type: definePropType<string | number | boolean | object>([String, Number, Boolean, Object]),
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
		type: definePropType<string | number | boolean | object>([String, Number, Boolean, Object]),
		default: undefined,
	},
	/** @description 树形数据 */
	data: {
		type: definePropType<ElTreeOutput[]>(Array),
		default: (): ElTreeOutput[] => [],
	},
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: any) => Promise<ElTreeOutput[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
};

export const faTreeEmits = {
	...treeEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: string | number | boolean | object): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string): boolean => isString(value) || isNull(value),
	/** @description 数据改变 */
	dataChangeCallBack: (data: ElTreeOutput[]): boolean => isArray(data),
	/** @description 改变 */
	change: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent): boolean => true,
};

type FaTreeSlots = {
	/** @description 默认内容插槽 */
	default: { node: any; data: ElTreeOutput };
	/** @description 当数据为空时自定义的内容 */
	empty: never;
	/** @description 显示内容插槽 */
	label: { node: any; data: ElTreeOutput };
};

export default defineComponent({
	name: "FaTree",
	props: faTreeProps,
	emits: faTreeEmits,
	slots: makeSlots<FaTreeSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });
		const _globalSize = useGlobalSize();

		const state = reactive({
			value: withDefineType<string | number | boolean | object>(),
			loading: false,
			searchValue: withDefineType<string>(),
			orgTreeData: withDefineType<ElTreeOutput[]>([]),
			treeData: withDefineType<ElTreeOutput[]>([]),
			hamburger: props.hamburger || false,
			width: computed(() => {
				if (state.hamburger) {
					return "130px";
				} else {
					const width = addUnit(props.width);
					if (_globalSize.value === "small") {
						return `calc(${width} * 0.9)`;
					} else {
						return width;
					}
				}
			}),
		});

		/** @description 只有一层节点 */
		const fold = computed<boolean>(() => [...state.orgTreeData].filter((f) => f[props.props.children]?.length > 0).length === 0);

		const treeRef = ref<InstanceType<typeof ElTree>>();

		const loadData = async (): Promise<void> => {
			let curSelectedData;
			if (props.nodeKey) {
				// 记录原本选中的值
				curSelectedData = treeRef.value.getCurrentKey();
			}
			let treeData: ElTreeOutput[] = [];
			// 判断是否需要自动请求
			if (props.requestApi) {
				state.loading = true;
				const params = { ...(props.initParam ?? {}), searchValue: state.searchValue };
				try {
					treeData = await props.requestApi(params);
				} catch (error) {
					consoleError("FaTree", error);
				} finally {
					state.loading = false;
				}
			} else {
				treeData = props.data;
			}
			if (!props.hideAll) {
				treeData.unshift({ [props.nodeKey]: props.allValue, label: "全部", value: null, all: true } as any);
			}
			state.orgTreeData = treeData;
			state.treeData = treeData;
			emit("dataChangeCallBack", state.treeData);
			if (props.nodeKey && curSelectedData) {
				nextTick(() => {
					// 设置原本选中的值
					treeRef.value.setCurrentKey(curSelectedData);
				});
			} else {
				if (props.defaultSelection) {
					nextTick(() => {
						treeRef.value.setCurrentKey(props.defaultSelection);
					});
				}
			}
		};

		const handleHamburgerClick = (): void => {
			if (state.hamburger) {
				state.treeData = state.orgTreeData;
			} else {
				// 折叠只显示一级数据
				state.treeData = state.orgTreeData.map((m) => ({ ...m, [props.props.children]: [] }));
			}
			state.hamburger = !state.hamburger;
		};

		const handleFilterNode = (value: FilterValue, data: TreeNodeData, child: any): boolean => {
			if (!value) return true;
			let parentNode = child.parent,
				labels = data.all ? [data.label] : [child.label],
				level = 1;
			while (level < child.level) {
				labels = [...labels, parentNode.label];
				parentNode = parentNode.parent;
				level++;
			}
			const result = labels.some((label) => label.indexOf(value) !== -1);
			if (props.filterNodeMethod) {
				return result && props.filterNodeMethod(value, data, child);
			}
			return result;
		};

		const handleNodeClick = (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent): void => {
			// 判断是否开启点击展开节点，并且节点是折叠状态，则自动展开，否则需要点击箭头图标才能折叠或开启 'collapseOnClickNode'
			if (props.expandOnClickNode) {
				if (!node.expanded) {
					node.expand();
				} else if (node.expanded && props.collapseOnClickNode) {
					node.collapse();
				}
			}
			state.value = node.key;
			selectedLabel.value = node.label;
			emit("update:modelValue", state.value);
			emit("change", data, node, instance, event);
			emit("node-click", data, node, instance, event);
		};

		onMounted(async () => {
			await loadData();
			watch(
				() => props.data,
				async () => {
					if (!props.requestApi) {
						await loadData();
					}
				},
				{ deep: true }
			);
		});

		const elTreeProps = useProps(props, treeProps, ["data", "expandOnClickNode", "filterNodeMethod"]);
		const elTreeEmits = useEmits(treeEmits, emit, ["node-click"]);

		useRender(() => (
			<div
				class={["el-card fa-tree", `fa-tree-${_globalSize.value}`, { "fa-tree__fold": state.hamburger || fold.value }]}
				style={{ width: state.width }}
				vLoading={state.loading}
			>
				{(props.title || props.hamburger) && (
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
						clearable
						onInput={(value) => treeRef.value.filter(value)}
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
						onNodeClick={handleNodeClick}
					>
						{{
							default: ({ node, data }: { node: any; data: ElTreeOutput }) => (
								<span
									class="el-tree-node__label"
									title={data?.all ? data.label : node.label}
									style={{ paddingLeft: fold.value ? "3px" : "" }}
								>
									<div>{data?.all ? data.label : slots.label ? slots.label({ node, data }) : node.label}</div>
									{node.key && data.showQuantity ? <span>[{data.quantity}]</span> : null}
									{!data?.all && slots.default && <span>{slots.default({ node, data })}</span>}
								</span>
							),
							...(slots.empty && { empty: (): VNode[] => slots.empty() }),
						}}
					</ElTree>
				</ElScrollbar>
			</div>
		));

		return useExpose(expose, {
			/** @description 过滤所有树节点，过滤后的节点将被隐藏 */
			filter: computed(() => treeRef.value?.filter),
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
