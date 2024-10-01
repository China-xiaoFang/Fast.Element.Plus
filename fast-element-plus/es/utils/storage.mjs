import { fastOptions } from "../settings/index.mjs";
import "./index.mjs";
import { base64Util } from "./base64.mjs";
import { consoleError } from "./console.mjs";
const CACHE_PREFIX = "fast__";
const CACHE_EXPIRE_SUFFIX = "__Expire";
const Local = {
  /**
   * 设置
   * @param key 缓存的Key
   * @param val 缓存值
   * @param expire 过期时间，单位分钟
   * @param encrypt 是否对缓存的数据加密
   */
  set(key, val, expire, encrypt) {
    try {
      encrypt ?? (encrypt = fastOptions.storageCrypto);
      if (expire) {
        if (isNaN(expire) || expire < 1) {
          throw new Error("有效期应为一个有效数值");
        }
        const expireData = {
          time: Date.now(),
          expire
        };
        const expireJson = JSON.stringify(expireData);
        window.localStorage.setItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`, expireJson);
      }
      let valJson = JSON.stringify(val);
      if (encrypt) {
        valJson = base64Util.toBase64(valJson);
      }
      window.localStorage.setItem(`${CACHE_PREFIX}${key}`, valJson);
    } catch (error) {
      consoleError("Local", error);
    }
  },
  /**
   * 获取
   * @param key 缓存的Key
   * @param decrypt 是否对缓存的数据解密
   * @returns {T} 传入的对象类型，默认为 string
   */
  get(key, decrypt) {
    try {
      decrypt ?? (decrypt = fastOptions.storageCrypto);
      let valJson = window.localStorage.getItem(`${CACHE_PREFIX}${key}`);
      if (valJson) {
        if (decrypt) {
          valJson = base64Util.base64ToStr(valJson);
        }
        const expireJson = window.localStorage.getItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
        if (expireJson) {
          const expireData = JSON.parse(expireJson);
          if (Date.now() > expireData.time + expireData.expire * 60 * 1e3) {
            window.localStorage.removeItem(`${CACHE_PREFIX}${key}`);
            window.localStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
            return null;
          }
        }
        try {
          return JSON.parse(valJson);
        } catch {
          return valJson;
        }
      }
      return null;
    } catch (error) {
      consoleError("Local", error);
    }
  },
  /**
   * 移除
   * @param key 缓存的Key
   */
  remove(key) {
    try {
      window.localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      window.localStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
    } catch (error) {
      consoleError("Local", error);
    }
  },
  /**
   * 根据前缀移除
   * @param key 缓存的Key
   */
  removeByPrefix(key) {
    try {
      for (const itemKey in window.localStorage) {
        if (itemKey.indexOf(`${CACHE_PREFIX}${key}`) !== -1) {
          window.localStorage.removeItem(itemKey);
        }
      }
    } catch (error) {
      consoleError("Local", error);
    }
  },
  /**
   * 移除全部
   */
  clear() {
    try {
      window.localStorage.clear();
    } catch (error) {
      consoleError("Local", error);
    }
  }
};
const Session = {
  /**
   * 设置会话缓存
   * @param key 缓存的Key
   * @param val 缓存值
   * @param expire 过期时间，单位分钟
   * @param encrypt 是否对缓存的数据加密
   */
  set(key, val, expire, encrypt) {
    try {
      encrypt ?? (encrypt = fastOptions.storageCrypto);
      if (expire) {
        if (isNaN(expire) || expire < 1) {
          throw new Error("有效期应为一个有效数值");
        }
        const expireData = {
          time: Date.now(),
          expire
        };
        const expireJson = JSON.stringify(expireData);
        window.sessionStorage.setItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`, expireJson);
      }
      let valJson = JSON.stringify(val);
      if (encrypt) {
        valJson = base64Util.toBase64(valJson);
      }
      window.sessionStorage.setItem(`${CACHE_PREFIX}${key}`, valJson);
    } catch (error) {
      consoleError("Session", error);
    }
  },
  /**
   * 获取会话缓存
   * @param key 缓存的Key
   * @param decrypt 是否对缓存的数据解密
   * @returns {T} 传入的对象类型，默认为 string
   */
  get(key, decrypt) {
    try {
      decrypt ?? (decrypt = fastOptions.storageCrypto);
      let valJson = window.sessionStorage.getItem(`${CACHE_PREFIX}${key}`);
      if (valJson) {
        if (decrypt) {
          valJson = base64Util.base64ToStr(valJson);
        }
        const expireJson = window.sessionStorage.getItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
        if (expireJson) {
          const expireData = JSON.parse(expireJson);
          if (Date.now() > expireData.time + expireData.expire * 60 * 1e3) {
            window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}`);
            window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
            return null;
          }
        }
        try {
          return JSON.parse(valJson);
        } catch {
          return valJson;
        }
      }
      return null;
    } catch (error) {
      consoleError("Session", error);
    }
  },
  /**
   * 移除会话缓存
   * @param key 缓存的Key
   */
  remove(key) {
    try {
      window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}`);
      window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
    } catch (error) {
      consoleError("Session", error);
    }
  },
  /**
   * 根据前缀移除会话缓存
   * @param key 缓存的Key
   */
  removeByPrefix(key) {
    try {
      for (const itemKey in window.sessionStorage) {
        if (itemKey.indexOf(`${CACHE_PREFIX}${key}`) !== -1) {
          window.sessionStorage.removeItem(itemKey);
        }
      }
    } catch (error) {
      consoleError("Session", error);
    }
  },
  /**
   * 移除全部会话缓存
   */
  clear() {
    try {
      window.sessionStorage.clear();
    } catch (error) {
      consoleError("Session", error);
    }
  }
};
export {
  CACHE_EXPIRE_SUFFIX,
  CACHE_PREFIX,
  Local,
  Session
};
//# sourceMappingURL=storage.mjs.map
