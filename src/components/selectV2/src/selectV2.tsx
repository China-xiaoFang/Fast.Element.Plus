import { useVModel } from "@vueuse/core";
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { ArrowDown, CircleClose } from "@element-plus/icons-vue";
import { ElSelectV2, tagProps, useAriaProps, useEmptyValuesProps, useGlobalSize, useSizeProp, useTooltipContentProps } from "element-plus";
import { isArray, isBoolean, isEqual, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import { addCssUnit, definePropType, makeSlots, useEmits, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import type { SelectV2Props as ElementPlusSelectV2Props, Options, Placement, ScrollbarDirection } from "element-plus";
import type { Component, PropType, VNode } from "vue";
import type { ElSelectorModelValue, ElSelectorOutput, ElSelectorValue } from "../../select/src/select.type";
import type { PagedInput, PagedResult } from "../../table";

/** 传递给底层 Element Plus 虚拟化选择器的扩展 Props。 */
export interface Props {
	label?: string;
	value?: string;
	disabled?: string;
	options?: string;
}

/** FaSelectV2 支持的业务选择器 Props 定义。 */
export const SelectV2Props = {
	/**
	 * @description whether creating new items is allowed. To use this, `filterable` must be true
	 */
	allowCreate: Boolean,
	/**
	 * @description autocomplete of select input
	 */
	autocomplete: {
		type: definePropType<"none" | "both" | "list" | "inline">(String),
		default: "none",
	},
	/**
	 * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
	 */
	automaticDropdown: Boolean,
	/**
	 * @description whether select can be cleared
	 */
	clearable: Boolean,
	/**
	 * @description custom clear icon
	 */
	clearIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: CircleClose,
	},
	/**
	 * @description tooltip theme, built-in theme: `dark` / `light`
	 */
	effect: {
		type: definePropType<string>(String),
		default: "light",
	},
	/**
	 * @description whether to collapse tags to a text when multiple selecting
	 */
	collapseTags: Boolean,
	/**
	 * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
	 */
	collapseTagsTooltip: Boolean,
	/** @description collapse-tags tooltip configuration */
	tagTooltip: {
		type: definePropType<ElementPlusSelectV2Props["tagTooltip"]>(Object),
		default: (): NonNullable<ElementPlusSelectV2Props["tagTooltip"]> => ({}),
	},
	/**
	 * @description The max tags number to be shown. To use this, `collapse-tags` must be true
	 */
	maxCollapseTags: {
		type: Number,
		default: 1,
	},
	/**
	 * @description
	 */
	defaultFirstOption: Boolean,
	/**
	 * @description is disabled
	 */
	disabled: Boolean,
	/**
	 * @description
	 */
	estimatedOptionHeight: {
		type: Number,
		default: undefined,
	},
	/**
	 * @description is filterable
	 */
	filterable: Boolean,
	/**
	 * @description
	 */
	filterMethod: Function as PropType<ElementPlusSelectV2Props["filterMethod"]>,
	/**
	 * @description The height of the dropdown panel, 34px for each item
	 */
	height: {
		type: Number,
		default: 274, // same as select dropdown menu
	},
	/**
	 * @description The height of the dropdown item
	 */
	itemHeight: {
		type: Number,
		default: 34,
	},
	/**
	 * @description
	 */
	id: String,
	/**
	 * @description whether Select is loading data from server
	 */
	loading: Boolean,
	/**
	 * @description displayed text while loading data from server, default is 'Loading'
	 */
	loadingText: String,
	/**
	 * @description biding value
	 */
	modelValue: {
		type: definePropType<ElSelectorModelValue>([Array, String, Number, Boolean, Object]),
	},
	/**
	 * @description is multiple
	 */
	multiple: Boolean,
	/**
	 * @description maximum number of options user can select when multiple is true. No limit when set to 0
	 */
	multipleLimit: {
		type: Number,
		default: 0,
	},
	/**
	 * @description the name attribute of select input
	 */
	name: String,
	/**
	 * @description displayed text when there is no options, you can also use slot empty, the default is 'No Data'
	 */
	noDataText: String,
	/**
	 * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
	 */
	noMatchText: String,
	/**
	 * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
	 */
	remoteMethod: Function as PropType<ElementPlusSelectV2Props["remoteMethod"]>,
	/**
	 * @description whether reserve the keyword after select filtered option.
	 */
	reserveKeyword: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description data of the options, the key of `value` and `label` can be customize by `props`
	 */
	options: {
		type: definePropType<ElementPlusSelectV2Props["options"]>(Array),
		// required: true,
	},
	/**
	 * @description placeholder, the default is 'Please select'
	 */
	placeholder: {
		type: String,
	},
	/**
	 * @description whether select dropdown is teleported to the body
	 */
	teleported: useTooltipContentProps.teleported,
	/**
	 * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
	 */
	persistent: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description custom class name for Select's dropdown
	 */
	popperClass: {
		type: String,
		default: "",
	},
	/** @description custom style for Select's dropdown */
	popperStyle: useTooltipContentProps.popperStyle,
	/**
	 * @description [popper.js](https://popper.js.org/docs/v2/) parameters
	 */
	popperOptions: {
		type: definePropType<Partial<Options>>(Object),
		default: (): Partial<Options> => ({}),
	},
	/**
	 * @description whether search data from server
	 */
	remote: Boolean,
	/** @description debounce delay during remote search, in milliseconds */
	debounce: {
		type: Number,
		default: 300,
	},
	/**
	 * @description size of component
	 */
	size: useSizeProp,
	/**
	 * @description configuration options, see the following table
	 */
	props: {
		type: definePropType<Props>(Object),
		default: (): Required<Props> => ({
			label: "label",
			value: "value",
			disabled: "disabled",
			options: "options",
		}),
	},
	/**
	 * @description unique identity key name for value, required when value is an object
	 */
	valueKey: {
		type: String,
		default: "value",
	},
	/**
	 * @description Controls whether the scrollbar is always displayed
	 */
	scrollbarAlwaysOn: Boolean,
	/**
	 * @description whether to trigger form validation
	 */
	validateEvent: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description offset of the dropdown
	 */
	offset: {
		type: Number,
		default: 12,
	},
	/** @description whether to show the suffix icon during remote search */
	remoteShowSuffix: Boolean,
	/**
	 * @description Determines whether the arrow is displayed
	 */
	showArrow: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description position of dropdown
	 */
	placement: {
		type: definePropType<Placement>(String),
		default: "bottom-start",
	},
	/**
	 * @description list of possible positions for dropdown
	 */
	fallbackPlacements: {
		type: definePropType<Placement[]>(Array),
		default: ["bottom-start", "top-start", "right", "left"],
	},
	/**
	 * @description tag type
	 */
	tagType: { ...tagProps.type, default: "info" },
	/**
	 * @description tag effect
	 */
	tagEffect: { ...tagProps.effect, default: "light" },
	/**
	 * @description tabindex for input
	 */
	tabindex: {
		type: [String, Number],
		default: 0,
	},
	/**
	 * @description which element the select dropdown appends to
	 */
	appendTo: String,
	/** @description whether the dropdown width follows the input width, or a fixed width */
	fitInputWidth: {
		type: [Boolean, Number],
		default: true,
		validator: (value: boolean | number): boolean => isBoolean(value) || isNumber(value),
	},
	/** @description select suffix icon */
	suffixIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: ArrowDown,
	},
	...useEmptyValuesProps,
	...useAriaProps(["ariaLabel"]),
};

