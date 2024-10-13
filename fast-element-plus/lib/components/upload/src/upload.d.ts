import { VNode } from 'vue';
import { UploadFile, UploadUserFile } from 'element-plus';
export declare const faUploadProps: {
    /** @description whether to activate drag and drop mode */
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
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
    withCredentials: BooleanConstructor;
    showFileList: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    accept: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    listType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
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
};
export declare const faUploadEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: string | string[]) => boolean;
    /** @description v-model:fileList 回调 */
    "update:fileList": (value: UploadUserFile[]) => boolean;
    /** @description 改变 */
    change: (value: string | string[]) => boolean;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description whether to activate drag and drop mode */
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
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
    withCredentials: BooleanConstructor;
    showFileList: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    accept: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    listType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
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
    /** @description cancel upload request */
    abort: (file: import('element-plus/es/components/upload/src/upload').UploadFile) => void;
    /** @description upload the file list manually */
    submit: () => void;
    /** @description clear the file list  */
    clearFiles: (states?: import('element-plus').UploadStatus[]) => void;
    /** @description select the file manually */
    handleStart: (rawFile: import('element-plus').UploadRawFile) => void;
    /** @description remove the file manually */
    handleRemove: (file: import('element-plus').UploadRawFile | import('element-plus/es/components/upload/src/upload').UploadFile, rawFile?: import('element-plus').UploadRawFile | undefined) => void;
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
    /** @description maximum number of uploads allowed */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /** @description v-model绑定值 */
    modelValue: import('vue').PropType<string | string[]>;
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
        readonly type: import('vue').PropType<(uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => import('element-plus/es/utils').Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
        (): (uploadFile: UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void) | {
        (): (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
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
    withCredentials: BooleanConstructor;
    showFileList: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    accept: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fileList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]) | ((new (...args: any[]) => UploadUserFile[]) | (() => UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    listType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "picture" | "text" | "picture-card", unknown, "text", boolean>;
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
}>> & Readonly<{
    onChange?: (value: string | string[]) => any;
    "onUpdate:modelValue"?: (value: string | string[]) => any;
    "onUpdate:fileList"?: (value: UploadUserFile[]) => any;
}>, {
    data: import('element-plus/es/utils').Mutable<{}>;
    method: string;
    name: string;
    withCredentials: boolean;
    disabled: boolean;
    onChange: (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onError: (error: Error, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    drag: boolean;
    beforeUpload: (rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils').Awaitable<void | undefined | null | boolean | File | Blob>;
    onRemove: (uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onPreview: (uploadFile: UploadFile) => void;
    onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onProgress: (evt: import('element-plus').UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import('element-plus').UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
    action: string;
    multiple: boolean;
    showFileList: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    accept: string;
    fileList: UploadUserFile[];
    autoUpload: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    listType: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
    httpRequest: import('element-plus').UploadRequestHandler;
    limit: number;
    maxSize: string | number;
    uploadUrl: string;
}, import('vue').SlotsType<Partial<{
    default: () => VNode[];
    trigger: () => VNode[];
    tip: () => VNode[];
    file: (arg: {
        file: UploadFile;
        index: number;
    }) => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
