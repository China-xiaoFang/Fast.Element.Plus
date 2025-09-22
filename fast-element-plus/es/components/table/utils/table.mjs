import { isString, isFunction, isArray } from "lodash-unified";
const tableUtil = {
  /**
   * @description 处理无数据情况
   * @param {String} callValue 需要处理的值
   */
  formatValue(callValue) {
    if (isArray(callValue)) return callValue.length ? callValue.join(` , `) : null;
    return callValue;
  },
  /**
   * @description 处理 prop 为多级嵌套的情况(列如: prop:user.name)
   * @param {Object} row 当前行数据
   * @param {String} prop 当前 prop
   */
  handleRowAccordingToProp(row, prop) {
    if (!prop.includes(".")) return row[prop] ?? null;
    prop.split(".").forEach((item) => row = row[item]);
    return row;
  },
  /**
   * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
   * @param {String} prop 当前 prop
   */
  handleProp(prop) {
    const propArr = prop.split(".");
    if (propArr.length === 1) return prop;
    return propArr[propArr.length - 1];
  },
  /**
   * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
   * @param {String} callValue 当前单元格值
   * @param {Array} enumData 字典列表
   * @param {Array} fieldNames 指定 label && value 的 key 值
   * @param {String} type 过滤类型（目前只有 tag）
   */
  filterEnum(callValue, enumData, fieldNames, type) {
    const value = fieldNames?.value ?? "value";
    const label = fieldNames?.label ?? "label";
    let filterData = {};
    if (isArray(enumData)) {
      filterData = enumData.find((item) => item[value] === callValue);
    }
    if (type === "tag") {
      return filterData?.type ?? "primary";
    }
    return filterData ? filterData[label] : null;
  },
  /**
   * 数组动态排序
   */
  arrayDynamicSort(sortList) {
    return function(a, b) {
      if (sortList && sortList.length > 0) {
        for (const condition of sortList) {
          const property = condition.enField;
          const order = condition.mode;
          const aValue = a[property];
          const bValue = b[property];
          if (typeof aValue === "string" && typeof bValue === "string") {
            if (order === "ascending") {
              const comparison = aValue.localeCompare(bValue, "zh-CN");
              if (comparison !== 0) {
                return comparison;
              }
            } else if (order === "descending") {
              const comparison = bValue.localeCompare(aValue, "zh-CN");
              if (comparison !== 0) {
                return comparison;
              }
            }
          } else {
            if (order === "ascending") {
              if (aValue < bValue) return -1;
              if (aValue > bValue) return 1;
            } else if (order === "descending") {
              if (aValue > bValue) return -1;
              if (aValue < bValue) return 1;
            }
          }
        }
      }
      return 0;
    };
  },
  /**
   * 设置枚举
   */
  setEnumMap(columnEnum, prop, enumMap) {
    if (!columnEnum) return;
    if (isFunction(columnEnum)) {
      columnEnum().then((res) => {
        enumMap.set(prop, res);
      });
    } else if (isArray(columnEnum)) {
      enumMap.set(prop, columnEnum);
    }
  },
  /**
   * 扁平化 columns
   */
  flatColumns(columns, enumMap) {
    const flatArr = [];
    columns.forEach((col) => {
      if (col._children?.length) {
        flatArr.push(...this.flatColumns(col._children));
      }
      flatArr.push(col);
      col.show = col.show ?? true;
      let enumKey = col.prop ?? col.search?.key;
      if (col.enum && isString(col.enum)) {
        enumKey = col.enum;
      }
      this.setEnumMap(col.enum, enumKey, enumMap);
    });
    return flatArr.filter((item) => !item._children?.length);
  }
};
export {
  tableUtil
};
//# sourceMappingURL=table.mjs.map
