import "../../utils/index.mjs";
import { withInstallDirective } from "../../utils/vue/install.mjs";
const ThrottleDirective = {
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    let timer = null;
    el.__handleClick__ = () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (!el.disabled) {
        el.disabled = true;
        binding.value();
        timer = setTimeout(() => {
          el.disabled = false;
        }, 1e3);
      }
    };
    el.addEventListener("click", el.__handleClick__);
  },
  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleClick__);
  }
};
const vThrottle = withInstallDirective(ThrottleDirective, "throttle");
export {
  vThrottle as default,
  vThrottle
};
//# sourceMappingURL=index.mjs.map
