import { defineComponent, reactive, ref, nextTick, watch, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, computed } from "vue";
import { drawerProps, drawerEmits, useGlobalSize, ElMessage, ElMessageBox, ElDrawer, ElButton, ElScrollbar, ElIcon } from "element-plus";
import { Eleme, Refresh, FullScreen, Close } from "@element-plus/icons-vue";
import { FullScreenExit } from "@fast-element-plus/icons-vue";
import { definePropType, execFunction, consoleError, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isBoolean } from "lodash-unified";
const faDrawerProps = {
  ...drawerProps,
  /** @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` */
  appendToBody: {
    type: Boolean,
    default: true
  },
  /** @description enable dragging feature for Dialog */
  draggable: {
    type: Boolean,
    default: true
  },
  /** @description destroy elements in Dialog when closed */
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  /** @description 显示刷新按钮 */
  showRefresh: {
    type: Boolean,
    default: true
  },
  /** @description 显示全屏图标 */
  showFullscreen: {
    type: Boolean,
    default: true
  },
  /** @description 显示关闭按钮 */
  showCloseButton: {
    type: Boolean,
    default: true
  },
  /** @description 显示确认按钮 */
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  /** @description 禁用确认按钮 */
  disabledConfirmButton: Boolean,
  /** @description 关闭按钮文字，默认取消 */
  closeButtonText: {
    type: String,
    default: "取消"
  },
  /** @description 确认按钮文字，默认确认 */
  confirmButtonText: {
    type: String,
    default: "确认"
  },
  /** @description 隐藏底部操作 */
  hideFooter: Boolean,
  /** @description 显示关闭回调 */
  showBeforeClose: Boolean,
  /** @description 打开之后 */
  afterOpen: {
    type: definePropType(Function)
  }
};
const faDrawerEmits = {
  ...drawerEmits,
  /** @description v-model 回调 */
  "update:modelValue": (value) => isBoolean(value),
  /** @description 确认按钮点击事件 */
  confirmClick: () => true
};
const Drawer = /* @__PURE__ */ defineComponent({
  name: "FaDrawer",
  props: faDrawerProps,
  emits: faDrawerEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const _globalSize = useGlobalSize();
    const state = reactive({
      loading: false,
      visible: false,
      fullscreen: false,
      size: props.size ?? "30%",
      dragging: false,
      refreshing: false
    });
    const drawerRef = ref();
    let cacheOpenFunction = void 0;
    const handleOpen = (openFunction) => {
      state.visible = true;
      cacheOpenFunction = openFunction;
      nextTick(() => {
        state.loading = true;
        execFunction(props.afterOpen ?? openFunction).then(() => {
          emit("open");
        }).catch((error) => {
          consoleError("FaDrawer", error);
          state.visible = false;
        }).finally(() => {
          state.loading = false;
        });
      });
    };
    const handleClose = (closeFunction) => {
      state.loading = true;
      execFunction(closeFunction).then(() => {
        emit("close");
        state.visible = false;
      }).catch((error) => {
        consoleError("FaDrawer", error);
      }).finally(() => {
        state.loading = false;
      });
    };
    const handleLoading = (loadingFunction) => {
      state.loading = true;
      execFunction(loadingFunction).then().catch((error) => {
        consoleError("FaDrawer", error);
      }).finally(() => {
        state.loading = false;
      });
    };
    const handleRefresh = () => {
      state.refreshing = true;
      state.loading = true;
      setTimeout(() => {
        state.refreshing = false;
        handleOpen(cacheOpenFunction);
        ElMessage.success("刷新成功");
      }, 500);
    };
    const handleBeforeClose = (done) => {
      if (state.loading) return;
      if (document.querySelector(".el-image-viewer__wrapper")) return;
      const newDone = () => {
        execFunction(props.beforeClose).then(() => {
          emit("close");
          done();
        }).catch((error) => {
          consoleError("FaDialog", error);
        });
      };
      if (props.showBeforeClose) {
        ElMessageBox.confirm("确定关闭？", {
          type: "warning"
        }).then(() => {
          newDone();
        });
      } else {
        newDone();
      }
    };
    const handleFullscreen = () => {
      if (state.loading) return;
      state.fullscreen = !state.fullscreen;
    };
    const handleConfirmClick = () => {
      if (state.loading) return;
      emit("confirmClick");
    };
    const handleCloseClick = () => {
      if (state.loading) return;
      handleClose();
    };
    watch(() => state.visible, (newValue) => {
      emit("update:modelValue", newValue);
    });
    const handleDraggableMousedown = () => {
      document.onmousemove = (moveEvent) => {
        let realWidth = document.body.clientWidth - moveEvent.pageX;
        const width20 = document.body.clientWidth * 0.2;
        const width95 = document.body.clientWidth * 0.95;
        realWidth = realWidth > width95 ? width95 : realWidth < width20 ? width20 : realWidth;
        state.size = `${realWidth}px`;
      };
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    };
    const elDrawerProps = useProps(props, drawerProps, ["modelValue", "size", "showClose", "beforeClose"]);
    useRender(() => createVNode(ElDrawer, mergeProps(elDrawerProps.value, {
      "ref": drawerRef,
      "class": ["fa-drawer", `fa-drawer-${_globalSize.value}`, {
        "fa-drawer__fullscreen": state.fullscreen
      }],
      "modelValue": state.visible,
      "onUpdate:modelValue": ($event) => state.visible = $event,
      "size": state.size,
      "showClose": false,
      "beforeClose": handleBeforeClose,
      "onOpened": () => emit("opened"),
      "onClosed": () => emit("closed"),
      "onOpenAutoFocus": () => emit("openAutoFocus"),
      "onCloseAutoFocus": () => emit("closeAutoFocus")
    }), {
      header: () => createVNode(Fragment, null, [createVNode("div", {
        "class": "fa-drawer__header-title"
      }, [props.title, slots.header && slots.header({
        loading: state.loading,
        close: handleCloseClick
      })]), props.showRefresh && createVNode("div", {
        "title": "刷新",
        "class": ["fa-drawer__header-icon", state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle"],
        "onClick": handleRefresh
      }, [createVNode(ElIcon, {
        "class": "icon"
      }, {
        default: () => [createVNode(Refresh, null, null)]
      })]), props.showFullscreen && createVNode("div", {
        "title": state.fullscreen ? "关闭全屏显示" : "全屏显示",
        "class": ["fa-drawer__header-icon", state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle"],
        "onClick": handleFullscreen
      }, [createVNode(ElIcon, null, {
        default: () => [state.fullscreen ? createVNode(FullScreenExit, null, null) : createVNode(FullScreen, null, null)]
      })]), props.showClose && createVNode("div", {
        "title": "关闭",
        "class": ["fa-drawer__header-icon", state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle"],
        "onClick": handleCloseClick
      }, [createVNode(ElIcon, {
        "class": "icon"
      }, {
        default: () => [createVNode(Close, null, null)]
      })])]),
      default: () => createVNode(Fragment, null, [props.draggable && createVNode("div", {
        "class": "fa-drawer__draggable",
        "onmousedown": handleDraggableMousedown
      }, null), withDirectives(createVNode(ElScrollbar, {
        "element-loading-text": "加载中..."
      }, {
        default: () => [!state.refreshing && slots.default && slots.default(state)]
      }), [[resolveDirective("loading"), state.loading]])]),
      ...!props.hideFooter && {
        footer: () => createVNode(Fragment, null, [slots.footer && slots.footer({
          loading: state.loading,
          close: handleCloseClick
        }), props.showCloseButton && createVNode(ElButton, {
          "disabled": state.loading,
          "onClick": handleCloseClick
        }, {
          default: () => [props.closeButtonText]
        }), props.showConfirmButton && createVNode(ElButton, {
          "loading": state.loading,
          "loadingIcon": Eleme,
          "disabled": props.disabledConfirmButton,
          "type": "primary",
          "onClick": handleConfirmClick
        }, {
          default: () => [state.loading ? "加载中..." : props.confirmButtonText]
        })])
      }
    }));
    return useExpose(expose, {
      /** @description 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 */
      handleClose: computed(() => {
        var _a;
        return (_a = drawerRef.value) == null ? void 0 : _a.handleClose;
      }),
      /** @description 进入动画后的回调 */
      afterEnter: computed(() => {
        var _a;
        return (_a = drawerRef.value) == null ? void 0 : _a.afterEnter;
      }),
      /** @description 离开动画后的回调 */
      afterLeave: computed(() => {
        var _a;
        return (_a = drawerRef.value) == null ? void 0 : _a.afterLeave;
      }),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 是否显示 */
      visible: computed(() => state.visible),
      /** @description 打开弹窗 */
      open: handleOpen,
      /** @description 关闭弹窗 */
      close: handleClose,
      /** @description 刷新弹窗 */
      refresh: handleRefresh,
      /** @description 弹窗加载 */
      doLoading: handleLoading
    });
  }
});
export {
  Drawer as default,
  faDrawerEmits,
  faDrawerProps
};
//# sourceMappingURL=drawer.mjs.map
