/**
 * 执行异步方法
 * @param fn 要执行的异步方法
 * @param args 参数
 */

import { consoleError } from "@fast-element-plus/utils";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const execAsyncFunction = <T = void>(fn: Function, ...args: any[]): Promise<T> => {
	if (!fn) return Promise.resolve(undefined);
	if (fn.constructor.name !== "AsyncFunction") {
		consoleError("execAsyncFunction", "必须为 Promise 异步方法");
		throw new Error("必须为 Promise 异步方法");
	}
	return fn(...args)
		.then((res) => res)
		.catch((error) => {
			consoleError("execAsyncFunction", error);
			return Promise.reject(error);
		});
};

export { execAsyncFunction };
