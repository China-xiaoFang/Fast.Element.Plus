import type { App } from "vue";
import { FastApp, type FastAppOptions } from "@fast-element-plus/settings";
import { errorHandler, makeIdentity } from "@fast-element-plus/utils";
import { installElementPlus } from "./element-plus";
import { installFastElementPlus } from "./fast-element-plus";
import { fastElementPlusVersion } from "./version";

export const INSTALLED_KEY = Symbol("INSTALLED_KEY");

export const makeInstaller = (): {
	version: string;
	install: (app: App, options?: FastAppOptions) => void;
} => {
	const install = (app: App, options?: FastAppOptions): void => {
		if (app[INSTALLED_KEY]) return;

		app[INSTALLED_KEY] = true;

		// 全局异常捕获
		app.config.errorHandler = errorHandler;

		makeIdentity();

		if (options) {
			FastApp.setAppOptions(options);
		}

		installElementPlus(app);
		installFastElementPlus(app);
	};

	return {
		version: fastElementPlusVersion,
		install,
	};
};
