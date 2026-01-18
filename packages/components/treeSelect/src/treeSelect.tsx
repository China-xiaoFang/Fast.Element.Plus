import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { ElTreeSelect, selectEmits, treeEmits } from "element-plus";
import { type SelectComponentProps, SelectProps } from "@fast-element-plus/components/select/src/select";
import { treeProps } from "@fast-element-plus/components/tree/src/tree.props";
import { addUnit, consoleError, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isArray, isBoolean, isEqual, isFunction, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import type { ElSelectorOutput } from "@fast-element-plus/components/select";
import type { FilterValue, TreeNodeData } from "@fast-element-plus/components/tree/src/tree.props";
import type { ComponentInternalInstance, VNode } from "vue";

export const faTreeSelectProps = {
	...SelectProps,
	...treeProps,
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
		type: definePropType<string | number | boolean | object | (string | number | boolean | object)[]>([String, Number, Boolean, Object, Array]),
		default: undefined,
	},
	/** @description v-model:label绑定值 */
	label: definePropType<string | string[]>([String, Array]),
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
		type: definePropType<ElSelectorOutput[] | any[]>(Array),
		default: (): ElSelectorOutput[] | any[] => [],
	},
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: any) => Promise<ElSelectorOutput[] | any[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
};

export const faTreeSelectEmits = {
	...selectEmits,
	...treeEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: string | number | boolean | object | (string | number | boolean | object)[]): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string | string[]): boolean => isString(value) || isArray(value) || isNull(value),

	/** @description 数据改变 */
	dataChangeCallBack: (data: ElSelectorOutput[] | any[]): boolean => isArray(data),
	/** @description 改变 */
	change: (
		data: ElSelectorOutput | ElSelectorOutput[] | any | any[],
		value?: string | number | boolean | object | (string | number | boolean | object)[]
	): boolean => true,
};

type FaTreeSelectSlots = {
	/** @description 默认内容插槽 */
	default: { node: any; data: ElSelectorOutput };

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
};

