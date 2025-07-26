import { FaLayoutGridBreakPoint } from './layoutGrid.type';
type FaLayoutGridSlots = {
    /** @description 默认内容插槽 */
    default: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => Record<FaLayoutGridBreakPoint, number>;
    };
    /** @description 折叠 */
    collapsed: BooleanConstructor;
    /** @description 折叠行数 */
    collapsedRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 间距，偏移 */
    gap: {
        type: import('vue').PropType<number | [number, number]>;
        default: number;
    };
}>, {
    /** @description 响应式断点 */
    breakPoint: import('vue').Ref<FaLayoutGridBreakPoint, FaLayoutGridBreakPoint>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description 断点变化事件 */
    breakPointChange: ({ breakPoint }: {
        breakPoint: FaLayoutGridBreakPoint;
    }) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => Record<FaLayoutGridBreakPoint, number>;
    };
    /** @description 折叠 */
    collapsed: BooleanConstructor;
    /** @description 折叠行数 */
    collapsedRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 间距，偏移 */
    gap: {
        type: import('vue').PropType<number | [number, number]>;
        default: number;
    };
}>> & Readonly<{
    onBreakPointChange?: (args_0: {
        breakPoint: FaLayoutGridBreakPoint;
    }) => any;
}>, {
    collapsed: boolean;
    cols: string | number | Record<FaLayoutGridBreakPoint, number>;
    collapsedRows: string | number;
    gap: number | [number, number];
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaLayoutGridSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
