import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import DefaultTheme from "vitepress/theme";
import FastElementPlus from "../../../src";
import ComponentApi from "./components/ComponentApi.vue";
import DemoBlock from "./components/DemoBlock.vue";
import type { Theme } from "vitepress";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "../../../styles/index.scss";
import "./styles.scss";

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
