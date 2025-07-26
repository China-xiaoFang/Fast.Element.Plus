import { NodeDropType, TreeKey } from './tree.props';
import { ElTreeOutput } from './tree.type';
import { ComponentInternalInstance } from 'vue';
export declare const faTreeProps: {
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
            showNum?: boolean;
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
    dataChangeCallBack: (data: ElTreeOutput[], orgData: ElTreeOutput[]) => boolean;
    /** @description 改变 */
    change: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent) => boolean;
    /** @description 当节点被点击的时候触发 */
    nodeClick: (data: ElTreeOutput, node?: any, instance?: ComponentInternalInstance, event?: MouseEvent) => boolean;
    /** @description 当某一节点被鼠标右键点击时会触发该事件 */
    nodeContextmenu: (event: Event, data: ElTreeOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当复选框被点击的时候触发 */
    checkChange: (data: ElTreeOutput, checked: boolean, indeterminate: boolean) => boolean;
    /** @description 点击节点复选框之后触发 */
    check: (data: ElTreeOutput, node: {
        checkedNodes: ElTreeOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElTreeOutput[];
        halfCheckedKeys: TreeKey[];
    }) => boolean;
    /** @description 当前选中节点变化时触发的事件 */
    currentChange: (data: ElTreeOutput, node: any) => boolean;
    /** @description 节点被展开时触发的事件 */
    nodeExpand: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点被关闭时触发的事件 */
    nodeCollapse: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance) => boolean;
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
            showNum?: boolean;
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
    setCheckedNodes: import('vue').ComputedRef<(nodes: {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }[], leafOnly?: boolean) => void>;
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
    setCurrentKey: import('vue').ComputedRef<(key?: import('element-plus').TreeKey, shouldAutoExpandParent?: boolean) => void>;
    /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
    setCurrentNode: import('vue').ComputedRef<(node: {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }, shouldAutoExpandParent?: boolean) => void>;
    /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
    getNode: import('vue').ComputedRef<(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData) => {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }>;
    /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
    remove: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData | {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }) => void>;
    /** @description 为 Tree 中的一个节点追加一个子节点 */
    append: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, parentNode: import('element-plus').TreeNodeData | import('element-plus').TreeKey | {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }) => void>;
    /** @description 在 Tree 中给定节点前插入一个节点 */
    insertBefore: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, refNode: import('element-plus').TreeKey | import('element-plus').TreeNodeData | {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }) => void>;
    /** @description 在 Tree 中给定节点后插入一个节点 */
    insertAfter: import('vue').ComputedRef<(data: import('element-plus').TreeNodeData, refNode: import('element-plus').TreeKey | import('element-plus').TreeNodeData | {
        id: number;
        text: string | null;
        checked: boolean;
        indeterminate: boolean;
        data: import('element-plus').TreeNodeData;
        expanded: boolean;
        parent: /*elided*/ any | null;
        visible: boolean;
        isCurrent: boolean;
        store: {
            currentNode: /*elided*/ any | null;
            currentNodeKey: import('element-plus').TreeKey | null;
            nodesMap: import('element-plus').TreeStoreNodesMap;
            root: /*elided*/ any;
            data: import('element-plus').TreeData;
            lazy: boolean;
            load?: import('element-plus').LoadFunction;
            filterNodeMethod?: import('element-plus').FilterNodeMethodFunction;
            key: import('element-plus').TreeKey;
            defaultCheckedKeys?: import('element-plus').TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys?: import('element-plus').TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: import('element-plus').TreeOptionProps;
            initialize(): void;
            filter(value: import('element-plus').FilterValue): void;
            setData(newVal: import('element-plus').TreeData): void;
            getNode(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): /*elided*/ any;
            insertBefore(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            insertAfter(data: import('element-plus').TreeNodeData, refData: import('element-plus').TreeKey | import('element-plus').TreeNodeData | /*elided*/ any): void;
            remove(data: import('element-plus').TreeNodeData | /*elided*/ any): void;
            append(data: import('element-plus').TreeNodeData, parentData: import('element-plus').TreeNodeData | import('element-plus').TreeKey | /*elided*/ any): void;
            _initDefaultCheckedNodes(): void;
            _initDefaultCheckedNode(node: /*elided*/ any): void;
            setDefaultCheckedKey(newVal: import('element-plus').TreeKey[]): void;
            registerNode(node: /*elided*/ any): void;
            deregisterNode(node: /*elided*/ any): void;
            getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): import('element-plus').TreeNodeData[];
            getCheckedKeys(leafOnly?: boolean): import('element-plus').TreeKey[];
            getHalfCheckedNodes(): import('element-plus').TreeNodeData[];
            getHalfCheckedKeys(): import('element-plus').TreeKey[];
            _getAllNodes(): /*elided*/ any[];
            updateChildren(key: import('element-plus').TreeKey, data: import('element-plus').TreeData): void;
            _setCheckedKeys(key: import('element-plus').TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }): void;
            setCheckedNodes(array: /*elided*/ any[], leafOnly?: boolean): void;
            setCheckedKeys(keys: import('element-plus').TreeKey[], leafOnly?: boolean): void;
            setDefaultExpandedKeys(keys: import('element-plus').TreeKey[]): void;
            setChecked(data: import('element-plus').TreeKey | import('element-plus').TreeNodeData, checked: boolean, deep: boolean): void;
            getCurrentNode(): /*elided*/ any | null;
            setCurrentNode(currentNode: /*elided*/ any): void;
            setUserCurrentNode(node: /*elided*/ any, shouldAutoExpandParent?: boolean): void;
            setCurrentNodeKey(key: import('element-plus').TreeKey | null, shouldAutoExpandParent?: boolean): void;
        };
        isLeafByUser: boolean | undefined;
        isLeaf: boolean | undefined;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: /*elided*/ any[];
        loading: boolean;
        initialize(): void;
        setData(data: import('element-plus').TreeNodeData): void;
        readonly label: string;
        readonly key: import('element-plus').TreeKey | null | undefined;
        readonly disabled: boolean;
        readonly nextSibling: /*elided*/ any;
        readonly previousSibling: /*elided*/ any;
        contains(target: /*elided*/ any, deep?: boolean): boolean;
        remove(): void;
        insertChild(child?: import('element-plus').FakeNode | /*elided*/ any, index?: number, batch?: boolean): void;
        insertBefore(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        insertAfter(child: import('element-plus').FakeNode | /*elided*/ any, ref: /*elided*/ any): void;
        removeChild(child: /*elided*/ any): void;
        removeChildByData(data: import('element-plus').TreeNodeData | null): void;
        expand(callback?: (() => void) | null, expandParent?: boolean): void;
        doCreateChildren(array: import('element-plus').TreeNodeData[], defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        collapse(): void;
        shouldLoadData(): boolean;
        updateLeafState(): void;
        setChecked(value?: boolean | string, deep?: boolean, recursion?: boolean, passValue?: boolean): void;
        getChildren(forceInit?: boolean): import('element-plus').TreeNodeData | import('element-plus').TreeNodeData[] | null;
        updateChildren(): void;
        loadData(callback: (data?: import('element-plus').TreeNodeData[]) => void, defaultProps?: import('element-plus').TreeNodeLoadedDefaultProps): void;
        eachNode(callback: (node: /*elided*/ any) => void): void;
        reInitChecked(): void;
    }) => void>;
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
    dataChangeCallBack: (data: ElTreeOutput[], orgData: ElTreeOutput[]) => boolean;
    /** @description 改变 */
    change: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance, event: MouseEvent) => boolean;
    /** @description 当节点被点击的时候触发 */
    nodeClick: (data: ElTreeOutput, node?: any, instance?: ComponentInternalInstance, event?: MouseEvent) => boolean;
    /** @description 当某一节点被鼠标右键点击时会触发该事件 */
    nodeContextmenu: (event: Event, data: ElTreeOutput, node?: any, instance?: ComponentInternalInstance) => boolean;
    /** @description 当复选框被点击的时候触发 */
    checkChange: (data: ElTreeOutput, checked: boolean, indeterminate: boolean) => boolean;
    /** @description 点击节点复选框之后触发 */
    check: (data: ElTreeOutput, node: {
        checkedNodes: ElTreeOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElTreeOutput[];
        halfCheckedKeys: TreeKey[];
    }) => boolean;
    /** @description 当前选中节点变化时触发的事件 */
    currentChange: (data: ElTreeOutput, node: any) => boolean;
    /** @description 节点被展开时触发的事件 */
    nodeExpand: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance) => boolean;
    /** @description 节点被关闭时触发的事件 */
    nodeCollapse: (data: ElTreeOutput, node: any, instance: ComponentInternalInstance) => boolean;
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
            showNum?: boolean;
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
        showNum?: boolean;
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
        showNum?: boolean;
        quantity?: number;
    }[], orgData: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }[]) => any;
    onNodeClick?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, node?: any, instance?: ComponentInternalInstance, event?: MouseEvent) => any;
    onNodeContextmenu?: (event: Event, data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, node?: any, instance?: ComponentInternalInstance) => any;
    onCheckChange?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, checked: boolean, indeterminate: boolean) => any;
    onCheck?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, node: {
        checkedNodes: ElTreeOutput[];
        checkedKeys: TreeKey[];
        halfCheckedNodes: ElTreeOutput[];
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
        showNum?: boolean;
        quantity?: number;
    }, node: any) => any;
    onNodeExpand?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, node: any, instance: ComponentInternalInstance) => any;
    onNodeCollapse?: (data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
        showNum?: boolean;
        quantity?: number;
    }, node: any, instance: ComponentInternalInstance) => any;
    onNodeDragStart?: (node: any, event: DragEvent) => any;
    onNodeDragEnter?: (node: any, enterNode: any, event: DragEvent) => any;
    onNodeDragLeave?: (node: any, leaveNode: any, event: DragEvent) => any;
    onNodeDragOver?: (node: any, dropNode: any, event: DragEvent) => any;
    onNodeDragEnd?: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => any;
    onNodeDrop?: (node: any, dropNode: any, dropType: NodeDropType, event: DragEvent) => any;
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
        showNum?: boolean;
        quantity?: number;
    }[];
    modelValue: string | number | boolean | object;
    width: string | number;
    draggable: boolean;
    lazy: boolean;
    nodeKey: string;
    defaultExpandAll: boolean;
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
    indent: number;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaTreeSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
