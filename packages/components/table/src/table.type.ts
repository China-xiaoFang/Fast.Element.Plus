import type { FaTableState } from "./table.state";
import type { FaLayoutGridBreakPoint, FaLayoutGridItemResponsive } from "@fast-element-plus/components/layoutGrid";
import type { TableColumnCtx } from "element-plus";
import type { VNode } from "vue";

/** @description FaTable 默认插槽返回 */
export type FaTableDefaultSlotsResult = {
	loading: boolean;
	searchParam: any;
	selected: boolean;
	selectedList: any[];
	selectedListIds: (string | number)[];
	indeterminateSelectedListIds: (string | number)[];
	/** @description 可能为空 */
	search?: () => void;
};

/** @description 获取 FaTable 默认插槽返回数据 */
export const getTableDefaultSlots = (state: FaTableState): FaTableDefaultSlotsResult => {
	return {
		loading: state.loading,
		searchParam: state.searchParam,
		selected: state.selected,
		selectedList: state.selectedList,
		selectedListIds: state.selectedListIds,
		indeterminateSelectedListIds: state.indeterminateSelectedListIds,
	};
};

/** @description 日期范围 */
export type FaTableDataRange = "Past1D" | "Past3D" | "Past1W" | "Past1M" | "Past3M" | "Past6M" | "Past1Y" | "Past3Y";

/** @description FaTable 表格枚举列上下文 */
export type FaTableEnumColumnCtx = {
	/**
	 * 选项框显示的文字
	 */
	label: string;
	/**
	 * 选项框值
	 */
	value: string | number | boolean;
	/**
	 * 显示
	 */
	show?: boolean;
	/**
	 * 是否禁用此选项
	 */
	disabled?: boolean;
	/**
	 * 为树形选择是，可以通过 children 属性指定子选项
	 */
	children?: FaTableEnumColumnCtx[];
	/**
	 * 提示
	 */
	tips?: string;
	/**
	 * Tag的类型，默认 "primary"
	 */
	type?: "primary" | "success" | "info" | "warning" | "danger";
};

/** @description FaTable 表格枚举列类型 */
export type FaTableEnumColumnType = FaTableEnumColumnCtx[] | ((...args) => Promise<FaTableEnumColumnCtx[]>);

/** @description FaTable 表格搜素列组件 */
export type FaTableSearchColumnEl =
	| ""
	| "el-input"
	| "el-input-number"
	| "el-select"
	| "el-select-v2"
	| "el-tree-select"
	| "el-cascader"
	| "el-date-picker"
	| "el-time-picker"
	| "el-time-select"
	| "el-switch"
	| "el-slider"
	| "slot";

/** @description FaTable 表格搜素列上下文 */
export type FaTableSearchColumnCtx = Partial<Record<FaLayoutGridBreakPoint, FaLayoutGridItemResponsive>> & {
	/**
	 * 当前项搜索框的类型
	 */
	el: FaTableSearchColumnEl | string;
	/**
	 * 搜索项参数，根据 element plus 官方文档来传递，该属性所有值会透传到组件
	 */
	props?: any;
	/**
	 * 当搜索项 label 不为列 label 属性时，可通过 label 指定
	 */
	label?: string;
	/**
	 * 当搜索项 key 不为 prop 属性时，可通过 key 指定
	 */
	key?: string;
	/**
	 * 搜索项排序（从大到小）
	 */
	order?: number;
	/**
	 * 搜索项所占用的列数，默认为1列
	 */
	span?: number;
	/**
	 * 搜索字段左侧偏移列数
	 */
	offset?: number;
	/**
	 * 插槽名称
	 */
	slot?: string;
	/**
	 * 搜索项默认值
	 */
	defaultValue?: string | number | boolean | any[];
};

/**
 * @description 表格列类型
 * @property default     默认
 * @property selection	 选择列
 * @property expand      可展开按钮列
 * @property expand      可展开按钮列
 * @property image       图片列
 * @property date        日期显示（格式 "YYYY-MM-DD"）
 * @property time        时间显示（格式 "HH:mm:ss"）
 * @property dateTime    日期时间显示（格式 "YYYY-MM-DD HH:mm:ss"）
 * @property d2          数值列，保留 2 位小数，不带千分位
 * @property d4          数值列，保留 4 位小数，不带千分位
 * @property d6          数值列，保留 6 位小数，不带千分位
 * @property gd2         数值列，保留 2 位小数，带千分位
 * @property gd4         数值列，保留 4 位小数，带千分位
 * @property gd6         数值列，保留 6 位小数，带千分位
 * @property timeInfo  时间信息列
 */
