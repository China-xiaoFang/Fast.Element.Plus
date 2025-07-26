import { defineComponent, inject, createVNode } from "vue";
import { ElMessageBox, ElPagination } from "element-plus";
import { useRender, definePropType } from "@fast-china/utils";
import { isNumber, isNull } from "lodash-unified";
import { tableStateKey } from "./useTable.mjs";
const TablePagination = /* @__PURE__ */ defineComponent({
  name: "FaTablePagination",
  props: {
    /** @description 页码 */
    pageSizes: {
      type: definePropType(Array),
      default: [20, 30, 50, 100, 200, 300, 500, 1e3]
    }
  },
  emits: {
    /** @description 页码改变 */
    sizeChange: (pageSize) => isNumber(pageSize) || isNull(pageSize),
    /** @description 当前页数改变 */
    currentChange: (currentPage) => isNumber(currentPage) || isNull(currentPage)
  },
  setup(props, {
    emit
  }) {
    const tableState = inject(tableStateKey);
    const handleSizeChange = (pageSize) => {
      if (pageSize > 100) {
        ElMessageBox.confirm("当前页码已经超过100条/页，可能会造成页面卡顿，是否继续？", {
          confirmButtonText: "继续",
          type: "warning"
        }).then(() => {
          emit("sizeChange", pageSize);
        });
      } else {
        emit("sizeChange", pageSize);
      }
    };
    useRender(() => createVNode(ElPagination, {
      "class": "fa-table-pagination",
      "size": "small",
      "currentPage": tableState.tablePagination.pageIndex,
      "onUpdate:currentPage": ($event) => tableState.tablePagination.pageIndex = $event,
      "pageSize": tableState.tablePagination.pageSize,
      "onUpdate:pageSize": ($event) => tableState.tablePagination.pageSize = $event,
      "pageSizes": props.pageSizes,
      "background": true,
      "layout": "jumper, prev, pager, next, sizes, total",
      "total": tableState.tablePagination.totalRows,
      "onSizeChange": handleSizeChange,
      "onCurrentChange": (currentPage) => emit("currentChange", currentPage)
    }, null));
  }
});
export {
  TablePagination as default
};
//# sourceMappingURL=tablePagination.mjs.map
