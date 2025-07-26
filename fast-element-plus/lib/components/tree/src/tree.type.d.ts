/** @description 树形数据 */
export type ElTreeOutput<T = any> = T extends string | number | boolean | object ? {
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
    children?: Array<ElTreeOutput<T>>;
    /**
     * 是否显示数量
     */
    showNum?: boolean;
    /**
     * 数量
     */
    quantity?: number;
    [key: string]: any;
} : never;
