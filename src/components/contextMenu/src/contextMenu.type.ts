/** FaContextMenu 菜单项配置。 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- 菜单项默认携带的数据由调用方定义，也可通过泛型显式约束。
export interface FaContextMenuData<Data = any> {
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
	click?: (event: MouseEvent, data: FaContextMenuData<Data>) => Promise<void> | void;
	/**
	 * @description 携带数据
	 */
	data?: Data;
}
