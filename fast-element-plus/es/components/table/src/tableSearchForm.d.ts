import { FaTableColumnCtx, FaTableDefaultSlotsResult } from './table.type';
import { FaLayoutGridBreakPoint } from '../../layoutGrid';
type FaTableSearchFormSlots = {
    [key: string]: FaTableDefaultSlotsResult & {
        column?: FaTableColumnCtx;
        search?: () => void;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 显示 */
    show: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description 折叠搜素 */
    collapsedSearch: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description 高级搜素抽屉 */
    advancedSearchDrawer: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    /** @description 搜索 */
    search: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
    /** @description 重置 */
    reset: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 显示 */
    show: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description 折叠搜素 */
    collapsedSearch: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description 高级搜素抽屉 */
    advancedSearchDrawer: {
        type: BooleanConstructor;
        required: true;
    };
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    /** @description 搜索 */
    search: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
    /** @description 重置 */
    reset: {
        type: import('vue').PropType<() => void>;
        required: true;
    };
}>> & Readonly<{}>, {
    cols: string | number | Record<FaLayoutGridBreakPoint, number>;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTableSearchFormSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
