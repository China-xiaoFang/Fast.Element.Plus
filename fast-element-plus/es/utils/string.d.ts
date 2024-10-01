/**
 * 字符串工具类
 */
export declare const stringUtil: {
    /**
     * 根据当前时间生成问候语
     */
    getGreet(): string;
    /**
     * 对象URL参数化
     */
    objectToQueryString(obj: any): string;
    /**
     * 获取Url参数
     */
    getUrlParams(url: string): Record<string, any>;
    /**
     * 是否为JSON字符串
     */
    isJson(value: string): boolean;
    /**
     * 生成随机字符串
     */
    generateRandomString(length: number): string;
    /**
     * @description 生成唯一 uuid
     */
    generateUUID(): string;
    /**
     * 复制
     */
    copy(value: string): Promise<void>;
};
