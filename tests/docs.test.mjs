import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const documentationVersionLocation = "docs/index.md Frontmatter 的 docReviewVersion";
const semverPattern =
	/^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/u;

const createVersionError = (packageVersion, documentationVersion, reason) =>
	new Error(
		[
			`文档版本校验失败：${reason}`,
			`组件库版本：${packageVersion}`,
			`文档已核对版本：${documentationVersion}`,
			`版本记录位置：${documentationVersionLocation}`,
			"请先检查该版本涉及的组件、公开 API、默认值、类型、行为、Props、Events、Slots、Exposes、v-model 与示例，同步文档后再更新文档已核对版本。",
		].join("\n")
	);

const validateDocumentationVersion = (packageVersion, indexSource) => {
	const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(indexSource)?.[1];
	const versionLines = frontmatter?.split(/\r?\n/u).filter((line) => line.startsWith("docReviewVersion:")) ?? [];
	if (versionLines.length === 0) throw createVersionError(packageVersion, "（缺失）", "未记录文档已核对版本。");
	if (versionLines.length > 1) throw createVersionError(packageVersion, "（格式不合法）", "docReviewVersion 必须且只能记录一次。");

	const documentationVersion = versionLines[0]?.slice("docReviewVersion:".length).trim() ?? "";
	if (!semverPattern.test(documentationVersion)) {
		throw createVersionError(packageVersion, documentationVersion || "（空值）", "文档已核对版本不是合法的 SemVer。");
	}
	if (documentationVersion !== packageVersion) {
		throw createVersionError(packageVersion, documentationVersion, "组件库版本与文档已核对版本不一致。");
	}
	return documentationVersion;
};

const collectFiles = async (directory) => {
	const entries = await readdir(directory, { withFileTypes: true });
	const groups = await Promise.all(
		entries.map((entry) => {
			const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
			return entry.isDirectory() ? collectFiles(url) : [url];
		})
	);
	return groups.flat();
};

const assertDetailedMethodDocumentation = (source, file, headingLevel, detailLevel, expectedCount) => {
	const entries = [...source.matchAll(new RegExp(`^${"#".repeat(headingLevel)} ` + "`[^`]+`$", "gmu"))];
	assert.equal(entries.length, expectedCount, `${file} 的逐方法条目数量不正确。`);
	for (const [index, entry] of entries.entries()) {
		const nextIndex = entries[index + 1]?.index ?? source.length;
		const section = source.slice(entry.index, nextIndex);
		const methodName = entry[0];
		for (const title of ["签名", "示例", "输入", "返回"]) {
			assert.ok(section.includes(`${"#".repeat(detailLevel)} ${title}`), `${file} 的 ${methodName} 缺少${title}。`);
		}
		assert.ok(
			section.includes("输入值类型") || section.includes("该方法没有输入参数。"),
			`${file} 的 ${methodName} 缺少输入值、输入值类型或输入值说明。`
		);
		assert.ok(section.includes("返回值类型") && section.includes("返回值说明"), `${file} 的 ${methodName} 缺少返回值类型或说明。`);
	}
};

test("documentation version accepts the matching package version", () => {
	assert.equal(validateDocumentationVersion("2.3.4", "---\ndocReviewVersion: 2.3.4\n---\n"), "2.3.4");
});

test("documentation version reports a package mismatch", () => {
	assert.throws(
		() => validateDocumentationVersion("2.3.4", "---\ndocReviewVersion: 2.3.3\n---\n"),
		(error) =>
			error instanceof Error &&
			error.message.includes("组件库版本：2.3.4") &&
			error.message.includes("文档已核对版本：2.3.3") &&
			error.message.includes(`版本记录位置：${documentationVersionLocation}`) &&
			error.message.includes("同步文档后再更新")
	);
});

test("documentation version reports a missing record", () => {
	assert.throws(
		() => validateDocumentationVersion("2.3.4", "---\nlayout: home\n---\n"),
		(error) => error instanceof Error && error.message.includes("文档已核对版本：（缺失）")
	);
});

test("documentation version rejects an invalid format", () => {
	assert.throws(
		() => validateDocumentationVersion("2.3.4", "---\ndocReviewVersion: latest\n---\n"),
		(error) => error instanceof Error && error.message.includes("文档已核对版本：latest") && error.message.includes("不是合法的 SemVer")
	);
});

test("current documentation is reviewed for the published package version", async () => {
	const [packageSource, indexSource] = await Promise.all([
		readFile(new URL("package.json", root), "utf8"),
		readFile(new URL("docs/index.md", root), "utf8"),
	]);
	const packageVersion = JSON.parse(packageSource).version;
	assert.equal(validateDocumentationVersion(packageVersion, indexSource), packageVersion);
});

