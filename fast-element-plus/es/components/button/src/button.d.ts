import { Component, VNode } from 'vue';
export declare const faButtonProps: {
    /**
     * @description customize loading icon component
     * @default Eleme
     */
    loadingIcon: {
        type: import('vue').PropType<string | Component>;
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: BooleanConstructor;
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "button", boolean>;
};
export declare const faButtonEmits: {
    /**
     * @description 点击事件
     * @param done 需要手动隐藏Loading
     */
    click: (event: MouseEvent, done?: () => void) => boolean;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * @description customize loading icon component
     * @default Eleme
     */
    loadingIcon: {
        type: import('vue').PropType<string | Component>;
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: BooleanConstructor;
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "button", boolean>;
}>, {
    /** @description 加载状态 */
    loading: boolean;
    /** @description button html element */
    ref: HTMLButtonElement;
    /** @description button size */
    size: "" | "default" | "small" | "large";
    /** @description button type */
    type: "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger";
    /** @description button disabled */
    disabled: boolean;
    /** @description whether adding space */
    shouldAddSpace: boolean;
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
        default: () => import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /** @description 禁用加载 */
    disabledLoading: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    icon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    loading: BooleanConstructor;
    plain: BooleanConstructor;
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown, "button", boolean>;
}>> & Readonly<{
    onClick?: (event: MouseEvent, done?: () => void) => any;
}>, {
    text: boolean;
    link: boolean;
    type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    plain: boolean;
    disabled: boolean;
    circle: boolean;
    autofocus: boolean;
    dark: boolean;
    loading: boolean;
    loadingIcon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    disabledLoading: boolean;
    nativeType: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    bg: boolean;
    round: boolean;
    autoInsertSpace: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    tag: "button";
}, import('vue').SlotsType<Partial<{
    default: () => VNode[];
    loading: () => VNode[];
    icon: () => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
