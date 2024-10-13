import "../constants/index.mjs";
import "./index.mjs";
import { ElMessage } from "element-plus";
import { isFunction, isArray } from "lodash-unified";
import { FaMimeType } from "../constants/mime.mjs";
import { consoleError } from "./console.mjs";
import { axiosUtil } from "./axios.mjs";
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
   * @param fileType 文件类型
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
      const apiRes = await axiosUtil.request({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        url,
        method: "post",
        data: formData,
        cancelDuplicateRequest: false
      });
      return Promise.resolve(apiRes.data);
    } catch (error) {
      consoleError("uploadUtil", "文件上传失败！", error);
      ElMessage.error("文件上传失败！");
      return Promise.reject();
    }
  }
};
export {
  uploadUtil
};
//# sourceMappingURL=upload.mjs.map
