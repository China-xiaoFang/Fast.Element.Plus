import { withInstall, withNoopInstall } from "@fast-china/utils";
import Table from "./src/table.mjs";
import { tableProps } from "./src/table.mjs";
import TableColumn from "./src/tableColumn.mjs";
import { tableColumnProps } from "./src/tableColumn.mjs";
import TableColumnsSettingDialog from "./src/tableColumnSettingDialog.mjs";
import TablePagination from "./src/tablePagination.mjs";
import TableSearchForm from "./src/tableSearchForm.mjs";
import TableSearchFormItem from "./src/tableSearchFormItem.mjs";
import { PagedSearchTypeEnum } from "./src/page.type.mjs";
import "./src/table.state.mjs";
import { getTableDefaultSlots } from "./src/table.type.mjs";
import { tableUtil } from "./utils/table.mjs";
const FaTable = withInstall(Table, {
  TableColumn,
  TableColumnsSettingDialog,
  TablePagination,
  TableSearchForm,
  TableSearchFormItem
});
const FaTableColumn = withNoopInstall(TableColumn);
export {
  FaTable,
  FaTableColumn,
  PagedSearchTypeEnum,
  FaTable as default,
  getTableDefaultSlots,
  tableColumnProps,
  tableProps,
  tableUtil
};
//# sourceMappingURL=index.mjs.map
