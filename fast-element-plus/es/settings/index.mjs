var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { reactive } from "vue";
import "../utils/index.mjs";
import { merge } from "lodash-unified";
import { consoleError } from "../utils/console.mjs";
import { makeIdentity } from "../utils/deviceId.mjs";
import { Local, Session } from "../utils/storage.mjs";
const _FastApp = class _FastApp {
};
__publicField(_FastApp, "state", reactive({
  storageCrypto: true,
  axios: {
    baseUrl: void 0,
    timeout: 6e4,
    requestCipher: true
  },
  table: {
    showSearch: true,
    hideImage: true,
    dataSearchRange: "Past3D"
  },
  upload: {
    url: ""
  }
}));
__publicField(_FastApp, "stateMap", reactive({
  dictionary: /* @__PURE__ */ new Map(),
  columns: /* @__PURE__ */ new Map()
}));
/**
 * 设置 App 配置
 */
__publicField(_FastApp, "setAppOptions", (appOptions) => {
  merge(_FastApp.state, appOptions);
});
/**
 * 设置环境
 */
__publicField(_FastApp, "setEnv", (env) => {
  _FastApp.state.env = env;
});
/**
 * 设置 Axios 选项
 */
__publicField(_FastApp, "setAxiosOptions", (axiosOptions) => {
  _FastApp.state.axios = Object.assign(_FastApp.state.axios, axiosOptions);
});
/**
 * 设置 Table 选项
 */
__publicField(_FastApp, "setTableOptions", (tableOptions) => {
  _FastApp.state.table = Object.assign(_FastApp.state.table, tableOptions);
});
/**
 * 设置 Upload 选项
 */
__publicField(_FastApp, "setUploadOptions", (uploadOptions) => {
  _FastApp.state.upload = Object.assign(_FastApp.state.upload, uploadOptions);
});
/**
 * 设置字典
 */
__publicField(_FastApp, "setDictionary", (dictionary) => {
  _FastApp.stateMap.dictionary = dictionary;
});
/**
 * 获取字典
 */
__publicField(_FastApp, "getDictionary", (key) => {
  if (!_FastApp.stateMap.dictionary.has(key)) {
    consoleError("app", `字典 [${key}] 不存在`);
    return [];
  }
  return _FastApp.stateMap.dictionary.get(key);
});
/**
 * 获取表格列
 */
__publicField(_FastApp, "getTableColumns", (tableKey) => {
  if (!_FastApp.stateMap.columns.has(tableKey)) {
    consoleError("app", `表格列 [${tableKey}] 不存在`);
    return [];
  }
  return _FastApp.stateMap.columns.get(tableKey);
});
/**
 * 设置或更新表格列
 */
__publicField(_FastApp, "setTableColumns", (tableKey, columns) => {
  if (_FastApp.stateMap.columns.has(tableKey)) {
    _FastApp.stateMap.columns.delete(tableKey);
  }
  _FastApp.stateMap.columns.set(tableKey, columns);
});
/**
 * 清除 App 缓存
 */
__publicField(_FastApp, "clearAppCache", () => {
  const deviceId = makeIdentity();
  Local.clear();
  Session.clear();
  makeIdentity(deviceId);
});
let FastApp = _FastApp;
export {
  FastApp
};
//# sourceMappingURL=index.mjs.map
