import { defineComponent, ref, inject, Fragment, createVNode, mergeProps, computed } from "vue";
import { formItemProps, ElFormItem } from "element-plus";
import { FaFormItemTip } from "../../formItemTip/index.mjs";
import { FaLayoutGridItem } from "../../layoutGrid/index.mjs";
import { useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isNumber } from "lodash-unified";
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
        ...slots.label && !props.tips && {
          label: ({
            label
          }) => slots.label({
            label
          })
        },
        ...slots.label && props.tips && {
          label: ({
            label
          }) => createVNode(FaFormItemTip, null, {
            label: () => slots.label({
              label
            })
          })
        },
        ...!slots.label && props.tips && {
          label: ({
            label
          }) => createVNode(FaFormItemTip, {
            "label": label ?? props.label,
            "tips": props.tips
          }, null)
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
      /** @description 表单项大小 */
      size: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.size;
      }),
      /** @description 校验消息 */
      validateMessage: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.validateMessage;
      }),
      /** @description 校验状态 */
      validateState: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.validateState;
      }),
      /** @description 验证表单项 */
      validate: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.validate;
      }),
      /** @description 移除该表单项的校验结果 */
      clearValidate: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.clearValidate;
      }),
      /** @description 对该表单项进行重置，将其值重置为初始值并移除校验结果 */
      resetField: computed(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.resetField;
      })
    });
  }
});
export {
  FormItem as default,
  faFormItemProps
};
//# sourceMappingURL=formItem.mjs.map
