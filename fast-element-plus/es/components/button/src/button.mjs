import { defineComponent, reactive, ref, watch, createVNode, mergeProps, withModifiers, computed } from "vue";
import { Eleme } from "@element-plus/icons-vue";
import "../../../hooks/index.mjs";
import "../../../utils/index.mjs";
import { buttonProps, buttonEmits, ElButton } from "element-plus";
import { isFunction } from "lodash-unified";
import { definePropType, useProps } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useOverlay } from "../../../hooks/useOverlay/index.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
const faButtonProps = {
  ...buttonProps,
  /**
   * @description customize loading icon component
   * @default Eleme
   */
  loadingIcon: {
    type: definePropType([String, Object, Function]),
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-function-return-type
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
      ...computed(() => {
        var _a, _b, _c, _d, _e;
        return {
          /** @description button html element */
          ref: (_a = buttonRef.value) == null ? void 0 : _a.ref,
          /** @description button size */
          size: (_b = buttonRef.value) == null ? void 0 : _b.size,
          /** @description button type */
          type: (_c = buttonRef.value) == null ? void 0 : _c.type,
          /** @description button disabled */
          disabled: (_d = buttonRef.value) == null ? void 0 : _d.disabled,
          /** @description whether adding space */
          shouldAddSpace: (_e = buttonRef.value) == null ? void 0 : _e.shouldAddSpace
        };
      }).value,
      /** @description 加载状态 */
      loading: state.loading
    });
  }
});
export {
  Button as default,
  faButtonEmits,
  faButtonProps
};
//# sourceMappingURL=button.mjs.map
