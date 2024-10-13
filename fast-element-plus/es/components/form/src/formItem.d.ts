import { VNode } from 'vue';
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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, {
    /** @description Size of the form item from the reference */
    size: "" | "default" | "small" | "large";
    /** @description Validation message from the form item */
    validateMessage: string;
    /** @description Current validation state of the form item */
    validateState: "" | "error" | "success" | "validating";
    /** @description Function to validate the form item */
    validate: (trigger: string, callback?: import('element-plus').FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
    /** @description Function to clear validation status of the form item */
    clearValidate: () => void;
    /** @description Reset the form item and clear validation results */
    resetField: () => void;
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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /** @description 栅格跨度 */
    span: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /** @description 独占一行。如果设置 span 则无效 */
    row: BooleanConstructor;
    label: StringConstructor;
    labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
    prop: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp) | ((new (...args: any[]) => import('element-plus').FormItemProp & {}) | (() => import('element-plus').FormItemProp))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    required: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    rules: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>) | ((new (...args: any[]) => import('element-plus').FormItemRule | import('element-plus').FormItemRule[]) | (() => import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    error: StringConstructor;
    validateStatus: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    for: StringConstructor;
    inlineMessage: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    offset: string | number;
    required: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
    labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    inlineMessage: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    grid: boolean;
    row: boolean;
}, import('vue').SlotsType<Partial<{
    default: () => VNode[];
    label: (arg: {
        label: string;
    }) => VNode[];
    error: (arg: {
        error: string;
    }) => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
