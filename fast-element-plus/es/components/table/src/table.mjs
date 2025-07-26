import { isVNode, defineComponent, ref, onMounted, watch, watchEffect, onActivated, computed, createVNode, withDirectives, Fragment, mergeProps, createTextVNode, resolveDirective } from "vue";
import { useSizeProp, ElInput, ElDatePicker, ElButton, ElDropdown, ElDropdownMenu, ElTable, ElTableColumn, ElIcon, ElPagination, ElImageViewer } from "element-plus";
import { Search, Refresh, Eleme, Setting, More } from "@element-plus/icons-vue";
import { NotData } from "@fast-element-plus/icons-vue";
import { definePropType, stringUtil, consoleWarn, clickUtil, useProps, useRender, dateUtil, useExpose, makeSlots } from "@fast-china/utils";
import { isString, isObject, isNumber, isBoolean, isArray, isNull, isFunction, pick, omit } from "lodash-unified";
import { getTableDefaultSlots } from "./table.type.mjs";
import TableColumn from "./tableColumn.mjs";
import TableColumnsSettingDialog from "./tableColumnSettingDialog.mjs";
import TablePagination from "./tablePagination.mjs";
import TableSearchForm from "./tableSearchForm.mjs";
import { useTable } from "./useTable.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const tableProps = {
  /**
   * @description table data
   */
  data: {
    type: Array,
    default: () => []
  },
  /**
   * @description size of Table
   */
  size: useSizeProp,
  width: [String, Number],
  /**
   * @description table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles
   */
  height: [String, Number],
  /**
   * @description table's max-height. The legal value is a number or the height in px
   */
  maxHeight: [String, Number],
  /**
   * @description whether width of column automatically fits its container
   */
  fit: {
    type: Boolean,
    default: true
  },
  /**
   * @description whether Table is striped
   */
  stripe: Boolean,
  /**
   * @description whether Table has vertical border
   */
  border: Boolean,
  /**
   * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
   */
  rowKey: [String, Function],
  /**
   * @description whether Table header is visible
   */
  showHeader: {
    type: Boolean,
    default: true
  },
  /**
   * @description whether to display a summary row
   */
  showSummary: Boolean,
  /**
   * @description displayed text for the first column of summary row
   */
  sumText: String,
  /**
   * @description custom summary method
   */
  summaryMethod: Function,
  /**
   * @description function that returns custom class names for a row, or a string assigning class names for every row
   */
  rowClassName: [String, Function],
  /**
   * @description function that returns custom style for a row, or an object assigning custom style for every row
   */
  rowStyle: [Object, Function],
  /**
   * @description function that returns custom class names for a cell, or a string assigning class names for every cell
   */
  cellClassName: [String, Function],
  /**
   * @description function that returns custom style for a cell, or an object assigning custom style for every cell
   */
  cellStyle: [Object, Function],
  /**
   * @description function that returns custom class names for a row in table header, or a string assigning class names for every row in table header
   */
  headerRowClassName: [String, Function],
  /**
   * @description function that returns custom style for a row in table header, or an object assigning custom style for every row in table header
   */
  headerRowStyle: [Object, Function],
  /**
   * @description function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header
   */
  headerCellClassName: [String, Function],
  /**
   * @description function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header
   */
  headerCellStyle: [Object, Function],
  /**
   * @description whether current row is highlighted
   */
  highlightCurrentRow: Boolean,
  /**
   * @description key of current row, a set only prop
   */
  currentRowKey: [String, Number],
  /**
   * @description displayed text when data is empty. You can customize this area with `#empty`
   */
  emptyText: String,
  /**
   * @description set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop
   */
  expandRowKeys: Array,
  /**
   * @description whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data
   */
  defaultExpandAll: Boolean,
  /**
   * @description set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order
   */
  defaultSort: Object,
  /**
   * @description the `effect` of the overflow tooltip
   */
  tooltipEffect: String,
  /**
   * @description the options for the overflow tooltip, [see the following tooltip component](tooltip.html#attributes)
   */
  tooltipOptions: Object,
  /**
   * @description method that returns rowspan and colspan
   */
  spanMethod: Function,
  /**
   * @description controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected
   */
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  /**
   * @description horizontal indentation of tree data
   */
  indent: {
    type: Number,
    default: 16
  },
  /**
   * @description configuration for rendering nested data
   */
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children",
      checkStrictly: false
    })
  },
  /**
   * @description whether to lazy loading data
   */
  lazy: Boolean,
  /**
   * @description method for loading child row data, only works when `lazy` is true
   */
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  /**
   * @description sets the algorithm used to lay out table cells, rows, and columns
   */
  tableLayout: {
    type: String,
    default: "fixed"
  },
  /**
   * @description always show scrollbar
   */
  scrollbarAlwaysOn: Boolean,
  /**
   * @description ensure main axis minimum-size doesn't follow the content
   */
  flexible: Boolean,
  /**
   * @description whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns
   */
  showOverflowTooltip: [Boolean, Object],
  scrollbarTabindex: {
    type: [Number, String],
    default: void 0
  }
};
const faTableProps = {
  ...tableProps,
  /** @description whether Table has vertical border */
  border: {
    type: Boolean,
    default: true
  },
  /** @description whether current row is highlighted */
  highlightCurrentRow: {
    type: Boolean,
    default: true
  },
  /** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
  rowKey: {
    type: [String, Function],
    default: "id"
  },
  /** @description 组件封装，原生的已经失效 method that returns rowspan and colspan */
  spanMethod: {
    type: Function,
    validator: () => {
      consoleWarn("FaTable", "'spanMethod' 属性，组件已经封装，外部使用会失效。");
      return false;
    }
  },
  /** @description 表格Key */
  tableKey: {
    type: String,
    default: () => stringUtil.generateRandomString(8)
  },
  /** @description 表格数据 */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /** @description 请求api */
  requestApi: {
    type: definePropType(Function)
  },
  /** @description 接口请求数据回调 */
  dataCallback: {
    type: definePropType(Function)
  },
  /** 初始化参数 */
  initParam: definePropType([String, Number, Object]),
  /** @description 列配置 */
  columns: {
    type: definePropType([Array, Boolean]),
    default: () => []
  },
  /** @description 表格列改变 */
  columnsChange: {
    type: definePropType(Function)
  },
  /** @description 显示搜素 */
  showSearch: Boolean,
  /** @description 搜索表单 Grid布局列配置 */
  searchFormCols: {
    type: definePropType([String, Number, Object]),
    default: () => ({
      xs: 3,
      sm: 3,
      md: 4,
      lg: 5,
      xl: 6
    })
  },
  /** @description 搜索表单 */
  searchForm: {
    type: Boolean,
    default: true
  },
  /** @description 头部卡片 */
  headerCard: {
    type: Boolean,
    default: true
  },
  /** @description 刷新按钮 */
  refreshBtn: {
    type: Boolean,
    default: true
  },
  /** @description 搜索按钮 */
  searchBtn: {
    type: Boolean,
    default: true
  },
  /** @description 列配置按钮 */
  columnSettingBtn: {
    type: Boolean,
    default: true
  },
  /** @description 头部卡片右侧功能按钮 */
  toolBtn: {
    type: Boolean,
    default: true
  },
  /** @description 隐藏搜索时间 */
  hideSearchTime: Boolean,
  /** @description 搜索时间范围 */
  dataSearchRange: {
    type: definePropType(String),
    default: "Past3D"
  },
  /** @description 分页 */
  pagination: {
    type: Boolean,
    default: true
  },
  /** @description 隐藏图片 */
  hideImage: Boolean,
  /** @description 单选 */
  single: Boolean,
  /** @description 行点击选择 */
  rowClickSelection: Boolean,
  /** @description 树形数据 */
  treeData: Boolean,
  /** @description 配置选项 */
  props: {
    type: definePropType(Object),
    default: () => ({
      span: void 0,
      children: "children"
    })
  },
  /** @description 自动刷新，当传入 data 时候，如果存在更改则自动刷新 */
  autoRefresh: {
    type: Boolean,
    default: true
  },
  /**
   * 等价于 Table-Column 的 selectable
   * @description function that determines if a certain row can be selected, works when `type` is 'selection'
   */
  rowSelectable: Function
};
const faTableEmits = {
  /** @description 当用户手动勾选数据行的 Checkbox 时触发的事件 */
  select: (selection, row) => isArray(selection) && isObject(row),
  /** @description 当用户手动勾选全选 Checkbox 时触发的事件 */
  selectAll: (selection) => isArray(selection),
  /** @description 当选择项发生变化时会触发该事件 */
  selectionChange: (newSelection) => isArray(newSelection),
  /** @description 当单元格 hover 进入时会触发该事件 */
  cellMouseEnter: (row, column, cell, event) => isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
  /** @description 当单元格 hover 退出时会触发该事件 */
  cellMouseLeave: (row, column, cell, event) => isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
  /** @description 当某个单元格被点击时会触发该事件 */
  cellClick: (row, column, cell, event) => isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
  /** @description 当某个单元格被双击击时会触发该事件 */
  cellDblclick: (row, column, cell, event) => isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
  /** @description 当某个单元格被鼠标右键点击时会触发该事件 */
  cellContextmenu: (row, column, cell, event) => isObject(row) && isObject(column) && cell instanceof HTMLTableCellElement && event instanceof Event,
  /** @description 当某一行被点击时会触发该事件 */
  rowClick: (row, column, event) => isObject(row) && isObject(column) && event instanceof Event,
  /** @description 当某一行被鼠标右键点击时会触发该事件 */
  rowContextmenu: (row, column, event) => isObject(row) && isObject(column) && event instanceof Event,
  /** @description 当某一行被双击时会触发该事件 */
  rowDblclick: (row, column, event) => isObject(row) && isObject(column) && event instanceof Event,
  /** @description 当某一列的表头被点击时会触发该事件 */
  headerClick: (column, event) => isObject(column) && event instanceof Event,
  /** @description 当某一列的表头被鼠标右键点击时触发该事件 */
  headerContextmenu: (column, event) => isObject(column) && event instanceof Event,
  /** @description 当表格的排序条件发生变化的时候会触发该事件 */
  sortChange: (data) => isObject(data),
  /** @description column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
  filterChange: (newFilters) => isString(newFilters) || isNumber(newFilters) || isBoolean(newFilters) || isObject(newFilters),
  /** @description 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
  currentChange: (currentRow, oldCurrentRow) => isObject(currentRow) && (isNull(oldCurrentRow) || isObject(oldCurrentRow)),
  /** @description 当拖动表头改变了列的宽度的时候会触发该事件 */
  headerDragend: (newWidth, oldWidth, column, event) => isNumber(newWidth) && isNumber(oldWidth) && isObject(column) && event instanceof MouseEvent,
  /** @description 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
  expandChange: (row, expanded) => isObject(row) && (isBoolean(expanded) || isArray(expanded)),
  /** @description 表格刷新事件 */
  refresh: (params) => isObject(params),
  /** @description 表格重置事件 */
  reset: (params) => isObject(params),
  /** @description 分页页码改变事件 */
  sizeChange: (pageSize) => isNumber(pageSize),
  /** @description 分页改变事件 */
  paginationChange: (pageIndex, pageSize) => isNumber(pageIndex) && isNumber(pageSize),
  /** @description 自定义单元格点击事件 */
  customCellClick: (emitName, {
    row,
    column,
    $index
  }) => isString(emitName) && isObject(row) && isObject(column) && isNumber($index)
};
const Table = /* @__PURE__ */ defineComponent({
  name: "FaTable",
  props: faTableProps,
  emits: faTableEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const {
      _globalSize,
      state,
      elementRef,
      tableRef,
      handleTableColumnAutoWidth,
      loadTableColumns,
      handleSizeChange,
      handlePaginationChange,
      defaultSearchTime,
      tableSearch,
      tableReset,
      doRender,
      doLoading,
      handleCustomCellClick
    } = useTable(props, slots, emit);
    const columnSettingRef = ref();
    let lastRowIndex = 0;
    const indexMethod = (index) => {
      var _a;
      if (index === 0) {
        lastRowIndex = 0;
      }
      if (((_a = state.spanColumns) == null ? void 0 : _a.length) > 0) {
        const rowspan = Number(state.tableSpanData["__table-index"][index]);
        if (rowspan === 0) {
          return lastRowIndex + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize + 1;
        } else {
          lastRowIndex++;
          return lastRowIndex + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize;
        }
      }
      return index + (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize + 1;
    };
    const handleSelect = (selection, row) => {
      if (props.single) {
        tableRef.value.clearSelection();
        if (selection.length > 0 && row) {
          tableRef.value.toggleRowSelection(row);
        }
      }
      emit("select", selection, row);
    };
    const handleSelectAll = (selection) => {
      if (props.single) {
        if (state.selected) {
          if (state.tableData.length > 0) {
            tableRef.value.clearSelection();
            tableRef.value.toggleRowSelection(state.tableData[0]);
          }
        } else {
          tableRef.value.clearSelection();
        }
      }
      emit("selectAll", selection);
    };
    const handleSelectionChange = (newSelection) => {
      newSelection.length === 0 ? state.selected = false : state.selected = true;
      if (props.single && newSelection.length > 0) {
        state.selectedList = [newSelection[newSelection.length - 1]];
      } else {
        state.selectedList = newSelection;
      }
      state.indeterminateSelectedListIds = state.indeterminateSelectedListIds.filter((f) => state.selectedListIds.some((s) => s === f));
      emit("selectionChange", state.selectedList);
    };
    const toggleRowIndeterminateSelection = (row, selected) => {
      const rowKey = isFunction(props.rowKey) ? props.rowKey(row) : row[props.rowKey];
      const curRow = state.tableData.find((f) => isFunction(props.rowKey) ? props.rowKey(f) : f[props.rowKey] === rowKey);
      if (selected === true) {
        if (!state.indeterminateSelectedListIds.some((s) => s === rowKey)) {
          state.indeterminateSelectedListIds.push(rowKey);
        }
        tableRef.value.toggleRowSelection(curRow, true);
      } else if (selected === false) {
        const fIndex = state.indeterminateSelectedListIds.findIndex((f) => f === rowKey);
        if (fIndex >= 0) {
          state.indeterminateSelectedListIds.splice(fIndex, 1);
        }
        tableRef.value.toggleRowSelection(curRow, false);
      } else {
        const fIndex = state.indeterminateSelectedListIds.findIndex((f) => f === rowKey);
        if (fIndex >= 0) {
          state.indeterminateSelectedListIds.splice(fIndex, 1);
        } else {
          state.indeterminateSelectedListIds.push(rowKey);
        }
        tableRef.value.toggleRowSelection(curRow);
      }
    };
    const handleSortChange = ({
      column,
      prop,
      order
    }) => {
      var _a, _b;
      if (!column.multiOrder) {
        column.multiOrder = "descending";
      } else if (column.multiOrder === "descending") {
        column.multiOrder = "ascending";
      } else {
        column.multiOrder = null;
      }
      state.searchParam.sortList = [.../* @__PURE__ */ new Set([...((_a = props.initParam) == null ? void 0 : _a.sortList) ?? [], ...((_b = state.searchParam) == null ? void 0 : _b.sortList) ?? []])];
      const orgColumn = state.orgColumns.find((f) => f.prop === prop);
      const enField = orgColumn.sortableField ?? orgColumn.prop ?? orgColumn.property;
      const fieldIndex = state.searchParam.sortList.findIndex((f) => f.enField === enField);
      if (!column.multiOrder) {
        state.searchParam.sortList.splice(fieldIndex, 1);
      } else if (fieldIndex === -1) {
        state.searchParam.sortList.push({
          enField,
          cnField: orgColumn.label,
          mode: column.multiOrder
        });
      } else {
        state.searchParam.sortList[fieldIndex].mode = column.multiOrder;
      }
      if (state.searchParam.sortList.length === 0) {
        delete state.searchParam.sortList;
      }
      emit("sortChange", {
        column,
        prop,
        order: column.multiOrder
      });
      tableSearch();
    };
    const handleCurrentChange = (currentRow, oldCurrentRow) => {
      if (!currentRow) {
        return;
      }
      if (props.rowClickSelection) {
        if (props.single && oldCurrentRow) {
          tableRef.value.toggleRowSelection(oldCurrentRow);
        }
        tableRef.value.toggleRowSelection(currentRow);
      }
      emit("currentChange", currentRow, oldCurrentRow);
    };
    const handleCellClassName = ({
      row,
      column,
      rowIndex,
      columnIndex
    }) => {
      let localCellClassName = null;
      if (column.type === "selection") {
        const rowKey = isFunction(props.rowKey) ? props.rowKey(row) : row[props.rowKey];
        if (state.indeterminateSelectedListIds.some((s) => s === rowKey)) {
          localCellClassName = "fa-table__selection-column__indeterminate";
        }
      }
      const columnInfo = state.tableColumns.find((f) => f.prop === column.property);
      if (columnInfo == null ? void 0 : columnInfo.dataDeleteField) {
        if (row && row[columnInfo.dataDeleteField] === true) {
          if (localCellClassName) {
            localCellClassName += " fa-table__data-delete-column";
          } else {
            localCellClassName = "fa-table__data-delete-column";
          }
        }
      }
      if ((columnInfo == null ? void 0 : columnInfo.type) === "submitInfo") {
        if (localCellClassName) {
          localCellClassName += " fa-table__line-height-normal-column";
        } else {
          localCellClassName = "fa-table__line-height-normal-column";
        }
      }
      if ((columnInfo == null ? void 0 : columnInfo.type) === "date" || (columnInfo == null ? void 0 : columnInfo.type) === "time" || (columnInfo == null ? void 0 : columnInfo.type) === "dateTime") {
        if (columnInfo == null ? void 0 : columnInfo.dateFix) {
          if (localCellClassName) {
            localCellClassName += " fa-table__line-height-normal-column";
          } else {
            localCellClassName = "fa-table__line-height-normal-column";
          }
        }
      }
      if (props.cellClassName) {
        let cellClassName = null;
        if (isString(props.cellClassName)) {
          cellClassName = props.cellClassName;
        } else {
          cellClassName = props.cellClassName({
            row,
            column,
            rowIndex,
            columnIndex
          });
        }
        if (!cellClassName) {
          return localCellClassName;
        }
        if (localCellClassName) {
          return `${localCellClassName} ${cellClassName}`;
        } else {
          return cellClassName;
        }
      } else {
        return localCellClassName;
      }
    };
    const handleHeaderCellClassName = ({
      row,
      column,
      rowIndex,
      columnIndex
    }) => {
      column.order = column.multiOrder;
      if (props.headerCellClassName) {
        if (isFunction(props.headerCellClassName)) {
          return props.headerCellClassName({
            row,
            column,
            rowIndex,
            columnIndex
          });
        } else {
          return props.headerCellClassName;
        }
      }
      return null;
    };
    const handleSpanMethod = ({
      row,
      column,
      rowIndex,
      columnIndex
    }) => {
      const pKey = column.property ?? column.columnKey;
      if (state.spanColumns.findIndex((f) => f.prop === pKey) !== -1) {
        const rowspan = Number(state.tableSpanData[pKey][rowIndex]);
        if (rowspan > 0) {
          return {
            rowspan,
            colspan: 1
          };
        }
        return {
          rowspan: 0,
          colspan: 0
        };
      }
      return {
        rowspan: 1,
        colspan: 1
      };
    };
    const handleHeaderDragend = async (newWidth, oldWidth, column, event) => {
      state.orgColumns.forEach((f) => {
        if (column.property === f.prop) {
          f.width = newWidth;
          f.smallWidth = newWidth;
        }
      });
      emit("headerDragend", newWidth, oldWidth, column, event);
      await clickUtil.debounceAsync(columnSettingRef.value.change, 500);
    };
    const handleImagePreview = (url) => {
      state.previewList = [url];
      state.imagePreview = true;
    };
    onMounted(async () => {
      state.initParam = props.initParam;
      loadTableColumns();
      defaultSearchTime();
      Object.keys(props.initParam ?? {}).forEach((key) => {
        state.searchParam[key] = props.initParam[key];
      });
      await tableSearch();
      watch(() => props.initParam, () => {
        Object.keys(props.initParam ?? {}).forEach((key) => {
          state.searchParam[key] = props.initParam[key];
        });
      }, {
        deep: true
      });
      watch(() => props.data, async () => {
        if (!props.requestApi && props.autoRefresh) {
          await tableSearch();
        }
      }, {
        deep: true,
        immediate: true
      });
      watchEffect(async () => {
        const element = elementRef.value;
        if (element) {
          const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
              const {
                width,
                height
              } = entry.contentRect;
              state.tableWidth = width;
              state.tableHeight = height;
            }
            clickUtil.debounceAsync(async () => {
              await handleTableColumnAutoWidth();
            }, 100);
          });
          observer.observe(element);
          return () => {
            observer.disconnect();
          };
        }
      });
    });
    onActivated(async () => {
      await handleTableColumnAutoWidth();
    });
    const searchFormSlotNames = computed(() => state.searchColumns.filter((f) => f.search.slot).map((m) => m.search.slot));
    const tableColumnSlotNames = computed(() => state.tableColumns.filter((f) => f.slot).map((m) => m.slot));
    const tableColumnOmitNames = ["multiOrder", "columnID", "order", "sortableField", "disabledSortable", "spanProp", "pureSearch", "search"];
    const elTableProps = useProps(props, tableProps, ["data", "spanMethod", "headerCellClassName", "cellClassName"]);
    useRender(() => createVNode("div", {
      "ref": elementRef,
      "class": ["fa-table", `fa-table-${_globalSize.value}`, `fa-table__${props.tableKey ?? "notFound"}`, {
        fa__click__disabled: state.loading
      }],
      "style": {
        "--fa-table-width": `${state.tableWidth ? `${state.tableWidth}px` : ""}`,
        "--fa-table-height": `${state.tableHeight ? `${state.tableHeight}px` : ""}`
      }
    }, [createVNode(TableSearchForm, {
      "show": props.searchForm && state.showSearch,
      "cols": props.searchFormCols,
      "search": tableSearch,
      "reset": tableReset
    }, pick(slots, searchFormSlotNames.value)), slots.topHeader && createVNode("div", {
      "class": "el-card fa-table__header"
    }, [slots.topHeader({
      ...{
        search: tableSearch
      },
      ...getTableDefaultSlots(state)
    })]), createVNode("div", {
      "class": "el-card fa-table__main"
    }, [props.headerCard && createVNode("div", {
      "class": "fa-table__main-header"
    }, [createVNode("div", {
      "class": "fa-table__main-header-left"
    }, [slots.header && slots.header({
      ...{
        search: tableSearch
      },
      ...getTableDefaultSlots(state)
    })]), createVNode("div", {
      "class": "fa-table__main-header-right"
    }, [props.toolBtn && createVNode(Fragment, null, [createVNode("div", {
      "class": "fa-table__main-header-right__div-search"
    }, [createVNode(ElInput, {
      "class": "fa-table__main-header-right__input-search",
      "disabled": state.loading,
      "prefixIcon": Search,
      "placeholder": "关键字搜索",
      "modelValue": state.searchParam.searchValue,
      "modelModifiers": {
        "trim": true
      },
      "onUpdate:modelValue": ($event) => state.searchParam.searchValue = $event,
      "clearable": true,
      "onCompositionupdate": (e) => {
        state.searchValueUpdate = e.data;
      },
      "onCompositionend": (e) => {
        state.searchValueUpdate = "";
      },
      "onChange": () => tableSearch()
    }, null), createVNode("div", {
      "class": "fa-table__main-header-right__div-search__hidden"
    }, [state.searchParam.searchValue, state.searchValueUpdate])]), props.requestApi && !props.hideSearchTime && createVNode(ElDatePicker, {
      "class": "fa-table__main-header-right__data-search",
      "popperClass": "fa-table__main-header-right__data-search__popper",
      "disabled": state.loading,
      "type": "daterange",
      "modelValue": state.searchParam.searchTimeList,
      "onUpdate:modelValue": ($event) => state.searchParam.searchTimeList = $event,
      "defaultTime": dateUtil.getDefaultTime(),
      "shortcuts": dateUtil.getShortcuts(),
      "valueFormat": "YYYY-MM-DD HH:mm:ss",
      "disabledDate": dateUtil.getDisabledDate,
      "clearable": false,
      "teleported": false,
      "unlinkPanels": true,
      "onChange": () => tableSearch()
    }, null), slots.toolButton && slots.toolButton({
      ...{
        search: tableSearch
      },
      ...getTableDefaultSlots(state)
    }), props.refreshBtn && createVNode(ElButton, {
      "loading": state.loading,
      "loadingIcon": Eleme,
      "title": "刷新",
      "circle": true,
      "icon": Refresh,
      "onClick": () => tableSearch()
    }, null), props.searchBtn && state.searchColumns.length > 0 && createVNode(ElButton, {
      "loading": state.loading,
      "loadingIcon": Eleme,
      "title": state.showSearch ? "隐藏搜索栏" : "显示搜索栏",
      "circle": true,
      "icon": Search,
      "onClick": () => state.showSearch = !state.showSearch
    }, null), props.columnSettingBtn && !props.columns && createVNode(ElButton, {
      "loading": state.loading,
      "loadingIcon": Eleme,
      "title": "表格列配置",
      "circle": true,
      "icon": Setting,
      "onClick": () => columnSettingRef.value.open()
    }, null), slots.toolButtonAdv && createVNode(ElDropdown, {
      "title": "高级操作",
      "trigger": "click"
    }, {
      default: () => createVNode(ElButton, {
        "loading": state.loading,
        "loadingIcon": Eleme,
        "circle": true,
        "icon": More
      }, null),
      dropdown: () => {
        let _slot;
        return createVNode(ElDropdownMenu, null, _isSlot(_slot = slots.toolButtonAdv({
          ...{
            search: tableSearch
          },
          ...getTableDefaultSlots(state)
        })) ? _slot : {
          default: () => [_slot]
        });
      }
    })])])]), withDirectives(createVNode(ElTable, mergeProps(elTableProps.value, {
      "ref": tableRef,
      "element-loading-text": state.loadingText,
      "data": state.tableData,
      "spanMethod": handleSpanMethod,
      "headerCellClassName": handleHeaderCellClassName,
      "cellClassName": handleCellClassName,
      "onSelectionChange": handleSelectionChange,
      "onSortChange": handleSortChange,
      "onSelect": handleSelect,
      "onSelectAll": handleSelectAll,
      "onCurrentChange": handleCurrentChange,
      "onHeaderDragend": handleHeaderDragend,
      "onCellMouseEnter": (row, column, cell, event) => emit("cellMouseEnter", row, column, cell, event),
      "onCellMouseLeave": (row, column, cell, event) => emit("cellMouseLeave", row, column, cell, event),
      "onCellClick": (row, column, cell, event) => emit("cellClick", row, column, cell, event),
      "onCellDblclick": (row, column, cell, event) => emit("cellDblclick", row, column, cell, event),
      "onCellContextmenu": (row, column, cell, event) => emit("cellContextmenu", row, column, cell, event),
      "onRowClick": (row, column, event) => emit("rowClick", row, column, event),
      "onRowContextmenu": (row, column, event) => emit("rowContextmenu", row, column, event),
      "onRowDblclick": (row, column, event) => emit("rowDblclick", row, column, event),
      "onHeaderClick": (column, event) => emit("headerClick", column, event),
      "onHeaderContextmenu": (column, event) => emit("headerContextmenu", column, event),
      "onFilterChange": (newFilters) => emit("filterChange", newFilters),
      "onExpandChange": (row, expanded) => emit("expandChange", row, expanded)
    }), {
      append: () => slots.append && slots.append(),
      empty: () => createVNode("div", {
        "class": "fa-table__empty"
      }, [slots.empty ? slots.empty() : createVNode(Fragment, null, [createVNode(ElIcon, null, {
        default: () => [createVNode(NotData, null, null)]
      }), createVNode("div", null, [createTextVNode("暂无数据")])])]),
      default: () => {
        var _a;
        return createVNode(Fragment, null, [createVNode(ElTableColumn, {
          "className": "fa-table__index-column",
          "type": "index",
          "fixed": "left",
          "width": state.tablePagination.pageIndex * state.tablePagination.pageSize >= 100 ? state.tablePagination.pageIndex * state.tablePagination.pageSize >= 1e3 ? 50 : 40 : 30,
          "align": "center",
          "index": indexMethod,
          "showOverflowTooltip": false,
          "resizable": false,
          "columnKey": "__table-index"
        }, null), createVNode(ElTableColumn, {
          "className": "fa-table__selection-column",
          "type": "selection",
          "fixed": "left",
          "width": 35,
          "align": "center",
          "reserveSelection": true,
          "showOverflowTooltip": false,
          "resizable": false,
          "columnKey": "__table-selection",
          "selectable": props.rowSelectable
        }, null), slots.operation && createVNode(ElTableColumn, {
          "fixed": "right",
          "width": state.operationColumnWidth,
          "headerAlign": "center",
          "align": "center",
          "showOverflowTooltip": false,
          "className": "fa-table__operation-column",
          "resizable": false,
          "columnKey": "__table-operation"
        }, {
          header: () => createVNode("div", {
            "class": "fa-table__auto-width-column__cell-header __fa-table__auto-width-column__cell-header____table-operation"
          }, [createVNode("span", null, [createTextVNode("操作")])]),
          default: ({
            row,
            column,
            $index
          }) => createVNode("div", {
            "class": "fa-table__auto-width-column__cell __fa-table__auto-width-column__cell____table-operation"
          }, [slots.operation({
            row,
            column,
            $index,
            ...{
              search: tableSearch
            },
            ...getTableDefaultSlots(state)
          })])
        }), ((_a = state.tableColumns) == null ? void 0 : _a.length) === 0 ? slots.default && slots.default() : state.tableColumns.map((col) => col.show && (col.type === "expand" ? createVNode(ElTableColumn, mergeProps(col, {
          "width": 35,
          "fixed": col.fixed ?? "left",
          "resizable": false
        }), {
          default: ({
            row,
            column,
            $index
          }) => createVNode(Fragment, null, [col.render && col.render({
            row,
            column,
            $index,
            ...getTableDefaultSlots(state)
          }), col.slot && slots[col.slot] && slots[col.slot]({
            row,
            column,
            $index,
            ...getTableDefaultSlots(state)
          })])
        }) : col.prop && createVNode(TableColumn, mergeProps(omit(col, tableColumnOmitNames), {
          "resizable": true,
          "onImagePreview": handleImagePreview,
          "onCustomCellClick": handleCustomCellClick
        }), pick(slots, tableColumnSlotNames.value))))]);
      }
    }), [[resolveDirective("loading"), state.loading]]), createVNode("div", {
      "class": "fa-table__main-footer"
    }, [createVNode("div", {
      "class": "fa-table__main-footer__left"
    }, [slots.footer && slots.footer({
      ...{
        search: tableSearch
      },
      ...getTableDefaultSlots(state)
    })]), slots.pagination ? slots.pagination({
      pageIndex: state.tablePagination.pageIndex,
      pageSize: state.tablePagination.pageSize,
      totalRows: state.tablePagination.totalRows,
      handleSizeChange,
      handlePaginationChange
    }) : createVNode(Fragment, null, [props.pagination ? createVNode(TablePagination, {
      "sizeChange": handleSizeChange,
      "currentChange": handlePaginationChange
    }, null) : createVNode(ElPagination, {
      "class": "fa-table-pagination",
      "size": "small",
      "layout": "total",
      "total": state.tableData.length
    }, null)])])]), state.imagePreview && createVNode(ElImageViewer, {
      "closeOnPressEscape": true,
      "hideOnClickModal": true,
      "teleported": true,
      "onClose": () => state.imagePreview = false,
      "urlList": state.previewList
    }, null), createVNode(TableColumnsSettingDialog, {
      "ref": columnSettingRef,
      "save": props.columnsChange
    }, null)]));
    return useExpose(expose, {
      /** @description 用于多选表格，清空用户的选择 */
      clearSelection: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.clearSelection;
      }),
      /** @description 返回当前选中的行 */
      getSelectionRows: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.getSelectionRows;
      }),
      /** @description 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
      toggleRowSelection: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.toggleRowSelection;
      }),
      /** @description 用于多选表格，切换全选和全不选 */
      toggleAllSelection: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.toggleAllSelection;
      }),
      /** @description 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。 */
      toggleRowExpansion: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.toggleRowExpansion;
      }),
      /** @description 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。 */
      setCurrentRow: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.setCurrentRow;
      }),
      /** @description 用于清空排序条件，数据会恢复成未排序的状态 */
      clearSort: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.clearSort;
      }),
      /** @description 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器 */
      clearFilter: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.clearFilter;
      }),
      /** @description 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局 */
      doLayout: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.doLayout;
      }),
      /** @description 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。 */
      sort: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.sort;
      }),
      /** @description 滚动到一组特定坐标 */
      scrollTo: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.scrollTo;
      }),
      /** @description 设置垂直滚动位置 */
      setScrollTop: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.setScrollTop;
      }),
      /** @description 设置水平滚动位置 */
      setScrollLeft: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.setScrollLeft;
      }),
      /** @description 获取表列的 context */
      columns: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.columns;
      }),
      /** @description 适用于 lazy Table, 需要设置 rowKey, 更新 key children */
      updateKeyChildren: computed(() => {
        var _a;
        return (_a = tableRef.value) == null ? void 0 : _a.updateKeyChildren;
      }),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 表格数据 */
      tableData: computed(() => state.tableData),
      /** @description 分页数据 */
      tablePagination: computed(() => state.tablePagination),
      /** @description 搜索参数 */
      searchParam: computed(() => state.searchParam),
      /** @description 选中状态 */
      selected: computed(() => state.selected),
      /** @description 选中数据列表 */
      selectedList: computed(() => state.selectedList),
      /** @description 选中数据 rowKey 列表 */
      selectedListIds: computed(() => state.selectedListIds),
      /** @description 部分选中数据 rowKey 列表 */
      indeterminateSelectedListIds: computed(() => state.indeterminateSelectedListIds),
      /** @description 表格宽度 */
      tableWidth: computed(() => state.tableWidth),
      /** @description 表格高度 */
      tableHeight: computed(() => state.tableHeight),
      /** @description 部分选中（样式不一样而已），用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 */
      toggleRowIndeterminateSelection,
      /** @description 异步方法，刷新表格 */
      refresh: tableSearch,
      /** @description 异步方法，重置表格 */
      reset: tableReset,
      /** @description 对 Table 进行重新渲染。当 TableKey 发生变化的时候可以通过此方法重新渲染表格 */
      doRender,
      /** @description Table 加载 */
      doLoading
    });
  }
});
export {
  Table as default,
  faTableEmits,
  faTableProps,
  tableProps
};
//# sourceMappingURL=table.mjs.map
