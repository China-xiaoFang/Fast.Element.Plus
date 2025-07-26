import { ElMessage } from "element-plus";
import "../../../constants/index.mjs";
import { consoleError, consoleWarn } from "@fast-china/utils";
import { isFunction, isArray } from "lodash-unified";
import { FaMimeType } from "../../../constants/mime.mjs";
const FaMimeTypeNames = {};
for (const [kName, vAccept] of Object.entries(FaMimeType)) {
  vAccept.split(",").forEach((tItem) => {
    FaMimeTypeNames[tItem.trim()] = kName;
  });
}
const uploadUtil = {
  /**
   * 识别文件类型
   */
  detectFileType(accept) {
    const detectTypes = /* @__PURE__ */ new Set();
    accept.split(",").forEach((mimeType) => {
      detectTypes.add(FaMimeTypeNames[mimeType] ?? mimeType);
    });
    return Array.from(detectTypes).join(",");
  },
  /**
   * 获取props data属性值
   */
  getPropsData(rawFile, data) {
    let propsData;
    if (isFunction(data)) {
      propsData = data(rawFile);
    } else {
      propsData = data;
    }
    const result = {};
    if (isArray(data)) {
      data.forEach((item) => {
        Object.assign(result, item);
      });
    } else {
      Object.assign(result, propsData);
    }
    return result;
  },
  /**
   * 文件上传
   * @param url 地址
   * @param file 文件
   * @param fileName 文件名称
   * @param params 参数
   */
  async uploadFile(url, file, fileName, params) {
    if (!url) {
      consoleError("uploadUtil", "文件上传地址为空！");
      ElMessage.error("文件上传地址为空！");
      return Promise.reject();
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    if (params) {
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
    }
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        consoleWarn("uploadUtil", "文件上传失败！");
        ElMessage.error("文件上传失败！");
        return Promise.reject();
      }
      return await response.text();
    } catch (error) {
      consoleWarn("uploadUtil", "文件上传失败！");
      consoleError("uploadUtil", error);
      ElMessage.error("文件上传失败！");
      return Promise.reject();
    }
  },
  /**
   * 文件上传
   * @param url 地址
   * @param file 文件
   * @param fileName 文件名称
   * @param params 参数
   */
  async uploadFileByApi(api, file, fileName, params) {
    if (!api) {
      consoleError("uploadUtil", "文件上传接口为空！");
      ElMessage.error("文件上传接口为空！");
      return Promise.reject();
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    if (params) {
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
    }
    try {
      return Promise.resolve(await api(formData));
    } catch (error) {
      consoleWarn("uploadUtil", "文件上传失败！");
      consoleError("uploadUtil", error);
      ElMessage.error("文件上传失败！");
      return Promise.reject();
    }
  }
};
export {
  uploadUtil
};
//# sourceMappingURL=upload.mjs.map
