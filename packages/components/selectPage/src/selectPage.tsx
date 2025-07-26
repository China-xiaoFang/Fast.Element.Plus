import { Fragment, computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { ElButton, ElInput, ElOption, ElPagination, ElSelect, useGlobalSize } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { FaSelectOption, SelectProps } from "@fast-element-plus/components/select";
import { type SelectComponentProps } from "@fast-element-plus/components/select/src/select";
import { addUnit, consoleError, definePropType, makeSlots, useExpose, useProps, useRender, withDefineType } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isArray, isBoolean, isEqual, isFunction, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import type { ElSelectorOutput } from "@fast-element-plus/components/select";
import type { PagedInput, PagedResult } from "@fast-element-plus/components/table";
import type { VNode } from "vue";

export const faSelectPageProps = {
	...SelectProps,
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
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
};

export const faSelectPageEmits = {
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
	): boolean =>
		(isObject(data) || isArray(data) || isNull(data)) &&
		(isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value)),
	/** @description 下拉框出现/隐藏时触发 */
	visibleChange: (visible: boolean): boolean => isBoolean(visible),
	/** @description 多选模式下移除tag时触发 */
	removeTag: (tagValue: any): boolean => isString(tagValue) || isNumber(tagValue) || isBoolean(tagValue) || isObject(tagValue) || isArray(tagValue),
	/** @description 可清空的单选模式下用户点击清空按钮时触发 */
	clear: (): boolean => true,
	/** @description 当 input 失去焦点时触发 */
	blur: (event: FocusEvent): boolean => event instanceof FocusEvent,
	/** @description 当 input 获得焦点时触发 */
	focus: (event: FocusEvent): boolean => event instanceof FocusEvent,
};

