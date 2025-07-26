import { FaTableColumnCtx, FaTableEnumColumnCtx, FaTableEnumColumnType, PagedSortInput } from '../..';
/**
 * 表格工具类
 */
export declare const tableUtil: {
    /**
     * @description 处理无数据情况
     * @param {String} callValue 需要处理的值
     */
    formatValue(callValue: any): any;
    /**
     * @description 处理 prop 为多级嵌套的情况(列如: prop:user.name)
     * @param {Object} row 当前行数据
     * @param {String} prop 当前 prop
     */
    handleRowAccordingToProp(row: any, prop: string): any;
    /**
     * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
     * @param {String} prop 当前 prop
     */
    handleProp(prop: string): string;
    /**
     * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
     * @param {String} callValue 当前单元格值
     * @param {Array} enumData 字典列表
     * @param {Array} fieldNames 指定 label && value 的 key 值
     * @param {String} type 过滤类型（目前只有 tag）
     */
    filterEnum(callValue: any, enumData: FaTableEnumColumnCtx[], fieldNames?: {
        label: string;
        value: string;
    }, type?: "tag"): string;
    /**
     * 数组动态排序
     */
    arrayDynamicSort(sortList: PagedSortInput[]): (a: any, b: any) => number;
    /**
     * 设置枚举
     */
    setEnumMap(columnEnum: FaTableEnumColumnType, prop: string, enumMap: Map<string, FaTableEnumColumnCtx[]>): void;
    /**
     * 扁平化 columns
     */
    flatColumns(columns: FaTableColumnCtx[], enumMap?: Map<string, FaTableEnumColumnCtx[]>): FaTableColumnCtx[];
};
