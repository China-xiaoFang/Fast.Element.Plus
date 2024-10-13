import { defineComponent, reactive, computed, createVNode, mergeProps } from "vue";
import { Picture } from "@element-plus/icons-vue";
import "../../../utils/index.mjs";
import { imageProps, ElImage, ElIcon } from "element-plus";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useProps } from "../../../utils/vue/props.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
const faImageProps = {
  ...imageProps,
  /** @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode. */
  hideOnClickModal: {
    type: Boolean,
    default: true
  },
  /** @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`. */
  previewTeleported: {
    type: Boolean,
    default: true
  },
  /** @description whether to use lazy load. */
  lazy: {
    type: Boolean,
    default: true
  },
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
    default: true
  }
};
const Image = /* @__PURE__ */ defineComponent({
  name: "FaImage",
  props: faImageProps,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    expose
  }) {
    const state = reactive({
      src: computed(() => {
        if (!props.src) return props.src;
        if (props.original) {
          return props.src;
        } else if (props.normal) {
          return `${props.src}@!normal`;
        } else if (props.small) {
          return `${props.src}@!small`;
        } else if (props.thumb) {
          return `${props.src}@!thumb`;
        } else {
          return `${props.src}@!thumb`;
        }
      }),
      previewList: computed(() => props.preview ? [props.src] : [])
    });
    const bindProps = useProps(props, imageProps, ["src", "previewSrcList"]);
    useRender(() => createVNode(ElImage, mergeProps(attrs, bindProps.value, {
      "class": "fa-image",
      "src": state.src,
      "previewSrcList": state.previewList
    }), {
      error: () => slots.error ? slots.error() : createVNode("div", {
        "class": "fa-image__error-image"
      }, [createVNode(ElIcon, {
        "class": "icon"
      }, {
        default: () => [createVNode(Picture, null, null)]
      })]),
      ...slots.placeholder && {
        placeholder: () => slots.placeholder()
      },
      ...slots.viewer && {
        viewer: () => slots.viewer({
          src: state.src
        })
      }
    }));
  }
});
export {
  Image as default,
  faImageProps
};
//# sourceMappingURL=image.mjs.map
