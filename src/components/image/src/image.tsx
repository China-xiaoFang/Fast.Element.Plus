import { computed, defineComponent, reactive, ref, watch } from "vue";
import { Picture as ElIconPicture } from "@element-plus/icons-vue";
import { ElIcon, ElImage, imageEmits, imageProps } from "element-plus";
import { makeSlots, useEmits, useExpose, useProps, useRender } from "../../../utils";
import type { ImageInstance, ImageViewerAction } from "element-plus";
import type { VNode } from "vue";

/** FaImage 的运行时 Props 定义。 */
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

/** FaImage 的运行时事件定义。 */
export const faImageEmits = {
	...imageEmits,
};

/** FaImage 的插槽参数。 */
export interface FaImageSlots extends Record<string, unknown> {
	/** @description 当图像尚未加载时，自定义的占位符内容 */
	placeholder: never;
	/** @description 自定义图像加载失败的内容 */
	error: never;
	/** @description 当图像预览时自定义内容 */
	viewer: { src?: string };
	/** @description 图片预览进度内容 */
	progress: { activeIndex: number; total: number };
	/** @description 图片预览工具栏内容 */
	toolbar: {
		actions: (action: ImageViewerAction, options?: Record<string, never>) => void;
		prev: () => void;
		next: () => void;
		reset: () => void;
		activeIndex: number;
		setActiveItem: (index: number) => void;
	};
	/** @description 图片预览加载失败内容 */
	"viewer-error": { activeIndex: number; src: string };
}

export default defineComponent({
	name: "FaImage",
	props: faImageProps,
	emits: faImageEmits,
	slots: makeSlots<FaImageSlots>(),
	setup(props, { slots, emit, expose }) {
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
			previewList: computed(() => (props.preview && props.src ? [props.base64 ? `data:image/png;base64,${props.src}` : props.src] : [])),
		});
		const imageRef = ref<ImageInstance>();

		watch(
			() => props.src,
			() => {
				state.loadError = false;
			}
		);

		const bindProps = useProps(props, imageProps, ["src", "previewSrcList"]);
		const bindEmits = useEmits(imageEmits, emit, ["error"]);

		useRender(() => (
			<ElImage
				{...bindProps.value}
				{...bindEmits.value}
				class="fa-image"
				ref={imageRef}
				src={state.src}
				previewSrcList={state.previewList}
				onError={(event) => {
					state.loadError ||= true;
					emit("error", event);
				}}
			>
				{{
					error: () =>
						slots.error ? (
							(slots.error?.() ?? [])
						) : (
							<div class="fa-image__error-image">
								<ElIcon class="icon">
									<ElIconPicture />
								</ElIcon>
							</div>
						),
					...(slots.placeholder && { placeholder: (): VNode[] => slots.placeholder?.() ?? [] }),
					...(slots.viewer && { viewer: (): VNode[] => slots.viewer?.({ src: state.src }) ?? [] }),
					...(slots.progress && {
						progress: (scope: { activeIndex: number; total: number }): VNode[] => slots.progress?.(scope) ?? [],
					}),
					...(slots.toolbar && {
						toolbar: (scope: FaImageSlots["toolbar"]): VNode[] => slots.toolbar?.(scope) ?? [],
					}),
					...(slots["viewer-error"] && {
						"viewer-error": (scope: { activeIndex: number; src: string }): VNode[] => slots["viewer-error"]?.(scope) ?? [],
					}),
				}}
			</ElImage>
		));

		return useExpose(expose, {
			/** @description 手动打开图片预览。 */
			showPreview: computed(() => imageRef.value?.showPreview),
		});
	},
});
