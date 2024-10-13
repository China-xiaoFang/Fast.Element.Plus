import { defineComponent, ref, provide, computed, onMounted, nextTick, onActivated, onUnmounted, onDeactivated, watch, createVNode } from "vue";
import "../../../utils/index.mjs";
import { isArray, isObject, isNumber } from "lodash-unified";
import { definePropType } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { consoleWarn } from "../../../utils/console.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
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
    const findIndex = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const fields = [];
      let suffix = null;
      const slotContent = (_a = divElRef.value) == null ? void 0 : _a.children;
      if (slotContent) {
        for (let i = 0; i < slotContent.length; i++) {
          const slotNode = (_b = slotContent[i]["__vueParentComponent"]) == null ? void 0 : _b.vnode;
          if (typeof (slotNode == null ? void 0 : slotNode.type) === "object" && (slotNode == null ? void 0 : slotNode.type.name) === "FaLayoutGridItem" && ((_c = slotNode == null ? void 0 : slotNode.props) == null ? void 0 : _c.suffix) !== void 0) suffix = slotNode;
          if (typeof (slotNode == null ? void 0 : slotNode.type) === "symbol" && Array.isArray(slotNode == null ? void 0 : slotNode.children)) slotNode == null ? void 0 : slotNode.children.forEach((child) => fields.push(child));
        }
      }
      let suffixCols = 0;
      if (suffix) {
        suffixCols = (((_d = suffix.props[breakPoint.value]) == null ? void 0 : _d.span) ?? ((_e = suffix.props) == null ? void 0 : _e.span) ?? 1) + (((_f = suffix.props[breakPoint.value]) == null ? void 0 : _f.offset) ?? ((_g = suffix.props) == null ? void 0 : _g.offset) ?? 0);
      }
      try {
        let find = false;
        fields.reduce((prev = 0, current, index) => {
          var _a2, _b2, _c2, _d2;
          prev += (((_a2 = current.props[breakPoint.value]) == null ? void 0 : _a2.span) ?? ((_b2 = current.props) == null ? void 0 : _b2.span) ?? 1) + (((_c2 = current.props[breakPoint.value]) == null ? void 0 : _c2.offset) ?? ((_d2 = current.props) == null ? void 0 : _d2.offset) ?? 0);
          if (prev > collapsedRows * cols.value - suffixCols) {
            hiddenIndex.value = index;
            find = true;
          }
          return prev;
        }, 0);
        if (!find) hiddenIndex.value = -1;
      } catch (error) {
        consoleWarn("FaLayoutGrid", error);
      }
    };
    let resizeObserver = null;
    onMounted(() => {
      nextTick(() => {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(divElRef.value);
      });
    });
    onActivated(() => {
      nextTick(() => {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(divElRef.value);
      });
    });
    onUnmounted(() => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
    });
    onDeactivated(() => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
    });
    onMounted(() => {
      watch(() => breakPoint.value, () => {
        if (props.collapsed) {
          emit("breakPointChange", {
            breakPoint: breakPoint.value
          });
          findIndex();
        }
      }, {
        immediate: true
      });
    });
    watch(() => props.collapsed, (value) => {
      if (value) return findIndex();
      hiddenIndex.value = -1;
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
    useRender(() => createVNode("div", {
      "ref": divElRef,
      "style": style.value
    }, [slots.default && slots.default()]));
  }
});
export {
  LayoutGrid as default
};
//# sourceMappingURL=layoutGrid.mjs.map
