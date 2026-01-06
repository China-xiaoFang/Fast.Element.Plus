import { ElTreeOutput } from './tree.type';
import { ComponentInternalInstance } from 'vue';
export declare const faTreeProps: {
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
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
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 默认选择 */
    defaultSelection: (NumberConstructor | StringConstructor)[];
    /** @description 标题 */
    title: StringConstructor;
    /** @description 折叠 */
    hamburger: BooleanConstructor;
    /** @description 隐藏全部 */
    hideAll: BooleanConstructor;
    /** @description 隐藏过滤 */
    hideFilter: BooleanConstructor;
    /** @description 全部值 */
    allValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description 树形数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
            showQuantity?: boolean;
            quantity?: number;
        }[]>;
        default: () => ElTreeOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElTreeOutput[]>>;
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
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('./tree.props').TreeKey>;
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
    props: {
        type: import('vue').PropType<import('./tree.props').TreeOptionProps>;
        default: () => import('./tree.props').TreeOptionProps;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: import('vue').PropType<import('./tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('./tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
};
export declare const faTreeEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number | boolean | object) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string) => boolean;
    /** @description 数据改变 */
    dataChangeCallBack: (data: ElTreeOutput[]) => boolean;
    /** @description 改变 */
    change: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent) => boolean;
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
};
type FaTreeSlots = {
    /** @description 默认内容插槽 */
    default: {
        node: any;
        data: ElTreeOutput;
    };
    /** @description 当数据为空时自定义的内容 */
    empty: never;
    /** @description 显示内容插槽 */
    label: {
        node: any;
        data: ElTreeOutput;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
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
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 默认选择 */
    defaultSelection: (NumberConstructor | StringConstructor)[];
    /** @description 标题 */
    title: StringConstructor;
    /** @description 折叠 */
    hamburger: BooleanConstructor;
    /** @description 隐藏全部 */
    hideAll: BooleanConstructor;
    /** @description 隐藏过滤 */
    hideFilter: BooleanConstructor;
    /** @description 全部值 */
    allValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description 树形数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
            showQuantity?: boolean;
            quantity?: number;
        }[]>;
        default: () => ElTreeOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElTreeOutput[]>>;
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
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('./tree.props').TreeKey>;
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
    props: {
        type: import('vue').PropType<import('./tree.props').TreeOptionProps>;
        default: () => import('./tree.props').TreeOptionProps;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: import('vue').PropType<import('./tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('./tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
}>, {
    /** @description 过滤所有树节点，过滤后的节点将被隐藏 */
    filter: import('vue').ComputedRef<(value: import('element-plus').FilterValue) => void>;
    /** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
    updateKeyChildren: import('vue').ComputedRef<(key: import('element-plus').TreeKey, data: import('element-plus').TreeData) => void>;
    /** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
    getCheckedNodes: import('vue').ComputedRef<(leafOnly?: boolean, includeHalfChecked?: boolean) => import('element-plus').TreeNodeData[]>;
    /** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
    setCheckedNodes: import('vue').ComputedRef<(nodes: import('element-plus/es/components/tree/src/model/node.mjs').default[], leafOnly?: boolean) => void>;
    /** @description 	若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
    getCheckedKeys: import('vue').ComputedRef<(leafOnly?: boolean) => import('element-plus').TreeKey[]>;
    /** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
    setCheckedKeys: import('vue').ComputedRef<(keys: import('element-plus').TreeKey[], leafOnly?: boolean) => void>;
    /** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
    setChecked: import('vue').ComputedRef<(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean) => void>;
    /** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
    getHalfCheckedNodes: import('vue').ComputedRef<() => import('element-plus').TreeNodeData[]>;
    /** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
    getHalfCheckedKeys: import('vue').ComputedRef<() => import('element-plus').TreeKey[]>;
    /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
    getCurrentKey: import('vue').ComputedRef<() => import('element-plus').TreeKey | null>;
    /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
    getCurrentNode: import('vue').ComputedRef<() => import('element-plus').TreeNodeData | null>;
    /** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性 */
    setCurrentKey: import('vue').ComputedRef<(key?: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean) => void>;
    /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
    setCurrentNode: import('vue').ComputedRef<(node: import('element-plus/es/components/tree/src/model/node.mjs').default, shouldAutoExpandParent?: boolean) => void>;
    /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
    getNode: import('vue').ComputedRef<(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData) => import('element-plus/es/components/tree/src/model/node.mjs').default>;
    /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
    remove: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData | import('element-plus/es/components/tree/src/model/node.mjs').default) => void>;
    /** @description 为 Tree 中的一个节点追加一个子节点 */
    append: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, parentNode: import('element-plus').TreeNodeData | import('element-plus').TreeKey | import('element-plus/es/components/tree/src/model/node.mjs').default) => void>;
    /** @description 在 Tree 中给定节点前插入一个节点 */
    insertBefore: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, refNode: import('element-plus').TreeKey | import('element-plus').TreeNodeData | import('element-plus/es/components/tree/src/model/node.mjs').default) => void>;
    /** @description 在 Tree 中给定节点后插入一个节点 */
    insertAfter: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, refNode: import('element-plus').TreeKey | import('element-plus').TreeNodeData | import('element-plus/es/components/tree/src/model/node.mjs').default) => void>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 刷新 */
    refresh: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | number | boolean | object) => boolean;
    /** @description v-model:label 回调 */
    "update:label": (value: string) => boolean;
    /** @description 数据改变 */
    dataChangeCallBack: (data: ElTreeOutput[]) => boolean;
    /** @description 改变 */
    change: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent) => boolean;
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
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description whether Select is disabled 重载使其支持 ElForm*/
    disabled: {
        type: BooleanConstructor;
        default: any;
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
    /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
    collapseOnClickNode: BooleanConstructor;
    /** @description v-model绑定值 */
    modelValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description v-model:label绑定值 */
    label: StringConstructor;
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 默认选择 */
    defaultSelection: (NumberConstructor | StringConstructor)[];
    /** @description 标题 */
    title: StringConstructor;
    /** @description 折叠 */
    hamburger: BooleanConstructor;
    /** @description 隐藏全部 */
    hideAll: BooleanConstructor;
    /** @description 隐藏过滤 */
    hideFilter: BooleanConstructor;
    /** @description 全部值 */
    allValue: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description 树形数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
            showQuantity?: boolean;
            quantity?: number;
        }[]>;
        default: () => ElTreeOutput[];
    };
    /** @description 请求api */
    requestApi: {
        type: import('vue').PropType<(params?: any) => Promise<ElTreeOutput[]>>;
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
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    defaultExpandedKeys: import('vue').PropType<import('./tree.props').TreeKey[]>;
    currentNodeKey: import('vue').PropType<import('./tree.props').TreeKey>;
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
    props: {
        type: import('vue').PropType<import('./tree.props').TreeOptionProps>;
        default: () => import('./tree.props').TreeOptionProps;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    load: import('vue').PropType<import('./tree.props').LoadFunction>;
    filterNodeMethod: import('vue').PropType<import('./tree.props').FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: string | number | boolean | object) => any;
    onChange?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showQuantity?: boolean;
        quantity?: number;
    }, node: any, instance: ComponentInternalInstance, event: MouseEvent) => any;
    "onUpdate:label"?: (value: string) => any;
    onDataChangeCallBack?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showQuantity?: boolean;
        quantity?: number;
    }[]) => any;
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
    props: import('./tree.props').TreeOptionProps;
    data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showQuantity?: boolean;
        quantity?: number;
    }[];
    disabled: boolean;
    lazy: boolean;
    modelValue: string | number | boolean | object;
    width: string | number;
    draggable: boolean;
    defaultExpandAll: boolean;
    indent: number;
    nodeKey: string;
    checkOnClickNode: boolean;
    highlightCurrent: boolean;
    collapseOnClickNode: boolean;
    hamburger: boolean;
    hideAll: boolean;
    hideFilter: boolean;
    allValue: string | number | boolean | object;
    renderAfterExpand: boolean;
    checkStrictly: boolean;
    expandOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    showCheckbox: boolean;
    accordion: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTreeSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
