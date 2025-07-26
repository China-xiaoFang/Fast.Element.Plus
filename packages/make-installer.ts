import FastElementPlusComponents from "./component";
import FastElementPlusDirectives from "./directive";
import { installElementPlus } from "./element-plus";
import { version } from "./version";
import type { App } from "vue";

export const INSTALLED_KEY = Symbol("INSTALLED_KEY");

export const makeInstaller = (): {
	version: string;
	install: (app: App) => void;
} => {
	const install = (app: App): void => {
		if (app[INSTALLED_KEY]) return;

		app[INSTALLED_KEY] = true;

		installElementPlus(app);

		FastElementPlusComponents.forEach((c) => app.use(c));

		FastElementPlusDirectives.forEach((d) => app.use(d));
	};

	return {
		version,
		install,
	};
};
