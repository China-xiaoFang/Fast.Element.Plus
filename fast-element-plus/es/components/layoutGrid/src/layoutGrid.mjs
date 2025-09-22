import { defineComponent, ref, provide, computed, onMounted, nextTick, watch, onActivated, onUnmounted, onDeactivated, createVNode } from "vue";
import { useRender, useExpose, makeSlots, definePropType } from "@fast-china/utils";
import { isArray, isObject, isNumber } from "lodash-unified";
const LayoutGrid = /* @__PURE__ */ defineComponent({
  name: "FaLayoutGrid",
  props: {
    /** @description Grid布局列配置 */
    cols: {
      type: definePropType([String, Number, Object]),
      default: () => ({
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5
      })
    },
    /** @description 折叠 */
    collapsed: Boolean,
    /** @description 折叠行数 */
    collapsedRows: {
      type: [String, Number],
      default: 1
    },
    /** @description 间距，偏移 */
    gap: {
      type: definePropType([Number, Array]),
      default: 0
    }
  },
  emits: {
    /** @description 断点变化事件 */
    breakPointChange: ({
      breakPoint
    }) => true
  },
  slots: makeSlots(),
  setup(props, {
    slots,
    emit,
    expose
  }) {
    const divElRef = ref();
    provide("gap", isArray(props.gap) ? props.gap[0] : props.gap);
    const breakPoint = ref("xl");
    provide("breakPoint", breakPoint);
    const hiddenIndex = ref(-1);
    provide("shouldHiddenIndex", hiddenIndex);
    const cols = computed(() => {
      if (isObject(props.cols)) return props.cols[breakPoint.value] ?? props.cols;
      return props.cols;
    });
    provide("cols", cols);
    const collapsedRows = isNumber(props.collapsedRows) ? props.collapsedRows : Number(props.collapsedRows);
    const breakpoints = {
      // 小于480屏幕（如手机）
      xs: {
        min: 0,
        max: 479
      },
      // 平板竖屏
      sm: {
        min: 480,
        max: 768
      },
      // 平板横屏
      md: {
        min: 768,
        max: 1024
      },
      // 小型桌面
      lg: {
        min: 1024,
        max: 1440
      },
      // 大型桌面
      xl: {
        min: 1440,
        max: Infinity
      }
    };
    const resize = (e) => {
      if (e.length !== 1) throw new Error("未知的多个El");
      const curEl = e[0];
      const width = curEl.target.scrollWidth;
      for (const [key, {
        min,
        max
      }] of Object.entries(breakpoints)) {
        if (width >= min && width <= max) {
          breakPoint.value = key;
          break;
        }
      }
    };
    let resizeObserver = null;
    onMounted(() => {
      nextTick(() => {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(divElRef.value);
      });
      watch(() => breakPoint.value, (newValue) => {
        emit("breakPointChange", {
          breakPoint: newValue
        });
      }, {
        immediate: true
      });
    });
    onActivated(() => {
      nextTick(() => {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(divElRef.value);
      });
    });
    onUnmounted(() => {
      resizeObserver?.disconnect();
    });
    onDeactivated(() => {
      resizeObserver?.disconnect();
    });
    const gap = computed(() => {
      if (isNumber(props.gap)) return `${props.gap}px`;
      if (isArray(props.gap)) return `${props.gap[1]}px ${props.gap[0]}px`;
      return "unset";
    });
    const style = computed(() => {
      return {
        display: "grid",
        gridGap: gap.value,
        gridTemplateColumns: `repeat(${cols.value}, minmax(0, 1fr))`
      };
    });
    useRender(() => {
      const defaultSlot = slots?.default() ?? [];
      if (props.collapsed) {
        const fields = [];
        let suffix = null;
        defaultSlot.forEach((slot) => {
          if (typeof slot.type === "object" && slot.type.name === "FaLayoutGridItem" && slot.props?.suffix !== void 0) suffix = slot;
          if (typeof slot.type === "symbol" && Array.isArray(slot?.children)) fields.push(...slot.children);
        });
        let suffixCols = 0;
        if (suffix) {
          suffixCols = (suffix.props[breakPoint.value]?.span ?? suffix.props?.span ?? 1) + (suffix.props[breakPoint.value]?.offset ?? suffix.props?.offset ?? 0);
        }
        try {
          let find = false;
          fields.reduce((prev = 0, current, index) => {
            prev += (current.props[breakPoint.value]?.span ?? current.props?.span ?? 1) + (current.props[breakPoint.value]?.offset ?? current.props?.offset ?? 0);
            if (Number(prev) > collapsedRows * Number(cols.value) - suffixCols) {
              hiddenIndex.value = index;
              find = true;
              throw "find it";
            }
            return prev;
          }, 0);
          if (!find) hiddenIndex.value = -1;
        } catch {
        }
      } else {
        hiddenIndex.value = -1;
      }
      return createVNode("div", {
        "ref": divElRef,
        "style": style.value
      }, [defaultSlot]);
    });
    return useExpose(expose, {
      /** @description 响应式断点 */
      breakPoint
    });
  }
});
export {
  LayoutGrid as default
};
//# sourceMappingURL=layoutGrid.mjs.map
