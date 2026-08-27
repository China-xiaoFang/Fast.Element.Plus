import { Fragment, computed, defineComponent, nextTick, reactive, ref, watch } from "vue";
import { Close, Eleme, Refresh } from "@element-plus/icons-vue";
import { ElButton, ElDialog, ElIcon, ElMessage, ElMessageBox, ElScrollbar, dialogEmits, dialogProps, useGlobalSize } from "element-plus";
import { FullScreen, FullScreenExit } from "@fast-element-plus/icons-vue";
import { isBoolean } from "lodash-unified";
import { callOptionalFunction, definePropType, makeSlots, useEmits, useExpose, useProps, useRender } from "../../../utils";
import type { DialogInstance } from "element-plus";
import type { VNode } from "vue";

/** FaDialog 的运行时 Props 定义。 */
export const faDialogProps = {
	...dialogProps,
	/** @description whether to align the dialog both horizontally and vertically*/
	alignCenter: {
		type: Boolean,
		default: true,
	},
	/** @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` */
	appendToBody: {
		type: Boolean,
		default: true,
	},
	/** @description enable dragging feature for Dialog */
	draggable: {
		type: Boolean,
		default: true,
	},
	/** @description destroy elements in Dialog when closed */
	destroyOnClose: {
		type: Boolean,
		default: true,
	},
	/** @description draggable Dialog can overflow the viewport */
	overflow: {
		type: Boolean,
		default: true,
	},
	/** @description value for `margin-top` of Dialog CSS, default is 15vh */
	top: {
		type: String,
		default: "5vh",
	},
	/** @description width of Dialog, default is 50% */
	width: {
		type: [String, Number],
		default: "90%",
	},
	/** @description 显示刷新按钮 */
	showRefresh: {
		type: Boolean,
		default: true,
	},
	/** @description 显示全屏图标 */
	showFullscreen: {
		type: Boolean,
		default: true,
	},
	/** @description 显示关闭按钮 */
	showCloseButton: {
		type: Boolean,
		default: true,
	},
	/** @description 显示确认按钮 */
	showConfirmButton: {
		type: Boolean,
		default: true,
	},
	/** @description 禁用确认按钮 */
	disabledConfirmButton: Boolean,
	/** @description 关闭按钮文字，默认取消 */
	closeButtonText: {
		type: String,
		default: "取消",
	},
	/** @description 确认按钮文字，默认确认 */
	confirmButtonText: {
		type: String,
		default: "确认",
	},
	/** @description 隐藏底部操作 */
	hideFooter: Boolean,
	/** @description 撑满高度 */
	fullHeight: Boolean,
	/** @description 显示关闭回调 */
	showBeforeClose: Boolean,
	/** @description 打开之后 */
	afterOpen: {
		type: definePropType<() => void>(Function),
	},
};

/** FaDialog 的运行时 Emits 定义。 */
export const faDialogEmits = {
	...dialogEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: boolean): boolean => isBoolean(value),
	/** @description 确认按钮点击事件 */
	confirmClick: (): boolean => true,
};

/** FaDialog 的插槽参数。 */
export interface FaDialogSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: { loading: boolean };
	/** @description 头部插槽 */
	header: { loading: boolean; close: () => void; titleId: string; titleClass: string };
	/** @description 标题插槽 */
	title: { loading: boolean; close: () => void; titleId: string; titleClass: string };
	/** @description 底部插槽 */
	footer: { loading: boolean; close: () => void };
}

