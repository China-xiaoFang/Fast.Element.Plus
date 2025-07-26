import { UploadRawFile } from 'element-plus';
/**
 * 上传工具类
 */
export declare const uploadUtil: {
    /**
     * 识别文件类型
     */
    detectFileType(accept: string): string;
    /**
     * 获取props data属性值
     */
    getPropsData(rawFile: UploadRawFile, data: any | any[] | ((rawFile: UploadRawFile) => any[])): any;
    /**
     * 文件上传
     * @param url 地址
     * @param file 文件
     * @param fileName 文件名称
     * @param params 参数
     */
    uploadFile(url: string, file: File, fileName: string, params?: unknown): Promise<string>;
    /**
     * 文件上传
     * @param url 地址
     * @param file 文件
     * @param fileName 文件名称
     * @param params 参数
     */
    uploadFileByApi(api: (formData: FormData) => Promise<string>, file: File, fileName: string, params?: unknown): Promise<string>;
};
