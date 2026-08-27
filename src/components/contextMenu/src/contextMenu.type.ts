/** FaContextMenu 菜单项配置。 */
export interface FaContextMenuData {
	/**
	 * @description 名称
	 */
	name: string;
	/**
	 * @description 标签
	 */
	label: string;
	/**
	 * @description 图标
	 */
	icon?: string;
	/**
	 * @description 隐藏
	 */
	hide?: boolean;
	/**
	 * @description 禁用
	 */
	disabled?: boolean;
	/**
	 * @description 点击事件
	 */
	click?: (event: MouseEvent, data: FaContextMenuData) => Promise<void> | void;
	/**
	 * @description 携带数据
	 */
	data?: Record<string, unknown>;
}
