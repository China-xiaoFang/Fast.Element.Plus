import { computed, defineComponent, reactive } from "vue";
import { ElIcon, ElImage, imageProps } from "element-plus";
import { Picture as ElIconPicture } from "@element-plus/icons-vue";
import { makeSlots, useProps, useRender } from "@fast-china/utils";
import type { VNode } from "vue";

export const faImageProps = {
	...imageProps,
	/** @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode. */
	hideOnClickModal: {
		type: Boolean,
		default: true,
	},
	/** @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`. */
	previewTeleported: {
		type: Boolean,
		default: true,
	},
	/** @description whether to use lazy load. */
	lazy: {
		type: Boolean,
		default: true,
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
	/** @description 是否可以预览图片 */
	preview: {
		type: Boolean,
		default: true,
	},
};

type FaImageSlots = {
	/** @description 当图像尚未加载时，自定义的占位符内容 */
	placeholder: never;
	/** @description 自定义图像加载失败的内容 */
	error: never;
	/** @description 当图像预览时自定义内容 */
	viewer: { src: string };
};

export default defineComponent({
	name: "FaImage",
	props: faImageProps,
	slots: makeSlots<FaImageSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const state = reactive({
			/** 图片加载错误 */
			loadError: false,
			src: computed(() => {
				if (!props.src) return undefined;
				if (props.base64) {
					return `data:image/png;base64,${props.src}`;
				} else if (props.original || state.loadError) {
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
			previewList: computed(() => (props.preview ? [props.base64 ? `data:image/png;base64,${props.src}` : props.src] : [])),
		});

		const bindProps = useProps(props, imageProps, ["src", "previewSrcList"]);

		useRender(() => (
			<ElImage
				{...bindProps.value}
				class="fa-image"
				src={state.src}
				previewSrcList={state.previewList}
				onError={() => {
					if (!state.loadError) state.loadError = true;
				}}
			>
				{{
					error: () =>
						slots.error ? (
							slots.error()
						) : (
							<div class="fa-image__error-image">
								<ElIcon class="icon">
									<ElIconPicture />
								</ElIcon>
							</div>
						),
					...(slots.placeholder && { placeholder: (): VNode[] => slots.placeholder() }),
					...(slots.viewer && { viewer: (): VNode[] => slots.viewer({ src: state.src }) }),
				}}
			</ElImage>
		));
	},
});
