/**
 * 打印 Log 日志
 * @param name 来源名称
 */
export const consoleLog = (name: string, message?: any, ...optionalParams: any[]): void => {
	// eslint-disable-next-line no-console
	console.log(`[Fast-Log-${name}]`, message, optionalParams);
};

/**
 * 打印 Warn 日志
 * @param name 来源名称
 */
export const consoleWarn = (name: string, message?: any, ...optionalParams: any[]): void => {
	// eslint-disable-next-line no-console
	console.warn(`[Fast-Warn-${name}]`, message, optionalParams);
};

/**
 * 打印 Error 日志
 * @param name 来源名称
 */
export const consoleError = (name: string, message?: any, ...optionalParams: any[]): void => {
	// eslint-disable-next-line no-console
	console.error(`[Fast-Error-${name}]`, message, optionalParams);
};

/**
 * 打印 Debug 日志
 * @param name 来源名称
 */
export const consoleDebug = (name: string, message?: any, ...optionalParams: any[]): void => {
	// eslint-disable-next-line no-console
	console.debug(`[Fast-Debug-${name}]`, message, optionalParams);
};
