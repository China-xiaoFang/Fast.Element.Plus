# Fast.ESLint.Config 公开 API

本文以 `@fast-china/eslint-config` 2.1.8 的 `package.json#exports` 与 `src/` 公开导出为准。包要求 Node.js `^22.18.0 || ^24.18.0`、ESLint `^10.0.0` 和 TypeScript `^6.0.0`。

全部配置创建方法的独立示例、输入和返回值表见[方法 API](./methods)。

## 根入口

| API                          | 签名或类型                                                                | 默认值与行为                                 |
| ---------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| `vueConfig`                  | `Config[]`                                                                | 不带项目覆写的 Vue 3 完整配置                |
| `uniAppConfig`               | `Config[]`                                                                | 不带项目覆写的 UniApp 完整配置               |
| `createBaseConfigs`          | `(options?: ProjectConfigOptions) => Config[]`                            | `environment: "browser"`；用于无前端框架项目 |
| `createVueProjectConfigs`    | `(options?: ProjectConfigOptions, ...overrides: Config[]) => Config[]`    | Vue 3、Vue SFC 与 Vue JSX/TSX                |
| `createUniAppProjectConfigs` | `(options?: ProjectConfigOptions, ...overrides: Config[]) => Config[]`    | 额外处理 `.nvue`、UniApp globals 与清单      |
| `defineRules`                | `<Rules extends RuleOptions>(rules: Rules) => Rules & Linter.RulesRecord` | 原样返回对象，只提供规则名与选项类型检查     |
| `ProjectConfigOptions`       | `{ environment?: "browser" \| "node" \| "universal" }`                    | 应用源码默认按浏览器环境处理                 |
| `RuleOptions`                | 生成的规则配置类型                                                        | 覆盖当前插件规则名与规则选项                 |

```js
import { vueConfig } from "@fast-china/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...vueConfig,
	{
		name: "project/custom",
		rules: {
			"no-console": "warn",
		},
	},
]);
```

`defineConfig()` 是 ESLint 官方配置辅助函数。展开 `vueConfig` 后追加的项目配置拥有更高优先级，既保留共享基线，也为消费项目留下明确的自定义入口。

## `./configs`

该子路径导出可组合工厂：`createAngularConfigs`、`createCommonConfigs`、`createEnvironmentConfigs`、`createNodeToolingConfigs`、`createGlobalIgnores`、`createGitignoreConfigs`、`createImportConfigs`、`createJavaScriptConfigs`、`createJsonConfigs`、`createLodashConfigs`、`createMarkdownConfigs`、`createPrettierConfigs`、`createReactConfigs`、`createRegexpConfigs`、`createPackageJsonSortConfigs`、`createTsconfigSortConfigs`、`createTypeScriptConfigs`、`createTypeScriptParserOptions`、`getTypeScriptPresetConfigs`、`createUniAppConfigs`、`createVueConfigs` 和 `createVueJsxConfigs`。同时导出各工厂使用的选项类型、`RuntimeEnvironment`、`LodashPreference` 与 `DEFAULT_IGNORE_PATTERNS`。

```js
import { defineConfig } from "eslint/config";
import { createAngularConfigs, createMarkdownConfigs } from "@fast-china/eslint-config/configs";

export default defineConfig([
	...createAngularConfigs(),
	...createMarkdownConfigs(),
	{
		name: "project/custom",
		rules: {
			"no-console": "warn",
		},
	},
]);
```

这些工厂返回 Flat Config 片段，不会自动补齐其他片段需要的 Parser、Plugin 或文件范围。优先使用根入口的完整项目工厂；只有明确理解组合边界时才使用该子路径。

## `./constants`

导出 JavaScript、TypeScript、JSX、TSX、Vue、NVue、Angular、JSON/JSONC/JSON5、Markdown、UniApp 清单、Node 工具、tsconfig 与 Lockfile 的 glob，以及 `UNIAPP_GLOBALS`、`UNIAPP_CONDITIONAL_GLOBALS`。

```js
import { GLOBS_TYPESCRIPT, GLOB_VUE } from "@fast-china/eslint-config/constants";

export const applicationFiles = [...GLOBS_TYPESCRIPT, GLOB_VUE];
```

只读数组应复制后组合，不应原地修改。

## `./rules`

导出 `defineRules`、`RuleOptions`，以及 Angular、Common、Import、JavaScript、Lodash、React、RegExp、Package/tsconfig 排序、TypeScript、Vue 与 Vue Legacy 规则记录。

```ts
import { defineRules, typescriptRules, vueRules } from "@fast-china/eslint-config/rules";

export const rules = defineRules({
	...typescriptRules,
	...vueRules,
	"@typescript-eslint/no-explicit-any": "off",
});
```

规则的启用状态、适用范围、配置值、说明与示例见[完整规则手册](./rules/)。规则记录不包含 Parser、Plugin、环境或文件匹配配置。

## 包入口

公开入口仅包括包根、`./configs`、`./constants`、`./rules` 与 `./package.json`。`src/`、`dist/` 内部文件和具体配置实现路径不是公共 API。
