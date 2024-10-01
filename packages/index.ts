import { INSTALLED_KEY, makeInstaller } from "@fast-element-plus/build";

export * from "@fast-element-plus/components";
export * from "@fast-element-plus/constants";
export * from "@fast-element-plus/directives";
export * from "@fast-element-plus/hooks";
export * from "@fast-element-plus/settings";
export * from "@fast-element-plus/stores";
export * from "@fast-element-plus/utils";

export { INSTALLED_KEY };

const installer = makeInstaller();

export const install = installer.install;
export const version = installer.version;
export default installer;
