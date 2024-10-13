import { defineComponent, createVNode } from "vue";
import { QuestionFilled } from "@element-plus/icons-vue";
import "../../../utils/index.mjs";
import { ElTooltip, ElIcon } from "element-plus";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
const faFormItemTipProps = {
  /** @description 提示 */
  tips: String,
  /** @description 显示 */
  label: String
};
const FormItemTip = /* @__PURE__ */ defineComponent({
  name: "FaFormItemTip",
  props: faFormItemTipProps,
  slots: makeSlots(),
  setup(props, {
    slots
  }) {
    useRender(() => createVNode("div", {
      "class": "fa-form-item-tip"
    }, [createVNode(ElTooltip, {
      "effect": "dark",
      "rawContent": true,
      "content": props.tips,
      "placement": "top"
    }, {
      default: () => [createVNode(ElIcon, null, {
        default: () => [createVNode(QuestionFilled, null, null)]
      })]
    }), createVNode("span", {
      "class": "fa-form-item-tip__label"
    }, [slots.label ? slots.label() : props.label])]));
  }
});
export {
  FormItemTip as default,
  faFormItemTipProps
};
//# sourceMappingURL=formItemTip.mjs.map
