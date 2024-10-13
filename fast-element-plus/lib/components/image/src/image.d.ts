import { VNode } from 'vue';
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
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "contain" | "fill" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
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
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "contain" | "fill" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
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
    src: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "contain" | "fill" | "none" | "cover" | "scale-down", unknown, "", boolean>;
    loading: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
    crossorigin: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => ("" | "anonymous" | "use-credentials") & {}) | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    small: boolean;
    closeOnPressEscape: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    fit: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "fill" | "none" | "cover" | "contain" | "scale-down", unknown>;
    lazy: boolean;
    original: boolean;
    normal: boolean;
    thumb: boolean;
    src: string;
    hideOnClickModal: boolean;
    previewTeleported: boolean;
    preview: boolean;
    previewSrcList: string[];
    initialIndex: number;
    infinite: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    zoomRate: number;
    minScale: number;
    maxScale: number;
}, import('vue').SlotsType<Partial<{
    placeholder: () => VNode[];
    error: () => VNode[];
    viewer: (arg: {
        src: string;
    }) => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
