import { FaLayoutGridBreakPoint } from '../../layoutGrid';
import { FormValidationResult } from 'element-plus';
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
    /** @description 详情From，会删除 FormItem 的 padding-bottom */
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
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
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
    /** @description 详情From，会删除 FormItem 的 padding-bottom */
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
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>, {
    /** @description Validate the whole form. Receives a callback or returns `Promise`. */
    validate: () => FormValidationResult;
    /** @description Validate specified fields. */
    validateField: () => FormValidationResult;
    /** @description Reset specified fields and remove validation result. */
    resetFields: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
    /** @description Clear validation message for specified fields. */
    clearValidate: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
    /** @description Scroll to the specified fields. */
    scrollToField: (prop: import('element-plus').FormItemProp) => void;
    /** @description All fields context. */
    fields: import('element-plus').FormItemContext[];
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
    /** @description 详情From，会删除 FormItem 的 padding-bottom */
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
        readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
    requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: string | number;
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    disabled: boolean;
    grid: boolean;
    cols: string | number | Record<FaLayoutGridBreakPoint, number>;
    detailForm: boolean;
}, import('vue').SlotsType<Partial<{
    default: (arg: unknown) => import('vue').VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
