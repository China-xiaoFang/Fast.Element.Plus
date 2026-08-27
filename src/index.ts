import { makeInstaller } from "./make-installer";

/** 用于标记已经安装 Fast.Element.Plus 的 Vue 应用。 */
export { INSTALLED_KEY } from "./make-installer";
/** Fast.Element.Plus 的全部公开组件。 */
export * as FastElementPlus from "./components";

export * from "./components";
export * from "./constants";
export * from "./directives";
export * from "./hooks";

/** Decimal.js 的任意精度十进制实现。 */
export { Decimal } from "decimal.js";

const installer = makeInstaller();

/** 将全部组件、指令、Element Plus 及两套图标安装到 Vue 应用。 */
export const install = installer.install;
/** 当前 Fast.Element.Plus 包版本。 */
export const version = installer.version;
/** 支持 `app.use(FastElementPlus)` 的默认插件。 */
export default installer;
