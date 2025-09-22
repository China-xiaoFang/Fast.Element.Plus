import { isVNode, defineComponent, inject, computed, createVNode, Fragment, watch, mergeProps, h, resolveComponent } from "vue";
import { useGlobalSize, ElMessage, ElIcon, ElTag, dayjs, ElText, ElTableColumn, ElImage } from "element-plus";
import { CopyDocument } from "@element-plus/icons-vue";
import { FaImage } from "../../image/index.mjs";
import { stringUtil, consoleError, dateUtil, useProps, useRender, makeSlots, definePropType } from "@fast-china/utils";
import { isString, isNumber, isObject } from "lodash-unified";
import artwork from "../images/artwork.png.mjs";
import notImage from "../images/notImage.png.mjs";
import { tableUtil } from "../utils/table.mjs";
import { getTableDefaultSlots } from "./table.type.mjs";
import { tableStateKey, enumMapKey } from "./useTable.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const tableColumnProps = {
  /**
   * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
   */
  type: {
    type: String,
    default: "default"
  },
  /**
   * @description column label
   */
  label: String,
  /**
   * @description class name of cells in the column
   */
  className: String,
  /**
   * @description class name of the label of this column
   */
  labelClassName: String,
  /**
   * @description
   */
  property: String,
  /**
   * @description field name. You can also use its alias: `property`
   */
  prop: String,
  /**
   * @description column width
   */
  width: {
    type: [String, Number],
    default: ""
  },
  /**
   * @description column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion
   */
  minWidth: {
    type: [String, Number],
    default: ""
  },
  /**
   * @description render function for table header of this column
   */
  renderHeader: Function,
  /**
   * @description whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table
   */
  sortable: {
    type: [Boolean, String],
    default: false
  },
  /**
   * @description sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort
   */
  sortMethod: Function,
  /**
   * @description specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal
   */
  sortBy: [String, Function, Array],
  /**
   * @description whether column width can be resized, works when `border` of `el-table` is `true`
   */
  resizable: {
    type: Boolean,
    default: true
  },
  /**
   * @description column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered
   */
  columnKey: String,
  /**
   * @description alignment, the value should be 'left' \/ 'center' \/ 'right'
   */
  align: String,
  /**
   * @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right'
   */
  headerAlign: String,
  /**
   * @description whether to hide extra content and show them in a tooltip when hovering on the cell
   */
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  /**
   * @description whether column is fixed at left / right. Will be fixed at left if `true`
   */
  fixed: [Boolean, String],
  /**
   * @description function that formats cell content
   */
  formatter: Function,
  /**
   * @description function that determines if a certain row can be selected, works when `type` is 'selection'
   */
  selectable: Function,
  /**
   * @description whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work
   */
  reserveSelection: Boolean,
  /**
   * @description data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`
   */
  filterMethod: Function,
  /**
   * @description filter value for selected data, might be useful when table header is rendered with `render-header`
   */
  filteredValue: Array,
  /**
   * @description an array of data filtering options. For each element in this array, `text` and `value` are required
   */
  filters: Array,
  /**
   * @description placement for the filter dropdown
   */
  filterPlacement: String,
  /**
   * @description whether data filtering supports multiple options
   */
  filterMultiple: {
    type: Boolean,
    default: true
  },
  /**
   * @description className for the filter dropdown
   */
  filterClassName: String,
  /**
   * @description customize indices for each row, works on columns with `type=index`
   */
  index: [Number, Function],
  /**
   * @description the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array
   */
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
const TableColumn = /* @__PURE__ */ defineComponent({
  name: "FaTableColumn",
  props: {
    ...tableColumnProps,
    /**
     * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
     */
    type: {
      type: definePropType(String),
      default: "default"
    },
    /**
     * @description column width
     */
    width: {
      type: [String, Number],
      default: "auto"
    },
    /** @description alignment, the value should be 'left' \/ 'center' \/ 'right' */
    align: {
      type: String,
      default: "left"
    },
    /** @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right' */
    headerAlign: {
      type: String,
      default: "left"
    },
    /** @description 是否显示在表格当中 */
    show: Boolean,
    /** @description 小页面的宽度，如果为空，则继承默认宽度 */
    smallWidth: {
      type: [String, Number]
    },
    /** @description 自适应宽度 */
    autoWidth: Boolean,
    /** @description 插槽名称 */
    slot: String,
    /** @description 表格头部插槽名称 */
    headerSlot: String,
    /** @description 自定义表头内容渲染（tsx语法） */
    headerRender: {
      type: definePropType(Function)
    },
    /** @description 自定义单元格内容渲染（tsx语法） */
    render: {
      type: definePropType(Function)
    },
    /** @description 多级表头 */
    _children: {
      type: definePropType(Array)
    },
    /** @description 复制 */
    copy: Boolean,
    /** @description 是否为 Link Button */
    link: Boolean,
    /** @description 合并行字段 */
    spanProp: String,
    /** @description Link 按钮的点击事件，优先级最高 */
    click: {
      type: definePropType(Function)
    },
    /** @description 点击Emits事件回调 */
    clickEmit: String,
    /** @description 显示时间格式化字符串 */
    dateFix: Boolean,
    /** @description 显示在页面中的日期格式 */
    dateFormat: {
      type: definePropType(String)
    },
    /** @description 是否是标签展示 */
    tag: Boolean,
    /** @description 枚举类型（渲染值的字典） */
    enum: {
      type: definePropType([Array, Function])
    },
    /** @description 数据删除字段，如果为 true 会显示遮罩层 */
    dataDeleteField: String,
    /** @description 制单信息计算 */
    submitInfoField: {
      type: definePropType(Object),
      default: () => ({
        submitClerkName: "createdUserName",
        submitTime: "createdTime"
      })
    }
  },
  emits: {
    /** @description 图片预览 */
    imagePreview: (url) => isString(url),
    /** @description 自定义单元格点击事件 */
    customCellClick: (emitName, {
      row,
      column,
      $index
    }) => isString(emitName) && isObject(row) && isObject(column) && isNumber($index)
  },
  slots: makeSlots(),
  setup(props, {
    slots,
    emit
  }) {
    const _globalSize = useGlobalSize();
    const tableState = inject(tableStateKey);
    const enumMap = inject(enumMapKey);
    const columnCtx = computed(() => props);
    const renderCellData = ({
      row
    }) => {
      let enumKey = props.prop;
      if (isString(props.enum)) {
        enumKey = props.enum;
      }
      const enumData = enumMap.get(enumKey);
      if (enumData) {
        return tableUtil.filterEnum(tableUtil.handleRowAccordingToProp(row, props.prop), enumData);
      } else {
        return tableUtil.formatValue(tableUtil.handleRowAccordingToProp(row, props.prop));
      }
    };
    const getTagType = ({
      row
    }) => {
      let enumKey = props.prop;
      if (isString(props.enum)) {
        enumKey = props.enum;
      }
      const enumData = enumMap.get(enumKey);
      return tableUtil.filterEnum(tableUtil.handleRowAccordingToProp(row, props.prop), enumData, null, "tag");
    };
    const getWidth = (defAttr) => {
      if (props.autoWidth) {
        return computed(() => {
          const findInfo = tableState.autoColumnWidth.find((f) => f.prop === props.prop);
          if (findInfo) {
            return `${findInfo.width}px`;
          }
          return "auto";
        }).value;
      }
      if (_globalSize.value === "small") {
        return props.smallWidth ?? props.width ?? props.minWidth ?? defAttr ?? "auto";
      }
      return props.width ?? props.minWidth ?? defAttr ?? "auto";
    };
    const autoWidthHeaderRender = (el) => {
      if (props.autoWidth) {
        return createVNode("div", {
          "class": ["fa-table__auto-width-column__cell-header", `__fa-table__auto-width-column__cell-header__${props.prop}`]
        }, [el]);
      } else {
        return el;
      }
    };
    const headerRender = ({
      column,
      $index
    }) => {
      if (props.headerRender) {
        return autoWidthHeaderRender(props.headerRender({
          column,
          $index,
          ...getTableDefaultSlots(tableState)
        }));
      } else if (props.headerSlot) {
        return autoWidthHeaderRender(slots[props.headerSlot] && slots[props.headerSlot]({
          column,
          $index,
          ...getTableDefaultSlots(tableState)
        }));
      } else {
        return autoWidthHeaderRender(createVNode("span", null, [props.label]));
      }
    };
    const autoWidthRender = (el) => {
      if (props.autoWidth) {
        return createVNode("div", {
          "class": ["fa-table__auto-width-column__cell", `__fa-table__auto-width-column__cell__${props.prop}`]
        }, [el]);
      } else {
        return el;
      }
    };
    const handleCopyClick = async (value) => {
      try {
        await stringUtil.copy(String(value));
        ElMessage({
          type: "success",
          message: "复制成功"
        });
      } catch (error) {
        consoleError("FaTableColumn", error);
        ElMessage({
          type: "error",
          message: "复制失败"
        });
      }
    };
    const copyRender = (value, copy) => {
      return (props.copy || copy) && value && createVNode(ElIcon, {
        "class": "fa__copy-icon",
        "title": "复制",
        "onClick": () => handleCopyClick(value)
      }, {
        default: () => [createVNode(CopyDocument, null, null)]
      });
    };
    const formatterRender = (row, column, cellValue, index) => {
      if (column.formatter) {
        return column.formatter(row, column, cellValue, index);
      } else {
        return cellValue;
      }
    };
    const defaultRender = ({
      row,
      column,
      $index
    }) => {
      if (props.type === "submitInfo") {
        let _slot;
        const submitClerkName = row[props.submitInfoField?.submitClerkName ?? "createdUserName"];
        const submitTime = row[props.submitInfoField?.submitTime ?? "createdTime"];
        return createVNode(Fragment, null, [createVNode("div", {
          "style": "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
          "title": submitTime
        }, [submitClerkName && createVNode("span", {
          "style": "margin-right: 5px;"
        }, [submitClerkName]), createVNode("span", null, [submitTime])]), submitTime && createVNode(ElTag, {
          "type": "info",
          "round": true,
          "effect": "light",
          "size": "small"
        }, _isSlot(_slot = dateUtil.dateTimeFix(String(submitTime))) ? _slot : {
          default: () => [_slot]
        })]);
      } else if (props.tag) {
        const renderValue = formatterRender(row, column, renderCellData({
          row
        }), $index);
        return createVNode(Fragment, null, [copyRender(renderValue), renderValue ? createVNode(ElTag, {
          "type": getTagType({
            row
          })
        }, _isSlot(renderValue) ? renderValue : {
          default: () => [renderValue]
        }) : null]);
      } else if (props.type === "date" || props.type === "time" || props.type === "dateTime") {
        let _slot2;
        let dateFormat;
        switch (props.type) {
          case "date":
            dateFormat = "YYYY-MM-DD";
            break;
          case "time":
            dateFormat = "HH:mm:ss";
            break;
          case "dateTime":
            dateFormat = "YYYY-MM-DD HH:mm:ss";
            break;
        }
        const renderValue = row[props.prop] ? formatterRender(row, column, dayjs(row[props.prop]).format(props.dateFormat ?? dateFormat), $index) : null;
        return createVNode(Fragment, null, [copyRender(renderValue), renderValue, props.dateFix && renderValue && createVNode(Fragment, null, [createVNode("br", null, null), createVNode(ElTag, {
          "type": "info",
          "round": true,
          "effect": "light",
          "size": "small"
        }, _isSlot(_slot2 = dateUtil.dateTimeFix(String(renderValue))) ? _slot2 : {
          default: () => [_slot2]
        })])]);
      } else if (props.type === "d2" || props.type === "d4" || props.type === "d6" || props.type === "gd2" || props.type === "gd4" || props.type === "gd6") {
        const renderValue = row[props.prop];
        if (renderValue) {
          if (isNumber(renderValue)) {
            let useGrouping = false;
            let maximumFractionDigits;
            switch (props.type) {
              case "d2":
                maximumFractionDigits = 2;
                break;
              case "d4":
                maximumFractionDigits = 4;
                break;
              case "d6":
                maximumFractionDigits = 6;
                break;
              case "gd2":
                maximumFractionDigits = 2;
                useGrouping = true;
                break;
              case "gd4":
                maximumFractionDigits = 4;
                useGrouping = true;
                break;
              case "gd6":
                maximumFractionDigits = 6;
                useGrouping = true;
                break;
            }
            return renderValue.toLocaleString("zh-CN", {
              minimumFractionDigits: 2,
              maximumFractionDigits,
              useGrouping
            });
          }
        }
        return renderValue;
      } else if (props.link) {
        const renderValue = formatterRender(row, column, row[props.prop], $index);
        return autoWidthRender(createVNode(Fragment, null, [copyRender(renderValue), renderValue && createVNode(ElText, {
          "class": "el-link is-hover-underline fa-table__link-column__text",
          "onClick": () => {
            if (props.dataDeleteField && row[props.dataDeleteField] === true) return;
            if (props.click) {
              props.click({
                row,
                $index
              });
            } else {
              emit("customCellClick", props.clickEmit, {
                row,
                column: columnCtx.value,
                $index
              });
            }
          }
        }, _isSlot(renderValue) ? renderValue : {
          default: () => [renderValue]
        })]));
      } else if (props.render) {
        return autoWidthRender(props.render({
          row,
          column: columnCtx.value,
          $index,
          ...getTableDefaultSlots(tableState)
        }));
      } else if (props.slot) {
        return autoWidthRender(slots[props.slot] && slots[props.slot]({
          row,
          column: columnCtx.value,
          $index,
          ...getTableDefaultSlots(tableState)
        }));
      } else {
        const renderValue = formatterRender(row, column, row[props.prop], $index);
        return autoWidthRender(createVNode(Fragment, null, [copyRender(renderValue), renderValue]));
      }
    };
    let elTableColumnProps = useProps(props, tableColumnProps, ["type", "width", "minWidth", "sortable", "sortOrders", "resizable", "showOverflowTooltip"]);
    watch(() => props, () => {
      elTableColumnProps = useProps(props, tableColumnProps, ["type", "minWidth", "sortable", "sortOrders", "resizable", "showOverflowTooltip"]);
    });
    useRender(() => createVNode(Fragment, null, [
      // 如果有配置多级表头的数据，则递归该组件
      props._children?.length ? createVNode(ElTableColumn, mergeProps(elTableColumnProps.value, {
        "minWidth": getWidth("auto"),
        "sortable": props.sortable ? "custom" : false,
        "sortOrders": props.sortOrders ?? ["descending", "ascending", null],
        "resizable": props.resizable && !props.autoWidth,
        "showOverflowTooltip": (props.showOverflowTooltip ?? true) && !props.autoWidth && !props.type
      }), {
        header: ({
          column,
          $index
        }) => headerRender({
          column,
          $index
        }),
        default: () => props._children.map((col) => h(resolveComponent("FaTableColumn"), {
          ...col
        }, slots))
      }) : props.type === "image" ? createVNode(ElTableColumn, mergeProps(elTableColumnProps.value, {
        "align": "center",
        "className": "fa-table__image-column",
        "minWidth": "50px",
        "sortable": false,
        "resizable": false,
        "showOverflowTooltip": false
      }), {
        header: ({
          column,
          $index
        }) => headerRender({
          column,
          $index
        }),
        default: ({
          row
        }) => row[props.prop] ? tableState.hideImage ? createVNode(ElImage, {
          "class": "fa-image",
          "lazy": true,
          "src": artwork,
          "fit": "cover",
          "previewSrcList": [row[props.prop]],
          "closeOnPressEscape": true,
          "hideOnClickModal": true,
          "previewTeleported": true
        }, null) : createVNode(FaImage, {
          "lazy": true,
          "src": row[props.prop],
          "fit": "cover",
          "original": true
        }, null) : createVNode(ElImage, {
          "class": "fa-image",
          "lazy": true,
          "src": notImage,
          "fit": "cover"
        }, null)
      }) : (
        // 其他正常的列
        createVNode(ElTableColumn, mergeProps(elTableColumnProps.value, {
          "minWidth": getWidth("auto"),
          "sortable": props.sortable ? "custom" : false,
          "sortOrders": props.sortOrders ?? ["descending", "ascending", null],
          "resizable": props.resizable && !props.autoWidth,
          "showOverflowTooltip": (props.showOverflowTooltip ?? true) && !props.autoWidth && !props.type
        }), {
          header: ({
            column,
            $index
          }) => headerRender({
            column,
            $index
          }),
          default: ({
            row,
            column,
            $index
          }) => defaultRender({
            row,
            column,
            $index
          })
        })
      )
    ]));
  }
});
export {
  TableColumn as default,
  tableColumnProps
};
//# sourceMappingURL=tableColumn.mjs.map
