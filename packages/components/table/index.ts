import { withInstall, withNoopInstall } from "@fast-china/utils";
import Table, { tableProps } from "./src/table";
import TableColumn, { tableColumnProps } from "./src/tableColumn";
import TableColumnsSettingDialog from "./src/tableColumnSettingDialog";
import TablePagination from "./src/tablePagination";
import TableSearchForm from "./src/tableSearchForm";
import TableSearchFormItem from "./src/tableSearchFormItem";
import type { faTableEmits, faTableProps } from "./src/table";
import type { ExtractPropTypes } from "vue";

export const FaTable = withInstall(Table, {
	TableColumn,
	TableColumnsSettingDialog,
	TablePagination,
	TableSearchForm,
	TableSearchFormItem,
});
export default FaTable;

export const FaTableColumn = withNoopInstall(TableColumn);

export * from "./src/page.type";
export * from "./src/table.state";
export * from "./src/table.type";

export { tableProps, tableColumnProps, faTableProps, faTableEmits };

export type FaTableInstance = InstanceType<typeof Table>;

export type FaTableProps = ExtractPropTypes<typeof faTableProps>;

export type FaTableEmits = typeof faTableEmits;

export type FaTableColumnInstance = InstanceType<typeof TableColumn>;

export * from "./utils/table";
