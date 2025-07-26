import { isVNode, defineComponent, reactive, computed, createVNode, Fragment, h, resolveComponent } from "vue";
import { ElOptionGroup, ElOption } from "element-plus";
import { useRender, makeSlots, definePropType } from "@fast-china/utils";
import { isUndefined } from "lodash-unified";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const SelectOption = /* @__PURE__ */ defineComponent({
  name: "FaSelectOption",
  props: {
    /** @description 绑定值，优先级比 data 高 */
    value: {
      type: definePropType([String, Number, Boolean, Object]),
      default: void 0
    },
    /** @description 显示值，优先级比 data 高 */
    label: String,
    /** @description 禁用值，优先级比 data 高 */
    disabled: {
      type: Boolean,
      default: void 0
    },
    /** @description 子节点，优先级比 data 高 */
    children: {
      type: definePropType(Array)
    },
    /** @description 下拉框数据 */
    data: {
      type: definePropType(Object),
      default: () => ({})
    },
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: Boolean
  },
  slots: makeSlots(),
  setup(props, {
    slots
  }) {
    const state = reactive({
      value: computed(() => isUndefined(props.value) ? props.data.value : props.value),
      label: computed(() => isUndefined(props.label) ? props.data.label : props.label),
      disabled: computed(() => (isUndefined(props.disabled) ? props.data.disabled : props.disabled) ?? false),
      children: computed(() => (isUndefined(props.children) ? props.data.children : props.children) ?? [])
    });
    useRender(() => {
      let _slot;
      return createVNode(Fragment, null, [state.children.length > 0 ? createVNode(ElOptionGroup, {
        "label": state.label,
        "disabled": state.disabled
      }, _isSlot(_slot = state.children.map((item) => h(resolveComponent("FaSelectOption"), {
        moreDetail: props.moreDetail,
        data: item
      }, slots))) ? _slot : {
        default: () => [_slot]
      }) : createVNode(ElOption, {
        "class": {
          "fa-select-page-dropdown__selector__more-detail": props.moreDetail && slots.default
        },
        "value": state.value,
        "label": state.label,
        "disabled": state.disabled
      }, {
        default: () => [slots.default && slots.default(props.data)]
      })]);
    });
  }
});
export {
  SelectOption as default
};
//# sourceMappingURL=selectOption.mjs.map
