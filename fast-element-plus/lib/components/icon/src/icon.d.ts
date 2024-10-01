import { PropType } from 'vue';
export declare const faIconProps: {
    /**
     * 名称
     * @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库；
     * @requires 必填
     */
    name: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * 大小
     */
    size: PropType<number | string>;
    /**
     * 颜色
     */
    color: StringConstructor;
};
/**
 * FaIcon 组件
 */
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * 名称
     * @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库；
     * @requires 必填
     */
    name: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * 大小
     */
    size: PropType<number | string>;
    /**
     * 颜色
     */
    color: StringConstructor;
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * 名称
     * @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库；
     * @requires 必填
     */
    name: {
        type: StringConstructor;
        required: boolean;
    };
    /**
     * 大小
     */
    size: PropType<number | string>;
    /**
     * 颜色
     */
    color: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
