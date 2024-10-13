import { UploadUserFile } from 'element-plus';
export declare const faUploadImageProps: {
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: StringConstructor;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 图片上传地址 */
    uploadUrl: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 宽度 */
    width: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 高度 */
    height: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 文件类型 */
    fileType: NumberConstructor;
    beforeUpload: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>) | ((new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: BooleanConstructor;
    limit: NumberConstructor;
};
export declare const faUploadImageEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string) => boolean;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: StringConstructor;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 图片上传地址 */
    uploadUrl: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 宽度 */
    width: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 高度 */
    height: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 文件类型 */
    fileType: NumberConstructor;
    beforeUpload: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>) | ((new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: BooleanConstructor;
    limit: NumberConstructor;
}>, {
    /** @description 加载状态 */
    loading: import('vue').Ref<boolean, boolean>;
    /** @description 文件集合 */
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
    /** @description 预览 */
    preview: boolean;
    /** @description 预览集合 */
    previewList: any[];
    /** @description cancel upload request */
    abort: (file: import('element-plus').UploadFile) => void;
    /** @description upload the file list manually */
    submit: () => void;
    /** @description clear the file list  */
    clearFiles: (states?: import('element-plus').UploadStatus[]) => void;
    /** @description select the file manually */
    handleStart: (rawFile: import('element-plus').UploadRawFile) => void;
    /** @description remove the file manually */
    handleRemove: (file: import('element-plus').UploadRawFile | import('element-plus').UploadFile, rawFile?: import('element-plus').UploadRawFile | undefined) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: string) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
    accept: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description type of file list */
    listType: {
        type: import('vue').PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    /** @description whether to show the uploaded file list */
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description v-model绑定值 */
    modelValue: StringConstructor;
    /** @description 大小限制，单位kb */
    maxSize: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 图片上传地址 */
    uploadUrl: {
        type: StringConstructor;
        default: () => string;
    };
    /** @description 宽度 */
    width: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 高度 */
    height: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    /** @description 文件类型 */
    fileType: NumberConstructor;
    beforeUpload: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | (() => (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>) | {
        (): (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import('vue').PropType<(uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import('element-plus').UploadFile) => void) | (() => (uploadFile: import('element-plus').UploadFile) => void) | {
        (): (uploadFile: import('element-plus').UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    action: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>) | ((new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<import('element-plus').UploadData>) | import('element-plus/es/utils').Awaitable<import('element-plus/es/utils').Mutable<Record<string, any>>>))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
    multiple: BooleanConstructor;
    name: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    drag: BooleanConstructor;
    withCredentials: BooleanConstructor;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    httpRequest: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import('element-plus').UploadRequestHandler) | (() => import('element-plus').UploadRequestHandler) | {
        (): import('element-plus').UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import('element-plus').UploadRequestHandler, boolean>;
    disabled: BooleanConstructor;
    limit: NumberConstructor;
}>> & Readonly<{
    onChange?: (value: string) => any;
    "onUpdate:modelValue"?: (value: string) => any;
    "onUpdate:fileList"?: (value: UploadUserFile[]) => any;
}>, {
    data: import('element-plus/es/utils').Mutable<{}>;
    method: string;
    name: string;
    withCredentials: boolean;
    disabled: boolean;
    width: string | number;
    onChange: (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    height: string | number;
    onError: (error: Error, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    drag: boolean;
    beforeUpload: (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
    onRemove: (uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onPreview: (uploadFile: import('element-plus').UploadFile) => void;
    onSuccess: (response: any, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onProgress: (evt: import('element-plus').UploadProgressEvent, uploadFile: import('element-plus').UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
    action: string;
    multiple: boolean;
    showFileList: boolean;
    accept: string;
    fileList: UploadUserFile[];
    autoUpload: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    listType: "text" | "picture" | "picture-card";
    httpRequest: import('element-plus').UploadRequestHandler;
    maxSize: string | number;
    uploadUrl: string;
}, import('vue').SlotsType<Partial<{
    default: () => import('vue').VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
