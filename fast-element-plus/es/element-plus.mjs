import ElementPlus, { ElDialog, ElForm, ElInput, ElInputNumber, ElSelect, ElTable, ElTree, ElTreeSelect, ElMessageBox } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./hooks/index.mjs";
import { execFunction, consoleError } from "@fast-china/utils";
import { isNil, isString } from "lodash-unified";
import { useOverlay } from "./hooks/use-overlay/index.mjs";
ElDialog.props = {
  ...ElDialog.props,
  /**
   * 默认拖拽
   * @description enable dragging feature for Dialog
   */
  draggable: {
    type: Boolean,
    default: true
  }
};
ElForm.props = {
  ...ElForm.props,
  /** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
  labelWidth: {
    type: [String, Number],
    default: "auto"
  },
  /** @description Suffix of the label. */
  labelSuffix: {
    type: String,
    default: "："
  },
  /** @description When validation fails, scroll to the first error form entry. */
  scrollToError: {
    type: Boolean,
    default: true
  }
};
ElInput.props = {
  ...ElInput.props,
  /**
   * 默认显示统计字数
   * @description word count
   */
  showWordLimit: {
    type: Boolean,
    default: true
  }
};
ElInputNumber.props = {
  ...ElInputNumber.props,
  /**
   * 默认不使用控制按钮
   * @description whether to enable the control buttons
   */
  controls: {
    type: Boolean,
    default: false
  }
};
ElSelect.props = {
  ...ElSelect.props,
  /** @description displayed text while loading data from server, default is 'Loading' */
  loadingText: {
    type: String,
    default: "加载中..."
  },
  /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
  noMatchText: {
    type: String,
    default: "暂无匹配的数据"
  },
  /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
  noDataText: {
    type: String,
    default: "暂无数据"
  },
  /**
   * 默认按文字形式展示
   * @description whether to collapse tags to a text when multiple selecting
   */
  collapseTags: {
    type: Boolean,
    default: true
  },
  /**
   * 默认显示所有选中的标签
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
   */
  collapseTagsTooltip: {
    type: Boolean,
    default: true
  }
};
ElTable.props = {
  ...ElTable.props,
  /**
   * 默认显示边框
   * @description whether Table has vertical border
   */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * 默认高亮当前行
   * @description whether current row is highlighted
   */
  highlightCurrentRow: {
    type: Boolean,
    default: true
  },
  /**
   * 默认行Key为 "id"
   * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
   */
  rowKey: {
    type: [String, Function],
    default: "id"
  }
};
ElTree.props = {
  ...ElTree.props,
  /**
   * 默认展开所有节点
   * @description 是否默认展开所有节点
   */
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  /**
   * 默认点击时选中节点
   * @description 是否在点击节点的时候选中节点
   */
  checkOnClickNode: {
    type: Boolean,
    default: true
  },
  /**
   * 默认高亮选中节点
   * @description 是否高亮当前选中节点
   */
  highlightCurrent: {
    type: Boolean,
    default: true
  }
};
ElTreeSelect.props = {
  ...ElTreeSelect.props,
  /** @description displayed text while loading data from server, default is 'Loading' */
  loadingText: {
    type: String,
    default: "加载中..."
  },
  /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
  noMatchText: {
    type: String,
    default: "暂无匹配的数据"
  },
  /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
  noDataText: {
    type: String,
    default: "暂无数据"
  },
  /**
   * 默认按文字形式展示
   * @description whether to collapse tags to a text when multiple selecting
   */
  collapseTags: {
    type: Boolean,
    default: true
  },
  /**
   * 默认显示所有选中的标签
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
   */
  collapseTagsTooltip: {
    type: Boolean,
    default: true
  },
  /**
   * 默认展开所有节点
   * @description 是否默认展开所有节点
   */
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  /**
   * 默认点击时选中节点
   * @description 是否在点击节点的时候选中节点
   */
  checkOnClickNode: {
    type: Boolean,
    default: true
  },
  /**
   * 默认高亮选中节点
   * @description 是否高亮当前选中节点
   */
  highlightCurrent: {
    type: Boolean,
    default: true
  },
  /**
   * 默认点击节点不展开或收缩节点
   * @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
   */
  expandOnClickNode: Boolean
};
const elMessageBox = (type, message, options, appContext) => {
  options = options ?? {};
  if (!(options == null ? void 0 : options.title)) {
    options.title = "温馨提示";
  }
  if (isNil(options == null ? void 0 : options.draggable)) {
    options.draggable = true;
  }
  if (!(options == null ? void 0 : options.cancelButtonText)) {
    options.cancelButtonText = "取消";
  }
  if (!(options == null ? void 0 : options.confirmButtonText)) {
    options.confirmButtonText = "确定";
  }
  if (isNil(options == null ? void 0 : options.closeOnClickModal)) {
    options.closeOnClickModal = false;
  }
  if (isNil(options == null ? void 0 : options.closeOnPressEscape)) {
    options.closeOnPressEscape = false;
  }
  if (isNil(options == null ? void 0 : options.beforeClose)) {
    const localBeforeClose = options.beforeClose;
    const localConfirmButtonText = options == null ? void 0 : options.confirmButtonText;
    const localShowCancelButton = options == null ? void 0 : options.showCancelButton;
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
        execFunction(localBeforeClose, action, instance, newDone).then(() => {
          newDone();
        }).catch((error) => {
          consoleError("MessageBox", error);
          cancelLoading();
          throw error;
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
      if (isNil(options == null ? void 0 : options.showCancelButton)) {
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
const MESSAGE_BOX_DEFAULT_OPTS = {
  alert: { closeOnPressEscape: false, closeOnClickModal: false },
  confirm: { showCancelButton: true },
  prompt: { showCancelButton: true, showInput: true }
};
ElMessageBox.alert = (message, titleOrOptions, options, appContext) => isString(titleOrOptions) ? elMessageBox("alert", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["alert"] }, options), appContext) : elMessageBox("alert", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["alert"], options), options);
ElMessageBox.prompt = (message, titleOrOptions, options, appContext) => isString(titleOrOptions) ? elMessageBox("prompt", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["prompt"] }, options), appContext) : elMessageBox("prompt", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["prompt"], options), options);
ElMessageBox.confirm = (message, titleOrOptions, options, appContext) => isString(titleOrOptions) ? elMessageBox("confirm", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["confirm"] }, options), appContext) : elMessageBox("confirm", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["confirm"], options), options);
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
