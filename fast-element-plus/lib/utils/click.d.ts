export declare const clickUtil: {
    /**
     * 防抖
     * @param {Function} 执行函数
     * @param {Number} delay 延时ms
     */
    debounce(fn: Function, delay?: number): void;
    /**
     * 节流
     * @param {Function} 执行函数
     * @param {Number} delay 延时ms
     */
    throttle(fn: Function, delay?: number): void;
};
