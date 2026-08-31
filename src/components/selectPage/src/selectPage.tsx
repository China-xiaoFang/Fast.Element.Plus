import { useVModel } from "@vueuse/core";
import { Fragment, computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import { ElButton, ElInput, ElOption, ElPagination, ElSelect, selectEmits, selectProps, useGlobalSize } from "element-plus";
import { isArray, isBoolean, isEqual, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import { addCssUnit, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import { FaSelectOption } from "../../select";
import type { VNode } from "vue";
import type { ElSelectorModelValue, ElSelectorOutput, ElSelectorValue } from "../../select";
import type { SelectComponentProps } from "../../select/src/select";
import type { PagedInput, PagedResult } from "../../table";

/** FaSelectPage 的运行时 Props 定义。 */
export const faSelectPageProps = {
	...selectProps,
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
		required: true as const,
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | PagedInput>([String, Number, Object]),
};

/** FaSelectPage 的运行时 Emits 定义。 */
export const faSelectPageEmits = {
	...selectEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: ElSelectorModelValue): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNil(value),
	/** @description 选中数据改变 */
	change: (_data: ElSelectorOutput | ElSelectorOutput[] | null, _value?: ElSelectorModelValue): boolean => true,
	/** @description v-model:label 回调 */
	"update:label": (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description 数据改变 */
	dataChangeCallBack: (data: ElSelectorOutput[]): boolean => isArray(data),
};

/** FaSelectPage 的插槽参数。 */
export interface FaSelectPageSlots extends Record<string, unknown> {
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
}

export default defineComponent({
	name: "FaSelectPage",
	props: faSelectPageProps,
	emits: faSelectPageEmits,
	slots: makeSlots<FaSelectPageSlots>(),
	setup(props, { slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });
		const _globalSize = useGlobalSize();

		const state = reactive({
			value: withDefineType<ElSelectorModelValue>(),
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
		let requestVersion = 0;

		const handleData = (data: ElSelectorOutput[]): ElSelectorOutput[] => {
			return data
				.map((item): ElSelectorOutput => {
					const value: unknown = item[props.valueKey];
					const label: unknown = typeof props.props.label === "function" ? props.props.label(item) : item[props.props.label ?? "label"];
					const hide: unknown = typeof props.props.hide === "function" ? props.props.hide(item) : item[props.props.hide ?? "hide"];
					const disabled: unknown =
						typeof props.props.disabled === "function" ? props.props.disabled(item) : item[props.props.disabled ?? "disabled"];
					const children: unknown = item[props.props.children ?? "children"];
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

		const loadData = async (pageIndex?: number): Promise<void> => {
			const currentRequestVersion = ++requestVersion;
			state.loading = true;
			state.pageIndex = pageIndex ?? state.pageIndex;
			const params: PagedInput = {
				...(typeof props.initParam === "object" && props.initParam !== null ? props.initParam : {}),
				pageIndex: state.pageIndex,
				pageSize: state.pageSize,
				searchValue: state.searchValue,
			};
			try {
				const resData = await props.requestApi(params);
				if (currentRequestVersion !== requestVersion) return;
				// 这里不允许回显了
				state.echo = false;
				state.totalRows = resData.totalRows ?? 0;
				state.selectorData = handleData(resData.rows ?? []);
				emit("dataChangeCallBack", state.selectorData);
			} catch (error) {
				if (currentRequestVersion !== requestVersion) return;
				state.pageIndex = 1;
				state.totalRows = 0;
				state.selectorData = [];
				throw error;
			} finally {
				if (currentRequestVersion === requestVersion) state.loading = false;
			}
		};

		const pageIndexModel = computed({
			get: () => state.pageIndex,
			set: (pageIndex: number) => {
				void loadData(pageIndex);
			},
		});

		const handleModelValueUpdate = (value: ElSelectorModelValue): void => {
			state.value = value;
			emit("update:modelValue", value);
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
			emit("visible-change", visible);
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				if (state.echo && !isNil(newValue)) {
					const hasLabel = !isNil(props.label);
					// 判断是否为多选
					if (props.multiple) {
						if (!Array.isArray(newValue)) {
							console.error("[Fast:FaSelectPage]", "当启用 multiple 时，传入的 modelValue 必须是 Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							console.error("[Fast:FaSelectPage]", "当启用 multiple 时，传入的 modelValue:label 必须是 Array。");
							return;
						}
						state.selectedList = newValue
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
							console.error("[Fast:FaSelectPage]", "当禁用 multiple 时，传入的 modelValue 不能是 Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							console.error("[Fast:FaSelectPage]", "当禁用 multiple 时，传入的 modelValue:label 不能是 Array。");
							return;
						}
						state.defaultSelectorData = {
							value: newValue,
							label: typeof props.label === "string" ? props.label : undefined,
						};
					}
				}
				state.value = newValue;
			},
			{
				immediate: true,
			}
		);

		const flattenOptions = (data: ElSelectorOutput[]): ElSelectorOutput[] =>
			data.flatMap((item) => [item, ...flattenOptions(item.children ?? [])]);

		const handleChange = (value?: ElSelectorModelValue): void => {
			const selectorData = flattenOptions([
				...state.selectedList,
				...(state.defaultSelectorData ? [state.defaultSelectorData] : []),
				...state.selectorData,
			]);
			if (props.multiple) {
				const valueList = Array.isArray(value) ? value : [];
				if (valueList.length === 0) {
					emit("change", null, null);
					return;
				}
				const dataList = valueList
					.map((item) => selectorData.find((option) => option.value !== undefined && isEqual(option.value, item)))
					.filter((item): item is ElSelectorOutput => item !== undefined);
				emit("change", dataList, value);
				return;
			}

			if (isNil(value) || Array.isArray(value)) {
				emit("change", null, null);
				return;
			}
			const data = selectorData.find((item) => item.value !== undefined && isEqual(item.value, value));
			emit("change", data ?? null, value);
		};

		watch(
			[() => state.value, () => state.selectorData],
			([value]) => {
				const selectorData = flattenOptions([
					...state.selectedList,
					...(state.defaultSelectorData ? [state.defaultSelectorData] : []),
					...state.selectorData,
				]);

				if (props.multiple) {
					if (!Array.isArray(value)) {
						state.selectedList = [];
						selectedLabel.value = null;
						return;
					}

					state.selectedList = value
						.map((item) => selectorData.find((option) => option.value !== undefined && isEqual(option.value, item)))
						.filter((item): item is ElSelectorOutput => item !== undefined);
					selectedLabel.value = value.map((item, index) => {
						const data = state.selectedList.find((option) => option.value !== undefined && isEqual(option.value, item));

						return data?.label ?? (Array.isArray(props.label) ? (props.label[index] ?? "") : "");
					});
					return;
				}

				if (isNil(value) || Array.isArray(value)) {
					state.selectedList = [];
					selectedLabel.value = null;
					return;
				}

				const data = selectorData.find((item) => item.value !== undefined && isEqual(item.value, value));
				state.selectedList = data ? [data] : [];
				selectedLabel.value = data?.label ?? (typeof props.label === "string" ? props.label : null);
			},
			{
				deep: true,
				flush: "sync",
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
							handleModelValueUpdate(props.multiple ? [] : undefined);
						}
					}
				}
			);
		});

		const elSelectProps = useProps(props, selectProps, ["modelValue", "popperClass", "loading", "props"]);
		const elSelectEmits = useEmits(selectEmits, emit, ["update:modelValue", "change", "visible-change"]);
		const elPopperClass = computed(() => [
			`fa-select-page-dropdown fa-select-page-dropdown-${_globalSize.value}`,
			props.popperClass,
			props.moreDetail && `fa-select-dropdown__more-detail fa-select-dropdown__more-detail-${_globalSize.value}`,
		]);

		useRender(() => (
			<ElSelect
				{...elSelectProps.value}
				{...elSelectEmits.value}
				ref={selectRef}
				class="fa-select-page"
				popperClass={elPopperClass.value}
				style={{ width: addCssUnit(props.width) }}
				modelValue={state.value}
				onUpdate:modelValue={handleModelValueUpdate}
				onChange={handleChange}
				loading={state.loading}
				onVisible-change={handleVisibleChange}
			>
				{{
					default: (): VNode[] =>
						state.selectorData.map((item) => (
							<FaSelectOption vSlots={{ default: slots.default }} data={item} moreDetail={props.moreDetail} />
						)),
					header: (): VNode[] => [
						<Fragment>
							{state.defaultSelectorData?.value !== undefined && (
								<ElOption
									class="fa-select-page-dropdown__default-selector"
									value={state.defaultSelectorData.value}
									label={state.defaultSelectorData.label ?? ""}
									disabled={true}
								>
									<span>{state.defaultSelectorData.label}</span>
									<span>Default</span>
								</ElOption>
							)}
							{
								<ElInput
									class="fa-select-page-dropdown__search-input"
									clearable={Boolean(state.searchValue)}
									placeholder="请输入关键字搜索"
									vModel_trim={state.searchValue}
									onKeyup={(event: KeyboardEvent) => {
										if (event.key === "Enter") {
											void loadData(1);
										}
									}}
								>
									{{
										append: () => (
											<ElButton
												loading={state.loading}
												icon={Search}
												onClick={() => {
													void loadData(1);
												}}
											/>
										),
									}}
								</ElInput>
							}

							{slots.header?.()}
						</Fragment>,
					],
					footer: () => (
						<Fragment>
							<ElPagination
								class="fa-select-page-dropdown__pagination"
								size="small"
								vModel:currentPage={pageIndexModel.value}
								pageSize={state.pageSize}
								total={state.totalRows}
								layout="prev, pager, next, total"
								pagerCount={5}
							/>
							{slots.footer?.()}
						</Fragment>
					),
					...(slots.prefix && { prefix: (): VNode[] => slots.prefix?.() ?? [] }),
					...(slots.empty && { empty: (): VNode[] => slots.empty?.() ?? [] }),
					...(slots.tag && { tag: (): VNode[] => slots.tag?.() ?? [] }),
					...(slots.loading && { loading: (): VNode[] => slots.loading?.() ?? [] }),
					...(props.multiple
						? {
								label: ({ label: _label, value }: { label: string; value: string | number | boolean | object }): VNode[] => {
									const selectedData = state.selectedList.find((f) => f.value === value);
									if (slots.label) {
										return slots.label({ label: selectedData?.label ?? _label, value: selectedData?.value ?? value });
									}
									return selectedData ? [<span class="el-select__tags-text">{selectedData.label}</span>] : [];
								},
							}
						: slots.label && {
								label: ({ label, value }: { label: string; value: string | number | boolean | object }): VNode[] =>
									slots.label?.({ label, value }) ?? [],
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
			setSelection: (value: Exclude<ElSelectorModelValue, null | undefined>) => handleModelValueUpdate(value),
			/** @description 清除选择 */
			clearSelection: () => handleModelValueUpdate(props.multiple ? [] : undefined),
		});
	},
});
