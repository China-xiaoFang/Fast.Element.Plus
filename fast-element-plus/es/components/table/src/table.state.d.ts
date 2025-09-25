import { FaTableColumnCtx } from './table.type';
export type FaTableState = {
    /**
     * 表格加载
     */
    loading: boolean;
    /**
     * 加载文字
     */
    loadingText: string;
    /**
     * 源列数据
     * 扁平化后的
     */
    orgColumns: FaTableColumnCtx[];
    /**
     * 正常显示的列
     * @description prop 不为空，并且不是纯搜索字段的
     */
    tableColumns: FaTableColumnCtx[];
    /**
     * 搜索列
     * @description 纯搜索字段或el 不为空的
     */
    searchColumns: FaTableColumnCtx[];
    /**
     * 合并列
     */
    spanColumns: {
        prop?: string;
        spanProp: string;
    }[];
    /**
     * 表格数据
     */
    tableData: any[];
    /**
     * 表格合并数据
     */
    tableSpanData: {
        [key in string]: string | number;
    }[];
    /**
     * 分页数据
     */
    tablePagination: {
        pageIndex: number;
        pageSize: number;
        totalRows: number;
    };
    /**
     * 初始化参数，组件渲染时的初始化参数
     */
    initParam: any;
    /**
     * 搜索参数
     */
    searchParam: any;
    /**
     * 中文输入法模式下的拼音
     */
    searchValueUpdate: string;
    /**
     * 显示搜索表单
     */
    searchForm: boolean;
    /**
     * 隐藏图片
     */
    hideImage: boolean;
    /**
     * 是否选中数据
     */
    selected: boolean;
    /**
     * 选中数据列表
     */
    selectedList: any[];
    /**
     * 当前选中数据的ids
     */
    selectedListIds: (string | number)[];
    /**
     * 当前不确定选中数据的ids
     * @description 仅样式存在区别
     */
    indeterminateSelectedListIds: (string | number)[];
    /**
     * 操作列宽度
     */
    operationColumnWidth: string;
    /**
     * 图片预览
     */
    imagePreview: boolean;
    /**
     * 预览Url
     */
    previewList: string[];
    /**
     * 表格宽度
     */
    tableWidth: number;
    /**
     * 表格高度
     */
    tableHeight: number;
    /**
     * 自动列宽数据
     */
    autoColumnWidth: {
        prop: string;
        width: number;
    }[];
};
