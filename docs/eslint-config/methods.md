# Fast.ESLint.Config 方法 API

本文逐项记录 2.1.8 的全部公开配置创建方法。每个示例都从包的受支持入口导入，并明确输入与返回类型。规则常量不是方法，继续由规则手册说明。

## `defineRules`

定义带有完整规则名与选项类型检查的 ESLint 规则记录。

### 签名

```ts
export const defineRules = <const Rules extends RuleOptions>(rules: RejectUnknownRuleNames<Rules>): Rules & Linter.RulesRecord;
```

### 示例

```js
import { defineRules, vueConfig } from "@fast-china/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...vueConfig,
	{
		name: "project/custom-rules",
		rules: defineRules({
			eqeqeq: ["error", "always"],
			"no-console": "warn",
		}),
	},
]);
```

### 输入

| 输入值  | 输入值类型                      | 必填/默认值 | 输入值说明                                                           |
| ------- | ------------------------------- | ----------- | -------------------------------------------------------------------- |
| `rules` | `RejectUnknownRuleNames<Rules>` | 是          | 需要验证的 ESLint 规则记录；未知规则名和无效规则选项会产生类型错误。 |

### 返回

| 返回值    | 返回值类型                   | 返回值说明                                                     |
| --------- | ---------------------------- | -------------------------------------------------------------- |
| `configs` | `Rules & Linter.RulesRecord` | 原样返回传入的规则记录，并补充 ESLint `RulesRecord` 兼容类型。 |

## `createBaseConfigs`

创建不绑定前端框架的 JavaScript 与 TypeScript 完整配置。

### 签名

```ts
export const createBaseConfigs = ({ environment = "browser" }: ProjectConfigOptions = {}): Config[];
```

### 示例

```js
import { createBaseConfigs } from "@fast-china/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createBaseConfigs({ environment: "browser" }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值    | 输入值类型             | 必填/默认值   | 输入值说明                                     |
| --------- | ---------------------- | ------------- | ---------------------------------------------- |
| `options` | `ProjectConfigOptions` | 否，默认 `{}` | 应用源码的运行环境；默认仅注入浏览器全局变量。 |

### 返回

| 返回值    | 返回值类型 | 返回值说明                                         |
| --------- | ---------- | -------------------------------------------------- |
| `configs` | `Config[]` | 可直接传给 `eslint.config.*` 的 Flat Config 数组。 |

## `createVueProjectConfigs`

创建处理 `.vue`、Vue JSX 与 Vue TSX，且不注入任何 UniApp 能力的 Vue 3 完整配置。

### 签名

```ts
export const createVueProjectConfigs = ({ environment = "browser" }: ProjectConfigOptions = {}, ...overrides: Config[]): Config[];
```

### 示例

```js
import { createVueProjectConfigs } from "@fast-china/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createVueProjectConfigs({ environment: "browser" }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值         | 输入值类型             | 必填/默认值   | 输入值说明                                     |
| -------------- | ---------------------- | ------------- | ---------------------------------------------- |
| `options`      | `ProjectConfigOptions` | 否，默认 `{}` | 应用源码的运行环境；默认仅注入浏览器全局变量。 |
| `...overrides` | `Config[]`             | 否，可传多个  | 追加在内置配置之后的项目级 Flat Config 覆写。  |

### 返回

| 返回值    | 返回值类型 | 返回值说明                                |
| --------- | ---------- | ----------------------------------------- |
| `configs` | `Config[]` | Vue 3 项目可直接使用的 Flat Config 数组。 |

## `createUniAppProjectConfigs`

创建处理 `.vue`、`.nvue`、Vue JSX/TSX、UniApp globals 与应用清单的完整配置。

### 签名

```ts
export const createUniAppProjectConfigs = ({ environment = "browser" }: ProjectConfigOptions = {}, ...overrides: Config[]): Config[];
```

### 示例