test("public components have API documentation and Markdown example paths resolve", async () => {
	const componentIndex = await readFile(new URL("src/components/index.ts", root), "utf8");
	const componentModulePaths = [...componentIndex.matchAll(/^export \* from "(\.\/[^"]+)";$/gmu)].map((match) => match[1]);
	const componentModules = await Promise.all(
		componentModulePaths.map((modulePath) => readFile(new URL(`${modulePath.slice(2)}/index.ts`, new URL("src/components/", root)), "utf8"))
	);
	const publicComponentNames = componentModules.flatMap((source) =>
		[...source.matchAll(/^export const (Fa[A-Za-z0-9]+)\b/gmu)].map((match) => match[1])
	);

	const componentDocumentUrls = (await collectFiles(new URL("docs/components/", root))).filter((url) => url.pathname.endsWith(".md"));
	const componentDocuments = await Promise.all(componentDocumentUrls.map(async (url) => ({ source: await readFile(url, "utf8"), url })));
	const allComponentDocumentation = componentDocuments.map(({ source }) => source).join("\n");
	for (const componentName of publicComponentNames) {
		assert.match(
			allComponentDocumentation,
			new RegExp(`<ComponentApi\\s+name=["']${componentName}["']`, "u"),
			`${componentName} 缺少 ComponentApi 文档。`
		);
	}

	for (const { source, url } of componentDocuments) {
		for (const match of source.matchAll(/from\s+["'](\.\.\/examples\/[^"'?]+\.vue)(?:\?raw)?["']/gu)) {
			const examplePath = match[1];
			assert.ok(examplePath);
			await access(new URL(examplePath, url));
		}
	}
});

test("required public API reference sections exist", async () => {
	const references = [
		{ file: "docs/API.md", headings: ["## Components", "## Directives", "## Hooks", "## Constants and utilities"] },
		{ file: "docs/API.zh-CN.md", headings: ["## 组件", "## 指令", "## Hook", "## 常量与工具"] },
	];
	for (const { file, headings } of references) {
		const source = await readFile(new URL(file, root), "utf8");
		for (const heading of headings) assert.match(source, new RegExp(`^${heading}$`, "mu"), `${file} 缺少 ${heading} 章节。`);
	}
});

