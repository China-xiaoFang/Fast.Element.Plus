import "../../utils/index.mjs";
import { withInstallDirective } from "../../utils/vue/install.mjs";
const DebounceDirective = {
  created(el, binding, vNode) {
    el.__debounce_originClick__ = vNode.props.onClick;
    vNode.props.onClick = () => {
      if (el.__debounce_timer__) {
        clearInterval(el.__debounce_timer__);
      }
      el.__debounce_timer__ = setTimeout(() => {
        el.__debounce_originClick__();
      }, 500);
    };
  }
};
const vDebounce = withInstallDirective(DebounceDirective, "debounce");
export {
  vDebounce as default,
  vDebounce
};
//# sourceMappingURL=index.mjs.map
