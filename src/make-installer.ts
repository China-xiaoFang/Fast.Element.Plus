import * as FastElementPlusIconsVue from "@fast-element-plus/icons-vue";
import FastElementPlusComponents from "./component";
import FastElementPlusDirectives from "./directive";
import { installElementPlus } from "./element-plus";
import { version } from "./version";
import type { App } from "vue";

/** Vue 应用上的安装状态键，避免同一应用重复注册组件和指令。 */
export const INSTALLED_KEY = Symbol("FAST_ELEMENT_PLUS_INSTALLED_KEY");

interface InstallableApp extends App {
	[INSTALLED_KEY]?: boolean;
}

/** 创建包含版本信息和幂等安装逻辑的 Fast.Element.Plus 插件。 */
export const makeInstaller = (): {
	version: string;
	install: (app: App) => void;
} => {
	const install = (app: App): void => {
		if ((app as InstallableApp)[INSTALLED_KEY]) return;

		(app as InstallableApp)[INSTALLED_KEY] = true;

		installElementPlus(app);

		/** 注册 Fast.Element.Plus 全部图标，供 FaIcon 按名称解析。 */
		for (const [key, component] of Object.entries(FastElementPlusIconsVue)) app.component(`fa-icon-${key}`, component);

		FastElementPlusComponents.forEach((c) => app.use(c));

		FastElementPlusDirectives.forEach((d) => app.use(d));
	};

	return {
		version,
		install,
	};
};
