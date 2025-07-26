import { SelectComponentProps } from '../../select/src/select';
import { ElSelectorOutput } from '../../select';
import { NodeDropType, TreeKey } from '../../tree/src/tree.props';
import { ComponentInternalInstance } from 'vue';
export declare const faTreeSelectProps: {
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
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: ArrayConstructor;
        default: () => [];
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
    defaultCheckedKeys: import('vue').PropType<TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<TreeKey[]>;
    currentNodeKey: import('vue').PropType<TreeKey>;
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
export declare const faTreeSelectEmits: {
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
    /** @description 当节点被点击的时候触发 */
    nodeClick: (data: ElSelectorOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当某一节点被鼠标右键点击时会触发该事件 */
    nodeContextmenu: (event: Event, data: ElSelectorOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当复选框被点击的时候触发 */
    checkChange: (data: ElSelectorOutput, checked: boolean, indeterminate: boolean) => boolean;
    /** @description 点击节点复选框之后触发 */
    check: (data: ElSelectorOutput, node: {
        checkedNodes: ElSelectorOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElSelectorOutput[];
        halfCheckedKeys: TreeKey[];
    }) => boolean;
    /** @description 当前选中节点变化时触发的事件 */
    currentChange: (data: ElSelectorOutput, node: any) => boolean;
    /** @description 节点被展开时触发的事件 */
    nodeExpand: (data: ElSelectorOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点被关闭时触发的事件 */
    nodeCollapse: (data: ElSelectorOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点开始拖拽时触发的事件 */
    nodeDragStart: (node: any, event: DragEvent) => boolean;
    /** @description 拖拽进入其他节点时触发的事件 */
    nodeDragEnter: (node: any, enterNode: any, event: DragEvent) => boolean;
    /** @description 拖拽离开某个节点时触发的事件 */
    nodeDragLeave: (node: any, leaveNode: any, event: DragEvent) => boolean;
    /** @description 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） */
    nodeDragOver: (node: any, dropNode: any, event: DragEvent) => boolean;
    /** @description 拖拽结束时（可能未成功）触发的事件 */
    nodeDragEnd: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => boolean;
    /** @description 拖拽成功完成时触发的事件 */
    nodeDrop: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => boolean;
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
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: ArrayConstructor;
        default: () => [];
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
    defaultCheckedKeys: import('vue').PropType<TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<TreeKey[]>;
    currentNodeKey: import('vue').PropType<TreeKey>;
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
    focus: import('vue').ComputedRef<any>;
    /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
    blur: import('vue').ComputedRef<any>;
    /** @description 获取当前选中的标签 */
    selectedLabel: import('vue').ComputedRef<any>;
    /** @description 过滤所有树节点，过滤后的节点将被隐藏 */
    filter: import('vue').ComputedRef<any>;
    /** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
    updateKeyChildren: import('vue').ComputedRef<any>;
    /** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
    getCheckedNodes: import('vue').ComputedRef<any>;
    /** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
    setCheckedNodes: import('vue').ComputedRef<any>;
    /** @description 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
    getCheckedKeys: import('vue').ComputedRef<any>;
    /** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
    setCheckedKeys: import('vue').ComputedRef<any>;
    /** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
    setChecked: import('vue').ComputedRef<any>;
    /** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
    getHalfCheckedNodes: import('vue').ComputedRef<any>;
    /** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
    getHalfCheckedKeys: import('vue').ComputedRef<any>;
    /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
    getCurrentKey: import('vue').ComputedRef<any>;
    /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
    getCurrentNode: import('vue').ComputedRef<any>;
    /** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 */
    setCurrentKey: import('vue').ComputedRef<any>;
    /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
    setCurrentNode: import('vue').ComputedRef<any>;
    /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
    getNode: import('vue').ComputedRef<any>;
    /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
    remove: import('vue').ComputedRef<any>;
    /** @description 为 Tree 中的一个节点追加一个子节点 */
    append: import('vue').ComputedRef<any>;
    /** @description 在 Tree 中给定节点前插入一个节点 */
    insertBefore: import('vue').ComputedRef<any>;
    /** @description 在 Tree 中给定节点后插入一个节点 */
    insertAfter: import('vue').ComputedRef<any>;
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
    /** @description 当节点被点击的时候触发 */
    nodeClick: (data: ElSelectorOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当某一节点被鼠标右键点击时会触发该事件 */
    nodeContextmenu: (event: Event, data: ElSelectorOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当复选框被点击的时候触发 */
    checkChange: (data: ElSelectorOutput, checked: boolean, indeterminate: boolean) => boolean;
    /** @description 点击节点复选框之后触发 */
    check: (data: ElSelectorOutput, node: {
        checkedNodes: ElSelectorOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElSelectorOutput[];
        halfCheckedKeys: TreeKey[];
    }) => boolean;
    /** @description 当前选中节点变化时触发的事件 */
    currentChange: (data: ElSelectorOutput, node: any) => boolean;
    /** @description 节点被展开时触发的事件 */
    nodeExpand: (data: ElSelectorOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点被关闭时触发的事件 */
    nodeCollapse: (data: ElSelectorOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点开始拖拽时触发的事件 */
    nodeDragStart: (node: any, event: DragEvent) => boolean;
    /** @description 拖拽进入其他节点时触发的事件 */
    nodeDragEnter: (node: any, enterNode: any, event: DragEvent) => boolean;
    /** @description 拖拽离开某个节点时触发的事件 */
    nodeDragLeave: (node: any, leaveNode: any, event: DragEvent) => boolean;
    /** @description 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） */
    nodeDragOver: (node: any, dropNode: any, event: DragEvent) => boolean;
    /** @description 拖拽结束时（可能未成功）触发的事件 */
    nodeDragEnd: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => boolean;
    /** @description 拖拽成功完成时触发的事件 */
    nodeDrop: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => boolean;
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
    /**
     * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
        type: ArrayConstructor;
        default: () => [];
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
    defaultCheckedKeys: import('vue').PropType<TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<TreeKey[]>;
    currentNodeKey: import('vue').PropType<TreeKey>;
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
    onNodeClick?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node?: any, instance?: ComponentInternalInstance) => any;
    onNodeContextmenu?: (event: Event, data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node?: any, instance?: ComponentInternalInstance) => any;
    onCheckChange?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, checked: boolean, indeterminate: boolean) => any;
    onCheck?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node: {
        checkedNodes: ElSelectorOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElSelectorOutput[];
        halfCheckedKeys: TreeKey[];
    }) => any;
    onCurrentChange?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node: any) => any;
    onNodeExpand?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node: any, instance: ComponentInternalInstance) => any;
    onNodeCollapse?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    }, node: any, instance: ComponentInternalInstance) => any;
    onNodeDragStart?: (node: any, event: DragEvent) => any;
    onNodeDragEnter?: (node: any, enterNode: any, event: DragEvent) => any;
    onNodeDragLeave?: (node: any, leaveNode: any, event: DragEvent) => any;
    onNodeDragOver?: (node: any, dropNode: any, event: DragEvent) => any;
    onNodeDragEnd?: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => any;
    onNodeDrop?: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => any;
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
    draggable: boolean;
    fallbackPlacements: import('element-plus').Placement[];
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
    fitInputWidth: boolean;
    tagType: "primary" | "success" | "warning" | "info" | "danger";
    tagEffect: "plain" | "dark" | "light";
    remoteShowSuffix: boolean;
    nodeKey: string;
    defaultExpandAll: boolean;
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
    indent: number;
    cacheData: unknown[];
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTreeSelectSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
