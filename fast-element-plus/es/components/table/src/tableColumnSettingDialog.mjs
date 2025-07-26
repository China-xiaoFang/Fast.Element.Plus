import { defineComponent, inject, reactive, ref, createVNode, Fragment, mergeProps, createTextVNode, resolveComponent } from "vue";
import { ElNotification, ElMessage, ElTable, ElTableColumn, ElInput, ElRadioGroup, ElRadio, ElInputNumber, ElSwitch } from "element-plus";
import { FaDialog } from "../../dialog/index.mjs";
import { stringUtil, useRender, useExpose, definePropType } from "@fast-china/utils";
import Sortable from "sortablejs";
import { tableStateKey } from "./useTable.mjs";
const TableColumnsSettingDialog = /* @__PURE__ */ defineComponent({
  name: "FaTableColumnsSettingDialog",
  props: {
    /** @description 改变 */
    change: {
      type: definePropType(Function)
    }
  },
  setup(props, {
    expose
  }) {
    const tableState = inject(tableStateKey);
    const state = reactive({
      tableKey: stringUtil.generateRandomString(8),
      sortableInstance: void 0,
      change: false
    });
    const faDialogRef = ref();
    const indexMethod = (index) => {
      return index + 1;
    };
    const tableRowDrop = () => {
      const tBody = document.querySelector(`.fa-table__column-setting-${state.tableKey} .el-table__body-wrapper tbody`);
      if (state.sortableInstance) {
        state.sortableInstance.destroy();
      }
      state.sortableInstance = new Sortable(tBody, {
        // ms, number 单位：ms，定义排序动画的时间
        animation: 150,
        delay: 0,
        // filter: ".fa-table__setting-fixed-column",
        // onMove(evt: any) {
        // 	const { related } = evt;
        // 	return !related.classList.contains("fa-table__setting-fixed-column");
        // },
        onEnd(evt) {
          const {
            newIndex,
            oldIndex
          } = evt;
          if (newIndex !== oldIndex) {
            state.change = true;
            const curRow = tableState.orgColumns.splice(oldIndex, 1)[0];
            tableState.orgColumns.splice(newIndex, 0, curRow);
            tableState.orgColumns = tableState.orgColumns.map((item, index) => {
              return {
                ...item,
                order: index + 1
              };
            });
          }
        }
      });
    };
    const open = () => {
      faDialogRef.value.open(() => {
        tableRowDrop();
        ElNotification({
          message: "点击保存才会进行数据缓存，点击取消为本此生效",
          type: "info"
        });
      });
    };
    const handleChange = async () => {
      if (props.change) {
        if (state.change) {
          await props.change(tableState.orgColumns.map((m) => {
            var _a, _b;
            return {
              columnID: m.columnID,
              label: m.label,
              fixed: m.fixed,
              width: m.width,
              smallWidth: m.smallWidth,
              order: m.order,
              sortable: m.sortable,
              copy: m.copy,
              autoWidth: m.autoWidth,
              show: m.show,
              search: {
                label: (_a = m.search) == null ? void 0 : _a.label,
                order: (_b = m.search) == null ? void 0 : _b.order
              }
            };
          }));
          ElMessage.success("保存列配置成功");
        } else {
          ElMessage.info("列配置未发生变化");
        }
      }
    };
    const handleConfirmClick = () => {
      faDialogRef.value.close(async () => {
        await handleChange();
      });
    };
    const handleOrderChange = () => {
      state.change = true;
      let orderColumns = tableState.orgColumns.filter((f) => !(f == null ? void 0 : f.pureSearch));
      orderColumns = orderColumns.sort((a, b) => {
        if (a.order !== b.order) {
          return a.order - b.order;
        } else {
          return orderColumns.indexOf(b) - orderColumns.indexOf(a);
        }
      });
      tableState.orgColumns = [...orderColumns, ...tableState.orgColumns.filter((f) => f == null ? void 0 : f.pureSearch)];
      tableState.orgColumns.forEach((item, index) => {
        item.order = index + 1;
      });
    };
    const handleColumnChange = () => {
      state.change = true;
    };
    const autoWidthDisabled = (row, switchEl = false) => {
      const result = {
        modelValue: void 0,
        disabled: false,
        placeholder: void 0
      };
      if (row == null ? void 0 : row.type) {
        switch (row == null ? void 0 : row.type) {
          case "expand":
            result.disabled = true;
            result.placeholder = "暂不支持宽度配置";
            break;
          case "image":
            result.disabled = true;
            result.placeholder = "图片列无需配置";
            break;
          case "date":
          case "time":
          case "dateTime":
            result.disabled = true;
            result.placeholder = "时间/日期列无需配置";
            break;
          case "submitInfo":
            result.disabled = true;
            result.placeholder = "当前列无需配置";
            break;
        }
      } else if (row == null ? void 0 : row.tag) {
        result.disabled = true;
        result.placeholder = "标签列无需配置";
      } else if (row == null ? void 0 : row.autoWidth) {
        result.disabled = true;
        result.placeholder = "自动列宽无需配置";
      }
      if (!result.disabled) {
        delete result.disabled;
        delete result.modelValue;
        delete result.placeholder;
      }
      if (switchEl) {
        delete result.placeholder;
      }
      return result;
    };
    const pureSearchDisabled = (row, switchEl = false, orderEl = false, radioEl = false) => {
      const result = {
        modelValue: void 0,
        disabled: false,
        placeholder: void 0
      };
      if (row == null ? void 0 : row.pureSearch) {
        result.disabled = true;
        result.placeholder = "搜索列无需配置";
      }
      if (!result.disabled) {
        delete result.disabled;
        delete result.modelValue;
        delete result.placeholder;
      } else {
        if (radioEl) {
          delete result.modelValue;
        }
      }
      if (switchEl) {
        delete result.placeholder;
      }
      if (orderEl) {
        result.placeholder = "999";
      }
      return result;
    };
    useRender(() => createVNode(FaDialog, {
      "ref": faDialogRef,
      "class": "fa-table__column-setting-dialog",
      "onConfirmClick": handleConfirmClick,
      "showFullscreen": false,
      "confirmButtonText": state.change ? "保存更改" : "确认",
      "fillHeight": true
    }, {
      header: () => createVNode(Fragment, null, [createTextVNode("列表配置（留空则恢复默认配置）"), createVNode(resolveComponent("el-text"), {
        "type": "info"
      }, {
        default: () => [createTextVNode("点击保存才会进行数据缓存，点击取消为本此生效")]
      })]),
      default: () => createVNode(ElTable, {
        "class": ["fa-table__column-setting", `fa-table__column-setting-${state.tableKey}`],
        "data": tableState.orgColumns,
        "rowKey": "prop",
        "border": true
      }, {
        default: () => createVNode(Fragment, null, [createVNode(ElTableColumn, {
          "type": "index",
          "fixed": "left",
          "align": "center",
          "width": 45,
          "index": indexMethod
        }, null), createVNode(ElTableColumn, {
          "label": "列显示名称",
          "minWidth": 200
        }, {
          default: ({
            row
          }) => row.type === "image" ? createVNode(ElInput, {
            "disabled": true,
            "readonly": true,
            "modelValue": row.label,
            "onUpdate:modelValue": ($event) => row.label = $event,
            "placeholder": "请输入列显示名称",
            "onChange": handleColumnChange
          }, null) : createVNode(ElInput, mergeProps({
            "modelValue": row.label,
            "onUpdate:modelValue": ($event) => row.label = $event,
            "placeholder": "请输入列显示名称"
          }, pureSearchDisabled(row), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "固定",
          "width": 230
        }, {
          default: ({
            row
          }) => createVNode(ElRadioGroup, mergeProps({
            "modelValue": row.fixed,
            "onUpdate:modelValue": ($event) => row.fixed = $event
          }, pureSearchDisabled(row, false, false, true), {
            "onChange": handleColumnChange
          }), {
            default: () => [createVNode(ElRadio, {
              "value": false
            }, {
              default: () => [createTextVNode("无")]
            }), createVNode(ElRadio, {
              "value": "left"
            }, {
              default: () => [createTextVNode("左侧")]
            }), createVNode(ElRadio, {
              "value": "right"
            }, {
              default: () => [createTextVNode("右侧")]
            })]
          })
        }), createVNode(ElTableColumn, {
          "label": "宽度",
          "width": 200
        }, {
          default: ({
            row
          }) => createVNode(ElInputNumber, mergeProps({
            "modelValue": row.width,
            "onUpdate:modelValue": ($event) => row.width = $event,
            "min": 1,
            "max": 999,
            "stepStrictly": true,
            "controls": false,
            "clearable": true,
            "placeholder": "请输入宽度"
          }, autoWidthDisabled(row), pureSearchDisabled(row), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "小的宽度",
          "width": 200
        }, {
          default: ({
            row
          }) => createVNode(ElInputNumber, mergeProps({
            "modelValue": row.smallWidth,
            "onUpdate:modelValue": ($event) => row.smallWidth = $event,
            "min": 1,
            "max": 999,
            "stepStrictly": true,
            "controls": false,
            "clearable": true,
            "placeholder": "请输入小的宽度"
          }, autoWidthDisabled(row), pureSearchDisabled(row), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "顺序",
          "width": 100
        }, {
          default: ({
            row
          }) => createVNode(ElInputNumber, mergeProps({
            "modelValue": row.order,
            "onUpdate:modelValue": ($event) => row.order = $event,
            "min": 1,
            "max": 999,
            "stepStrictly": true,
            "controls": false,
            "clearable": true,
            "placeholder": "请输入顺序"
          }, pureSearchDisabled(row, false, true), {
            "onChange": handleOrderChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "排序",
          "width": 65
        }, {
          default: ({
            row
          }) => createVNode(ElSwitch, mergeProps({
            "modelValue": row.sortable,
            "onUpdate:modelValue": ($event) => row.sortable = $event,
            "inlinePrompt": true,
            "activeText": "是",
            "inactiveText": "否",
            "disabled": row.disabledSortable || (row == null ? void 0 : row.type) === "image"
          }, pureSearchDisabled(row, true), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "复制",
          "width": 65
        }, {
          default: ({
            row
          }) => createVNode(ElSwitch, mergeProps({
            "modelValue": row.copy,
            "onUpdate:modelValue": ($event) => row.copy = $event,
            "inlinePrompt": true,
            "activeText": "是",
            "inactiveText": "否",
            "disabled": !!(row == null ? void 0 : row.type) || !!(row == null ? void 0 : row.slot)
          }, pureSearchDisabled(row, true), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "自动宽度",
          "width": 85
        }, {
          default: ({
            row
          }) => createVNode(ElSwitch, mergeProps({
            "modelValue": row.autoWidth,
            "onUpdate:modelValue": ($event) => row.autoWidth = $event,
            "inlinePrompt": true,
            "activeText": "是",
            "inactiveText": "否",
            "disabled": !!(row == null ? void 0 : row.type)
          }, pureSearchDisabled(row, true), {
            "onChange": handleColumnChange
          }), null)
        }), createVNode(ElTableColumn, {
          "label": "显示",
          "width": 75
        }, {
          default: ({
            row
          }) => createVNode(ElSwitch, {
            "modelValue": row.show,
            "onUpdate:modelValue": ($event) => row.show = $event,
            "inlinePrompt": true,
            "activeText": "显示",
            "inactiveText": "隐藏",
            "onChange": handleColumnChange
          }, null)
        }), createVNode(ElTableColumn, {
          "label": "搜索框名称",
          "minWidth": 200
        }, {
          default: ({
            row
          }) => row.search ? createVNode(ElInput, {
            "modelValue": row.search.label,
            "onUpdate:modelValue": ($event) => row.search.label = $event,
            "placeholder": "请输入搜索框名称",
            "onChange": handleColumnChange
          }, null) : createVNode(ElInput, {
            "disabled": true,
            "placeholder": "当前列暂无搜索项配置"
          }, null)
        }), createVNode(ElTableColumn, {
          "label": "搜索框顺序",
          "width": 200
        }, {
          default: ({
            row
          }) => row.search ? createVNode(ElInputNumber, {
            "modelValue": row.search.order,
            "onUpdate:modelValue": ($event) => row.search.order = $event,
            "min": 1,
            "max": 999,
            "stepStrictly": true,
            "controls": false,
            "clearable": true,
            "placeholder": "请输入搜索框顺序",
            "onChange": handleColumnChange
          }, null) : createVNode(ElInputNumber, {
            "disabled": true,
            "min": 1,
            "max": 999,
            "stepStrictly": true,
            "controls": false,
            "clearable": true,
            "placeholder": "当前列暂无搜索项配置"
          }, null)
        })])
      })
    }));
    return useExpose(expose, {
      /** @description 打开 */
      open,
      /** @description 列改变 */
      change: handleChange
    });
  }
});
export {
  TableColumnsSettingDialog as default
};
//# sourceMappingURL=tableColumnSettingDialog.mjs.map
