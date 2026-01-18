import { Component } from 'vue';
export declare const faAvatarProps: {
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    shape: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "circle" | "square", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined))[], unknown, unknown, "cover", boolean>;
};
export declare const faAvatarEmits: {
    error: (evt: Event) => boolean;
};
type FaAvatarSlots = {
    /** @description 默认内容插槽 */
    default: {
        src: string;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    shape: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "circle" | "square", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined))[], unknown, unknown, "cover", boolean>;
}>, {
    /** @description 图片路径 */
    src: string;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (evt: Event) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description representation type to icon, more info on icon component. */
    icon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    shape: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "circle" | "square", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined))[], unknown, unknown, "cover", boolean>;
}>> & Readonly<{
    onError?: (evt: Event) => any;
}>, {
    icon: string | Component;
    base64: boolean;
    original: boolean;
    normal: boolean;
    small: boolean;
    thumb: boolean;
    src: string;
    fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined) | ((new (...args: any[]) => "fill" | "contain" | "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | "cover" | "scale-down") | (() => import("csstype").Property.ObjectFit | undefined))[], unknown, unknown>;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaAvatarSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
