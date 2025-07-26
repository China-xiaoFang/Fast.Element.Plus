declare global {
	/**
	 * 拓展 Window 对象
	 */
	interface Window {
		/**
		 * 是否存在 Loading
		 */
		loading: boolean;
		/**
		 * 是否存在遮罩层
		 */
		overlay: boolean;
	}
}

export {};
