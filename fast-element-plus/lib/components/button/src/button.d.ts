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
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: {
        readonly type: import('vue').PropType<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    icon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: {
        readonly type: import('vue').PropType<"button" | "reset" | "submit">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
    loading: BooleanConstructor;
    plain: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    tag: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
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
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: {
        readonly type: import('vue').PropType<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    icon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: {
        readonly type: import('vue').PropType<"button" | "reset" | "submit">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
    loading: BooleanConstructor;
    plain: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    tag: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
}>, {
    /** @description 按钮 html 元素 */
    ref: import('vue').ComputedRef<HTMLButtonElement>;
    /** @description 按钮尺寸 */
    size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    /** @description 按钮类型 */
    type: import('vue').ComputedRef<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
    /** @description 按钮已禁用 */
    disabled: import('vue').ComputedRef<boolean>;
    /** @description 是否在两个字符之间插入空格 */
    shouldAddSpace: import('vue').ComputedRef<boolean>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
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
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
    type: {
        readonly type: import('vue').PropType<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    icon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    nativeType: {
        readonly type: import('vue').PropType<"button" | "reset" | "submit">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
    loading: BooleanConstructor;
    plain: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    text: BooleanConstructor;
    link: BooleanConstructor;
    bg: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    autoInsertSpace: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    tag: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "button";
    };
}>> & Readonly<{
    onClick?: (event: MouseEvent, done?: () => void) => any;
}>, {
    type: "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger";
    circle: boolean;
    link: boolean;
    text: boolean;
    plain: boolean;
    loading: boolean;
    loadingIcon: string | Component;
    disabledLoading: boolean;
    disabled: boolean;
    nativeType: "button" | "reset" | "submit";
    bg: boolean;
    autofocus: boolean;
    round: boolean;
    dark: boolean;
    autoInsertSpace: boolean;
    tag: "button";
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaButtonSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