/** 底层虚拟化选择器的运行时 Emits 定义。 */
export const selectV2Emits = {
	"update:modelValue": (_value: ElSelectorModelValue): boolean => true,
	change: (_value: ElSelectorModelValue): boolean => true,
	"end-reached": (_direction: ScrollbarDirection): boolean => true,
	"remove-tag": (_value: ElSelectorValue): boolean => true,
	"visible-change": (_visible: boolean): boolean => true,
	focus: (_event: FocusEvent): boolean => true,
	blur: (_event: FocusEvent): boolean => true,
	clear: (): boolean => true,
} as const;

/** FaSelectV2 的运行时 Props 定义。 */
export const faSelectV2Props = {
	...SelectV2Props,
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
	/** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
	lazy: {
		type: Boolean,
		default: true,
	},
	/** @description 默认选中。不能和懒加载一起使用 */
	defaultSelected: Boolean,
	/** @description 下拉框数据 */
	data: {
		type: definePropType<ElSelectorOutput[]>(Array),
		default: (): ElSelectorOutput[] => [],
	},
	/** 分页返回 */
	pageResult: Boolean,
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: string | number | PagedInput) => Promise<ElSelectorOutput[] | PagedResult<ElSelectorOutput>>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | PagedInput>([String, Number, Object]),
};

