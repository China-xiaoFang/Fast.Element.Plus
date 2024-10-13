import { defineComponent, reactive, computed, ref, provide, createVNode, mergeProps } from "vue";
import { FaLayoutGrid } from "../../layoutGrid/index.mjs";
import "../../../utils/index.mjs";
import { formProps, ElForm } from "element-plus";
import { isObject, isNumber } from "lodash-unified";
import { definePropType, useProps } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
import { formUtil } from "../../../utils/form.mjs";
const faFormProps = {
  ...formProps,
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
  },
  /** @description 详情From，会删除 FormItem 的 padding-bottom */
  detailForm: Boolean,
  /** @description Grid布局*/
  grid: {
    type: Boolean,
    default: true
  },
  /** @description Grid布局列配置 */
  cols: {
    type: definePropType([String, Number, Object]),
    default: () => ({
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    })
  }
};
const Form = /* @__PURE__ */ defineComponent({
  name: "FaForm",
  props: faFormProps,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    expose
  }) {
    const state = reactive({
      cols: computed(() => {
        if (isObject(props.cols)) {
          return props.cols;
        } else {
          const colsNumber = isNumber(props.cols) ? props.cols : Number(props.cols);
          return {
            xs: 1,
            sm: colsNumber,
            md: colsNumber,
            lg: colsNumber,
            xl: colsNumber
          };
        }
      }),
      gap: [20, 0]
    });
    const formRef = ref();
    provide("faFormCols", state.cols);
    const elFormProps = useProps(props, formProps);
    useRender(() => createVNode(ElForm, mergeProps(elFormProps.value, {
      "ref": formRef,
      "class": ["fa-form", {
        "fa-form-detail": props.detailForm
      }]
    }), {
      default: () => props.grid ? createVNode(FaLayoutGrid, {
        "collapsed": true,
        "gap": state.gap,
        "cols": state.cols
      }, {
        default: () => [slots.default && slots.default(state)]
      }) : slots.default && slots.default(state)
    }));
    return useExpose(expose, {
      ...computed(() => {
        var _a, _b, _c, _d;
        return {
          /** @description Validate the whole form. Receives a callback or returns `Promise`. */
          validate: () => formUtil.validate(formRef),
          /** @description Validate specified fields. */
          validateField: () => formUtil.validateScrollToField(formRef),
          /** @description Reset specified fields and remove validation result. */
          resetFields: (_a = formRef.value) == null ? void 0 : _a.resetFields,
          /** @description Clear validation message for specified fields. */
          clearValidate: (_b = formRef.value) == null ? void 0 : _b.clearValidate,
          /** @description Scroll to the specified fields. */
          scrollToField: (_c = formRef.value) == null ? void 0 : _c.scrollToField,
          /** @description All fields context. */
          fields: (_d = formRef.value) == null ? void 0 : _d.fields
        };
      }).value
    });
  }
});
export {
  Form as default,
  faFormProps
};
//# sourceMappingURL=form.mjs.map
