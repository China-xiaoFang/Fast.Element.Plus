import { ElMessage } from "element-plus";
import screenfull from "screenfull";
const handleScreenFullChange = () => {
  if (screenfull.isEnabled) {
    if (!screenfull.isFullscreen) {
      screenfull.off("change", handleScreenFullChange);
    }
  }
};
const useScreenFull = {
  init: () => {
    if (!screenfull.isEnabled) {
      return;
    }
    if (screenfull.isFullscreen) {
      const htmlEl = document.querySelector("html");
      screenfull.toggle(htmlEl);
      screenfull.on("change", handleScreenFullChange);
    }
  },
  full: () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning("您的浏览器无法工作");
      return;
    }
    const htmlEl = document.querySelector("html");
    screenfull.toggle(htmlEl);
    screenfull.on("change", handleScreenFullChange);
  },
  exit: () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning("您的浏览器无法工作");
      return;
    }
    if (screenfull.isFullscreen) {
      screenfull.exit();
      screenfull.off("change", handleScreenFullChange);
    }
  }
};
export {
  useScreenFull
};
//# sourceMappingURL=index.mjs.map
