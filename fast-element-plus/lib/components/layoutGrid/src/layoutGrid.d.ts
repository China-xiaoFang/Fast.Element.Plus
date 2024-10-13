import { VNode } from 'vue';
import { FaLayoutGridBreakPoint } from './layoutGrid.type';
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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** @description 间距，偏移 */
    gap: {
        type: import('vue').PropType<number | [number, number]>;
        default: number;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
        type: (StringConstructor | NumberConstructor)[];
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
}, import('vue').SlotsType<Partial<{
    default: () => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
