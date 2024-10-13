import type { Component, VNode } from "vue";
import { computed, defineComponent, reactive, ref, watch, withModifiers } from "vue";
import { Eleme } from "@element-plus/icons-vue";
import { useOverlay } from "@fast-element-plus/hooks";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import type { ButtonInstance } from "element-plus";
import { ElButton, buttonEmits, buttonProps } from "element-plus";
import { isFunction } from "lodash-unified";

export const faButtonProps = {
	...buttonProps,
	/**
	 * @description customize loading icon component
	 * @default Eleme
	 */
	loadingIcon: {
		type: definePropType<string | Component>([String, Object, Function]),
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		default: () => Eleme,
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
	// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-function-return-type
	click: (event: MouseEvent, done: () => void = () => {}) => event instanceof MouseEvent && isFunction(done),
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
			...computed(() => ({
				/** @description button html element */
				ref: buttonRef.value?.ref,
				/** @description button size */
				size: buttonRef.value?.size,
				/** @description button type */
				type: buttonRef.value?.type,
				/** @description button disabled */
				disabled: buttonRef.value?.disabled,
				/** @description whether adding space */
				shouldAddSpace: buttonRef.value?.shouldAddSpace,
			})).value,
			/** @description 加载状态 */
			loading: state.loading,
		});
	},
});
