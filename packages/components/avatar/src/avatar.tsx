import type { Component } from "vue";
import { computed, defineComponent, reactive } from "vue";
import { Picture } from "@element-plus/icons-vue";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import { ElAvatar, avatarEmits, avatarProps } from "element-plus";

export const faAvatarProps = {
	...avatarProps,
	/** @description representation type to icon, more info on icon component. */
	icon: {
		type: definePropType<string | Component>([String, Object, Function]),
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		default: () => Picture,
	},
	/**
	 * @description 原图
	 */
	original: Boolean,
	/** @description 标准 */
	normal: Boolean,
	/** @description 小图 */
	small: Boolean,
	/** @description 缩略图 */
	thumb: Boolean,
};

export const faAvatarEmits = {
	...avatarEmits,
};

type FaAvatarSlots = {
	/** @description 默认内容插槽 */
	default: { src: string };
};

export default defineComponent({
	name: "FaAvatar",
	props: faAvatarProps,
	emits: faAvatarEmits,
	slots: makeSlots<FaAvatarSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const state = reactive({
			src: computed(() => {
				if (props.src) {
					if (props.original) {
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
				}
				return undefined;
			}),
		});

		const elAvatarProps = useProps(props, avatarProps, ["src"]);

		useRender(() => (
			<ElAvatar {...elAvatarProps.value} class="fa-avatar" src={state.src} onError={(evt: Event) => emit("error", evt)}>
				{slots.default && slots.default({ src: state.src })}
			</ElAvatar>
		));

		return useExpose(expose, {
			/** @description 图片路径 */
			src: state.src,
		});
	},
});
