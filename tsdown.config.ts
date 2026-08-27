import { readFileSync } from "node:fs";
import { defineConfig } from "tsdown";
import VueJsx from "unplugin-vue-jsx/rolldown";

// 表格空状态图片必须内联，避免未导出的资源路径在 npm 或 CDN 场景失效。
const inlinePngPlugin = {
	name: "fast-element-plus/inline-png",
	load(id: string) {
		if (!id.endsWith(".png")) return null;
		const source = readFileSync(id).toString("base64");
		return `export default "data:image/png;base64,${source}";`;
	},
};

// 框架与两套图标均由使用方强制安装，构建时保持为外部模块。
const peerDependencies = [/^@element-plus\/icons-vue(?:\/|$)/u, /^@fast-element-plus\/icons-vue(?:\/|$)/u, /^element-plus(?:\/|$)/u, /^vue(?:\/|$)/u];

const bundledDependencies = [
	/^@vueuse\//u,
	/^decimal\.js(?:\/|$)/u,
	/^lodash(?:-es|-unified)?(?:\/|$)/u,
	/^screenfull(?:\/|$)/u,
	/^sortablejs(?:\/|$)/u,
];

export default defineConfig([
	{
		// 两个入口与 package.json exports 一一对应，分别提供公共 API 和 Vue 全局类型。
		entry: {
			global: "src/global.ts",
			index: "src/index.ts",
		},
		// 将全部发布文件写入仓库根目录的唯一 dist 目录。
		outDir: "dist",
		// 以 src 为构建根，保持组件、指令、Hook 与常量的内部模块结构。
		root: "src",
		// 仅输出未压缩 ESM，与 package.json 的 module 类型和 exports.import 保持一致。
		format: "esm",
		// 组件库面向浏览器和 WebView，不注入 Node.js 或浏览器垫片。
		platform: "neutral",
		// Neutral 平台显式读取 ESM 与 CommonJS 入口，兼容未声明 exports 的浏览器依赖。
		inputOptions: {
			resolve: { mainFields: ["module", "main"] },
		},
		// 以声明的最低应用运行时语法 ES2022 为转换目标。
		target: "es2022",
		// 固定生成 .mjs，与 package.json exports 的 JavaScript 公开路径保持一致。
		fixedExtension: true,
		// 保留源码模块结构，使根入口直接复用各组件、指令、Hook 与常量模块。
		unbundle: true,
		// Vue TSX 的完整组件声明由 typegen 直接调用 TypeScript 生成，避免声明打包丢失推断类型。
		dts: false,
		// 生成内嵌源码的 JavaScript Source Map，无需把 src 目录发布到 npm。
		sourcemap: true,
		// 每次构建前清空完整 dist，避免入口删除或重命名后残留陈旧产物。
		clean: true,
		// 移除未被公共入口引用的内部代码，减小发布产物体积。
		treeshake: true,
		// 将 Vue TSX 转换为 Vue 3 渲染函数。
		plugins: [inlinePngPlugin, VueJsx()],
		// 全部 Peer Dependency 保留为外部模块，声明构建也不复制第三方类型。
		deps: {
			alwaysBundle: bundledDependencies,
			neverBundle: peerDependencies,
			onlyBundle: bundledDependencies,
		},
		// 将构建警告视为失败，防止带有潜在问题的产物进入发布流程。
		failOnWarn: true,
	},
	{
		// CDN 只构建浏览器可用的根入口，生成单独的压缩 IIFE 文件。
		entry: { "index.global.min": "src/index.ts" },
		// CDN 文件与 ESM 文件共同进入根 dist 发布目录。
		outDir: "dist",
		// 输出可通过普通 script 标签加载的 IIFE。
		format: "iife",
		// 按浏览器运行时处理全局变量，不注入 Node.js 兼容代码。
		platform: "browser",
		// CDN 与 ESM 入口使用同一 ES2022 语法基线。
		target: "es2022",
		// CDN 文件名由 outputOptions 固定，不使用 .mjs 扩展名。
		fixedExtension: false,
		// 类型声明已由 ESM 配置生成，CDN 配置不重复输出。
		dts: false,
		// CDN 入口直接分发，因此单独生成压缩文件。
		minify: true,
		// script 加载后通过 globalThis.FastElementPlus 访问组件库公共 API。
		globalName: "FastElementPlus",
		// Peer 依赖由页面先行加载，并映射到各自公开的全局变量。
		outputOptions: {
			entryFileNames: "index.global.min.js",
			// 根入口同时提供默认导出和命名导出，IIFE 统一挂载为命名成员。
			exports: "named",
			globals: {
				"@element-plus/icons-vue": "ElementPlusIconsVue",
				"@fast-element-plus/icons-vue": "FastElementPlusIconsVue",
				"element-plus": "ElementPlus",
				vue: "Vue",
			},
		},
		// 生成带 sourcesContent 的 Source Map，便于定位 CDN 运行时问题。
		sourcemap: true,
		// dist 已由第一个配置清理，避免删除刚生成的 ESM 产物。
		clean: false,
		// 移除根入口未引用的代码，控制 CDN 文件大小。
		treeshake: true,
		// 将 Vue TSX 转换为 Vue 3 渲染函数。
		plugins: [inlinePngPlugin, VueJsx()],
		// CDN 保留全部 Peer Dependency，并内联其余组件库运行时依赖。
		deps: {
			alwaysBundle: bundledDependencies,
			neverBundle: peerDependencies,
			onlyBundle: bundledDependencies,
		},
		// CDN 构建警告同样视为失败。
		failOnWarn: true,
	},
]);
