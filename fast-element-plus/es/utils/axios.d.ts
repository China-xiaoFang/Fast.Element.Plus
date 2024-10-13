import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LoadingOptions } from 'element-plus';
/**
 * RESTful风格Api响应
 */
export type ApiResponse<Input = any, Output = any> = {
    /**
     * 执行成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 错误信息
     */
    message?: string;
    /**
     * 数据
     */
    data?: Output;
    /**
     * 时间戳
     */
    timestamp?: number;
    /**
     * 响应
     */
    response?: AxiosResponse<Output, Input>;
};
/**
 * RESTful风格Api Promise
 */
export type ApiPromise<Input = any, Output = any> = Promise<ApiResponse<Input, Output>>;
/**
 * Axios 选项
 */
export type AxiosOptions = {
    /**
     * 是否开启取消重复请求, 默认为
     * @default true
     */
    cancelDuplicateRequest?: boolean;
    /**
     * 是否开启loading层效果
     * @default false
     */
    loading?: boolean;
    /**
     * 是否开启缓存，只有Get请求才行
     * @default false
     */
    cache?: boolean;
    /**
     * 忽略错误
     * @default false
     */
    ignoreError?: boolean;
    /**
     * Get请求缓存问题处理
     * @default true
     */
    getMethodCacheHandle?: boolean;
    /**
     * 是否开启简洁的数据结构响应
     * - 只有响应格式是JSON的才开启
     * @default true
     */
    simpleDataFormat?: boolean;
    /**
     * 是否开启接口错误信息展示
     * @default true
     */
    showErrorMessage?: boolean;
    /**
     * 是否开启code信息提示
     * - code >= 200 && code <= 299 则不提示
     * @default true
     */
    showCodeMessage?: boolean;
    /**
     * 是否开启请求成功的信息提示
     * - 只有 code >= 200 && code <= 299 才提示
     * @default false
     */
    showSuccessMessage?: boolean;
    /**
     * 是否开启自动下载文件
     * - 只有 responseType 配置了 "blob" 才会自动下载
     * @default true
     */
    autoDownloadFile?: boolean;
};
type FastAxiosRequestConfig<Input> = AxiosRequestConfig<Input> & AxiosOptions;
/**
 * Http 缓存 Key
 */
export declare const HTTP_CACHE_KEY = "HTTP_CACHE_";
export declare const axiosUtil: {
    /**
     * 请求
     * @param axiosConfig axios 请求配置
     * @param loading loading配置
     */
    request: <Input = any, Output = any>(axiosConfig: FastAxiosRequestConfig<Input>, loading?: LoadingOptions) => Promise<Output>;
    /**
     * 下载文件
     */
    downloadFile: (response: AxiosResponse) => void;
    /**
     * 删除HTTP 缓存数据
     */
    deleteHttpCache: () => void;
    /**
     * 检测版本更新
     * @default 默认10分钟一次
     */
    checkVersionUpdate: (version: string, delay?: number) => void;
};
export {};
