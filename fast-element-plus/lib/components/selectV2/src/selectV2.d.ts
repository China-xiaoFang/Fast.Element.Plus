import { ElSelectorOutput } from '../../select/src/select.type';
import { PagedInput, PagedResult } from '../../table';
import { Options, Placement } from 'element-plus';
import { Component } from 'vue';
type Props = {
    label?: string;
    value?: string;
    disabled?: string;
    options?: string;
};
export declare const SelectV2Props: {
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: {
        readonly type: import('vue').PropType<string | number | boolean | Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description autocomplete of select input
     */
    autocomplete: {
        type: import('vue').PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description custom clear icon
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
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
     * @description The max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description
     */
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * @description is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description
     */
    filterMethod: FunctionConstructor;
    /**
     * @description The height of the dropdown panel, 34px for each item
     */
    height: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description The height of the dropdown item
     */
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    id: StringConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description displayed text while loading data from server, default is 'Loading'
     */
    loadingText: StringConstructor;
    /**
     * @description biding value
     */
    modelValue: {
        type: import('vue').PropType<any>;
    };
    /**
     * @description is multiple
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when multiple is true. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description displayed text when there is no options, you can also use slot empty, the default is 'No Data'
     */
    noDataText: StringConstructor;
    /**
     * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
     */
    noMatchText: StringConstructor;
    /**
     * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description whether reserve the keyword after select filtered option.
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description data of the options, the key of `value` and `label` can be customize by `props`
     */
    options: {
        type: import('vue').PropType<(Record<string, any> | (Record<string, any> & {
            created?: boolean;
        }))[]>;
    };
    /**
     * @description placeholder, the default is 'Please select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: import('vue').PropType<Partial<Options>>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether search data from server
     */
    remote: BooleanConstructor;
    /**
     * @description size of component
     */
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description configuration options, see the following table
     */
    props: {
        type: import('vue').PropType<Props>;
        default: () => Required<Props>;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description Controls whether the scrollbar is always displayed
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description offset of the dropdown
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Determines whether the arrow is displayed
     */
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tabindex for input
     */
    tabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /**
     * @description which element the select dropdown appends to
     */
    appendTo: StringConstructor;
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
export declare const faSelectV2Props: {
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
    /** 分页返回 */
    pageResult: BooleanConstructor;
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<((params?: any) => Promise<ElSelectorOutput[]>) | ((params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>)>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: {
        readonly type: import('vue').PropType<string | number | boolean | Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description autocomplete of select input
     */
    autocomplete: {
        type: import('vue').PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description custom clear icon
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description The max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description
     */
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * @description is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description
     */
    filterMethod: FunctionConstructor;
    /**
     * @description The height of the dropdown panel, 34px for each item
     */
    height: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description The height of the dropdown item
     */
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    id: StringConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description is multiple
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when multiple is true. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description whether reserve the keyword after select filtered option.
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description data of the options, the key of `value` and `label` can be customize by `props`
     */
    options: {
        type: import('vue').PropType<(Record<string, any> | (Record<string, any> & {
            created?: boolean;
        }))[]>;
    };
    /**
     * @description placeholder, the default is 'Please select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: import('vue').PropType<Partial<Options>>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether search data from server
     */
    remote: BooleanConstructor;
    /**
     * @description size of component
     */
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description configuration options, see the following table
     */
    props: {
        type: import('vue').PropType<Props>;
        default: () => Required<Props>;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description Controls whether the scrollbar is always displayed
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description offset of the dropdown
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Determines whether the arrow is displayed
     */
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tabindex for input
     */
    tabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /**
     * @description which element the select dropdown appends to
     */
    appendTo: StringConstructor;
};
export declare const faSelectV2Emits: {
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
type FaSelectV2Slots = {
    /** @description FaSelectOption 默认内容插槽 */
    default: {
        item: ElSelectorOutput;
        index: number;
        disabled: boolean;
    };
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
    /** 分页返回 */
    pageResult: BooleanConstructor;
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<((params?: any) => Promise<ElSelectorOutput[]>) | ((params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>)>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: {
        readonly type: import('vue').PropType<string | number | boolean | Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description autocomplete of select input
     */
    autocomplete: {
        type: import('vue').PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description custom clear icon
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description The max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description
     */
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * @description is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description
     */
    filterMethod: FunctionConstructor;
    /**
     * @description The height of the dropdown panel, 34px for each item
     */
    height: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description The height of the dropdown item
     */
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    id: StringConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description is multiple
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when multiple is true. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description whether reserve the keyword after select filtered option.
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description data of the options, the key of `value` and `label` can be customize by `props`
     */
    options: {
        type: import('vue').PropType<(Record<string, any> | (Record<string, any> & {
            created?: boolean;
        }))[]>;
    };
    /**
     * @description placeholder, the default is 'Please select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: import('vue').PropType<Partial<Options>>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether search data from server
     */
    remote: BooleanConstructor;
    /**
     * @description size of component
     */
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description configuration options, see the following table
     */
    props: {
        type: import('vue').PropType<Props>;
        default: () => Required<Props>;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description Controls whether the scrollbar is always displayed
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description offset of the dropdown
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Determines whether the arrow is displayed
     */
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tabindex for input
     */
    tabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /**
     * @description which element the select dropdown appends to
     */
    appendTo: StringConstructor;
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
    /** 分页返回 */
    pageResult: BooleanConstructor;
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<((params?: any) => Promise<ElSelectorOutput[]>) | ((params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>)>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: {
        readonly type: import('vue').PropType<string | number | boolean | Function>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    /**
     * @description whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: BooleanConstructor;
    /**
     * @description autocomplete of select input
     */
    autocomplete: {
        type: import('vue').PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    /**
     * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
     */
    automaticDropdown: BooleanConstructor;
    /**
     * @description whether select can be cleared
     */
    clearable: BooleanConstructor;
    /**
     * @description custom clear icon
     */
    clearIcon: {
        type: import('vue').PropType<string | Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    /**
     * @description tooltip theme, built-in theme: `dark` / `light`
     */
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    /**
     * @description The max tags number to be shown. To use this, `collapse-tags` must be true
     */
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    defaultFirstOption: BooleanConstructor;
    /**
     * @description is disabled
     */
    disabled: BooleanConstructor;
    /**
     * @description
     */
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: any;
    };
    /**
     * @description is filterable
     */
    filterable: BooleanConstructor;
    /**
     * @description
     */
    filterMethod: FunctionConstructor;
    /**
     * @description The height of the dropdown panel, 34px for each item
     */
    height: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description The height of the dropdown item
     */
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description
     */
    id: StringConstructor;
    /**
     * @description whether Select is loading data from server
     */
    loading: BooleanConstructor;
    /**
     * @description is multiple
     */
    multiple: BooleanConstructor;
    /**
     * @description maximum number of options user can select when multiple is true. No limit when set to 0
     */
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description the name attribute of select input
     */
    name: StringConstructor;
    /**
     * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
     */
    remoteMethod: FunctionConstructor;
    /**
     * @description whether reserve the keyword after select filtered option.
     */
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description data of the options, the key of `value` and `label` can be customize by `props`
     */
    options: {
        type: import('vue').PropType<(Record<string, any> | (Record<string, any> & {
            created?: boolean;
        }))[]>;
    };
    /**
     * @description placeholder, the default is 'Please select'
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @description whether select dropdown is teleported to the body
     */
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    /**
     * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
     */
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: import('vue').PropType<Partial<Options>>;
        default: () => Partial<Options>;
    };
    /**
     * @description whether search data from server
     */
    remote: BooleanConstructor;
    /**
     * @description size of component
     */
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description configuration options, see the following table
     */
    props: {
        type: import('vue').PropType<Props>;
        default: () => Required<Props>;
    };
    /**
     * @description unique identity key name for value, required when value is an object
     */
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description Controls whether the scrollbar is always displayed
     */
    scrollbarAlwaysOn: BooleanConstructor;
    /**
     * @description whether to trigger form validation
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description offset of the dropdown
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description Determines whether the arrow is displayed
     */
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /**
     * @description tag type
     */
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tag effect
     */
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @description tabindex for input
     */
    tabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /**
     * @description which element the select dropdown appends to
     */
    appendTo: StringConstructor;
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
    props: Props;
    data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }[];
    offset: number;
    loading: boolean;
    disabled: boolean;
    modelValue: string | number | boolean | object | (string | number | boolean | object)[];
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    tabindex: string | number;
    validateEvent: boolean;
    placement: Placement;
    popperOptions: Partial<Options>;
    popperClass: string;
    effect: string | (string & {});
    teleported: boolean;
    width: string | number;
    showArrow: boolean;
    persistent: boolean;
    height: number;
    fallbackPlacements: Placement[];
    lazy: boolean;
    moreDetail: boolean;
    loadingText: string;
    noMatchText: string;
    noDataText: string;
    collapseTags: boolean;
    collapseTagsTooltip: boolean;
    defaultSelected: boolean;
    valueOnClear: string | number | boolean | Function;
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
    clearIcon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    tagType: "primary" | "success" | "warning" | "info" | "danger";
    tagEffect: "plain" | "dark" | "light";
    pageResult: boolean;
    estimatedOptionHeight: number;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaSelectV2Slots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
