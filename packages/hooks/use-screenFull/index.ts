import { ref } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";

const isFullscreen = ref(false);

export const useScreenFull = {
	isFullscreen: (): boolean => isFullscreen.value,
	init: (): void => {
		if (!screenfull.isEnabled) {
			return;
		}
		screenfull.onchange(() => {
			isFullscreen.value = screenfull.isFullscreen;
		});
	},
	toggle: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("当前您的浏览器不支持全屏 ❌");
			return;
		}
		screenfull.toggle();
	},
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
		screenfull.request();
	},
	exit: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("当前您的浏览器不支持全屏 ❌");
			return;
		}
		if (screenfull.isFullscreen) {
			screenfull.exit();
		}
	},
};
