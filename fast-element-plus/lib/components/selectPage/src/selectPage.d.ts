import { SelectComponentProps } from '../../select/src/select';
import { ElSelectorOutput } from '../../select';
import { PagedInput, PagedResult } from '../../table';
export declare const faSelectPageProps: {
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
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>>;
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
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('element-plus').Options>>;
        default: () => Partial<import('element-plus').Options>;
    };
    remote: BooleanConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteShowSuffix: BooleanConstructor;
    placement: {
        type: import('vue').PropType<import('element-plus').Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<import('element-plus').Placement[]>;
        default: string[];
    };
};
export declare const faSelectPageEmits: {
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
type FaSelectPageSlots = {
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
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>>;
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
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('element-plus').Options>>;
        default: () => Partial<import('element-plus').Options>;
    };
    remote: BooleanConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteShowSuffix: BooleanConstructor;
    placement: {
        type: import('vue').PropType<import('element-plus').Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<import('element-plus').Placement[]>;
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
    /** @description 选中的数据 */
    selectedList: import('vue').ComputedRef<{
        [x: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }[]>;
    /** @description 刷新 */
    refresh: (pageIndex?: number) => Promise<void>;
    /** @description 设置选择 */
    setSelection: (value: string | number | boolean | object | (string | number | boolean | object)[]) => void;
    /** @description 清除选择 */
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
    /** @description 配置选项 */
    props: {
        type: import('vue').PropType<SelectComponentProps>;
        default: () => Partial<SelectComponentProps>;
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: PagedInput) => Promise<PagedResult<ElSelectorOutput>>>;
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
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<"" | "small" | "default" | "large">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Partial<import('element-plus').Options>>;
        default: () => Partial<import('element-plus').Options>;
    };
    remote: BooleanConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    maxCollapseTags: {
        type: NumberConstructor;
        default: number;
    };
    teleported: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<"primary" | "success" | "warning" | "info" | "danger">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<"plain" | "dark" | "light">;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteShowSuffix: BooleanConstructor;
    placement: {
        type: import('vue').PropType<import('element-plus').Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<import('element-plus').Placement[]>;
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
    loading: boolean;
    disabled: boolean;
    modelValue: string | number | boolean | object | (string | number | boolean | object)[];
    autocomplete: string;
    clearable: boolean;
    suffixIcon: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    validateEvent: boolean;
    placement: import('element-plus').Placement;
    popperOptions: Partial<import('element-plus').Options>;
    popperClass: string;
    effect: string | (string & {});
    teleported: boolean;
    width: string | number;
    persistent: boolean;
    fallbackPlacements: import('element-plus').Placement[];
    moreDetail: boolean;
    loadingText: string;
    noMatchText: string;
    noDataText: string;
    collapseTags: boolean;
    collapseTagsTooltip: boolean;
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
    fitInputWidth: boolean;
    tagType: "primary" | "success" | "warning" | "info" | "danger";
    tagEffect: "plain" | "dark" | "light";
    remoteShowSuffix: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaSelectPageSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
