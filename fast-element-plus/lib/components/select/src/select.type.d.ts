/** @description 选择器数据 */
export type ElSelectorOutput<T = any> = T extends string | number | boolean | object ? {
    /**
     * 显示
     */
    label?: string;
    /**
     * 值
     */
    value?: T;
    /**
     * 附加数据
     */
    data?: any;
    /**
     * 是否隐藏
     */
    hide?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 子节点
     */
    children?: Array<ElSelectorOutput<T>>;
    [key: string]: any;
} : never;
