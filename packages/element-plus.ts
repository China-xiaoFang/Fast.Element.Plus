/** Element Plus 组件全局配置 */

import ElementPlus, { ElDialog, ElForm, ElInput, ElInputNumber, ElMessageBox, ElSelect, ElTable, ElTree, ElTreeSelect } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { useOverlay } from "@fast-element-plus/hooks";
import { consoleError, execFunction } from "@fast-china/utils";
import { isNil, isString } from "lodash-unified";
import type { Action, ElMessageBoxOptions, MessageBoxData, MessageBoxState, TableProps } from "element-plus";
import type { App, AppContext, PropType } from "vue";

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

ElForm.props = {
	...ElForm.props,
	/** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
	labelWidth: {
		type: [String, Number],
		default: "auto",
	},
	/** @description Suffix of the label. */
	labelSuffix: {
		type: String,
		default: "：",
	},
	/** @description When validation fails, scroll to the first error form entry. */
	scrollToError: {
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

ElSelect.props = {
	...ElSelect.props,
	/** @description displayed text while loading data from server, default is 'Loading' */
	loadingText: {
		type: String,
		default: "加载中...",
	},
	/** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
	noMatchText: {
		type: String,
		default: "暂无匹配的数据",
	},
	/** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
	noDataText: {
		type: String,
		default: "暂无数据",
	},
	/**
	 * 默认按文字形式展示
	 * @description whether to collapse tags to a text when multiple selecting
	 */
	collapseTags: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认显示所有选中的标签
	 * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
	 */
	collapseTagsTooltip: {
		type: Boolean,
		default: true,
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

ElTree.props = {
	...ElTree.props,
	/**
	 * 默认展开所有节点
	 * @description 是否默认展开所有节点
	 */
	defaultExpandAll: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认点击时选中节点
	 * @description 是否在点击节点的时候选中节点
	 */
	checkOnClickNode: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认高亮选中节点
	 * @description 是否高亮当前选中节点
	 */
	highlightCurrent: {
		type: Boolean,
		default: true,
	},
};

ElTreeSelect.props = {
	...ElTreeSelect.props,
	/** @description displayed text while loading data from server, default is 'Loading' */
	loadingText: {
		type: String,
		default: "加载中...",
	},
	/** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
	noMatchText: {
		type: String,
		default: "暂无匹配的数据",
	},
	/** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
	noDataText: {
		type: String,
		default: "暂无数据",
	},
	/**
	 * 默认按文字形式展示
	 * @description whether to collapse tags to a text when multiple selecting
	 */
	collapseTags: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认显示所有选中的标签
	 * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true
	 */
	collapseTagsTooltip: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认展开所有节点
	 * @description 是否默认展开所有节点
	 */
	defaultExpandAll: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认点击时选中节点
	 * @description 是否在点击节点的时候选中节点
	 */
	checkOnClickNode: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认高亮选中节点
	 * @description 是否高亮当前选中节点
	 */
	highlightCurrent: {
		type: Boolean,
		default: true,
	},
	/**
	 * 默认点击节点不展开或收缩节点
	 * @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
	 */
	expandOnClickNode: Boolean,
};

// ElMessageBox 默认配置
const elMessageBox = (
	type: "alert" | "confirm" | "prompt",
	message: ElMessageBoxOptions["message"],
	options?: ElMessageBoxOptions,
	appContext?: AppContext | null
): Promise<MessageBoxData> => {
	options = options ?? {};
	if (!options?.title) {
		// 默认提示
		options.title = "温馨提示";
	}
	if (isNil(options?.draggable)) {
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
	if (isNil(options?.closeOnClickModal)) {
		// 默认 是否可通过点击遮罩层关闭 MessageBox
		options.closeOnClickModal = false;
	}
	if (isNil(options?.closeOnPressEscape)) {
		// 默认 是否可通过按下 ESC 键关闭 MessageBox
		options.closeOnPressEscape = false;
	}

	// 关闭之前的判断逻辑
	if (isNil(options?.beforeClose)) {
		const localBeforeClose = options.beforeClose;
		const localConfirmButtonText = options?.confirmButtonText;
		const localShowCancelButton = options?.showCancelButton;
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
						throw error;
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
			if (isNil(options?.showCancelButton)) {
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

type MESSAGE_BOX_TYPE = "alert" | "confirm" | "prompt";
const MESSAGE_BOX_DEFAULT_OPTS: Record<MESSAGE_BOX_TYPE, Partial<ElMessageBoxOptions>> = {
	alert: { closeOnPressEscape: false, closeOnClickModal: false },
	confirm: { showCancelButton: true },
	prompt: { showCancelButton: true, showInput: true },
};

ElMessageBox.alert = (
	message: ElMessageBoxOptions["message"],
	titleOrOptions?: string | ElMessageBoxOptions,
	options?: ElMessageBoxOptions,
	appContext?: AppContext | null
): Promise<MessageBoxData> =>
	isString(titleOrOptions)
		? elMessageBox("alert", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["alert"] }, options), appContext)
		: elMessageBox("alert", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["alert"], options), options as AppContext);

ElMessageBox.prompt = (
	message: ElMessageBoxOptions["message"],
	titleOrOptions?: string | ElMessageBoxOptions,
	options?: ElMessageBoxOptions,
	appContext?: AppContext | null
): Promise<MessageBoxData> =>
	isString(titleOrOptions)
		? elMessageBox("prompt", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["prompt"] }, options), appContext)
		: elMessageBox("prompt", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["prompt"], options), options as AppContext);

ElMessageBox.confirm = (
	message: ElMessageBoxOptions["message"],
	titleOrOptions?: string | ElMessageBoxOptions,
	options?: AppContext | ElMessageBoxOptions,
	appContext?: AppContext | null
): Promise<MessageBoxData> =>
	isString(titleOrOptions)
		? elMessageBox("confirm", message, Object.assign({ title: titleOrOptions, ...MESSAGE_BOX_DEFAULT_OPTS["confirm"] }, options), appContext)
		: elMessageBox("confirm", message, Object.assign(titleOrOptions, MESSAGE_BOX_DEFAULT_OPTS["confirm"], options), options as AppContext);

export const installElementPlus = (app: App): void => {
	/** 注册所有 Element Plus Icon */
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		// 这里是给 FaIcon 使用的
		app.component(`el-icon-${key}`, component);
	}

	/** Element Plus 组件完整引入 */
	app.use(ElementPlus);
};
