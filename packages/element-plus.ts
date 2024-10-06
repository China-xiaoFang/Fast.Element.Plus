/** Element Plus 组件全局配置 */

import type { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useOverlay } from "@fast-element-plus/hooks";
import { consoleError, errorHandler, execAsyncFunction } from "@fast-element-plus/utils";
import type { Action, ElMessageBoxOptions, MessageBoxData, MessageBoxState } from "element-plus";
import ElementPlus, { ElDialog, ElInput, ElMessageBox } from "element-plus";

// ELDialog 默认拖拽
ElDialog.props = {
	...ElDialog.props,
	draggable: {
		type: Boolean,
		default: true,
	},
};

// ELInput 默认显示统计字数
ElInput.props = {
	...ElInput.props,
	showWordLimit: {
		type: Boolean,
		default: true,
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

				execAsyncFunction(localBeforeClose, action, instance, newDone)
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
