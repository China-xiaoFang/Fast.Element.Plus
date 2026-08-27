import { computed, defineComponent, reactive } from "vue";
import { Picture } from "@element-plus/icons-vue";
import { ElAvatar, avatarEmits, avatarProps } from "element-plus";
import { definePropType, makeSlots, useEmits, useExpose, useProps, useRender } from "../../../utils";
import type { Component } from "vue";

/** FaAvatar 的运行时 Props 定义。 */
export const faAvatarProps = {
	...avatarProps,
	/** @description representation type to icon, more info on icon component. */
	icon: {
		type: definePropType<string | Component>([String, Object, Function]),
		default: (): string | Component => Picture,
	},
	/** @description Base64图片 */
	base64: Boolean,
	/** @description 原图 */
	original: Boolean,
	/** @description 标准 */
	normal: Boolean,
	/** @description 小图 */
	small: Boolean,
	/** @description 缩略图 */
	thumb: Boolean,
};

/** FaAvatar 的运行时 Emits 定义。 */
export const faAvatarEmits = {
	...avatarEmits,
};

/** FaAvatar 的插槽参数。 */
export interface FaAvatarSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: { src?: string };
}

export default defineComponent({
	name: "FaAvatar",
	props: faAvatarProps,
	emits: faAvatarEmits,
	slots: makeSlots<FaAvatarSlots>(),
	setup(props, { slots, emit, expose }) {
		const state = reactive({
			src: computed(() => {
				if (!props.src) return undefined;
				if (props.base64) {
					return `data:image/png;base64,${props.src}`;
				} else if (props.original) {
					return props.src;
				} else if (props.normal) {
					return `${props.src}@!normal`;
				} else if (props.small) {
					return `${props.src}@!small`;
				} else if (props.thumb) {
					return `${props.src}@!thumb`;
				} else {
					// 默认使用缩略图
					return `${props.src}@!thumb`;
				}
			}),
		});

		const elAvatarProps = useProps(props, avatarProps, ["src"]);
		const elAvatarEmits = useEmits(avatarEmits, emit);

		useRender(() => (
			<ElAvatar {...elAvatarProps.value} {...elAvatarEmits.value} class="fa-avatar" src={state.src}>
				{slots.default?.({ src: state.src })}
			</ElAvatar>
		));

		return useExpose(expose, {
			/** @description 图片路径 */
			src: state.src,
		});
	},
});
