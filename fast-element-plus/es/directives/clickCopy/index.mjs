import "../../utils/index.mjs";
import { ElMessage } from "element-plus";
import { stringUtil } from "../../utils/string.mjs";
import { consoleError } from "../../utils/console.mjs";
import { withInstallDirective } from "../../utils/vue/install.mjs";
const CopyDirective = {
  mounted(el, binding) {
    el.copyData = binding.value;
    el.__handleClick__ = async () => {
      if (!el.copyData) return;
      try {
        await stringUtil.copy(String(el.copyData));
        ElMessage({
          type: "success",
          message: "复制成功"
        });
      } catch (error) {
        ElMessage({
          type: "error",
          message: "复制失败"
        });
        consoleError("CopyDirective", "复制失败", error);
      }
    };
    el.addEventListener("click", el.__handleClick__);
  },
  updated(el, binding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleClick__);
  }
};
const vCopy = withInstallDirective(CopyDirective, "copy");
export {
  vCopy as default,
  vCopy
};
//# sourceMappingURL=index.mjs.map
