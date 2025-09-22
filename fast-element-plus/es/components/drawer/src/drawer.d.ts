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
    direction: {
        readonly type: import('vue').PropType<"ltr" | "rtl" | "ttb" | "btt">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "rtl";
    };
    resizable: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "30%";
    };
    withHeader: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalFade: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    headerAriaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
    appendTo: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "body";
    };
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: {
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
    lockScroll: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modal: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalPenetrable: BooleanConstructor;
    openDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    closeDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
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
        readonly type: import('vue').PropType<string | number>;
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
    transition: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    center: BooleanConstructor;
    alignCenter: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    closeIcon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    fullscreen: BooleanConstructor;
    showClose: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    title: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    ariaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
};
export declare const faDrawerEmits: {
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
    direction: {
        readonly type: import('vue').PropType<"ltr" | "rtl" | "ttb" | "btt">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "rtl";
    };
    resizable: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "30%";
    };
    withHeader: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalFade: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    headerAriaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
    appendTo: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "body";
    };
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: {
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
    lockScroll: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modal: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalPenetrable: BooleanConstructor;
    openDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    closeDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
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
        readonly type: import('vue').PropType<string | number>;
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
    transition: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    center: BooleanConstructor;
    alignCenter: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    closeIcon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    fullscreen: BooleanConstructor;
    showClose: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    title: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    ariaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
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
    direction: {
        readonly type: import('vue').PropType<"ltr" | "rtl" | "ttb" | "btt">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "rtl";
    };
    resizable: BooleanConstructor;
    size: {
        readonly type: import('vue').PropType<string | number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "30%";
    };
    withHeader: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalFade: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    headerAriaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
    appendTo: {
        readonly type: import('vue').PropType<string | HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "body";
    };
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: {
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
    lockScroll: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modal: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    modalPenetrable: BooleanConstructor;
    openDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
    closeDelay: {
        readonly type: import('vue').PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: 0;
    };
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
        readonly type: import('vue').PropType<string | number>;
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
    transition: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    center: BooleanConstructor;
    alignCenter: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    closeIcon: {
        readonly type: import('vue').PropType<unknown>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    overflow: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
    fullscreen: BooleanConstructor;
    showClose: {
        readonly type: import('vue').PropType<boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: true;
    };
    title: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    ariaLevel: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "2";
    };
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
    size: string | number;
    title: string;
    center: boolean;
    showClose: boolean;
    appendTo: string | HTMLElement;
    modelValue: boolean;
    transition: undefined;
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
    showBeforeClose: boolean;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    lockScroll: boolean;
    modal: boolean;
    modalPenetrable: boolean;
    openDelay: number;
    closeDelay: number;
    trapFocus: boolean;
    headerAriaLevel: string;
    ariaLevel: string;
    direction: "ltr" | "rtl" | "ttb" | "btt";
    resizable: boolean;
    withHeader: boolean;
    modalFade: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<FaDrawerSlots>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
