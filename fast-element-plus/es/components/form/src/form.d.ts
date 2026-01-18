import { FaLayoutGridBreakPoint } from '../../layoutGrid';
import { FormItemContext, FormValidationResult } from 'element-plus';
export declare const faFormProps: {
    /** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** @description Suffix of the label. */
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    /** @description When validation fails, scroll to the first error form entry. */
    scrollToError: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 详情From，会删除 FormItem 的 paddinfa-bottom */
    detailForm: BooleanConstructor;
    /** @description Grid布局*/
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => Record<FaLayoutGridBreakPoint, number>;
    };
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
};
type FaFormSlots = {
    /** @description 默认内容插槽 */
    default: unknown;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** @description Suffix of the label. */
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    /** @description When validation fails, scroll to the first error form entry. */
    scrollToError: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 详情From，会删除 FormItem 的 paddinfa-bottom */
    detailForm: BooleanConstructor;
    /** @description Grid布局*/
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => Record<FaLayoutGridBreakPoint, number>;
    };
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>, {
    /** @description 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 */
    validate: () => FormValidationResult;
    /** @description 验证具体的某个字段。 */
    validateField: import('vue').ComputedRef<(props?: import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemProp>, callback?: import('element-plus').FormValidateCallback) => FormValidationResult>;
    /** @description 重置该表单项，将其值重置为初始值，并移除校验结果 */
    resetFields: import('vue').ComputedRef<(props?: import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemProp>) => void>;
    /** @description 清理某个字段的表单验证信息。 */
    clearValidate: import('vue').ComputedRef<(props?: import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemProp>) => void>;
    /** @description 滚动到指定的字段 */
    scrollToField: import('vue').ComputedRef<(prop: import('element-plus').FormItemProp) => void>;
    /** @description 获取所有字段的 context */
    fields: import('vue').ComputedRef<FormItemContext[]>;
    /** @description 对整个表单的内容进行验证，带滚动。 接收一个回调函数，或返回 Promise。 */
    validateScrollToField: () => FormValidationResult;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /** @description Suffix of the label. */
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    /** @description When validation fails, scroll to the first error form entry. */
    scrollToError: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 详情From，会删除 FormItem 的 paddinfa-bottom */
    detailForm: BooleanConstructor;
    /** @description Grid布局*/
    grid: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Grid布局列配置 */
    cols: {
        type: import('vue').PropType<string | number | Record<FaLayoutGridBreakPoint, number>>;
        default: () => Record<FaLayoutGridBreakPoint, number>;
    };
    model: ObjectConstructor;
    rules: {
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions) | ((new (...args: any[]) => boolean | ScrollIntoViewOptions) | (() => boolean | ScrollIntoViewOptions))[], unknown, unknown, true, boolean>;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    disabled: boolean;
    labelPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
    requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: string | number;
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    scrollIntoViewOptions: true;
    cols: string | number | Record<FaLayoutGridBreakPoint, number>;
    grid: boolean;
    detailForm: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaFormSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