export default defineComponent({
	name: "FaDialog",
	props: faDialogProps,
	emits: faDialogEmits,
	slots: makeSlots<FaDialogSlots>(),
	setup(props, { slots, emit, expose }) {
		const _globalSize = useGlobalSize();

		const state = reactive({
			loading: false,
			visible: props.modelValue,
			fullscreen: false,
			refreshing: false,
		});

		const dialogRef = ref<DialogInstance>();

		let cacheOpenFunction: (() => void | Promise<void>) | undefined;

		const handleOpen = (openFunction?: () => void | Promise<void>): void => {
			state.visible = true;
			cacheOpenFunction = openFunction;
			void nextTick(() => {
				state.loading = true;
				void callOptionalFunction(props.afterOpen ?? openFunction)
					.then(() => {
						emit("open");
					})
					.catch((error) => {
						// 打开回调失败时保持原有的自动关闭行为，并将异常继续交给运行时。
						state.visible = false;
						throw error;
					})
					.finally(() => {
						state.loading = false;
					});
			});
		};

		const handleClose = (closeFunction?: () => void | Promise<void>): void => {
			state.loading = true;
			void callOptionalFunction(closeFunction)
				.then(() => {
					emit("close");
					state.visible = false;
				})
				.finally(() => {
					state.loading = false;
				});
		};

		const handleLoading = (loadingFunction: () => void | Promise<void>): void => {
			state.loading = true;
			void callOptionalFunction(loadingFunction).finally(() => {
				state.loading = false;
			});
		};

		const handleRefresh = (): void => {
			if (state.loading) return;
			state.refreshing = true;
			state.loading = true;
			setTimeout(() => {
				state.refreshing = false;
				handleOpen(cacheOpenFunction);
				ElMessage.success("刷新成功");
			}, 500);
		};

		const handleBeforeClose = (done: () => void): void => {
			if (state.loading) return;
			// 解决 image 预览摁下 ese 会关闭弹窗的问题
			if (document.querySelector(".el-image-viewer__wrapper")) return;

			const newDone = (): Promise<void> => {
				// 组件对外约定为无参数完成钩子，不采用 Element Plus 的 done 回调签名。
				return callOptionalFunction(props.beforeClose as unknown as (() => void | PromiseLike<void>) | undefined).then(() => {
					emit("close");
					done();
				});
			};

			if (props.showBeforeClose) {
				// 用户取消关闭属于正常分支，无需继续执行 beforeClose。
				void ElMessageBox.confirm("确定关闭？", { type: "warning" }).then(() => newDone());
			} else {
				void newDone();
			}
		};

		const handleFullscreen = (): void => {
			if (state.loading) return;
			state.fullscreen = !state.fullscreen;
		};

		const handleConfirmClick = (): void => {
			if (state.loading) return;
			emit("confirmClick");
		};

		const handleCloseClick = (): void => {
			if (state.loading) return;
			handleClose();
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				if (state.visible !== newValue) state.visible = newValue;
			}
		);

		watch(
			() => state.visible,
			(newValue) => {
				if (props.modelValue !== newValue) emit("update:modelValue", newValue);
			}
		);

		const elDialogProps = useProps(props, dialogProps, ["modelValue", "fullscreen", "showClose", "beforeClose"]);
		// open、close 是 Fast 异步业务流程完成事件，不直接透传 Element Plus 的同名生命周期事件。
		const elDialogEmits = useEmits(dialogEmits, emit, ["open", "close", "update:modelValue"]);

		useRender(() => (
			<ElDialog
				{...elDialogProps.value}
				{...elDialogEmits.value}
				ref={dialogRef}
				class={[
					"fa-dialog",
					`fa-dialog-${_globalSize.value}`,
					{ "fa-dialog__full-height": props.fullHeight, "fa-dialog__fullscreen": state.fullscreen },
				]}
				vModel={state.visible}
				fullscreen={state.fullscreen}
				showClose={false}
				beforeClose={handleBeforeClose}
			>
				{{
					header: ({ titleId, titleClass }: { close: () => void; titleId: string; titleClass: string }) => (
						<Fragment>
							<div id={titleId} class={["fa-dialog__header-title", titleClass]}>
								{slots.title?.({ loading: state.loading, close: handleCloseClick, titleId, titleClass }) ?? props.title}
								{slots.header?.({ loading: state.loading, close: handleCloseClick, titleId, titleClass })}
							</div>
							{props.showRefresh && (
								<div
									title="刷新"
									class={[
										"fa-dialog__header-icon",
										state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle",
									]}
									onClick={handleRefresh}
								>
									<ElIcon>
										<Refresh />
									</ElIcon>
								</div>
							)}
							{props.showFullscreen && (
								<div
									title={state.fullscreen ? "关闭全屏显示" : "全屏显示"}
									class={[
										"fa-dialog__header-icon",
										state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle",
									]}
									onClick={handleFullscreen}
								>
									<ElIcon>{state.fullscreen ? <FullScreenExit /> : <FullScreen />}</ElIcon>
								</div>
							)}
							{props.showClose && (
								<div
									title="关闭"
									class={[
										"fa-dialog__header-icon",
										state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle",
									]}
									onClick={handleCloseClick}
								>
									<ElIcon>
										<Close />
									</ElIcon>
								</div>
							)}
						</Fragment>
					),
					default: () => (
						<ElScrollbar vLoading={state.loading} element-loading-text="加载中...">
							{!state.refreshing && slots.default?.(state)}
						</ElScrollbar>
					),
					...(!props.hideFooter && {
						footer: (): VNode[] => [
							<Fragment>
								{slots.footer?.({ loading: state.loading, close: handleCloseClick })}
								{props.showCloseButton && (
									<ElButton disabled={state.loading} onClick={handleCloseClick}>
										{props.closeButtonText}
									</ElButton>
								)}
								{props.showConfirmButton && (
									<ElButton
										loading={state.loading}
										loadingIcon={Eleme}
										disabled={props.disabledConfirmButton}
										type="primary"
										onClick={handleConfirmClick}
									>
										{state.loading ? "加载中..." : props.confirmButtonText}
									</ElButton>
								)}
							</Fragment>,
						],
					}),
				}}
			</ElDialog>
		));

		return useExpose(expose, {
			/** @description 调用原生关闭流程，并执行 beforeClose。 */
			handleClose: computed(() => dialogRef.value?.handleClose),
			/** @description 弹窗内容引用 */
			dialogContentRef: computed<unknown>(() => dialogRef.value?.dialogContentRef as unknown),
			/** @description 重置位置 */
			resetPosition: computed(() => dialogRef.value?.resetPosition),
			/** @description 加载状态 */
			loading: computed(() => state.loading),
			/** @description 是否显示 */
			visible: computed(() => state.visible),
			/** @description 打开弹窗 */
			open: handleOpen,
			/** @description 关闭弹窗 */
			close: handleClose,
			/** @description 刷新弹窗 */
			refresh: handleRefresh,
			/** @description 弹窗加载 */
			doLoading: handleLoading,
		});
	},
});
