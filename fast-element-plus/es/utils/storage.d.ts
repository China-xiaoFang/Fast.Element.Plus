/**
 * 本地缓存
 */
/**
 * 本地缓存前缀 Key
 */
export declare const CACHE_PREFIX = "fast__";
/**
 * 本地缓存过期值后缀 Key
 */
export declare const CACHE_EXPIRE_SUFFIX = "__Expire";
/**
 * window.localStorage
 */
export declare const Local: {
    /**
     * 设置
     * @param key 缓存的Key
     * @param val 缓存值
     * @param expire 过期时间，单位分钟
     * @param encrypt 是否对缓存的数据加密
     */
    set(key: string, val: any, expire?: number, encrypt?: boolean): void;
    /**
     * 获取
     * @param key 缓存的Key
     * @param decrypt 是否对缓存的数据解密
     * @returns {T} 传入的对象类型，默认为 string
     */
    get<T = string>(key: string, decrypt?: boolean): T;
    /**
     * 移除
     * @param key 缓存的Key
     */
    remove(key: string): void;
    /**
     * 根据前缀移除
     * @param key 缓存的Key
     */
    removeByPrefix(key: string): void;
    /**
     * 移除全部
     */
    clear(): void;
};
/**
 * window.sessionStorage
 */
export declare const Session: {
    /**
     * 设置会话缓存
     * @param key 缓存的Key
     * @param val 缓存值
     * @param expire 过期时间，单位分钟
     * @param encrypt 是否对缓存的数据加密
     */
    set(key: string, val: any, expire?: number, encrypt?: boolean): void;
    /**
     * 获取会话缓存
     * @param key 缓存的Key
     * @param decrypt 是否对缓存的数据解密
     * @returns {T} 传入的对象类型，默认为 string
     */
    get<T = string>(key: string, decrypt?: boolean): T;
    /**
     * 移除会话缓存
     * @param key 缓存的Key
     */
    remove(key: string): void;
    /**
     * 根据前缀移除会话缓存
     * @param key 缓存的Key
     */
    removeByPrefix(key: string): void;
    /**
     * 移除全部会话缓存
     */
    clear(): void;
};
