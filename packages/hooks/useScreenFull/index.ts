import { ElMessage } from "element-plus";
import screenfull from "screenfull";

const handleScreenFullChange = (): void => {
	if (screenfull.isEnabled) {
		if (!screenfull.isFullscreen) {
			screenfull.off("change", handleScreenFullChange);
		}
	}
};

export const useScreenFull = {
	init: (): void => {
		if (!screenfull.isEnabled) {
			return;
		}
		if (screenfull.isFullscreen) {
			const htmlEl = document.querySelector("html");
			screenfull.toggle(htmlEl);
			screenfull.on("change", handleScreenFullChange);
		}
	},
	full: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("您的浏览器无法工作");
			return;
		}
		const htmlEl = document.querySelector("html");
		screenfull.toggle(htmlEl);
		screenfull.on("change", handleScreenFullChange);
	},
	exit: (): void => {
		if (!screenfull.isEnabled) {
			ElMessage.warning("您的浏览器无法工作");
			return;
		}
		if (screenfull.isFullscreen) {
			screenfull.exit();
			screenfull.off("change", handleScreenFullChange);
		}
	},
};
