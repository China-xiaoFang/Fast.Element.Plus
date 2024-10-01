import type { App } from "vue";
import FastElementPlusIconsVue from "@fast-element-plus/icons-vue";
import FastElementPlusComponents from "./component";
import FastElementPlusDirectives from "./directive";

const installFastElementPlus = (app: App): void => {
	/** 注册 Fast Icon 组件库 */
	app.use(FastElementPlusIconsVue);

	FastElementPlusComponents.forEach((c) => app.use(c));

	FastElementPlusDirectives.forEach((d) => app.use(d));
};

export { installFastElementPlus };
