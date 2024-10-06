export declare const clickUtil: {
    /**
     * 防抖
     * @param fn - 执行函数
     * @param delay - 延时毫秒
     * @returns 返回一个新的防抖函数
     */
    debounce<T extends any[]>(fn: (...args: T) => void, delay?: number): (...args: T) => void;
    /**
     * 节流
     * @param fn - 执行函数
     * @param delay - 延时毫秒
     * @returns 返回一个新的节流函数
     */
    throttle<T extends any[]>(fn: (...args: T) => void, delay?: number): (...args: T) => void;
};
