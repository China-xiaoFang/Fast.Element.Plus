import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { FaTableSlots, default as Table, faTableEmits, faTableProps, tableProps } from "./src/table";
import { default as TableColumn, tableColumnProps } from "./src/tableColumn";
import { default as TableColumnsSettingDialog } from "./src/tableColumnSettingDialog";
import { default as TablePagination } from "./src/tablePagination";
import { default as TableSearchForm } from "./src/tableSearchForm";
import { default as TableSearchFormItem } from "./src/tableSearchFormItem";

export declare const FaTable: TSXWithInstall<typeof Table> & {
	TableColumn: typeof TableColumn;
	TableColumnsSettingDialog: typeof TableColumnsSettingDialog;
	TablePagination: typeof TablePagination;
	TableSearchForm: typeof TableSearchForm;
	TableSearchFormItem: typeof TableSearchFormItem;
};
export default FaTable;

export declare const FaTableColumn: TSXWithInstall<typeof TableColumn>;

export * from "./src/page.type";
export * from "./src/table.state";
export * from "./src/table.type";

export { tableProps, tableColumnProps, faTableProps, faTableEmits, FaTableSlots };

export declare type FaTableInstance = InstanceType<typeof Table>;

export declare type FaTableProps = ExtractPropTypes<typeof faTableProps>;

export declare type FaTableEmits = typeof faTableEmits;

export declare type FaTableColumnInstance = InstanceType<typeof TableColumn>;

export * from "./utils/table";
