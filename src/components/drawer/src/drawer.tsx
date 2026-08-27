import { Fragment, computed, defineComponent, nextTick, onBeforeUnmount, reactive, ref, watch } from "vue";
import { Close, Eleme, Refresh } from "@element-plus/icons-vue";
import { ElButton, ElDrawer, ElIcon, ElMessage, ElMessageBox, ElScrollbar, drawerEmits, drawerProps, useGlobalSize } from "element-plus";
import { FullScreen, FullScreenExit } from "@fast-element-plus/icons-vue";
import { isBoolean } from "lodash-unified";
import { callOptionalFunction, definePropType, makeSlots, useEmits, useExpose, useProps, useRender } from "../../../utils";
import type { VNode } from "vue";

/** FaDrawer 的运行时 Props 定义。 */
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

/** FaDrawer 的运行时 Emits 定义。 */
export const faDrawerEmits = {
	...drawerEmits,
	/** @description v-model 回调 */
	"update:modelValue": (value: boolean): boolean => isBoolean(value),
	/** @description 确认按钮点击事件 */
	confirmClick: (): boolean => true,
};

/** FaDrawer 的插槽参数。 */
export interface FaDrawerSlots extends Record<string, unknown> {
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
	name: "FaDrawer",
	props: faDrawerProps,
	emits: faDrawerEmits,
	slots: makeSlots<FaDrawerSlots>(),
	setup(props, { slots, emit, expose }) {
		const _globalSize = useGlobalSize();

		const state = reactive({
			loading: false,
			visible: props.modelValue,
			fullscreen: false,
			size: props.size ?? "30%",
			dragging: false,
			refreshing: false,
		});

		const drawerRef = ref<InstanceType<typeof ElDrawer>>();

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

		watch(
			() => props.size,
			(newValue) => {
				if (newValue !== undefined) state.size = newValue;
			}
		);

		const handleDraggablePointermove = (event: PointerEvent): void => {
			const horizontal = props.direction === "rtl" || props.direction === "ltr";
			const viewportSize = horizontal ? document.documentElement.clientWidth : document.documentElement.clientHeight;
			let nextSize: number;
			switch (props.direction) {
				case "ltr":
					nextSize = event.clientX;
					break;
				case "ttb":
					nextSize = event.clientY;
					break;
				case "btt":
					nextSize = viewportSize - event.clientY;
					break;
				default:
					nextSize = viewportSize - event.clientX;
					break;
			}
			state.size = `${Math.min(Math.max(nextSize, viewportSize * 0.2), viewportSize * 0.95).toString()}px`;
		};

		const stopDraggable = (): void => {
			state.dragging = false;
			document.removeEventListener("pointermove", handleDraggablePointermove);
			document.removeEventListener("pointerup", stopDraggable);
		};

		const handleDraggablePointerdown = (event: PointerEvent): void => {
			event.preventDefault();
			state.dragging = true;
			document.addEventListener("pointermove", handleDraggablePointermove);
			document.addEventListener("pointerup", stopDraggable, { once: true });
		};

		onBeforeUnmount(stopDraggable);

		const elDrawerProps = useProps(props, drawerProps, ["modelValue", "size", "showClose", "beforeClose"]);
		// open、close 是 Fast 异步业务流程完成事件，不直接透传 Element Plus 的同名生命周期事件。
		const elDrawerEmits = useEmits(drawerEmits, emit, ["open", "close", "update:modelValue"]);

		useRender(() => (
			<ElDrawer
				{...elDrawerProps.value}
				{...elDrawerEmits.value}
				ref={drawerRef}
				class={[
					"fa-drawer",
					`fa-drawer-${_globalSize.value}`,
					{ "fa-drawer__fullscreen": state.fullscreen, "fa-drawer__dragging": state.dragging },
				]}
				vModel={state.visible}
				size={state.size}
				showClose={false}
				beforeClose={handleBeforeClose}
			>
				{{
					header: ({ titleId, titleClass }: { close: () => void; titleId: string; titleClass: string }) => (
						<Fragment>
							<div id={titleId} class={["fa-drawer__header-title", titleClass]}>
								{slots.title?.({ loading: state.loading, close: handleCloseClick, titleId, titleClass }) ?? props.title}
								{slots.header?.({ loading: state.loading, close: handleCloseClick, titleId, titleClass })}
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
							{props.draggable && <div class="fa-drawer__draggable" onPointerdown={handleDraggablePointerdown} />}
							<ElScrollbar vLoading={state.loading} element-loading-text="加载中...">
								{!state.refreshing && slots.default?.(state)}
							</ElScrollbar>
						</Fragment>
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
			</ElDrawer>
		));

		return useExpose(expose, {
			/** @description 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 */
			handleClose: computed(() => drawerRef.value?.handleClose),
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
