/** 选择器支持的单项值类型。 */
export type ElSelectorValue = string | number | boolean | object;

/** 选择器的单值、多值或空模型。 */
export type ElSelectorModelValue = ElSelectorValue | ElSelectorValue[] | null | undefined;

/** 选择器标准化后的选项数据。 */
export interface ElSelectorOutput<T = ElSelectorValue> {
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
	children?: ElSelectorOutput<T>[];
	[key: string]: unknown;
}
