import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
/**
 * Vite 环境
 */
export type ViteEnv = "production" | "development" | "test" | "staging";
/**
 * 日期范围
 */
export type DataRange = "Past1D" | "Past3D" | "Past1W" | "Past1M" | "Past3M" | "Past6M" | "Past1Y";
/**
 * Fast App 配置选项
 */
export type FastAppOptions = {
    /**
     * 环境
     * @default "development"
     */
    env?: ViteEnv;
    /**
     * 存储加密，请在初始化的时候确认，后续不可再修改，否则所有数据都将失效
     * @default true
     */
    storageCrypto?: boolean;
    /**
     * Axios 配置
     */
    axios?: {
        /**
         * 请求域名或者Base路径
         */
        baseUrl?: string;
        /**
         * 超时时间，单位毫秒
         * @default 60000
         */
        timeout?: number;
        /**
         * 请求加密解密
         * @default true
         */
        requestCipher?: boolean;
        /**
         * 拦截器
         */
        interceptors?: {
            /**
             * 请求拦截器
             */
            request?: <Input = any>(config: InternalAxiosRequestConfig<Input>) => void;
            /**
             * 响应拦截器
             */
            response?: <Output = any, Input = any>(response: AxiosResponse<Output, Input>) => any | void;
            /**
             * 响应错误处理
             */
            responseError?: (error: AxiosError | any) => any | void;
        };
    };
    /**
     * 表格配置
     */
    table?: {
        /**
         * 显示搜索Form
         * @default true
         */
        showSearch?: boolean;
        /**
         * 隐藏图片
         * @default true
         */
        hideImage?: boolean;
        /**
         * 时间搜索范围
         */
        dataSearchRange?: DataRange;
    };
    /**
     * 上传
     */
    upload?: {
        /**
         * 上传路径
         */
        url?: string;
    };
};
/**
 * 后续删除
 */
type IMapToDo = {
    value: any;
};
export declare class FastApp {
    static state: {
        env?: ViteEnv;
        storageCrypto?: boolean;
        axios?: {
            baseUrl?: string;
            timeout?: number;
            requestCipher?: boolean;
            interceptors?: {
                request?: <Input = any>(config: InternalAxiosRequestConfig<Input>) => void;
                response?: <Output = any, Input = any>(response: AxiosResponse<Output, Input>) => any | void;
                responseError?: (error: AxiosError | any) => any | void;
            };
        };
        table?: {
            showSearch?: boolean;
            hideImage?: boolean;
            dataSearchRange?: DataRange;
        };
        upload?: {
            url?: string;
        };
    };
    private static stateMap;
    /**
     * 设置 App 配置
     */
    static setAppOptions: (appOptions: FastAppOptions) => void;
    /**
     * 设置环境
     */
    static setEnv: (env: ViteEnv) => void;
    /**
     * 设置 Axios 选项
     */
    static setAxiosOptions: (axiosOptions: FastAppOptions["axios"]) => void;
    /**
     * 设置 Table 选项
     */
    static setTableOptions: (tableOptions: FastAppOptions["table"]) => void;
    /**
     * 设置 Upload 选项
     */
    static setUploadOptions: (uploadOptions: FastAppOptions["upload"]) => void;
    /**
     * 设置字典
     */
    static setDictionary: (dictionary: Map<string, IMapToDo[]>) => void;
    /**
     * 获取字典
     */
    static getDictionary: (key: string) => IMapToDo[];
    /**
     * 获取表格列
     */
    static getTableColumns: (tableKey: string) => IMapToDo[] | false;
    /**
     * 设置或更新表格列
     */
    static setTableColumns: (tableKey: string, columns: IMapToDo[]) => void;
    /**
     * 清除 App 缓存
     */
    static clearAppCache: () => void;
}
export {};
