import { isVNode, defineComponent, reactive, computed, createVNode, mergeProps, h, resolveComponent } from "vue";
import "../../../constants/index.mjs";
import "../../../utils/index.mjs";
import { ElIcon } from "element-plus";
import { isNumber } from "lodash-unified";
import { RegExps } from "../../../constants/regex.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const faIconProps = {
  /** @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库； */
  name: {
    type: String,
    required: true
  },
  /** @description 大小 */
  size: {
    type: [String, Number]
  },
  /** @description 颜色*/
  color: String
};
const Icon = /* @__PURE__ */ defineComponent({
  name: "FaIcon",
  props: faIconProps,
  setup(props, {
    attrs
  }) {
    const state = reactive({
      isUrl: computed(() => RegExps.External.test(props.name)),
      style: computed(() => {
        const result = {};
        if (props.size) {
          if (isNumber(props.size)) {
            result.size = `${props.size}px`;
          } else {
            result.size = props.size;
          }
        }
        if (props.color) {
          result.color = props.color;
        }
        if (state.isUrl) {
          result.mask = `url(${props.name}) no-repeat 50% 50%`;
          result["-webkit-mask"] = `url(${props.name}) no-repeat 50% 50%`;
        }
        return result;
      })
    });
    useRender(() => {
      let _slot, _slot2;
      return props.name.indexOf("el-icon-") === 0 ? createVNode(ElIcon, mergeProps(attrs, props, {
        "class": ["fa-icon", props.name]
      }), _isSlot(_slot = h(resolveComponent(props.name))) ? _slot : {
        default: () => [_slot]
      }) : props.name.indexOf("fa-icon") === 0 ? createVNode(ElIcon, mergeProps(attrs, props, {
        "class": ["fa-icon", props.name]
      }), _isSlot(_slot2 = h(resolveComponent(props.name))) ? _slot2 : {
        default: () => [_slot2]
      }) : state.isUrl ? createVNode("div", mergeProps(attrs, {
        "class": "el-icon fa-icon url-icon",
        "style": state.style
      }), null) : createVNode("i", mergeProps(attrs, {
        "class": ["el-icon fa-icon", props.name],
        "style": state.style
      }), null);
    });
  }
});
export {
  Icon as default,
  faIconProps
};
//# sourceMappingURL=icon.mjs.map
