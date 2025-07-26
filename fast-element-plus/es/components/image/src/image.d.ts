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
    src: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    fit: {
        readonly type: import('vue').PropType<"" | "fill" | "cover" | "contain" | "none" | "scale-down">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    loading: {
        readonly type: import('vue').PropType<"lazy" | "eager">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: {
        readonly type: import('vue').PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    infinite: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    closeOnPressEscape: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    zoomRate: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 1.2;
    };
    minScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0.2;
    };
    maxScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 7;
    };
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
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
    src: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    fit: {
        readonly type: import('vue').PropType<"" | "fill" | "cover" | "contain" | "none" | "scale-down">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    loading: {
        readonly type: import('vue').PropType<"lazy" | "eager">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: {
        readonly type: import('vue').PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    infinite: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    closeOnPressEscape: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    zoomRate: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 1.2;
    };
    minScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0.2;
    };
    maxScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 7;
    };
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
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
    src: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    fit: {
        readonly type: import('vue').PropType<"" | "fill" | "cover" | "contain" | "none" | "scale-down">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    loading: {
        readonly type: import('vue').PropType<"lazy" | "eager">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    scrollContainer: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: {
        readonly type: import('vue').PropType<string[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: () => [];
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    infinite: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    closeOnPressEscape: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    zoomRate: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 1.2;
    };
    minScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0.2;
    };
    maxScale: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 7;
    };
    showProgress: BooleanConstructor;
    crossorigin: {
        readonly type: import('vue').PropType<"" | "anonymous" | "use-credentials">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
}>> & Readonly<{}>, {
    small: boolean;
    original: boolean;
    normal: boolean;
    thumb: boolean;
    src: string;
    fit: "" | "fill" | "cover" | "contain" | "none" | "scale-down";
    closeOnPressEscape: boolean;
    hideOnClickModal: boolean;
    previewTeleported: boolean;
    lazy: boolean;
    preview: boolean;
    previewSrcList: string[];
    initialIndex: number;
    infinite: boolean;
    zoomRate: number;
    minScale: number;
    maxScale: number;
    showProgress: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaImageSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
