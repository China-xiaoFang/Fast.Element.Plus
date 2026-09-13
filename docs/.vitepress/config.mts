import vueJsx from "unplugin-vue-jsx/vite";
import { defineConfig } from "vitepress";

const vueJsxPlugin = vueJsx();
// Fast 组件源码使用 Vue TSX，必须在 Vite 内置的 JSX 转换前处理。
vueJsxPlugin.enforce = "pre";

export default defineConfig({
	lang: "zh-CN",
	title: "Fast 前端文档",
	description: "Fast 系列前端组件、工具、配置与构建插件文档",
	cleanUrls: true,
	lastUpdated: true,
	markdown: {
		config(markdown) {
			const renderInlineCode = markdown.renderer.rules.code_inline;
			markdown.renderer.rules.code_inline = (tokens, index, options, environment, self) => {
				const rendered = renderInlineCode?.(tokens, index, options, environment, self) ?? self.renderToken(tokens, index, options);
				return rendered.replace("<code>", "<code v-pre>");
			};
		},
	},
	head: [["meta", { name: "theme-color", content: "#409eff" }]],
	transformHead: ({ siteData }) => [["link", { rel: "icon", type: "image/png", href: `${siteData.base}Fast.png` }]],
	themeConfig: {
		siteTitle: "Fast 前端文档",
		logo: { src: "/Fast.png", alt: "Fast 前端文档" },
		nav: [
			{
				text: "Fast.Element.Plus",
				items: [
					{ text: "项目首页", link: "/" },
					{ text: "安装与使用", link: "/guide/installation" },
					{ text: "组件", link: "/components/overview" },
					{ text: "公开 API", link: "/API.zh-CN" },
					{ text: "方法 API", link: "/METHODS.zh-CN" },
					{ text: "组件实例方法", link: "/COMPONENT_METHODS.zh-CN" },
					{ text: "文档覆盖清单", link: "/DOCUMENTATION_COVERAGE.zh-CN" },
					{ text: "更新日志", link: "https://gitee.com/FastDotnet/fast.element.plus/blob/master/CHANGELOG.md" },
					{ text: "Element Plus 兼容性", link: "/ELEMENT_PLUS_COMPATIBILITY.zh-CN" },
				],
			},
			{
				text: "切换项目",
				items: [
					{ text: "Fast.ESLint.Config", link: "/eslint-config/" },
					{ text: "Fast.ESLint.Config.Legacy", link: "/eslint-config-legacy/" },
					{ text: "Fast.Vite.Plugins", link: "/vite-plugins/" },
					{ text: "Fast.Utils", link: "/utils/" },
					{ text: "Fast.Axios", link: "/axios/" },
					{ text: "Fast.Element.Plus.Icons", link: "/element-plus-icons/" },
				],
			},
			{ text: "FastDotnet", link: "https://gitee.com/FastDotnet" },
		],
		sidebar: {
			"/guide/": [
				{
					text: "开发指南",
					items: [
						{ text: "安装与使用", link: "/guide/installation" },
						{ text: "Element Plus 增强", link: "/guide/element-plus-enhancements" },
						{ text: "设计约定", link: "/guide/conventions" },
						{ text: "发布文档站", link: "/guide/deployment" },
					],
				},
			],
			"/components/": [
				{
					text: "组件",
					items: [
						{ text: "组件总览", link: "/components/overview" },
						{ text: "组件实例方法 API", link: "/COMPONENT_METHODS.zh-CN" },
					],
				},
				{
					text: "基础组件",
					items: [
						{ text: "FaAvatar 头像", link: "/components/avatar" },
						{ text: "FaButton 按钮", link: "/components/button" },
						{ text: "FaIcon 图标", link: "/components/icon" },
						{ text: "FaIconSelector 图标选择器", link: "/components/icon-selector" },
						{ text: "FaImage 图片", link: "/components/image" },
					],
				},
				{
					text: "表单组件",
					items: [
						{ text: "FaForm 表单", link: "/components/form" },
						{ text: "FaCarNumber 车牌输入", link: "/components/car-number" },
					],
				},
				{
					text: "选择组件",
					items: [
						{ text: "FaSelect 选择器", link: "/components/select" },
						{ text: "FaSelectPage 分页选择器", link: "/components/select-page" },
						{ text: "FaSelectV2 虚拟选择器", link: "/components/select-v2" },
						{ text: "FaTreeSelect 树形选择器", link: "/components/tree-select" },
						{ text: "FaInputDialogPage 弹窗分页选择器", link: "/components/input-dialog-page" },
					],
				},
				{
					text: "数据组件",
					items: [
						{ text: "FaTable 表格", link: "/components/table" },
						{ text: "FaTree 树", link: "/components/tree" },
					],
				},
				{
					text: "反馈组件",
					items: [
						{ text: "FaDialog 对话框", link: "/components/dialog" },
						{ text: "FaDrawer 抽屉", link: "/components/drawer" },
						{ text: "FaContextMenu 右键菜单", link: "/components/context-menu" },
					],
				},
				{
					text: "布局组件",
					items: [{ text: "FaLayoutGrid 响应式布局", link: "/components/layout-grid" }],
				},
				{
					text: "上传组件",
					items: [
						{ text: "FaUpload 文件上传", link: "/components/upload" },
						{ text: "FaUploadImage 单图上传", link: "/components/upload-image" },
						{ text: "FaUploadImages 多图上传", link: "/components/upload-images" },
					],
				},
			],
			"/eslint-config/": [
				{
					text: "Fast.ESLint.Config",
					items: [
						{ text: "项目首页", link: "/eslint-config/" },
						{ text: "使用指南", link: "/eslint-config/guide" },
						{ text: "公开 API", link: "/eslint-config/api" },
						{ text: "方法 API", link: "/eslint-config/methods" },
						{ text: "规则风险", link: "/eslint-config/rules-risk" },
						{ text: "工程审查", link: "/eslint-config/engineering-audit" },
					],
				},
				{
					text: "完整规则",
					items: [
						{ text: "规则总览", link: "/eslint-config/rules/" },
						{ text: "Core", link: "/eslint-config/rules/core" },
						{ text: "TypeScript", link: "/eslint-config/rules/typescript" },
						{ text: "Vue", link: "/eslint-config/rules/vue" },
						{ text: "React", link: "/eslint-config/rules/react" },
						{ text: "Angular", link: "/eslint-config/rules/angular" },
						{ text: "JSON", link: "/eslint-config/rules/json" },
						{ text: "Markdown", link: "/eslint-config/rules/markdown" },
					],
				},
			],
			"/eslint-config-legacy/": [
				{
					text: "Fast.ESLint.Config.Legacy",
					items: [
						{ text: "项目首页", link: "/eslint-config-legacy/" },
						{ text: "使用指南", link: "/eslint-config-legacy/guide" },
						{ text: "公开 API", link: "/eslint-config-legacy/api" },
						{ text: "方法 API", link: "/eslint-config-legacy/methods" },
						{ text: "依赖兼容性", link: "/eslint-config-legacy/dependency-compatibility" },
						{ text: "规则风险", link: "/eslint-config-legacy/rules-risk" },
						{ text: "工程审查", link: "/eslint-config-legacy/engineering-audit" },
					],
				},
			],
			"/vite-plugins/": [
				{
					text: "Fast.Vite.Plugins",
					items: [
						{ text: "项目首页", link: "/vite-plugins/" },
						{ text: "使用指南", link: "/vite-plugins/guide" },
						{ text: "公开 API", link: "/vite-plugins/api" },
						{ text: "方法 API", link: "/vite-plugins/methods" },
						{ text: "风险指南", link: "/vite-plugins/risks" },
						{ text: "开发与部署", link: "/vite-plugins/development-release" },
						{ text: "工程审查", link: "/vite-plugins/engineering-review" },
					],
				},
			],
			"/utils/": [
				{
					text: "Fast.Utils",
					items: [
						{ text: "项目首页", link: "/utils/" },
						{ text: "使用指南", link: "/utils/guide" },
						{ text: "公开 API", link: "/utils/api" },
						{ text: "完整导出清单", link: "/utils/exports" },
						{ text: "对象方法 API", link: "/utils/object-methods" },
						{ text: "运行时契约", link: "/utils/runtime-contract" },
						{ text: "开发与发布", link: "/utils/development-release" },
					],
				},
				{
					text: "函数方法 API",
					items: [
						{ text: "Array", link: "/utils/methods/array" },
						{ text: "Async", link: "/utils/methods/async" },
						{ text: "Base64", link: "/utils/methods/base64" },
						{ text: "Color", link: "/utils/methods/color" },
						{ text: "Crypto", link: "/utils/methods/crypto" },
						{ text: "Date", link: "/utils/methods/date" },
						{ text: "DOM", link: "/utils/methods/dom" },
						{ text: "Environment", link: "/utils/methods/env" },
						{ text: "Function", link: "/utils/methods/function" },
						{ text: "Identity", link: "/utils/methods/identity" },
						{ text: "Logger", link: "/utils/methods/logger" },
						{ text: "Number", link: "/utils/methods/number" },
						{ text: "Object", link: "/utils/methods/object" },
						{ text: "Storage", link: "/utils/methods/storage" },
						{ text: "String", link: "/utils/methods/string" },
						{ text: "Vue", link: "/utils/methods/vue" },
					],
				},
			],
			"/axios/": [
				{
					text: "Fast.Axios",
					items: [
						{ text: "项目首页", link: "/axios/" },
						{ text: "使用指南", link: "/axios/guide" },
						{ text: "公开 API", link: "/axios/api" },
						{ text: "方法 API", link: "/axios/methods" },
						{ text: "uni-app Adapter", link: "/axios/uni-app-adapter" },
						{ text: "运行时契约", link: "/axios/runtime-contract" },
						{ text: "开发与发布", link: "/axios/development-release" },
					],
				},
			],
			"/element-plus-icons/": [
				{
					text: "Fast.Element.Plus.Icons",
					items: [
						{ text: "项目首页", link: "/element-plus-icons/" },
						{ text: "使用指南", link: "/element-plus-icons/guide" },
						{ text: "API 与图标清单", link: "/element-plus-icons/api" },
						{ text: "逐项示例", link: "/element-plus-icons/examples" },
						{ text: "运行时契约", link: "/element-plus-icons/runtime-contract" },
						{ text: "开发与发布", link: "/element-plus-icons/development-release" },
					],
				},
			],
		},
		outline: { level: [2, 3], label: "本页目录" },
		docFooter: { prev: "上一页", next: "下一页" },
		lastUpdated: { text: "最后更新" },
		search: { provider: "local" },
		footer: {
			message: "基于 Apache-2.0 许可发布",
			copyright: "Fast 前端项目",
		},
	},
	vite: {
		plugins: [vueJsxPlugin],
	},
});
