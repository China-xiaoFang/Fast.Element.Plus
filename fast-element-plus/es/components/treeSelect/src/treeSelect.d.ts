import { SelectComponentProps } from '../../select/src/select';
import { ElSelectorOutput } from '../../select';
import { ComponentInternalInstance } from 'vue';
export declare const faTreeSelectProps: {
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: import('vue').PropType<{
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[]>;
        default: {
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[];
    };
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
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
    /** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
    /** @description 是否默认展开所有节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候选中节点 */
    checkOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否高亮当前选中节点 */
    highlightCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 */
    expandOnClickNode: BooleanConstructor;
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (StringConstructor | NumberConstructor)[];
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
        type: import('vue').PropType<any[] | {
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[] | any[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[] | any[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('../../tree/src/tree.props').TreeKey>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    load: import('vue').PropType<import('../../tree/src/tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('../../tree/src/tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
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
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
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
        type: import('vue').PropType<Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
};
export declare const faTreeSelectEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string | string[]) => boolean;
    /** @description 数据改变 */
    dataChangeCallBack: (data: ElSelectorOutput[] | any[]) => boolean;
    /** @description 改变 */
    change: (data: ElSelectorOutput | ElSelectorOutput[] | any | any[], value?: string | number | boolean | object | (string | number | boolean | object)[]) => boolean;
    'check-change': (data: any, checked: boolean, indeterminate: boolean) => any;
    'current-change': (data: any | null, node: import('element-plus/es/components/tree/src/model/node.mjs').default | null) => boolean;
    'node-click': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null, evt: MouseEvent) => any;
    'node-contextmenu': (evt: Event, data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    'node-collapse': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    'node-expand': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    check: (data: any, checkedInfo: import('element-plus').CheckedInfo) => any;
    'node-drag-start': (node: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-end': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default | null, dropType: import('element-plus').NodeDropType, evt: DragEvent) => DragEvent;
    'node-drop': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropType: Exclude<import('element-plus').NodeDropType, "none">, evt: DragEvent) => DragEvent;
    'node-drag-leave': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, oldDropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-enter': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-over': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'popup-scroll': ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
    'remove-tag': (val: unknown) => boolean;
    'visible-change': (visible: boolean) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
};
type FaTreeSelectSlots = {
    /** @description 默认内容插槽 */
    default: {
        node: any;
        data: ElSelectorOutput;
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
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: import('vue').PropType<{
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[]>;
        default: {
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[];
    };
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
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
    /** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
    /** @description 是否默认展开所有节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候选中节点 */
    checkOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否高亮当前选中节点 */
    highlightCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 */
    expandOnClickNode: BooleanConstructor;
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (StringConstructor | NumberConstructor)[];
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
        type: import('vue').PropType<any[] | {
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[] | any[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[] | any[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('../../tree/src/tree.props').TreeKey>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    load: import('vue').PropType<import('../../tree/src/tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('../../tree/src/tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
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
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
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
        type: import('vue').PropType<Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
}>, {
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 刷新 */
    refresh: () => Promise<void>;
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
    'check-change': (data: any, checked: boolean, indeterminate: boolean) => any;
    'current-change': (data: any | null, node: import('element-plus/es/components/tree/src/model/node.mjs').default | null) => boolean;
    'node-click': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null, evt: MouseEvent) => any;
    'node-contextmenu': (evt: Event, data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    'node-collapse': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    'node-expand': (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance | null) => any;
    check: (data: any, checkedInfo: import('element-plus').CheckedInfo) => any;
    'node-drag-start': (node: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-end': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default | null, dropType: import('element-plus').NodeDropType, evt: DragEvent) => DragEvent;
    'node-drop': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropType: Exclude<import('element-plus').NodeDropType, "none">, evt: DragEvent) => DragEvent;
    'node-drag-leave': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, oldDropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-enter': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'node-drag-over': (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => DragEvent;
    'popup-scroll': ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
    'remove-tag': (val: unknown) => boolean;
    'visible-change': (visible: boolean) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: import('vue').PropType<{
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[]>;
        default: {
            value: string | number | boolean | object;
            currentLabel: string | number;
            isDisabled: boolean;
        }[];
    };
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
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
    /** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
    /** @description 是否默认展开所有节点 */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候选中节点 */
    checkOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否高亮当前选中节点 */
    highlightCurrent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 */
    expandOnClickNode: BooleanConstructor;
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object | (string | number | boolean | object)[]>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: import('vue').PropType<string | string[]>;
    /** @description 宽度 */
    width: {
        type: (StringConstructor | NumberConstructor)[];
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
        type: import('vue').PropType<any[] | {
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
        default: () => ElSelectorOutput[] | any[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElSelectorOutput[] | any[]>>;
    };
    /** 初始化参数 */
    initParam: import('vue').PropType<any>;
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('../../tree/src/tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('../../tree/src/tree.props').TreeKey>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    load: import('vue').PropType<import('../../tree/src/tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('../../tree/src/tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
    ariaLabel: StringConstructor;
    emptyValues: ArrayConstructor;
    valueOnClear: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null) | ((new (...args: any[]) => string | number | boolean | Function) | (() => string | number | boolean | Function | null))[], unknown, unknown, undefined, boolean>;
    name: StringConstructor;
    id: StringConstructor;
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: {
        type: import('vue').PropType<string | (string & {})>;
        default: string;
    };
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import('vue').PropType<Options>;
        default: () => Partial<Options>;
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
    teleported: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    fitInputWidth: BooleanConstructor;
    suffixIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: import('vue').DefineComponent<{}, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    };
    tagType: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "primary" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    tagEffect: {
        default: string;
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "plain" | "dark" | "light", unknown>>;
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
        type: import('vue').PropType<Placement>;
        default: string;
    };
    fallbackPlacements: {
        type: import('vue').PropType<Placement[]>;
        default: string[];
    };
}>> & Readonly<{
    onClear?: () => any;
    "onUpdate:modelValue"?: (value: string | number | boolean | object | (string | number | boolean | object)[]) => any;
    onChange?: (data: any, value?: string | number | boolean | object | (string | number | boolean | object)[]) => any;
    onFocus?: (evt: FocusEvent) => any;
    onBlur?: (evt: FocusEvent) => any;
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
    "onPopup-scroll"?: (args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any;
    "onRemove-tag"?: (val: unknown) => any;
    "onVisible-change"?: (visible: boolean) => any;
    "onCurrent-change"?: (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default) => any;
    "onCheck-change"?: (data: any, checked: boolean, indeterminate: boolean) => any;
    "onNode-click"?: (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance, evt: MouseEvent) => any;
    "onNode-contextmenu"?: (evt: Event, data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance) => any;
    "onNode-collapse"?: (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance) => any;
    "onNode-expand"?: (data: any, node: import('element-plus/es/components/tree/src/model/node.mjs').default, nodeInstance: ComponentInternalInstance) => any;
    onCheck?: (data: any, checkedInfo: import('element-plus').CheckedInfo) => any;
    "onNode-drag-start"?: (node: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => any;
    "onNode-drag-end"?: (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropType: import('element-plus').NodeDropType, evt: DragEvent) => any;
    "onNode-drop"?: (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropType: "before" | "after" | "inner", evt: DragEvent) => any;
    "onNode-drag-leave"?: (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, oldDropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => any;
    "onNode-drag-enter"?: (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => any;
    "onNode-drag-over"?: (draggingNode: import('element-plus/es/components/tree/src/model/node.mjs').default, dropNode: import('element-plus/es/components/tree/src/model/node.mjs').default, evt: DragEvent) => any;
}>, {
    props: SelectComponentProps;
    data: any[] | {
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
    draggable: boolean;
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
    defaultExpandAll: boolean;
    indent: number;
    nodeKey: string;
    checkOnClickNode: boolean;
    highlightCurrent: boolean;
    collapseOnClickNode: boolean;
    renderAfterExpand: boolean;
    checkStrictly: boolean;
    expandOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    showCheckbox: boolean;
    accordion: boolean;
    cacheData: {
        value: string | number | boolean | object;
        currentLabel: string | number;
        isDisabled: boolean;
    }[];
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTreeSelectSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
