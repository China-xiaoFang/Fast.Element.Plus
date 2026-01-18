import { Component } from 'vue';
export declare const faButtonProps: {
    /**
     * @description customize loading icon component
     * @default Eleme
     */
    loadingIcon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    text: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
};
export declare const faButtonEmits: {
    /**
     * @description 点击事件
     * @param done 需要手动隐藏Loading
     */
    click: (event: MouseEvent, done?: () => void) => boolean;
};
type FaButtonSlots = {
    /** @description 默认内容插槽 */
    default: never;
    /** @description 自定义加载中组件 */
    loading: never;
    /** @description 自定义图标组件 */
    icon: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * @description customize loading icon component
     * @default Eleme
     */
    loadingIcon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    text: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
}>, {
    /** @description 按钮 html 元素 */
    ref: import('vue').ComputedRef<HTMLButtonElement>;
    /** @description 按钮尺寸 */
    size: import('vue').ComputedRef<"" | "default" | "small" | "large">;
    /** @description 按钮类型 */
    type: import('vue').ComputedRef<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
    /** @description 按钮已禁用 */
    disabled: import('vue').ComputedRef<boolean>;
    /** @description 是否在两个字符之间插入空格 */
    shouldAddSpace: import('vue').ComputedRef<boolean>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 按钮加载 */
    doLoading: (loadingFunction: () => void | Promise<void>) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /**
     * @description 点击事件
     * @param done 需要手动隐藏Loading
     */
    click: (event: MouseEvent, done?: () => void) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * @description customize loading icon component
     * @default Eleme
     */
    loadingIcon: {
        type: import('vue').PropType<string | Component>;
        default: () => string | Component;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "text" | "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    text: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | ((new (...args: any[]) => (string | Component) & {}) | (() => string | Component))[], unknown, unknown, "button", boolean>;
}>> & Readonly<{
    onClick?: (event: MouseEvent, done?: () => void) => any;
}>, {
    type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
    circle: boolean;
    link: boolean;
    text: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    plain: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    loading: boolean;
    loadingIcon: string | Component;
    disabledLoading: boolean;
    disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    nativeType: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    bg: boolean;
    autofocus: boolean;
    round: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    dark: boolean;
    autoInsertSpace: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    tag: "button";
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaButtonSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
