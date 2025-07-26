import { Fragment, computed, defineComponent, onActivated, onMounted, ref, watch, watchEffect } from "vue";
import {
	ElButton,
	ElDatePicker,
	ElDropdown,
	ElDropdownMenu,
	ElIcon,
	ElImageViewer,
	ElInput,
	ElPagination,
	ElTable,
	ElTableColumn,
	useSizeProp,
} from "element-plus";
import { Eleme, More, Refresh, Search, Setting } from "@element-plus/icons-vue";
import { NotData } from "@fast-element-plus/icons-vue";
import { clickUtil, consoleWarn, dateUtil, definePropType, makeSlots, stringUtil, useExpose, useProps, useRender } from "@fast-china/utils";
import { isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, omit, pick } from "lodash-unified";
import { getTableDefaultSlots } from "./table.type";
import FaTableColumn from "./tableColumn";
import FaTableColumnsSettingDialog from "./tableColumnSettingDialog";
import FaTablePagination from "./tablePagination";
import FaTableSearchForm from "./tableSearchForm";
import { useTable } from "./useTable";
import type { FaTableChangeColumnsCtx, FaTableColumnCtx, FaTableDataRange, FaTableDefaultSlotsResult } from "./table.type";
import type { PagedInput, PagedResult, PagedSortInput } from "../src/page.type";
import type { FaLayoutGridBreakPoint } from "@fast-element-plus/components/layoutGrid";
import type { TableColumnCtx, TableProps } from "element-plus";
import type { CSSProperties, PropType } from "vue";

type DefaultRow = any;

type Layout = "fixed" | "auto";

// type TreeProps = TableProps<DefaultRow>["treeProps"];
type TreeProps = {
	hasChildren?: string;
	children?: string;
	checkStrictly?: boolean;
};

export const tableProps = {
	/**
	 * @description table data
	 */
	data: {
		type: Array as PropType<DefaultRow[]>,
		default: (): DefaultRow[] => [],
	},
	/**
	 * @description size of Table
	 */
	size: useSizeProp,
	width: [String, Number],
	/**
	 * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
	 */
	height: [String, Number],
	/**
	 * @description table's max-height. The legal value is a number or the height in px
	 */
	maxHeight: [String, Number],
	/**
	 * @description whether width of column automatically fits its container
	 */
	fit: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description whether Table is striped
	 */
	stripe: Boolean,
	/**
	 * @description whether Table has vertical border
	 */
	border: Boolean,
	/**
	 * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
	 */
	rowKey: [String, Function] as PropType<TableProps<DefaultRow>["rowKey"]>,
	/**
	 * @description whether Table header is visible
	 */
	showHeader: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description whether to display a summary row
	 */
	showSummary: Boolean,
	/**
	 * @description displayed text for the first column of summary row
	 */
	sumText: String,
	/**
	 * @description custom summary method
	 */
	summaryMethod: Function as PropType<TableProps<DefaultRow>["summaryMethod"]>,
	/**
	 * @description function that returns custom class names for a row, or a string assigning class names for every row
	 */
	rowClassName: [String, Function] as PropType<TableProps<DefaultRow>["rowClassName"]>,
	/**
	 * @description function that returns custom style for a row, or an object assigning custom style for every row
	 */
	rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>["rowStyle"]>,
	/**
	 * @description function that returns custom class names for a cell, or a string assigning class names for every cell
	 */
	cellClassName: [String, Function] as PropType<TableProps<DefaultRow>["cellClassName"]>,
	/**
	 * @description function that returns custom style for a cell, or an object assigning custom style for every cell
	 */
	cellStyle: [Object, Function] as PropType<TableProps<DefaultRow>["cellStyle"]>,
	/**
	 * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
	 */
	headerRowClassName: [String, Function] as PropType<TableProps<DefaultRow>["headerRowClassName"]>,
	/**
	 * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
	 */
	headerRowStyle: [Object, Function] as PropType<TableProps<DefaultRow>["headerRowStyle"]>,
	/**
	 * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
	 */
	headerCellClassName: [String, Function] as PropType<TableProps<DefaultRow>["headerCellClassName"]>,
	/**
	 * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
	 */
	headerCellStyle: [Object, Function] as PropType<TableProps<DefaultRow>["headerCellStyle"]>,
	/**
	 * @description whether current row is highlighted
	 */
	highlightCurrentRow: Boolean,
	/**
	 * @description key of current row, a set only prop
	 */
	currentRowKey: [String, Number],
	/**
	 * @description displayed text when data is empty. You can customize this area with `#empty`
	 */
	emptyText: String,
	/**
	 * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
	 */
	expandRowKeys: Array as PropType<TableProps<DefaultRow>["expandRowKeys"]>,
	/**
	 * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
	 */
	defaultExpandAll: Boolean,
	/**
	 * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
	 */
	defaultSort: Object as PropType<TableProps<DefaultRow>["defaultSort"]>,
	/**
	 * @description the `effect` of the overflow tooltip
	 */
	tooltipEffect: String,
	/**
	 * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
	 */
	tooltipOptions: Object as PropType<TableProps<DefaultRow>["tooltipOptions"]>,
	/**
	 * @description method that returns rowspan and colspan
	 */
	spanMethod: Function as PropType<TableProps<DefaultRow>["spanMethod"]>,
	/**
	 * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
	 */
	selectOnIndeterminate: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description horizontal indentation of tree data
	 */
	indent: {
		type: Number,
		default: 16,
	},
	/**
	 * @description configuration for rendering nested data
	 */
	treeProps: {
		type: Object as PropType<TreeProps>,
		default: (): TreeProps => ({
			hasChildren: "hasChildren",
			children: "children",
			checkStrictly: false,
		}),
	},
	/**
	 * @description whether to lazy loading data
	 */
	lazy: Boolean,
	/**
	 * @description method for loading child row data, only works when `lazy` is true
	 */
	load: Function as PropType<TableProps<DefaultRow>["load"]>,
	style: {
		type: Object as PropType<CSSProperties>,
		default: (): CSSProperties => ({}),
	},
	className: {
		type: String,
		default: "",
	},
	/**
	 * @description sets the algorithm used to lay out table cells, rows, and columns
	 */
	tableLayout: {
		type: String as PropType<Layout>,
		default: "fixed",
	},
	/**
	 * @description always show scrollbar
	 */
	scrollbarAlwaysOn: Boolean,
	/**
	 * @description ensure main axis minimum-size doesn't follow the content
	 */
	flexible: Boolean,
	/**
	 * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
	 */
	showOverflowTooltip: [Boolean, Object] as PropType<TableProps<DefaultRow>["showOverflowTooltip"]>,
	scrollbarTabindex: {
		type: [Number, String],
		default: undefined,
	},
};

