/**
 * 执行异步方法
 * @param fn 要执行的异步方法
 * @param args 参数
 */
declare const execAsyncFunction: <T = void>(fn: Function, ...args: any[]) => Promise<T>;
export { execAsyncFunction };
