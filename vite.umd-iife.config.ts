import terser from "@rollup/plugin-terser";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { peerDependencies } from "./vite.build.config";
import type { ConfigEnv, UserConfig } from "vite";
// 打包优化插件

/** 配置项文档：https://cn.vitejs.dev/config */
const ViteConfig = (_: ConfigEnv): UserConfig => {
	return {
		build: {
			minify: false,
			// 生成 source maps 文件
			sourcemap: true,
			lib: {
				entry: "./packages/index.ts",
				name: "fast-element-plus",
				formats: ["umd", "iife"],
				fileName: (format) => `index.${format}.js`,
			},
			/** 打包清空目录 */
			emptyOutDir: true,
			/** 启用/禁用 CSS 代码拆分 */
			cssCodeSplit: true,
			/** 静态资源打包处理 */
			rollupOptions: {
				// 确保外部化处理那些你不想打包进库的依赖
				external: Object.keys(peerDependencies),
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
						entryFileNames: "[name].full.js",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].full.js",
						dir: "./fast-element-plus/dist",
						globals: peerDependencies,
					},
					{
						format: "umd",
						// 名称
						name: "FastElementPlus",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].full.min.js",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].full.min.js",
						dir: "./fast-element-plus/dist",
						globals: peerDependencies,
						plugins: [terser()],
					},
					{
						format: "iife",
						// 名称
						name: "FastElementPlus",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].full.mjs",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].full.mjs",
						dir: "./fast-element-plus/dist",
						globals: peerDependencies,
					},
					{
						format: "iife",
						// 名称
						name: "FastElementPlus",
						// 解决同时使用默认导出和命名导出的警告
						exports: "named",
						// 保持文件名称不变
						entryFileNames: "[name].full.min.mjs",
						assetFileNames: "[name].[ext]",
						chunkFileNames: "[name].full.min.mjs",
						dir: "./fast-element-plus/dist",
						globals: peerDependencies,
						plugins: [terser()],
					},
				],
			},
		},
		/** Vite 插件 */
		plugins: [
			vue(),
			// vue 可以使用 jsx/tsx 语法
			vueJsx(),
		],
	};
};

export default ViteConfig;
