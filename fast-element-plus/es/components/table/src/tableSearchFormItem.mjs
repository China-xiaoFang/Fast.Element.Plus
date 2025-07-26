import { defineComponent, inject, reactive, createVNode, Fragment, h, resolveComponent } from "vue";
import { ElOption } from "element-plus";
import { withDefineType, dateUtil, useRender, makeSlots, definePropType } from "@fast-china/utils";
import { isString } from "lodash-unified";
import { getTableDefaultSlots } from "./table.type.mjs";
import { tableStateKey, enumMapKey } from "./useTable.mjs";
const clearableEls = ["el-input", "ELInput", "el-input-number", "ELInputNumber", "el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-tree-select", "ElTreeSelect", "el-cascader", "ElCascader", "el-date-picker", "ElDatePicker", "el-time-picker", "ElTimePicker", "el-time-select", "ElTimeSelect"];
const filterableEls = ["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-tree-select", "ElTreeSelect"];
const inputPlaceholderEls = ["el-input", "ELInput", "el-input-number", "ELInputNumber"];
const selectPlaceholderEls = ["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-tree-select", "ElTreeSelect", "el-cascader", "ElCascader"];
const TableSearchFormItem = /* @__PURE__ */ defineComponent({
  name: "FaTableSearchFormItem",
  props: {
    /** @description 列配置 */
    column: {
      type: definePropType(Object),
      required: true,
      /** 这里的 default 不知道为什么，不写识别不出来类型 */
      default: {}
    },
    /** @description 搜索 */
    search: {
      type: definePropType(Function),
      required: true
    }
  },
  slots: makeSlots(),
  setup(props, {
    slots
  }) {
    const tableState = inject(tableStateKey);
    const enumMap = inject(enumMapKey);
    const state = reactive({
      enumDict: withDefineType([]),
      oldValue: void 0
    });
    const handleUpdateModelValue = (value) => {
      var _a, _b, _c, _d;
      if (isString(value)) {
        value = value.trim();
      }
      state.oldValue = tableState.searchParam[((_b = (_a = props.column) == null ? void 0 : _a.search) == null ? void 0 : _b.key) ?? props.column.prop];
      tableState.searchParam[((_d = (_c = props.column) == null ? void 0 : _c.search) == null ? void 0 : _d.key) ?? props.column.prop] = value;
    };
    const handleChange = (value) => {
      props.search();
    };
    const handleDefaultProps = () => {
      var _a, _b, _c;
      const search = props.column.search;
      const defaultProps = {};
      if (clearableEls.includes(search == null ? void 0 : search.el)) {
        defaultProps.clearable = true;
      }
      if (filterableEls.includes(search == null ? void 0 : search.el)) {
        defaultProps.filterable = true;
      }
      if (inputPlaceholderEls.includes(search == null ? void 0 : search.el)) {
        defaultProps.placeholder = "请输入";
      }
      if (selectPlaceholderEls.includes(search == null ? void 0 : search.el)) {
        defaultProps.placeholder = "请选择";
      }
      if (["el-date-picker", "ElDatePicker"].includes(search == null ? void 0 : search.el)) {
        defaultProps.unlinkPanels = true;
        if (["datetimerange", "daterange", "monthrange", "yearrange"].includes((_a = search == null ? void 0 : search.props) == null ? void 0 : _a.type)) {
          defaultProps.defaultTime = dateUtil.getDefaultTime();
          defaultProps.shortcuts = dateUtil.getShortcuts();
          defaultProps.rangeSeparator = "至";
          defaultProps.startPlaceholder = "开始时间";
          defaultProps.endPlaceholder = "结束时间";
        } else {
          defaultProps.defaultTime = dateUtil.getSimpleTime();
          defaultProps.shortcuts = dateUtil.getSimpleShortcuts();
        }
      }
      if (["el-time-picker", "ElTimePicker"].includes(search == null ? void 0 : search.el) && ((_b = search == null ? void 0 : search.props) == null ? void 0 : _b.isRange)) {
        defaultProps.rangeSeparator = "至";
        defaultProps.startPlaceholder = "开始时间";
        defaultProps.endPlaceholder = "结束时间";
      }
      if (["el-select", "ElSelect", "el-select-v2", "ElSelectV2", "el-cascader", "ElCascader", "el-tree-select", "ElTreeSelect"].includes(search == null ? void 0 : search.el)) {
        let enumData;
        if (props.column.enum && isString(props.column.enum)) {
          enumData = enumMap.get(props.column.enum);
        } else {
          enumData = enumMap.get(props.column.prop ?? ((_c = props.column.search) == null ? void 0 : _c.key));
        }
        enumData = enumData.filter((f) => (f == null ? void 0 : f.show) !== false);
        state.enumDict = enumData ?? [];
      }
      if (["el-select-v2", "ElSelectV2", "el-cascader", "ElCascader"].includes(search == null ? void 0 : search.el)) {
        defaultProps.options = state.enumDict;
      }
      if (["el-tree-select", "ElTreeSelect"].includes(search == null ? void 0 : search.el)) {
        defaultProps.data = state.enumDict;
      }
      return defaultProps;
    };
    useRender(() => {
      var _a, _b, _c;
      return createVNode(Fragment, null, [((_a = props.column.search) == null ? void 0 : _a.el) && h(resolveComponent(props.column.search.el), {
        ...handleDefaultProps(),
        ...props.column.search.props,
        modelValue: tableState.searchParam[((_c = (_b = props.column) == null ? void 0 : _b.search) == null ? void 0 : _c.key) ?? props.column.prop],
        "onUpdate:modelValue": handleUpdateModelValue,
        onChange: handleChange
      }, {
        default: () => ["el-select", "ElSelect"].includes(props.column.search.el) ? state.enumDict.map((selData, index) => {
          var _a2, _b2, _c2;
          return h(ElOption, {
            key: index,
            label: selData[((_a2 = props.column.search.props) == null ? void 0 : _a2.label) ?? "label"],
            value: selData[((_b2 = props.column.search.props) == null ? void 0 : _b2.value) ?? "value"],
            disabled: selData[((_c2 = props.column.search.props) == null ? void 0 : _c2.disabled) ?? "disabled"]
          });
        }) : slots.default && slots.default({
          column: props.column,
          search: props.search,
          ...getTableDefaultSlots(tableState)
        })
      })]);
    });
  }
});
export {
  TableSearchFormItem as default
};
//# sourceMappingURL=tableSearchFormItem.mjs.map
