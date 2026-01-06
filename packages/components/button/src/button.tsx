import { computed, defineComponent, reactive, ref, watch, withModifiers } from "vue";
import { ElButton, buttonEmits, buttonProps } from "element-plus";
import { Eleme } from "@element-plus/icons-vue";
import { useOverlay } from "@fast-element-plus/hooks";
import { consoleError, definePropType, execFunction, makeSlots, useExpose, useProps, useRender } from "@fast-china/utils";
import { isFunction } from "lodash-unified";
import type { ButtonInstance } from "element-plus";
import type { Component, VNode } from "vue";

export const faButtonProps = {
	...buttonProps,
	/**
	 * @description customize loading icon component
	 * @default Eleme
	 */
	loadingIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: (): string | Component => Eleme,
	},
	/** @description 禁用加载 */
	disabledLoading: Boolean,
};

export const faButtonEmits = {
	...buttonEmits,
	/**
	 * @description 点击事件
	 * @param done 需要手动隐藏Loading
	 */
	click: (event: MouseEvent, done: () => void = () => {}): boolean => event instanceof MouseEvent && isFunction(done),
};

type FaButtonSlots = {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 自定义加载中组件 */
	loading: never;
	/** @description 自定义图标组件 */
	icon: never;
};

export default defineComponent({
	name: "FaButton",
	props: faButtonProps,
	emits: faButtonEmits,
	slots: makeSlots<FaButtonSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const state = reactive({
			loading: false,
		});

		const buttonRef = ref<ButtonInstance>();

		const showLoading = (): void => {
			state.loading = true;
			// 这里默认透明
			useOverlay.show(0);
		};

		const hideLoading = (): void => {
			state.loading = false;
			useOverlay.hide();
		};

		const handleLoading = (loadingFunction: () => void | Promise<void>): void => {
			state.loading = true;
			execFunction(loadingFunction)
				.then()
				.catch((error) => {
					consoleError("FaButton", error);
				})
				.finally(() => {
					state.loading = false;
				});
		};

		const handleClick = (event: MouseEvent): void => {
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
					default: () => slots.default && slots.default(),
					...(slots.loading && { loading: (): VNode[] => slots.loading() }),
					...(slots.icon && { icon: (): VNode[] => slots.icon() }),
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
			loading: computed(() => state.loading),
			/** @description 按钮加载 */
			doLoading: handleLoading,
		});
	},
});
