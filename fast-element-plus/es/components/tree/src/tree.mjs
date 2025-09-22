import { defineComponent, reactive, computed, ref, nextTick, onMounted, watch, withDirectives, createVNode, mergeProps, createTextVNode, resolveDirective } from "vue";
import { useGlobalSize, ElIcon, ElInput, ElScrollbar, ElTree } from "element-plus";
import { Expand, Fold } from "@element-plus/icons-vue";
import { definePropType, addUnit, withDefineType, consoleError, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isObject, isString, isBoolean, isArray, isNull, isNumber } from "lodash-unified";
import { treeProps } from "./tree.props.mjs";
const faTreeProps = {
  ...treeProps,
  /** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
  nodeKey: {
    type: String,
    default: "value"
  },
  /** @description 是否默认展开所有节点 */
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  /** @description 是否在点击节点的时候选中节点 */
  checkOnClickNode: {
    type: Boolean,
    default: true
  },
  /** @description 是否高亮当前选中节点 */
  highlightCurrent: {
    type: Boolean,
    default: true
  },
  /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
  collapseOnClickNode: Boolean,
  /** @description v-model绑定值 */
  modelValue: {
    type: definePropType([String, Number, Boolean, Object]),
    default: void 0
  },
  /** @description v-model:label绑定值 */
  label: String,
  /** @description 宽度 */
  width: {
    type: [String, Number],
    default: 180
  },
  /** @description 默认选择 */
  defaultSelection: [String, Number],
  /** @description 标题 */
  title: String,
  /** @description 折叠 */
  hamburger: Boolean,
  /** @description 隐藏全部 */
  hideAll: Boolean,
  /** @description 隐藏过滤 */
  hideFilter: Boolean,
  /** @description 全部值 */
  allValue: {
    type: definePropType([String, Number, Boolean, Object]),
    default: void 0
  },
  /** @description 树形数据 */
  data: {
    type: definePropType(Array),
    default: () => []
  },
  /** @description 请求api */
  requestApi: {
    type: definePropType(Function)
  },
  /** 初始化参数 */
  initParam: definePropType([String, Number, Object])
};
const faTreeEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isNull(value),
  /** @description v-model:label 回调 */
  "update:label": (value) => isString(value) || isNull(value),
  /** @description 数据改变 */
  dataChangeCallBack: (data, orgData) => isArray(data) && isArray(orgData),
  /** @description 改变 */
  change: (data, node, instance, event) => isObject(data) && isObject(node) && isObject(instance) && event instanceof MouseEvent,
  /** @description 当节点被点击的时候触发 */
  nodeClick: (data, node, instance, event) => isObject(data) && isObject(node) && isObject(instance) && event instanceof MouseEvent,
  /** @description 当某一节点被鼠标右键点击时会触发该事件 */
  nodeContextmenu: (event, data, node, instance) => event instanceof Event && isObject(data) && isObject(node) && isObject(instance),
  /** @description 当复选框被点击的时候触发 */
  checkChange: (data, checked, indeterminate) => isObject(data) && isBoolean(checked) && isBoolean(indeterminate),
  /** @description 点击节点复选框之后触发 */
  check: (data, node) => isObject(data) && isObject(node),
  /** @description 当前选中节点变化时触发的事件 */
  currentChange: (data, node) => isObject(data) && isObject(node),
  /** @description 节点被展开时触发的事件 */
  nodeExpand: (data, node, instance) => isObject(data) && isObject(node) && isObject(instance),
  /** @description 节点被关闭时触发的事件 */
  nodeCollapse: (data, node, instance) => isObject(data) && isObject(node) && isObject(instance),
  /** @description 节点开始拖拽时触发的事件 */
  nodeDragStart: (node, event) => isObject(node) && event instanceof DragEvent,
  /** @description 拖拽进入其他节点时触发的事件 */
  nodeDragEnter: (node, enterNode, event) => isObject(node) && isObject(enterNode) && event instanceof DragEvent,
  /** @description 拖拽离开某个节点时触发的事件 */
  nodeDragLeave: (node, leaveNode, event) => isObject(node) && isObject(leaveNode) && event instanceof DragEvent,
  /** @description 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） */
  nodeDragOver: (node, dropNode, event) => isObject(node) && isObject(dropNode) && event instanceof DragEvent,
  /** @description 拖拽结束时（可能未成功）触发的事件 */
  nodeDragEnd: (node, dropNode, dropType, event) => isObject(node) && isObject(dropNode) && isString(dropType) && event instanceof DragEvent,
  /** @description 拖拽成功完成时触发的事件 */
  nodeDrop: (node, dropNode, dropType, event) => isObject(node) && isObject(dropNode) && isString(dropType) && event instanceof DragEvent
};
const Tree = /* @__PURE__ */ defineComponent({
  name: "FaTree",
  props: faTreeProps,
  emits: faTreeEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const selectedLabel = useVModel(props, "label", emit, {
      passive: true
    });
    const _globalSize = useGlobalSize();
    const state = reactive({
      value: withDefineType(),
      loading: false,
      searchValue: withDefineType(),
      orgTreeData: withDefineType([]),
      treeData: withDefineType([]),
      hamburger: false,
      width: computed(() => {
        if (props.hamburger || state.hamburger) {
          return "130px";
        } else {
          const width = addUnit(props.width);
          if (_globalSize.value === "small") {
            return `calc(${width} * 0.9)`;
          } else {
            return width;
          }
        }
      })
    });
    const fold = computed(() => [...state.orgTreeData].filter((f) => f[props.props.children]?.length > 0).length === 0);
    const treeRef = ref();
    const setTreeData = (treeData) => {
      if (!props.hideAll) {
        treeData.unshift({
          [props.nodeKey]: props.allValue,
          label: "全部",
          all: true
        });
      }
      state.treeData = treeData;
    };
    const loadData = async () => {
      let curSelectedData;
      if (props.nodeKey) {
        curSelectedData = treeRef.value.getCurrentKey();
      }
      if (props.requestApi) {
        state.loading = true;
        const params = {
          ...props.initParam ?? {},
          searchValue: state.searchValue
        };
        try {
          const resData = await props.requestApi(params);
          state.orgTreeData = resData;
          setTreeData(resData);
        } catch (error) {
          consoleError("FaTree", error);
          state.orgTreeData = [];
          setTreeData([]);
          emit("dataChangeCallBack", state.treeData, state.orgTreeData);
        } finally {
          state.loading = false;
        }
      } else {
        state.orgTreeData = props.data;
        setTreeData(props.data);
      }
      if (props.nodeKey && curSelectedData) {
        nextTick(() => {
          treeRef.value.setCurrentKey(curSelectedData);
        });
      } else {
        if (props.defaultSelection) {
          nextTick(() => {
            treeRef.value.setCurrentKey(props.defaultSelection);
          });
        }
      }
    };
    const handleHamburgerClick = () => {
      if (props.hamburger || state.hamburger) {
        setTreeData(state.orgTreeData);
      } else {
        state.treeData = state.orgTreeData.map((m) => ({
          ...m,
          [props.props.children]: []
        }));
      }
      state.hamburger = !state.hamburger;
    };
    const handleFilterNode = (value, data, child) => {
      if (!value) return true;
      let parentNode = child.parent, labels = data.all ? [data.label] : [child.label], level = 1;
      while (level < child.level) {
        labels = [...labels, parentNode.label];
        parentNode = parentNode.parent;
        level++;
      }
      const result = labels.some((label) => label.indexOf(value) !== -1);
      if (props.filterNodeMethod) {
        return result && props.filterNodeMethod(value, data, child);
      }
      return result;
    };
    const handleNodeClick = (data, node, instance, event) => {
      if (props.expandOnClickNode) {
        if (!node.expanded) {
          node.expand();
        } else if (node.expanded && props.collapseOnClickNode) {
          node.collapse();
        }
      }
      state.value = node.key;
      selectedLabel.value = node.label;
      emit("update:modelValue", state.value);
      emit("change", data, node, instance, event);
      emit("nodeClick", data, node, instance, event);
    };
    onMounted(async () => {
      await loadData();
      watch(() => props.data, async () => {
        if (!props.requestApi) {
          await loadData();
        }
      }, {
        deep: true
      });
    });
    const elTreeProps = useProps(props, treeProps, ["data", "expandOnClickNode", "filterNodeMethod"]);
    useRender(() => withDirectives(createVNode("div", {
      "class": ["el-card fa-tree", `fa-tree-${_globalSize.value}`, {
        "fa-tree__fold": props.hamburger && state.hamburger || fold.value
      }],
      "style": {
        width: state.width
      }
    }, [(props.title || props.hamburger) && createVNode("div", {
      "class": "fa-tree__title"
    }, [props.title && createVNode("h4", null, [props.title]), props.hamburger && (state.hamburger ? createVNode(ElIcon, {
      "onClick": handleHamburgerClick,
      "title": "展开"
    }, {
      default: () => [createVNode(Expand, null, null)]
    }) : createVNode(ElIcon, {
      "onClick": handleHamburgerClick,
      "title": "折叠"
    }, {
      default: () => [createVNode(Fold, null, null)]
    }))]), !props.hideFilter && createVNode(ElInput, {
      "class": "fa-tree__search-input",
      "modelValue": state.searchValue,
      "modelModifiers": {
        "trim": true
      },
      "onUpdate:modelValue": ($event) => state.searchValue = $event,
      "placeholder": props.hamburger || state.hamburger ? "关键字过滤" : "输入关键字进行过滤",
      "clearable": true,
      "onInput": (value) => treeRef.value.filter(value)
    }, null), createVNode(ElScrollbar, {
      "class": "fa-tree__scrollbar"
    }, {
      default: () => [createVNode(ElTree, mergeProps(elTreeProps.value, {
        "ref": treeRef,
        "data": state.treeData,
        "expandOnClickNode": props.checkOnClickNode ? false : props.expandOnClickNode,
        "filterNodeMethod": handleFilterNode,
        "onNodeClick": handleNodeClick,
        "onNodeContextmenu": (event, data, node, instance) => emit("nodeContextmenu", event, data, node, instance),
        "onCheckChange": (data, checked, indeterminate) => emit("checkChange", data, checked, indeterminate),
        "onCheck": (data, node) => emit("check", data, node),
        "onCurrentChange": (data, node) => emit("currentChange", data, node),
        "onNodeExpand": (data, node, instance) => emit("nodeExpand", data, node, instance),
        "onNodeCollapse": (data, node, instance) => emit("nodeCollapse", data, node, instance),
        "onNodeDragStart": (node, event) => emit("nodeDragStart", node, event),
        "onNodeDragEnter": (node, enterNode, event) => emit("nodeDragEnter", node, enterNode, event),
        "onNodeDragLeave": (node, leaveNode, event) => emit("nodeDragLeave", node, leaveNode, event),
        "onNodeDragOver": (node, dropNode, event) => emit("nodeDragOver", node, dropNode, event),
        "onNodeDragEnd": (node, dropNode, dropType, event) => emit("nodeDragEnd", node, dropNode, dropType, event),
        "onNodeDrop": (node, dropNode, dropType, event) => emit("nodeDrop", node, dropNode, dropType, event)
      }), {
        default: ({
          node,
          data
        }) => createVNode("span", {
          "class": "el-tree-node__label",
          "title": data?.all ? data.label : node.label,
          "style": {
            paddingLeft: fold.value ? "3px" : ""
          }
        }, [createVNode("span", null, [slots.label ? slots.label({
          node,
          data
        }) : data?.all ? data.label : node.label]), node.key && data.showNum ? createVNode("span", null, [createTextVNode("["), data.quantity, createTextVNode("]")]) : null, slots.default && createVNode("span", null, [slots.default({
          node,
          data
        })])]),
        ...slots.empty && {
          empty: () => slots.empty()
        }
      })]
    })]), [[resolveDirective("loading"), state.loading]]));
    return useExpose(expose, {
      /** @description 过滤所有树节点，过滤后的节点将被隐藏 */
      filter: computed(() => treeRef.value?.filter),
      /** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
      updateKeyChildren: computed(() => treeRef.value?.updateKeyChildren),
      /** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
      getCheckedNodes: computed(() => treeRef.value?.getCheckedNodes),
      /** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
      setCheckedNodes: computed(() => treeRef.value?.setCheckedNodes),
      /** @description 	若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
      getCheckedKeys: computed(() => treeRef.value?.getCheckedKeys),
      /** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
      setCheckedKeys: computed(() => treeRef.value?.setCheckedKeys),
      /** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
      setChecked: computed(() => treeRef.value?.setChecked),
      /** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
      getHalfCheckedNodes: computed(() => treeRef.value?.getHalfCheckedNodes),
      /** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
      getHalfCheckedKeys: computed(() => treeRef.value?.getHalfCheckedKeys),
      /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
      getCurrentKey: computed(() => treeRef.value?.getCurrentKey),
      /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
      getCurrentNode: computed(() => treeRef.value?.getCurrentNode),
      /** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key  属性 */
      setCurrentKey: computed(() => treeRef.value?.setCurrentKey),
      /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
      setCurrentNode: computed(() => treeRef.value?.setCurrentNode),
      /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
      getNode: computed(() => treeRef.value?.getNode),
      /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
      remove: computed(() => treeRef.value?.remove),
      /** @description 为 Tree 中的一个节点追加一个子节点 */
      append: computed(() => treeRef.value?.append),
      /** @description 在 Tree 中给定节点前插入一个节点 */
      insertBefore: computed(() => treeRef.value?.insertBefore),
      /** @description 在 Tree 中给定节点后插入一个节点 */
      insertAfter: computed(() => treeRef.value?.insertAfter),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 刷新 */
      refresh: loadData
    });
  }
});
export {
  Tree as default,
  faTreeEmits,
  faTreeProps
};
//# sourceMappingURL=tree.mjs.map
