/**
 * 打印 Log 日志
 * @param name 来源名称
 */
declare const consoleLog: (name: string, message?: any, ...optionalParams: any[]) => void;
/**
 * 打印 Warn 日志
 * @param name 来源名称
 */
declare const consoleWarn: (name: string, message?: any, ...optionalParams: any[]) => void;
/**
 * 打印 Error 日志
 * @param name 来源名称
 */
declare const consoleError: (name: string, message?: any, ...optionalParams: any[]) => void;
/**
 * 打印 Debug 日志
 * @param name 来源名称
 */
declare const consoleDebug: (name: string, message?: any, ...optionalParams: any[]) => void;
export { consoleLog, consoleWarn, consoleError, consoleDebug };
