import { h, render } from "vue";
import { CopyDocument } from "@element-plus/icons-vue";
import "../../utils/index.mjs";
import { ElMessage, ElIcon } from "element-plus";
import { stringUtil } from "../../utils/string.mjs";
import { consoleError } from "../../utils/console.mjs";
import { withInstallDirective } from "../../utils/vue/install.mjs";
const IconCopyDirective = {
  mounted(el, binding) {
    el.copyData = binding.value;
    if (!el.copyData) return;
    const handleCopyClick = async () => {
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
    const iconEl = h(
      ElIcon,
      {
        class: "fa-icon-CopyDocument",
        title: "复制",
        onClick: handleCopyClick
      },
      {
        default: () => h(CopyDocument)
      }
    );
    const tempDiv = document.createElement("div");
    render(iconEl, tempDiv);
    el.__iconElement__ = tempDiv.firstChild;
    el.parentElement.insertBefore(tempDiv.firstChild, el);
  },
  updated(el, binding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el) {
    if (el.__iconElement__) {
      el.parentElement.removeChild(el.__iconElement__);
    }
  }
};
const vIconCopy = withInstallDirective(IconCopyDirective, "iconCopy");
export {
  vIconCopy as default,
  vIconCopy
};
//# sourceMappingURL=index.mjs.map
