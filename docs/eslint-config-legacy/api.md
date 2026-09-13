# Fast.ESLint.Config.Legacy 公开 API

全部配置创建方法的独立示例、输入和返回值表见[方法 API](./methods)。

本文以 `@fast-china/eslint-config-legacy` 2.1.9 的 `package.json#exports` 与 `src/` 公开导出为准。它面向 ESLint `^8.57.0` 的 `.eslintrc`，不是 Flat Config；新项目应使用 [Fast.ESLint.Config](/eslint-config/)。

## 默认入口与直接 `extends`

包根默认导出 Vue 3 Web 管理项目的完整 `Linter.Config`：JavaScript、TypeScript、Vue 3、JSON、YAML、Markdown、Import、Promise、RegExp 和 Prettier 均已组合。

```js
// .eslintrc.cjs
module.exports = {
	root: true,
	extends: ["@fast-china/eslint-config-legacy"],
	rules: {
		"no-console": "warn",
	},
};
```

项目自定义 `rules` 与共享 `extends` 同时保留，且项目规则优先。该包使用 ESLint 8 Legacy Config，不使用 `eslint/config` 的 `defineConfig()`。

可直接写入 `extends` 的子路径包括：`angular`、`common`、`commonjs`、`environment`、`import`、`javascript`、`json`、`lodash`、`lodash-unified`、`markdown`、`node`、`prettier`、`promise`、`react`、`regexp`、`sort-package`、`sort-tsconfig`、`type-aware`、`typescript`、`vue`、`vue2` 与 `yaml`。

```js
module.exports = {
	root: true,
	extends: ["@fast-china/eslint-config-legacy/typescript", "@fast-china/eslint-config-legacy/vue2"],
};
```

## `./configs`

编程入口导出 `createAngularConfigs`、`createCommonConfigs`、`createCommonJsConfigs`、`createEnvironmentConfigs`、`createNodeToolingConfigs`、`createImportConfigs`、`createJavaScriptConfig(s)`、`createJsonExtends`、`createJsonConfigs`、`createLodashConfigs`、`createMarkdownConfigs`、`createPrettierConfigs`、`createPromiseConfigs`、`createReactConfigs`、`createRegexpConfigs`、`createPackageJsonSortConfigs`、`createTsconfigSortConfigs`、`createTypeScriptParserOptions`、`createTypeScriptExtends`、`createTypeScriptConfig(s)`、`createTypeScriptDeclarationConfigs`、`createTypeAwareConfigs`、`createVueConfigs` 和 `createYamlConfigs`，并公开对应 Options 类型。

```js
const { createPromiseConfigs, createRegexpConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	overrides: [
		...createPromiseConfigs(["src/**/*.{js,ts}"]),
		...createRegexpConfigs(["src/**/*.{js,ts}"]),
		{
			files: ["src/**/*.{js,ts}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

工厂返回 ESLint 8 Legacy Config 或 Override；调用方负责把所需片段放在正确的根配置、`extends` 或 `overrides` 层级。

## `./constants` 与 `./rules`

`./constants` 导出 JavaScript、TypeScript、声明文件、Vue、Angular、JSON/JSONC/JSON5、Markdown、YAML、Node 工具、tsconfig 与 CommonJS glob。

`./rules` 导出 `defineRules`、`RuleName`、`RuleOptions`，以及 Angular、Common、Import、JavaScript、Lodash、React、RegExp、排序、TypeScript、Vue 3 与 Vue Legacy 规则记录。

```ts
import { defineRules, vueLegacyRules } from "@fast-china/eslint-config-legacy/rules";

export const rules = defineRules({
	...vueLegacyRules,
	"vue/multi-word-component-names": "off",
});
```

这些规则对象不包含 Parser、Plugin、环境和文件范围。规则升级的语义风险见[规则风险指南](./rules-risk)。

## 两个配置包的实际差异

| 项目       | Fast.ESLint.Config         | Fast.ESLint.Config.Legacy                  |
| ---------- | -------------------------- | ------------------------------------------ |
| ESLint     | `^10`                      | `^8.57`                                    |
| 配置格式   | 原生 Flat Config 数组      | `.eslintrc` / `Linter.Config`              |
| 模块       | ESM                        | CommonJS                                   |
| TypeScript | `^6` 与 Project Service    | TypeScript 4/5/6，按旧 Parser Options 配置 |
| Vue        | Vue 3、UniApp、Vue JSX/TSX | Vue 2/3 的独立 Legacy 入口                 |
| 数据文档   | JSON/JSONC/JSON5、Markdown | 额外提供 YAML 与 Promise 独立入口          |

完整依赖矩阵见[依赖兼容性](./dependency-compatibility)。不要把两个包的配置对象跨格式混用。
