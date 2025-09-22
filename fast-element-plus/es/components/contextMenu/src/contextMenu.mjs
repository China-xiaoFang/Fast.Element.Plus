import { defineComponent, reactive, onMounted, createVNode, Transition, withDirectives, vShow, computed } from "vue";
import { useGlobalSize } from "element-plus";
import { FaIcon } from "../../icon/index.mjs";
import { useRender, useExpose, definePropType } from "@fast-china/utils";
import { useEventListener } from "@vueuse/core";
import { isObject } from "lodash-unified";
const ContextMenu = /* @__PURE__ */ defineComponent({
  name: "FaContextMenu",
  props: {
    /** @description 数据 */
    data: {
      type: definePropType(Array),
      default: () => []
    }
  },
  emits: {
    /** @description 点击事件 */
    click: (event, data) => event instanceof MouseEvent && isObject(data)
  },
  setup(props, {
    emit,
    expose
  }) {
    const _globalSize = useGlobalSize();
    const state = reactive({
      visible: false,
      axis: {
        x: 0,
        y: 0
      }
    });
    const handleClick = (event, data) => {
      if (data?.disabled) return;
      data?.click && data.click(event, data);
      emit("click", event, data);
    };
    const open = (axis = {
      x: 0,
      y: 0
    }) => {
      state.axis = axis;
      state.visible = true;
    };
    const close = () => {
      state.visible = false;
    };
    onMounted(() => {
      useEventListener(document, "click", close);
    });
    useRender(() => createVNode(Transition, {
      "name": "el-zoom-in-center"
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ["fa-context-menu", `fa-context-menu-${_globalSize.value}`, "el-popper el-dropdown__popper"],
        "style": {
          top: `${state.axis.y + 5}px`,
          left: `${state.axis.x + 14}px`
        },
        "key": Math.random()
      }, [createVNode("ul", {
        "class": "el-dropdown-menu"
      }, [props.data.filter((f) => !f.hide).map((item) => createVNode("li", {
        "class": ["el-dropdown-menu__item", item?.disabled === true ? "is-disabled" : ""],
        "tabIndex": "-1",
        "onClick": (event) => {
          handleClick(event, item);
        }
      }, [item?.icon ? createVNode(FaIcon, {
        "name": item?.icon
      }, null) : null, createVNode("span", null, [item.label])]))])]), [[vShow, state.visible]])]
    }));
    return useExpose(expose, {
      /** @description 是否显示 */
      visible: computed(() => state.visible),
      /** @description 打开菜单 */
      open,
      /** @description 关闭菜单 */
      close
    });
  }
});
export {
  ContextMenu as default
};
//# sourceMappingURL=contextMenu.mjs.map
