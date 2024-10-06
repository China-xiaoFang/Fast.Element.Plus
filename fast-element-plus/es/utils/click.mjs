let _debounceTimeout = null;
let _throttleRunning = false;
const clickUtil = {
  /**
   * 防抖
   * @param fn - 执行函数
   * @param delay - 延时毫秒
   * @returns 返回一个新的防抖函数
   */
  debounce(fn, delay = 500) {
    return (...args) => {
      if (_debounceTimeout) {
        clearTimeout(_debounceTimeout);
      }
      _debounceTimeout = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  },
  /**
   * 节流
   * @param fn - 执行函数
   * @param delay - 延时毫秒
   * @returns 返回一个新的节流函数
   */
  throttle(fn, delay = 500) {
    return (...args) => {
      if (_throttleRunning) {
        return;
      }
      _throttleRunning = true;
      fn(...args);
      setTimeout(() => {
        _throttleRunning = false;
      }, delay);
    };
  }
};
export {
  clickUtil
};
//# sourceMappingURL=click.mjs.map
