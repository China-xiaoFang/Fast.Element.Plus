/** @description FaTable 统一分页返回结果类 */
export type PagedResult<Output = any> = {
    /**
     * 当前页
     */
    pageIndex?: number;
    /**
     * 当前页码
     */
    pageSize?: number;
    /**
     * 总页数
     */
    totalPage?: number;
    /**
     * 总条数
     */
    totalRows?: number;
    /**
     * Data
     */
    rows?: Array<Output>;
    /**
     * 是否有上一页
     */
    hasPrevPages?: boolean;
    /**
     * 是否有下一页
     */
    hasNextPages?: boolean;
    /**
     * 程序集名称
     */
    assemblyName?: string;
    /**
     * 完全限定名称
     */
    fullName?: string;
};
/** @description FaTable 分页搜索类型枚举 */
export declare enum PagedSearchTypeEnum {
    /**
     * 模糊匹配
     */
    Like = 1,
    /**
     * 等于
     */
    Equal = 2,
    /**
     * 不等于
     */
    NotEqual = 3,
    /**
     * 大于
     */
    GreaterThan = 4,
    /**
     * 大于等于
     */
    GreaterThanOrEqual = 5,
    /**
     * 小于
     */
    LessThan = 6,
    /**
     * 小于等于
     */
    LessThanOrEqual = 7,
    /**
     * 包含
     */
    Include = 8,
    /**
     * 排除
     */
    NotInclude = 9
}
/** @description FaTable 统一分页搜索输入 */
export type PagedSearchInput = {
    /**
     * 搜索字段英文
     */
    enField?: string;
    /**
     * 搜索字段中文
     */
    cnField?: string;
    /**
     * 搜索值
     */
    value?: string;
    /**
     * 搜索类型
     */
    type?: PagedSearchTypeEnum;
};
/** @description FaTable 统一分页排序输入 */
export type PagedSortInput = {
    /**
     * 排序字段英文
     */
    enField?: string;
    /**
     * 排序字段中文
     */
    cnField?: string;
    /**
     * 排序方法
     * 'ascending' | 'descending'
     */
    mode?: string;
};
/** @description FaTable 统一分页输入 */
export type PagedInput<Input = any> = {
    /**
     * 当前页面索引值，默认为1
     */
    pageIndex?: number;
    /**
     * 页码容量
     */
    pageSize?: number;
    /**
     * 搜索值
     */
    searchValue?: string;
    /**
     * 搜索时间
     */
    searchTimeList?: Array<Date | string>;
    /**
     * 搜索集合
     */
    searchList?: Array<PagedSearchInput>;
    /**
     * 排序集合
     */
    sortList?: Array<PagedSortInput>;
    /**
     * 启用分页
     * @default true
     */
    enablePaged?: boolean;
} & Input;
