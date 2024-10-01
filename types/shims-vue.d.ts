/// <reference types="vite/client" />

/**
 * 解决 Element-Plus 国际化引用报错的问题
 * https://github.com/element-plus/element-plus/issues/13614
 */
declare module "element-plus/dist/locale/zh-cn.mjs" {
	const zhLocale: any;
	export default zhLocale;
}
declare module "element-plus/dist/locale/zh-tw.mjs" {
	const zhLocale: any;
	export default zhLocale;
}
declare module "element-plus/dist/locale/en.mjs" {
	const enLocale: any;
	export default enLocale;
}

export {};
