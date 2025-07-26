import { makeInstaller } from "./make-installer";

export { INSTALLED_KEY } from "./make-installer";
export * as FastElementPlus from "@fast-element-plus/components";

export * from "@fast-element-plus/components";
export * from "@fast-element-plus/constants";
export * from "@fast-element-plus/directives";
export * from "@fast-element-plus/hooks";

export { Decimal } from "decimal.js";

const installer = makeInstaller();

export const install = installer.install;
export const version = installer.version;
export default installer;
