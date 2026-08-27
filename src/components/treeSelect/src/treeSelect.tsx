import { useVModel } from "@vueuse/core";
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { ElTreeSelect, selectEmits, selectProps, treeEmits, treeProps } from "element-plus";
import { isArray, isBoolean, isEqual, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import { addCssUnit, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import { type SelectComponentProps } from "../../select/src/select";
import type { ElSelectorModelValue, ElSelectorOutput, ElSelectorValue } from "../../select";
import type { FilterNodeMethodFunction, FilterValue, TreeNode, TreeNodeData } from "../../tree/src/tree.props";
import type { SelectInstance, TreeInstance } from "element-plus";
import type { ComponentInternalInstance, VNode } from "vue";

/** 补充 Element Plus TreeSelect 运行时支持但类型声明缺失的 clear 事件。 */
type ElTreeSelectWithClearType = typeof ElTreeSelect &
	(new () => {
		$props: InstanceType<typeof ElTreeSelect>["$props"] & {
			onClear?: () => void;
		};
	});

const ElTreeSelectWithClear = ElTreeSelect as ElTreeSelectWithClearType;

/** Element Plus TreeSelect 运行时实际暴露的方法集合。 */
type ElTreeSelectExposes = Pick<SelectInstance, "focus" | "blur" | "selectedLabel"> &
	Pick<
		TreeInstance,
		| "filter"
		| "updateKeyChildren"
		| "getCheckedNodes"
		| "setCheckedNodes"
		| "getCheckedKeys"
		| "setCheckedKeys"
		| "setChecked"
		| "getHalfCheckedNodes"
		| "getHalfCheckedKeys"
		| "getCurrentKey"
		| "getCurrentNode"
		| "setCurrentKey"
		| "setCurrentNode"
		| "getNode"
		| "remove"
		| "append"
		| "insertBefore"
		| "insertAfter"
	> & {
		treeRef: TreeInstance;
		selectRef: SelectInstance;
	};

/** FaTreeSelect 的运行时 Props 定义。 */
export const faTreeSelectProps = {
	...selectProps,
	...treeProps,
	/** 树节点筛选方法。 */
	filterNodeMethod: {
		type: definePropType<FilterNodeMethodFunction>(Function),
	},
	/**
	 * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
	 * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
	 */
	cacheData: {
		type: definePropType<
			{
				value: string | number | boolean | object;
				currentLabel: string | number;
				isDisabled: boolean;
			}[]
		>(Array),
		default: [] as {
			value: string | number | boolean | object;
			currentLabel: string | number;
			isDisabled: boolean;
		}[],
	},
	/** @description whether Select is disabled 重载使其支持 ElForm*/
	disabled: {
		type: Boolean,
		default: undefined,
	},
	/** @description displayed text while loading data from server, default is 'Loading' */
	loadingText: {
		type: String,
		default: "加载中...",
	},
	/** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
	noMatchText: {
		type: String,
		default: "暂无匹配的数据",
	},
	/** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
	noDataText: {
		type: String,
		default: "暂无数据",
	},
	/** @description whether to collapse tags to a text when multiple selecting */
	collapseTags: {
		type: Boolean,
		default: true,
	},
	/** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
	collapseTagsTooltip: {
		type: Boolean,
		default: true,
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
	/** @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 */
	expandOnClickNode: Boolean,
	/** @description 点击折叠节点，需要开启 'expandOnClickNode' */
	collapseOnClickNode: Boolean,
	/** @description v-model绑定值 */
	modelValue: {
		type: definePropType<ElSelectorModelValue>([String, Number, Boolean, Object, Array]),
		default: undefined,
	},
	/** @description v-model:label绑定值 */
	label: definePropType<string | string[] | null>([String, Array]),
	/** @description 宽度 */
	width: {
		type: [String, Number],
		default: "100%",
	},
	/** @description 更多细节，只有使用slot的时候有用 */
	moreDetail: Boolean,
	/** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
	lazy: {
		type: Boolean,
		default: true,
	},
	/** @description 默认选中。不能和懒加载一起使用 */
	defaultSelected: Boolean,
	/** @description 配置选项 */
	props: {
		type: definePropType<SelectComponentProps>(Object),
		default: (): Partial<SelectComponentProps> => ({
			label: "label",
			hide: "hide",
			disabled: "disabled",
			children: "children",
		}),
	},
	/** @description 下拉框数据 */
	data: {
		type: definePropType<ElSelectorOutput[]>(Array),
		default: (): ElSelectorOutput[] => [],
	},
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: unknown) => Promise<ElSelectorOutput[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<unknown>([String, Number, Object]),
};

/** FaTreeSelect 的运行时 Emits 定义。 */
export const faTreeSelectEmits = {
	...selectEmits,
	...treeEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: ElSelectorModelValue): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),

	/** @description 数据改变 */
	dataChangeCallBack: (data: ElSelectorOutput[]): boolean => isArray(data),
	/** @description 改变 */
	change: (_data: unknown, _value?: ElSelectorModelValue): boolean => true,
	/** @description 节点点击 */
	"node-click": (_data: ElSelectorOutput, _node: TreeNode, _instance: ComponentInternalInstance, _event: MouseEvent): boolean => true,
};

