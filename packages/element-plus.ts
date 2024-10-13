/** Element Plus 组件全局配置 */

import type { App, PropType } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useOverlay } from "@fast-element-plus/hooks";
import { consoleError, errorHandler, execFunction } from "@fast-element-plus/utils";
import type { Action, ElMessageBoxOptions, MessageBoxData, MessageBoxState, TableProps } from "element-plus";
import ElementPlus, { ElDialog, ElInput, ElInputNumber, ElMessageBox, ElTable } from "element-plus";

ElDialog.props = {
	...ElDialog.props,
	/**
	 * 默认拖拽
	 * @description enable dragging feature for Dialog
	 */
	draggable: {
		type: Boolean,
		default: true,
	},
};

ElInput.props = {
	...ElInput.props,
	/**
	 * 默认显示统计字数
	 * @description word count
	 */
	showWordLimit: {
		type: Boolean,
		default: true,
	},
};

ElInputNumber.props = {
	...ElInputNumber.props,
	/**
	 * 默认不使用控制按钮
	 * @description whether to enable the control buttons
	 */
	controls: {
		type: Boolean,
		default: false,
	},
};

ElTable.props = {
	...ElTable.props,
	/**
	 * 默认显示边框
	 * @description whether Table has vertical border
	 */
	border: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认高亮当前行
	 * @description whether current row is highlighted
	 */
	highlightCurrentRow: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认行Key为 "id"
	 * @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used
	 */
	rowKey: {
		type: [String, Function] as PropType<TableProps<any>["rowKey"]>,
		default: "id",
	},
};

// ElMessageBox 默认配置
const elMessageBox = (
	message: ElMessageBoxOptions["message"],
	options: ElMessageBoxOptions,
	type: "alert" | "confirm" | "prompt"
): Promise<MessageBoxData> => {
	options = options ?? {};
	if (!options?.title) {
		// 默认提示
		options.title = "温馨提示";
	}
	if (options?.draggable == undefined) {
		// 默认拖拽
		options.draggable = true;
	}
	if (!options?.cancelButtonText) {
		// 默认 取消按钮的文本内容
		options.cancelButtonText = "取消";
	}
	if (!options?.confirmButtonText) {
		// 默认 确定按钮的文本内容
		options.confirmButtonText = "确定";
	}
	if (options?.closeOnClickModal == undefined) {
		// 默认 是否可通过点击遮罩层关闭 MessageBox
		options.closeOnClickModal = false;
	}
	if (options?.closeOnPressEscape == undefined) {
		// 默认 是否可通过按下 ESC 键关闭 MessageBox
		options.closeOnPressEscape = false;
	}

	// 关闭之前的判断逻辑
	if (options?.beforeClose != undefined) {
		const localBeforeClose = options.beforeClose;
		const localConfirmButtonText = options?.confirmButtonText ?? "确定";
		const localShowCancelButton = options?.showCancelButton ?? false;
		options.beforeClose = (action: Action, instance: MessageBoxState, done: () => void): void => {
			if (action === "confirm") {
				useOverlay.show(0);
				instance.confirmButtonLoading = true;
				instance.showCancelButton = false;
				instance.confirmButtonText = "加载中...";

				const cancelLoading = (): void => {
					instance.confirmButtonLoading = false;
					instance.showCancelButton = localShowCancelButton;
					instance.confirmButtonText = localConfirmButtonText;
					useOverlay.hide();
				};

				const newDone = (): void => {
					cancelLoading();
					done();
				};

				execFunction(localBeforeClose, action, instance, newDone)
					.then(() => {
						newDone();
					})
					.catch((error) => {
						consoleError("MessageBox", error);
						cancelLoading();
						errorHandler(error);
					});
			} else {
				done();
			}
		};
	}

	// 根据类型有一些判断
	switch (type) {
		case "alert":
			break;
		case "confirm":
			if (options?.showCancelButton == undefined) {
				options.showCancelButton = true;
			}
			break;
		case "prompt":
			if (options?.showCancelButton == undefined) {
				options.showCancelButton = true;
			}
			break;
	}

	return ElMessageBox(
		Object.assign(
			{
				message,
			},
			options,
			{
				boxType: type,
			}
		)
	);
};

ElMessageBox.alert = (message: ElMessageBoxOptions["message"], options?: ElMessageBoxOptions): Promise<MessageBoxData> =>
	elMessageBox(message, options, "alert");

ElMessageBox.prompt = (message: ElMessageBoxOptions["message"], options?: ElMessageBoxOptions): Promise<MessageBoxData> =>
	elMessageBox(message, options, "prompt");

ElMessageBox.confirm = (message: ElMessageBoxOptions["message"], options?: ElMessageBoxOptions): Promise<MessageBoxData> =>
	elMessageBox(message, options, "confirm");

export const installElementPlus = (app: App): void => {
	/** 注册所有 Element Plus Icon */
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		// 这里是给 FaIcon 使用的
		app.component(`el-icon-${key}`, component);
	}

	/** Element Plus 组件完整引入 */
	app.use(ElementPlus);
};
