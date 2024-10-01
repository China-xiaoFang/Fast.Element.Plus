// import { pinia, useNavTabs } from "@fast-element-plus/stores";
// import { consoleWarn } from "@fast-element-plus/utils";
// import { ElMessage } from "element-plus";
// import screenfull from "screenfull";

// const handleScreenFullChange = (): void => {
// 	const navTabsStore = useNavTabs(pinia);
// 	navTabsStore.setContentFull(screenfull.isFullscreen);
// 	if (screenfull.isEnabled) {
// 		if (!screenfull.isFullscreen) {
// 			screenfull.off("change", handleScreenFullChange);
// 		}
// 	}
// };

// export const useScreenFull = {
// 	init: (): void => {
// 		if (!screenfull.isEnabled) {
// 			return;
// 		}
// 		const navTabsStore = useNavTabs(pinia);
// 		navTabsStore.setContentFull(screenfull.isFullscreen);
// 		if (screenfull.isFullscreen) {
// 			const htmlEl = document.querySelector("html");
// 			screenfull.toggle(htmlEl);
// 			screenfull.on("change", handleScreenFullChange);
// 		}
// 	},
// 	full: (): void => {
// 		if (!screenfull.isEnabled) {
// 			ElMessage.warning("您的浏览器无法工作");
// 			consoleWarn("useScreenFull", "您的浏览器无法工作", "不支持全屏化，请更换浏览器后重试。");
// 			return;
// 		}
// 		const navTabsStore = useNavTabs(pinia);
// 		if (screenfull.isFullscreen) {
// 			navTabsStore.setContentFull(true);
// 			return;
// 		}
// 		const htmlEl = document.querySelector("html");
// 		screenfull.toggle(htmlEl);
// 		screenfull.on("change", handleScreenFullChange);
// 	},
// 	exit: (): void => {
// 		if (!screenfull.isEnabled) {
// 			ElMessage.warning("您的浏览器无法工作");
// 			consoleWarn("useScreenFull", "您的浏览器无法工作", "不支持全屏化，请更换浏览器后重试。");
// 			return;
// 		}
// 		const navTabsStore = useNavTabs(pinia);
// 		if (screenfull.isFullscreen) {
// 			screenfull.exit();
// 			screenfull.off("change", handleScreenFullChange);
// 			navTabsStore.setContentFull(false);
// 		}
// 	},
// };
