import { UploadFile, UploadUserFile } from 'element-plus';
export declare const faUploadImagesProps: {
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"picture" | "text" | "picture-card">;
        default: string;
    };
    /** @description whether uploading multiple files is permitted */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string[]>;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 图片上传接口，优先级最高 */
    uploadApi: {
        type: import('vue').PropType<(formData: FormData) => Promise<string>>;
    };
    /** @description 图片上传地址 */
    uploadUrl: StringConstructor;
    beforeUpload: {
        readonly type: import('vue').PropType<(rawFile: import('element-plus').UploadRawFile) => boolean | void | File | Blob | Promise<boolean | void | File | Blob>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => boolean | Promise<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onChange: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onPreview: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onSuccess: {
        readonly type: import('vue').PropType<(response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onProgress: {
        readonly type: import('vue').PropType<(evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onError: {
        readonly type: import('vue').PropType<(error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onExceed: {
        readonly type: import('vue').PropType<(files: File[], uploadFiles: UploadUserFile[]) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "#";
    };
    headers: {
        readonly type: import('vue').PropType<Record<string, any> | Headers>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "post";
    };
    data: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => {};
    };
    name: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "file";
    };
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    showFileList: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    fileList: {
        readonly type: import('vue').PropType<UploadUserFile[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    autoUpload: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    httpRequest: {
        readonly type: import('vue').PropType<import('element-plus').UploadRequestHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: import('element-plus').UploadRequestHandler;
    };
    disabled: BooleanConstructor;
};
export declare const faUploadImagesEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string[]) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string[]) => boolean;
};
type FaUploadImagesSlots = {
    /** @description 默认内容插槽 */
    default: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"picture" | "text" | "picture-card">;
        default: string;
    };
    /** @description whether uploading multiple files is permitted */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string[]>;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 图片上传接口，优先级最高 */
    uploadApi: {
        type: import('vue').PropType<(formData: FormData) => Promise<string>>;
    };
    /** @description 图片上传地址 */
    uploadUrl: StringConstructor;
    beforeUpload: {
        readonly type: import('vue').PropType<(rawFile: import('element-plus').UploadRawFile) => boolean | void | File | Blob | Promise<boolean | void | File | Blob>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => boolean | Promise<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onChange: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onPreview: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onSuccess: {
        readonly type: import('vue').PropType<(response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onProgress: {
        readonly type: import('vue').PropType<(evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onError: {
        readonly type: import('vue').PropType<(error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onExceed: {
        readonly type: import('vue').PropType<(files: File[], uploadFiles: UploadUserFile[]) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "#";
    };
    headers: {
        readonly type: import('vue').PropType<Record<string, any> | Headers>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "post";
    };
    data: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => {};
    };
    name: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "file";
    };
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    showFileList: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    fileList: {
        readonly type: import('vue').PropType<UploadUserFile[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    autoUpload: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    httpRequest: {
        readonly type: import('vue').PropType<import('element-plus').UploadRequestHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: import('element-plus').UploadRequestHandler;
    };
    disabled: BooleanConstructor;
}>, {
    /** @description 取消上传请求 */
    abort: import('vue').ComputedRef<(file: UploadFile) => void>;
    /** @description 手动上传文件列表 */
    submit: import('vue').ComputedRef<() => void>;
    /** @description 清空已上传的文件列表（该方法不支持在 before-upload 中调用） */
    clearFiles: import('vue').ComputedRef<(states?: import('element-plus').UploadStatus[]) => void>;
    /** @description 手动选择文件 */
    handleStart: import('vue').ComputedRef<(rawFile: import('element-plus').UploadRawFile) => void>;
    /** @description 手动移除文件。 file 和 rawFile 已被合并。 rawFile 将在 v2.2.0 中移除 */
    handleRemove: import('vue').ComputedRef<(file: UploadFile | import('element-plus').UploadRawFile, rawFile?: import('element-plus').UploadRawFile) => void>;
    /** @description 加载状态 */
    loading: import('vue').Ref<boolean, boolean>;
    /** @description 文件集合 */
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
    /** @description 预览 */
    preview: import('vue').ComputedRef<boolean>;
    /** @description 预览集合 */
    previewList: import('vue').ComputedRef<any[]>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string[]) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string[]) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"picture" | "text" | "picture-card">;
        default: string;
    };
    /** @description whether uploading multiple files is permitted */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string[]>;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 图片上传接口，优先级最高 */
    uploadApi: {
        type: import('vue').PropType<(formData: FormData) => Promise<string>>;
    };
    /** @description 图片上传地址 */
    uploadUrl: StringConstructor;
    beforeUpload: {
        readonly type: import('vue').PropType<(rawFile: import('element-plus').UploadRawFile) => boolean | void | File | Blob | Promise<boolean | void | File | Blob>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => boolean | Promise<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onChange: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onPreview: {
        readonly type: import('vue').PropType<(uploadFile: UploadFile) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onSuccess: {
        readonly type: import('vue').PropType<(response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onProgress: {
        readonly type: import('vue').PropType<(evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onError: {
        readonly type: import('vue').PropType<(error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    onExceed: {
        readonly type: import('vue').PropType<(files: File[], uploadFiles: UploadUserFile[]) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => void;
    };
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "#";
    };
    headers: {
        readonly type: import('vue').PropType<Record<string, any> | Headers>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "post";
    };
    data: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => {};
    };
    name: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "file";
    };
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    showFileList: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    fileList: {
        readonly type: import('vue').PropType<UploadUserFile[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    autoUpload: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    httpRequest: {
        readonly type: import('vue').PropType<import('element-plus').UploadRequestHandler>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: import('element-plus').UploadRequestHandler;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: string[]) => any;
    onChange?: (value: string[]) => any;
    "onUpdate:fileList"?: (value: UploadUserFile[]) => any;
}>, {
    name: string;
    onError: (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    data: {};
    disabled: boolean;
    onChange: (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    drag: boolean;
    onProgress: (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    multiple: boolean;
    beforeUpload: (rawFile: import('element-plus').UploadRawFile) => boolean | void | File | Blob | Promise<boolean | void | File | Blob>;
    onRemove: (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onPreview: (uploadFile: UploadFile) => void;
    onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
    action: string;
    method: string;
    withCredentials: boolean;
    showFileList: boolean;
    accept: string;
    fileList: UploadUserFile[];
    autoUpload: boolean;
    listType: "picture" | "text" | "picture-card";
    httpRequest: import('element-plus').UploadRequestHandler;
    limit: number;
    maxSize: string | number;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaUploadImagesSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