export type FaTableColumnType =
	| "default"
	| "selection"
	| "index"
	| "expand"
	| "image"
	| "date"
	| "time"
	| "dateTime"
	| "d2"
	| "d4"
	| "d6"
	| "gd2"
	| "gd4"
	| "gd6"
	| "timeInfo";

/** @description FaTable 表格列日期格式化 */
export type FaTableColumnDateFormat =
	| "YYYY-MM-DD HH:mm:ss"
	| "YYYY-MM-DD HH:mm"
	| "YYYY-MM-DD"
	| "YYYY-MM"
	| "YYYY"
	| "MM"
	| "DD"
	| "MM-DD"
	| "HH:mm:ss"
	| "HH:mm"
	| "HH"
	| "mm:ss"
	| "mm"
	| "ss";

/** @description FaTable 表格列上下文 */
export type FaTableColumnCtx<T = any> = Partial<Omit<TableColumnCtx<T>, "order" | "type" | "prop" | "sortable" | "_children">> & {
	/**
	 * 内部的计算属性，一般不做使用
	 * @description FaTable
	 */
	multiOrder?: "" | "ascending" | "descending";
	/**
	 * 列Id
	 * @description FaTable
	 */
	columnId?: number;
	/**
	 * 排序
	 * @description FaTable
	 */
	order?: number;
	/**
	 * 排序字段
	 * @description FaTable
	 */
	sortableField?: string;
	/**
	 * 禁用排序配置
	 * @description FaTable
	 */
	disabledSortable?: boolean;
	/**
	 * 合并行字段
	 * @description FaTable
	 */
	spanProp?: string;
	/**
	 * 纯搜索
	 * @description FaTable
	 */
	pureSearch?: boolean;
	/**
	 * 搜索项配置
	 * @description FaTable
	 */
	search?: FaTableSearchColumnCtx;
	/** 上面所有属性，全部非 FaTableColumn props，均为计算属性 */
	/**
	 * 对应列的类型
	 */
	type?: FaTableColumnType;
	/**
	 * 字段名称
	 */
	prop?: string;
	/**
	 * 是否显示在表格当中，默认 true
	 */
	show?: boolean;
	/**
	 * 对应列是否可以排序，
	 * 默认为 'custom' 模式，即远程排序，
	 * 需要监听 Table 的 sort-change 事件
	 */
	sortable?: boolean;
	/**
	 * 小页面的宽度，如果为空，则继承默认宽度
	 */
	smallWidth?: string | number;
	/**
	 * 自适应宽度
	 */
	autoWidth?: boolean;
	/**
	 * 插槽名称
	 */
	slot?: string;
	/**
	 * 表格头部插槽名称
	 */
	headerSlot?: string;
	/**
	 * 自定义表头内容渲染（tsx语法）
	 */
	headerRender?: ({ column, $index }: { column: TableColumnCtx<any>; $index: number } & FaTableDefaultSlotsResult) => VNode[];
	/**
	 * 自定义单元格内容渲染（tsx语法）
	 */
	render?: ({ row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number } & FaTableDefaultSlotsResult) => VNode[];
	/**
	 * 多级表头
	 */
	_children?: FaTableColumnCtx<T>[];
	/**
	 * 复制
	 */
	copy?: boolean;
	/**
	 * 是否为 Link Button
	 */
	link?: boolean;
	/**
	 * 点击事件，优先级最高
	 */
	click?: ({ row, $index }: { row: T; $index?: number } & FaTableDefaultSlotsResult) => void;
	/**
	 * 点击Emits事件回调
	 */
	clickEmit?: string;
	/**
	 * 图片列是否显示为原图，默认 false 显示缩略图
	 */
	originalImage?: boolean;
	/**
	 * 显示时间格式化字符串，默认 false
	 */
	dateFix?: boolean;
	/**
	 * 显示在页面中的日期格式
	 */
	dateFormat?: FaTableColumnDateFormat;
	/**
	 * 是否是标签展示，默认 false
	 */
	tag?: boolean;
	/**
	 * 枚举类型（渲染值的字典）
	 */
	enum?: FaTableEnumColumnType;
	/**
	 * 数据删除字段，如果为 true 会显示遮罩层
	 */
	dataDeleteField?: string;
	/**
	 * 时间信息字段
	 */
	timeInfoField?: { userName?: string; time?: string };
};
