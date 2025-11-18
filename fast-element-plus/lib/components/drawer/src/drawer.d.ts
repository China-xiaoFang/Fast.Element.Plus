export declare const faDrawerProps: {
    /** @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` */
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description enable dragging feature for Dialog */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description destroy elements in Dialog when closed */
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示刷新按钮 */
    showRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示全屏图标 */
    showFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示关闭按钮 */
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示确认按钮 */
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 禁用确认按钮 */
    disabledConfirmButton: BooleanConstructor;
    /** @description 关闭按钮文字，默认取消 */
    closeButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 确认按钮文字，默认确认 */
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 隐藏底部操作 */
    hideFooter: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    direction: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    resizable: BooleanConstructor;
    size: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    appendTo: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalPenetrable: BooleanConstructor;
    openDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    alignCenter: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};
export declare const faDrawerEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: boolean) => boolean;
    /** @description 确认按钮点击事件 */
    confirmClick: () => boolean;
    'resize-start': (evt: MouseEvent, size: number) => boolean;
    resize: (evt: MouseEvent, size: number) => boolean;
    'resize-end': (evt: MouseEvent, size: number) => boolean;
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};
type FaDrawerSlots = {
    /** @description 默认内容插槽 */
    default: {
        loading: boolean;
    };
    /** @description 头部插槽 */
    header: {
        loading: boolean;
        close: () => void;
    };
    /** @description 底部插槽 */
    footer: {
        loading: boolean;
        close: () => void;
    };
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` */
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description enable dragging feature for Dialog */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description destroy elements in Dialog when closed */
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示刷新按钮 */
    showRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示全屏图标 */
    showFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示关闭按钮 */
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示确认按钮 */
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 禁用确认按钮 */
    disabledConfirmButton: BooleanConstructor;
    /** @description 关闭按钮文字，默认取消 */
    closeButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 确认按钮文字，默认确认 */
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 隐藏底部操作 */
    hideFooter: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    direction: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    resizable: BooleanConstructor;
    size: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    appendTo: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalPenetrable: BooleanConstructor;
    openDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    alignCenter: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>, {
    /** @description 用于关闭 Drawer, 该方法会调用传入的 before-close 方法 */
    handleClose: import('vue').ComputedRef<() => void>;
    /** @description 进入动画后的回调 */
    afterEnter: import('vue').ComputedRef<() => void>;
    /** @description 离开动画后的回调 */
    afterLeave: import('vue').ComputedRef<() => void>;
    /** @description 加载状态 */
    loading: import('vue').ComputedRef<boolean>;
    /** @description 是否显示 */
    visible: import('vue').ComputedRef<boolean>;
    /** @description 打开弹窗 */
    open: (openFunction?: () => void | Promise<void>) => void;
    /** @description 关闭弹窗 */
    close: (closeFunction?: () => void | Promise<void>) => void;
    /** @description 刷新弹窗 */
    refresh: () => void;
    /** @description 弹窗加载 */
    doLoading: (loadingFunction: () => void | Promise<void>) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description v-model 回调 */
    "update:modelValue": (value: boolean) => boolean;
    /** @description 确认按钮点击事件 */
    confirmClick: () => boolean;
    'resize-start': (evt: MouseEvent, size: number) => boolean;
    resize: (evt: MouseEvent, size: number) => boolean;
    'resize-end': (evt: MouseEvent, size: number) => boolean;
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` */
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description enable dragging feature for Dialog */
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description destroy elements in Dialog when closed */
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示刷新按钮 */
    showRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示全屏图标 */
    showFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示关闭按钮 */
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 显示确认按钮 */
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 禁用确认按钮 */
    disabledConfirmButton: BooleanConstructor;
    /** @description 关闭按钮文字，默认取消 */
    closeButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 确认按钮文字，默认确认 */
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    /** @description 隐藏底部操作 */
    hideFooter: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    direction: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown, "rtl", boolean>;
    resizable: BooleanConstructor;
    size: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "30%", boolean>;
    withHeader: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalFade: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    appendTo: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modalPenetrable: BooleanConstructor;
    openDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils/index.mjs').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    alignCenter: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: boolean) => any;
    onResize?: (evt: MouseEvent, size: number) => any;
    onOpen?: () => any;
    onClose?: () => any;
    onConfirmClick?: () => any;
    onOpened?: () => any;
    onClosed?: () => any;
    onOpenAutoFocus?: () => any;
    onCloseAutoFocus?: () => any;
    "onResize-start"?: (evt: MouseEvent, size: number) => any;
    "onResize-end"?: (evt: MouseEvent, size: number) => any;
}>, {
    size: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    title: string;
    center: boolean;
    showClose: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    appendTo: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>;
    modelValue: boolean;
    transition: undefined;
    fullscreen: boolean;
    alignCenter: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    appendToBody: boolean;
    draggable: boolean;
    destroyOnClose: boolean;
    overflow: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    showRefresh: boolean;
    showFullscreen: boolean;
    showCloseButton: boolean;
    showConfirmButton: boolean;
    disabledConfirmButton: boolean;
    closeButtonText: string;
    confirmButtonText: string;
    hideFooter: boolean;
    showBeforeClose: boolean;
    closeOnClickModal: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    lockScroll: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modal: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modalPenetrable: boolean;
    openDelay: number;
    closeDelay: number;
    trapFocus: boolean;
    headerAriaLevel: string;
    ariaLevel: string;
    direction: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    resizable: boolean;
    withHeader: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modalFade: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaDrawerSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