export const faTableProps = {
	...tableProps,
	/** @description whether Table has vertical border */
	border: {
		type: Boolean,
		default: true,
	},
	/** @description whether current row is highlighted */
	highlightCurrentRow: {
		type: Boolean,
		default: true,
	},
	/** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
	rowKey: {
		type: [String, Function] as PropType<TableProps<any>["rowKey"]>,
		default: "id",
	},
	/** @description 组件封装，原生的已经失效 method that returns rowspan and colspan */
	spanMethod: {
		type: Function as PropType<TableProps<DefaultRow>["spanMethod"]>,
		validator: (): boolean => {
			consoleWarn("FaTable", "'spanMethod' 属性，组件已经封装，外部使用会失效。");
			return false;
		},
	},
	/** @description 表格Key */
	tableKey: {
		type: String,
		default: (): string => stringUtil.generateRandomString(8),
	},
	/** @description 表格数据 */
	data: {
		type: definePropType<any[]>(Array),
		default: (): any[] => [],
	},
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: PagedInput) => Promise<PagedResult | any[]>>(Function),
	},
	/** @description 接口请求数据回调 */
	dataCallback: {
		type: definePropType<(data: any) => void>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
	/** @description 列配置 */
	columns: {
		type: definePropType<FaTableColumnCtx[]>([Array, Boolean]),
		default: (): FaTableColumnCtx[] => [],
	},
	/** @description 表格列改变 */
	columnsChange: {
		type: definePropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>(Function),
	},
	/** @description 显示搜素 */
	showSearch: Boolean,
	/** @description 搜索表单 Grid布局列配置 */
	searchFormCols: {
		type: definePropType<string | number | Record<FaLayoutGridBreakPoint, number>>([String, Number, Object]),
		default: (): string | number | Record<FaLayoutGridBreakPoint, number> => ({ xs: 3, sm: 3, md: 4, lg: 5, xl: 6 }),
	},
	/** @description 搜索表单 */
	searchForm: {
		type: Boolean,
		default: true,
	},
	/** @description 头部卡片 */
	headerCard: {
		type: Boolean,
		default: true,
	},
	/** @description 刷新按钮 */
	refreshBtn: {
		type: Boolean,
		default: true,
	},
	/** @description 搜索按钮 */
	searchBtn: {
		type: Boolean,
		default: true,
	},
	/** @description 列配置按钮 */
	columnSettingBtn: {
		type: Boolean,
		default: true,
	},
	/** @description 头部卡片右侧功能按钮 */
	toolBtn: {
		type: Boolean,
		default: true,
	},
	/** @description 隐藏搜索时间 */
	hideSearchTime: Boolean,
	/** @description 搜索时间范围 */
	dataSearchRange: {
		type: definePropType<FaTableDataRange>(String),
		default: "Past3D",
	},
	/** @description 分页 */
	pagination: {
		type: Boolean,
		default: true,
	},
	/** @description 隐藏图片 */
	hideImage: Boolean,
	/** @description 单选 */
	single: Boolean,
	/** @description 行点击选择 */
	rowClickSelection: Boolean,
	/** @description 树形数据 */
	treeData: Boolean,
	/** @description 配置选项 */
	props: {
		type: definePropType<{ span?: string; children?: string }>(Object),
		default: (): { span?: string; children?: string } => ({
			span: undefined,
			children: "children",
		}),
	},
	/** @description 自动刷新，当传入 data 时候，如果存在更改则自动刷新 */
	autoRefresh: {
		type: Boolean,
		default: true,
	},
	/**
	 * 等价于 Table-Column 的 selectable
	 * @description function that determines if a certain row can be selected, works when `type` is 'selection'
	 */
	rowSelectable: Function as PropType<TableColumnCtx<DefaultRow>["selectable"]>,
};

