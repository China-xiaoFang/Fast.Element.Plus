export declare const faImageProps: {
    /** @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode. */
    hideOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`. */
    previewTeleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to use lazy load. */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    /** @description 是否可以预览图片 */
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    scale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
type FaImageSlots = {
    /** @description 当图像尚未加载时，自定义的占位符内容 */
    placeholder: never;
    /** @description 自定义图像加载失败的内容 */
    error: never;
    /** @description 当图像预览时自定义内容 */
    viewer: {
        src: string;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode. */
    hideOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`. */
    previewTeleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to use lazy load. */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    /** @description 是否可以预览图片 */
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    scale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode. */
    hideOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`. */
    previewTeleported: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description whether to use lazy load. */
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description Base64图片 */
    base64: BooleanConstructor;
    /** @description 原图 */
    original: BooleanConstructor;
    /** @description 标准 */
    normal: BooleanConstructor;
    /** @description 小图 */
    small: BooleanConstructor;
    /** @description 缩略图 */
    thumb: BooleanConstructor;
    /** @description 是否可以预览图片 */
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "fill" | "contain" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    scale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    minScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    small: boolean;
    base64: boolean;
    original: boolean;
    normal: boolean;
    thumb: boolean;
    src: string;
    fit: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "fill" | "cover" | "contain" | "none" | "scale-down", unknown>;
    lazy: boolean;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideOnClickModal: boolean;
    previewTeleported: boolean;
    preview: boolean;
    previewSrcList: string[];
    initialIndex: number;
    infinite: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    zoomRate: number;
    scale: number;
    minScale: number;
    maxScale: number;
    showProgress: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaImageSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
