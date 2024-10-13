type IconType = "ele" | "fastEle" | "local";
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description v-model绑定值 */
    modelValue: StringConstructor;
    /** @description 自定义图标 */
    customIcons: import('vue').PropType<string[]>;
}>, {
    iconType: IconType;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string) => boolean;
    /** @description 改变 */
    change: (value: string) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description v-model绑定值 */
    modelValue: StringConstructor;
    /** @description 自定义图标 */
    customIcons: import('vue').PropType<string[]>;
}>> & Readonly<{
    onChange?: (value: string) => any;
    "onUpdate:modelValue"?: (value: string) => any;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