```js
import { createUniAppProjectConfigs } from "@fast-china/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createUniAppProjectConfigs({ environment: "browser" }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值         | 输入值类型             | 必填/默认值   | 输入值说明                                     |
| -------------- | ---------------------- | ------------- | ---------------------------------------------- |
| `options`      | `ProjectConfigOptions` | 否，默认 `{}` | 应用源码的运行环境；默认仅注入浏览器全局变量。 |
| `...overrides` | `Config[]`             | 否，可传多个  | 追加在内置配置之后的项目级 Flat Config 覆写。  |

### 返回

| 返回值    | 返回值类型 | 返回值说明                                 |
| --------- | ---------- | ------------------------------------------ |
| `configs` | `Config[]` | UniApp 项目可直接使用的 Flat Config 数组。 |

## `createAngularConfigs`

创建 Angular TypeScript、外部 HTML 模板与内联模板配置。

### 签名

```ts
export const createAngularConfigs = ({ inlineTemplates = true, templateAccessibility = true }: AngularConfigOptions = {}): ReturnType<
	typeof defineConfig
>;
```

### 示例

```js
import { createAngularConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createAngularConfigs({ inlineTemplates: true, templateAccessibility: true }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值    | 输入值类型             | 必填/默认值   | 输入值说明                                        |
| --------- | ---------------------- | ------------- | ------------------------------------------------- |
| `options` | `AngularConfigOptions` | 否，默认 `{}` | 控制内联模板处理与模板无障碍规则的 Angular 选项。 |

### 返回

| 返回值    | 返回值类型                                | 返回值说明                                                       |
| --------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `configs` | `ReturnType<<br>	typeof defineConfig<br>>` | 按 TypeScript 源码、外部模板顺序排列的 ESLint Flat Config 数组。 |

## `createCommonConfigs`

创建跨 JavaScript、TypeScript 与 Vue 脚本生效的通用配置。

### 签名

```ts
export const createCommonConfigs = (files: readonly string[] = GLOBS_CODE): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createCommonConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createCommonConfigs(["src/**/*.{js,ts}"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值           | 输入值说明                        |
| ------- | ------------------- | --------------------- | --------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用公共规则的 ESLint glob 列表。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                          |
| --------- | --------------------------------- | --------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含公共规则与无效禁用指令检查的 Flat Config 数组。 |

## `createEnvironmentConfigs`

创建运行时环境相关的 ESLint 配置。

### 签名

```ts
export const createEnvironmentConfigs = ({
	environment = "browser",
	files = GLOBS_CODE,
	nodeFiles = GLOBS_JAVASCRIPT,
	globals: projectGlobals = {},
}: EnvironmentConfigOptions = {}): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createEnvironmentConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createEnvironmentConfigs({ environment: "browser", files: ["src/**/*.ts"] }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值    | 输入值类型                 | 必填/默认值   | 输入值说明                                 |
| --------- | -------------------------- | ------------- | ------------------------------------------ |
| `options` | `EnvironmentConfigOptions` | 否，默认 `{}` | 运行时环境、目标文件范围与项目级全局变量。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                         |
| --------- | --------------------------------- | ------------------------------------------------------------------ |
| `configs` | `ReturnType<typeof defineConfig>` | 依次包含应用运行时环境和 Node.js 工程文件环境的 Flat Config 数组。 |

## `createNodeToolingConfigs`

创建 Node.js 配置、脚本、测试和 CLI 文件的末尾规则覆写。

### 签名

```ts
export const createNodeToolingConfigs = (nodeFiles: readonly string[] = GLOBS_JAVASCRIPT): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createNodeToolingConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createNodeToolingConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值      | 输入值类型          | 必填/默认值                 | 输入值说明                                     |
| ----------- | ------------------- | --------------------------- | ---------------------------------------------- |
| `nodeFiles` | `readonly string[]` | 否，默认 `GLOBS_JAVASCRIPT` | 当前已启用的 JavaScript/TypeScript 文件 glob。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                  |
| --------- | --------------------------------- | --------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | Node 工具文件规则覆写数组。 |

## `createGlobalIgnores`

创建全局忽略配置，并在默认集合之后追加项目自定义模式。

### 签名

```ts
export const createGlobalIgnores = (additionalPatterns: readonly string[] = []): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createGlobalIgnores } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createGlobalIgnores(["coverage/**"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值               | 输入值类型          | 必填/默认值   | 输入值说明                          |
| -------------------- | ------------------- | ------------- | ----------------------------------- |
| `additionalPatterns` | `readonly string[]` | 否，默认 `[]` | 追加到 之后的 ESLint 全局忽略模式。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                    |
| --------- | --------------------------------- | --------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含单个命名全局忽略片段的 Flat Config 数组。 |

## `createGitignoreConfigs`

创建读取项目 `.gitignore` 的全局忽略配置。

### 签名

```ts
export const createGitignoreConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createGitignoreConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createGitignoreConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                      |
| --------- | --------------------------------- | ----------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 `.gitignore` 转换结果的 Flat Config 数组。 |

## `createImportConfigs`

创建模块导入规则配置。

### 签名

```ts
export const createImportConfigs = (files: readonly string[] = GLOBS_CODE): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createImportConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createImportConfigs(["src/**/*.{ts,tsx}"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值           | 输入值说明                                                |
| ------- | ------------------- | --------------------- | --------------------------------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用 import-x 推荐规则与本地覆盖规则的 ESLint glob 列表。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                            |
| --------- | --------------------------------- | ----------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 import-x 插件预置和本地规则的 Flat Config 数组。 |

## `createJavaScriptConfigs`

创建 JavaScript/JSX 配置。

### 签名

```ts
export const createJavaScriptConfigs = (files: readonly string[] = GLOBS_JAVASCRIPT): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createJavaScriptConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createJavaScriptConfigs(["src/**/*.js"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值                 | 输入值说明                                    |
| ------- | ------------------- | --------------------------- | --------------------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_JAVASCRIPT` | 应用 JavaScript 基础规则的 ESLint glob 列表。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                             |
| --------- | --------------------------------- | ---------------------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 JavaScript 推荐预置、本地规则与 JSX 解析设置的 Flat Config 数组。 |

## `createJsonConfigs`

创建 JSON、JSONC 与 JSON5 配置。

### 签名

```ts
export const createJsonConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createJsonConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createJsonConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                                   |
| --------- | --------------------------------- | ---------------------------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 按 JSON、JSONC、JSON5 与 VS Code 工作区文件覆盖顺序排列的 Flat Config 数组。 |

## `createLodashConfigs`

创建 Lodash 静态导入约束。

### 签名

```ts
export const createLodashConfigs = (preference: LodashPreference, files: readonly string[] = GLOBS_CODE): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createLodashConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createLodashConfigs("lodash", ["src/**/*.ts"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值       | 输入值类型          | 必填/默认值           | 输入值说明                         |
| ------------ | ------------------- | --------------------- | ---------------------------------- |
| `preference` | `LodashPreference`  | 是                    | 项目唯一允许使用的 Lodash 包入口。 |
| `files`      | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用导入约束的 ESLint glob 列表。  |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                        |
| --------- | --------------------------------- | ------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含对应 Lodash 导入限制规则的 Flat Config 数组。 |

## `createMarkdownConfigs`

创建 Markdown 结构与语法检查配置。

### 签名

```ts
export const createMarkdownConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createMarkdownConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createMarkdownConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                            |
| --------- | --------------------------------- | ----------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 `@eslint/markdown` 推荐预置的 Flat Config 数组。 |

## `createPrettierConfigs`

创建 Prettier 兼容层。

### 签名

```ts
export const createPrettierConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createPrettierConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createPrettierConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                               |
| --------- | --------------------------------- | -------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含命名后的 `eslint-config-prettier` Flat Config 数组。 |

## `createReactConfigs`

创建 React、JSX/TSX 与 Hooks 配置。

### 签名

```ts
export const createReactConfigs = ({ importSource = "react", polymorphicPropName = "as", version = "detect" }: ReactConfigOptions = {}): ReturnType<
	typeof defineConfig
>;
```

### 示例

```js
import { createReactConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createReactConfigs({ importSource: "react", version: "detect" }),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值    | 输入值类型           | 必填/默认值   | 输入值说明                                     |
| --------- | -------------------- | ------------- | ---------------------------------------------- |
| `options` | `ReactConfigOptions` | 否，默认 `{}` | React 版本、运行时导入来源与多态组件属性设置。 |

### 返回

| 返回值    | 返回值类型                                | 返回值说明                                                        |
| --------- | ----------------------------------------- | ----------------------------------------------------------------- |
| `configs` | `ReturnType<<br>	typeof defineConfig<br>>` | React JavaScript、类型感知 TypeScript 与 Hooks Flat Config 数组。 |

## `createRegexpConfigs`

创建正则表达式正确性配置。

### 签名

```ts
export const createRegexpConfigs = (files: readonly string[] = GLOBS_CODE): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createRegexpConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createRegexpConfigs(["src/**/*.{js,ts}"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值           | 输入值说明                              |
| ------- | ------------------- | --------------------- | --------------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用正则表达式规则的 ESLint glob 列表。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                      |
| --------- | --------------------------------- | ----------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含正则插件及公共正则规则的 Flat Config 数组。 |

## `createPackageJsonSortConfigs`

创建 package.json 排序配置。

### 签名

```ts
export const createPackageJsonSortConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createPackageJsonSortConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createPackageJsonSortConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                          |
| --------- | --------------------------------- | --------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 仅匹配 `package.json` 的字段排序 Flat Config 数组。 |

## `createTsconfigSortConfigs`

创建 tsconfig.json 排序配置。

### 签名

```ts
export const createTsconfigSortConfigs = (): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createTsconfigSortConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createTsconfigSortConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                              |
| --------- | --------------------------------- | ----------------------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 匹配 `tsconfig.json` 与 `tsconfig.*.json` 的字段排序 Flat Config 数组。 |

## `getTypeScriptPresetConfigs`

返回 typescript-eslint 通用且类型感知的官方预置。

### 签名

```ts
export const getTypeScriptPresetConfigs = (): Linter.Config[];
```

### 示例

```js
import { getTypeScriptPresetConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...getTypeScriptPresetConfigs(),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型        | 返回值说明                                               |
| --------- | ----------------- | -------------------------------------------------------- |
| `configs` | `Linter.Config[]` | ESLint 核心推荐规则与对应的 typescript-eslint 推荐预置。 |

## `createTypeScriptParserOptions`

创建 TypeScript 解析器的 Project Service 选项。

### 签名

```ts
export const createTypeScriptParserOptions = (extraFileExtensions: readonly string[] = []): Linter.ParserOptions;
```

### 示例

```js
import { vueConfig } from "@fast-china/eslint-config";
import { createTypeScriptParserOptions } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...vueConfig,
	{
		name: "project/typescript-parser",
		files: ["src/**/*.ts"],
		languageOptions: {
			parserOptions: createTypeScriptParserOptions([".vue"]),
		},
	},
]);
```

### 输入

| 输入值                | 输入值类型          | 必填/默认值   | 输入值说明                                                     |
| --------------------- | ------------------- | ------------- | -------------------------------------------------------------- |
| `extraFileExtensions` | `readonly string[]` | 否，默认 `[]` | 当前项目组合需要交给 TypeScript Project Service 的额外扩展名。 |

### 返回

| 返回值    | 返回值类型             | 返回值说明                               |
| --------- | ---------------------- | ---------------------------------------- |
| `configs` | `Linter.ParserOptions` | 始终启用 `projectService` 的解析器选项。 |

## `createTypeScriptConfigs`

创建 TypeScript 配置。

### 签名

```ts
export const createTypeScriptConfigs = (files: readonly string[] = GLOBS_TYPESCRIPT, extraFileExtensions: readonly string[] = []): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createTypeScriptConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createTypeScriptConfigs(["src/**/*.ts"], [".vue"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值                | 输入值类型          | 必填/默认值                 | 输入值说明                                         |
| --------------------- | ------------------- | --------------------------- | -------------------------------------------------- |
| `files`               | `readonly string[]` | 否，默认 `GLOBS_TYPESCRIPT` | 应用 TypeScript 配置的 ESLint glob 列表。          |
| `extraFileExtensions` | `readonly string[]` | 否，默认 `[]`               | 与同一项目组合中的框架解析器保持一致的额外扩展名。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                      |
| --------- | --------------------------------- | --------------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 TypeScript 预置、解析器选项与本地规则的 Flat Config 数组。 |

## `createUniAppConfigs`

创建 UniApp 跨端运行时与项目清单适配。

### 签名

```ts
export const createUniAppConfigs = (files: readonly string[] = GLOBS_CODE): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createUniAppConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createUniAppConfigs(["src/**/*.{ts,vue,nvue}"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值           | 输入值说明                                |
| ------- | ------------------- | --------------------- | ----------------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用 UniApp 公共全局变量的代码文件 glob。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                            |
| --------- | --------------------------------- | ------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | UniApp globals 与 JSON 注释兼容配置。 |

## `createVueConfigs`

创建 Vue 3 单文件组件配置。

### 签名

```ts
export const createVueConfigs = (files: readonly string[] = [GLOB_VUE], extraFileExtensions: readonly string[] = [".vue"]): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createVueConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createVueConfigs(["src/**/*.vue"], [".vue"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值                | 输入值类型          | 必填/默认值           | 输入值说明                                               |
| --------------------- | ------------------- | --------------------- | -------------------------------------------------------- |
| `files`               | `readonly string[]` | 否，默认 `[GLOB_VUE]` | 应用 Vue 解析器与规则的单文件组件 glob。                 |
| `extraFileExtensions` | `readonly string[]` | 否，默认 `[".vue"]`   | 与同一项目组合中的 TypeScript 配置保持一致的额外扩展名。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                         |
| --------- | --------------------------------- | ------------------------------------------------------------------ |
| `configs` | `ReturnType<typeof defineConfig>` | 包含 Vue 模板、脚本解析器、推荐预置与本地规则的 Flat Config 数组。 |

## `createVueJsxConfigs`

创建 Vue JSX 与 TSX 组件脚本语义配置。

### 签名

```ts
export const createVueJsxConfigs = (extraFileExtensions: readonly string[] = [".vue"]): ReturnType<typeof defineConfig>;
```

### 示例

```js
import { createVueJsxConfigs } from "@fast-china/eslint-config/configs";
import { defineConfig } from "eslint/config";

export default defineConfig([
	...createVueJsxConfigs([".vue"]),
	{
		name: "project/custom",
		files: ["src/**/*.{js,ts,vue}"],
		rules: {
			"no-console": "warn",
		},
	},
]);
```

### 输入

| 输入值                | 输入值类型          | 必填/默认值         | 输入值说明                                                      |
| --------------------- | ------------------- | ------------------- | --------------------------------------------------------------- |
| `extraFileExtensions` | `readonly string[]` | 否，默认 `[".vue"]` | 与同一项目组合中的 TypeScript 和 SFC 配置保持一致的额外扩展名。 |

### 返回

| 返回值    | 返回值类型                        | 返回值说明                                                  |
| --------- | --------------------------------- | ----------------------------------------------------------- |
| `configs` | `ReturnType<typeof defineConfig>` | 分别处理独立 `.jsx` 与 `.tsx` Vue 组件的 Flat Config 数组。 |