export default defineComponent({
	name: "FaTreeSelect",
	props: faTreeSelectProps,
	emits: faTreeSelectEmits,
	slots: makeSlots<FaTreeSelectSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit);

		const state = reactive({
			value: withDefineType<string | number | boolean | object | (string | number | boolean | object)[]>(),
			loading: false,
			selectorData: withDefineType<ElSelectorOutput[]>([]),
			/** 首次出现 */
			debut: true,
			/** 回显 */
			echo: props.data?.length > 0 ? false : true,
			/** 下次刷新 */
			nextRefresh: false,
		});

		const treeSelectRef = ref<InstanceType<typeof ElTreeSelect>>();

		const handleData = (data: ElSelectorOutput[] | any[]): ElSelectorOutput[] => {
			return data
				?.map((m) => ({
					...m,
					value: m[props.nodeKey],
					label: isFunction(props.props.label) ? props.props.label(m) : m[props.props.label ?? "label"],
					hide: isFunction(props.props.hide) ? props.props.hide(m) : m[props.props.hide ?? "hide"],
					disabled: isFunction(props.props.disabled) ? props.props.disabled(m) : m[props.props.disabled ?? "disabled"],
					children: isFunction(props.props.children)
						? handleData(props.props.children(m))
						: handleData(m[props.props.children ?? "children"]),
				}))
				.filter((f) => !f.hide);
		};

		const loadData = async (): Promise<void> => {
			// 判断是否需要自动请求
			if (props.requestApi) {
				state.loading = true;
				const params = props.initParam ?? {};
				try {
					const resData = await props.requestApi(params);
					// 这里不允许回显了
					state.echo = false;
					state.selectorData = handleData(resData);
					emit("dataChangeCallBack", state.selectorData);
				} catch (error) {
					consoleError("FaTreeSelect", error);
					state.selectorData = [];
				} finally {
					state.loading = false;
				}
			} else {
				// 这里不允许回显了
				state.echo = false;
				state.selectorData = handleData(props.data);
			}
		};

		const handleFilterNode = (value: FilterValue, data: TreeNodeData, child: any): boolean => {
			if (!value) return true;
			let parentNode = child.parent,
				labels = [child.label],
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

		const handleChange = (value?: string | number | boolean | object | (string | number | boolean | object)[], data?: ElSelectorOutput): void => {
			// 判断是否为多选
			if (props.multiple) {
				// value 必然是数组
				const valueArr = value as (string | number | boolean | object)[];
				if (valueArr?.length === 0) {
					state.value = null;
					selectedLabel.value = null;
					emit("update:modelValue", null);
					emit("change", null, null);
					return;
				}
				const dataList = state.selectorData.filter((f) => valueArr.includes(f.value));
				state.value = value;
				selectedLabel.value = dataList.map((m) => m.label);
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
				selectedLabel.value = data.label;
				emit("update:modelValue", value);
				emit("change", data, value);
			}
		};

		const handleClear = (): void => {
			state.value = null;
			selectedLabel.value = null;
			emit("update:modelValue", null);
			emit("clear");
		};

		const handleNodeClick = (data: ElSelectorOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent): void => {
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
						if (!isArray(newValue)) {
							consoleError("FaTreeSelect", "当启用 multiple 时，传入的 modelValue 必须是Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							consoleError("FaTreeSelect", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
							return;
						}
						state.selectorData = newValue
							// 最大选项截取
							.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length)
							.map((item, index) => ({
								value: item,
								label: hasLabel ? props.label[index] : undefined,
							}));
					} else {
						if (isArray(newValue)) {
							consoleError("FaTreeSelect", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							consoleError("FaTreeSelect", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
							return;
						}
						state.selectorData = [
							{
								value: newValue,
								label: props.label,
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
				if (state.selectorData.length > 0) {
					if (props.multiple) {
						handleChange([state.selectorData[0].value]);
					} else {
						handleChange(state.selectorData[0].value, state.selectorData[0]);
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
				async () => {
					if (!props.requestApi) {
						await loadData();
					}
				},
				{ deep: true }
			);
		});

		const elTreeSelectProps = useProps(props, { ...SelectProps, ...treeProps }, [
			"modelValue",
			"popperClass",
			"lazy",
			"loading",
			"expandOnClickNode",
			"filterNodeMethod",
		]);
		const elTreeSelectEmits = useEmits({ ...selectEmits, ...treeEmits }, emit, ["update:modelValue", "clear", "visible-change", "node-click"]);

		useRender(() => (
			<ElTreeSelect
				{...elTreeSelectProps.value}
				{...elTreeSelectEmits.value}
				ref={treeSelectRef}
				class="fa-tree-select"
				popperClass={`fa-tree-select-dropdown ${props.popperClass}`}
				style={{ width: addUnit(props.width) }}
				vModel={state.value}
				lazy={false}
				loading={state.loading}
				data={state.selectorData}
				expandOnClickNode={props.checkOnClickNode ? false : props.expandOnClickNode}
				filterNodeMethod={handleFilterNode}
				onNodeClick={handleNodeClick}
				onClear={handleClear}
				onVisibleChange={handleVisibleChange}
			>
				{{
					...(slots.default && {
						default: ({ node, data }: { node: any; data: ElSelectorOutput }): VNode[] => slots.default({ node, data }),
					}),
					...(slots.header && { header: (): VNode[] => slots.header() }),
					...(slots.footer && { footer: (): VNode[] => slots.footer() }),
					...(slots.prefix && { prefix: (): VNode[] => slots.prefix() }),
					...(slots.empty && { empty: (): VNode[] => slots.empty() }),
					...(slots.tag && { tag: (): VNode[] => slots.tag() }),
					...(slots.loading && { loading: (): VNode[] => slots.loading() }),
					...(slots.label && {
						label: ({ label, value }: { label: string; value: string | number | boolean | object }): VNode[] =>
							slots.label({ label, value }),
					}),
				}}
			</ElTreeSelect>
		));

		return useExpose(expose, {
			// TODO：这里 EL 没有返回类型，等待下一个版本修复
			// /** @description 使选择器的输入框获取焦点 */
			// focus: computed(() => treeSelectRef.value?.focus),
			// /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
			// blur: computed(() => treeSelectRef.value?.blur),
			// /** @description 获取当前选中的标签 */
			// selectedLabel: computed(() => treeSelectRef.value?.selectedLabel),

			// /** @description 过滤所有树节点，过滤后的节点将被隐藏 */
			// filter: computed(() => treeSelectRef.value?.filter),
			// /** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
			// updateKeyChildren: computed(() => treeSelectRef.value?.updateKeyChildren),
			// /** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
			// getCheckedNodes: computed(() => treeSelectRef.value?.getCheckedNodes),
			// /** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
			// setCheckedNodes: computed(() => treeSelectRef.value?.setCheckedNodes),
			// /** @description 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
			// getCheckedKeys: computed(() => treeSelectRef.value?.getCheckedKeys),
			// /** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
			// setCheckedKeys: computed(() => treeSelectRef.value?.setCheckedKeys),
			// /** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
			// setChecked: computed(() => treeSelectRef.value?.setChecked),
			// /** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
			// getHalfCheckedNodes: computed(() => treeSelectRef.value?.getHalfCheckedNodes),
			// /** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
			// getHalfCheckedKeys: computed(() => treeSelectRef.value?.getHalfCheckedKeys),
			// /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
			// getCurrentKey: computed(() => treeSelectRef.value?.getCurrentKey),
			// /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
			// getCurrentNode: computed(() => treeSelectRef.value?.getCurrentNode),
			// /** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 */
			// setCurrentKey: computed(() => treeSelectRef.value?.setCurrentKey),
			// /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
			// setCurrentNode: computed(() => treeSelectRef.value?.setCurrentNode),
			// /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
			// getNode: computed(() => treeSelectRef.value?.getNode),
			// /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
			// remove: computed(() => treeSelectRef.value?.remove),
			// /** @description 为 Tree 中的一个节点追加一个子节点 */
			// append: computed(() => treeSelectRef.value?.append),
			// /** @description 在 Tree 中给定节点前插入一个节点 */
			// insertBefore: computed(() => treeSelectRef.value?.insertBefore),
			// /** @description 在 Tree 中给定节点后插入一个节点 */
			// insertAfter: computed(() => treeSelectRef.value?.insertAfter),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 刷新 */
			refresh: loadData,
			/** @description 设置选择 */
			setSelection: (value: string | number | boolean | object | (string | number | boolean | object)[]) => handleChange(value),
			/** @description 清除选择 */
			clearSelection: () => handleChange(null),
		});
	},
});
