import { isVNode, defineComponent, ref, inject, computed, reactive, watch, createVNode, mergeProps, createTextVNode } from "vue";
import { useGlobalSize, ElButton, ElIcon } from "element-plus";
import { Refresh, Eleme, Search, ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import { FaDrawer } from "../../drawer/index.mjs";
import { FaLayoutGrid, FaLayoutGridItem } from "../../layoutGrid/index.mjs";
import { Brush } from "@fast-element-plus/icons-vue";
import { withDefineType, useRender, makeSlots, definePropType } from "@fast-china/utils";
import { getTableDefaultSlots } from "./table.type.mjs";
import TableSearchFormItem from "./tableSearchFormItem.mjs";
import { tableStateKey } from "./useTable.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const TableSearchForm = /* @__PURE__ */ defineComponent({
  name: "FaTableSearchForm",
  props: {
    /** @description 显示 */
    show: {
      type: Boolean,
      required: true
    },
    /** @description 折叠搜素 */
    collapsedSearch: {
      type: Boolean,
      default: true
    },
    /** @description 高级搜素抽屉 */
    advancedSearchDrawer: {
      type: Boolean,
      default: false
    },
    /** @description Grid布局列配置 */
    cols: {
      type: definePropType([String, Number, Object]),
      default: () => ({
        xs: 2,
        sm: 3,
        md: 4,
        lg: 5,
        xl: 6
      })
    },
    /** @description 搜索 */
    search: {
      type: definePropType(Function),
      required: true
    },
    /** @description 重置 */
    reset: {
      type: definePropType(Function),
      required: true
    }
  },
  slots: makeSlots(),
  setup(props, {
    slots,
    expose
  }) {
    const _globalSize = useGlobalSize();
    const gridRef = ref();
    const tableState = inject(tableStateKey);
    const breakPoint = computed(() => gridRef.value?.breakPoint);
    const state = reactive({
      refreshing: false,
      height: "auto",
      /** 折叠 */
      collapsed: true,
      /** 显示折叠 */
      showCollapsed: computed(() => {
        let show = false;
        tableState.searchColumns.reduce((prev, current) => {
          prev += (current.search[breakPoint.value]?.span ?? current.search?.span ?? 1) + (current.search[breakPoint.value]?.offset ?? current.search?.offset ?? 0);
          if (typeof props.cols !== "number") {
            if (prev >= props.cols[breakPoint.value]) show = true;
          } else {
            if (prev >= props.cols) show = true;
          }
          return prev;
        }, 0);
        return show;
      }),
      searchColumns: withDefineType([]),
      advancedSearchColumns: withDefineType([]),
      breakPoint: void 0
    });
    const faTableSearchFormRef = ref();
    const advancedSearchRef = ref();
    const getResponsive = (item) => {
      return {
        span: item?.span,
        offset: item?.offset ?? 0,
        xs: item?.xs,
        sm: item?.sm,
        md: item?.md,
        lg: item?.lg,
        xl: item?.xl
      };
    };
    const handleBreakPointChange = ({
      breakPoint: breakPoint2
    }) => {
      state.breakPoint = props.cols[breakPoint2] - 1;
      state.searchColumns = tableState.searchColumns.filter((f) => f?.show).slice(0, state.breakPoint);
      state.advancedSearchColumns = tableState.searchColumns.filter((f) => f?.show).slice(state.breakPoint);
    };
    watch(() => tableState.searchColumns, () => {
      if (state.breakPoint) {
        state.searchColumns = tableState.searchColumns.filter((f) => f?.show).slice(0, state.breakPoint);
        state.advancedSearchColumns = tableState.searchColumns.filter((f) => f?.show).slice(state.breakPoint);
      }
    });
    const searchColumns = computed(() => props.advancedSearchDrawer ? state.searchColumns : tableState.searchColumns);
    watch(() => props.advancedSearchDrawer, (newValue) => {
      if (newValue) {
        state.collapsed = true;
      } else {
        state.collapsed = props.collapsedSearch;
      }
      state.refreshing = true;
      setTimeout(() => {
        state.refreshing = false;
      }, 1);
    });
    watch(() => props.collapsedSearch, (newValue) => {
      if (!props.collapsedSearch) {
        state.collapsed = newValue;
      } else {
        state.collapsed = true;
      }
    }, {
      immediate: true
    });
    useRender(() => {
      let _slot;
      return tableState.searchColumns.length > 0 && createVNode("div", {
        "ref": faTableSearchFormRef,
        "class": ["el-card fa-table__search", {
          "fa-table__search-hidden": !props.show,
          "fa-table__search__disable": tableState.loading
        }]
      }, [createVNode("form", {
        "class": "el-form el-form--default el-form--label-right"
      }, [!state.refreshing && createVNode(FaLayoutGrid, {
        "ref": gridRef,
        "collapsed": state.collapsed,
        "gap": _globalSize.value === "small" ? [20, 0] : [20, 10],
        "cols": props.cols,
        "onBreakPointChange": handleBreakPointChange
      }, {
        default: () => [searchColumns.value.map((item, index) => createVNode(FaLayoutGridItem, mergeProps({
          "key": item?.search?.key ?? item.prop
        }, getResponsive(item.search), {
          "index": index
        }), {
          default: () => [createVNode("div", {
            "class": "el-form-item el-form-item--default el-form-item--label-right"
          }, [createVNode("label", {
            "class": "el-form-item__label"
          }, [item.search.label]), createVNode("div", {
            "class": "el-form-item__content"
          }, [item.search?.slot ? slots[item.search.slot] && slots[item.search.slot]({
            column: item,
            search: props.search,
            ...getTableDefaultSlots(tableState)
          }) : createVNode(TableSearchFormItem, {
            "column": item,
            "search": props.search
          }, null)])])]
        })), createVNode(FaLayoutGridItem, {
          "suffix": true
        }, {
          default: () => [createVNode("div", {
            "class": "fa-table__search-operation"
          }, [createVNode(ElButton, {
            "loading": tableState.loading,
            "loadingIcon": Eleme,
            "title": "搜索",
            "type": "primary",
            "plain": true,
            "icon": Refresh,
            "onClick": () => props.search()
          }, {
            default: () => [createTextVNode("搜索")]
          }), createVNode(ElButton, {
            "loading": tableState.loading,
            "loadingIcon": Eleme,
            "title": "重置",
            "icon": Brush,
            "onClick": () => props.reset()
          }, {
            default: () => [createTextVNode("重置")]
          }), props.advancedSearchDrawer ? state.advancedSearchColumns.length > 0 && createVNode(ElButton, {
            "loading": tableState.loading,
            "loadingIcon": Eleme,
            "title": "高级搜索",
            "type": "info",
            "plain": true,
            "icon": Search,
            "onClick": () => advancedSearchRef.value.open()
          }, {
            default: () => [createTextVNode("高级搜索")]
          }) : state.showCollapsed && createVNode(ElButton, {
            "loading": tableState.loading,
            "loadingIcon": Eleme,
            "title": state.collapsed ? "展开" : "折叠",
            "link": true,
            "type": "primary",
            "onClick": () => {
              state.collapsed = !state.collapsed;
            }
          }, {
            default: () => [state.collapsed ? "展开" : "折叠", createVNode(ElIcon, null, {
              default: () => [state.collapsed ? createVNode(ArrowDown, null, null) : createVNode(ArrowUp, null, null)]
            })]
          })])]
        })]
      })]), props.advancedSearchDrawer && state.advancedSearchColumns.length > 0 && createVNode(FaDrawer, {
        "ref": advancedSearchRef,
        "class": "fa-table__search-advanced",
        "size": "20%",
        "title": "高级搜索",
        "appendToBody": false,
        "showCloseButton": false,
        "showConfirmButton": false,
        "showFullscreen": false,
        "showRefresh": false,
        "onConfirmClick": () => props.search()
      }, {
        default: () => [createVNode("form", {
          "class": "el-form el-form--default el-form--label-top"
        }, [createVNode(FaLayoutGrid, {
          "gap": [20, 0],
          "cols": {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6
          }
        }, _isSlot(_slot = state.advancedSearchColumns.map((item, index) => createVNode(FaLayoutGridItem, mergeProps({
          "key": item.prop ?? item?.search?.key
        }, getResponsive(item.search), {
          "index": index
        }), {
          default: () => [createVNode("div", {
            "class": "el-form-item el-form-item--default el-form-item--label-top"
          }, [createVNode("label", {
            "class": "el-form-item__label"
          }, [item.search.label]), createVNode("div", {
            "class": "el-form-item__content"
          }, [item.search.slot ? slots[item.search.slot] && slots[item.search.slot]({
            column: item,
            search: props.search,
            ...getTableDefaultSlots(tableState)
          }) : createVNode(TableSearchFormItem, {
            "column": item,
            "search": props.search
          }, null)])])]
        }))) ? _slot : {
          default: () => [_slot]
        })])]
      })]);
    });
  }
});
export {
  TableSearchForm as default
};
//# sourceMappingURL=tableSearchForm.mjs.map
