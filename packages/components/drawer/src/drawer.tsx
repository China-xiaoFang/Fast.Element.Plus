import { Fragment, computed, defineComponent, nextTick, reactive, ref, watch } from "vue";
import { ElButton, ElDrawer, ElIcon, ElMessage, ElMessageBox, ElScrollbar, drawerEmits, drawerProps, useGlobalSize } from "element-plus";
import { Close, Eleme, Refresh } from "@element-plus/icons-vue";
import { FullScreen, FullScreenExit } from "@fast-element-plus/icons-vue";
import { consoleError, definePropType, execFunction, makeSlots, useEmits, useExpose, useProps, useRender } from "@fast-china/utils";
import { isBoolean } from "lodash-unified";
import type { VNode } from "vue";

export const faDrawerProps = {
	...drawerProps,
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
	/** @description 显示关闭回调 */
	showBeforeClose: Boolean,
	/** @description 打开之后 */
	afterOpen: {
		type: definePropType<() => void>(Function),
	},
};

export const faDrawerEmits = {
	...drawerEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: boolean): boolean => isBoolean(value),
	/** @description 确认按钮点击事件 */
	confirmClick: (): boolean => true,
};

type FaDrawerSlots = {
	/** @description 默认内容插槽 */
	default: { loading: boolean };
	/** @description 头部插槽 */
	header: { loading: boolean; close: () => void };
	/** @description 底部插槽 */
	footer: { loading: boolean; close: () => void };
};

export default defineComponent({
	name: "FaDrawer",
	props: faDrawerProps,
	emits: faDrawerEmits,
	slots: makeSlots<FaDrawerSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const _globalSize = useGlobalSize();

		const state = reactive({
			loading: false,
			visible: false,
			fullscreen: false,
			size: props.size ?? "30%",
			dragging: false,
			refreshing: false,
		});

		const drawerRef = ref<InstanceType<typeof ElDrawer>>();

		let cacheOpenFunction = undefined;

		const handleOpen = (openFunction?: () => void | Promise<void>): void => {
			state.visible = true;
			cacheOpenFunction = openFunction;
			nextTick(() => {
				state.loading = true;
				execFunction(props.afterOpen ?? openFunction)
					.then(() => {
						emit("open");
					})
					.catch((error) => {
						consoleError("FaDrawer", error);
						// 自动关闭
						state.visible = false;
					})
					.finally(() => {
						state.loading = false;
					});
			});
		};

		const handleClose = (closeFunction?: () => void | Promise<void>): void => {
			state.loading = true;
			execFunction(closeFunction)
				.then(() => {
					emit("close");
					state.visible = false;
				})
				.catch((error) => {
					consoleError("FaDrawer", error);
				})
				.finally(() => {
					state.loading = false;
				});
		};

		const handleLoading = (loadingFunction: () => void | Promise<void>): void => {
			state.loading = true;
			execFunction(loadingFunction)
				.then()
				.catch((error) => {
					consoleError("FaDrawer", error);
				})
				.finally(() => {
					state.loading = false;
				});
		};

		const handleRefresh = (): void => {
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

			const newDone = (): void => {
				execFunction(props.beforeClose)
					.then(() => {
						emit("close");
						done();
					})
					.catch((error) => {
						consoleError("FaDialog", error);
					});
			};

			if (props.showBeforeClose) {
				ElMessageBox.confirm("确定关闭？", { type: "warning" }).then(() => {
					newDone();
				});
			} else {
				newDone();
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
			() => state.visible,
			(newValue) => {
				emit("update:modelValue", newValue);
			}
		);

		/**
		 * 处理拖拽
		 */
		const handleDraggableMousedown = (): void => {
			document.onmousemove = (moveEvent: MouseEvent): void => {
				// 获取鼠标距离浏览器右边缘的距离
				let realWidth = document.body.clientWidth - moveEvent.pageX;
				const width20 = document.body.clientWidth * 0.2;
				const width95 = document.body.clientWidth * 0.95;
				// 宽度不能大于浏览器宽度 95%，不能小于宽度的 20%
				realWidth = realWidth > width95 ? width95 : realWidth < width20 ? width20 : realWidth;
				state.size = `${realWidth}px`;
			};
			document.onmouseup = (): void => {
				document.onmousemove = document.onmouseup = null;
			};
		};

		const elDrawerProps = useProps(props, drawerProps, ["modelValue", "size", "showClose", "beforeClose"]);
		const elDrawerEmits = useEmits(drawerEmits, emit, ["update:modelValue"]);

		useRender(() => (
			<ElDrawer
				{...elDrawerProps.value}
				{...elDrawerEmits.value}
				ref={drawerRef}
				class={["fa-drawer", `fa-drawer-${_globalSize.value}`, { "fa-drawer__fullscreen": state.fullscreen }]}
				vModel={state.visible}
				size={state.size}
				showClose={false}
				beforeClose={handleBeforeClose}
			>
				{{
					header: () => (
						<Fragment>
							<div class="fa-drawer__header-title">
								{props.title}
								{slots.header && slots.header({ loading: state.loading, close: handleCloseClick })}
							</div>
							{props.showRefresh && (
								<div
									title="刷新"
									class={[
										"fa-drawer__header-icon",
										state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle",
									]}
									onClick={handleRefresh}
								>
									<ElIcon class="icon">
										<Refresh />
									</ElIcon>
								</div>
							)}
							{props.showFullscreen && (
								<div
									title={state.fullscreen ? "关闭全屏显示" : "全屏显示"}
									class={[
										"fa-drawer__header-icon",
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
										"fa-drawer__header-icon",
										state.loading ? "fa__click__disabled fa__click__disabled__cursor " : "fa__hover__twinkle",
									]}
									onClick={handleCloseClick}
								>
									<ElIcon class="icon">
										<Close />
									</ElIcon>
								</div>
							)}
						</Fragment>
					),
					default: () => (
						<Fragment>
							{props.draggable && <div class="fa-drawer__draggable" onmousedown={handleDraggableMousedown} />}
							<ElScrollbar vLoading={state.loading} element-loading-text="加载中...">
								{!state.refreshing && slots.default && slots.default(state)}
							</ElScrollbar>
						</Fragment>
					),
					...(!props.hideFooter && {
						footer: (): VNode[] => (
							<Fragment>
								{slots.footer && slots.footer({ loading: state.loading, close: handleCloseClick })}
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
							</Fragment>
						),
					}),
				}}
			</ElDrawer>
		));

		return useExpose(expose, {
			/** @description 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 */
			handleClose: computed(() => drawerRef.value?.handleClose),
			/** @description 进入动画后的回调 */
			afterEnter: computed(() => drawerRef.value?.afterEnter),
			/** @description 离开动画后的回调 */
			afterLeave: computed(() => drawerRef.value?.afterLeave),
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
