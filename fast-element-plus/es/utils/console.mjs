const consoleLog = (name, message, ...optionalParams) => {
  console.log(`[Fast-Log-${name}]`, message, optionalParams);
};
const consoleWarn = (name, message, ...optionalParams) => {
  console.warn(`[Fast-Warn-${name}]`, message, optionalParams);
};
const consoleError = (name, message, ...optionalParams) => {
  console.error(`[Fast-Error-${name}]`, message, optionalParams);
};
const consoleDebug = (name, message, ...optionalParams) => {
  console.debug(`[Fast-Debug-${name}]`, message, optionalParams);
};
export {
  consoleDebug,
  consoleError,
  consoleLog,
  consoleWarn
};
//# sourceMappingURL=console.mjs.map
