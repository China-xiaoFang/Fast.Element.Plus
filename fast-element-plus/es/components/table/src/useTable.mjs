import { ref, reactive, provide, computed, nextTick, watch } from "vue";
import { useGlobalSize, dayjs } from "element-plus";
import { consoleError, clickUtil, execFunction } from "@fast-china/utils";
import { isFunction, isArray } from "lodash-unified";
import { tableUtil } from "../utils/table.mjs";
import { getTableDefaultSlots } from "./table.type.mjs";
const tableStateKey = Symbol("tableState");
const enumMapKey = Symbol("enumMap");
const useTable = (props, slots, emit) => {
  const _globalSize = useGlobalSize();
  const elementRef = ref();
  const tableRef = ref();
  const enumMap = reactive(/* @__PURE__ */ new Map());
  provide(enumMapKey, enumMap);
  const state = reactive({
    loading: false,
    loadingText: "加载中...",
    orgColumns: [],
    tableColumns: computed(() => state.orgColumns.filter((f) => f.prop && !f.pureSearch)),
    searchColumns: computed(
      () => state.orgColumns.filter((f) => f.pureSearch || f.search).sort((a, b) => {
        return a.search?.order - b.search?.order;
      })
    ),
    spanColumns: computed(() => [
      ...state.orgColumns.filter((f) => f.spanProp).map((col) => {
        return {
          prop: col?.prop,
          spanProp: col?.spanProp
        };
      }),
      ...props.props.span ? [
        { prop: "__table-index", spanProp: props.props.span },
        { prop: "__table-selection", spanProp: props.props.span },
        { prop: "__table-operation", spanProp: props.props.span }
      ] : []
    ]),
    tableData: [],
    tableSpanData: computed(() => {
      if (state.spanColumns?.length > 0 && state.tableData?.length > 0) {
        const result = [];
        state.spanColumns.forEach((item) => {
          result[item.prop] = new Array(state.tableData.length).fill(1, 0, 1).fill(0, 1);
          result[`${item.prop}-index`] = 0;
        });
        for (let i = 1; i < state.tableData.length; i++) {
          state.spanColumns.forEach((item) => {
            if (state.tableData[i][item.spanProp] === state.tableData[i - 1][item.spanProp]) {
              result[item.prop][result[`${item.prop}-index`]]++;
            } else {
              result[`${item.prop}-index`] = i;
              result[item.prop][i] = 1;
            }
          });
        }
        return result;
      }
      return [];
    }),
    tablePagination: {
      pageIndex: 1,
      pageSize: 20,
      totalRows: 0
    },
    initParam: {},
    searchParam: {},
    searchValueUpdate: "",
    searchForm: props.searchForm,
    hideImage: computed(() => props.hideImage),
    selected: false,
    selectedList: [],
    selectedListIds: computed(() => state.selectedList.map((item) => isFunction(props.rowKey) ? props.rowKey(item) : item[props.rowKey])),
    indeterminateSelectedListIds: [],
    responseConfig: void 0,
    operationColumnWidth: computed(() => {
      const findAutoCol = state.autoColumnWidth.find((f) => f.prop === "__table-operation");
      if (findAutoCol) {
        return `${findAutoCol.width}px`;
      }
      switch (_globalSize.value) {
        case "large":
        case "default":
          return "54px";
        case "small":
          return "42px";
        default:
          return "auto";
      }
    }),
    imagePreview: false,
    previewList: [],
    tableWidth: void 0,
    tableHeight: void 0,
    autoColumnWidth: []
  });
  provide(tableStateKey, state);
  const handleTableColumnAutoWidth = () => {
    state.loading = true;
    state.loadingText = "加载中...";
    state.autoColumnWidth = [];
    const autoWidthColumns = state.tableColumns.filter((f) => f.autoWidth);
    if (slots?.operation) {
      autoWidthColumns.push({
        prop: "__table-operation"
      });
    }
    if (autoWidthColumns?.length > 0) {
      const otherWidth = _globalSize.value === "default" ? 25 : 17;
      nextTick(() => {
        const tableDom = document.querySelector(`.fa-table__${props.tableKey}`);
        if (tableDom) {
          autoWidthColumns.forEach((item) => {
            const headerColumnDom = tableDom.querySelector(`.__fa-table__auto-width-column__cell-header__${item?.prop}`);
            const cellColumnDoms = tableDom.querySelectorAll(`.__fa-table__auto-width-column__cell__${item?.prop}`);
            let maxWidth = 0;
            if (headerColumnDom) {
              maxWidth = Math.ceil(headerColumnDom.scrollWidth) + otherWidth;
              if (item?.sortable) {
                maxWidth += 24;
              }
            }
            cellColumnDoms.forEach((cellDom) => {
              const curWidth = Math.ceil(cellDom.scrollWidth) + otherWidth;
              if (curWidth > maxWidth) {
                maxWidth = curWidth;
              }
            });
            const findInfo = state.autoColumnWidth.find((f) => f.prop === item?.prop);
            if (findInfo) {
              findInfo.width = Math.max(findInfo.width, maxWidth);
            } else {
              state.autoColumnWidth.push({
                prop: item?.prop,
                width: maxWidth
              });
            }
          });
        }
      });
    }
    state.loading = false;
  };
  const handleTableData = (data) => {
    if (props.treeData) {
      const result = [];
      data.forEach((row) => {
        const rowList = row[props.props.children];
        if (isArray(rowList)) {
          rowList.forEach((cRow) => result.push({ ...row, ...cRow }));
        } else {
          result.push({ ...row, ...rowList || {} });
        }
      });
      return result;
    } else {
      return data;
    }
  };
  const getRequestParam = () => {
    const params = { ...state.searchParam, ...props.pagination ? state.tablePagination : {} };
    delete params.totalRows;
    return params;
  };
  const loadData = async () => {
    state.loading = true;
    state.loadingText = "加载中...";
    if (props.requestApi) {
      const params = getRequestParam();
      emit("refresh", params);
      let pageData = [];
      try {
        const resData = await props.requestApi(params);
        props.dataCallback && props.dataCallback(resData);
        if (props.pagination) {
          const pageRes = resData;
          pageData = pageRes.rows;
          Object.assign(state.tablePagination, {
            pageIndex: pageRes.pageIndex,
            pageSize: pageRes.pageSize,
            totalRows: pageRes.totalRows
          });
        } else {
          pageData = resData;
          Object.assign(state.tablePagination, {
            pageIndex: 1,
            pageSize: 0,
            totalRows: pageData.length
          });
        }
        state.tableData = handleTableData(pageData);
      } catch (error) {
        consoleError("FaTable", error);
        state.tableData = [];
      } finally {
        state.loading = false;
      }
    } else {
      emit("refresh", { searchValue: state.searchParam.searchValue });
      let _value = handleTableData(props.data);
      _value = _value.filter((f) => {
        if (!state.searchParam.searchValue) return true;
        return state.tableColumns.some((col) => {
          return f[col.prop]?.toString()?.toLowerCase().includes(state.searchParam.searchValue?.toLowerCase());
        });
      });
      if (state.searchParam.sortList?.length > 0) {
        _value = _value.sort(tableUtil.arrayDynamicSort(state.searchParam.sortList));
      }
      if (props.pagination) {
        Object.assign(state.tablePagination, {
          totalRows: _value.length
        });
        const pageStart = (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize;
        const pageEnd = pageStart + state.tablePagination.pageSize;
        state.tableData = _value.slice(pageStart, pageEnd);
      } else {
        state.tableData = _value;
        Object.assign(state.tablePagination, {
          pageIndex: 1,
          pageSize: 0,
          totalRows: _value.length
        });
      }
      state.loading = false;
    }
    handleTableColumnAutoWidth();
  };
  const loadTableColumns = () => {
    let columns = props.columns;
    columns.forEach((col) => {
      if (col.pureSearch || col.search) {
        col.search.key ??= col.prop;
        col.search.label ??= col.label;
        if (col.search.defaultValue) {
          state.searchParam[col.search.key] = col.search.defaultValue;
        }
      }
    });
    columns = columns.sort((a, b) => {
      return a?.order - b?.order;
    });
    state.orgColumns = tableUtil.flatColumns(columns, enumMap);
  };
  const handleSizeChange = (pageSize) => {
    state.tablePagination.pageIndex = 1;
    state.tablePagination.pageSize = pageSize;
    emit("sizeChange", pageSize);
    emit("paginationChange", 1, pageSize);
    loadData();
  };
  const handlePaginationChange = (val) => {
    state.tablePagination.pageIndex = val;
    emit("sizeChange", state.tablePagination.pageSize);
    emit("paginationChange", val, state.tablePagination.pageSize);
    loadData();
  };
  const updatedTotalParam = () => {
    const newSearchParam = {};
    for (const key in state.searchParam) {
      if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
        newSearchParam[key] = state.searchParam[key];
      } else if (!state.searchParam[key]) {
        delete state.searchParam[key];
      }
    }
    Object.assign(state.searchParam, newSearchParam);
  };
  const defaultSearchTime = () => {
    if (props.hideSearchTime) {
      state.searchParam.searchTimeList = void 0;
    } else {
      const end = /* @__PURE__ */ new Date();
      const start = /* @__PURE__ */ new Date();
      switch (props.dataSearchRange) {
        case "Past1D":
          start.setDate(start.getDate() - 1);
          break;
        case "Past3D":
          start.setDate(start.getDate() - 3);
          break;
        case "Past1W":
          start.setDate(start.getDate() - 7);
          break;
        case "Past1M":
          start.setMonth(start.getMonth() - 1);
          break;
        case "Past3M":
          start.setMonth(start.getMonth() - 3);
          break;
        case "Past6M":
          start.setMonth(start.getMonth() - 6);
          break;
        case "Past1Y":
          start.setFullYear(start.getFullYear() - 1);
          break;
        case "Past3Y":
          start.setFullYear(start.getFullYear() - 3);
          break;
      }
      state.searchParam.searchTimeList = [dayjs(start).format("YYYY-MM-DD 00:00:00"), dayjs(end).format("YYYY-MM-DD 23:59:59")];
    }
  };
  const tableSearch = async () => {
    state.tablePagination.pageIndex = 1;
    updatedTotalParam();
    await loadData();
  };
  const tableReset = async () => {
    state.tablePagination.pageIndex = 1;
    state.searchParam = {};
    defaultSearchTime();
    Object.keys(state.initParam ?? {}).forEach((key) => {
      state.searchParam[key] = state.initParam[key];
    });
    emit("reset", state.searchParam);
    await loadData();
  };
  const doRender = async () => {
    state.orgColumns = [];
    state.autoColumnWidth = [];
    state.tableData = [];
    await clickUtil.debounceAsync(async () => {
      loadTableColumns();
      await tableSearch();
    }, 300);
  };
  const doLoading = (loadingFunction, loadingText = "加载中...") => {
    state.loading = true;
    state.loadingText = loadingText;
    execFunction(loadingFunction).then().catch((error) => {
      consoleError("FaTable", error);
    }).finally(() => {
      state.loading = false;
    });
  };
  const handleCustomCellClick = (emitName, { row, column, $index }) => {
    emit("customCellClick", emitName, { row, column, $index, ...getTableDefaultSlots(state) });
  };
  watch(
    () => props.tableKey,
    async () => {
      await doRender();
    }
  );
  watch(
    () => props.searchForm,
    (newValue) => {
      state.searchForm = newValue;
    }
  );
  return {
    _globalSize,
    state,
    elementRef,
    tableRef,
    handleTableColumnAutoWidth,
    getRequestParam,
    loadTableColumns,
    handleSizeChange,
    handlePaginationChange,
    defaultSearchTime,
    tableSearch,
    tableReset,
    doRender,
    doLoading,
    handleCustomCellClick
  };
};
export {
  enumMapKey,
  tableStateKey,
  useTable
};
//# sourceMappingURL=useTable.mjs.map
