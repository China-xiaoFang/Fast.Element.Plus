export declare const faFormItemProps: {
    /** @description Label tips 提示 */
    tips: StringConstructor;
    /** @description Grid 布局 */
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 偏移量 */
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (NumberConstructor | StringConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    labelPosition: {
        readonly type: import('vue').PropType<"" | "top" | "left" | "right">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    prop: {
        readonly type: import('vue').PropType<import('element-plus').FormItemProp>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    rules: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<"" | "error" | "success" | "validating">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    showMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
type FaFormItemSlots = {
    /** @description 默认内容插槽 */
    default: never;
    /** @description 标签位置显示的内容 */
    label: {
        label: string;
    };
    /** @description 验证错误信息的显示内容 */
    error: {
        error: string;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description Label tips 提示 */
    tips: StringConstructor;
    /** @description Grid 布局 */
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 偏移量 */
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (NumberConstructor | StringConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    labelPosition: {
        readonly type: import('vue').PropType<"" | "top" | "left" | "right">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    prop: {
        readonly type: import('vue').PropType<import('element-plus').FormItemProp>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    rules: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<"" | "error" | "success" | "validating">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    showMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, {
    /** @description 表单项大小 */
    size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    /** @description 校验消息 */
    validateMessage: import('vue').ComputedRef<string>;
    /** @description 校验状态 */
    validateState: import('vue').ComputedRef<"" | "error" | "success" | "validating">;
    /** @description 验证表单项 */
    validate: import('vue').ComputedRef<(trigger: string, callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult>;
    /** @description 移除该表单项的校验结果 */
    clearValidate: import('vue').ComputedRef<() => void>;
    /** @description 对该表单项进行重置，将其值重置为初始值并移除校验结果 */
    resetField: import('vue').ComputedRef<() => void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description Label tips 提示 */
    tips: StringConstructor;
    /** @description Grid 布局 */
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 偏移量 */
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (NumberConstructor | StringConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    labelPosition: {
        readonly type: import('vue').PropType<"" | "top" | "left" | "right">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    prop: {
        readonly type: import('vue').PropType<import('element-plus').FormItemProp>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    rules: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<"" | "error" | "success" | "validating">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    showMessage: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    required: boolean;
    offset: string | number;
    labelPosition: "" | "top" | "left" | "right";
    labelWidth: string | number;
    inlineMessage: boolean;
    showMessage: boolean;
    grid: boolean;
    row: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaFormItemSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
