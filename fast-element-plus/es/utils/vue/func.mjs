import "../index.mjs";
import { consoleError } from "../console.mjs";
const execAsyncFunction = (fn, ...args) => {
  if (!fn) return Promise.resolve(void 0);
  if (fn.constructor.name !== "AsyncFunction") {
    consoleError("execAsyncFunction", "必须为 Promise 异步方法");
    throw new Error("必须为 Promise 异步方法");
  }
  return fn(...args).then((res) => res).catch((error) => {
    consoleError("execAsyncFunction", error);
    return Promise.reject(error);
  });
};
export {
  execAsyncFunction
};
//# sourceMappingURL=func.mjs.map
