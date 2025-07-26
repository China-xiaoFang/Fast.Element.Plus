import { ref } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";
const isFullscreen = ref(false);
const useScreenFull = {
  isFullscreen: () => isFullscreen.value,
  init: () => {
    if (!screenfull.isEnabled) {
      return;
    }
    screenfull.onchange(() => {
      isFullscreen.value = screenfull.isFullscreen;
    });
  },
  toggle: () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning("当前您的浏览器不支持全屏 ❌");
      return;
    }
    screenfull.toggle();
  },
  full: () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning("当前您的浏览器不支持全屏 ❌");
      return;
    }
    if (screenfull.isFullscreen) {
      return;
    }
    screenfull.request();
  },
  exit: () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning("当前您的浏览器不支持全屏 ❌");
      return;
    }
    if (screenfull.isFullscreen) {
      screenfull.exit();
    }
  }
};
export {
  useScreenFull
};
//# sourceMappingURL=index.mjs.map
