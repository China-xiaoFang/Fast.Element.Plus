import { defineComponent, reactive, ref, watch, onMounted, createVNode, mergeProps, computed } from "vue";
import { ElTreeSelect } from "element-plus";
import { SelectProps } from "../../select/src/select.mjs";
import { treeProps } from "../../tree/src/tree.props.mjs";
import { definePropType, withDefineType, consoleError, useProps, useRender, addUnit, useExpose, makeSlots } from "@fast-china/utils";
import { useVModel } from "@vueuse/core";
import { isObject, isString, isBoolean, isNumber, isArray, isNull, isFunction, isNil, isEqual } from "lodash-unified";
const faTreeSelectProps = {
  ...SelectProps,
  ...treeProps,
  /** @description displayed text while loading data from server, default is 'Loading' */
  loadingText: {
    type: String,
    default: "加载中..."
  },
  /** @description displayed text when no data matches the filtering query, you can also use slot `empty`, default is 'No matching data' */
  noMatchText: {
    type: String,
    default: "暂无匹配的数据"
  },
  /** @description displayed text when there is no options, you can also use slot `empty`, default is 'No data' */
  noDataText: {
    type: String,
    default: "暂无数据"
  },
  /** @description whether to collapse tags to a text when multiple selecting */
  collapseTags: {
    type: Boolean,
    default: true
  },
  /** @description whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true */
  collapseTagsTooltip: {
    type: Boolean,
    default: true
  },
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
  /** @description 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 */
  expandOnClickNode: Boolean,
  /** @description 点击折叠节点，需要开启 'expandOnClickNode' */
  collapseOnClickNode: Boolean,
  /**
   * 懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签
   * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
   */
  cacheData: {
    type: Array,
    default: () => []
  },
  /** @description v-model绑定值 */
  modelValue: {
    type: definePropType([String, Number, Boolean, Object, Array]),
    default: void 0
  },
  /** @description v-model:label绑定值 */
  label: definePropType([String, Array]),
  /** @description 宽度 */
  width: {
    type: [String, Number],
    default: "100%"
  },
  /** @description 更多细节，只有使用slot的时候有用 */
  moreDetail: Boolean,
  /** @description 懒加载远程数据，默认 true。当下拉框第一次显示的时候才会加载远程数据*/
  lazy: {
    type: Boolean,
    default: true
  },
  /** @description 默认选中。不能和懒加载一起使用 */
  defaultSelected: Boolean,
  /** @description 配置选项 */
  props: {
    type: definePropType(Object),
    default: () => ({
      label: "label",
      hide: "hide",
      disabled: "disabled",
      children: "children"
    })
  },
  /** @description 下拉框数据 */
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
const faTreeSelectEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value),
  /** @description v-model:label 回调 */
  "update:label": (value) => isString(value) || isArray(value) || isNull(value),
  /** @description 数据改变 */
  dataChangeCallBack: (data) => isArray(data),
  /** @description 改变 */
  change: (data, value) => (isObject(data) || isArray(data) || isNull(data)) && (isString(value) || isNumber(value) || isBoolean(value) || isObject(value) || isArray(value) || isNull(value)),
  /** @description 下拉框出现/隐藏时触发 */
  visibleChange: (visible) => isBoolean(visible),
  /** @description 多选模式下移除tag时触发 */
  removeTag: (tagValue) => isString(tagValue) || isNumber(tagValue) || isBoolean(tagValue) || isObject(tagValue) || isArray(tagValue),
  /** @description 可清空的单选模式下用户点击清空按钮时触发 */
  clear: () => true,
  /** @description 当 input 失去焦点时触发 */
  blur: (event) => event instanceof FocusEvent,
  /** @description 当 input 获得焦点时触发 */
  focus: (event) => event instanceof FocusEvent,
  /** @description 当节点被点击的时候触发 */
  nodeClick: (data, node, instance) => isObject(data) && isObject(node) && isObject(instance),
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
const TreeSelect = /* @__PURE__ */ defineComponent({
  name: "FaTreeSelect",
  props: faTreeSelectProps,
  emits: faTreeSelectEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    var _a;
    const selectedLabel = useVModel(props, "label", emit, {
      passive: true
    });
    const state = reactive({
      value: withDefineType(),
      loading: false,
      selectorData: withDefineType([]),
      /** 首次出现 */
      debut: true,
      /** 回显 */
      echo: ((_a = props.data) == null ? void 0 : _a.length) > 0 ? false : true,
      /** 下次刷新 */
      nextRefresh: false
    });
    const treeSelectRef = ref();
    const handleData = (data) => {
      return data == null ? void 0 : data.map((m) => ({
        ...m,
        value: m[props.nodeKey],
        label: isFunction(props.props.label) ? props.props.label(m) : m[props.props.label ?? "label"],
        hide: isFunction(props.props.hide) ? props.props.hide(m) : m[props.props.hide ?? "hide"],
        disabled: isFunction(props.props.disabled) ? props.props.disabled(m) : m[props.props.disabled ?? "disabled"],
        children: isFunction(props.props.children) ? handleData(props.props.children(m)) : handleData(m[props.props.children ?? "children"])
      })).filter((f) => !f.hide);
    };
    const loadData = async () => {
      if (props.requestApi) {
        state.loading = true;
        const params = props.initParam ?? {};
        try {
          const resData = await props.requestApi(params);
          state.echo = false;
          state.selectorData = handleData(resData);
          emit("dataChangeCallBack", state.selectorData);
        } catch (error) {
          consoleError("FaTreeSelect", error);
          state.selectorData = [];
        } finally {
          state.loading = false;
        }
      } else {
        state.selectorData = handleData(props.data);
      }
    };
    const handleFilterNode = (value, data, child) => {
      if (!value) return true;
      let parentNode = child.parent, labels = [child.label], level = 1;
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
    const handleChange = (value, data) => {
      if (props.multiple) {
        const valueArr = value;
        if ((valueArr == null ? void 0 : valueArr.length) === 0) {
          state.value = null;
          selectedLabel.value = null;
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        const dataList = state.selectorData.filter((f) => valueArr.includes(f.value));
        state.value = value;
        selectedLabel.value = dataList.map((m) => m.label);
        emit("update:modelValue", value);
        emit("change", dataList, value);
      } else {
        if (isNil(value)) {
          state.value = null;
          selectedLabel.value = null;
          emit("update:modelValue", null);
          emit("change", null, null);
          return;
        }
        data ?? (data = state.selectorData.find((f) => f.value === value));
        state.value = value;
        selectedLabel.value = data.label;
        emit("update:modelValue", value);
        emit("change", data, value);
      }
    };
    const handleClear = () => {
      state.value = null;
      selectedLabel.value = null;
      emit("clear");
    };
    const handleNodeClick = (data, node, instance, event) => {
      if (props.expandOnClickNode) {
        if (!node.expanded) {
          node.expand();
        } else if (node.expanded && props.collapseOnClickNode) {
          node.collapse();
        }
      }
      if (props.checkStrictly) {
        handleChange(data.value, data);
      } else {
        if (node.isLeaf) {
          handleChange(data.value, data);
        }
      }
      emit("nodeClick", data, node, instance);
    };
    const handleVisibleChange = async (visible) => {
      if (visible) {
        if (state.debut) {
          state.debut = false;
          props.lazy && await loadData();
        } else {
          if (state.nextRefresh) {
            state.nextRefresh = false;
            await loadData();
          }
        }
      }
      emit("visibleChange", visible);
    };
    watch(() => props.modelValue, (newValue) => {
      if (state.echo && !isNil(newValue)) {
        const hasLabel = !isNil(props.label);
        if (props.multiple) {
          if (!isArray(newValue)) {
            consoleError("FaTreeSelect", "当启用 multiple 时，传入的 modelValue 必须是Array。");
            return;
          }
          if (hasLabel && !isArray(props.label)) {
            consoleError("FaTreeSelect", "当启用 multiple 时，传入的 modelValue:label 必须是Array。");
            return;
          }
          state.selectorData = newValue.slice(0, props.multipleLimit > 0 ? props.multipleLimit : newValue.length).map((item, index) => ({
            value: item,
            label: hasLabel ? props.label[index] : void 0
          }));
        } else {
          if (isArray(newValue)) {
            consoleError("FaTreeSelect", "当禁用 multiple 时，传入的 modelValue 不能是Array。");
            return;
          }
          if (hasLabel && isArray(props.label)) {
            consoleError("FaTreeSelect", "当禁用 multiple 时，传入的 modelValue:label 不能是Array。");
            return;
          }
          state.selectorData = [{
            value: newValue,
            label: props.label
          }];
        }
      }
      state.value = newValue;
    }, {
      immediate: true
    });
    onMounted(async () => {
      var _a2;
      if (props.defaultSelected) {
        await loadData();
        if (state.selectorData.length > 0) {
          if (props.multiple) {
            handleChange([state.selectorData[0].value]);
          } else {
            handleChange(state.selectorData[0].value, state.selectorData[0]);
          }
        }
      } else if (!props.requestApi && ((_a2 = props.data) == null ? void 0 : _a2.length) > 0) {
        state.debut = false;
        await loadData();
      } else if (!props.lazy) {
        await loadData();
      }
      watch(() => props.initParam, (newValue, oldValue) => {
        if (!isEqual(newValue, oldValue)) {
          state.nextRefresh = true;
          if (!isNil(state.value)) {
            handleChange();
          }
        }
      });
      watch(() => props.data, async () => {
        if (!props.requestApi) {
          await loadData();
        }
      }, {
        deep: true
      });
    });
    const elTreeSelectProps = useProps(props, {
      ...SelectProps,
      ...treeProps
    }, ["modelValue", "popperClass", "loading", "expandOnClickNode", "filterNodeMethod"]);
    useRender(() => createVNode(ElTreeSelect, mergeProps(elTreeSelectProps.value, {
      "ref": treeSelectRef,
      "class": "fa-tree-select",
      "popperClass": `fa-tree-select-dropdown ${props.popperClass}`,
      "style": {
        width: addUnit(props.width)
      },
      "modelValue": state.value,
      "onUpdate:modelValue": ($event) => state.value = $event,
      "loading": state.loading,
      "data": state.selectorData,
      "expandOnClickNode": props.checkOnClickNode ? false : props.expandOnClickNode,
      "filterNodeMethod": handleFilterNode,
      "onNodeClick": handleNodeClick,
      "onClear": handleClear,
      "onVisibleChange": handleVisibleChange,
      "onRemoveTag": (tagValue) => emit("removeTag", tagValue),
      "onBlur": (event) => emit("blur", event),
      "onFocus": (event) => emit("focus", event),
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
      ...slots.default && {
        default: ({
          node,
          data
        }) => slots.default({
          node,
          data
        })
      },
      ...slots.header && {
        header: () => slots.header()
      },
      ...slots.footer && {
        footer: () => slots.footer()
      },
      ...slots.prefix && {
        prefix: () => slots.prefix()
      },
      ...slots.empty && {
        empty: () => slots.empty()
      },
      ...slots.tag && {
        tag: () => slots.tag()
      },
      ...slots.loading && {
        loading: () => slots.loading()
      },
      ...slots.label && {
        label: ({
          label,
          value
        }) => slots.label({
          label,
          value
        })
      }
    }));
    return useExpose(expose, {
      /** @description 使选择器的输入框获取焦点 */
      focus: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.focus;
      }),
      /** @description 使选择器的输入框失去焦点，并隐藏下拉框 */
      blur: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.blur;
      }),
      /** @description 获取当前选中的标签 */
      selectedLabel: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.selectedLabel;
      }),
      /** @description 过滤所有树节点，过滤后的节点将被隐藏 */
      filter: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.filter;
      }),
      /** @description 为节点设置新数据，只有当设置 node-key 属性的时候才可用 */
      updateKeyChildren: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.updateKeyChildren;
      }),
      /** @description 如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组 */
      getCheckedNodes: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getCheckedNodes;
      }),
      /** @description 设置目前勾选的节点，使用此方法必须提前设置 node-key 属性 */
      setCheckedNodes: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.setCheckedNodes;
      }),
      /** @description 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组 */
      getCheckedKeys: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getCheckedKeys;
      }),
      /** @description 设置目前选中的节点，使用此方法必须设置 node-key 属性 */
      setCheckedKeys: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.setCheckedKeys;
      }),
      /** @description 设置节点是否被选中, 使用此方法必须设置 node-key 属性 */
      setChecked: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.setChecked;
      }),
      /** @description 如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组 */
      getHalfCheckedNodes: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getHalfCheckedNodes;
      }),
      /** @description 若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组 */
      getHalfCheckedKeys: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getHalfCheckedKeys;
      }),
      /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
      getCurrentKey: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getCurrentKey;
      }),
      /** @description 返回当前被选中节点的数据 (如果没有则返回 null) */
      getCurrentNode: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getCurrentNode;
      }),
      /** @description 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 */
      setCurrentKey: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.setCurrentKey;
      }),
      /** @description 设置节点为选中状态，使用此方法必须设置 node-key 属性 */
      setCurrentNode: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.setCurrentNode;
      }),
      /** @description 根据 data 或者 key 拿到 Tree 组件中的 node */
      getNode: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.getNode;
      }),
      /** @description 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性 */
      remove: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.remove;
      }),
      /** @description 为 Tree 中的一个节点追加一个子节点 */
      append: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.append;
      }),
      /** @description 在 Tree 中给定节点前插入一个节点 */
      insertBefore: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.insertBefore;
      }),
      /** @description 在 Tree 中给定节点后插入一个节点 */
      insertAfter: computed(() => {
        var _a2;
        return (_a2 = treeSelectRef.value) == null ? void 0 : _a2.insertAfter;
      }),
      /** @description 加载状态 */
      loading: computed(() => state.loading),
      /** @description 刷新 */
      refresh: loadData,
      /** @description 设置选择 */
      setSelection: (value) => handleChange(value),
      /** @description 清除选择 */
      clearSelection: () => handleChange(null)
    });
  }
});
export {
  TreeSelect as default,
  faTreeSelectEmits,
  faTreeSelectProps
};
//# sourceMappingURL=treeSelect.mjs.map
