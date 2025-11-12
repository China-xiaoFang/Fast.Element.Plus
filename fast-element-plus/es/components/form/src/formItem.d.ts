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
    labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
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
    labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
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
    labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    required: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    offset: string | number;
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
    labelWidth: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    inlineMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    grid: boolean;
    row: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaFormItemSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
