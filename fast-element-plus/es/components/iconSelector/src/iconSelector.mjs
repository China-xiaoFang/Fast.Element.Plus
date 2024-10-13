import { isVNode, defineComponent, reactive, computed, createVNode, createTextVNode } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ChromeFilled, RefreshRight } from "@element-plus/icons-vue";
import { FaIcon } from "../../icon/index.mjs";
import { FastElementPlusIconsVue } from "@fast-element-plus/icons-vue";
import "../../../utils/index.mjs";
import { ElPopover, ElInput, ElIcon, ElScrollbar } from "element-plus";
import { isString } from "lodash-unified";
import { definePropType } from "../../../utils/vue/props.mjs";
import { withDefineType } from "../../../utils/vue/with.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const IconSelector = /* @__PURE__ */ defineComponent({
  name: "FaIconSelector",
  props: {
    /** @description v-model绑定值 */
    modelValue: String,
    /** @description 自定义图标 */
    customIcons: definePropType(Array)
  },
  emits: {
    /** @description v-model 回调 */
    "update:modelValue": (value) => isString(value),
    /** @description 改变 */
    change: (value) => isString(value)
  },
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const state = reactive({
      value: withDefineType(),
      searchValue: withDefineType(),
      iconType: withDefineType("ele"),
      popoverVisible: false,
      iconNames: withDefineType(Object.keys(ElementPlusIconsVue)),
      renderIconNames: computed(() => {
        if (!state.searchValue) return state.iconNames;
        return state.iconNames.filter((f) => f.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1);
      })
    });
    const handleTabClick = (iconType) => {
      state.iconType = iconType;
      state.iconNames = [];
      switch (iconType) {
        case "ele":
          state.iconNames = Object.keys(ElementPlusIconsVue).map((m) => `el-icon-${m}`);
          break;
        case "fastEle":
          state.iconNames = Object.keys(FastElementPlusIconsVue).map((m) => `fa-icon-${m}`);
          break;
        case "local":
          state.iconNames = props.customIcons;
          break;
      }
    };
    const handleIconClick = (value) => {
      state.popoverVisible = false;
      state.value = value;
      state.searchValue = "";
      emit("update:modelValue", value);
      emit("change", value);
    };
    const handleRefresh = () => {
      state.value = null;
      state.searchValue = null;
      emit("update:modelValue", null);
      emit("change", null);
    };
    useRender(() => createVNode(ElPopover, {
      "popperClass": "fa-icon-selector-popover",
      "visible": state.popoverVisible,
      "width": "auto",
      "trigger": "click",
      "showArrow": false,
      "showAfter": 0,
      "hideAfter": 0
    }, {
      reference: () => createVNode(ElInput, {
        "modelValue": state.searchValue,
        "onUpdate:modelValue": ($event) => state.searchValue = $event,
        "placeholder": "搜索图标"
      }, {
        prepend: () => createVNode(ElIcon, null, {
          default: () => [createVNode(ChromeFilled, null, null)]
        }),
        append: () => createVNode(ElIcon, {
          "onClick": handleRefresh
        }, {
          default: () => [createVNode(RefreshRight, null, null)]
        })
      }),
      default: () => {
        let _slot;
        return createVNode("div", {
          "class": "fa-icon-selector-popover__box"
        }, [createVNode("div", {
          "class": "fa-icon-selector-popover__box-header"
        }, [createVNode("div", {
          "class": "fa-icon-selector-popover__box-header__title"
        }, [createTextVNode("请选择图标")]), createVNode("div", {
          "class": "fa-icon-selector-popover__box-header__tab"
        }, [createVNode("span", {
          "class": [state.iconType === "ele" ? "fa-icon-selector-popover__box-header__tab-is-active" : ""],
          "title": "Element Plus 图标",
          "onClick": () => handleTabClick("ele")
        }, [createTextVNode("ele")]), createVNode("span", {
          "class": [state.iconType === "fastEle" ? "fa-icon-selector-popover__box-header__tab-is-active" : ""],
          "title": "Fast Element Plus 图标",
          "onClick": () => handleTabClick("fastEle")
        }, [createTextVNode("fastEle")]), createVNode("span", {
          "class": [state.iconType === "local" ? "fa-icon-selector-popover__box-header__tab-is-active" : ""],
          "title": "本地图标",
          "onClick": () => handleTabClick("local")
        }, [createTextVNode("local")])])]), createVNode("div", {
          "class": "fa-icon-selector-popover__box-body"
        }, [createVNode(ElScrollbar, null, _isSlot(_slot = state.renderIconNames.map((m) => createVNode("div", {
          "class": "fa-icon-selector-popover__box-body__item",
          "title": m,
          "onClick": () => handleIconClick(m)
        }, [createVNode(FaIcon, {
          "name": m
        }, null)]))) ? _slot : {
          default: () => [_slot]
        })])]);
      }
    }));
    expose({
      iconType: state.iconType
    });
    return {
      iconType: state.iconType
    };
  }
});
export {
  IconSelector as default
};
//# sourceMappingURL=iconSelector.mjs.map
