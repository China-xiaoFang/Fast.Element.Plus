import { VNode } from 'vue';
export declare const faDialogProps: {
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
    /** @description 高度 */
    height: {
        type: (StringConstructor | NumberConstructor)[];
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
    fillHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    appendTo: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
    headerAriaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
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
    /** @description draggable Dialog can overflow the viewport */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 高度 */
    height: {
        type: (StringConstructor | NumberConstructor)[];
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
    fillHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    appendTo: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
    headerAriaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>, {
    /** @description 加载状态 */
    loading: boolean;
    /** @description 是否显示 */
    visible: boolean;
    /** @description 打开弹窗 */
    open: (openFunction?: () => void | Promise<void>) => void;
    /** @description 关闭弹窗 */
    close: (closeFunction?: () => void | Promise<void>) => void;
    /** @description 刷新弹窗 */
    refresh: () => void;
    /** @description 弹窗加载 */
    doLoading: (loadingFunction: () => void | Promise<void>) => void;
    dialogContentRef: any;
    resetPosition: () => void;
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
    /** @description draggable Dialog can overflow the viewport */
    overflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @description 高度 */
    height: {
        type: (StringConstructor | NumberConstructor)[];
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
    fillHeight: BooleanConstructor;
    /** @description 显示关闭回调 */
    showBeforeClose: BooleanConstructor;
    /** @description 打开之后 */
    afterOpen: {
        type: import('vue').PropType<() => void>;
    };
    appendTo: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, "body", boolean>;
    beforeClose: {
        readonly type: import('vue').PropType<import('element-plus').DialogBeforeCloseFn>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closeOnClickModal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    lockScroll: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    modal: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    openDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    closeDelay: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    top: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    modelValue: BooleanConstructor;
    modalClass: StringConstructor;
    width: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
    headerAriaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
    center: BooleanConstructor;
    alignCenter: BooleanConstructor;
    closeIcon: {
        readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fullscreen: BooleanConstructor;
    showClose: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    title: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    ariaLevel: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "2", boolean>;
}>> & Readonly<{
    onClosed?: () => any;
    onClose?: () => any;
    onOpen?: () => any;
    "onUpdate:modelValue"?: (value: boolean) => any;
    onConfirmClick?: () => any;
    onOpened?: () => any;
    onOpenAutoFocus?: () => any;
    onCloseAutoFocus?: () => any;
}>, {
    fullscreen: boolean;
    center: boolean;
    showClose: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    appendTo: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
    title: string;
    appendToBody: boolean;
    destroyOnClose: boolean;
    closeOnClickModal: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    lockScroll: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    modal: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    modelValue: boolean;
    trapFocus: boolean;
    headerAriaLevel: string;
    alignCenter: boolean;
    draggable: boolean;
    overflow: boolean;
    ariaLevel: string;
    showRefresh: boolean;
    showFullscreen: boolean;
    showCloseButton: boolean;
    showConfirmButton: boolean;
    disabledConfirmButton: boolean;
    closeButtonText: string;
    confirmButtonText: string;
    hideFooter: boolean;
    fillHeight: boolean;
    showBeforeClose: boolean;
}, import('vue').SlotsType<Partial<{
    default: (arg: {
        loading: boolean;
    }) => VNode[];
    header: (arg: {
        loading: boolean;
        close: () => void;
    }) => VNode[];
    footer: (arg: {
        loading: boolean;
        close: () => void;
    }) => VNode[];
}>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
