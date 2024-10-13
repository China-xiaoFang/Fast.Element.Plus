import { defineComponent, ref, inject, Fragment, createVNode, mergeProps, computed } from "vue";
import { FaFormItemTip } from "../../formItemTip/index.mjs";
import { FaLayoutGridItem } from "../../layoutGrid/index.mjs";
import "../../../utils/index.mjs";
import { formItemProps, ElFormItem } from "element-plus";
import { isNumber } from "lodash-unified";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useProps } from "../../../utils/vue/props.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
const faFormItemProps = {
  ...formItemProps,
  /** @description Label tips 提示 */
  tips: String,
  /** @description Grid 布局 */
  grid: {
    type: Boolean,
    default: true
  },
  /** @description 偏移量 */
  offset: {
    type: [String, Number],
    default: 0
  },
  /** @description 栅格跨度 */
  span: {
    type: [String, Number]
  },
  /** @description 独占一行。如果设置 span 则无效 */
  row: Boolean
};
const FormItem = /* @__PURE__ */ defineComponent({
  name: "FaFormItem",
  props: faFormItemProps,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    expose
  }) {
    const formItemRef = ref();
    const cols = inject("cols", ref(4));
    const getResponsive = () => {
      if (!props.grid) return {};
      if (props.span) {
        return {
          span: isNumber(props.span) ? props.span : Number(props.span),
          offset: isNumber(props.offset) ? props.offset : Number(props.offset)
        };
      } else {
        const result = {
          span: 1,
          offset: isNumber(props.offset) ? props.offset : Number(props.offset)
        };
        if (props.row) {
          result.span = cols.value;
        }
        return result;
      }
    };
    const elFormItemProps = useProps(props, formItemProps);
    const ParcelComponent = props.grid ? FaLayoutGridItem : Fragment;
    useRender(() => createVNode(ParcelComponent, getResponsive(), {
      default: () => [createVNode(ElFormItem, mergeProps({
        "ref": formItemRef
      }, elFormItemProps.value), {
        default: () => slots.default(),
        ...(slots.label || props.tips) && {
          label: ({
            label
          }) => props.tips ? createVNode(FaFormItemTip, null, {
            label: () => slots.label({
              label
            })
          }) : slots.label({
            label
          })
        },
        ...slots.error && {
          error: ({
            error
          }) => slots.error({
            error
          })
        }
      })]
    }));
    return useExpose(expose, {
      ...computed(() => {
        var _a, _b, _c, _d, _e, _f;
        return {
          /** @description Size of the form item from the reference */
          size: (_a = formItemRef.value) == null ? void 0 : _a.size,
          /** @description Validation message from the form item */
          validateMessage: (_b = formItemRef.value) == null ? void 0 : _b.validateMessage,
          /** @description Current validation state of the form item */
          validateState: (_c = formItemRef.value) == null ? void 0 : _c.validateState,
          /** @description Function to validate the form item */
          validate: (_d = formItemRef.value) == null ? void 0 : _d.validate,
          /** @description Function to clear validation status of the form item */
          clearValidate: (_e = formItemRef.value) == null ? void 0 : _e.clearValidate,
          /** @description Reset the form item and clear validation results */
          resetField: (_f = formItemRef.value) == null ? void 0 : _f.resetField
        };
      }).value
    });
  }
});
export {
  FormItem as default,
  faFormItemProps
};
//# sourceMappingURL=formItem.mjs.map
