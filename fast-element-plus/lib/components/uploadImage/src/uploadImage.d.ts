import { UploadUserFile } from 'element-plus';
export declare const faUploadImageProps: {
    /** @description whether to activate drag and drop mode */
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 高度 */
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    beforeUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)))[], unknown, unknown, () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    limit: NumberConstructor;
};
export declare const faUploadImageEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | string[]) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string | string[]) => boolean;
};
type FaUploadImageSlots = {
    /** @description 默认内容插槽 */
    default: never;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description whether to activate drag and drop mode */
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 高度 */
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    beforeUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)))[], unknown, unknown, () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    limit: NumberConstructor;
}>, {
    /** @description 取消上传请求 */
    abort: import('vue').ComputedRef<(file: import('element-plus').UploadFile) => void>;
    /** @description 手动上传文件列表 */
    submit: import('vue').ComputedRef<() => void>;
    /** @description 清空已上传的文件列表（该方法不支持在 before-upload 中调用） */
    clearFiles: import('vue').ComputedRef<(states?: import('element-plus').UploadStatus[]) => void>;
    /** @description 手动选择文件 */
    handleStart: import('vue').ComputedRef<(rawFile: import('element-plus').UploadRawFile) => void>;
    /** @description 手动移除文件。 file 和 rawFile 已被合并。 rawFile 将在 v2.2.0 中移除 */
    handleRemove: import('vue').ComputedRef<(file: import('element-plus').UploadFile | import('element-plus').UploadRawFile) => void>;
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
    "update:modelValue": (value: string | string[]) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string | string[]) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description whether to activate drag and drop mode */
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
    /** @description 宽度 */
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /** @description 高度 */
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    beforeUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus').UploadData>)))[], unknown, unknown, () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    limit: NumberConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: string | string[]) => any;
    onChange?: (value: string | string[]) => any;
    "onUpdate:fileList"?: (value: UploadUserFile[]) => any;
}>, {
    name: string;
    onError: (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    data: import('element-plus/es/utils/typescript.mjs').Mutable<{}>;
    disabled: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    onChange: (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    width: string | number;
    drag: boolean;
    height: string | number;
    onProgress: (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    multiple: boolean;
    beforeUpload: (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<void | undefined | null | boolean | File | Blob>;
    onRemove: (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onPreview: (uploadFile: import('element-plus').UploadFile) => void;
    onSuccess: (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
    action: string;
    method: string;
    withCredentials: boolean;
    showFileList: boolean;
    accept: string;
    fileList: UploadUserFile[];
    autoUpload: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    listType: "picture" | "text" | "picture-card";
    httpRequest: import('element-plus').UploadRequestHandler;
    maxSize: string | number;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaUploadImageSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