export const faTableEmits = {
	/** @description 当用户手动勾选数据行的 Checkbox 时触发的事件 */
	select: (selection: any[], row: any): boolean => isArray(selection) && isObject(row),
	/** @description 当用户手动勾选全选 Checkbox 时触发的事件 */
	selectAll: (selection: any[]): boolean => isArray(selection),
	/** @description 当选择项发生变化时会触发该事件 */
	selectionChange: (newSelection: any[]): boolean => isArray(newSelection),
	/** @description 当单元格 hover 进入时会触发该事件 */
	cellMouseEnter: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event): boolean =>
		isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
	/** @description 当单元格 hover 退出时会触发该事件 */
	cellMouseLeave: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event): boolean =>
		isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
	/** @description 当某个单元格被点击时会触发该事件 */
	cellClick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event): boolean =>
		isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
	/** @description 当某个单元格被双击击时会触发该事件 */
	cellDblclick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event): boolean =>
		isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
	/** @description 当某个单元格被鼠标右键点击时会触发该事件 */
	cellContextmenu: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event): boolean =>
		isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
	/** @description 当某一行被点击时会触发该事件 */
	rowClick: (row: any, column: TableColumnCtx<any>, event: Event): boolean => isObject(row) && isObject(column) && event instanceof Event,
	/** @description 当某一行被鼠标右键点击时会触发该事件 */
	rowContextmenu: (row: any, column: TableColumnCtx<any>, event: Event): boolean => isObject(row) && isObject(column) && event instanceof Event,
	/** @description 当某一行被双击时会触发该事件 */
	rowDblclick: (row: any, column: TableColumnCtx<any>, event: Event): boolean => isObject(row) && isObject(column) && event instanceof Event,
	/** @description 当某一列的表头被点击时会触发该事件 */
	headerClick: (column: TableColumnCtx<any>, event: Event): boolean => isObject(column) && event instanceof Event,
	/** @description 当某一列的表头被鼠标右键点击时触发该事件 */
	headerContextmenu: (column: TableColumnCtx<any>, event: Event): boolean => isObject(column) && event instanceof Event,
	/** @description 当表格的排序条件发生变化的时候会触发该事件 */
	sortChange: (data: { column: TableColumnCtx<any>; prop: string; order: "" | "ascending" | "descending" }): boolean => isObject(data),
	/** @description column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
	filterChange: (newFilters: any): boolean => isString(newFilters) || isNumber(newFilters) || isBoolean(newFilters) || isObject(newFilters),
	/** @description 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
	currentChange: (currentRow: any, oldCurrentRow: any): boolean => isObject(currentRow) && (isNull(oldCurrentRow) || isObject(oldCurrentRow)),
	/** @description 当拖动表头改变了列的宽度的时候会触发该事件 */
	headerDragend: (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, event: MouseEvent): boolean =>
		isNumber(newWidth) && isNumber(oldWidth) && isObject(column) && event instanceof MouseEvent,
	/** @description 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
	expandChange: (row: any, expanded: boolean | any[]): boolean => isObject(row) && (isBoolean(expanded) || isArray(expanded)),

	/** @description 表格刷新事件 */
	refresh: (params: PagedInput): boolean => isObject(params),
	/** @description 表格重置事件 */
	reset: (params: PagedInput): boolean => isObject(params),
	/** @description 分页页码改变事件 */
	sizeChange: (pageSize: number): boolean => isNumber(pageSize),
	/** @description 分页改变事件 */
	paginationChange: (pageIndex: number, pageSize: number): boolean => isNumber(pageIndex) && isNumber(pageSize),
	/** @description 自定义单元格点击事件 */
	customCellClick: (
		emitName: string,
		{ row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number } & FaTableDefaultSlotsResult
	): boolean => isString(emitName) && isObject(row) && isObject(column) && isNumber($index),
};

export type FaTableSlots = {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 */
	append: never;
	/** @description 当数据为空时自定义的内容 */
	empty: never;
	/** @description 表格顶部插槽 */
	topHeader: FaTableDefaultSlotsResult;
	/** @description 表格头部左侧插槽 */
	header: FaTableDefaultSlotsResult;
	/** @description 表格头部右侧功能按钮插槽 */
	toolButton: FaTableDefaultSlotsResult;
	/** @description 表格头部右侧高级操作按钮插槽，ElDropdownMenuItem 标签 */
	toolButtonAdv: FaTableDefaultSlotsResult;
	/** @description 表格操作列插槽 */
	operation: FaTableDefaultSlotsResult & {
		row: any;
		column: FaTableColumnCtx;
		$index: number;
	};
	/** @description 表格分页插槽 */
	pagination: {
		pageIndex: number;
		pageSize: number;
		totalRows: number;
		handleSizeChange: (val: number) => void;
		handlePaginationChange: (val: number) => void;
	};
	/** @description 表格页脚插槽 */
	footer: FaTableDefaultSlotsResult;
} & {
	[key: string]: FaTableDefaultSlotsResult & {
		/** @description slots为表格内容的时候才会返回 */
		row?: any;
		/** @description slot为表头内容的时候返回 'TableColumnCtx<any>' 否则返回 'FaTableColumnCtx' */
		column?: TableColumnCtx<any> | FaTableColumnCtx;
		/** @description slot为非搜索项的时候才会返回 */
		$index?: number;
		/** @description slot为搜索项的时候才会返回 */
		search?: () => void;
	};
};

