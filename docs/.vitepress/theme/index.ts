import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/theme-chalk/dark/css-vars.css";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import DefaultTheme from "vitepress/theme";
import FastElementPlus from "../../../src";
import "../../../styles/index.scss";
import ComponentApi from "./components/ComponentApi.vue";
import DemoBlock from "./components/DemoBlock.vue";
import "./styles.scss";
import type { Theme } from "vitepress";

dayjs.locale("zh-cn");

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus, { locale: zhCn });
		app.use(FastElementPlus);
		app.component("ComponentApi", ComponentApi);
		app.component("DemoBlock", DemoBlock);
	},
} satisfies Theme;
