import { Decimal } from 'decimal.js';
import { UploadFile, UploadFiles, UploadProps, UploadRawFile, UploadRequestOptions, UploadUserFile } from 'element-plus';
export declare const useUpload: <T extends string | string[]>(componentName: string, fileTypeName: string, props: UploadProps & {
    modelValue: T;
}, emit: ((event: "update:fileList", value: UploadUserFile[]) => void) & ((event: "update:modelValue", value: T) => void) & ((event: "change", value: T) => void), data?: {
    maxSize?: string | number;
    uploadUrl?: string;
}) => {
    fileList: import('vue').Ref<{
        url?: string;
        size?: number;
        name: string;
        response?: unknown;
        raw?: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        };
        percentage?: number;
        status?: import('element-plus').UploadStatus;
        uid?: number;
    }[], {
        url?: string;
        size?: number;
        name: string;
        response?: unknown;
        raw?: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        };
        percentage?: number;
        status?: import('element-plus').UploadStatus;
        uid?: number;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    formContext: import('element-plus').FormContext;
    formItemContext: import('element-plus').FormItemContext;
    maxSizeMB: Decimal;
    handleValue: () => void;
    handleHttpRequest: (options: UploadRequestOptions) => Promise<void>;
    handleOnSuccess: (fileUrl: string, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    handleOnError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    handleOnExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
    handleOnUpload: (file: UploadFile | UploadRawFile) => boolean;
};
