import { defineComponent, reactive, ref, watch, onMounted, createVNode, mergeProps, computed } from "vue";
import { useAriaProps, useEmptyValuesProps, tagProps, useSizeProp, useTooltipContentProps, useGlobalSize, ElSelectV2 } from "element-plus";
import { CircleClose } from "@element-plus/icons-vue";
import { definePropType, withDefineType, consoleError, useProps, useRender, addUnit, useExpose, makeSlots } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isString, isNumber, isBoolean, isObject, isArray, isNull, isNil, isEqual } from "lodash-unified";
const SelectV2Props = {
  /**
   * @description whether creating new items is allowed. To use this, `filterable` must be true
   */
  allowCreate: Boolean,
  /**
   * @description autocomplete of select input
   */
  autocomplete: {
    type: definePropType(String),
    default: "none"
  },
  /**
   * @description for non-filterable Select, this prop decides if the option menu pops up when the input is focused
   */
  automaticDropdown: Boolean,
  /**
   * @description whether select can be cleared
   */
  clearable: Boolean,
  /**
   * @description custom clear icon
   */
  clearIcon: {
    type: definePropType([String, Object, Function]),
    default: CircleClose
  },
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType(String),
    default: "light"
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
   * @description The max tags number to be shown. To use this, `collapse-tags` must be true
   */
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  /**
   * @description
   */
  defaultFirstOption: Boolean,
  /**
   * @description is disabled
   */
  disabled: Boolean,
  /**
   * @description
   */
  estimatedOptionHeight: {
    type: Number,
    default: void 0
  },
  /**
   * @description is filterable
   */
  filterable: Boolean,
  /**
   * @description
   */
  filterMethod: Function,
  /**
   * @description The height of the dropdown panel, 34px for each item
   */
  height: {
    type: Number,
    default: 274
    // same as select dropdown menu
  },
  /**
   * @description The height of the dropdown item
   */
  itemHeight: {
    type: Number,
    default: 34
  },
  /**
   * @description
   */
  id: String,
  /**
   * @description whether Select is loading data from server
   */
  loading: Boolean,
  /**
   * @description displayed text while loading data from server, default is 'Loading'
   */
  loadingText: String,
  /**
   * @description biding value
   */
  modelValue: {
    type: definePropType([Array, String, Number, Boolean, Object])
  },
  /**
   * @description is multiple
   */
  multiple: Boolean,
  /**
   * @description maximum number of options user can select when multiple is true. No limit when set to 0
   */
  multipleLimit: {
    type: Number,
    default: 0
  },
  /**
   * @description the name attribute of select input
   */
  name: String,
  /**
   * @description displayed text when there is no options, you can also use slot empty, the default is 'No Data'
   */
  noDataText: String,
  /**
   * @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data'
   */
  noMatchText: String,
  /**
   * @description function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true
   */
  remoteMethod: Function,
  /**
   * @description whether reserve the keyword after select filtered option.
   */
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  /**
   * @description data of the options, the key of `value` and `label` can be customize by `props`
   */
  options: {
    type: definePropType(Array)
    // required: true,
  },
  /**
   * @description placeholder, the default is 'Please select'
   */
  placeholder: {
    type: String
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
   * @description whether search data from server
   */
  remote: Boolean,
  /**
   * @description size of component
   */
  size: useSizeProp,
  /**
   * @description configuration options, see the following table
   */
  props: {
    type: definePropType(Object),
    default: () => ({
      label: "label",
      value: "value",
      disabled: "disabled",
      options: "options"
    })
  },
  /**
   * @description unique identity key name for value, required when value is an object
   */
  valueKey: {
    type: String,
    default: "value"
  },
  /**
   * @description Controls whether the scrollbar is always displayed
   */
  scrollbarAlwaysOn: Boolean,
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
   * @description offset of the dropdown
   */
  offset: {
    type: Number,
    default: 12
  },
  /**
   * @description Determines whether the arrow is displayed
   */
  showArrow: {
    type: Boolean,
    default: true
  },
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
   * @description tabindex for input
   */
  tabindex: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description which element the select dropdown appends to
   */
  appendTo: String,
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
};
const faSelectV2Props = {
  ...SelectV2Props,
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
  /** @description 下拉框数据 */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /** 分页返回 */
  pageResult: Boolean,
  /** @description 请求api */
  requestApi: {
    type: definePropType(Function)
  },
  /** 初始化参数 */
  initParam: definePropType([String, Number, Object])
};
const faSelectV2Emits = {
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
const SelectV2 = /* @__PURE__ */ defineComponent({
  name: "FaSelectV2",
  props: faSelectV2Props,
  emits: faSelectV2Emits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const selectedLabel = useVModel(props, "label", emit, {
      passive: true
    });
    const _globalSize = useGlobalSize();
    const state = reactive({
      value: withDefineType(),
      loading: false,
      selectorData: withDefineType([]),
      /** 首次出现 */
      debut: true,
      /** 回显 */
      echo: props.data?.length > 0 ? false : true,
      /** 下次刷新 */
      nextRefresh: false
    });
    const selectV2Ref = ref();
    const loadData = async () => {
      if (props.requestApi) {
        state.loading = true;
        const params = props.initParam ?? {};
        try {
          const resData = await props.requestApi(params);
          state.echo = false;
          if (props.pageResult) {
            state.selectorData = resData.rows;
          } else {
            state.selectorData = resData;
          }
          emit("dataChangeCallBack", state.selectorData);
        } catch (error) {
          consoleError("FaSelect", error);
          state.selectorData = [];
        } finally {
          state.loading = false;
        }
      } else {
        state.echo = false;
        state.selectorData = props.data;
      }
    };
    const handleChange = (value) => {
      if (props.multiple) {
        const valueArr = value;
        if (valueArr?.length === 0) {
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
            consoleError("FaSelectV2", "当启用 multiple 时，传入的 modelValue 必须是Array。");
            return;
          }
          if (hasLabel && !isArray(props.label)) {
            consoleError("FaSelectV2", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
            return;
          }
          state.selectorData = newValue.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length).map((item, index) => ({
            value: item,
            label: hasLabel ? props.label[index] : void 0
          }));
        } else {
          if (isArray(newValue)) {
            consoleError("FaSelectV2", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
            return;
          }
          if (hasLabel && isArray(props.label)) {
            consoleError("FaSelectV2", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
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
      if (props.defaultSelected) {
        await loadData();
        if (state.selectorData.length > 0) {
          handleChange(props.multiple ? [state.selectorData[0].value] : state.selectorData[0].value);
        }
      } else if (!props.requestApi && props.data?.length > 0) {
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
    const elSelectV2Props = useProps(props, SelectV2Props, ["modelValue", "popperClass", "loading", "options", "itemHeight"]);
    useRender(() => createVNode(ElSelectV2, mergeProps(elSelectV2Props.value, {
      "ref": selectV2Ref,
      "class": "fa-select-v2",
      "popperClass": `${props.moreDetail && `fa-select-v2-dropdown__more-detail`} ${props.popperClass}`,
      "style": {
        width: addUnit(props.width)
      },
      "modelValue": state.value,
      "onUpdate:modelValue": ($event) => state.value = $event,
      "loading": state.loading,
      "options": state.selectorData,
      "itemHeight": props.itemHeight + (_globalSize.value === "small" ? 0 : 8),
      "onChange": handleChange,
      "onClear": handleClear,
      "onVisibleChange": handleVisibleChange,
      "onRemoveTag": (tagValue) => emit("removeTag", tagValue),
      "onBlur": (event) => emit("blur", event),
      "onFocus": (event) => emit("focus", event)
    }), {
      ...slots.default && {
        default: ({
          item,
          index,
          disabled
        }) => slots.default({
          item,
          index,
          disabled
        })
      },
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
      focus: computed(() => selectV2Ref.value?.focus),
      /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
      blur: computed(() => selectV2Ref.value?.blur),
      /** @description 获取当前选中的标签 */
      selectedLabel: computed(() => selectV2Ref.value?.selectedLabel),
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
  SelectV2Props,
  SelectV2 as default,
  faSelectV2Emits,
  faSelectV2Props
};
//# sourceMappingURL=selectV2.mjs.map
