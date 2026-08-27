/** 树组件支持的节点值类型。 */
export type ElTreeValue = string | number | boolean | object | null;

/** 树组件标准化后的节点数据。 */
export interface ElTreeOutput<T = ElTreeValue> {
	/**
	 * 显示
	 */
	label?: string;
	/**
	 * 值
	 */
	value?: T;
	/**
	 * 附加数据
	 */
	data?: unknown;
	/**
	 * 是否隐藏
	 */
	hide?: boolean;
	/**
	 * 是否禁用
	 */
	disabled?: boolean;
	/**
	 * 子节点
	 */
	children?: ElTreeOutput<T>[];
	/**
	 * 是否显示数量
	 */
	showQuantity?: boolean;
	/**
	 * 数量
	 */
	quantity?: number;
	[key: string]: unknown;
}
