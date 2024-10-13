/**
 * 本地缓存
 */

import { FastApp } from "@fast-element-plus/settings";
import { base64Util, consoleError } from "@fast-element-plus/utils";

/**
 * 本地缓存前缀 Key
 */
export const CACHE_PREFIX = "fast__";

/**
 * 本地缓存过期值后缀 Key
 */
export const CACHE_EXPIRE_SUFFIX = "__Expire";

/**
 * window.localStorage
 */
export const Local = {
	/**
	 * 设置
	 * @param key 缓存的Key
	 * @param val 缓存值
	 * @param expire 过期时间，单位分钟
	 * @param encrypt 是否对缓存的数据加密
	 */
	set(key: string, val: any, expire?: number, encrypt?: boolean): void {
		try {
			encrypt ??= FastApp.state.storageCrypto;
			// 判断是否存在缓存过期时间
			if (expire) {
				if (isNaN(expire) || expire < 1) {
					throw new Error("有效期应为一个有效数值");
				}
				// 设置过期时间的缓存
				const expireData = {
					time: Date.now(),
					expire,
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
	get<T = string>(key: string, decrypt?: boolean): T {
		try {
			decrypt ??= FastApp.state.storageCrypto;
			// 获取缓存 JSON 字符串
			let valJson = window.localStorage.getItem(`${CACHE_PREFIX}${key}`);
			if (valJson) {
				// 判断是否解密
				if (decrypt) {
					valJson = base64Util.base64ToStr(valJson);
				}
				// 尝试获取缓存过期时间的 JSON 字符串
				const expireJson = window.localStorage.getItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
				// 判断是否存在过期时间
				if (expireJson) {
					const expireData = JSON.parse(expireJson);
					if (Date.now() > expireData.time + expireData.expire * 60 * 1000) {
						// 过期了，删除对应的缓存数据
						window.localStorage.removeItem(`${CACHE_PREFIX}${key}`);
						window.localStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
						return null;
					}
				}
				try {
					return JSON.parse(valJson) as T;
				} catch {
					return valJson as T;
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
	remove(key: string): void {
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
	removeByPrefix(key: string): void {
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
	clear(): void {
		try {
			window.localStorage.clear();
		} catch (error) {
			consoleError("Local", error);
		}
	},
};

/**
 * window.sessionStorage
 */
export const Session = {
	/**
	 * 设置会话缓存
	 * @param key 缓存的Key
	 * @param val 缓存值
	 * @param expire 过期时间，单位分钟
	 * @param encrypt 是否对缓存的数据加密
	 */
	set(key: string, val: any, expire?: number, encrypt?: boolean): void {
		try {
			encrypt ??= FastApp.state.storageCrypto;
			// 判断是否存在缓存过期时间
			if (expire) {
				if (isNaN(expire) || expire < 1) {
					throw new Error("有效期应为一个有效数值");
				}
				// 设置过期时间的缓存
				const expireData = {
					time: Date.now(),
					expire,
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
	get<T = string>(key: string, decrypt?: boolean): T {
		try {
			decrypt ??= FastApp.state.storageCrypto;
			// 获取缓存 JSON 字符串
			let valJson = window.sessionStorage.getItem(`${CACHE_PREFIX}${key}`);
			if (valJson) {
				// 判断是否解密
				if (decrypt) {
					valJson = base64Util.base64ToStr(valJson);
				}
				// 尝试获取缓存过期时间的 JSON 字符串
				const expireJson = window.sessionStorage.getItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
				// 判断是否存在过期时间
				if (expireJson) {
					const expireData = JSON.parse(expireJson);
					if (Date.now() > expireData.time + expireData.expire * 60 * 1000) {
						// 过期了，删除对应的缓存数据
						window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}`);
						window.sessionStorage.removeItem(`${CACHE_PREFIX}${key}${CACHE_EXPIRE_SUFFIX}`);
						return null;
					}
				}
				try {
					return JSON.parse(valJson) as T;
				} catch {
					return valJson as T;
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
	remove(key: string): void {
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
	removeByPrefix(key: string): void {
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
	clear(): void {
		try {
			window.sessionStorage.clear();
		} catch (error) {
			consoleError("Session", error);
		}
	},
};
