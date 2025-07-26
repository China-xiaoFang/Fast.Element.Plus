import { defineComponent, reactive, ref, watch, onMounted, createVNode, mergeProps, computed } from "vue";
import { useAriaProps, useEmptyValuesProps, tagProps, useTooltipContentProps, useSizeProp, ElSelect } from "element-plus";
import { ArrowDown, CircleClose } from "@element-plus/icons-vue";
import { definePropType, withDefineType, consoleError, useProps, useRender, addUnit, useExpose, makeSlots } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isString, isNumber, isBoolean, isObject, isArray, isNull, isFunction, isNil, isEqual } from "lodash-unified";
import SelectOption from "./selectOption.mjs";
const SelectProps = {
  /**
   * @description the name attribute of select input
   */
  name: String,
  /**
   * @description native input id
   */
  id: String,
  /**
   * @description binding value
   */
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  /**
   * @description the autocomplete attribute of select input
   */
  autocomplete: {
    type: String,
    default: "off"
  },
  /**
   * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
   */
  automaticDropdown: Boolean,
  /**
   * @description size of Input
   */
  size: useSizeProp,
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType(String),
    default: "light"
  },
  /**
   * @description whether Select is disabled
   */
  disabled: Boolean,
  /**
   * @description whether select can be cleared
   */
  clearable: Boolean,
  /**
   * @description whether Select is filterable
   */
  filterable: Boolean,
  /**
   * @description whether creating new items is allowed. To use this, `filterable` must be true
   */
  allowCreate: Boolean,
  /**
   * @description whether Select is loading data from server
   */
  loading: Boolean,
  /**
   * @description custom class name for Select's dropdown
   */
  popperClass: {
    type: String,
    default: ""
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
   * @description whether options are loaded from server
   */
  remote: Boolean,
  /**
   * @description displayed text while loading data from server, default is 'Loading'
   */
  loadingText: String,
  /**
   * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
   */
  noMatchText: String,
  /**
   * @description displayed text when there is no options, you can also use slot `empty`, default is 'No data'
   */
  noDataText: String,
  /**
   * @description custom remote search method
   */
  remoteMethod: Function,
  /**
   * @description custom filter method
   */
  filterMethod: Function,
  /**
   * @description whether multiple-select is activated
   */
  multiple: Boolean,
  /**
   * @description maximum number of options user can select when `multiple` is `true`. No limit when set to 0
   */
  multipleLimit: {
    type: Number,
    default: 0
  },
  /**
   * @description placeholder, default is 'Select'
   */
  placeholder: {
    type: String
  },
  /**
   * @description select first matching option on enter key. Use with `filterable` or `remote`
   */
  defaultFirstOption: Boolean,
  /**
   * @description when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option
   */
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  /**
   * @description unique identity key name for value, required when value is an object
   */
  valueKey: {
    type: String,
    default: "value"
  },
  /**
   * @description whether to collapse tags to a text when multiple selecting
   */
  collapseTags: Boolean,
  /**
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
   */
  collapseTagsTooltip: Boolean,
  /**
   * @description the max tags number to be shown. To use this, `collapse-tags` must be true
   */
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  /**
   * @description whether select dropdown is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true
  },
  /**
   * @description custom clear icon component
   */
  clearIcon: {
    type: definePropType([String, Object, Function]),
    default: CircleClose
  },
  /**
   * @description whether the width of the dropdown is the same as the input
   */
  fitInputWidth: Boolean,
  /**
   * @description custom suffix icon component
   */
  suffixIcon: {
    type: definePropType([String, Object, Function]),
    default: ArrowDown
  },
  /**
   * @description tag type
   */
  tagType: {
    ...tagProps.type,
    default: "info"
  },
  /**
   * @description tag effect
   */
  tagEffect: {
    ...tagProps.effect,
    default: "light"
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
   * @description in remote search method show suffix icon
   */
  remoteShowSuffix: Boolean,
  /**
   * @description position of dropdown
   */
  placement: {
    type: definePropType(String),
    default: "bottom-start"
  },
  /**
   * @description list of possible positions for dropdown
   */
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
};
const faSelectProps = {
  ...SelectProps,
  /** @description displayed text while loading data from server, default is 'Loading' */
  loadingText: {
    type: String,
    default: "加载中..."
  },
  /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
  noMatchText: {
    type: String,
    default: "暂无匹配的数据"
  },
  /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
  noDataText: {
    type: String,
    default: "暂无数据"
  },
  /** @description whether to collapse tags to a text when multiple selecting */
  collapseTags: {
    type: Boolean,
    default: true
  },
  /** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
  collapseTagsTooltip: {
    type: Boolean,
    default: true
  },
  /** @description v-model绑定值 */
  modelValue: {
    type: definePropType([String, Number, Boolean, Object, Array]),
    default: void 0
  },
  /** @description v-model:label绑定值 */
  label: definePropType([String, Array]),
  /** @description 宽度 */
  width: {
    type: [String, Number],
    default: "100%"
  },
  /** @description 更多细节，只有使用slot的时候有用 */
  moreDetail: Boolean,
  /** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
  lazy: {
    type: Boolean,
    default: true
  },
  /** @description 默认选中。不能和懒加载一起使用 */
  defaultSelected: Boolean,
  /** @description 配置选项 */
  props: {
    type: definePropType(Object),
    default: () => ({
      label: "label",
      hide: "hide",
      disabled: "disabled",
      children: "children"
    })
  },
  /** @description 下拉框数据 */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /** @description 请求api */
  requestApi: {
    type: definePropType(Function)
  },
  /** 初始化参数 */
  initParam: definePropType([String, Number, Object])
};
const faSelectEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value),
  /** @description v-model:label 回调 */
  "update:label": (value) => isString(value) || isArray(value) || isNull(value),
  /** @description 数据改变 */
  dataChangeCallBack: (data) => isArray(data),
  /** @description 改变 */
  change: (data, value) => (isObject(data) || isArray(data) || isNull(data)) && (isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value)),
  /** @description 下拉框出现/隐藏时触发 */
  visibleChange: (visible) => isBoolean(visible),
  /** @description 多选模式下移除tag时触发 */
  removeTag: (tagValue) => isString(tagValue) || isNumber(tagValue) || isBoolean(tagValue) || isObject(tagValue) || isArray(tagValue),
  /** @description 可清空的单选模式下用户点击清空按钮时触发 */
  clear: () => true,
  /** @description 当 input 失去焦点时触发 */
  blur: (event) => event instanceof FocusEvent,
  /** @description 当 input 获得焦点时触发 */
  focus: (event) => event instanceof FocusEvent
};
const Select = /* @__PURE__ */ defineComponent({
  name: "FaSelect",
  props: faSelectProps,
  emits: faSelectEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    var _a;
    const selectedLabel = useVModel(props, "label", emit, {
      passive: true
    });
    const state = reactive({
      value: withDefineType(),
      loading: false,
      selectorData: withDefineType([]),
      /** 首次出现 */
      debut: true,
      /** 回显 */
      echo: ((_a = props.data) == null ? void 0 : _a.length) > 0 ? false : true,
      /** 下次刷新 */
      nextRefresh: false
    });
    const selectRef = ref();
    const handleData = (data) => {
      return data == null ? void 0 : data.map((m) => ({
        ...m,
        value: m[props.valueKey],
        label: isFunction(props.props.label) ? props.props.label(m) : m[props.props.label ?? "label"],
        hide: isFunction(props.props.hide) ? props.props.hide(m) : m[props.props.hide ?? "hide"],
        disabled: isFunction(props.props.disabled) ? props.props.disabled(m) : m[props.props.disabled ?? "disabled"],
        children: isFunction(props.props.children) ? handleData(props.props.children(m)) : handleData(m[props.props.children ?? "children"])
      })).filter((f) => !f.hide);
    };
    const loadData = async () => {
      if (props.requestApi) {
        state.loading = true;
        const params = props.initParam ?? {};
        try {
          const resData = await props.requestApi(params);
          state.echo = false;
          state.selectorData = handleData(resData);
          emit("dataChangeCallBack", state.selectorData);
        } catch (error) {
          consoleError("FaSelect", error);
          state.selectorData = [];
        } finally {
          state.loading = false;
        }
      } else {
        state.selectorData = handleData(props.data);
      }
    };
    const handleChange = (value) => {
      if (props.multiple) {
        const valueArr = value;
        if ((valueArr == null ? void 0 : valueArr.length) === 0) {
          state.value = null;
          selectedLabel.value = null;
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        const dataList = state.selectorData.filter((f) => valueArr.includes(f.value));
        state.value = value;
        selectedLabel.value = dataList.map((m) => m.label);
        emit("update:modelValue", value);
        emit("change", dataList, value);
      } else {
        if (isNil(value)) {
          state.value = null;
          selectedLabel.value = null;
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        const data = state.selectorData.find((f) => f.value === value);
        state.value = value;
        selectedLabel.value = data.label;
        emit("update:modelValue", value);
        emit("change", data, value);
      }
    };
    const handleClear = () => {
      state.value = null;
      selectedLabel.value = null;
      emit("clear");
    };
    const handleVisibleChange = async (visible) => {
      if (visible) {
        if (state.debut) {
          state.debut = false;
          !props.defaultSelected && props.lazy && await loadData();
        } else {
          if (state.nextRefresh) {
            state.nextRefresh = false;
            await loadData();
          }
        }
      }
      emit("visibleChange", visible);
    };
    watch(() => props.modelValue, (newValue) => {
      if (state.echo && !isNil(newValue)) {
        const hasLabel = !isNil(props.label);
        if (props.multiple) {
          if (!isArray(newValue)) {
            consoleError("FaSelect", "当启用 multiple 时，传入的 modelValue 必须是Array。");
            return;
          }
          if (hasLabel && !isArray(props.label)) {
            consoleError("FaSelect", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
            return;
          }
          state.selectorData = newValue.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length).map((item, index) => ({
            value: item,
            label: hasLabel ? props.label[index] : void 0
          }));
        } else {
          if (isArray(newValue)) {
            consoleError("FaSelect", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
            return;
          }
          if (hasLabel && isArray(props.label)) {
            consoleError("FaSelect", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
            return;
          }
          state.selectorData = [{
            value: newValue,
            label: props.label
          }];
        }
      }
      state.value = newValue;
    }, {
      immediate: true
    });
    onMounted(async () => {
      var _a2;
      if (props.defaultSelected) {
        await loadData();
        if (state.selectorData.length > 0) {
          handleChange(props.multiple ? [state.selectorData[0].value] : state.selectorData[0].value);
        }
      } else if (!props.requestApi && ((_a2 = props.data) == null ? void 0 : _a2.length) > 0) {
        state.debut = false;
        await loadData();
      } else if (!props.lazy) {
        await loadData();
      }
      watch(() => props.initParam, (newValue, oldValue) => {
        if (!isEqual(newValue, oldValue)) {
          state.nextRefresh = true;
          if (!isNil(state.value)) {
            handleChange();
          }
        }
      });
      watch(() => props.data, async () => {
        if (!props.requestApi) {
          await loadData();
        }
      }, {
        deep: true
      });
    });
    const elSelectProps = useProps(props, SelectProps, ["modelValue", "popperClass", "loading"]);
    useRender(() => createVNode(ElSelect, mergeProps(elSelectProps.value, {
      "ref": selectRef,
      "class": "fa-select",
      "popperClass": `fa-select-dropdown ${props.popperClass}`,
      "style": {
        width: addUnit(props.width)
      },
      "modelValue": state.value,
      "onUpdate:modelValue": ($event) => state.value = $event,
      "loading": state.loading,
      "onChange": handleChange,
      "onClear": handleClear,
      "onVisibleChange": handleVisibleChange,
      "onRemoveTag": (tagValue) => emit("removeTag", tagValue),
      "onBlur": (event) => emit("blur", event),
      "onFocus": (event) => emit("focus", event)
    }), {
      default: () => state.selectorData.map((item) => createVNode(SelectOption, {
        "data": item,
        "moreDetail": props.moreDetail
      }, {
        default: slots.default
      })),
      ...slots.header && {
        header: () => slots.header()
      },
      ...slots.footer && {
        footer: () => slots.footer()
      },
      ...slots.prefix && {
        prefix: () => slots.prefix()
      },
      ...slots.empty && {
        empty: () => slots.empty()
      },
      ...slots.tag && {
        tag: () => slots.tag()
      },
      ...slots.loading && {
        loading: () => slots.loading()
      },
      ...slots.label && {
        label: ({
          label,
          value
        }) => slots.label({
          label,
          value
        })
      }
    }));
    return useExpose(expose, {
      /** @description 使选择器的输入框获取焦点 */
      focus: computed(() => {
        var _a2;
        return (_a2 = selectRef.value) == null ? void 0 : _a2.focus;
      }),
      /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
      blur: computed(() => {
        var _a2;
        return (_a2 = selectRef.value) == null ? void 0 : _a2.blur;
      }),
      /** @description 获取当前选中的标签 */
      selectedLabel: computed(() => {
        var _a2;
        return (_a2 = selectRef.value) == null ? void 0 : _a2.selectedLabel;
      }),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 刷新 */
      refresh: loadData,
      /** @description 设置选择  */
      setSelection: (value) => handleChange(value),
      /** @description 清除选择  */
      clearSelection: () => handleChange(null)
    });
  }
});
export {
  SelectProps,
  Select as default,
  faSelectEmits,
  faSelectProps
};
//# sourceMappingURL=select.mjs.map
