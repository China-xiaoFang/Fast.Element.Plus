import { Fragment, defineComponent, h, inject, reactive, resolveComponent } from "vue";
import { ElOption } from "element-plus";
import { isString } from "lodash-unified";
import {
	createDateRangeShortcuts,
	createDateShortcuts,
	createOneMonthRangeFromToday,
	definePropType,
	getStartOfToday,
	makeSlots,
	useRender,
	withDefineType,
} from "../../../utils";
import { getTableDefaultSlots } from "./table.type";
import { enumMapKey, tableStateKey } from "./useTable";
import type { FaTableColumnCtx, FaTableDefaultSlotsResult, FaTableEnumColumnCtx } from "./table.type";

/**
 * 已知默认支持的el组件：
 * 	el-input
 * 	el-input-number
 * 	el-select
 * 	el-select-v2
 * 	el-tree-select
 * 	el-cascader
 * 	el-date-picker
 * 	el-time-picker
 * 	el-time-select,
 * 	el-switch
 * 已知组件的默认props
 * clearable：el-input，el-input-number，el-select，el-select-v2，el-tree-select，el-cascader，el-date-picker，el-time-picker，el-time-select
 * filterable：el-select，el-select-v2，el-tree-select
 * placeholder-请输入：el-input，el-input-number
 * placeholder-请选择：el-select，el-select-v2，el-tree-select，el-cascader
 * defaultTime：el-date-picker
 * shortcuts：el-date-picker
 * options：el-select-v2，el-cascader
 * data：el-tree-select
 * startPlaceholder：
 * 		el-date-picker type in ["datetimerange", "daterange", "monthrange", "yearrange"]
 * 		el-time-picker isRange is true
 * endPlaceholder：
 * 		el-date-picker type in ["datetimerange", "daterange", "monthrange", "yearrange"]
 * 		el-time-picker isRange is true
 * rangeSeparator：
 * 		el-date-picker type in ["datetimerange", "daterange", "monthrange", "yearrange"]
 * 		el-time-picker isRange is true
 * unlinkPanels：el-date-picker type in ["datetimerange", "daterange", "monthrange", "yearrange"]
 * 后缀 -select Select -page Page -cascader Cascader 结尾的
 * 	placeholder：请选择
 * 后缀 -input Input 结尾的
 * 	placeholder：请输入
 */

const clearableEls = [
	"el-input",
	"ELInput",
	"el-input-number",
	"ELInputNumber",
	"el-select",
	"ElSelect",
	"el-select-v2",
	"ElSelectV2",
	"el-tree-select",
	"ElTreeSelect",
	"el-cascader",
	"ElCascader",
	"el-date-picker",
	"ElDatePicker",
	"el-time-picker",
	"ElTimePicker",
	"el-time-select",
	"ElTimeSelect",
];

const elInputEls = ["el-input", "ElInput", "ELInput"];

type FaTableSearchFormItemSlots = Record<
	string,
	FaTableDefaultSlotsResult & {
		column?: FaTableColumnCtx;
		search?: () => Promise<void>;
	}
>;

const filterableEls = ["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-tree-select", "ElTreeSelect"];

const inputPlaceholderEls = ["el-input", "ELInput", "el-input-number", "ELInputNumber"];

const selectPlaceholderEls = ["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-tree-select", "ElTreeSelect", "el-cascader", "ElCascader"];

