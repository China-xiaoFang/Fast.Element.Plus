import { isString } from "lodash-unified";
const stringUtil = {
  /**
   * 根据当前时间生成问候语
   */
  getGreet() {
    const now = /* @__PURE__ */ new Date();
    const hour = now.getHours();
    let greet = "";
    if (hour < 5) {
      greet = "夜深了，注意身体哦！";
    } else if (hour < 9) {
      greet = "早上好！欢迎回来！";
    } else if (hour < 12) {
      greet = "上午好！欢迎回来！";
    } else if (hour < 14) {
      greet = "中午好！欢迎回来！";
    } else if (hour < 18) {
      greet = "下午好！欢迎回来！";
    } else if (hour < 24) {
      greet = "晚上好！欢迎回来！";
    } else {
      greet = "您好！欢迎回来！";
    }
    return greet;
  },
  /**
   * 对象URL参数化
   */
  objectToQueryString(obj) {
    let params = "";
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (params !== "") {
          params += "&";
        }
        params += `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
      }
    }
    return params;
  },
  /**
   * 获取Url参数
   */
  getUrlParams(url) {
    const regex = /[?&][^=?&]+=[^?&]+/g;
    const params = {};
    let match;
    while ((match = regex.exec(url)) !== null) {
      const [key, value] = match[0].substring(1).split("=");
      params[key] = decodeURIComponent(value);
    }
    return params;
  },
  /**
   * 是否为JSON字符串
   */
  isJson(value) {
    if (!isString(value)) return false;
    value = value.replace(/\s/g, "").replace(/\n|\r/, "");
    if (/^\{(.*?)\}$/.test(value)) return /"(.*?)":(.*?)/g.test(value);
    if (/^\[(.*?)\]$/.test(value)) {
      return value.replace(/^\[/, "").replace(/\]$/, "").replace(/},{/g, "}\n{").split(/\n/).map((s) => {
        return stringUtil.isJson(s);
      }).reduce((prev, curr) => {
        return !!curr;
      });
    }
    return false;
  },
  /**
   * 生成随机字符串
   */
  generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  },
  /**
   * @description 生成唯一 uuid
   */
  generateUUID() {
    let uuid = "";
    for (let i = 0; i < 32; i++) {
      const random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
      uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }
    return uuid;
  },
  /**
   * 复制
   */
  async copy(value) {
    if ((navigator == null ? void 0 : navigator.clipboard) && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
    } else {
      const textareaEl = document.createElement("textarea");
      textareaEl.value = value;
      textareaEl.style.position = "absolute";
      textareaEl.style.opacity = "0";
      textareaEl.style.left = "-999999px";
      textareaEl.style.top = "-999999px";
      document.body.appendChild(textareaEl);
      textareaEl.focus();
      textareaEl.select();
      document.execCommand("copy");
      textareaEl.remove();
    }
  }
};
export {
  stringUtil
};
//# sourceMappingURL=string.mjs.map
