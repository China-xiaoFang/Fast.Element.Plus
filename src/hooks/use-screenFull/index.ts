import { ref } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";

const isFullscreen = ref(false);
let initialized = false;

const handleFullscreenChange = (): void => {
	isFullscreen.value = screenfull.isEnabled && screenfull.isFullscreen;
};

/** 浏览器全屏状态控制器。 */
export const useScreenFull = {
	/** 获取当前全屏状态。 */
	isFullscreen: (): boolean => isFullscreen.value,
	/** 初始化全屏状态监听。 */
	init: (): void => {
		if (!screenfull.isEnabled || initialized) return;
		initialized = true;
		handleFullscreenChange();
		screenfull.on("change", handleFullscreenChange);
	},
	/** 释放全屏状态监听。 */
	dispose: (): void => {
		if (!screenfull.isEnabled || !initialized) return;
		screenfull.off("change", handleFullscreenChange);
		initialized = false;
	},
	/** 切换全屏状态。 */
	toggle: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("当前您的浏览器不支持全屏 ❌");
			return;
		}
		void screenfull.toggle();
	},
	/** 进入全屏状态。 */
	full: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("当前您的浏览器不支持全屏 ❌");
			return;
		}
		if (screenfull.isFullscreen) {
			return;
		}
		// const htmlEl = document.querySelector("html");
		// screenfull.request(htmlEl);
		void screenfull.request();
	},
	/** 退出全屏状态。 */
	exit: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("当前您的浏览器不支持全屏 ❌");
			return;
		}
		if (screenfull.isFullscreen) {
			void screenfull.exit();
		}
	},
};
