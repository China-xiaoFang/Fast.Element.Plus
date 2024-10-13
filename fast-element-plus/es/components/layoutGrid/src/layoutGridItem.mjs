import { defineComponent, reactive, inject, ref, watch, computed, withDirectives, createVNode, vShow } from "vue";
import "../../../utils/index.mjs";
import { definePropType } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
const LayoutGridItem = /* @__PURE__ */ defineComponent({
  name: "FaLayoutGridItem",
  props: {
    /** @description 偏移 */
    offset: {
      type: Number,
      default: 0
    },
    /** @description 占位 */
    span: {
      type: Number,
      default: 1
    },
    /** @description 后缀 */
    suffix: {
      type: Boolean,
      default: false
    },
    /** @description 响应式，小于480px屏幕配置 */
    xs: {
      type: definePropType(Object)
    },
    /** @description 响应式，平板竖屏配置 */
    sm: {
      type: definePropType(Object)
    },
    /** @description 响应式，平板横屏配置 */
    md: {
      type: definePropType(Object)
    },
    /** @description 响应式，小型桌面配置 */
    lg: {
      type: definePropType(Object)
    },
    /** @description 响应式，大型桌面配置 */
    xl: {
      type: definePropType(Object)
    }
  },
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const state = reactive({
      show: true
    });
    const attrsObj = attrs;
    const breakPoint = inject("breakPoint", ref("xl"));
    const shouldHiddenIndex = inject("shouldHiddenIndex", ref(-1));
    watch(() => [shouldHiddenIndex.value, breakPoint.value], (n) => {
      if (~~attrsObj.index) {
        state.show = !(n[0] !== -1 && parseInt(attrsObj.index) >= Number(n[0]));
      }
    }, {
      immediate: true
    });
    const gap = inject("gap", 0);
    const cols = inject("cols", ref(5));
    const style = computed(() => {
      const breakPointObk = props[breakPoint.value];
      const span = (breakPointObk == null ? void 0 : breakPointObk.span) ?? props.span;
      const offset = (breakPointObk == null ? void 0 : breakPointObk.offset) ?? props.offset;
      if (props.suffix) {
        return {
          gridColumnStart: cols.value - span - offset + 1,
          gridColumnEnd: `span ${span + offset}`,
          marginLeft: offset !== 0 ? `calc(((100% + ${gap}px) / ${span + offset}) * ${offset})` : "unset"
        };
      } else {
        return {
          gridColumn: `span ${span + offset > cols.value ? cols.value : span + offset}/span ${span + offset > cols.value ? cols.value : span + offset}`,
          marginLeft: offset !== 0 ? `calc(((100% + ${gap}px) / ${span + offset}) * ${offset})` : "unset"
        };
      }
    });
    useRender(() => withDirectives(createVNode("div", {
      "style": style.value
    }, [slots.default && slots.default()]), [[vShow, state.show]]));
  }
});
export {
  LayoutGridItem as default
};
//# sourceMappingURL=layoutGridItem.mjs.map
