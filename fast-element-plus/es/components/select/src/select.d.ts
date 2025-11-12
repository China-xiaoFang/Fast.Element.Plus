import { ElSelectorOutput } from './select.type';
import { Options } from 'element-plus';
import { Component } from 'vue';
export declare const SelectProps: {
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description native input id
     */
    id: StringConstructor;
    /**
     * @description binding value
     */
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | NumberConstructor | StringConstructor | ArrayConstructor)[];
        default: any;
    };
    /**
     * @description the autocomplete attribute of select input
     */
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description size of Input
     */
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description whether Select is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description whether Select is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description custom class name for Select's dropdown
     */
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether options are loaded from server
     */
    remote: BooleanConstructor;
    /**
     * @description displayed text while loading data from server, default is 'Loading'
     */
    loadingText: StringConstructor;
    /**
     * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
     */
    noMatchText: StringConstructor;
    /**
     * @description displayed text when there is no options, you can also use slot `empty`, default is 'No data'
     */
    noDataText: StringConstructor;
    /**
     * @description custom remote search method
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description custom filter method
     */
    filterMethod: FunctionConstructor;
    /**
     * @description whether multiple-select is activated
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description placeholder, default is 'Select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description select first matching option on enter key. Use with `filterable` or `remote`
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description whether to collapse tags to a text when multiple selecting
     */
    collapseTags: BooleanConstructor;
    /**
     * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
     */
    collapseTagsTooltip: BooleanConstructor;
    /**
     * @description the max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description custom clear icon component
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description whether the width of the dropdown is the same as the input
     */
    fitInputWidth: BooleanConstructor;
    /**
     * @description custom suffix icon component
     */
    suffixIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description in remote search method show suffix icon
     */
    remoteShowSuffix: BooleanConstructor;
    /**
     * @description position of dropdown
     */
    placement: {
        type: import('vue').PropType<Placement>;
        default: string;
    };
    /**
     * @description list of possible positions for dropdown
     */
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
};
export type SelectComponentProps = {
    /** @description 指定标签为节点的某个属性值 */
    label?: string | ((data: any) => string);
    /** @description 指定是否隐藏为节点的某个属性值 */
    hide?: string | ((data: any) => boolean);
    /** @description 指定是否禁用为节点的某个属性值 */
    disabled?: string | ((data: any) => boolean);
    /** @description 指定子节点对象为节点的某个属性值 */
    children?: string;
};
export declare const faSelectProps: {
    /** @description displayed text while loading data from server, default is 'Loading' */
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
    noMatchText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    /** @description whether to collapse tags to a text when multiple selecting */
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
    collapseTagsTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: BooleanConstructor;
    /** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 默认选中。不能和懒加载一起使用 */
    defaultSelected: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 下拉框数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description native input id
     */
    id: StringConstructor;
    /**
     * @description the autocomplete attribute of select input
     */
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description size of Input
     */
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description whether Select is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description whether Select is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description custom class name for Select's dropdown
     */
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether options are loaded from server
     */
    remote: BooleanConstructor;
    /**
     * @description custom remote search method
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description custom filter method
     */
    filterMethod: FunctionConstructor;
    /**
     * @description whether multiple-select is activated
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description placeholder, default is 'Select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description select first matching option on enter key. Use with `filterable` or `remote`
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description the max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description custom clear icon component
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description whether the width of the dropdown is the same as the input
     */
    fitInputWidth: BooleanConstructor;
    /**
     * @description custom suffix icon component
     */
    suffixIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description in remote search method show suffix icon
     */
    remoteShowSuffix: BooleanConstructor;
    /**
     * @description position of dropdown
     */
    placement: {
        type: import('vue').PropType<Placement>;
        default: string;
    };
    /**
     * @description list of possible positions for dropdown
     */
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
};
export declare const faSelectEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string | string[]) => boolean;
    /** @description 数据改变 */
    dataChangeCallBack: (data: ElSelectorOutput[] | any[]) => boolean;
    /** @description 改变 */
    change: (data: ElSelectorOutput | ElSelectorOutput[] | any | any[], value?: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    /** @description 下拉框出现/隐藏时触发 */
    visibleChange: (visible: boolean) => boolean;
    /** @description 多选模式下移除tag时触发 */
    removeTag: (tagValue: any) => boolean;
    /** @description 可清空的单选模式下用户点击清空按钮时触发 */
    clear: () => boolean;
    /** @description 当 input 失去焦点时触发 */
    blur: (event: FocusEvent) => boolean;
    /** @description 当 input 获得焦点时触发 */
    focus: (event: FocusEvent) => boolean;
};
type FaSelectSlots = {
    /** @description FaSelectOption 默认内容插槽 */
    default: ElSelectorOutput;
    /** @description 下拉列表顶部的内容 */
    header: never;
    /** @description 下拉列表底部的内容 */
    footer: never;
    /** @description Select 组件头部内容 */
    prefix: never;
    /** @description 无选项时的列表 */
    empty: never;
    /** @description select 组件自定义标签内容 */
    tag: never;
    /** @description select 组件自定义 loading内容 */
    loading: never;
    /** @description select 组件自定义标签内容 */
    label: {
        label: string;
        value: string | number | boolean | object;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description displayed text while loading data from server, default is 'Loading' */
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
    noMatchText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    /** @description whether to collapse tags to a text when multiple selecting */
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
    collapseTagsTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: BooleanConstructor;
    /** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 默认选中。不能和懒加载一起使用 */
    defaultSelected: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 下拉框数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description native input id
     */
    id: StringConstructor;
    /**
     * @description the autocomplete attribute of select input
     */
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description size of Input
     */
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description whether Select is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description whether Select is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description custom class name for Select's dropdown
     */
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether options are loaded from server
     */
    remote: BooleanConstructor;
    /**
     * @description custom remote search method
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description custom filter method
     */
    filterMethod: FunctionConstructor;
    /**
     * @description whether multiple-select is activated
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description placeholder, default is 'Select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description select first matching option on enter key. Use with `filterable` or `remote`
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description the max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description custom clear icon component
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description whether the width of the dropdown is the same as the input
     */
    fitInputWidth: BooleanConstructor;
    /**
     * @description custom suffix icon component
     */
    suffixIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description in remote search method show suffix icon
     */
    remoteShowSuffix: BooleanConstructor;
    /**
     * @description position of dropdown
     */
    placement: {
        type: import('vue').PropType<Placement>;
        default: string;
    };
    /**
     * @description list of possible positions for dropdown
     */
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
}>, {
    /** @description 使选择器的输入框获取焦点 */
    focus: import('vue').ComputedRef<() => void>;
    /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
    blur: import('vue').ComputedRef<() => void>;
    /** @description 获取当前选中的标签 */
    selectedLabel: import('vue').ComputedRef<string | string[]>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 刷新 */
    refresh: () => Promise<void>;
    /** @description 设置选择  */
    setSelection: (value: string | number | boolean | object | (string | number | boolean | object)[]) => void;
    /** @description 清除选择  */
    clearSelection: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string | string[]) => boolean;
    /** @description 数据改变 */
    dataChangeCallBack: (data: ElSelectorOutput[] | any[]) => boolean;
    /** @description 改变 */
    change: (data: ElSelectorOutput | ElSelectorOutput[] | any | any[], value?: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    /** @description 下拉框出现/隐藏时触发 */
    visibleChange: (visible: boolean) => boolean;
    /** @description 多选模式下移除tag时触发 */
    removeTag: (tagValue: any) => boolean;
    /** @description 可清空的单选模式下用户点击清空按钮时触发 */
    clear: () => boolean;
    /** @description 当 input 失去焦点时触发 */
    blur: (event: FocusEvent) => boolean;
    /** @description 当 input 获得焦点时触发 */
    focus: (event: FocusEvent) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description displayed text while loading data from server, default is 'Loading' */
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
    noMatchText: {
        type: StringConstructor;
        default: string;
    };
    /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    /** @description whether to collapse tags to a text when multiple selecting */
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
    collapseTagsTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: BooleanConstructor;
    /** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 默认选中。不能和懒加载一起使用 */
    defaultSelected: BooleanConstructor;
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 下拉框数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description native input id
     */
    id: StringConstructor;
    /**
     * @description the autocomplete attribute of select input
     */
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description size of Input
     */
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description whether Select is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description whether Select is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description custom class name for Select's dropdown
     */
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description [popper.js](https://popper.js.org/docs/v2/) parameters
     */
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether options are loaded from server
     */
    remote: BooleanConstructor;
    /**
     * @description custom remote search method
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description custom filter method
     */
    filterMethod: FunctionConstructor;
    /**
     * @description whether multiple-select is activated
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description placeholder, default is 'Select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description select first matching option on enter key. Use with `filterable` or `remote`
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description the max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description custom clear icon component
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description whether the width of the dropdown is the same as the input
     */
    fitInputWidth: BooleanConstructor;
    /**
     * @description custom suffix icon component
     */
    suffixIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description in remote search method show suffix icon
     */
    remoteShowSuffix: BooleanConstructor;
    /**
     * @description position of dropdown
     */
    placement: {
        type: import('vue').PropType<Placement>;
        default: string;
    };
    /**
     * @description list of possible positions for dropdown
     */
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
}>> & Readonly<{
    onClear?: () => any;
    "onUpdate:modelValue"?: (value: string | number | boolean | object | (string | number | boolean | object)[]) => any;
    onChange?: (data: any, value?: string | number | boolean | object | (string | number | boolean | object)[]) => any;
    onFocus?: (event: FocusEvent) => any;
    onBlur?: (event: FocusEvent) => any;
    "onUpdate:label"?: (value: string | string[]) => any;
    onDataChangeCallBack?: (data: any[] | {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }[]) => any;
    onVisibleChange?: (visible: boolean) => any;
    onRemoveTag?: (tagValue: any) => any;
}>, {
    props: SelectComponentProps;
    data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }[];
    placement: Placement;
    loading: boolean;
    disabled: boolean;
    lazy: boolean;
    modelValue: string | number | boolean | object | (string | number | boolean | object)[];
    autocomplete: string;
    clearable: boolean;
    clearIcon: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    suffixIcon: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    validateEvent: boolean;
    popperOptions: Options;
    popperClass: string;
    effect: string | (string & {});
    teleported: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    width: string | number;
    persistent: boolean;
    fallbackPlacements: Placement[];
    moreDetail: boolean;
    loadingText: string;
    noMatchText: string;
    noDataText: string;
    collapseTags: boolean;
    collapseTagsTooltip: boolean;
    defaultSelected: boolean;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown>;
    automaticDropdown: boolean;
    filterable: boolean;
    allowCreate: boolean;
    remote: boolean;
    multiple: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    valueKey: string;
    maxCollapseTags: number;
    fitInputWidth: boolean;
    tagType: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>;
    tagEffect: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>;
    remoteShowSuffix: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaSelectSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
