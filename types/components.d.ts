// For this project development
import "@vue/runtime-core";

// GlobalComponents for Volar
declare module "@vue/runtime-core" {
	export interface GlobalComponents {
		FaAvatar: (typeof import("fast-element-plus"))["FaAvatar"];
		FaButton: (typeof import("fast-element-plus"))["FaButton"];
		FaCarNumber: (typeof import("fast-element-plus"))["FaCarNumber"];
		FaContextMenu: (typeof import("fast-element-plus"))["FaContextMenu"];
		FaDialog: (typeof import("fast-element-plus"))["FaDialog"];
		FaDrawer: (typeof import("fast-element-plus"))["FaDrawer"];
		FaForm: (typeof import("fast-element-plus"))["FaForm"];
		FaFormItem: (typeof import("fast-element-plus"))["FaFormItem"];
		FaFormItemTip: (typeof import("fast-element-plus"))["FaFormItemTip"];
		FaIcon: (typeof import("fast-element-plus"))["FaIcon"];
		FaImage: (typeof import("fast-element-plus"))["FaImage"];
		FaLayoutGrid: (typeof import("fast-element-plus"))["FaLayoutGrid"];
		FaLayoutGridItem: (typeof import("fast-element-plus"))["FaLayoutGridItem"];
		FaSelect: (typeof import("fast-element-plus"))["FaSelect"];
		FaSelectOption: (typeof import("fast-element-plus"))["FaSelectOption"];
		FaSelectPage: (typeof import("fast-element-plus"))["FaSelectPage"];
		FaSelectV2: (typeof import("fast-element-plus"))["FaSelectV2"];
		FaTable: (typeof import("fast-element-plus"))["FaTable"];
		FaTableColumn: (typeof import("fast-element-plus"))["FaTableColumn"];
		FaTree: (typeof import("fast-element-plus"))["FaTree"];
		FaTreeSelect: (typeof import("fast-element-plus"))["FaTreeSelect"];
		FaUpload: (typeof import("fast-element-plus"))["FaUpload"];
		FaUploadImage: (typeof import("fast-element-plus"))["FaUploadImage"];
		FaUploadImages: (typeof import("fast-element-plus"))["FaUploadImages"];
	}

	// interface ComponentCustomProperties {}
}

export {};
