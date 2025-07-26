import { isVNode, defineComponent, reactive, computed, ref, inject, watch, createVNode, Fragment, createTextVNode, mergeProps } from "vue";
import { formContextKey, formItemContextKey, ElMessage, inputProps, ElPopover, ElButton, ElInput } from "element-plus";
import { Back } from "@element-plus/icons-vue";
import "../../../constants/index.mjs";
import { withDefineType, useProps, useRender } from "@fast-china/utils";
import { isString, isNull } from "lodash-unified";
import { CarNumberArea, CarNumberDigit, CarNumberLetter } from "./common.mjs";
import { RegExps } from "../../../constants/regex.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const CarNumber = /* @__PURE__ */ defineComponent({
  name: "FaCarNumber",
  props: {
    ...inputProps,
    /** @description placeholder */
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  emits: {
    /** @description v-model 回调 */
    "update:modelValue": (value) => isString(value) || isNull(value),
    /** @description 改变 */
    change: (value) => isString(value) || isNull(value)
  },
  setup(props, {
    attrs,
    emit
  }) {
    const state = reactive({
      value: withDefineType(),
      switchLetter: computed(() => {
        var _a;
        if (((_a = state.value) == null ? void 0 : _a.length) >= 1) {
          return true;
        }
        return false;
      }),
      disabledButton: computed(() => {
        var _a;
        if (((_a = state.value) == null ? void 0 : _a.length) >= 8) {
          return true;
        }
        return false;
      })
    });
    const popoverRef = ref();
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const handleInputFormatter = (value) => {
      if (value.length === 2) {
        return `${value} ● `;
      } else if (value.length > 2) {
        return `${value.slice(0, 2)} ● ${value.slice(2)}`;
      } else {
        return value;
      }
    };
    const handleSelectCarNumber = (value) => {
      state.value ?? (state.value = "");
      state.value += value;
    };
    const handleBackClick = () => {
      var _a;
      if (((_a = state.value) == null ? void 0 : _a.length) === 0) return;
      state.value = state.value.substring(0, state.value.length - 1);
    };
    const handleConfirmClick = () => {
      var _a;
      let success = false;
      if (state.value.length === 7) {
        success = RegExps.CarNumber.test(state.value);
      } else if (state.value.length === 8) {
        success = RegExps.NewEnergyCarNumber.test(state.value);
      }
      if (success) {
        emit("update:modelValue", state.value);
        emit("change", state.value);
        (formItemContext == null ? void 0 : formItemContext.prop) && (formContext == null ? void 0 : formContext.validateField([formItemContext.prop]));
      } else {
        if ((formItemContext == null ? void 0 : formItemContext.prop) && formContext) {
          emit("update:modelValue", state.value);
          emit("change", state.value);
          formContext.validateField([formItemContext.prop]);
        } else {
          ElMessage.error("车牌号格式不正确");
        }
      }
      (_a = popoverRef.value) == null ? void 0 : _a.hide();
    };
    const handleClearClick = () => {
      state.value = null;
      emit("update:modelValue", null);
      emit("change", null);
      (formItemContext == null ? void 0 : formItemContext.prop) && (formContext == null ? void 0 : formContext.validateField([formItemContext.prop]));
    };
    watch(() => props.modelValue, (newValue) => {
      state.value = newValue.toString();
    }, {
      immediate: true
    });
    const elInputProps = useProps(props, inputProps, ["modelValue", "readonly", "formatter"]);
    useRender(() => createVNode(ElPopover, {
      "ref": popoverRef,
      "width": "auto",
      "popperClass": "fa-car-number__popover",
      "trigger": "click",
      "showArrow": false,
      "showAfter": 0,
      "hideAfter": 0
    }, {
      reference: () => createVNode(ElInput, mergeProps(elInputProps.value, {
        "class": "fa-car-number__input",
        "modelValue": state.value,
        "onUpdate:modelValue": ($event) => state.value = $event,
        "readonly": true,
        "formatter": handleInputFormatter
      }), null),
      default: () => createVNode(Fragment, null, [createVNode("div", {
        "class": ["fa-car-number__popover__area", state.switchLetter ? "fa-car-number__popover__hide" : ""]
      }, [CarNumberArea.map((area) => createVNode(ElButton, {
        "disabled": state.disabledButton,
        "onClick": () => handleSelectCarNumber(area)
      }, _isSlot(area) ? area : {
        default: () => [area]
      }))]), createVNode("div", {
        "class": ["fa-car-number__popover__digit-letter", state.switchLetter ? "" : "fa-car-number__popover__hide"]
      }, [CarNumberDigit.map((digit) => createVNode(ElButton, {
        "disabled": state.disabledButton,
        "onClick": () => handleSelectCarNumber(digit)
      }, _isSlot(digit) ? digit : {
        default: () => [digit]
      })), CarNumberLetter.map((letter) => createVNode(ElButton, {
        "disabled": state.disabledButton,
        "onClick": () => handleSelectCarNumber(letter)
      }, _isSlot(letter) ? letter : {
        default: () => [letter]
      }))]), createVNode("div", {
        "class": "fa-car-number__popover__btn"
      }, [createVNode(ElButton, {
        "class": "fa-car-number__popover__btn__clear",
        "disabled": state.value === null || state.value.length === 0,
        "onClick": handleClearClick
      }, {
        default: () => [createTextVNode("清除")]
      }), createVNode(ElButton, {
        "class": "fa-car-number__popover__btn__back",
        "type": "danger",
        "icon": Back,
        "disabled": state.value === null || state.value.length === 0,
        "onClick": handleBackClick
      }, null), createVNode(ElButton, {
        "class": "fa-car-number__popover__btn__confirm",
        "type": "primary",
        "disabled": state.value === null || state.value.length < 7,
        "onClick": handleConfirmClick
      }, {
        default: () => [createTextVNode("确认")]
      })])])
    }));
  }
});
export {
  CarNumber as default
};
//# sourceMappingURL=carNumber.mjs.map
