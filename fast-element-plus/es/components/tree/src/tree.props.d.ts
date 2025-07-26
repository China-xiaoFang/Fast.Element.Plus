import { Component, PropType } from 'vue';
export declare interface TreeNodeData {
    [key: string]: any;
}
export declare type TreeData = TreeNodeData[];
export declare type TreeKey = string | number;
export declare type LoadFunction = (rootNode: any, loadedCallback: (data: TreeData) => void, stopLoading: () => void) => void;
export declare interface TreeOptionProps {
    children?: string;
    label?: string | ((data: TreeNodeData, node: any) => string);
    disabled?: string | ((data: TreeNodeData, node: any) => boolean);
    isLeaf?: string | ((data: TreeNodeData, node: any) => boolean);
    class?: (data: TreeNodeData, node: any) => string | {
        [key: string]: boolean;
    };
}
export declare type FilterValue = any;
export declare type FilterNodeMethodFunction = (value: FilterValue, data: TreeNodeData, child: any) => boolean;
export declare const treeProps: {
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: PropType<TreeKey[]>;
    defaultExpandedKeys: PropType<TreeKey[]>;
    currentNodeKey: PropType<TreeKey>;
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
        type: PropType<TreeOptionProps>;
        default: () => TreeOptionProps;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: PropType<LoadFunction>;
    filterNodeMethod: PropType<FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: PropType<string | Component>;
    };
};
export declare type NodeDropType = "before" | "after" | "inner";
