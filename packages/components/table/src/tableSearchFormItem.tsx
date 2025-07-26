import { Fragment, defineComponent, h, inject, reactive, resolveComponent } from "vue";
import { ElOption } from "element-plus";
import { dateUtil, definePropType, makeSlots, useRender, withDefineType } from "@fast-china/utils";
import { isString } from "lodash-unified";
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

type FaTableSearchFormItemSlots = {
	[key: string]: FaTableDefaultSlotsResult & {
		column?: FaTableColumnCtx;
		search?: () => void;
	};
};

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
			default: {} as FaTableColumnCtx,
		},
		/** @description 搜索 */
		search: {
			type: definePropType<() => void>(Function),
			required: true,
		},
	},
	slots: makeSlots<FaTableSearchFormItemSlots>(),
	setup(props, { slots }) {
		const tableState = inject(tableStateKey);
		const enumMap = inject(enumMapKey);

		const state = reactive({
			enumDict: withDefineType<FaTableEnumColumnCtx[]>([]),
			oldValue: undefined,
		});

		const handleUpdateModelValue = (value: any): void => {
			if (isString(value)) {
				// 如果是字符串，则去除前后空格
				value = value.trim();
			}
			state.oldValue = tableState.searchParam[props.column?.search?.key ?? props.column.prop];
			tableState.searchParam[props.column?.search?.key ?? props.column.prop] = value;
		};

		const handleChange = (value: any): void => {
			// 改变触发的时候只有不等于的时候才会去刷新
			// if (!isEqual(value, state.oldValue)) {
			props.search();
			// }
		};

		const handleDefaultProps = (): any => {
			const search = props.column.search;
			const defaultProps: any = {};
			if (clearableEls.includes(search?.el)) {
				defaultProps.clearable = true;
			}
			if (filterableEls.includes(search?.el)) {
				defaultProps.filterable = true;
			}
			if (inputPlaceholderEls.includes(search?.el)) {
				defaultProps.placeholder = "请输入";
			}
			if (selectPlaceholderEls.includes(search?.el)) {
				defaultProps.placeholder = "请选择";
			}
			if (["el-date-picker", "ElDatePicker"].includes(search?.el)) {
				defaultProps.unlinkPanels = true;
				if (["datetimerange", "daterange", "monthrange", "yearrange"].includes(search?.props?.type)) {
					defaultProps.defaultTime = dateUtil.getDefaultTime();
					defaultProps.shortcuts = dateUtil.getShortcuts();
					defaultProps.rangeSeparator = "至";
					defaultProps.startPlaceholder = "开始时间";
					defaultProps.endPlaceholder = "结束时间";
				} else {
					defaultProps.defaultTime = dateUtil.getSimpleTime();
					defaultProps.shortcuts = dateUtil.getSimpleShortcuts();
				}
			}
			if (["el-time-picker", "ElTimePicker"].includes(search?.el) && search?.props?.isRange) {
				defaultProps.rangeSeparator = "至";
				defaultProps.startPlaceholder = "开始时间";
				defaultProps.endPlaceholder = "结束时间";
			}
			if (
				["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-cascader", "ElCascader", "el-tree-select", "ElTreeSelect"].includes(
					search?.el
				)
			) {
				let enumData;
				if (props.column.enum && isString(props.column.enum)) {
					enumData = enumMap.get(props.column.enum);
				} else {
					enumData = enumMap.get(props.column.prop ?? props.column.search?.key);
				}
				enumData = enumData.filter((f: any) => f?.show !== false);
				state.enumDict = enumData ?? [];
			}
			if (["el-select-v2", "ElSelectV2", "el-cascader", "ElCascader"].includes(search?.el)) {
				defaultProps.options = state.enumDict;
			}
			if (["el-tree-select", "ElTreeSelect"].includes(search?.el)) {
				defaultProps.data = state.enumDict;
			}

			return defaultProps;
		};

		useRender(() => (
			<Fragment>
				{props.column.search?.el &&
					h(
						resolveComponent(props.column.search.el),
						{
							...handleDefaultProps(),
							...props.column.search.props,
							modelValue: tableState.searchParam[props.column?.search?.key ?? props.column.prop],
							"onUpdate:modelValue": handleUpdateModelValue,
							onChange: handleChange,
						},
						{
							default: () =>
								["el-select", "ElSelect"].includes(props.column.search.el)
									? state.enumDict.map((selData: any, index: number) =>
											h(ElOption, {
												key: index,
												label: selData[props.column.search.props?.label ?? "label"],
												value: selData[props.column.search.props?.value ?? "value"],
												disabled: selData[props.column.search.props?.disabled ?? "disabled"],
											})
										)
									: slots.default &&
										slots.default({
											column: props.column,
											search: props.search,
											...getTableDefaultSlots(tableState),
										}),
						}
					)}
			</Fragment>
		));
	},
});
