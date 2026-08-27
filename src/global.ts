import type { Directive } from "vue";

declare module "vue" {
	export interface GlobalComponents {
		FaAvatar: (typeof import("./components/avatar"))["FaAvatar"];
		FaButton: (typeof import("./components/button"))["FaButton"];
		FaCarNumber: (typeof import("./components/carNumber"))["FaCarNumber"];
		FaContextMenu: (typeof import("./components/contextMenu"))["FaContextMenu"];
		FaDialog: (typeof import("./components/dialog"))["FaDialog"];
		FaDrawer: (typeof import("./components/drawer"))["FaDrawer"];
		FaForm: (typeof import("./components/form"))["FaForm"];
		FaFormItem: (typeof import("./components/form"))["FaFormItem"];
		FaFormItemTip: (typeof import("./components/formItemTip"))["FaFormItemTip"];
		FaIcon: (typeof import("./components/icon"))["FaIcon"];
		FaIconSelector: (typeof import("./components/iconSelector"))["FaIconSelector"];
		FaImage: (typeof import("./components/image"))["FaImage"];
		FaInputDialogPage: (typeof import("./components/inputDialogPage"))["FaInputDialogPage"];
		FaLayoutGrid: (typeof import("./components/layoutGrid"))["FaLayoutGrid"];
		FaLayoutGridItem: (typeof import("./components/layoutGrid"))["FaLayoutGridItem"];
		FaSelect: (typeof import("./components/select"))["FaSelect"];
		FaSelectOption: (typeof import("./components/select"))["FaSelectOption"];
		FaSelectPage: (typeof import("./components/selectPage"))["FaSelectPage"];
		FaSelectV2: (typeof import("./components/selectV2"))["FaSelectV2"];
		FaTable: (typeof import("./components/table"))["FaTable"];
		FaTableColumn: (typeof import("./components/table"))["FaTableColumn"];
		FaTableColumnsSettingDialog: (typeof import("./components/table"))["FaTable"]["TableColumnsSettingDialog"];
		FaTablePagination: (typeof import("./components/table"))["FaTable"]["TablePagination"];
		FaTableSearchForm: (typeof import("./components/table"))["FaTable"]["TableSearchForm"];
		FaTableSearchFormItem: (typeof import("./components/table"))["FaTable"]["TableSearchFormItem"];
		FaTree: (typeof import("./components/tree"))["FaTree"];
		FaTreeSelect: (typeof import("./components/treeSelect"))["FaTreeSelect"];
		FaUpload: (typeof import("./components/upload"))["FaUpload"];
		FaUploadImage: (typeof import("./components/uploadImage"))["FaUploadImage"];
		FaUploadImages: (typeof import("./components/uploadImages"))["FaUploadImages"];
	}

	export interface GlobalDirectives {
		/** 点击元素后复制绑定的文本或数字。 */
		vCopy: Directive<HTMLElement, number | string>;
		/** 将短时间内连续发生的点击合并为一次调用。 */
		vDebounce: Directive<HTMLElement>;
		/** 允许元素在父容器范围内拖动。 */
		vDraggable: Directive<HTMLElement>;
		/** 在目标元素旁显示复制图标，并复制绑定的文本或数字。 */
		vIconCopy: Directive<HTMLElement, number | string>;
		/** 长按元素时调用绑定的回调。 */
		vLongpress: Directive<HTMLElement, (event: MouseEvent | TouchEvent) => void>;
		/** 限制点击回调在固定时间窗口内只执行一次。 */
		vThrottle: Directive<HTMLElement, (...arguments_: unknown[]) => void>;
	}
}

declare global {
	interface Window {
		/** 全局 Loading 是否处于显示状态。 */
		loading: boolean;
		/** 全局遮罩层是否处于显示状态。 */
		overlay: boolean;
	}
}

export {};
