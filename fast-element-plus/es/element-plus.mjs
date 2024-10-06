import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./hooks/index.mjs";
import "./utils/index.mjs";
import ElementPlus, { ElDialog, ElInput, ElMessageBox } from "element-plus";
import { useOverlay } from "./hooks/useOverlay/index.mjs";
import { execAsyncFunction } from "./utils/vue/func.mjs";
import { consoleError } from "./utils/console.mjs";
import { errorHandler } from "./utils/errorHandler.mjs";
ElDialog.props = {
  ...ElDialog.props,
  draggable: {
    type: Boolean,
    default: true
  }
};
ElInput.props = {
  ...ElInput.props,
  showWordLimit: {
    type: Boolean,
    default: true
  }
};
const elMessageBox = (message, options, type) => {
  options = options ?? {};
  if (!(options == null ? void 0 : options.title)) {
    options.title = "温馨提示";
  }
  if ((options == null ? void 0 : options.draggable) == void 0) {
    options.draggable = true;
  }
  if (!(options == null ? void 0 : options.cancelButtonText)) {
    options.cancelButtonText = "取消";
  }
  if (!(options == null ? void 0 : options.confirmButtonText)) {
    options.confirmButtonText = "确定";
  }
  if ((options == null ? void 0 : options.closeOnClickModal) == void 0) {
    options.closeOnClickModal = false;
  }
  if ((options == null ? void 0 : options.closeOnPressEscape) == void 0) {
    options.closeOnPressEscape = false;
  }
  if ((options == null ? void 0 : options.beforeClose) != void 0) {
    const localBeforeClose = options.beforeClose;
    const localConfirmButtonText = (options == null ? void 0 : options.confirmButtonText) ?? "确定";
    const localShowCancelButton = (options == null ? void 0 : options.showCancelButton) ?? false;
    options.beforeClose = (action, instance, done) => {
      if (action === "confirm") {
        useOverlay.show(0);
        instance.confirmButtonLoading = true;
        instance.showCancelButton = false;
        instance.confirmButtonText = "加载中...";
        const cancelLoading = () => {
          instance.confirmButtonLoading = false;
          instance.showCancelButton = localShowCancelButton;
          instance.confirmButtonText = localConfirmButtonText;
          useOverlay.hide();
        };
        const newDone = () => {
          cancelLoading();
          done();
        };
        execAsyncFunction(localBeforeClose, action, instance, newDone).then(() => {
          newDone();
        }).catch((error) => {
          consoleError("MessageBox", error);
          cancelLoading();
          errorHandler(error);
        });
      } else {
        done();
      }
    };
  }
  switch (type) {
    case "alert":
      break;
    case "confirm":
      if ((options == null ? void 0 : options.showCancelButton) == void 0) {
        options.showCancelButton = true;
      }
      break;
    case "prompt":
      if ((options == null ? void 0 : options.showCancelButton) == void 0) {
        options.showCancelButton = true;
      }
      break;
  }
  return ElMessageBox(
    Object.assign(
      {
        message
      },
      options,
      {
        boxType: type
      }
    )
  );
};
ElMessageBox.alert = (message, options) => elMessageBox(message, options, "alert");
ElMessageBox.prompt = (message, options) => elMessageBox(message, options, "prompt");
ElMessageBox.confirm = (message, options) => elMessageBox(message, options, "confirm");
const installElementPlus = (app) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`el-icon-${key}`, component);
  }
  app.use(ElementPlus);
};
export {
  installElementPlus
};
//# sourceMappingURL=element-plus.mjs.map
