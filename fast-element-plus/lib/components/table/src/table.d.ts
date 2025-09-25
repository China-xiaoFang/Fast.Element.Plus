import { FaTableChangeColumnsCtx, FaTableColumnCtx, FaTableDataRange, FaTableDefaultSlotsResult } from './table.type';
import { PagedInput, PagedResult } from '../src/page.type';
import { FaLayoutGridBreakPoint } from '../../layoutGrid';
import { TableColumnCtx, TableProps } from 'element-plus';
import { CSSProperties, PropType } from 'vue';
type DefaultRow = any;
type Layout = "fixed" | "auto";
type TreeProps = {
    hasChildren?: string;
    children?: string;
    checkStrictly?: boolean;
};
export declare const tableProps: {
    /**
     * @description table data
     */
    data: {
        type: PropType<DefaultRow[]>;
        default: () => DefaultRow[];
    };
    /**
     * @description size of Table
     */
    size: {
        readonly type: PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
     */
    height: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's max-height. The legal value is a number or the height in px
     */
    maxHeight: (NumberConstructor | StringConstructor)[];
    /**
     * @description whether width of column automatically fits its container
     */
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether Table is striped
     */
    stripe: BooleanConstructor;
    /**
     * @description whether Table has vertical border
     */
    border: BooleanConstructor;
    /**
     * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
     */
    rowKey: PropType<TableProps<DefaultRow>["rowKey"]>;
    /**
     * @description whether Table header is visible
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether to display a summary row
     */
    showSummary: BooleanConstructor;
    /**
     * @description displayed text for the first column of summary row
     */
    sumText: StringConstructor;
    /**
     * @description custom summary method
     */
    summaryMethod: PropType<TableProps<DefaultRow>["summaryMethod"]>;
    /**
     * @description function that returns custom class names for a row, or a string assigning class names for every row
     */
    rowClassName: PropType<TableProps<DefaultRow>["rowClassName"]>;
    /**
     * @description function that returns custom style for a row, or an object assigning custom style for every row
     */
    rowStyle: PropType<TableProps<DefaultRow>["rowStyle"]>;
    /**
     * @description function that returns custom class names for a cell, or a string assigning class names for every cell
     */
    cellClassName: PropType<TableProps<DefaultRow>["cellClassName"]>;
    /**
     * @description function that returns custom style for a cell, or an object assigning custom style for every cell
     */
    cellStyle: PropType<TableProps<DefaultRow>["cellStyle"]>;
    /**
     * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
     */
    headerRowClassName: PropType<TableProps<DefaultRow>["headerRowClassName"]>;
    /**
     * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
     */
    headerRowStyle: PropType<TableProps<DefaultRow>["headerRowStyle"]>;
    /**
     * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
     */
    headerCellClassName: PropType<TableProps<DefaultRow>["headerCellClassName"]>;
    /**
     * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
     */
    headerCellStyle: PropType<TableProps<DefaultRow>["headerCellStyle"]>;
    /**
     * @description whether current row is highlighted
     */
    highlightCurrentRow: BooleanConstructor;
    /**
     * @description key of current row, a set only prop
     */
    currentRowKey: (NumberConstructor | StringConstructor)[];
    /**
     * @description displayed text when data is empty. You can customize this area with `#empty`
     */
    emptyText: StringConstructor;
    /**
     * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
     */
    expandRowKeys: PropType<TableProps<DefaultRow>["expandRowKeys"]>;
    /**
     * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
     */
    defaultExpandAll: BooleanConstructor;
    /**
     * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
     */
    defaultSort: PropType<TableProps<DefaultRow>["defaultSort"]>;
    /**
     * @description the `effect` of the overflow tooltip
     */
    tooltipEffect: StringConstructor;
    /**
     * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
     */
    tooltipOptions: PropType<TableProps<DefaultRow>["tooltipOptions"]>;
    /**
     * @description method that returns rowspan and colspan
     */
    spanMethod: PropType<TableProps<DefaultRow>["spanMethod"]>;
    /**
     * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
     */
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description horizontal indentation of tree data
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description configuration for rendering nested data
     */
    treeProps: {
        type: PropType<TreeProps>;
        default: () => TreeProps;
    };
    /**
     * @description whether to lazy loading data
     */
    lazy: BooleanConstructor;
    /**
     * @description method for loading child row data, only works when `lazy` is true
     */
    load: PropType<TableProps<DefaultRow>["load"]>;
    style: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description sets the algorithm used to lay out table cells, rows, and columns
     */
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    /**
     * @description always show scrollbar
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description ensure main axis minimum-size doesn't follow the content
     */
    flexible: BooleanConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
     */
    showOverflowTooltip: PropType<TableProps<DefaultRow>["showOverflowTooltip"]>;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
};
export declare const faTableProps: {
    /** @description whether Table has vertical border */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether current row is highlighted */
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description 组件封装，原生的已经失效 method that returns rowspan and colspan */
    spanMethod: {
        type: PropType<TableProps<DefaultRow>["spanMethod"]>;
        validator: () => boolean;
    };
    /** @description 表格Key */
    tableKey: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 表格数据 */
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** @description 接口请求数据回调 */
    dataCallback: {
        type: PropType<(data: any) => void>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 列配置 */
    columns: {
        type: PropType<FaTableColumnCtx[]>;
        default: () => FaTableColumnCtx[];
    };
    /** @description 表格列改变 */
    columnsChange: {
        type: PropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>;
    };
    /** @description 搜索表单 Grid布局列配置 */
    searchFormCols: {
        type: PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => string | number | Record<FaLayoutGridBreakPoint, number>;
    };
    /** @description 搜索表单 */
    searchForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片 */
    headerCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 刷新按钮 */
    refreshBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 搜索按钮 */
    searchBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 列配置按钮 */
    columnSettingBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片右侧功能按钮 */
    toolBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏搜索时间 */
    hideSearchTime: BooleanConstructor;
    /** @description 搜索时间范围 */
    dataSearchRange: {
        type: PropType<FaTableDataRange>;
        default: string;
    };
    /** @description 分页 */
    pagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏图片 */
    hideImage: BooleanConstructor;
    /** @description 单选 */
    single: BooleanConstructor;
    /** @description 行点击选择 */
    rowClickSelection: BooleanConstructor;
    /** @description 树形数据 */
    treeData: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: PropType<{
            span?: string;
            children?: string;
        }>;
        default: () => {
            span?: string;
            children?: string;
        };
    };
    /** @description 自动刷新，当传入 data 时候，如果存在更改则自动刷新 */
    autoRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 等价于 Table-Column 的 selectable
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    rowSelectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description size of Table
     */
    size: {
        readonly type: PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
     */
    height: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's max-height. The legal value is a number or the height in px
     */
    maxHeight: (NumberConstructor | StringConstructor)[];
    /**
     * @description whether width of column automatically fits its container
     */
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether Table is striped
     */
    stripe: BooleanConstructor;
    /**
     * @description whether Table header is visible
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether to display a summary row
     */
    showSummary: BooleanConstructor;
    /**
     * @description displayed text for the first column of summary row
     */
    sumText: StringConstructor;
    /**
     * @description custom summary method
     */
    summaryMethod: PropType<TableProps<DefaultRow>["summaryMethod"]>;
    /**
     * @description function that returns custom class names for a row, or a string assigning class names for every row
     */
    rowClassName: PropType<TableProps<DefaultRow>["rowClassName"]>;
    /**
     * @description function that returns custom style for a row, or an object assigning custom style for every row
     */
    rowStyle: PropType<TableProps<DefaultRow>["rowStyle"]>;
    /**
     * @description function that returns custom class names for a cell, or a string assigning class names for every cell
     */
    cellClassName: PropType<TableProps<DefaultRow>["cellClassName"]>;
    /**
     * @description function that returns custom style for a cell, or an object assigning custom style for every cell
     */
    cellStyle: PropType<TableProps<DefaultRow>["cellStyle"]>;
    /**
     * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
     */
    headerRowClassName: PropType<TableProps<DefaultRow>["headerRowClassName"]>;
    /**
     * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
     */
    headerRowStyle: PropType<TableProps<DefaultRow>["headerRowStyle"]>;
    /**
     * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
     */
    headerCellClassName: PropType<TableProps<DefaultRow>["headerCellClassName"]>;
    /**
     * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
     */
    headerCellStyle: PropType<TableProps<DefaultRow>["headerCellStyle"]>;
    /**
     * @description key of current row, a set only prop
     */
    currentRowKey: (NumberConstructor | StringConstructor)[];
    /**
     * @description displayed text when data is empty. You can customize this area with `#empty`
     */
    emptyText: StringConstructor;
    /**
     * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
     */
    expandRowKeys: PropType<TableProps<DefaultRow>["expandRowKeys"]>;
    /**
     * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
     */
    defaultExpandAll: BooleanConstructor;
    /**
     * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
     */
    defaultSort: PropType<TableProps<DefaultRow>["defaultSort"]>;
    /**
     * @description the `effect` of the overflow tooltip
     */
    tooltipEffect: StringConstructor;
    /**
     * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
     */
    tooltipOptions: PropType<TableProps<DefaultRow>["tooltipOptions"]>;
    /**
     * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
     */
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description horizontal indentation of tree data
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description configuration for rendering nested data
     */
    treeProps: {
        type: PropType<TreeProps>;
        default: () => TreeProps;
    };
    /**
     * @description whether to lazy loading data
     */
    lazy: BooleanConstructor;
    /**
     * @description method for loading child row data, only works when `lazy` is true
     */
    load: PropType<TableProps<DefaultRow>["load"]>;
    style: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description sets the algorithm used to lay out table cells, rows, and columns
     */
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    /**
     * @description always show scrollbar
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description ensure main axis minimum-size doesn't follow the content
     */
    flexible: BooleanConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
     */
    showOverflowTooltip: PropType<TableProps<DefaultRow>["showOverflowTooltip"]>;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
};
export declare const faTableEmits: {
    /** @description 当用户手动勾选数据行的 Checkbox 时触发的事件 */
    select: (selection: any[], row: any) => boolean;
    /** @description 当用户手动勾选全选 Checkbox 时触发的事件 */
    selectAll: (selection: any[]) => boolean;
    /** @description 当选择项发生变化时会触发该事件 */
    selectionChange: (newSelection: any[]) => boolean;
    /** @description 当单元格 hover 进入时会触发该事件 */
    cellMouseEnter: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当单元格 hover 退出时会触发该事件 */
    cellMouseLeave: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被点击时会触发该事件 */
    cellClick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被双击击时会触发该事件 */
    cellDblclick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被鼠标右键点击时会触发该事件 */
    cellContextmenu: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某一行被点击时会触发该事件 */
    rowClick: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一行被鼠标右键点击时会触发该事件 */
    rowContextmenu: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一行被双击时会触发该事件 */
    rowDblclick: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一列的表头被点击时会触发该事件 */
    headerClick: (column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一列的表头被鼠标右键点击时触发该事件 */
    headerContextmenu: (column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当表格的排序条件发生变化的时候会触发该事件 */
    sortChange: (data: {
        column: TableColumnCtx<any>;
        prop: string;
        order: "" | "ascending" | "descending";
    }) => boolean;
    /** @description column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
    filterChange: (newFilters: any) => boolean;
    /** @description 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
    currentChange: (currentRow: any, oldCurrentRow: any) => boolean;
    /** @description 当拖动表头改变了列的宽度的时候会触发该事件 */
    headerDragend: (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, event: MouseEvent) => boolean;
    /** @description 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
    expandChange: (row: any, expanded: boolean | any[]) => boolean;
    /** @description 表格刷新事件 */
    refresh: (params: PagedInput) => boolean;
    /** @description 表格重置事件 */
    reset: (params: PagedInput) => boolean;
    /** @description 分页页码改变事件 */
    sizeChange: (pageSize: number) => boolean;
    /** @description 分页改变事件 */
    paginationChange: (pageIndex: number, pageSize: number) => boolean;
    /** @description 自定义单元格点击事件 */
    customCellClick: (emitName: string, { row, column, $index }: {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    } & FaTableDefaultSlotsResult) => boolean;
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
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description whether Table has vertical border */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether current row is highlighted */
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description 组件封装，原生的已经失效 method that returns rowspan and colspan */
    spanMethod: {
        type: PropType<TableProps<DefaultRow>["spanMethod"]>;
        validator: () => boolean;
    };
    /** @description 表格Key */
    tableKey: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 表格数据 */
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** @description 接口请求数据回调 */
    dataCallback: {
        type: PropType<(data: any) => void>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 列配置 */
    columns: {
        type: PropType<FaTableColumnCtx[]>;
        default: () => FaTableColumnCtx[];
    };
    /** @description 表格列改变 */
    columnsChange: {
        type: PropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>;
    };
    /** @description 搜索表单 Grid布局列配置 */
    searchFormCols: {
        type: PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => string | number | Record<FaLayoutGridBreakPoint, number>;
    };
    /** @description 搜索表单 */
    searchForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片 */
    headerCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 刷新按钮 */
    refreshBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 搜索按钮 */
    searchBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 列配置按钮 */
    columnSettingBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片右侧功能按钮 */
    toolBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏搜索时间 */
    hideSearchTime: BooleanConstructor;
    /** @description 搜索时间范围 */
    dataSearchRange: {
        type: PropType<FaTableDataRange>;
        default: string;
    };
    /** @description 分页 */
    pagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏图片 */
    hideImage: BooleanConstructor;
    /** @description 单选 */
    single: BooleanConstructor;
    /** @description 行点击选择 */
    rowClickSelection: BooleanConstructor;
    /** @description 树形数据 */
    treeData: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: PropType<{
            span?: string;
            children?: string;
        }>;
        default: () => {
            span?: string;
            children?: string;
        };
    };
    /** @description 自动刷新，当传入 data 时候，如果存在更改则自动刷新 */
    autoRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 等价于 Table-Column 的 selectable
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    rowSelectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description size of Table
     */
    size: {
        readonly type: PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
     */
    height: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's max-height. The legal value is a number or the height in px
     */
    maxHeight: (NumberConstructor | StringConstructor)[];
    /**
     * @description whether width of column automatically fits its container
     */
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether Table is striped
     */
    stripe: BooleanConstructor;
    /**
     * @description whether Table header is visible
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether to display a summary row
     */
    showSummary: BooleanConstructor;
    /**
     * @description displayed text for the first column of summary row
     */
    sumText: StringConstructor;
    /**
     * @description custom summary method
     */
    summaryMethod: PropType<TableProps<DefaultRow>["summaryMethod"]>;
    /**
     * @description function that returns custom class names for a row, or a string assigning class names for every row
     */
    rowClassName: PropType<TableProps<DefaultRow>["rowClassName"]>;
    /**
     * @description function that returns custom style for a row, or an object assigning custom style for every row
     */
    rowStyle: PropType<TableProps<DefaultRow>["rowStyle"]>;
    /**
     * @description function that returns custom class names for a cell, or a string assigning class names for every cell
     */
    cellClassName: PropType<TableProps<DefaultRow>["cellClassName"]>;
    /**
     * @description function that returns custom style for a cell, or an object assigning custom style for every cell
     */
    cellStyle: PropType<TableProps<DefaultRow>["cellStyle"]>;
    /**
     * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
     */
    headerRowClassName: PropType<TableProps<DefaultRow>["headerRowClassName"]>;
    /**
     * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
     */
    headerRowStyle: PropType<TableProps<DefaultRow>["headerRowStyle"]>;
    /**
     * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
     */
    headerCellClassName: PropType<TableProps<DefaultRow>["headerCellClassName"]>;
    /**
     * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
     */
    headerCellStyle: PropType<TableProps<DefaultRow>["headerCellStyle"]>;
    /**
     * @description key of current row, a set only prop
     */
    currentRowKey: (NumberConstructor | StringConstructor)[];
    /**
     * @description displayed text when data is empty. You can customize this area with `#empty`
     */
    emptyText: StringConstructor;
    /**
     * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
     */
    expandRowKeys: PropType<TableProps<DefaultRow>["expandRowKeys"]>;
    /**
     * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
     */
    defaultExpandAll: BooleanConstructor;
    /**
     * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
     */
    defaultSort: PropType<TableProps<DefaultRow>["defaultSort"]>;
    /**
     * @description the `effect` of the overflow tooltip
     */
    tooltipEffect: StringConstructor;
    /**
     * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
     */
    tooltipOptions: PropType<TableProps<DefaultRow>["tooltipOptions"]>;
    /**
     * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
     */
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description horizontal indentation of tree data
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description configuration for rendering nested data
     */
    treeProps: {
        type: PropType<TreeProps>;
        default: () => TreeProps;
    };
    /**
     * @description whether to lazy loading data
     */
    lazy: BooleanConstructor;
    /**
     * @description method for loading child row data, only works when `lazy` is true
     */
    load: PropType<TableProps<DefaultRow>["load"]>;
    style: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description sets the algorithm used to lay out table cells, rows, and columns
     */
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    /**
     * @description always show scrollbar
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description ensure main axis minimum-size doesn't follow the content
     */
    flexible: BooleanConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
     */
    showOverflowTooltip: PropType<TableProps<DefaultRow>["showOverflowTooltip"]>;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
}>, {
    /** @description 用于多选表格，清空用户的选择 */
    clearSelection: import('vue').ComputedRef<() => void>;
    /** @description 返回当前选中的行 */
    getSelectionRows: import('vue').ComputedRef<() => any[]>;
    /** @description 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
    toggleRowSelection: import('vue').ComputedRef<(row: any, selected?: boolean, ignoreSelectable?: boolean) => void>;
    /** @description 用于多选表格，切换全选和全不选 */
    toggleAllSelection: import('vue').ComputedRef<() => void>;
    /** @description 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。 */
    toggleRowExpansion: import('vue').ComputedRef<(row: any, expanded?: boolean) => void>;
    /** @description 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。 */
    setCurrentRow: import('vue').ComputedRef<(row: any) => void>;
    /** @description 用于清空排序条件，数据会恢复成未排序的状态 */
    clearSort: import('vue').ComputedRef<() => void>;
    /** @description 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器 */
    clearFilter: import('vue').ComputedRef<(columnKeys?: string[] | string) => void>;
    /** @description 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局 */
    doLayout: import('vue').ComputedRef<() => void>;
    /** @description 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。 */
    sort: import('vue').ComputedRef<(prop: string, order: string) => void>;
    /** @description 滚动到一组特定坐标 */
    scrollTo: import('vue').ComputedRef<(options: ScrollToOptions | number, yCoord?: number) => void>;
    /** @description 设置垂直滚动位置 */
    setScrollTop: import('vue').ComputedRef<(top?: number) => void>;
    /** @description 设置水平滚动位置 */
    setScrollLeft: import('vue').ComputedRef<(left?: number) => void>;
    /** @description 获取表列的 context */
    columns: import('vue').ComputedRef<TableColumnCtx<any>[]>;
    /** @description 适用于 lazy Table, 需要设置 rowKey, 更新 key children */
    updateKeyChildren: import('vue').ComputedRef<(key: string, data: any[]) => void>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 表格数据 */
    tableData: import('vue').ComputedRef<any[]>;
    /** @description 分页数据 */
    tablePagination: import('vue').ComputedRef<{
        pageIndex: number;
        pageSize: number;
        totalRows: number;
    }>;
    /** @description 搜索参数 */
    searchParam: import('vue').ComputedRef<any>;
    /** @description 选中状态 */
    selected: import('vue').ComputedRef<boolean>;
    /** @description 选中数据列表 */
    selectedList: import('vue').ComputedRef<any[]>;
    /** @description 选中数据 rowKey 列表 */
    selectedListIds: import('vue').ComputedRef<(string | number)[]>;
    /** @description 部分选中数据 rowKey 列表 */
    indeterminateSelectedListIds: import('vue').ComputedRef<(string | number)[]>;
    /** @description 表格宽度 */
    tableWidth: import('vue').ComputedRef<number>;
    /** @description 表格高度 */
    tableHeight: import('vue').ComputedRef<number>;
    /** @description 部分选中（样式不一样而已），用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
    toggleRowIndeterminateSelection: (row: any, selected?: boolean) => void;
    /** @description 异步方法，刷新表格 */
    refresh: () => Promise<void>;
    /** @description 异步方法，重置表格 */
    reset: () => Promise<void>;
    /** @description 对 Table 进行重新渲染。当 TableKey 发生变化的时候可以通过此方法重新渲染表格 */
    doRender: () => Promise<void>;
    /** @description Table 加载 */
    doLoading: (loadingFunction: () => void | Promise<void>, loadingText?: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description 当用户手动勾选数据行的 Checkbox 时触发的事件 */
    select: (selection: any[], row: any) => boolean;
    /** @description 当用户手动勾选全选 Checkbox 时触发的事件 */
    selectAll: (selection: any[]) => boolean;
    /** @description 当选择项发生变化时会触发该事件 */
    selectionChange: (newSelection: any[]) => boolean;
    /** @description 当单元格 hover 进入时会触发该事件 */
    cellMouseEnter: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当单元格 hover 退出时会触发该事件 */
    cellMouseLeave: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被点击时会触发该事件 */
    cellClick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被双击击时会触发该事件 */
    cellDblclick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某个单元格被鼠标右键点击时会触发该事件 */
    cellContextmenu: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => boolean;
    /** @description 当某一行被点击时会触发该事件 */
    rowClick: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一行被鼠标右键点击时会触发该事件 */
    rowContextmenu: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一行被双击时会触发该事件 */
    rowDblclick: (row: any, column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一列的表头被点击时会触发该事件 */
    headerClick: (column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当某一列的表头被鼠标右键点击时触发该事件 */
    headerContextmenu: (column: TableColumnCtx<any>, event: Event) => boolean;
    /** @description 当表格的排序条件发生变化的时候会触发该事件 */
    sortChange: (data: {
        column: TableColumnCtx<any>;
        prop: string;
        order: "" | "ascending" | "descending";
    }) => boolean;
    /** @description column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
    filterChange: (newFilters: any) => boolean;
    /** @description 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
    currentChange: (currentRow: any, oldCurrentRow: any) => boolean;
    /** @description 当拖动表头改变了列的宽度的时候会触发该事件 */
    headerDragend: (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, event: MouseEvent) => boolean;
    /** @description 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
    expandChange: (row: any, expanded: boolean | any[]) => boolean;
    /** @description 表格刷新事件 */
    refresh: (params: PagedInput) => boolean;
    /** @description 表格重置事件 */
    reset: (params: PagedInput) => boolean;
    /** @description 分页页码改变事件 */
    sizeChange: (pageSize: number) => boolean;
    /** @description 分页改变事件 */
    paginationChange: (pageIndex: number, pageSize: number) => boolean;
    /** @description 自定义单元格点击事件 */
    customCellClick: (emitName: string, { row, column, $index }: {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    } & FaTableDefaultSlotsResult) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description whether Table has vertical border */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether current row is highlighted */
    highlightCurrentRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description 组件封装，原生的已经失效 method that returns rowspan and colspan */
    spanMethod: {
        type: PropType<TableProps<DefaultRow>["spanMethod"]>;
        validator: () => boolean;
    };
    /** @description 表格Key */
    tableKey: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 表格数据 */
    data: {
        type: PropType<any[]>;
        default: () => any[];
    };
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** @description 接口请求数据回调 */
    dataCallback: {
        type: PropType<(data: any) => void>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 列配置 */
    columns: {
        type: PropType<FaTableColumnCtx[]>;
        default: () => FaTableColumnCtx[];
    };
    /** @description 表格列改变 */
    columnsChange: {
        type: PropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>;
    };
    /** @description 搜索表单 Grid布局列配置 */
    searchFormCols: {
        type: PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => string | number | Record<FaLayoutGridBreakPoint, number>;
    };
    /** @description 搜索表单 */
    searchForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片 */
    headerCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 刷新按钮 */
    refreshBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 搜索按钮 */
    searchBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 列配置按钮 */
    columnSettingBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 头部卡片右侧功能按钮 */
    toolBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏搜索时间 */
    hideSearchTime: BooleanConstructor;
    /** @description 搜索时间范围 */
    dataSearchRange: {
        type: PropType<FaTableDataRange>;
        default: string;
    };
    /** @description 分页 */
    pagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 隐藏图片 */
    hideImage: BooleanConstructor;
    /** @description 单选 */
    single: BooleanConstructor;
    /** @description 行点击选择 */
    rowClickSelection: BooleanConstructor;
    /** @description 树形数据 */
    treeData: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: PropType<{
            span?: string;
            children?: string;
        }>;
        default: () => {
            span?: string;
            children?: string;
        };
    };
    /** @description 自动刷新，当传入 data 时候，如果存在更改则自动刷新 */
    autoRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 等价于 Table-Column 的 selectable
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    rowSelectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description size of Table
     */
    size: {
        readonly type: PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
     */
    height: (NumberConstructor | StringConstructor)[];
    /**
     * @description table's max-height. The legal value is a number or the height in px
     */
    maxHeight: (NumberConstructor | StringConstructor)[];
    /**
     * @description whether width of column automatically fits its container
     */
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether Table is striped
     */
    stripe: BooleanConstructor;
    /**
     * @description whether Table header is visible
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description whether to display a summary row
     */
    showSummary: BooleanConstructor;
    /**
     * @description displayed text for the first column of summary row
     */
    sumText: StringConstructor;
    /**
     * @description custom summary method
     */
    summaryMethod: PropType<TableProps<DefaultRow>["summaryMethod"]>;
    /**
     * @description function that returns custom class names for a row, or a string assigning class names for every row
     */
    rowClassName: PropType<TableProps<DefaultRow>["rowClassName"]>;
    /**
     * @description function that returns custom style for a row, or an object assigning custom style for every row
     */
    rowStyle: PropType<TableProps<DefaultRow>["rowStyle"]>;
    /**
     * @description function that returns custom class names for a cell, or a string assigning class names for every cell
     */
    cellClassName: PropType<TableProps<DefaultRow>["cellClassName"]>;
    /**
     * @description function that returns custom style for a cell, or an object assigning custom style for every cell
     */
    cellStyle: PropType<TableProps<DefaultRow>["cellStyle"]>;
    /**
     * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
     */
    headerRowClassName: PropType<TableProps<DefaultRow>["headerRowClassName"]>;
    /**
     * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
     */
    headerRowStyle: PropType<TableProps<DefaultRow>["headerRowStyle"]>;
    /**
     * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
     */
    headerCellClassName: PropType<TableProps<DefaultRow>["headerCellClassName"]>;
    /**
     * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
     */
    headerCellStyle: PropType<TableProps<DefaultRow>["headerCellStyle"]>;
    /**
     * @description key of current row, a set only prop
     */
    currentRowKey: (NumberConstructor | StringConstructor)[];
    /**
     * @description displayed text when data is empty. You can customize this area with `#empty`
     */
    emptyText: StringConstructor;
    /**
     * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
     */
    expandRowKeys: PropType<TableProps<DefaultRow>["expandRowKeys"]>;
    /**
     * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
     */
    defaultExpandAll: BooleanConstructor;
    /**
     * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
     */
    defaultSort: PropType<TableProps<DefaultRow>["defaultSort"]>;
    /**
     * @description the `effect` of the overflow tooltip
     */
    tooltipEffect: StringConstructor;
    /**
     * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
     */
    tooltipOptions: PropType<TableProps<DefaultRow>["tooltipOptions"]>;
    /**
     * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
     */
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description horizontal indentation of tree data
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description configuration for rendering nested data
     */
    treeProps: {
        type: PropType<TreeProps>;
        default: () => TreeProps;
    };
    /**
     * @description whether to lazy loading data
     */
    lazy: BooleanConstructor;
    /**
     * @description method for loading child row data, only works when `lazy` is true
     */
    load: PropType<TableProps<DefaultRow>["load"]>;
    style: {
        type: PropType<CSSProperties>;
        default: () => CSSProperties;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description sets the algorithm used to lay out table cells, rows, and columns
     */
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    /**
     * @description always show scrollbar
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description ensure main axis minimum-size doesn't follow the content
     */
    flexible: BooleanConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
     */
    showOverflowTooltip: PropType<TableProps<DefaultRow>["showOverflowTooltip"]>;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
}>> & Readonly<{
    onSelect?: (selection: any[], row: any) => any;
    onReset?: (params: PagedInput) => any;
    onRefresh?: (params: PagedInput) => any;
    onCurrentChange?: (currentRow: any, oldCurrentRow: any) => any;
    onSelectAll?: (selection: any[]) => any;
    onSelectionChange?: (newSelection: any[]) => any;
    onCellMouseEnter?: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => any;
    onCellMouseLeave?: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => any;
    onCellClick?: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => any;
    onCellDblclick?: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => any;
    onCellContextmenu?: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, event: Event) => any;
    onRowClick?: (row: any, column: TableColumnCtx<any>, event: Event) => any;
    onRowContextmenu?: (row: any, column: TableColumnCtx<any>, event: Event) => any;
    onRowDblclick?: (row: any, column: TableColumnCtx<any>, event: Event) => any;
    onHeaderClick?: (column: TableColumnCtx<any>, event: Event) => any;
    onHeaderContextmenu?: (column: TableColumnCtx<any>, event: Event) => any;
    onSortChange?: (data: {
        column: TableColumnCtx<any>;
        prop: string;
        order: "" | "ascending" | "descending";
    }) => any;
    onFilterChange?: (newFilters: any) => any;
    onHeaderDragend?: (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, event: MouseEvent) => any;
    onExpandChange?: (row: any, expanded: boolean | any[]) => any;
    onSizeChange?: (pageSize: number) => any;
    onPaginationChange?: (pageIndex: number, pageSize: number) => any;
    onCustomCellClick?: (emitName: string, args_1: {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    } & FaTableDefaultSlotsResult) => any;
}>, {
    props: {
        span?: string;
        children?: string;
    };
    fit: boolean;
    data: any[];
    style: CSSProperties;
    className: string;
    lazy: boolean;
    columns: FaTableColumnCtx[];
    scrollbarAlwaysOn: boolean;
    defaultExpandAll: boolean;
    indent: number;
    treeData: boolean;
    pagination: boolean;
    rowKey: string | ((row: any) => string);
    border: boolean;
    highlightCurrentRow: boolean;
    tableKey: string;
    searchFormCols: string | number | Record<FaLayoutGridBreakPoint, number>;
    searchForm: boolean;
    headerCard: boolean;
    refreshBtn: boolean;
    searchBtn: boolean;
    columnSettingBtn: boolean;
    toolBtn: boolean;
    hideSearchTime: boolean;
    dataSearchRange: FaTableDataRange;
    hideImage: boolean;
    single: boolean;
    rowClickSelection: boolean;
    autoRefresh: boolean;
    stripe: boolean;
    showHeader: boolean;
    showSummary: boolean;
    selectOnIndeterminate: boolean;
    treeProps: TreeProps;
    tableLayout: Layout;
    flexible: boolean;
    scrollbarTabindex: string | number;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTableSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
