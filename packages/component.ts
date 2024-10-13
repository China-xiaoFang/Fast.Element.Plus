import type { Plugin } from "vue";
import { FaAvatar } from "@fast-element-plus/components/avatar";
import { FaButton } from "@fast-element-plus/components/button";
import { FaContextMenu } from "@fast-element-plus/components/contextMenu";
import { FaDialog } from "@fast-element-plus/components/dialog";
import { FaDrawer } from "@fast-element-plus/components/drawer";
import { FaForm, FaFormItem } from "@fast-element-plus/components/form";
import { FaFormItemTip } from "@fast-element-plus/components/formItemTip";
import { FaIcon } from "@fast-element-plus/components/icon";
import { FaIconSelector } from "@fast-element-plus/components/iconSelector";
import { FaImage } from "@fast-element-plus/components/image";
// import { FaInputDialogPage } from "@fast-element-plus/components/inputDialogPage";
import { FaLayoutGrid, FaLayoutGridItem } from "@fast-element-plus/components/layoutGrid";
// import { FaSelect, FaSelectOption } from "@fast-element-plus/components/select";
// import { FaSelectPage } from "@fast-element-plus/components/selectPage";
// import { FaTable, FaTableColumn } from "@fast-element-plus/components/table";
// import { FaTree } from "@fast-element-plus/components/tree";
// import { FaTreeSelect } from "@fast-element-plus/components/treeSelect";
import { FaUpload } from "@fast-element-plus/components/upload";
import { FaUploadImage } from "@fast-element-plus/components/uploadImage";
import { FaUploadImages } from "@fast-element-plus/components/uploadImages";

export default [
	FaAvatar,
	FaButton,
	FaContextMenu,
	FaDialog,
	FaDrawer,
	FaForm,
	FaFormItem,
	FaFormItemTip,
	FaIcon,
	FaIconSelector,
	FaImage,
	// FaInputDialogPage,
	FaLayoutGrid,
	FaLayoutGridItem,
	// FaSelect,
	// FaSelectOption,
	// FaSelectPage,
	// FaTable,
	// FaTableColumn,
	// FaTree,
	// FaTreeSelect,
	FaUpload,
	FaUploadImage,
	FaUploadImages,
] as Plugin[];
