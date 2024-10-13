import { FastApp } from "../settings/index.mjs";
import "./index.mjs";
import axios from "axios";
import { ElMessage, ElLoading, ElMessageBox } from "element-plus";
import { isString, isObject } from "lodash-unified";
import { cryptoUtil } from "./crypto.mjs";
import { consoleWarn, consoleDebug, consoleError, consoleLog } from "./console.mjs";
import { Local } from "./storage.mjs";
const HTTP_CACHE_KEY = "HTTP_CACHE_";
const axiosOptions = {
  cancelDuplicateRequest: true,
  loading: false,
  cache: false,
  ignoreError: false,
  getMethodCacheHandle: true,
  simpleDataFormat: true,
  showErrorMessage: true,
  showCodeMessage: true,
  showSuccessMessage: false,
  autoDownloadFile: true
};
const loadingOptions = {
  fullscreen: true,
  lock: true,
  text: "加载中...",
  background: "rgba(0, 0, 0, 0.7)"
};
const errorCodeMessages = {
  cancelDuplicate: "重复请求，自动取消！",
  offLine: "您断网了！",
  fileDownloadError: "文件下载失败或此文件不存在！",
  302: "接口重定向了！",
  400: "参数不正确！",
  401: "您没有权限操作（令牌、用户名、密码错误）！",
  403: "您的访问是被禁止的！",
  404: "请求的资源不存在！",
  405: "请求的格式不正确！",
  408: "请求超时！",
  409: "系统已存在相同数据！",
  410: "请求的资源被永久删除，且不会再得到的！",
  422: "当创建一个对象时，发生一个验证错误！",
  429: "请求过于频繁，请稍后再试！",
  500: "服务器内部错误！",
  501: "服务未实现！",
  502: "网关错误！",
  503: "服务不可用，服务器暂时过载或维护！",
  504: "服务暂时无法访问，请稍后再试！",
  505: "HTTP版本不受支持！",
  default: "请求错误！",
  ERR_NETWORK: "网关错误，服务不可用，服务器暂时过载或维护！"
};
const pendingMap = /* @__PURE__ */ new Map();
const loadingInstance = {
  // ElLoading 的实例信息
  target: null,
  // 总数
  count: 0
};
const closeLoading = (options) => {
  if (options.loading && loadingInstance.count > 0) loadingInstance.count--;
  if (loadingInstance.count === 0) {
    loadingInstance.target.close();
    loadingInstance.target = null;
  }
};
const getPendingKey = (axiosConfig) => {
  let { data } = axiosConfig;
  const { url, method, params } = axiosConfig;
  if (isString(data)) data = JSON.parse(data);
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
};
const addPending = (pendingKey, axiosConfig) => {
  axiosConfig.cancelToken = axiosConfig.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingMap.has(pendingKey)) {
      pendingMap.set(pendingKey, cancel);
    }
  });
};
const removePending = (pendingKey) => {
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
};
const httpErrorStatusHandle = (error) => {
  var _a, _b, _c, _d, _e;
  if (axios.isCancel(error)) {
    return;
  }
  let message = "";
  if (!window.navigator.onLine) {
    message = errorCodeMessages["offLine"];
  } else {
    const code = ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.code) || ((_c = error == null ? void 0 : error.response) == null ? void 0 : _c.status) || (error == null ? void 0 : error.code) || "default";
    message = ((_e = (_d = error == null ? void 0 : error.response) == null ? void 0 : _d.data) == null ? void 0 : _e.message) || errorCodeMessages[code];
  }
  ElMessage.error(message);
};
const getPromiseReject = (options, code = 500, message, data, response) => {
  if (options.simpleDataFormat) {
    return Promise.resolve({
      success: false,
      code,
      message,
      data,
      timestamp: Date.now(),
      response
    });
  } else {
    return Promise.resolve(response);
  }
};
const downloadFile = (response) => {
  const blob = new Blob([response.data], { type: "application/octet-stream;charset=UTF-8" });
  const contentDisposition = response.headers["content-disposition"];
  const pat = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
  const result = pat.exec(contentDisposition);
  const filename = result[1];
  const downloadElement = document.createElement("a");
  const href = window.URL.createObjectURL(blob);
  const reg = /^["](.*)["]$/g;
  downloadElement.style.display = "none";
  downloadElement.href = href;
  downloadElement.download = decodeURI(filename.replace(reg, "$1"));
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};
const createAxios = (axiosConfig, loading) => {
  const options = { ...axiosOptions, ...axiosConfig };
  if (options.cache && options.method.toUpperCase() === "GET" && options.simpleDataFormat) {
    if (options.params) {
      consoleWarn("axiosUtil", "如果使用 Http Cache，则不能存在任何 'params' 参数");
      return getPromiseReject(
        options,
        405,
        "如果使用 Http Cache，则不能存在任何 'params' 参数",
        new Error("如果使用 Http Cache，则不能存在任何 'params' 参数")
      );
    }
    const cacheKey = `${HTTP_CACHE_KEY}${options.url}`;
    const cacheRes = Local.get(cacheKey);
    if (cacheRes) {
      return Promise.resolve(cacheRes);
    }
  } else {
    options.cache = false;
  }
  const pendingKey = getPendingKey(axiosConfig);
  const timestamp = Date.now();
  const Axios = axios.create({
    baseURL: FastApp.state.axios.baseUrl,
    timeout: FastApp.state.axios.timeout,
    headers: {
      "Fast-DeviceID": window.deviceId,
      // 配置请求来源，标识为PC端
      "Fast-DeviceType": "Web"
    },
    responseType: "json"
  });
  Axios.interceptors.request.use(
    (config) => {
      removePending(pendingKey);
      options.cancelDuplicateRequest && addPending(pendingKey, config);
      FastApp.state.axios.interceptors.request && FastApp.state.axios.interceptors.request(config);
      if (options.loading) {
        loadingInstance.count++;
        if (loadingInstance.count === 1) {
          loading = { ...loadingOptions, ...loading };
          loadingInstance.target = ElLoading.service(loading);
        }
      }
      if (FastApp.state.axios.requestCipher) {
        let requestData = config.params || config.data;
        const dataStr = JSON.stringify(requestData);
        if (dataStr != null && dataStr != "" && dataStr != "{}") {
          consoleDebug("axiosUtil", `HTTP request data("${config.url}")`, requestData);
          const decryptData = cryptoUtil.aes.encrypt(dataStr, `${timestamp}`, `FIV${timestamp}`);
          requestData = {
            data: decryptData,
            timestamp
          };
          switch (config.method.toUpperCase()) {
            case "GET":
            case "DELETE":
            case "HEAD":
              config.params = requestData;
              break;
            case "POST":
            case "PUT":
            case "PATCH":
              config.data = requestData;
              break;
            case "OPTIONS":
            case "CONNECT":
            case "TRACE":
              throw new Error("This request mode is not supported.");
          }
          config.headers["Fast-Request-Encipher"] = "true";
        }
      } else {
        if (config.method.toUpperCase() === "GET") {
          config.params = config.params || {};
          config.params._ = timestamp;
        }
      }
      return config;
    },
    (error) => {
      return getPromiseReject(options, 500, "应用程序内部错误！", error);
    }
  );
  Axios.interceptors.response.use(
    (response) => {
      removePending(pendingKey);
      options.loading && closeLoading(options);
      if (options.ignoreError) {
        return Promise.resolve(response);
      }
      if (FastApp.state.axios.interceptors.response) {
        try {
          const result = FastApp.state.axios.interceptors.response(response);
          if (result != null && result != void 0) {
            return Promise.resolve(result);
          }
        } catch (error) {
          if (options.ignoreError) {
            return Promise.resolve(response);
          }
          return getPromiseReject(options, 500, "应用程序内部错误！", error);
        }
      }
      switch (response.config.responseType) {
        case "blob":
          if (response.status === 200) {
            if (options.autoDownloadFile) {
              downloadFile(response);
            }
            return Promise.resolve(response);
          } else {
            ElMessage.error(errorCodeMessages["fileDownloadError"]);
            return Promise.reject(response);
          }
        case "json":
          {
            const responseData = response.data;
            const restfulData = response.data;
            const code = (restfulData == null ? void 0 : restfulData.code) ?? response.status;
            if (code < 200 || code > 299 || !(restfulData == null ? void 0 : restfulData.success)) {
              if (options.showCodeMessage) {
                if (restfulData == null ? void 0 : restfulData.message) {
                  if (isObject(restfulData == null ? void 0 : restfulData.message)) {
                    ElMessage.error(JSON.stringify(restfulData == null ? void 0 : restfulData.message));
                  } else {
                    ElMessage.error(restfulData == null ? void 0 : restfulData.message);
                  }
                }
                return getPromiseReject(
                  options,
                  code,
                  responseData["message"] ?? "服务器内部错误！",
                  (restfulData == null ? void 0 : restfulData.data) ?? responseData,
                  response
                );
              }
              if (FastApp.state.axios.requestCipher) {
                if (restfulData == null ? void 0 : restfulData.data) {
                  restfulData.data = cryptoUtil.aes.decrypt(
                    restfulData.data,
                    `${restfulData.timestamp}`,
                    `FIV${restfulData.timestamp}`
                  );
                  if (isString(restfulData.data) && restfulData.data.startsWith('"') && restfulData.data.endsWith('"')) {
                    restfulData.data = restfulData.data.replace(/"/g, "");
                  }
                  consoleDebug("axiosUtil", `HTTP response data("${response.config.url}")`, restfulData.data);
                }
              }
              if (options.cache) {
                const cacheKey = `${HTTP_CACHE_KEY}${options.url}`;
                Local.set(cacheKey, (restfulData == null ? void 0 : restfulData.data) ?? responseData, 60 * 24);
              }
              if (options.simpleDataFormat) {
                return Promise.resolve({ ...(restfulData == null ? void 0 : restfulData.data) ?? responseData, response });
              } else {
                return Promise.resolve(response);
              }
            }
          }
          break;
        default:
          if (options.simpleDataFormat) {
            return Promise.resolve({ ...response.data, response });
          } else {
            return Promise.resolve(response);
          }
      }
    },
    (error) => {
      (error == null ? void 0 : error.config) && removePending(error == null ? void 0 : error.config);
      options.loading && closeLoading(options);
      if (!axios.isCancel(error)) {
        consoleError("axiosUtil", errorCodeMessages["cancelDuplicate"], error);
      }
      if (FastApp.state.axios.interceptors.responseError) {
        try {
          const result = FastApp.state.axios.interceptors.responseError(error);
          if (result != null && result != void 0) {
            return Promise.reject(result);
          }
        } catch (error2) {
          return getPromiseReject(options, 500, "应用程序内部错误！", error2);
        }
      }
      options.showErrorMessage && httpErrorStatusHandle(error);
      return getPromiseReject(options, 500, "服务器内部错误！", error);
    }
  );
};
let existsVersionUpdateInstance = false;
const versionUpdate = (version) => {
  consoleLog("axiosUtil", `当前版本 ${version}`);
  axios.get(`/version.json?_=${Date.now()}`).then((response) => {
    if (version !== response.data.version) {
      if (existsVersionUpdateInstance) return;
      existsVersionUpdateInstance = true;
      consoleLog("axiosUtil", `发现新版本 ${response.data.version}`);
      ElMessageBox.confirm(`发现新版本 ${response.data.version}，是否立即更新？`, {
        type: "warning",
        confirmButtonText: "更新",
        closeOnClickModal: false
      }).then(() => {
        consoleLog("axiosUtil", `更新版本 ${response.data.version}`);
        window.location.reload();
      }).catch(() => {
        existsVersionUpdateInstance = false;
        consoleWarn("axiosUtil", `取消更新版本 ${response.data.version}`);
        ElMessage.warning({
          message: "您取消了更新，将在十分钟后再次进行提示！"
        });
      });
    }
  }).then((error) => {
    consoleError("axiosUtil", "检测版本更新错误。", error);
  });
};
const checkVersionUpdate = (version, delay = 10 * 60 * 1e3) => {
  versionUpdate(version);
  setInterval(() => {
    versionUpdate(version);
  }, delay);
};
const axiosUtil = {
  /**
   * 请求
   * @param axiosConfig axios 请求配置
   * @param loading loading配置
   */
  request: createAxios,
  /**
   * 下载文件
   */
  downloadFile,
  /**
   * 删除HTTP 缓存数据
   */
  deleteHttpCache: () => {
    Local.removeByPrefix(HTTP_CACHE_KEY);
  },
  /**
   * 检测版本更新
   * @default 默认10分钟一次
   */
  checkVersionUpdate
};
export {
  HTTP_CACHE_KEY,
  axiosUtil
};
//# sourceMappingURL=axios.mjs.map
