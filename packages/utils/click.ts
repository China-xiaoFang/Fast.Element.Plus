let _debounceTimeout: ReturnType<typeof setTimeout> | null = null;
let _throttleRunning = false;

export const clickUtil = {
	/**
	 * 防抖
	 * @param fn - 执行函数
	 * @param delay - 延时毫秒
	 * @returns 返回一个新的防抖函数
	 */
	debounce<T extends any[]>(fn: (...args: T) => void, delay = 500): (...args: T) => void {
		return (...args: T) => {
			// 如果已有定时器，清除它
			if (_debounceTimeout) {
				clearTimeout(_debounceTimeout);
			}
			// 设置新的定时器
			_debounceTimeout = setTimeout(() => {
				fn(...args); // 调用原函数
			}, delay);
		};
	},
	/**
	 * 节流
	 * @param fn - 执行函数
	 * @param delay - 延时毫秒
	 * @returns 返回一个新的节流函数
	 */
	throttle<T extends any[]>(fn: (...args: T) => void, delay = 500): (...args: T) => void {
		return (...args: T) => {
			// 如果节流操作正在运行，直接返回
			if (_throttleRunning) {
				return;
			}
			// 设置节流状态为运行
			_throttleRunning = true;
			fn(...args); // 调用原函数
			// 设置定时器以重置节流状态
			setTimeout(() => {
				_throttleRunning = false;
			}, delay);
		};
	},
};
