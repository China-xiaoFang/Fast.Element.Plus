import { Decimal } from 'decimal.js';
import { UploadFile, UploadFiles, UploadProps, UploadRawFile, UploadRequestOptions, UploadUserFile } from 'element-plus';
export declare const useUpload: <T extends string | string[]>(componentName: string, fileTypeName: string, props: UploadProps & {
    modelValue: T;
}, emit: ((event: "update:fileList", value: UploadUserFile[]) => void) & ((event: "update:modelValue", value: T) => void) & ((event: "change", value: T) => void), data?: {
    maxSize?: string | number;
    uploadApi?: (formData: FormData) => Promise<string>;
    uploadUrl?: string;
}) => {
    fileList: import('vue').Ref<{
        raw?: {
            uid: number;
            isDirectory?: boolean;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            bytes: () => Promise<Uint8Array<ArrayBuffer>>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
            text: () => Promise<string>;
        };
        size?: number;
        name: string;
        url?: string;
        percentage?: number;
        response?: unknown;
        status?: import('element-plus').UploadStatus;
        uid?: number;
    }[], {
        raw?: {
            uid: number;
            isDirectory?: boolean;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            bytes: () => Promise<Uint8Array<ArrayBuffer>>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
            text: () => Promise<string>;
        };
        size?: number;
        name: string;
        url?: string;
        percentage?: number;
        response?: unknown;
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
