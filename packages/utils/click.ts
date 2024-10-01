let _debounceTimeout: any = null,
	_throttleRunning: any = false;

export const clickUtil = {
	/**
	 * 防抖
	 * @param {Function} 执行函数
	 * @param {Number} delay 延时ms
	 */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	debounce(fn: Function, delay = 500): void {
		clearTimeout(_debounceTimeout);
		_debounceTimeout = setTimeout(() => {
			fn();
		}, delay);
	},
	/**
	 * 节流
	 * @param {Function} 执行函数
	 * @param {Number} delay 延时ms
	 */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	throttle(fn: Function, delay = 500): void {
		if (_throttleRunning) {
			return;
		}
		_throttleRunning = true;
		fn();
		setTimeout(() => {
			_throttleRunning = false;
		}, delay);
	},
};