export default defineComponent({
	name: "FaTableSearchFormItem",
	props: {
		/** @description 列配置 */
		column: {
			type: definePropType<FaTableColumnCtx>(Object),
			required: true,
			/** 这里的 default 不知道为什么，不写识别不出来类型 */
			default: {},
		},
		/** @description 搜索 */
		search: {
			type: definePropType<() => Promise<void>>(Function),
			required: true,
		},
	},
	slots: makeSlots<FaTableSearchFormItemSlots>(),
	setup(props, { slots }) {
		const tableState = inject(tableStateKey);
		const enumMap = inject(enumMapKey);
		if (tableState === undefined || enumMap === undefined) {
			throw new Error("FaTableSearchFormItem 必须在 FaTable 内部渲染。");
		}

		const state = reactive({
			enumDict: withDefineType<FaTableEnumColumnCtx[]>([]),
		});

		const handleUpdateModelValue = (value: unknown): void => {
			if (isString(value)) {
				// 如果是字符串，则去除前后空格
				value = value.trim();
			}
			const searchKey = props.column.search?.key ?? props.column.prop;
			if (searchKey) tableState.searchParam[searchKey] = value;
		};

		const handleChange = (_value: unknown): void => {
			void props.search();
		};

		const handleDefaultProps = (): Record<string, unknown> => {
			const search = props.column.search;
			const defaultProps: Record<string, unknown> = {};
			if (!search) return defaultProps;
			if (clearableEls.includes(search.el)) {
				defaultProps["clearable"] = true;
			}
			if (filterableEls.includes(search.el)) {
				defaultProps["filterable"] = true;
			}
			if (inputPlaceholderEls.includes(search.el)) {
				defaultProps["placeholder"] = "请输入";
			}
			if (selectPlaceholderEls.includes(search.el)) {
				defaultProps["placeholder"] = "请选择";
			}
			if (["el-date-picker", "ElDatePicker"].includes(search.el)) {
				defaultProps["unlinkPanels"] = true;
				if (
					typeof search.props?.["type"] === "string" &&
					["datetimerange", "daterange", "monthrange", "yearrange"].includes(search.props["type"])
				) {
					defaultProps["defaultTime"] = createOneMonthRangeFromToday();
					defaultProps["shortcuts"] = createDateRangeShortcuts();
					defaultProps["rangeSeparator"] = "至";
					defaultProps["startPlaceholder"] = "开始时间";
					defaultProps["endPlaceholder"] = "结束时间";
				} else {
					defaultProps["defaultTime"] = getStartOfToday();
					defaultProps["shortcuts"] = createDateShortcuts();
					defaultProps["placeholder"] = "请选择";
				}
			}
			if (["el-time-picker", "ElTimePicker"].includes(search.el) && search.props?.["isRange"]) {
				defaultProps["rangeSeparator"] = "至";
				defaultProps["startPlaceholder"] = "开始时间";
				defaultProps["endPlaceholder"] = "结束时间";
			}
			if (
				["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-cascader", "ElCascader", "el-tree-select", "ElTreeSelect"].includes(
					search.el
				)
			) {
				let enumData: FaTableEnumColumnCtx[] | undefined;
				if (props.column.enum && isString(props.column.enum)) {
					enumData = enumMap.get(props.column.enum);
				} else {
					const enumKey = props.column.prop ?? search.key;
					enumData = enumKey ? enumMap.get(enumKey) : undefined;
				}
				enumData = enumData?.filter((item) => item.show !== false);
				state.enumDict = enumData ?? [];
			}
			if (["el-select-v2", "ElSelectV2", "el-cascader", "ElCascader"].includes(search.el)) {
				defaultProps["options"] = state.enumDict;
			}
			if (["el-tree-select", "ElTreeSelect"].includes(search.el)) {
				defaultProps["data"] = state.enumDict;
			}

			return defaultProps;
		};

		useRender(() => {
			const search = props.column.search;
			const searchKey = search?.key ?? props.column.prop;
			if (!search?.el || !searchKey) return <Fragment />;
			const value = tableState.searchParam[searchKey];
			const inputClearable = search.props?.["clearable"] !== false && value !== undefined && value !== null && value !== "";
			return (
				<Fragment>
					{h(
						resolveComponent(search.el),
						{
							...handleDefaultProps(),
							...search.props,
							...(elInputEls.includes(search.el) ? { clearable: inputClearable } : {}),
							modelValue: value,
							"onUpdate:modelValue": handleUpdateModelValue,
							onChange: handleChange,
						},
						{
							default: () =>
								["el-select", "ElSelect"].includes(search.el)
									? state.enumDict.map((selData, index) =>
											h(ElOption, {
												key: index,
												label: selData[typeof search.props?.["label"] === "string" ? search.props["label"] : "label"] as
													string | number,
												value: selData[typeof search.props?.["value"] === "string" ? search.props["value"] : "value"] as
													string | number | boolean | object,
												disabled: Boolean(
													selData[typeof search.props?.["disabled"] === "string" ? search.props["disabled"] : "disabled"]
												),
											})
										)
									: slots["default"]?.({
											column: props.column,
											search: props.search,
											...getTableDefaultSlots(tableState),
										}),
						}
					)}
				</Fragment>
			);
		});
	},
});
