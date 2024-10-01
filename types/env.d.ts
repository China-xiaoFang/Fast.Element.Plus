import type { Pinia } from "pinia";
import type { Router } from "vue-router";

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
	 * 匿名对象
	 * @description 建议使用 anyObj 或者 unknown 而不是 any
	 */
	interface anyObj<T = any> {
		[key: string]: T;
	}

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
		/**
		 * 共享的 pinia 实例
		 */
		pinia: Pinia;
		/**
		 * 共享的 router 实例
		 */
		router: Router;
	}
}

export {};
