declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 页码 */
    pageSizes: {
        type: import('vue').PropType<number[]>;
        default: number[];
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description 页码改变 */
    sizeChange: (pageSize: number) => boolean;
    /** @description 当前页数改变 */
    currentChange: (currentPage: number) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 页码 */
    pageSizes: {
        type: import('vue').PropType<number[]>;
        default: number[];
    };
}>> & Readonly<{
    onCurrentChange?: (currentPage: number) => any;
    onSizeChange?: (pageSize: number) => any;
}>, {
    pageSizes: number[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
