import { TableProps } from 'element-plus';
import { PropType } from 'vue';
import { PagedInput, PagedResult } from '../../table';
export declare const faInputDialogPageProps: {
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description v-model绑定值 */
    modelValue: (NumberConstructor | StringConstructor)[];
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 输入框占位文本 */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** @description 禁用 */
    disabled: BooleanConstructor;
    /** @description 标题 */
    title: StringConstructor;
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 显示文本 Key */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
};
export declare const faInputDialogPageEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string) => boolean;
    /** @description 改变 */
    change: (value: string | number) => boolean;
};
type FaInputDialogPageSlots = {
    /** @description 默认内容插槽 */
    default: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description v-model绑定值 */
    modelValue: (NumberConstructor | StringConstructor)[];
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 输入框占位文本 */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** @description 禁用 */
    disabled: BooleanConstructor;
    /** @description 标题 */
    title: StringConstructor;
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 显示文本 Key */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
}>, {
    /** @description 选择行数据 */
    selectionRow: import('vue').ComputedRef<unknown>;
    /** @description 打开选择器弹窗 */
    open: () => void;
    /** @description 清除选择 */
    clear: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string) => boolean;
    /** @description 改变 */
    change: (value: string | number) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
    rowKey: {
        type: PropType<TableProps<any>["rowKey"]>;
        default: string;
    };
    /** @description v-model绑定值 */
    modelValue: (NumberConstructor | StringConstructor)[];
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 输入框占位文本 */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /** @description 禁用 */
    disabled: BooleanConstructor;
    /** @description 标题 */
    title: StringConstructor;
    /** @description 请求api */
    requestApi: {
        type: PropType<(params?: PagedInput) => Promise<PagedResult | any[]>>;
    };
    /** 初始化参数 */
    initParam: PropType<any>;
    /** @description 显示文本 Key */
    labelKey: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: string | number) => any;
    onChange?: (value: string | number) => any;
    "onUpdate:label"?: (value: string) => any;
}>, {
    disabled: boolean;
    placeholder: string;
    rowKey: string | ((row: any) => string);
    labelKey: string;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaInputDialogPageSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
