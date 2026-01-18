export declare const faDialogProps: {
    /** @description whether to align the dialog both horizontally and vertically*/
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description draggable Dialog can overflow the viewport */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description value for `margin-top` of Dialog CSS, default is 15vh */
    top: {
        type: StringConstructor;
        default: string;
    };
    /** @description width of Dialog, default is 50% */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
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
    /** @description 撑满高度 */
    fullHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
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
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
};
export declare const faDialogEmits: {
    /** @description v-model 回调 */
    "update:modelValue": (value: boolean) => boolean;
    /** @description 确认按钮点击事件 */
    confirmClick: () => boolean;
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
};
type FaDialogSlots = {
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
    /** @description whether to align the dialog both horizontally and vertically*/
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description draggable Dialog can overflow the viewport */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description value for `margin-top` of Dialog CSS, default is 15vh */
    top: {
        type: StringConstructor;
        default: string;
    };
    /** @description width of Dialog, default is 50% */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
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
    /** @description 撑满高度 */
    fullHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
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
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>, {
    /** @description 弹窗内容引用 */
    dialogContentRef: import('vue').ComputedRef<any>;
    /** @description 重置位置 */
    resetPosition: import('vue').ComputedRef<() => void>;
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
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    openAutoFocus: () => boolean;
    closeAutoFocus: () => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description whether to align the dialog both horizontally and vertically*/
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    /** @description draggable Dialog can overflow the viewport */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description value for `margin-top` of Dialog CSS, default is 15vh */
    top: {
        type: StringConstructor;
        default: string;
    };
    /** @description width of Dialog, default is 50% */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
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
    /** @description 撑满高度 */
    fullHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
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
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    headerClass: StringConstructor;
    bodyClass: StringConstructor;
    footerClass: StringConstructor;
    zIndex: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    trapFocus: BooleanConstructor;
    headerAriaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    transition: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition) | ((new (...args: any[]) => string | import('vue').TransitionProps) | (() => import('element-plus').DialogTransition))[], unknown, unknown, undefined, boolean>;
    center: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | ((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: boolean) => any;
    onOpen?: () => any;
    onClose?: () => any;
    onConfirmClick?: () => any;
    onOpened?: () => any;
    onClosed?: () => any;
    onOpenAutoFocus?: () => any;
    onCloseAutoFocus?: () => any;
}>, {
    title: string;
    center: boolean;
    showClose: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    top: string;
    appendTo: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>) | ((new (...args: any[]) => string | HTMLElement) | (() => import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement))[], unknown, unknown>))[], unknown, unknown>;
    modelValue: boolean;
    transition: undefined;
    width: string | number;
    fullscreen: boolean;
    alignCenter: boolean;
    appendToBody: boolean;
    draggable: boolean;
    destroyOnClose: boolean;
    overflow: boolean;
    showRefresh: boolean;
    showFullscreen: boolean;
    showCloseButton: boolean;
    showConfirmButton: boolean;
    disabledConfirmButton: boolean;
    closeButtonText: string;
    confirmButtonText: string;
    hideFooter: boolean;
    fullHeight: boolean;
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
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaDialogSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
