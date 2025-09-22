import { FaTableColumnCtx, FaTableColumnDateFormat, FaTableColumnType, FaTableDefaultSlotsResult, FaTableEnumColumnType } from './table.type';
import { TableColumnCtx } from 'element-plus';
import { PropType, VNode } from 'vue';
type DefaultRow = any;
export declare const tableColumnProps: {
    /**
     * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description column label
     */
    label: StringConstructor;
    /**
     * @description class name of cells in the column
     */
    className: StringConstructor;
    /**
     * @description class name of the label of this column
     */
    labelClassName: StringConstructor;
    /**
     * @description
     */
    property: StringConstructor;
    /**
     * @description field name. You can also use its alias: `property`
     */
    prop: StringConstructor;
    /**
     * @description column width
     */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * @description column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion
     */
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * @description render function for table header of this column
     */
    renderHeader: PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    /**
     * @description whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table
     */
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    /**
     * @description sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort
     */
    sortMethod: PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    /**
     * @description specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal
     */
    sortBy: PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    /**
     * @description whether column width can be resized, works when `border` of `el-table` is `true`
     */
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered
     */
    columnKey: StringConstructor;
    /**
     * @description alignment, the value should be 'left' \/ 'center' \/ 'right'
     */
    align: StringConstructor;
    /**
     * @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right'
     */
    headerAlign: StringConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell
     */
    showOverflowTooltip: {
        type: PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: any;
    };
    /**
     * @description whether column is fixed at left / right. Will be fixed at left if `true`
     */
    fixed: (BooleanConstructor | StringConstructor)[];
    /**
     * @description function that formats cell content
     */
    formatter: PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    /**
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    selectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work
     */
    reserveSelection: BooleanConstructor;
    /**
     * @description data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`
     */
    filterMethod: PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    /**
     * @description filter value for selected data, might be useful when table header is rendered with `render-header`
     */
    filteredValue: PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    /**
     * @description an array of data filtering options. For each element in this array, `text` and `value` are required
     */
    filters: PropType<TableColumnCtx<DefaultRow>["filters"]>;
    /**
     * @description placement for the filter dropdown
     */
    filterPlacement: StringConstructor;
    /**
     * @description whether data filtering supports multiple options
     */
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description className for the filter dropdown
     */
    filterClassName: StringConstructor;
    /**
     * @description customize indices for each row, works on columns with `type=index`
     */
    index: PropType<TableColumnCtx<DefaultRow>["index"]>;
    /**
     * @description the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array
     */
    sortOrders: {
        type: PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => TableColumnCtx<DefaultRow>["sortOrders"];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
};
type FaTableColumnSlotsResult = {
    /** @description slots为表格内容的时候才会返回 */
    row?: any;
    /** @description slot为表头内容的时候返回 'TableColumnCtx<any>' 否则返回 'FaTableColumnCtx' */
    column?: TableColumnCtx<any> | FaTableColumnCtx;
    $index?: number;
};
type FaTableColumnDefaultSlots = {
    [key: string]: FaTableDefaultSlotsResult & FaTableColumnSlotsResult;
};
type FaTableColumnSlots = {
    /** @description 默认内容插槽 */
    default: FaTableDefaultSlotsResult & {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    };
    /** @description 自定义表头的内容 */
    header: FaTableDefaultSlotsResult & {
        column: FaTableColumnCtx;
        $index: number;
    };
    /** @description 自定义 filter 图标 */
    filterIcon: FaTableDefaultSlotsResult & {
        filterOpened: boolean;
    };
} & FaTableColumnDefaultSlots;
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
     */
    type: {
        type: PropType<FaTableColumnType>;
        default: string;
    };
    /**
     * @description column width
     */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /** @description alignment, the value should be 'left' \/ 'center' \/ 'right' */
    align: {
        type: StringConstructor;
        default: string;
    };
    /** @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right' */
    headerAlign: {
        type: StringConstructor;
        default: string;
    };
    /** @description 是否显示在表格当中 */
    show: BooleanConstructor;
    /** @description 小页面的宽度，如果为空，则继承默认宽度 */
    smallWidth: {
        type: (NumberConstructor | StringConstructor)[];
    };
    /** @description 自适应宽度 */
    autoWidth: BooleanConstructor;
    /** @description 插槽名称 */
    slot: StringConstructor;
    /** @description 表格头部插槽名称 */
    headerSlot: StringConstructor;
    /** @description 自定义表头内容渲染（tsx语法） */
    headerRender: {
        type: PropType<({ column, $index }: {
            column: TableColumnCtx<any>;
            $index: number;
        } & FaTableDefaultSlotsResult) => VNode[]>;
    };
    /** @description 自定义单元格内容渲染（tsx语法） */
    render: {
        type: PropType<({ row, column, $index }: {
            row: any;
            column: FaTableColumnCtx;
            $index: number;
        } & FaTableDefaultSlotsResult) => VNode[]>;
    };
    /** @description 多级表头 */
    _children: {
        type: PropType<FaTableColumnCtx[]>;
    };
    /** @description 复制 */
    copy: BooleanConstructor;
    /** @description 是否为 Link Button */
    link: BooleanConstructor;
    /** @description 合并行字段 */
    spanProp: StringConstructor;
    /** @description Link 按钮的点击事件，优先级最高 */
    click: {
        type: PropType<({ row, $index }: {
            row: any;
            $index?: number;
        }) => void>;
    };
    /** @description 点击Emits事件回调 */
    clickEmit: StringConstructor;
    /** @description 显示时间格式化字符串 */
    dateFix: BooleanConstructor;
    /** @description 显示在页面中的日期格式 */
    dateFormat: {
        type: PropType<FaTableColumnDateFormat>;
    };
    /** @description 是否是标签展示 */
    tag: BooleanConstructor;
    /** @description 枚举类型（渲染值的字典） */
    enum: {
        type: PropType<FaTableEnumColumnType>;
    };
    /** @description 数据删除字段，如果为 true 会显示遮罩层 */
    dataDeleteField: StringConstructor;
    /** @description 制单信息计算 */
    submitInfoField: {
        type: PropType<{
            submitClerkName?: string;
            submitTime?: string;
        }>;
        default: () => {
            submitClerkName: string;
            submitTime: string;
        };
    };
    /**
     * @description column label
     */
    label: StringConstructor;
    /**
     * @description class name of cells in the column
     */
    className: StringConstructor;
    /**
     * @description class name of the label of this column
     */
    labelClassName: StringConstructor;
    /**
     * @description
     */
    property: StringConstructor;
    /**
     * @description field name. You can also use its alias: `property`
     */
    prop: StringConstructor;
    /**
     * @description column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion
     */
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * @description render function for table header of this column
     */
    renderHeader: PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    /**
     * @description whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table
     */
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    /**
     * @description sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort
     */
    sortMethod: PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    /**
     * @description specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal
     */
    sortBy: PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    /**
     * @description whether column width can be resized, works when `border` of `el-table` is `true`
     */
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered
     */
    columnKey: StringConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell
     */
    showOverflowTooltip: {
        type: PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: any;
    };
    /**
     * @description whether column is fixed at left / right. Will be fixed at left if `true`
     */
    fixed: (BooleanConstructor | StringConstructor)[];
    /**
     * @description function that formats cell content
     */
    formatter: PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    /**
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    selectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work
     */
    reserveSelection: BooleanConstructor;
    /**
     * @description data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`
     */
    filterMethod: PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    /**
     * @description filter value for selected data, might be useful when table header is rendered with `render-header`
     */
    filteredValue: PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    /**
     * @description an array of data filtering options. For each element in this array, `text` and `value` are required
     */
    filters: PropType<TableColumnCtx<DefaultRow>["filters"]>;
    /**
     * @description placement for the filter dropdown
     */
    filterPlacement: StringConstructor;
    /**
     * @description whether data filtering supports multiple options
     */
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description className for the filter dropdown
     */
    filterClassName: StringConstructor;
    /**
     * @description customize indices for each row, works on columns with `type=index`
     */
    index: PropType<TableColumnCtx<DefaultRow>["index"]>;
    /**
     * @description the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array
     */
    sortOrders: {
        type: PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => TableColumnCtx<DefaultRow>["sortOrders"];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description 图片预览 */
    imagePreview: (url: string) => boolean;
    /** @description 自定义单元格点击事件 */
    customCellClick: (emitName: string, { row, column, $index }: {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    }) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
     */
    type: {
        type: PropType<FaTableColumnType>;
        default: string;
    };
    /**
     * @description column width
     */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /** @description alignment, the value should be 'left' \/ 'center' \/ 'right' */
    align: {
        type: StringConstructor;
        default: string;
    };
    /** @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right' */
    headerAlign: {
        type: StringConstructor;
        default: string;
    };
    /** @description 是否显示在表格当中 */
    show: BooleanConstructor;
    /** @description 小页面的宽度，如果为空，则继承默认宽度 */
    smallWidth: {
        type: (NumberConstructor | StringConstructor)[];
    };
    /** @description 自适应宽度 */
    autoWidth: BooleanConstructor;
    /** @description 插槽名称 */
    slot: StringConstructor;
    /** @description 表格头部插槽名称 */
    headerSlot: StringConstructor;
    /** @description 自定义表头内容渲染（tsx语法） */
    headerRender: {
        type: PropType<({ column, $index }: {
            column: TableColumnCtx<any>;
            $index: number;
        } & FaTableDefaultSlotsResult) => VNode[]>;
    };
    /** @description 自定义单元格内容渲染（tsx语法） */
    render: {
        type: PropType<({ row, column, $index }: {
            row: any;
            column: FaTableColumnCtx;
            $index: number;
        } & FaTableDefaultSlotsResult) => VNode[]>;
    };
    /** @description 多级表头 */
    _children: {
        type: PropType<FaTableColumnCtx[]>;
    };
    /** @description 复制 */
    copy: BooleanConstructor;
    /** @description 是否为 Link Button */
    link: BooleanConstructor;
    /** @description 合并行字段 */
    spanProp: StringConstructor;
    /** @description Link 按钮的点击事件，优先级最高 */
    click: {
        type: PropType<({ row, $index }: {
            row: any;
            $index?: number;
        }) => void>;
    };
    /** @description 点击Emits事件回调 */
    clickEmit: StringConstructor;
    /** @description 显示时间格式化字符串 */
    dateFix: BooleanConstructor;
    /** @description 显示在页面中的日期格式 */
    dateFormat: {
        type: PropType<FaTableColumnDateFormat>;
    };
    /** @description 是否是标签展示 */
    tag: BooleanConstructor;
    /** @description 枚举类型（渲染值的字典） */
    enum: {
        type: PropType<FaTableEnumColumnType>;
    };
    /** @description 数据删除字段，如果为 true 会显示遮罩层 */
    dataDeleteField: StringConstructor;
    /** @description 制单信息计算 */
    submitInfoField: {
        type: PropType<{
            submitClerkName?: string;
            submitTime?: string;
        }>;
        default: () => {
            submitClerkName: string;
            submitTime: string;
        };
    };
    /**
     * @description column label
     */
    label: StringConstructor;
    /**
     * @description class name of cells in the column
     */
    className: StringConstructor;
    /**
     * @description class name of the label of this column
     */
    labelClassName: StringConstructor;
    /**
     * @description
     */
    property: StringConstructor;
    /**
     * @description field name. You can also use its alias: `property`
     */
    prop: StringConstructor;
    /**
     * @description column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion
     */
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * @description render function for table header of this column
     */
    renderHeader: PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    /**
     * @description whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table
     */
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    /**
     * @description sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort
     */
    sortMethod: PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    /**
     * @description specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal
     */
    sortBy: PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    /**
     * @description whether column width can be resized, works when `border` of `el-table` is `true`
     */
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered
     */
    columnKey: StringConstructor;
    /**
     * @description whether to hide extra content and show them in a tooltip when hovering on the cell
     */
    showOverflowTooltip: {
        type: PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: any;
    };
    /**
     * @description whether column is fixed at left / right. Will be fixed at left if `true`
     */
    fixed: (BooleanConstructor | StringConstructor)[];
    /**
     * @description function that formats cell content
     */
    formatter: PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    /**
     * @description function that determines if a certain row can be selected, works when `type` is 'selection'
     */
    selectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    /**
     * @description whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work
     */
    reserveSelection: BooleanConstructor;
    /**
     * @description data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`
     */
    filterMethod: PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    /**
     * @description filter value for selected data, might be useful when table header is rendered with `render-header`
     */
    filteredValue: PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    /**
     * @description an array of data filtering options. For each element in this array, `text` and `value` are required
     */
    filters: PropType<TableColumnCtx<DefaultRow>["filters"]>;
    /**
     * @description placement for the filter dropdown
     */
    filterPlacement: StringConstructor;
    /**
     * @description whether data filtering supports multiple options
     */
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description className for the filter dropdown
     */
    filterClassName: StringConstructor;
    /**
     * @description customize indices for each row, works on columns with `type=index`
     */
    index: PropType<TableColumnCtx<DefaultRow>["index"]>;
    /**
     * @description the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array
     */
    sortOrders: {
        type: PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => TableColumnCtx<DefaultRow>["sortOrders"];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
}>> & Readonly<{
    onCustomCellClick?: (emitName: string, args_1: {
        row: any;
        column: FaTableColumnCtx;
        $index: number;
    }) => any;
    onImagePreview?: (url: string) => any;
}>, {
    type: FaTableColumnType;
    link: boolean;
    tag: boolean;
    width: string | number;
    copy: boolean;
    resizable: boolean;
    show: boolean;
    sortable: string | boolean;
    minWidth: string | number;
    align: string;
    headerAlign: string;
    showOverflowTooltip: any;
    reserveSelection: boolean;
    filterMultiple: boolean;
    sortOrders: ("ascending" | "descending")[];
    autoWidth: boolean;
    dateFix: boolean;
    submitInfoField: {
        submitClerkName?: string;
        submitTime?: string;
    };
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTableColumnSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