export default defineComponent({
	name: "FaTable",
	props: faTableProps,
	emits: faTableEmits,
	slots: makeSlots<FaTableSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const {
			_globalSize,
			state,
			elementRef,
			tableRef,
			handleTableColumnAutoWidth,
			loadTableColumns,
			handleSizeChange,
			handlePaginationChange,
			defaultSearchTime,
			tableSearch,
			tableReset,
			doRender,
			doLoading,
			handleCustomCellClick,
		} = useTable(props, slots, emit);

		const columnSettingRef = ref<InstanceType<typeof FaTableColumnsSettingDialog>>();
		let lastRowIndex = 0;

		const indexMethod = (index: number): number => {
			if (index === 0) {
				lastRowIndex = 0;
			}
			if (state.spanColumns?.length > 0) {
				const rowspan = Number(state.tableSpanData["__table-index"][index]);
				if (rowspan === 0) {
					return lastRowIndex + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize + 1;
				} else {
					lastRowIndex++;
					return lastRowIndex + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize;
				}
			}
			return index + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize + 1;
		};

		const handleSelect = (selection: any[], row: any): void => {
			// 判断是否开启了单选
			if (props.single) {
				tableRef.value.clearSelection();
				if (selection.length > 0 && row) {
					tableRef.value.toggleRowSelection(row);
				}
			}
			emit("select", selection, row);
		};

		const handleSelectAll = (selection: any[]): void => {
			if (props.single) {
				// 判断是否已经选中数据
				if (state.selected) {
					// 默认选中的第一行
					if (state.tableData.length > 0) {
						tableRef.value.clearSelection();
						tableRef.value.toggleRowSelection(state.tableData[0]);
					}
				} else {
					tableRef.value.clearSelection();
				}
			}
			emit("selectAll", selection);
		};

		const handleSelectionChange = (newSelection: any[]): void => {
			newSelection.length === 0 ? (state.selected = false) : (state.selected = true);
			// 判断是否为单选
			if (props.single && newSelection.length > 0) {
				// 这里获取最后一个是因为选中改变的事件会触发多次，会带入旧的数据
				state.selectedList = [newSelection[newSelection.length - 1]];
			} else {
				state.selectedList = newSelection;
			}
			// 如果已经取消选择了，那么部分选择也应该要取消
			state.indeterminateSelectedListIds = state.indeterminateSelectedListIds.filter((f) => state.selectedListIds.some((s) => s === f));
			emit("selectionChange", state.selectedList);
		};

		const toggleRowIndeterminateSelection = (row: any, selected?: boolean): void => {
			const rowKey = isFunction(props.rowKey) ? props.rowKey(row) : row[props.rowKey];
			const curRow = state.tableData.find((f) => (isFunction(props.rowKey) ? props.rowKey(f) : f[props.rowKey] === rowKey));
			if (selected === true) {
				if (!state.indeterminateSelectedListIds.some((s) => s === rowKey)) {
					state.indeterminateSelectedListIds.push(rowKey);
				}
				tableRef.value.toggleRowSelection(curRow, true);
			} else if (selected === false) {
				const fIndex = state.indeterminateSelectedListIds.findIndex((f) => f === rowKey);
				if (fIndex >= 0) {
					state.indeterminateSelectedListIds.splice(fIndex, 1);
				}
				tableRef.value.toggleRowSelection(curRow, false);
			} else {
				const fIndex = state.indeterminateSelectedListIds.findIndex((f) => f === rowKey);
				if (fIndex >= 0) {
					state.indeterminateSelectedListIds.splice(fIndex, 1);
				} else {
					state.indeterminateSelectedListIds.push(rowKey);
				}
				tableRef.value.toggleRowSelection(curRow);
			}
		};

		const handleSortChange = ({
			column,
			prop,
			order,
		}: {
			column: TableColumnCtx<any> & { multiOrder?: "" | "ascending" | "descending" };
			prop: string;
			order: any;
		}): void => {
			if (!column.multiOrder) {
				column.multiOrder = "descending";
			} else if (column.multiOrder === "descending") {
				column.multiOrder = "ascending";
			} else {
				column.multiOrder = null;
			}
			// 排序集合非空判断
			state.searchParam.sortList = [...new Set([...(props.initParam?.sortList ?? []), ...(state.searchParam?.sortList ?? [])])];

			// 去原来的列中查找表格的列数据
			const orgColumn = state.orgColumns.find((f) => f.prop === prop);
			const enField = orgColumn.sortableField ?? orgColumn.prop ?? orgColumn.property;
			const fieldIndex = state.searchParam.sortList.findIndex((f: PagedSortInput) => f.enField === enField);
			if (!column.multiOrder) {
				// 如果是空的，删除排序
				state.searchParam.sortList.splice(fieldIndex, 1);
			} else if (fieldIndex === -1) {
				state.searchParam.sortList.push({
					enField,
					cnField: orgColumn.label,
					mode: column.multiOrder,
				});
			} else {
				state.searchParam.sortList[fieldIndex].mode = column.multiOrder;
			}
			// 判断最后的排序集合中是否还存在数据，如果不存在，则删除排序集合
			if (state.searchParam.sortList.length === 0) {
				delete state.searchParam.sortList;
			}
			emit("sortChange", { column, prop, order: column.multiOrder });
			tableSearch();
		};

		const handleCurrentChange = (currentRow: any, oldCurrentRow: any): void => {
			if (!currentRow) {
				// 这里为空的时候，会导致 Header 中的不确定状态还是true的状态
				// tableRef.value.clearSelection();
				return;
			}
			if (props.rowClickSelection) {
				// 判断是否为单选
				if (props.single && oldCurrentRow) {
					tableRef.value.toggleRowSelection(oldCurrentRow);
				}
				tableRef.value.toggleRowSelection(currentRow);
			}
			emit("currentChange", currentRow, oldCurrentRow);
		};

		const handleCellClassName = ({
			row,
			column,
			rowIndex,
			columnIndex,
		}: {
			row: any;
			column: TableColumnCtx<any>;
			rowIndex: number;
			columnIndex: number;
		}): string => {
			let localCellClassName = null;
			// 判断是否为选择列
			if (column.type === "selection") {
				// 判断是否在部分选中的集合中
				const rowKey = isFunction(props.rowKey) ? props.rowKey(row) : row[props.rowKey];
				if (state.indeterminateSelectedListIds.some((s) => s === rowKey)) {
					localCellClassName = "fa-table__selection-column__indeterminate";
				}
			}
			const columnInfo = state.tableColumns.find((f) => f.prop === column.property);
			if (columnInfo?.dataDeleteField) {
				if (row && row[columnInfo.dataDeleteField] === true) {
					if (localCellClassName) {
						localCellClassName += " fa-table__data-delete-column";
					} else {
						localCellClassName = "fa-table__data-delete-column";
					}
				}
			}
			if (columnInfo?.type === "submitInfo") {
				if (localCellClassName) {
					localCellClassName += " fa-table__line-height-normal-column";
				} else {
					localCellClassName = "fa-table__line-height-normal-column";
				}
			}
			if (columnInfo?.type === "date" || columnInfo?.type === "time" || columnInfo?.type === "dateTime") {
				if (columnInfo?.dateFix) {
					if (localCellClassName) {
						localCellClassName += " fa-table__line-height-normal-column";
					} else {
						localCellClassName = "fa-table__line-height-normal-column";
					}
				}
			}
			if (props.cellClassName) {
				let cellClassName = null;
				if (isString(props.cellClassName)) {
					cellClassName = props.cellClassName;
				} else {
					cellClassName = props.cellClassName({ row, column, rowIndex, columnIndex });
				}
				if (!cellClassName) {
					return localCellClassName;
				}
				if (localCellClassName) {
					return `${localCellClassName} ${cellClassName}`;
				} else {
					return cellClassName;
				}
			} else {
				return localCellClassName;
			}
		};

		const handleHeaderCellClassName = ({
			row,
			column,
			rowIndex,
			columnIndex,
		}: {
			row: any;
			column: TableColumnCtx<any> & { multiOrder?: "" | "ascending" | "descending" };
			rowIndex: number;
			columnIndex: number;
		}): string => {
			// TODO：不晓得这里有无问题，EL 更新了还未测试
			column.order = column.multiOrder as any;
			if (props.headerCellClassName) {
				if (isFunction(props.headerCellClassName)) {
					return props.headerCellClassName({ row, column, rowIndex, columnIndex });
				} else {
					return props.headerCellClassName;
				}
			}
			return null;
		};

		const handleSpanMethod = ({
			row,
			column,
			rowIndex,
			columnIndex,
		}: {
			row: any;
			column: TableColumnCtx<any>;
			rowIndex: number;
			columnIndex: number;
		}): number[] | { rowspan: number; colspan: number } | void => {
			/** @description 原生的 span-method 会失效 */
			const pKey = column.property ?? column.columnKey;
			if (state.spanColumns.findIndex((f) => f.prop === pKey) !== -1) {
				const rowspan = Number(state.tableSpanData[pKey][rowIndex]);
				if (rowspan > 0) {
					return { rowspan, colspan: 1 };
				}
				return { rowspan: 0, colspan: 0 };
			}
			return { rowspan: 1, colspan: 1 };
		};

		const handleHeaderDragend = async (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, event: MouseEvent): Promise<void> => {
			state.orgColumns.forEach((f) => {
				if (column.property === f.prop) {
					f.width = newWidth;
					f.smallWidth = newWidth;
				}
			});
			emit("headerDragend", newWidth, oldWidth, column, event);
			await clickUtil.debounceAsync(columnSettingRef.value.change, 500);
		};

		const handleImagePreview = (url: string): void => {
			state.previewList = [url];
			state.imagePreview = true;
		};

		onMounted(async () => {
			state.initParam = props.initParam;
			loadTableColumns();
			defaultSearchTime();
			// 初始化搜索表单的时候，如果有默认搜索参数，则重置默认的搜索参数
			Object.keys(props.initParam ?? {}).forEach((key) => {
				state.searchParam[key] = props.initParam[key];
			});
			await tableSearch();

			watch(
				() => props.initParam,
				() => {
					// 如果初始化参数改变了，则需要改变对应的搜索参数
					Object.keys(props.initParam ?? {}).forEach((key) => {
						state.searchParam[key] = props.initParam[key];
					});
				},
				{ deep: true }
			);

			watch(
				() => props.data,
				async () => {
					if (!props.requestApi && props.autoRefresh) {
						await tableSearch();
					}
				},
				{ deep: true, immediate: true }
			);

			watchEffect(async () => {
				const element = elementRef.value;
				if (element) {
					const observer = new ResizeObserver((entries) => {
						for (const entry of entries) {
							const { width, height } = entry.contentRect;
							state.tableWidth = width;
							state.tableHeight = height;
						}
						clickUtil.debounceAsync(async () => {
							await handleTableColumnAutoWidth();
						}, 100);
					});
					observer.observe(element);

					return (): void => {
						observer.disconnect();
					};
				}
			});
		});

		onActivated(async () => {
			// 解决 keep-alive 后自动列宽失效的问题
			await handleTableColumnAutoWidth();
		});

		const searchFormSlotNames = computed(() => state.searchColumns.filter((f) => f.search.slot).map((m) => m.search.slot));

		const tableColumnSlotNames = computed(() => state.tableColumns.filter((f) => f.slot).map((m) => m.slot));

		const tableColumnOmitNames = ["multiOrder", "columnID", "order", "sortableField", "disabledSortable", "spanProp", "pureSearch", "search"];

		const elTableProps = useProps(props, tableProps, ["data", "spanMethod", "headerCellClassName", "cellClassName"]);

		useRender(() => (
			<div
				ref={elementRef}
				class={[
					"fa-table",
					`fa-table-${_globalSize.value}`,
					`fa-table__${props.tableKey ?? "notFound"}`,
					{ fa__click__disabled: state.loading },
				]}
				style={{
					"--fa-table-width": `${state.tableWidth ? `${state.tableWidth}px` : ""}`,
					"--fa-table-height": `${state.tableHeight ? `${state.tableHeight}px` : ""}`,
				}}
			>
				<FaTableSearchForm
					show={props.searchForm && state.showSearch}
					vSlots={pick(slots, searchFormSlotNames.value)}
					cols={props.searchFormCols}
					search={tableSearch}
					reset={tableReset}
				/>
				{slots.topHeader && (
					<div class="el-card fa-table__header">{slots.topHeader({ ...{ search: tableSearch }, ...getTableDefaultSlots(state) })}</div>
				)}
				<div class="el-card fa-table__main">
					{props.headerCard && (
						<div class="fa-table__main-header">
							<div class="fa-table__main-header-left">
								{slots.header && slots.header({ ...{ search: tableSearch }, ...getTableDefaultSlots(state) })}
							</div>
							<div class="fa-table__main-header-right">
								{props.toolBtn && (
									<Fragment>
										<div class="fa-table__main-header-right__div-search">
											<ElInput
												class="fa-table__main-header-right__input-search"
												disabled={state.loading}
												prefixIcon={Search}
												placeholder="关键字搜索"
												vModel_trim={state.searchParam.searchValue}
												clearable
												onCompositionupdate={(e: CompositionEvent) => {
													state.searchValueUpdate = e.data;
												}}
												onCompositionend={(e: CompositionEvent) => {
													state.searchValueUpdate = "";
												}}
												onChange={() => tableSearch()}
											/>
											<div class="fa-table__main-header-right__div-search__hidden">
												{state.searchParam.searchValue}
												{state.searchValueUpdate}
											</div>
										</div>
										{props.requestApi && !props.hideSearchTime && (
											<ElDatePicker
												class="fa-table__main-header-right__data-search"
												popperClass="fa-table__main-header-right__data-search__popper"
												disabled={state.loading}
												type="daterange"
												vModel={state.searchParam.searchTimeList}
												defaultTime={dateUtil.getDefaultTime()}
												shortcuts={dateUtil.getShortcuts()}
												valueFormat="YYYY-MM-DD HH:mm:ss"
												disabledDate={dateUtil.getDisabledDate}
												clearable={false}
												teleported={false}
												unlinkPanels
												onChange={() => tableSearch()}
											/>
										)}
										{slots.toolButton && slots.toolButton({ ...{ search: tableSearch }, ...getTableDefaultSlots(state) })}
										{props.refreshBtn && (
											<ElButton
												loading={state.loading}
												loadingIcon={Eleme}
												title="刷新"
												circle
												icon={Refresh}
												onClick={() => tableSearch()}
											/>
										)}
										{props.searchBtn && state.searchColumns.length > 0 && (
											<ElButton
												loading={state.loading}
												loadingIcon={Eleme}
												title={state.showSearch ? "隐藏搜索栏" : "显示搜索栏"}
												circle
												icon={Search}
												onClick={() => (state.showSearch = !state.showSearch)}
											/>
										)}
										{props.columnSettingBtn && !props.columns && (
											<ElButton
												loading={state.loading}
												loadingIcon={Eleme}
												title="表格列配置"
												circle
												icon={Setting}
												onClick={() => columnSettingRef.value.open()}
											/>
										)}
										{slots.toolButtonAdv && (
											<ElDropdown title="高级操作" trigger="click">
												{{
													default: () => (
														<ElButton loading={state.loading} loadingIcon={Eleme} circle icon={More}></ElButton>
													),
													dropdown: () => (
														<ElDropdownMenu>
															{slots.toolButtonAdv({ ...{ search: tableSearch }, ...getTableDefaultSlots(state) })}
														</ElDropdownMenu>
													),
												}}
											</ElDropdown>
										)}
									</Fragment>
								)}
							</div>
						</div>
					)}
					<ElTable
						{...elTableProps.value}
						ref={tableRef}
						vLoading={state.loading}
						element-loading-text={state.loadingText}
						data={state.tableData}
						spanMethod={handleSpanMethod}
						headerCellClassName={handleHeaderCellClassName}
						cellClassName={handleCellClassName}
						onSelectionChange={handleSelectionChange}
						onSortChange={handleSortChange}
						onSelect={handleSelect}
						onSelectAll={handleSelectAll}
						onCurrentChange={handleCurrentChange}
						onHeaderDragend={handleHeaderDragend}
						onCellMouseEnter={(row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) =>
							emit("cellMouseEnter", row, column, cell, event)
						}
						onCellMouseLeave={(row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) =>
							emit("cellMouseLeave", row, column, cell, event)
						}
						onCellClick={(row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) =>
							emit("cellClick", row, column, cell, event)
						}
						onCellDblclick={(row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) =>
							emit("cellDblclick", row, column, cell, event)
						}
						onCellContextmenu={(row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) =>
							emit("cellContextmenu", row, column, cell, event)
						}
						onRowClick={(row: any, column: TableColumnCtx<any>, event: Event) => emit("rowClick", row, column, event)}
						onRowContextmenu={(row: any, column: TableColumnCtx<any>, event: Event) => emit("rowContextmenu", row, column, event)}
						onRowDblclick={(row: any, column: TableColumnCtx<any>, event: Event) => emit("rowDblclick", row, column, event)}
						onHeaderClick={(column: TableColumnCtx<any>, event: Event) => emit("headerClick", column, event)}
						onHeaderContextmenu={(column: TableColumnCtx<any>, event: Event) => emit("headerContextmenu", column, event)}
						onFilterChange={(newFilters: any) => emit("filterChange", newFilters)}
						onExpandChange={(row: any, expanded: boolean | any[]) => emit("expandChange", row, expanded)}
					>
						{{
							append: () => slots.append && slots.append(),
							empty: () => (
								<div class="fa-table__empty">
									{slots.empty ? (
										slots.empty()
									) : (
										<Fragment>
											<ElIcon>
												<NotData />
											</ElIcon>
											<div>暂无数据</div>
										</Fragment>
									)}
								</div>
							),
							default: () => (
								<Fragment>
									<ElTableColumn
										className="fa-table__index-column"
										type="index"
										fixed="left"
										width={
											state.tablePagination.pageIndex * state.tablePagination.pageSize >= 100
												? state.tablePagination.pageIndex * state.tablePagination.pageSize >= 1000
													? 50
													: 40
												: 30
										}
										align="center"
										index={indexMethod}
										showOverflowTooltip={false}
										resizable={false}
										columnKey="__table-index"
									/>
									<ElTableColumn
										className="fa-table__selection-column"
										type="selection"
										fixed="left"
										width={35}
										align="center"
										reserveSelection
										showOverflowTooltip={false}
										resizable={false}
										columnKey="__table-selection"
										selectable={props.rowSelectable}
									/>
									{slots.operation && (
										<ElTableColumn
											fixed="right"
											width={state.operationColumnWidth}
											headerAlign="center"
											align="center"
											showOverflowTooltip={false}
											className="fa-table__operation-column"
											resizable={false}
											columnKey="__table-operation"
										>
											{{
												header: () => (
													<div class="fa-table__auto-width-column__cell-header __fa-table__auto-width-column__cell-header____table-operation">
														<span>操作</span>
													</div>
												),
												default: ({ row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number }) => (
													<div class="fa-table__auto-width-column__cell __fa-table__auto-width-column__cell____table-operation">
														{slots.operation({
															row,
															column,
															$index,
															...{ search: tableSearch },
															...getTableDefaultSlots(state),
														})}
													</div>
												),
											}}
										</ElTableColumn>
									)}
									{state.tableColumns?.length === 0
										? slots.default && slots.default()
										: state.tableColumns.map(
												(col) =>
													col.show &&
													(col.type === "expand" ? (
														<ElTableColumn {...col} width={35} fixed={col.fixed ?? "left"} resizable={false}>
															{{
																default: ({
																	row,
																	column,
																	$index,
																}: {
																	row: any;
																	column: FaTableColumnCtx;
																	$index: number;
																}) => (
																	<Fragment>
																		{col.render &&
																			col.render({ row, column, $index, ...getTableDefaultSlots(state) })}
																		{col.slot &&
																			slots[col.slot] &&
																			slots[col.slot]({ row, column, $index, ...getTableDefaultSlots(state) })}
																	</Fragment>
																),
															}}
														</ElTableColumn>
													) : (
														col.prop && (
															<FaTableColumn
																vSlots={pick(slots, tableColumnSlotNames.value)}
																{...omit(col, tableColumnOmitNames)}
																resizable={true}
																onImagePreview={handleImagePreview}
																onCustomCellClick={handleCustomCellClick}
															/>
														)
													))
											)}
								</Fragment>
							),
						}}
					</ElTable>
					<div class="fa-table__main-footer">
						<div class="fa-table__main-footer__left">
							{slots.footer && slots.footer({ ...{ search: tableSearch }, ...getTableDefaultSlots(state) })}
						</div>
						{slots.pagination ? (
							slots.pagination({
								pageIndex: state.tablePagination.pageIndex,
								pageSize: state.tablePagination.pageSize,
								totalRows: state.tablePagination.totalRows,
								handleSizeChange,
								handlePaginationChange,
							})
						) : (
							<Fragment>
								{props.pagination ? (
									<FaTablePagination sizeChange={handleSizeChange} currentChange={handlePaginationChange} />
								) : (
									<ElPagination class="fa-table-pagination" size="small" layout="total" total={state.tableData.length} />
								)}
							</Fragment>
						)}
					</div>
				</div>
				{state.imagePreview && (
					<ElImageViewer
						closeOnPressEscape
						hideOnClickModal
						teleported
						onClose={() => (state.imagePreview = false)}
						urlList={state.previewList}
					/>
				)}
				{<FaTableColumnsSettingDialog ref={columnSettingRef} save={props.columnsChange} />}
			</div>
		));

		return useExpose(expose, {
			/** @description 用于多选表格，清空用户的选择 */
			clearSelection: computed(() => tableRef.value?.clearSelection),
			/** @description 返回当前选中的行 */
			getSelectionRows: computed(() => tableRef.value?.getSelectionRows),
			/** @description 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
			toggleRowSelection: computed(() => tableRef.value?.toggleRowSelection),
			/** @description 用于多选表格，切换全选和全不选 */
			toggleAllSelection: computed(() => tableRef.value?.toggleAllSelection),
			/** @description 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。 */
			toggleRowExpansion: computed(() => tableRef.value?.toggleRowExpansion),
			/** @description 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。 */
			setCurrentRow: computed(() => tableRef.value?.setCurrentRow),
			/** @description 用于清空排序条件，数据会恢复成未排序的状态 */
			clearSort: computed(() => tableRef.value?.clearSort),
			/** @description 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器 */
			clearFilter: computed(() => tableRef.value?.clearFilter),
			/** @description 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局 */
			doLayout: computed(() => tableRef.value?.doLayout),
			/** @description 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。 */
			sort: computed(() => tableRef.value?.sort),
			/** @description 滚动到一组特定坐标 */
			scrollTo: computed(() => tableRef.value?.scrollTo),
			/** @description 设置垂直滚动位置 */
			setScrollTop: computed(() => tableRef.value?.setScrollTop),
			/** @description 设置水平滚动位置 */
			setScrollLeft: computed(() => tableRef.value?.setScrollLeft),
			/** @description 获取表列的 context */
			columns: computed(() => tableRef.value?.columns),
			/** @description 适用于 lazy Table, 需要设置 rowKey, 更新 key children */
			updateKeyChildren: computed(() => tableRef.value?.updateKeyChildren),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 表格数据 */
			tableData: computed(() => state.tableData),
			/** @description 分页数据 */
			tablePagination: computed(() => state.tablePagination),
			/** @description 搜索参数 */
			searchParam: computed(() => state.searchParam),
			/** @description 选中状态 */
			selected: computed(() => state.selected),
			/** @description 选中数据列表 */
			selectedList: computed(() => state.selectedList),
			/** @description 选中数据 rowKey 列表 */
			selectedListIds: computed(() => state.selectedListIds),
			/** @description 部分选中数据 rowKey 列表 */
			indeterminateSelectedListIds: computed(() => state.indeterminateSelectedListIds),
			/** @description 表格宽度 */
			tableWidth: computed(() => state.tableWidth),
			/** @description 表格高度 */
			tableHeight: computed(() => state.tableHeight),
			/** @description 部分选中（样式不一样而已），用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
			toggleRowIndeterminateSelection,
			/** @description 异步方法，刷新表格 */
			refresh: tableSearch,
			/** @description 异步方法，重置表格 */
			reset: tableReset,
			/** @description 对 Table 进行重新渲染。当 TableKey 发生变化的时候可以通过此方法重新渲染表格 */
			doRender,
			/** @description Table 加载 */
			doLoading,
		});
	},
});
