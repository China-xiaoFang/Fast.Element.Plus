import { withInstallDirective } from "@fast-china/utils";
const LongpressDirective = {
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    const handler = (e) => {
      binding.value(e);
    };
    let pressTimer = null;
    const start = (e) => {
      if (e.button) {
        if (e.type === "click" && e.button !== 0) {
          return;
        }
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e);
        }, 1e3);
      }
    };
    const cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  }
};
const vLongpress = withInstallDirective(LongpressDirective, "longpress");
export {
  vLongpress as default,
  vLongpress
};
//# sourceMappingURL=index.mjs.map
