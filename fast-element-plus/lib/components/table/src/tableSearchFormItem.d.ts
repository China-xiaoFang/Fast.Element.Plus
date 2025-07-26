import { FaTableColumnCtx, FaTableDefaultSlotsResult } from './table.type';
type FaTableSearchFormItemSlots = {
    [key: string]: FaTableDefaultSlotsResult & {
        column?: FaTableColumnCtx;
        search?: () => void;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 列配置 */
    column: {
        type: import('vue').PropType<FaTableColumnCtx>;
        required: true;
        /** 这里的 default 不知道为什么，不写识别不出来类型 */
        default: FaTableColumnCtx;
    };
    /** @description 搜索 */
    search: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 列配置 */
    column: {
        type: import('vue').PropType<FaTableColumnCtx>;
        required: true;
        /** 这里的 default 不知道为什么，不写识别不出来类型 */
        default: FaTableColumnCtx;
    };
    /** @description 搜索 */
    search: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
}>> & Readonly<{}>, {
    column: FaTableColumnCtx;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTableSearchFormItemSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
