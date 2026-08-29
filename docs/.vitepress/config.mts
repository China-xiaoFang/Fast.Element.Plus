import vueJsx from "unplugin-vue-jsx/vite";
import { defineConfig } from "vitepress";

const vueJsxPlugin = vueJsx();
// Fast 组件源码使用 Vue TSX，必须在 Vite 内置的 JSX 转换前处理。
vueJsxPlugin.enforce = "pre";

export default defineConfig({
	lang: "zh-CN",
	title: "Fast.Element.Plus",
	description: "基于 Element Plus 的 Fast 系列业务组件库",
	cleanUrls: true,
	lastUpdated: true,
	head: [["meta", { name: "theme-color", content: "#409eff" }]],
	transformHead: ({ siteData }) => [["link", { rel: "icon", type: "image/png", href: `${siteData.base}Fast.png` }]],
	themeConfig: {
		siteTitle: "Fast.Element.Plus",
		logo: { src: "/Fast.png", alt: "Fast.Element.Plus" },
		nav: [
			{ text: "指南", link: "/guide/installation" },
			{ text: "组件", link: "/components/overview" },
			{ text: "API", link: "/API.zh-CN" },
			{
				text: "2.0.2",
				items: [
					{ text: "更新日志", link: "https://gitee.com/FastDotnet/fast.element.plus/blob/master/CHANGELOG.md" },
					{ text: "Element Plus 兼容性", link: "/ELEMENT_PLUS_COMPATIBILITY.zh-CN" },
				],
			},
			{ text: "源码", link: "https://gitee.com/FastDotnet/fast.element.plus" },
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
					items: [{ text: "组件总览", link: "/components/overview" }],
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
		},
		outline: { level: [2, 3], label: "本页目录" },
		docFooter: { prev: "上一页", next: "下一页" },
		lastUpdated: { text: "最后更新" },
		search: { provider: "local" },
		footer: {
			message: "基于 Apache-2.0 许可发布",
			copyright: "Fast.Element.Plus",
		},
	},
	vite: {
		plugins: [vueJsxPlugin],
	},
});
