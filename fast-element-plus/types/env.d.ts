declare global {
	/**
	 * Vite 环境
	 */
	type IViteEnv = "production" | "development" | "test" | "staging";

	/**
	 * 动画名称
	 */
	type IAnimationName =
		| "slide-right"
		| "slide-left"
		| "el-fade-in-linear"
		| "el-fade-in"
		| "el-zoom-in-center"
		| "el-zoom-in-top"
		| "el-zoom-in-bottom";

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
		/**
		 * 当前浏览器的设备Id(UUID)，生成的
		 */
		deviceId: string;
	}
}

export {};