test("every documented public method has an example, typed inputs, and a typed return", async () => {
	const methodDocuments = [
		["docs/METHODS.zh-CN.md", 2, 3, 37],
		["docs/COMPONENT_METHODS.zh-CN.md", 3, 4, 126],
		["docs/eslint-config/methods.md", 2, 3, 26],
		["docs/eslint-config-legacy/methods.md", 2, 3, 27],
		["docs/vite-plugins/methods.md", 2, 3, 13],
		["docs/utils/object-methods.md", 2, 3, 19],
		["docs/axios/methods.md", 2, 3, 39],
		["docs/element-plus-icons/examples.md", 2, 3, 68],
	];
	for (const [file, headingLevel, detailLevel, expectedCount] of methodDocuments) {
		const source = await readFile(new URL(file, root), "utf8");
		assertDetailedMethodDocumentation(source, file, headingLevel, detailLevel, expectedCount);
	}

	const utilityMethodUrls = (await collectFiles(new URL("docs/utils/methods/", root))).filter((url) => url.pathname.endsWith(".md"));
	let utilityMethodCount = 0;
	for (const url of utilityMethodUrls) {
		const source = await readFile(url, "utf8");
		const count = [...source.matchAll(/^## `[^`]+`$/gmu)].length;
		assertDetailedMethodDocumentation(source, url.pathname, 2, 3, count);
		utilityMethodCount += count;
	}
	assert.equal(utilityMethodUrls.length, 16, "Fast.Utils 方法文档应覆盖 16 个公开模块。");
	assert.equal(utilityMethodCount, 159, "Fast.Utils 方法文档未覆盖当前核对的 159 个公开函数。");
});

test("ESLint examples use the official configuration wrapper and keep project overrides", async () => {
	const [modernGuide, modernApi, modernMethods, legacyGuide, legacyApi, legacyMethods] = await Promise.all([
		readFile(new URL("docs/eslint-config/guide.md", root), "utf8"),
		readFile(new URL("docs/eslint-config/api.md", root), "utf8"),
		readFile(new URL("docs/eslint-config/methods.md", root), "utf8"),
		readFile(new URL("docs/eslint-config-legacy/guide.md", root), "utf8"),
		readFile(new URL("docs/eslint-config-legacy/api.md", root), "utf8"),
		readFile(new URL("docs/eslint-config-legacy/methods.md", root), "utf8"),
	]);

	for (const source of [modernGuide, modernApi]) {
		assert.ok(source.includes('import { defineConfig } from "eslint/config";'), "现代配置示例缺少 ESLint 官方 defineConfig。 ");
		assert.ok(source.includes("...vueConfig"), "现代 Vue 配置示例应展开 vueConfig，以便追加项目配置。 ");
		assert.ok(source.includes('name: "project/custom"'), "现代配置示例缺少后置项目自定义配置。 ");
		assert.doesNotMatch(source, /export default (?:vueConfig|uniAppConfig);/u);
	}
	assert.equal(
		[...modernMethods.matchAll(/import \{ defineConfig \} from "eslint\/config";/gu)].length,
		26,
		"现代配置的每个方法示例都应使用 defineConfig 落地。"
	);
	assert.equal([...modernMethods.matchAll(/name: "project\//gu)].length, 26, "现代配置的每个方法示例都应保留项目自定义配置。");

	for (const source of [legacyGuide, legacyApi, legacyMethods]) {
		assert.ok(source.includes("module.exports = {"), "Legacy 示例应保持 ESLint 8 的 .eslintrc CommonJS 写法。 ");
		assert.doesNotMatch(source, /from "eslint\/config"/u, "Legacy 示例不得混入 Flat Config defineConfig。 ");
	}
	assert.equal([...legacyMethods.matchAll(/^module\.exports = \{/gmu)].length, 27, "Legacy 的每个方法示例都应展示实际 .eslintrc 接入。 ");
});

test("integrated projects have independent pages, navigation, API references, and examples", async () => {
	const projects = [
		{
			route: "eslint-config",
			files: [
				"index.md",
				"guide.md",
				"api.md",
				"methods.md",
				"rules/index.md",
				"rules/core.md",
				"rules/typescript.md",
				"rules/vue.md",
				"rules/react.md",
				"rules/angular.md",
				"rules/json.md",
				"rules/markdown.md",
			],
			apiFile: "api.md",
			apiNames: ["vueConfig", "uniAppConfig", "createBaseConfigs", "createVueProjectConfigs", "defineRules"],
		},
		{
			route: "eslint-config-legacy",
			files: ["index.md", "guide.md", "api.md", "methods.md", "dependency-compatibility.md", "rules-risk.md"],
			apiFile: "api.md",
			apiNames: ["./configs", "./constants", "./rules", "defineRules", "extends"],
		},
		{
			route: "vite-plugins",
			files: ["index.md", "guide.md", "api.md", "methods.md", "risks.md", "development-release.md"],
			apiFile: "api.md",
			apiNames: [
				"componentRegistry",
				"routerMeta",
				"svgIcons",
				"cdnImport",
				"buildInfo",
				"subresourceIntegrity",
				"bundleBudget",
				"devRestart",
				"compression",
				"staticCopy",
				"virtualModules",
				"envGuard",
				"htmlTemplate",
			],
		},
		{
			route: "utils",
			files: ["index.md", "guide.md", "api.md", "exports.md", "object-methods.md", "runtime-contract.md"],
			apiFile: "exports.md",
			apiNames: ["## Array", "## Async", "## Crypto", "## Date", "## DOM", "## Environment", "## Storage", "## Vue"],
		},
		{
			route: "axios",
			files: ["index.md", "guide.md", "api.md", "methods.md", "uni-app-adapter.md", "runtime-contract.md"],
			apiFile: "api.md",
			apiNames: [
				"createFastAxios",
				"useFastAxios",
				"axiosUtil.request",
				"createUniAppAxiosAdapter",
				"@fast-china/axios/vite",
				"@fast-china/axios/webpack",
			],
		},
		{
			route: "element-plus-icons",
			files: ["index.md", "guide.md", "api.md", "examples.md", "runtime-contract.md", "development-release.md"],
			apiFile: "api.md",
			apiNames: ["根入口导出以下 68 个组件名", "About", "Dashboard", "FullScreen", "Page403", "Page404", "Workbench"],
		},
	];
	const configSource = await readFile(new URL("docs/.vitepress/config.mts", root), "utf8");
	for (const { route, files, apiFile, apiNames } of projects) {
		assert.ok(configSource.includes(`link: "/${route}/"`), `${route} 缺少项目切换入口。`);
		assert.ok(configSource.includes(`"/${route}/": [`), `${route} 缺少独立侧边栏。`);
		for (const file of files) await access(new URL(`docs/${route}/${file}`, root));

		const apiSource = await readFile(new URL(`docs/${route}/${apiFile}`, root), "utf8");
		for (const apiName of apiNames) assert.ok(apiSource.includes(apiName), `${route}/${apiFile} 缺少 ${apiName}。`);
	}

	const rootIndex = await readFile(new URL("docs/index.md", root), "utf8");
	assert.match(rootIndex, /^layout: home$/mu, "站点根路径必须继续使用 Fast.Element.Plus 首页。 ");
	await access(new URL("docs/DOCUMENTATION_COVERAGE.zh-CN.md", root));
	await access(new URL("docs/METHODS.zh-CN.md", root));
	await access(new URL("docs/COMPONENT_METHODS.zh-CN.md", root));
});
