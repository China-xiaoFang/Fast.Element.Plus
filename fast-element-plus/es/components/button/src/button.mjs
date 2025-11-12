import { defineComponent, reactive, ref, watch, createVNode, mergeProps, withModifiers, computed } from "vue";
import { buttonProps, buttonEmits, ElButton } from "element-plus";
import { Eleme } from "@element-plus/icons-vue";
import "../../../hooks/index.mjs";
import { definePropType, execFunction, consoleError, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isFunction } from "lodash-unified";
import { useOverlay } from "../../../hooks/use-overlay/index.mjs";
const faButtonProps = {
  ...buttonProps,
  /**
   * @description customize loading icon component
   * @default Eleme
   */
  loadingIcon: {
    type: definePropType([String, Object, Function]),
    default: () => Eleme
  },
  /** @description 禁用加载 */
  disabledLoading: Boolean
};
const faButtonEmits = {
  ...buttonEmits,
  /**
   * @description 点击事件
   * @param done 需要手动隐藏Loading
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  click: (event, done = () => {
  }) => event instanceof MouseEvent && isFunction(done)
};
const Button = /* @__PURE__ */ defineComponent({
  name: "FaButton",
  props: faButtonProps,
  emits: faButtonEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const state = reactive({
      loading: false
    });
    const buttonRef = ref();
    const showLoading = () => {
      state.loading = true;
      useOverlay.show(0);
    };
    const hideLoading = () => {
      state.loading = false;
      useOverlay.hide();
    };
    const handleLoading = (loadingFunction) => {
      state.loading = true;
      execFunction(loadingFunction).then().catch((error) => {
        consoleError("FaButton", error);
      }).finally(() => {
        state.loading = false;
      });
    };
    const handleClick = (event) => {
      if (props.disabledLoading) {
        emit("click", event);
      } else {
        showLoading();
        emit("click", event, hideLoading);
      }
    };
    watch(() => props.loading, (newValue) => {
      if (props.disabledLoading) return;
      if (newValue) {
        showLoading();
      } else {
        hideLoading();
      }
    }, {
      immediate: true
    });
    const elButtonProps = useProps(props, buttonProps, ["loading"]);
    useRender(() => createVNode(ElButton, mergeProps(elButtonProps.value, {
      "ref": buttonRef,
      "class": "fa-button",
      "loading": state.loading,
      "onClick": withModifiers((event) => handleClick(event), ["prevent"])
    }), {
      default: () => slots.default && slots.default(),
      ...slots.loading && {
        loading: () => slots.loading()
      },
      ...slots.icon && {
        icon: () => slots.icon()
      }
    }));
    return useExpose(expose, {
      /** @description 按钮 html 元素 */
      ref: computed(() => buttonRef.value?.ref),
      /** @description 按钮尺寸 */
      size: computed(() => buttonRef.value?.size),
      /** @description 按钮类型 */
      type: computed(() => buttonRef.value?.type),
      /** @description 按钮已禁用 */
      disabled: computed(() => buttonRef.value?.disabled),
      /** @description 是否在两个字符之间插入空格 */
      shouldAddSpace: computed(() => buttonRef.value?.shouldAddSpace),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 按钮加载 */
      doLoading: handleLoading
    });
  }
});
export {
  Button as default,
  faButtonEmits,
  faButtonProps
};
//# sourceMappingURL=button.mjs.map
