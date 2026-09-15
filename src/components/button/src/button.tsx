import { computed, defineComponent, reactive, shallowRef, toRef, watch, withModifiers } from "vue";
import { Eleme } from "@element-plus/icons-vue";
import { ElButton, buttonEmits, buttonProps } from "element-plus";
import { useOverlay } from "../../../hooks";
import { callOptionalFunction, definePropType, makeSlots, useExpose, useProps, useRender } from "../../../utils";
import type { ButtonInstance } from "element-plus";
import type { Component } from "vue";

/** FaButton 的运行时 Props 定义。 */
export const faButtonProps = {
	// eslint-disable-next-line @typescript-eslint/no-deprecated -- Element Plus 2.x 尚未提供可替代的公开运行时 props 定义。
	...buttonProps,
	/**
	 * @description customize loading icon component
	 * @default Eleme
	 */
	loadingIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: () => Eleme,
	},
	/** @description 禁用加载 */
	disabledLoading: Boolean,
};

/** FaButton 的运行时 Emits 定义。 */
export const faButtonEmits = {
	...buttonEmits,
	/**
	 * @description 点击事件
	 * @param done 需要手动隐藏Loading
	 */
	click: (event: MouseEvent, done: () => void = () => undefined) => event instanceof MouseEvent && typeof done === "function",
};

/** FaButton 的插槽参数。 */
export interface FaButtonSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 自定义加载中组件 */
	loading: never;
	/** @description 自定义图标组件 */
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

		const showLoading = () => {
			state.loading = true;
			// 这里默认透明
			useOverlay.show(0);
		};

		const hideLoading = () => {
			state.loading = false;
			useOverlay.hide();
		};

		const handleLoading = async (loadingFunction: () => void | Promise<void>) => {
			showLoading();
			try {
				await callOptionalFunction(loadingFunction);
			} finally {
				hideLoading();
			}
		};

		const handleClick = (event: MouseEvent) => {
			if (props.disabledLoading) {
				// 回调点击事件
				emit("click", event);
			} else {
				showLoading();
				// 回调点击事件
				emit("click", event, hideLoading);
			}
		};

		/**
		 * 监听外部 loading 的值
		 */
		watch(
			() => props.loading,
			(newValue) => {
				if (props.disabledLoading) return;
				if (newValue) {
					showLoading();
				} else {
					hideLoading();
				}
			},
			{
				immediate: true,
			}
		);

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
			/** @description 按钮 html 元素 */
			ref: computed(() => buttonRef.value?.ref),
			/** @description 按钮尺寸 */
			size: computed(() => buttonRef.value?.size),
			/** @description 按钮类型 */
			type: computed(() => buttonRef.value?.type),
			/** @description 按钮已禁用 */
			disabled: computed(() => buttonRef.value?.disabled),
			/** @description 是否在两个字符之间插入空格 */
			shouldAddSpace: computed(() => buttonRef.value?.shouldAddSpace),
			/** @description 加载状态 */
			loading: toRef(state, "loading"),
			/** @description 按钮加载 */
			doLoading: handleLoading,
		});
	},
});