type FaSelectPageSlots = {
	/** @description FaSelectOption 默认内容插槽 */
	default: ElSelectorOutput;
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
	name: "FaSelectPage",
	props: faSelectPageProps,
	emits: faSelectPageEmits,
	slots: makeSlots<FaSelectPageSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });
		const _globalSize = useGlobalSize();

		const state = reactive({
			value: withDefineType<string | number | boolean | object | (string | number | boolean | object)[]>(),
			loading: false,
			selectorData: withDefineType<ElSelectorOutput[]>([]),
			/** 选中的数据 */
			selectedList: withDefineType<ElSelectorOutput[]>([]),
			/** 首次出现 */
			debut: true,
			/** 回显 */
			echo: true,
			/** 下次刷新 */
			nextRefresh: false,
			pageIndex: 1,
			pageSize: 15,
			totalRows: 0,
			searchValue: undefined,
			defaultSelectorData: withDefineType<ElSelectorOutput>(),
		});

		const selectRef = ref<InstanceType<typeof ElSelect>>();

		const handleData = (data: ElSelectorOutput[]): ElSelectorOutput[] => {
			return data
				?.map((m) => ({
					...m,
					value: m[props.valueKey],
					label: isFunction(props.props.label) ? props.props.label(m) : m[props.props.label ?? "label"],
					hide: isFunction(props.props.hide) ? props.props.hide(m) : m[props.props.hide ?? "hide"],
					disabled: isFunction(props.props.disabled) ? props.props.disabled(m) : m[props.props.disabled ?? "disabled"],
					children: isFunction(props.props.children)
						? handleData(props.props.children(m))
						: handleData(m[props.props.children ?? "children"]),
				}))
				.filter((f) => !f.hide);
		};

		const loadData = async (pageIndex?: number): Promise<void> => {
			state.loading = true;
			state.pageIndex = pageIndex ?? state.pageIndex;
			const params: PagedInput = {
				...(props.initParam ?? {}),
				pageIndex: state.pageIndex,
				pageSize: state.pageSize,
				searchValue: state.searchValue,
			};
			try {
				const resData = await props.requestApi(params);
				// 这里不允许回显了
				state.echo = false;
				state.totalRows = resData.totalRows;
				state.selectorData = handleData(resData.rows);
				emit("dataChangeCallBack", state.selectorData);
			} catch (error) {
				consoleError("FaSelectPage", error);
				state.pageIndex = 1;
				state.totalRows = 0;
				state.selectorData = [];
			} finally {
				state.loading = false;
			}
		};

		const handleChange = (value?: string | number | boolean | object | (string | number | boolean | object)[]): void => {
			// 判断是否为多选
			if (props.multiple) {
				// value 必然是数组
				const valueArr = value as (string | number | boolean | object)[];
				if (valueArr?.length === 0) {
					state.value = null;
					selectedLabel.value = null;
					state.selectedList = [];
					emit("update:modelValue", null);
					emit("change", null, null);
					return;
				}
				const dataList = state.selectorData.filter((f) => valueArr.includes(f.value));
				state.value = value;
				selectedLabel.value = dataList.map((m) => m.label);
				state.selectedList = [...state.selectedList.filter((f) => !dataList.some((s) => s.value === f.value)), ...dataList]
					// 过滤不存在的
					.filter((f) => valueArr.includes(f.value));
				emit("update:modelValue", value);
				emit("change", dataList, value);
			} else {
				// value 必然不是数组
				if (isNil(value)) {
					state.value = null;
					selectedLabel.value = null;
					state.selectedList = [];
					emit("update:modelValue", null);
					emit("change", null, null);
					return;
				}
				const data = state.selectorData.find((f) => f.value === value);
				state.value = value;
				selectedLabel.value = data.label;
				if (!state.selectedList.some((s) => s.value === value)) {
					state.selectedList = [data];
				}
				emit("update:modelValue", value);
				emit("change", data, value);
			}
		};

		const handleClear = (): void => {
			state.value = null;
			selectedLabel.value = null;
			state.selectedList = [];
			emit("clear");
		};

		const handleVisibleChange = async (visible: boolean): Promise<void> => {
			if (visible) {
				if (state.debut) {
					// 首次出现
					state.debut = false;
					await loadData();
				} else {
					// 判断再次出现是否需要刷新数据
					if (state.nextRefresh) {
						state.nextRefresh = false;
						await loadData();
					}
				}
			}
			emit("visibleChange", visible);
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				if (state.echo && !isNil(newValue)) {
					const hasLabel = !isNil(props.label);
					// 判断是否为多选
					if (props.multiple) {
						if (!isArray(newValue)) {
							consoleError("FaSelectPage", "当启用 multiple 时，传入的 modelValue 必须是Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							consoleError("FaSelectPage", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
							return;
						}
						state.selectedList = newValue
							// 最大选项截取
							.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length)
							.map((item, index) => ({
								value: item,
								label: hasLabel ? props.label[index] : undefined,
							}));
					} else {
						if (isArray(newValue)) {
							consoleError("FaSelectPage", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							consoleError("FaSelectPage", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
							return;
						}
						state.defaultSelectorData = {
							value: newValue,
							label: props.label,
						};
					}
				}
				state.value = newValue;
			},
			{
				immediate: true,
			}
		);

		onMounted(() => {
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
		});

		const elSelectProps = useProps(props, SelectProps, ["modelValue", "popperClass", "loading"]);

		useRender(() => (
			<ElSelect
				{...elSelectProps.value}
				ref={selectRef}
				class="fa-select-page"
				popperClass={`fa-select-page-dropdown fa-select-page-dropdown-${_globalSize.value} ${props.popperClass}`}
				style={{ width: addUnit(props.width) }}
				vModel={state.value}
				loading={state.loading}
				onChange={handleChange}
				onClear={handleClear}
				onVisibleChange={handleVisibleChange}
				onRemoveTag={(tagValue: any) => emit("removeTag", tagValue)}
				onBlur={(event: FocusEvent) => emit("blur", event)}
				onFocus={(event: FocusEvent) => emit("focus", event)}
			>
				{{
					default: (): VNode[] =>
						state.selectorData.map((item) => (
							<FaSelectOption vSlots={{ default: slots.default }} data={item} moreDetail={props.moreDetail} />
						)),
					header: (): VNode[] => (
						<Fragment>
							{state.defaultSelectorData && (
								<ElOption
									class="fa-select-page-dropdown__default-selector"
									value={state.defaultSelectorData.value}
									label={state.defaultSelectorData.label}
									disabled={true}
								>
									<span>{state.defaultSelectorData.label}</span>
									<span>Default</span>
								</ElOption>
							)}
							{
								<ElInput
									class="fa-select-page-dropdown__search-input"
									clearable
									placeholder="请输入关键字搜索"
									vModel_trim={state.searchValue}
									onKeyup={(event: KeyboardEvent) => {
										if (event.key === "Enter") {
											loadData(1);
										}
									}}
								>
									{{
										append: () => <ElButton loading={state.loading} icon={Search} onClick={() => loadData(1)}></ElButton>,
									}}
								</ElInput>
							}

							{slots.header && slots.header()}
						</Fragment>
					),
					footer: () => (
						<Fragment>
							<ElPagination
								class="fa-select-page-dropdown__pagination"
								size="small"
								currentPage={state.pageIndex}
								pageSize={state.pageSize}
								total={state.totalRows}
								layout="prev, pager, next, total"
								pagerCount={5}
								onCurrentChange={loadData}
							/>
							{slots.footer && slots.footer()}
						</Fragment>
					),
					...(slots.prefix && { prefix: (): VNode[] => slots.prefix() }),
					...(slots.empty && { empty: (): VNode[] => slots.empty() }),
					...(slots.tag && { tag: (): VNode[] => slots.tag() }),
					...(slots.loading && { loading: (): VNode[] => slots.loading() }),
					...(props.multiple
						? {
								label: ({ label, value }: { label: string; value: string | number | boolean | object }): VNode[] => {
									const selectedData = state.selectedList.find((f) => f.value === value);
									if (slots.label) {
										return slots.label({ label: selectedData?.label, value: isNil(selectedData) ? value : selectedData?.value });
									}
									return selectedData && <span class="el-select__tags-text">{selectedData.label}</span>;
								},
							}
						: slots.label && {
								label: ({ label, value }: { label: string; value: string | number | boolean | object }): VNode[] =>
									slots.label({ label, value }),
							}),
				}}
			</ElSelect>
		));

		return useExpose(expose, {
			/** @description 使选择器的输入框获取焦点 */
			focus: computed(() => selectRef.value?.focus),
			/** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
			blur: computed(() => selectRef.value?.blur),
			/** @description 获取当前选中的标签 */
			selectedLabel: computed(() => selectRef.value?.selectedLabel),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 选中的数据 */
			selectedList: computed(() => state.selectedList),
			/** @description 刷新 */
			refresh: loadData,
			/** @description 设置选择 */
			setSelection: (value: string | number | boolean | object | (string | number | boolean | object)[]) => handleChange(value),
			/** @description 清除选择 */
			clearSelection: () => handleChange(null),
		});
	},
});
