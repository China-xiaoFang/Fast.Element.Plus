import { FaLayoutGridItemResponsive } from './layoutGrid.type';
type FaLayoutGridItemSlots = {
    /** @description 默认内容插槽 */
    default: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 偏移 */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /** @description 占位 */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /** @description 后缀 */
    suffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 响应式，小于480px屏幕配置 */
    xs: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，平板竖屏配置 */
    sm: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，平板横屏配置 */
    md: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，小型桌面配置 */
    lg: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，大型桌面配置 */
    xl: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
}>, {
    show: boolean;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 偏移 */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /** @description 占位 */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /** @description 后缀 */
    suffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 响应式，小于480px屏幕配置 */
    xs: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，平板竖屏配置 */
    sm: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，平板横屏配置 */
    md: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，小型桌面配置 */
    lg: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
    /** @description 响应式，大型桌面配置 */
    xl: {
        type: import('vue').PropType<FaLayoutGridItemResponsive>;
        default: FaLayoutGridItemResponsive;
    };
}>> & Readonly<{}>, {
    span: number;
    offset: number;
    xs: FaLayoutGridItemResponsive;
    sm: FaLayoutGridItemResponsive;
    md: FaLayoutGridItemResponsive;
    lg: FaLayoutGridItemResponsive;
    xl: FaLayoutGridItemResponsive;
    suffix: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaLayoutGridItemSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
