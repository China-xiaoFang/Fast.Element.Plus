import { Component } from 'vue';
export declare const faAvatarProps: {
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description 原图
     */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: import('element-plus/es/utils').EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
    shape: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty) | ((new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
};
export declare const faAvatarEmits: {
    error: (evt: Event) => boolean;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description 原图
     */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: import('element-plus/es/utils').EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
    shape: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty) | ((new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
}>, {
    /** @description 图片路径 */
    src: string;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (evt: Event) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description 原图
     */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: import('element-plus/es/utils').EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
    shape: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty) | ((new (...args: any[]) => ObjectFitProperty & {}) | (() => ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
}>> & Readonly<{
    onError?: (evt: Event) => any;
}>, {
    icon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    size: import('element-plus/es/utils').EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "default" | "small" | "large", number>;
    small: boolean;
    fit: any;
    original: boolean;
    normal: boolean;
    thumb: boolean;
    shape: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "circle" | "square", unknown>;
    src: string;
}, import('vue').SlotsType<Partial<{
    default: (arg: {
        src: string;
    }) => import('vue').VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
