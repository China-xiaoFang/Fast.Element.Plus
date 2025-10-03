import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import { ElSelect, tagProps, useAriaProps, useEmptyValuesProps, useSizeProp, useTooltipContentProps } from "element-plus";
import { ArrowDown, CircleClose } from "@element-plus/icons-vue";
import { addUnit, consoleError, definePropType, makeSlots, useExpose, useProps, useRender, withDefineType } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isArray, isBoolean, isEqual, isFunction, isNil, isNull, isNumber, isObject, isString } from "lodash-unified";
import FaSelectOption from "./selectOption";
import type { ElSelectorOutput } from "./select.type";
import type { Options, Placement, PopperEffect } from "element-plus";
import type { Component, VNode } from "vue";

export const SelectProps = {
	/**
	 * @description the name attribute of select input
	 */
	name: String,
	/**
	 * @description native input id
	 */
	id: String,
	/**
	 * @description binding value
	 */
	modelValue: {
		type: [Array, String, Number, Boolean, Object],
		default: undefined,
	},
	/**
	 * @description the autocomplete attribute of select input
	 */
	autocomplete: {
		type: String,
		default: "off",
	},
	/**
	 * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
	 */
	automaticDropdown: Boolean,
	/**
	 * @description size of Input
	 */
	size: useSizeProp,
	/**
	 * @description tooltip theme, built-in theme: `dark` / `light`
	 */
	effect: {
		type: definePropType<PopperEffect | string>(String),
		default: "light",
	},
	/**
	 * @description whether Select is disabled
	 */
	disabled: Boolean,
	/**
	 * @description whether select can be cleared
	 */
	clearable: Boolean,
	/**
	 * @description whether Select is filterable
	 */
	filterable: Boolean,
	/**
	 * @description whether creating new items is allowed. To use this, `filterable` must be true
	 */
	allowCreate: Boolean,
	/**
	 * @description whether Select is loading data from server
	 */
	loading: Boolean,
	/**
	 * @description custom class name for Select's dropdown
	 */
	popperClass: {
		type: String,
		default: "",
	},
	/**
	 * @description [popper.js](https://popper.js.org/docs/v2/) parameters
	 */
	popperOptions: {
		type: definePropType<Partial<Options>>(Object),
		default: (): Partial<Options> => ({}),
	},
	/**
	 * @description whether options are loaded from server
	 */
	remote: Boolean,
	/**
	 * @description displayed text while loading data from server, default is 'Loading'
	 */
	loadingText: String,
	/**
	 * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
	 */
	noMatchText: String,
	/**
	 * @description displayed text when there is no options, you can also use slot `empty`, default is 'No data'
	 */
	noDataText: String,
	/**
	 * @description custom remote search method
	 */
	remoteMethod: Function,
	/**
	 * @description custom filter method
	 */
	filterMethod: Function,
	/**
	 * @description whether multiple-select is activated
	 */
	multiple: Boolean,
	/**
	 * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
	 */
	multipleLimit: {
		type: Number,
		default: 0,
	},
	/**
	 * @description placeholder, default is 'Select'
	 */
	placeholder: {
		type: String,
	},
	/**
	 * @description select first matching option on enter key. Use with `filterable` or `remote`
	 */
	defaultFirstOption: Boolean,
	/**
	 * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
	 */
	reserveKeyword: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description unique identity key name for value, required when value is an object
	 */
	valueKey: {
		type: String,
		default: "value",
	},
	/**
	 * @description whether to collapse tags to a text when multiple selecting
	 */
	collapseTags: Boolean,
	/**
	 * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
	 */
	collapseTagsTooltip: Boolean,
	/**
	 * @description the max tags number to be shown. To use this, `collapse-tags` must be true
	 */
	maxCollapseTags: {
		type: Number,
		default: 1,
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
	 * @description custom clear icon component
	 */
	clearIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: CircleClose,
	},
	/**
	 * @description whether the width of the dropdown is the same as the input
	 */
	fitInputWidth: Boolean,
	/**
	 * @description custom suffix icon component
	 */
	suffixIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: ArrowDown,
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
	 * @description whether to trigger form validation
	 */
	validateEvent: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description in remote search method show suffix icon
	 */
	remoteShowSuffix: Boolean,
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
	...useEmptyValuesProps,
	...useAriaProps(["ariaLabel"]),
};

export type SelectComponentProps = {
	/** @description 指定标签为节点的某个属性值 */
	label?: string | ((data: any) => string);
	/** @description 指定是否隐藏为节点的某个属性值 */
	hide?: string | ((data: any) => boolean);
	/** @description 指定是否禁用为节点的某个属性值 */
	disabled?: string | ((data: any) => boolean);
	/** @description 指定子节点对象为节点的某个属性值 */
	children?: string;
};

export const faSelectProps = {
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
		type: definePropType<(params?: any) => Promise<ElSelectorOutput[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
};

export const faSelectEmits = {
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

type FaSelectSlots = {
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
	name: "FaSelect",
	props: faSelectProps,
	emits: faSelectEmits,
	slots: makeSlots<FaSelectSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const selectedLabel = useVModel(props, "label", emit, { passive: true });

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
					consoleError("FaSelect", error);
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

		const handleChange = (value?: string | number | boolean | object | (string | number | boolean | object)[]): void => {
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
				const data = state.selectorData.find((f) => f.value === value);
				state.value = value;
				selectedLabel.value = data.label;
				emit("update:modelValue", value);
				emit("change", data, value);
			}
		};

		const handleClear = (): void => {
			state.value = null;
			selectedLabel.value = null;
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
			emit("visibleChange", visible);
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
							consoleError("FaSelect", "当启用 multiple 时，传入的 modelValue 必须是Array。");
							return;
						}
						if (hasLabel && !isArray(props.label)) {
							consoleError("FaSelect", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
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
							consoleError("FaSelect", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
							return;
						}
						if (hasLabel && isArray(props.label)) {
							consoleError("FaSelect", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
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
					handleChange(props.multiple ? [state.selectorData[0].value] : state.selectorData[0].value);
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

		const elSelectProps = useProps(props, SelectProps, ["modelValue", "popperClass", "loading"]);

		useRender(() => (
			<ElSelect
				{...elSelectProps.value}
				ref={selectRef}
				class="fa-select"
				popperClass={`fa-select-dropdown ${props.popperClass}`}
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
			/** @description 刷新 */
			refresh: loadData,
			/** @description 设置选择  */
			setSelection: (value: string | number | boolean | object | (string | number | boolean | object)[]) => handleChange(value),
			/** @description 清除选择  */
			clearSelection: () => handleChange(null),
		});
	},
});
