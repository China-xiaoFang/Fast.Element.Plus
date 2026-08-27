import FastElementPlus, {
	FaButton,
	type FaButtonInstance,
	FaDialog,
	type FaDialogInstance,
	type FaDialogSlots,
	type FaFormInstance,
	type FaImageInstance,
	type FaImageSlots,
	type FaSelectV2Instance,
	FaTable,
	FaTableColumn,
	type FaTableInstance,
	FaTree,
	type FaTreeInstance,
	type FaTreeSelectInstance,
	type FaUploadSlots,
	install,
	useLoading,
	useOverlay,
	vCopy,
	version,
} from "fast-element-plus";
import "fast-element-plus/global";
import type { App, Plugin } from "vue";

const plugin: Plugin = FastElementPlus;
const installPlugin: (app: App) => void = install;
const currentVersion: string = version;

const button = FaButton;
const dialog = FaDialog;
const table = FaTable;
const tableColumn = FaTableColumn;
const tableColumnsSettingDialog = FaTable.TableColumnsSettingDialog;
const tablePagination = FaTable.TablePagination;
const tableSearchForm = FaTable.TableSearchForm;
const tableSearchFormItem = FaTable.TableSearchFormItem;
const tree = FaTree;

const buttonInstance = {} as FaButtonInstance;
const dialogInstance = {} as FaDialogInstance;
const tableInstance = {} as FaTableInstance;
const formInstance = {} as FaFormInstance;
const imageInstance = {} as FaImageInstance;
const selectV2Instance = {} as FaSelectV2Instance;
const treeInstance = {} as FaTreeInstance;
const treeSelectInstance = {} as FaTreeSelectInstance;
const dialogSlots = {} as FaDialogSlots;
const imageSlots = {} as FaImageSlots;
const uploadSlots = {} as FaUploadSlots;

void formInstance.getField;
void formInstance.setInitialValues;
void imageInstance.showPreview;
void selectV2Instance.scrollTo;
void tableInstance.getHalfSelectionRows;
void treeInstance.getNodeKey;
void treeInstance.getNodePath;
void treeSelectInstance.filter;
void treeSelectInstance.selectRef;
void treeSelectInstance.treeRef;
void dialogSlots.title;
void imageSlots.toolbar;
void imageSlots["viewer-error"];
void uploadSlots.file;

void tableColumnsSettingDialog;
void tablePagination;
void tableSearchForm;
void tableSearchFormItem;
void useLoading.show;
void useOverlay.hide;
void vCopy;

export { button, buttonInstance, currentVersion, dialog, dialogInstance, installPlugin, plugin, table, tableColumn, tableInstance, tree };
