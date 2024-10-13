import { defineComponent, reactive, computed, createVNode, mergeProps } from "vue";
import { Picture } from "@element-plus/icons-vue";
import "../../../utils/index.mjs";
import { avatarProps, avatarEmits, ElAvatar } from "element-plus";
import { definePropType, useProps } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
const faAvatarProps = {
  ...avatarProps,
  /** @description representation type to icon, more info on icon component. */
  icon: {
    type: definePropType([String, Object, Function]),
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    default: () => Picture
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
  thumb: Boolean
};
const faAvatarEmits = {
  ...avatarEmits
};
const Avatar = /* @__PURE__ */ defineComponent({
  name: "FaAvatar",
  props: faAvatarProps,
  emits: faAvatarEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
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
            return `${props.src}@!thumb`;
          }
        }
        return void 0;
      })
    });
    const elAvatarProps = useProps(props, avatarProps, ["src"]);
    useRender(() => createVNode(ElAvatar, mergeProps(elAvatarProps.value, {
      "class": "fa-avatar",
      "src": state.src,
      "onError": (evt) => emit("error", evt)
    }), {
      default: () => [slots.default && slots.default({
        src: state.src
      })]
    }));
    return useExpose(expose, {
      /** @description 图片路径 */
      src: state.src
    });
  }
});
export {
  Avatar as default,
  faAvatarEmits,
  faAvatarProps
};
//# sourceMappingURL=avatar.mjs.map
