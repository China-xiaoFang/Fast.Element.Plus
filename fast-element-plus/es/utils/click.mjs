let _debounceTimeout = null, _throttleRunning = false;
const clickUtil = {
  /**
   * 防抖
   * @param {Function} 执行函数
   * @param {Number} delay 延时ms
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  debounce(fn, delay = 500) {
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
  throttle(fn, delay = 500) {
    if (_throttleRunning) {
      return;
    }
    _throttleRunning = true;
    fn();
    setTimeout(() => {
      _throttleRunning = false;
    }, delay);
  }
};
export {
  clickUtil
};
//# sourceMappingURL=click.mjs.map
