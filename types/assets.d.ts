/** 将构建期 PNG 资源解析为可直接赋给 img src 的字符串。 */
declare module "*.png" {
	const source: string;
	export default source;
}
