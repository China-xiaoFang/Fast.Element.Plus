import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { ConfigEnv, UserConfig } from "vite";
// 打包优化插件
import vitePluginDts from "vite-plugin-dts";
import { globalDependenciesMapping } from "./vite.build.config";

/** 配置项文档：https://cn.vitejs.dev/config */
const ViteConfig = (_: ConfigEnv): UserConfig => {
	return {
		build: {
			/** 消除打包大小超过 500kb 警告，不建议使用 */
			chunkSizeWarningLimit: 2000,
			/** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
			minify: "terser",
			/** 在打包代码时移除 console.log、debugger 和 注释 */
			terserOptions: {
				compress: {
					drop_console: false,
					drop_debugger: true,
					pure_funcs: ["console.log"],
				},
				format: {
					/** 删除注释 */
					comments: false,
				},
			},
			// 生成 source maps 文件
			sourcemap: true,
			lib: {
				entry: "./packages/index.ts",
				name: "fast-element-plus",
				formats: ["umd", "iife", "cjs", "es"],
				fileName: (format) => `index.${format}.js`,
			},
			/** 打包清空目录 */
			emptyOutDir: true,
			/** 启用/禁用 CSS 代码拆分 */
			cssCodeSplit: true,
			/** 静态资源打包处理 */
			rollupOptions: {
				// 确保外部化处理那些你不想打包进库的依赖
				external: Object.keys(globalDependenciesMapping),
				// 禁用 Tree-shaking
				treeshake: false,
				output: [
					{
						format: "umd",
						// 名称
						name: "FastElementPlus",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].umd.js",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].umd.js",
						dir: "./fast-element-plus/dist",
						globals: globalDependenciesMapping,
					},
					{
						format: "iife",
						// 名称
						name: "FastElementPlus",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].iife.js",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].iife.mjs",
						dir: "./fast-element-plus/dist",
						globals: globalDependenciesMapping,
					},
					{
						format: "cjs",
						// 保持模块结构
						preserveModules: true,
						// 将packages文件夹作为根目录
						preserveModulesRoot: "packages",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].js",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].js",
						dir: "./fast-element-plus/lib",
						globals: globalDependenciesMapping,
					},
					{
						format: "es",
						// 保持模块结构
						preserveModules: true,
						// 将packages文件夹作为根目录
						preserveModulesRoot: "packages",
						// 保持文件名称不变
						entryFileNames: "[name].mjs",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].mjs",
						dir: "./fast-element-plus/es",
						globals: globalDependenciesMapping,
					},
				],
			},
		},
		/** Vite 插件 */
		plugins: [
			vue(),
			// vue 可以使用 jsx/tsx 语法
			vueJsx(),
			// 生成ts声明文件
			vitePluginDts({
				compilerOptions: {
					// 保留注释
					removeComments: false,
					declarationMap: false,
				},
				entryRoot: "./packages",
				outDir: ["./fast-element-plus/es", "./fast-element-plus/lib"],
				insertTypesEntry: true,
				include: ["./packages/**/*", "./global.d.ts"],
			}),
		],
	};
};

export default ViteConfig;