/** FaSelectV2 的运行时 Emits 定义。 */
export const faSelectV2Emits = {
	...selectV2Emits,
	/** @description v-model 回调 */
	"update:modelValue": (value: ElSelectorModelValue): boolean =>
		isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description 数据改变 */
	dataChangeCallBack: (data: ElSelectorOutput[]): boolean => isArray(data),
	/** @description 改变 */
	change: (_data: ElSelectorOutput | ElSelectorOutput[] | null, _value?: ElSelectorModelValue): boolean => true,
};

/** FaSelectV2 的插槽参数。 */
export interface FaSelectV2Slots extends Record<string, unknown> {
	/** @description FaSelectOption 默认内容插槽 */
	default: { item: ElSelectorOutput; index: number; disabled: boolean };
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
	name: "FaSelectV2",
	props: faSelectV2Props,
	emits: faSelectV2Emits,
	slots: makeSlots<FaSelectV2Slots>(),
	setup(props, { slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });
		const _globalSize = useGlobalSize();

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

		const selectV2Ref = ref<InstanceType<typeof ElSelectV2>>();
		let requestVersion = 0;

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
					// 判断是否为分页返回
					if (props.pageResult) {
						state.selectorData = (resData as PagedResult<ElSelectorOutput>).rows ?? [];
					} else {
						state.selectorData = resData as ElSelectorOutput[];
					}
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
				state.selectorData = props.data ?? [];
			}
		};

		const handleChange = (value?: ElSelectorModelValue): void => {
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
				const data = state.selectorData.find((f) => f.value === value);
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

		const handleVisibleChange = async (visible: boolean): Promise<void> => {
			if (visible) {
				if (state.debut) {
					// 首次出现
					state.debut = false;
					// 懒加载
					!props.defaultSelected && props.lazy && (await loadData());
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
							console.error("[Fast:FaSelectV2]", "当启用 multiple 时，传入的 modelValue 必须是 Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							console.error("[Fast:FaSelectV2]", "当启用 multiple 时，传入的 modelValue:label 必须是 Array。");
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
							console.error("[Fast:FaSelectV2]", "当禁用 multiple 时，传入的 modelValue 不能是 Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							console.error("[Fast:FaSelectV2]", "当禁用 multiple 时，传入的 modelValue:label 不能是 Array。");
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
					handleChange(props.multiple ? [firstItem.value] : firstItem.value);
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

		const elSelectV2Props = useProps(props, SelectV2Props, ["modelValue", "popperClass", "loading", "options", "itemHeight"]);
		const elSelectV2Emits = useEmits(faSelectV2Emits, emit, ["update:modelValue", "change", "clear", "visible-change"]);
		const elPopperClass = computed(() => {
			let localClass = `fa-select-v2-dropdown ${props.popperClass}`;
			if (props.moreDetail) {
				localClass += ` fa-select-v2-dropdown__more-detail fa-select-v2-dropdown__more-detail-${_globalSize.value}`;
			}
			return localClass;
		});

		useRender(() => (
			<ElSelectV2
				{...elSelectV2Props.value}
				{...elSelectV2Emits.value}
				ref={selectV2Ref}
				class="fa-select-v2"
				popperClass={elPopperClass.value}
				style={{ width: addCssUnit(props.width) }}
				vModel={state.value}
				loading={state.loading}
				options={state.selectorData}
				itemHeight={props.itemHeight + (_globalSize.value === "small" ? 0 : 8)}
				onChange={handleChange}
				onClear={handleClear}
				onVisible-change={handleVisibleChange}
			>
				{{
					...(slots.default && {
						default: ({ item, index, disabled }: { item: ElSelectorOutput; index: number; disabled: boolean }): VNode[] =>
							slots.default?.({ item, index, disabled }) ?? [],
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
			</ElSelectV2>
		));

		return useExpose(expose, {
			/** @description 使选择器的输入框获取焦点 */
			focus: computed(() => selectV2Ref.value?.focus),
			/** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
			blur: computed(() => selectV2Ref.value?.blur),
			/** @description 获取当前选中的标签 */
			selectedLabel: computed(() => selectV2Ref.value?.selectedLabel),
			/** @description 滚动到指定选项索引。 */
			scrollTo: computed(() => selectV2Ref.value?.scrollTo),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 刷新 */
			refresh: loadData,
			/** @description 设置选择  */
			setSelection: (value: Exclude<ElSelectorModelValue, null | undefined>) => handleChange(value),
			/** @description 清除选择  */
			clearSelection: () => handleChange(null),
		});
	},
});
