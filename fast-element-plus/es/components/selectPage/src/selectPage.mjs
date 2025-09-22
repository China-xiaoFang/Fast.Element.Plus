import { defineComponent, reactive, ref, watch, onMounted, createVNode, mergeProps, Fragment, createTextVNode, computed } from "vue";
import { useGlobalSize, ElSelect, ElPagination, ElOption, ElInput, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { FaSelectOption } from "../../select/index.mjs";
import { definePropType, withDefineType, consoleError, useProps, useRender, addUnit, useExpose, makeSlots } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isString, isNumber, isBoolean, isObject, isArray, isNull, isFunction, isNil, isEqual } from "lodash-unified";
import { SelectProps } from "../../select/src/select.mjs";
const faSelectPageProps = {
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
  /** @description 请求api */
  requestApi: {
    type: definePropType(Function)
  },
  /** 初始化参数 */
  initParam: definePropType([String, Number, Object])
};
const faSelectPageEmits = {
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
const SelectPage = /* @__PURE__ */ defineComponent({
  name: "FaSelectPage",
  props: faSelectPageProps,
  emits: faSelectPageEmits,
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
      /** 选中的数据 */
      selectedList: withDefineType([]),
      /** 首次出现 */
      debut: true,
      /** 回显 */
      echo: true,
      /** 下次刷新 */
      nextRefresh: false,
      pageIndex: 1,
      pageSize: 15,
      totalRows: 0,
      searchValue: void 0,
      defaultSelectorData: withDefineType()
    });
    const selectRef = ref();
    const handleData = (data) => {
      return data?.map((m) => ({
        ...m,
        value: m[props.valueKey],
        label: isFunction(props.props.label) ? props.props.label(m) : m[props.props.label ?? "label"],
        hide: isFunction(props.props.hide) ? props.props.hide(m) : m[props.props.hide ?? "hide"],
        disabled: isFunction(props.props.disabled) ? props.props.disabled(m) : m[props.props.disabled ?? "disabled"],
        children: isFunction(props.props.children) ? handleData(props.props.children(m)) : handleData(m[props.props.children ?? "children"])
      })).filter((f) => !f.hide);
    };
    const loadData = async (pageIndex) => {
      state.loading = true;
      state.pageIndex = pageIndex ?? state.pageIndex;
      const params = {
        ...props.initParam ?? {},
        pageIndex: state.pageIndex,
        pageSize: state.pageSize,
        searchValue: state.searchValue
      };
      try {
        const resData = await props.requestApi(params);
        state.echo = false;
        state.totalRows = resData.totalRows;
        state.selectorData = handleData(resData.rows);
        emit("dataChangeCallBack", state.selectorData);
      } catch (error) {
        consoleError("FaSelectPage", error);
        state.pageIndex = 1;
        state.totalRows = 0;
        state.selectorData = [];
      } finally {
        state.loading = false;
      }
    };
    const handleChange = (value) => {
      if (props.multiple) {
        const valueArr = value;
        if (valueArr?.length === 0) {
          state.value = null;
          selectedLabel.value = null;
          state.selectedList = [];
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        const dataList = state.selectorData.filter((f) => valueArr.includes(f.value));
        state.value = value;
        selectedLabel.value = dataList.map((m) => m.label);
        state.selectedList = [...state.selectedList.filter((f) => !dataList.some((s) => s.value === f.value)), ...dataList].filter((f) => valueArr.includes(f.value));
        emit("update:modelValue", value);
        emit("change", dataList, value);
      } else {
        if (isNil(value)) {
          state.value = null;
          selectedLabel.value = null;
          state.selectedList = [];
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        const data = state.selectorData.find((f) => f.value === value);
        state.value = value;
        selectedLabel.value = data.label;
        if (!state.selectedList.some((s) => s.value === value)) {
          state.selectedList = [data];
        }
        emit("update:modelValue", value);
        emit("change", data, value);
      }
    };
    const handleClear = () => {
      state.value = null;
      selectedLabel.value = null;
      state.selectedList = [];
      emit("clear");
    };
    const handleVisibleChange = async (visible) => {
      if (visible) {
        if (state.debut) {
          state.debut = false;
          await loadData();
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
            consoleError("FaSelectPage", "当启用 multiple 时，传入的 modelValue 必须是Array。");
            return;
          }
          if (hasLabel && !isArray(props.label)) {
            consoleError("FaSelectPage", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
            return;
          }
          state.selectedList = newValue.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length).map((item, index) => ({
            value: item,
            label: hasLabel ? props.label[index] : void 0
          }));
        } else {
          if (isArray(newValue)) {
            consoleError("FaSelectPage", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
            return;
          }
          if (hasLabel && isArray(props.label)) {
            consoleError("FaSelectPage", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
            return;
          }
          state.defaultSelectorData = {
            value: newValue,
            label: props.label
          };
        }
      }
      state.value = newValue;
    }, {
      immediate: true
    });
    onMounted(() => {
      watch(() => props.initParam, (newValue, oldValue) => {
        if (!isEqual(newValue, oldValue)) {
          state.nextRefresh = true;
          if (!isNil(state.value)) {
            handleChange();
          }
        }
      });
    });
    const elSelectProps = useProps(props, SelectProps, ["modelValue", "popperClass", "loading"]);
    useRender(() => createVNode(ElSelect, mergeProps(elSelectProps.value, {
      "ref": selectRef,
      "class": "fa-select-page",
      "popperClass": `fa-select-page-dropdown fa-select-page-dropdown-${_globalSize.value} ${props.popperClass}`,
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
      default: () => state.selectorData.map((item) => createVNode(FaSelectOption, {
        "data": item,
        "moreDetail": props.moreDetail
      }, {
        default: slots.default
      })),
      header: () => createVNode(Fragment, null, [state.defaultSelectorData && createVNode(ElOption, {
        "class": "fa-select-page-dropdown__default-selector",
        "value": state.defaultSelectorData.value,
        "label": state.defaultSelectorData.label,
        "disabled": true
      }, {
        default: () => [createVNode("span", null, [state.defaultSelectorData.label]), createVNode("span", null, [createTextVNode("Default")])]
      }), createVNode(ElInput, {
        "class": "fa-select-page-dropdown__search-input",
        "clearable": true,
        "placeholder": "请输入关键字搜索",
        "modelValue": state.searchValue,
        "modelModifiers": {
          "trim": true
        },
        "onUpdate:modelValue": ($event) => state.searchValue = $event,
        "onKeyup": (event) => {
          if (event.key === "Enter") {
            loadData(1);
          }
        }
      }, {
        append: () => createVNode(ElButton, {
          "loading": state.loading,
          "icon": Search,
          "onClick": () => loadData(1)
        }, null)
      }), slots.header && slots.header()]),
      footer: () => createVNode(Fragment, null, [createVNode(ElPagination, {
        "class": "fa-select-page-dropdown__pagination",
        "size": "small",
        "currentPage": state.pageIndex,
        "pageSize": state.pageSize,
        "total": state.totalRows,
        "layout": "prev, pager, next, total",
        "pagerCount": 5,
        "onCurrentChange": loadData
      }, null), slots.footer && slots.footer()]),
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
      ...props.multiple ? {
        label: ({
          label,
          value
        }) => {
          const selectedData = state.selectedList.find((f) => f.value === value);
          if (slots.label) {
            return slots.label({
              label: selectedData?.label,
              value: isNil(selectedData) ? value : selectedData?.value
            });
          }
          return selectedData && createVNode("span", {
            "class": "el-select__tags-text"
          }, [selectedData.label]);
        }
      } : slots.label && {
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
      focus: computed(() => selectRef.value?.focus),
      /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
      blur: computed(() => selectRef.value?.blur),
      /** @description 获取当前选中的标签 */
      selectedLabel: computed(() => selectRef.value?.selectedLabel),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 选中的数据 */
      selectedList: computed(() => state.selectedList),
      /** @description 刷新 */
      refresh: loadData,
      /** @description 设置选择 */
      setSelection: (value) => handleChange(value),
      /** @description 清除选择 */
      clearSelection: () => handleChange(null)
    });
  }
});
export {
  SelectPage as default,
  faSelectPageEmits,
  faSelectPageProps
};
//# sourceMappingURL=selectPage.mjs.map
