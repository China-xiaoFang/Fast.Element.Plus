import { computed, defineComponent, onBeforeUnmount, reactive, shallowRef, watch, withModifiers } from "vue";
import { Eleme } from "@element-plus/icons-vue";
import { ElButton, buttonEmits, buttonProps } from "element-plus";
import { useOverlay } from "../../../hooks";
import { callOptionalFunction, definePropType, makeSlots, useExpose, useProps, useRender } from "../../../utils";
import { createLoadingTasks } from "../../../utils/loading-tasks";
import type { ButtonInstance } from "element-plus";
import type { Component } from "vue";

/** FaButton 的运行时 Props 定义 */
export const faButtonProps = {
	// eslint-disable-next-line @typescript-eslint/no-deprecated -- Element Plus 2.x 尚未提供可替代的公开运行时 props 定义。
	...buttonProps,
	/**
	 * 自定义加载图标
	 *
	 * 未指定时使用 `Eleme`。
	 */
	loadingIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: () => Eleme,
	},
	/** 禁用加载 */
	disabledLoading: Boolean,
};

/** FaButton 的运行时 Emits 定义 */
export const faButtonEmits = {
	...buttonEmits,
	/**
	 * 点击事件；未禁用内部加载时，调用方完成后应调用 done。
	 * @param event - 鼠标事件
	 * @param done - 完成本次交互并隐藏内部加载状态的回调
	 */
	click: (event: MouseEvent, done: () => void = () => undefined) => event instanceof MouseEvent && typeof done === "function",
};

/** FaButton 的插槽参数 */
export interface FaButtonSlots extends Record<string, unknown> {
	/** 默认内容插槽 */
	default: never;
	/** 自定义加载中组件 */
	loading: never;
	/** 自定义图标组件 */
	icon: never;
}

export default defineComponent({
	name: "FaButton",
	props: faButtonProps,
	emits: faButtonEmits,
	slots: makeSlots<FaButtonSlots>(),
	setup(props, { slots, emit, expose }) {
		const buttonRef = shallowRef<ButtonInstance | null>(null);

		const state = reactive({
			loading: false,
		});

		// 组件只持有一个遮罩，所有内部任务结束后才释放。
		let ownsOverlay = false;
		let disposed = false;
		let releaseExternal: (() => void) | undefined;
		let releaseManual: (() => void) | undefined;

		const loadingTasks = createLoadingTasks((loading) => {
			state.loading = loading;
			if (loading && !ownsOverlay) {
				useOverlay.show(0);
				ownsOverlay = true;
			} else if (!loading && ownsOverlay) {
				ownsOverlay = false;
				useOverlay.hide();
			}
		});

		// 手动关闭只释放手动任务，不能结束内部异步任务。
		const manualLoading = computed({
			get: () => state.loading,
			set: (value: boolean) => {
				if (value) {
					releaseManual ??= loadingTasks.begin();
				} else {
					releaseManual?.();
					releaseManual = undefined;
				}
			},
		});

		const handleLoading = async (loadingFunction: () => void | Promise<void>) => {
			if (disposed) return;
			const done = loadingTasks.begin();
			try {
				await callOptionalFunction(loadingFunction);
			} finally {
				done();
			}
		};

		const handleClick = (event: MouseEvent) => {
			if (disposed) return;
			if (props.disabledLoading) {
				emit("click", event);
			} else {
				const done = loadingTasks.begin();
				emit("click", event, done);
			}
		};

		// 外部受控状态与内部任务独立；false 只能释放外部持有的 Loading。
		watch(
			[() => props.loading, () => props.disabledLoading],
			([loading, disabledLoading]) => {
				if (loading && !disabledLoading) {
					releaseExternal ??= loadingTasks.begin();
				} else {
					releaseExternal?.();
					releaseExternal = undefined;
				}
			},
			{ immediate: true }
		);
		onBeforeUnmount(() => {
			disposed = true;
			loadingTasks.dispose();
		});

		// eslint-disable-next-line @typescript-eslint/no-deprecated -- 透传范围必须与继承的 Element Plus 2.x 运行时 props 保持一致。
		const elButtonProps = useProps(props, buttonProps, ["loading"]);

		useRender(() => (
			<ElButton
				{...elButtonProps.value}
				ref={buttonRef}
				class="fa-button"
				loading={state.loading}
				onClick={withModifiers((event: Event) => handleClick(event as MouseEvent), ["prevent"])}
			>
				{{
					default: () => slots.default?.(),
					...(slots.loading && { loading: () => slots.loading?.() ?? [] }),
					...(slots.icon && { icon: () => slots.icon?.() ?? [] }),
				}}
			</ElButton>
		));

		return useExpose(expose, {
			/** 按钮 html 元素 */
			ref: computed(() => buttonRef.value?.ref),
			/** 按钮尺寸 */
			size: computed(() => buttonRef.value?.size),
			/** 按钮类型 */
			type: computed(() => buttonRef.value?.type),
			/** 按钮已禁用 */
			disabled: computed(() => buttonRef.value?.disabled),
			/** 是否在两个字符之间插入空格 */
			shouldAddSpace: computed(() => buttonRef.value?.shouldAddSpace),
			/** 聚合加载状态；手动写入只管理手动任务，不关闭仍在执行的内部任务。 */
			loading: manualLoading,
			/** 执行独立的加载任务；并发调用分别完成，卸载后不再启动新任务。 */
			doLoading: handleLoading,
		});
	},
});
