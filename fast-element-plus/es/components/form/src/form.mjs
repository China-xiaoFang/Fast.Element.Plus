import { defineComponent, reactive, computed, ref, provide, createVNode, mergeProps } from "vue";
import { formProps, useGlobalSize, ElForm } from "element-plus";
import { FaLayoutGrid } from "../../layoutGrid/index.mjs";
import { definePropType, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isObject, isNumber } from "lodash-unified";
import { formUtil } from "../utils/form.mjs";
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
  /** @description 详情From，会删除 FormItem 的 paddinfa-bottom */
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
    const _globalSize = useGlobalSize();
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
      gap: computed(() => _globalSize.value === "small" ? [15, 0] : [20, 0])
    });
    const formRef = ref();
    provide("faFormCols", state.cols);
    const elFormProps = useProps(props, formProps);
    useRender(() => createVNode(ElForm, mergeProps(elFormProps.value, {
      "ref": formRef,
      "class": ["fa-form", `fa-form-${_globalSize.value}`, {
        [`fa-form-detail fa-form-detail_${_globalSize.value}`]: props.detailForm
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
      /** @description 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 */
      validate: () => formUtil.validate(formRef),
      /** @description 验证具体的某个字段。 */
      validateField: computed(() => {
        var _a;
        return (_a = formRef.value) == null ? void 0 : _a.validateField;
      }),
      /** @description 重置该表单项，将其值重置为初始值，并移除校验结果 */
      resetFields: computed(() => {
        var _a;
        return (_a = formRef.value) == null ? void 0 : _a.resetFields;
      }),
      /** @description 清理某个字段的表单验证信息。 */
      clearValidate: computed(() => {
        var _a;
        return (_a = formRef.value) == null ? void 0 : _a.clearValidate;
      }),
      /** @description 滚动到指定的字段 */
      scrollToField: computed(() => {
        var _a;
        return (_a = formRef.value) == null ? void 0 : _a.scrollToField;
      }),
      /** @description 获取所有字段的 context */
      fields: computed(() => {
        var _a;
        return (_a = formRef.value) == null ? void 0 : _a.fields;
      }),
      /** @description 对整个表单的内容进行验证，带滚动。 接收一个回调函数，或返回 Promise。 */
      validateScrollToField: () => formUtil.validateScrollToField(formRef)
    });
  }
});
export {
  Form as default,
  faFormProps
};
//# sourceMappingURL=form.mjs.map