/** FaTreeSelect 的插槽参数。 */
export interface FaTreeSelectSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: { node: TreeNode; data: ElSelectorOutput };

	/** @description 下拉列表顶部的内容 */
	header: never;
	/** @description 下拉列表底部的内容 */
	footer: never;
	/** @description Select 组件头部内容 */
	prefix: never;
	/** @description 无选项时的列表 */
	empty: never;
	/** @description select 组件自定义标签内容 */
	tag: never;
	/** @description select 组件自定义 loading内容 */
	loading: never;
	/** @description select 组件自定义标签内容 */
	label: { label: string; value: string | number | boolean | object };
}

export default defineComponent({
	name: "FaTreeSelect",
	props: faTreeSelectProps,
	emits: faTreeSelectEmits,
	slots: makeSlots<FaTreeSelectSlots>(),
	setup(props, { slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });

		const state = reactive({
			value: withDefineType<ElSelectorModelValue>(),
			loading: false,
			selectorData: withDefineType<ElSelectorOutput[]>([]),
			/** 首次出现 */
			debut: true,
			/** 回显 */
			echo: props.data?.length > 0 ? false : true,
			/** 下次刷新 */
			nextRefresh: false,
		});

		const treeSelectRef = ref<ElTreeSelectExposes>();
		let requestVersion = 0;

		const handleData = (data: ElSelectorOutput[]): ElSelectorOutput[] => {
			return data
				.map((item): ElSelectorOutput => {
					const value = item[props.nodeKey];
					const label = typeof props.props.label === "function" ? props.props.label(item) : item[props.props.label ?? "label"];
					const hide = typeof props.props.hide === "function" ? props.props.hide(item) : item[props.props.hide ?? "hide"];
					const disabled =
						typeof props.props.disabled === "function" ? props.props.disabled(item) : item[props.props.disabled ?? "disabled"];
					const children = item[props.props.children ?? "children"];
					const selectorValue: ElSelectorValue | undefined =
						value !== null &&
						(typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "object")
							? value
							: undefined;
					return {
						...item,
						children: Array.isArray(children) ? handleData(children as ElSelectorOutput[]) : [],
						disabled: typeof disabled === "boolean" ? disabled : undefined,
						hide: typeof hide === "boolean" ? hide : undefined,
						label: typeof label === "string" ? label : undefined,
						value: selectorValue,
					};
				})
				.filter((item) => item.hide !== true);
		};

		const loadData = async (): Promise<void> => {
			const currentRequestVersion = ++requestVersion;
			// 判断是否需要自动请求
			if (props.requestApi) {
				state.loading = true;
				const params = props.initParam ?? {};
				try {
					const resData = await props.requestApi(params);
					if (currentRequestVersion !== requestVersion) return;
					// 这里不允许回显了
					state.echo = false;
					state.selectorData = handleData(resData);
					emit("dataChangeCallBack", state.selectorData);
				} catch (error) {
					if (currentRequestVersion !== requestVersion) return;
					state.selectorData = [];
					throw error;
				} finally {
					if (currentRequestVersion === requestVersion) state.loading = false;
				}
			} else {
				if (currentRequestVersion !== requestVersion) return;
				// 这里不允许回显了
				state.echo = false;
				state.selectorData = handleData(props.data);
			}
		};

		const handleFilterNode = (value: FilterValue, data: TreeNodeData, child: TreeNode): boolean => {
			if (!value) return true;
			let parentNode = child.parent,
				labels = [child.label],
				level = 1;
			while (level < child.level && parentNode) {
				labels = [...labels, parentNode.label];
				parentNode = parentNode.parent;
				level++;
			}
			const filterText = typeof value === "string" || typeof value === "number" ? String(value) : "";
			const result = labels.some((label) => label.includes(filterText));
			if (props.filterNodeMethod) {
				return result && props.filterNodeMethod(value, data, child);
			}
			return result;
		};

		const handleChange = (value?: ElSelectorModelValue, data?: ElSelectorOutput): void => {
			// 判断是否为多选
			if (props.multiple) {
				// value 必然是数组
				const valueArr = Array.isArray(value) ? value : [];
				if (valueArr?.length === 0) {
					state.value = null;
					selectedLabel.value = null;
					emit("update:modelValue", null);
					emit("change", null, null);
					return;
				}
				const dataList = state.selectorData.filter((item) => item.value !== undefined && valueArr.includes(item.value));
				state.value = value;
				selectedLabel.value = dataList.map((item) => item.label ?? "");
				emit("update:modelValue", value);
				emit("change", dataList, value);
			} else {
				// value 必然不是数组
				if (isNil(value)) {
					state.value = null;
					selectedLabel.value = null;
					emit("update:modelValue", null);
					emit("change", null, null);
					return;
				}
				data ??= state.selectorData.find((f) => f.value === value);
				state.value = value;
				selectedLabel.value = data?.label ?? null;
				emit("update:modelValue", value);
				emit("change", data ?? null, value);
			}
		};

		const handleClear = (): void => {
			state.value = null;
			selectedLabel.value = null;
			emit("update:modelValue", null);
			emit("clear");
		};

		const handleNodeClick = (data: ElSelectorOutput, node: TreeNode, instance: ComponentInternalInstance | null, event: MouseEvent): void => {
			if (!instance) return;
			// 判断是否开启点击展开节点，并且节点是折叠状态，则自动展开，否则需要点击箭头图标才能折叠或开启 'collapseOnClickNode'
			if (props.expandOnClickNode) {
				if (!node.expanded) {
					node.expand();
				} else if (node.expanded && props.collapseOnClickNode) {
					node.collapse();
				}
			}
			// 判断是否开启了 checkStrictly
			if (props.checkStrictly) {
				handleChange(data.value, data);
			} else {
				if (node.isLeaf) {
					handleChange(data.value, data);
				}
			}
			emit("node-click", data, node, instance, event);
		};

		/**
		 * 下拉框出现/隐藏时触发
		 */
		const handleVisibleChange = async (visible: boolean): Promise<void> => {
			if (visible) {
				if (state.debut) {
					// 首次出现
					state.debut = false;
					// 懒加载
					props.lazy && (await loadData());
				} else {
					// 判断再次出现是否需要刷新数据
					if (state.nextRefresh) {
						state.nextRefresh = false;
						await loadData();
					}
				}
			}
			emit("visible-change", visible);
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				if (state.echo && !isNil(newValue)) {
					const hasLabel = !isNil(props.label);
					// 判断是否为多选
					if (props.multiple) {
						// 判断是否为数组
						if (!Array.isArray(newValue)) {
							console.error("[Fast:FaTreeSelect]", "当启用 multiple 时，传入的 modelValue 必须是 Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							console.error("[Fast:FaTreeSelect]", "当启用 multiple 时，传入的 modelValue:label 必须是 Array。");
							return;
						}
						state.selectorData = newValue
							// 最大选项截取
							.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length)
							.map((item, index) => {
								const value: unknown = item;
								const label: unknown = Array.isArray(props.label) ? props.label[index] : undefined;
								const selectorValue: ElSelectorValue | undefined =
									value !== null &&
									(typeof value === "string" ||
										typeof value === "number" ||
										typeof value === "boolean" ||
										typeof value === "object")
										? value
										: undefined;
								return {
									value: selectorValue,
									label: hasLabel && typeof label === "string" ? label : undefined,
								};
							});
					} else {
						if (Array.isArray(newValue)) {
							console.error("[Fast:FaTreeSelect]", "当禁用 multiple 时，传入的 modelValue 不能是 Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							console.error("[Fast:FaTreeSelect]", "当禁用 multiple 时，传入的 modelValue:label 不能是 Array。");
							return;
						}
						state.selectorData = [
							{
								value: newValue,
								label: typeof props.label === "string" ? props.label : undefined,
							},
						];
					}
				}
				state.value = newValue;
			},
			{
				immediate: true,
			}
		);

		onMounted(async () => {
			if (props.defaultSelected) {
				await loadData();
				const firstItem = state.selectorData[0];
				if (firstItem?.value !== undefined) {
					if (props.multiple) {
						handleChange([firstItem.value]);
					} else {
						handleChange(firstItem.value, firstItem);
					}
				}
			}
			// 判断是否为本地数据
			else if (!props.requestApi && props.data?.length > 0) {
				state.debut = false;
				await loadData();
			}
			// 判断是否非默认选中,且未启用懒加载
			else if (!props.lazy) {
				await loadData();
			}
			watch(
				() => props.initParam,
				(newValue, oldValue) => {
					if (!isEqual(newValue, oldValue)) {
						state.nextRefresh = true;
						if (!isNil(state.value)) {
							handleChange();
						}
					}
				}
			);
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

		const elTreeSelectProps = useProps(props, { ...selectProps, ...treeProps }, [
			"modelValue",
			"popperClass",
			"lazy",
			"loading",
			"expandOnClickNode",
			"filterNodeMethod",
			"props",
		]);
		const elTreeSelectEmits = useEmits({ ...selectEmits, ...treeEmits }, emit, ["update:modelValue", "clear", "visible-change", "node-click"]);

		useRender(() => (
			<ElTreeSelectWithClear
				{...elTreeSelectProps.value}
				{...elTreeSelectEmits.value}
				ref={treeSelectRef}
				class="fa-tree-select"
				popperClass={["fa-tree-select-dropdown", props.popperClass]}
				style={{ width: addCssUnit(props.width) }}
				vModel={state.value}
				lazy={false}
				loading={state.loading}
				data={state.selectorData}
				expandOnClickNode={props.checkOnClickNode ? false : props.expandOnClickNode}
				filterNodeMethod={handleFilterNode as typeof props.filterNodeMethod}
				onNode-click={handleNodeClick}
				onClear={handleClear}
				onVisible-change={handleVisibleChange}
			>
				{{
					...(slots.default && {
						default: ({ node, data }: { node: TreeNode; data: ElSelectorOutput }): VNode[] => slots.default?.({ node, data }) ?? [],
					}),
					...(slots.header && { header: (): VNode[] => slots.header?.() ?? [] }),
					...(slots.footer && { footer: (): VNode[] => slots.footer?.() ?? [] }),
					...(slots.prefix && { prefix: (): VNode[] => slots.prefix?.() ?? [] }),
					...(slots.empty && { empty: (): VNode[] => slots.empty?.() ?? [] }),
					...(slots.tag && { tag: (): VNode[] => slots.tag?.() ?? [] }),
					...(slots.loading && { loading: (): VNode[] => slots.loading?.() ?? [] }),
					...(slots.label && {
						label: ({ label, value }: { label: string; value: string | number | boolean | object }): VNode[] =>
							slots.label?.({ label, value }) ?? [],
					}),
				}}
			</ElTreeSelectWithClear>
		));

		return useExpose(expose, {
			/** @description 使选择器的输入框获取焦点。 */
			focus: computed(() => treeSelectRef.value?.focus),
			/** @description 使选择器的输入框失去焦点，并隐藏下拉框。 */
			blur: computed(() => treeSelectRef.value?.blur),
			/** @description 获取当前选中的标签。 */
			selectedLabel: computed(() => treeSelectRef.value?.selectedLabel),
			/** @description 过滤所有树节点，过滤后的节点将被隐藏。 */
			filter: computed(() => treeSelectRef.value?.filter),
			/** @description 为节点设置新数据，只有设置 node-key 时可用。 */
			updateKeyChildren: computed(() => treeSelectRef.value?.updateKeyChildren),
			/** @description 获取当前选中的节点。 */
			getCheckedNodes: computed(() => treeSelectRef.value?.getCheckedNodes),
			/** @description 设置当前选中的节点。 */
			setCheckedNodes: computed(() => treeSelectRef.value?.setCheckedNodes),
			/** @description 获取当前选中的节点 Key。 */
			getCheckedKeys: computed(() => treeSelectRef.value?.getCheckedKeys),
			/** @description 设置当前选中的节点 Key。 */
			setCheckedKeys: computed(() => treeSelectRef.value?.setCheckedKeys),
			/** @description 设置节点选中状态。 */
			setChecked: computed(() => treeSelectRef.value?.setChecked),
			/** @description 获取当前半选中的节点。 */
			getHalfCheckedNodes: computed(() => treeSelectRef.value?.getHalfCheckedNodes),
			/** @description 获取当前半选中的节点 Key。 */
			getHalfCheckedKeys: computed(() => treeSelectRef.value?.getHalfCheckedKeys),
			/** @description 获取当前节点 Key。 */
			getCurrentKey: computed(() => treeSelectRef.value?.getCurrentKey),
			/** @description 获取当前节点。 */
			getCurrentNode: computed(() => treeSelectRef.value?.getCurrentNode),
			/** @description 设置当前节点 Key。 */
			setCurrentKey: computed(() => treeSelectRef.value?.setCurrentKey),
			/** @description 设置当前节点。 */
			setCurrentNode: computed(() => treeSelectRef.value?.setCurrentNode),
			/** @description 根据数据或 Key 获取节点。 */
			getNode: computed(() => treeSelectRef.value?.getNode),
			/** @description 删除节点。 */
			remove: computed(() => treeSelectRef.value?.remove),
			/** @description 追加子节点。 */
			append: computed(() => treeSelectRef.value?.append),
			/** @description 在指定节点前插入节点。 */
			insertBefore: computed(() => treeSelectRef.value?.insertBefore),
			/** @description 在指定节点后插入节点。 */
			insertAfter: computed(() => treeSelectRef.value?.insertAfter),
			/** @description Element Plus Tree 实例。 */
			treeRef: computed(() => treeSelectRef.value?.treeRef),
			/** @description Element Plus Select 实例。 */
			selectRef: computed(() => treeSelectRef.value?.selectRef),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 刷新 */
			refresh: loadData,
			/** @description 设置选择 */
			setSelection: (value: Exclude<ElSelectorModelValue, null | undefined>) => handleChange(value),
			/** @description 清除选择 */
			clearSelection: () => handleChange(null),
		});
	},
});
