import { definePropType } from "@fast-china/utils";
import type { Component, PropType } from "vue";

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
	class?: (data: TreeNodeData, node: any) => string | { [key: string]: boolean };
}

export declare type FilterValue = any;

export declare type FilterNodeMethodFunction = (value: FilterValue, data: TreeNodeData, child: any) => boolean;

export const treeProps = {
	data: {
		type: Array,
		default: (): any[] => [],
	},
	emptyText: {
		type: String,
	},
	renderAfterExpand: {
		type: Boolean,
		default: true,
	},
	nodeKey: String,
	checkStrictly: Boolean,
	defaultExpandAll: Boolean,
	expandOnClickNode: {
		type: Boolean,
		default: true,
	},
	checkOnClickNode: Boolean,
	checkDescendants: {
		type: Boolean,
		default: false,
	},
	autoExpandParent: {
		type: Boolean,
		default: true,
	},
	defaultCheckedKeys: Array as PropType<TreeKey[]>,
	defaultExpandedKeys: Array as PropType<TreeKey[]>,
	currentNodeKey: [String, Number] as PropType<TreeKey>,
	renderContent: Function,
	showCheckbox: {
		type: Boolean,
		default: false,
	},
	draggable: {
		type: Boolean,
		default: false,
	},
	allowDrag: Function,
	allowDrop: Function,
	props: {
		type: Object as PropType<TreeOptionProps>,
		default: (): TreeOptionProps => ({
			children: "children",
			label: "label",
			disabled: "disabled",
		}),
	},
	lazy: {
		type: Boolean,
		default: false,
	},
	highlightCurrent: Boolean,
	load: Function as PropType<LoadFunction>,
	filterNodeMethod: Function as PropType<FilterNodeMethodFunction>,
	accordion: Boolean,
	indent: {
		type: Number,
		default: 18,
	},
	icon: {
		type: definePropType<string | Component>([String, Object, Function]),
	},
};

//  | "none"
export declare type NodeDropType = "before" | "after" | "inner";
