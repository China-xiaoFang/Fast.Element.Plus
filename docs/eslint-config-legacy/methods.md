# Fast.ESLint.Config.Legacy 方法 API

本文逐项记录 2.1.8 的全部公开配置创建方法。每个示例都从包的受支持入口导入，并明确输入与返回类型。规则常量不是方法，继续由规则手册说明。

## `defineRules`

为消费项目定义类型安全的 ESLint 8 规则记录。

### 签名

```ts
export const defineRules = <const Rules extends RuleOptions>(rules: RejectUnknownRuleNames<Rules>): Rules & Linter.RulesRecord;
```

### 示例

```js
const { defineRules } = require("@fast-china/eslint-config-legacy/rules");

module.exports = {
	root: true,
	extends: ["@fast-china/eslint-config-legacy"],
	rules: defineRules({
		eqeqeq: ["error", "always"],
		"no-console": "warn",
	}),
};
```

### 输入

| 输入值  | 输入值类型                      | 必填/默认值 | 输入值说明                        |
| ------- | ------------------------------- | ----------- | --------------------------------- |
| `rules` | `RejectUnknownRuleNames<Rules>` | 是          | 需要写入 `.eslintrc` 的规则记录。 |

### 返回

| 返回值    | 返回值类型                   | 返回值说明                                                   |
| --------- | ---------------------------- | ------------------------------------------------------------ |
| `configs` | `Rules & Linter.RulesRecord` | 与传入值引用相同、同时兼容 `Linter.RulesRecord` 的规则记录。 |

## `createAngularConfigs`

创建 Angular TypeScript、外部模板与内联模板 Legacy overrides。

TypeScript override 先继承 typescript-eslint，再追加 Angular 推荐规则；启用内联模板时
同一个 override 会注册 Angular template processor。外部模板始终使用专用 template parser。
空文件范围不会创建对应 override。

### 签名

```ts
export const createAngularConfigs = ({
		inlineTemplates = true,
		templateAccessibility = true,
		templateFiles = [GLOB_ANGULAR_TEMPLATE],
		typescriptFiles = [GLOB_ANGULAR_TYPESCRIPT],
	}: AngularConfigOptions = {}, typeScriptOptions: TypeScriptConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createAngularConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createAngularConfigs({ inlineTemplates: true, templateAccessibility: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值              | 输入值类型                | 必填/默认值   | 输入值说明                                         |
| ------------------- | ------------------------- | ------------- | -------------------------------------------------- |
| `options`           | `AngularConfigOptions`    | 否，默认 `{}` | Angular 文件范围、processor 与模板无障碍选项。     |
| `typeScriptOptions` | `TypeScriptConfigOptions` | 否，默认 `{}` | 传递给 TypeScript 配置层的 parser 与类型感知选项。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                                  |
| --------- | ------------------------- | ----------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 按 TypeScript 源码、外部模板顺序排列的 ESLint 8 overrides。 |

## `createCommonConfigs`

创建跨 JavaScript、TypeScript、Vue、React 与 Angular 源码生效的基础配置。

`eslint:recommended` 提供语言级正确性检查，本仓库只在其后补充经过说明的公共规则。

### 签名

```ts
export const createCommonConfigs = (files: readonly string[] = GLOBS_CODE): Linter.ConfigOverride[];
```

### 示例

```js
const { createCommonConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createCommonConfigs(["src/**/*.{js,ts}"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值           | 输入值说明                       |
| ------- | ------------------- | --------------------- | -------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_CODE` | 应用基础正确性规则的 glob 集合。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                              |
| --------- | ------------------------- | ------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个限定文件范围的 override；文件集合为空时返回空数组。 |

## `createCommonJsConfigs`

创建 CommonJS 扩展名兼容 override。

`.cjs` 与 `.cts` 已明确表达模块格式，因此关闭禁止 `require()` 的 TypeScript 规则；
该 override 不改变 parser、env 或其他模块规则。

### 签名

```ts
export const createCommonJsConfigs = (): Linter.ConfigOverride[];
```

### 示例

```js
const { createCommonJsConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createCommonJsConfigs(),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                | 返回值说明                                     |
| --------- | ------------------------- | ---------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | `.cjs` 与 `.cts` 文件共用的单个规则 override。 |

## `createEnvironmentConfigs`

创建应用源码运行时环境配置。

### 签名

```ts
export const createEnvironmentConfigs = ({ environment = "browser", files = [] }: EnvironmentConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createEnvironmentConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createEnvironmentConfigs({ environment: "browser", files: ["src/**/*.ts"] }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型                 | 必填/默认值   | 输入值说明               |
| --------- | -------------------------- | ------------- | ------------------------ |
| `options` | `EnvironmentConfigOptions` | 否，默认 `{}` | 运行环境和目标文件范围。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                                  |
| --------- | ------------------------- | ----------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 一个限定文件范围的 env override；文件范围为空时返回空数组。 |

## `createNodeToolingConfigs`

创建 Node.js 工程文件环境配置。

配置仅匹配 config、setup、scripts、bin、CLI 和测试命名的工程文件，不会把 Node globals
泄漏到 browser 应用源码。它必须晚于语言规则应用，才能可靠关闭工具脚本中的 `no-console`。

### 签名

```ts
export const createNodeToolingConfigs = (): Linter.ConfigOverride[];
```

### 示例

```js
const { createNodeToolingConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createNodeToolingConfigs(),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                | 返回值说明                            |
| --------- | ------------------------- | ------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | Node.js 工程文件专用的单个 override。 |

## `createImportConfigs`

创建模块导入配置。

共享库不猜测项目的路径别名或 resolver，因此只启用 import-x 推荐规则和确定性排序；
resolver 相关规则由 `importRules` 明确关闭。

### 签名

```ts
export const createImportConfigs = (files: readonly string[]): Linter.ConfigOverride[];
```

### 示例

```js
const { createImportConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createImportConfigs(["src/**/*.{ts,tsx}"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值 | 输入值说明                                |
| ------- | ------------------- | ----------- | ----------------------------------------- |
| `files` | `readonly string[]` | 是          | 应用 import-x 规则的脚本和框架文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                              |
| --------- | ------------------------- | ------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个限定文件范围的 override；文件集合为空时返回空数组。 |

## `createJavaScriptConfig`

创建 JavaScript 与 JSX 配置。

JSX 解析在这里显式开启；基础正确性和公共规则由更早的 `createCommonConfigs()` 提供。

### 签名

```ts
export const createJavaScriptConfig = (files: readonly string[] = GLOBS_JAVASCRIPT): JavaScriptConfigOverride;
```

### 示例

```js
const { createJavaScriptConfig } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		createJavaScriptConfig(["src/**/*.js"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值                 | 输入值说明                                  |
| ------- | ------------------- | --------------------------- | ------------------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_JAVASCRIPT` | 由该 override 接管的 JavaScript 文件 glob。 |

### 返回

| 返回值    | 返回值类型                 | 返回值说明                                                 |
| --------- | -------------------------- | ---------------------------------------------------------- |
| `configs` | `JavaScriptConfigOverride` | 包含 parserOptions 与本地 JavaScript 规则的单个 override。 |

## `createJavaScriptConfigs`

将 包装为组合器使用的 override 数组。

### 签名

```ts
export const createJavaScriptConfigs = (files: readonly string[] = GLOBS_JAVASCRIPT): Linter.ConfigOverride[];
```

### 示例

```js
const { createJavaScriptConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createJavaScriptConfigs(["src/**/*.js"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值                 | 输入值说明                          |
| ------- | ------------------- | --------------------------- | ----------------------------------- |
| `files` | `readonly string[]` | 否，默认 `GLOBS_JAVASCRIPT` | 由 JavaScript 配置接管的文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                |
| --------- | ------------------------- | ----------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 始终包含一个 JavaScript override 的数组。 |

## `createJsonExtends`

返回指定 JSON 方言对应的 Legacy 推荐预置链。

### 签名

```ts
export const createJsonExtends = (dialect: "json" | "json5" | "jsonc", prettier = true): string[];
```

### 示例

```js
const { createJsonExtends } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		{
			files: ["**/*.jsonc"],
			extends: createJsonExtends("jsonc", true),
			rules: { "jsonc/sort-keys": "off" },
		},
	],
};
```

### 输入

| 输入值     | 输入值类型                     | 必填/默认值     | 输入值说明                                     |
| ---------- | ------------------------------ | --------------- | ---------------------------------------------- |
| `dialect`  | `"json" \| "json5" \| "jsonc"` | 是              | 严格 JSON、JSON5 或允许注释的 JSONC。          |
| `prettier` | `unknown`                      | 否，默认 `true` | 是否在推荐规则之后关闭与 Prettier 冲突的规则。 |

### 返回

| 返回值    | 返回值类型 | 返回值说明                                            |
| --------- | ---------- | ----------------------------------------------------- |
| `configs` | `string[]` | 可直接写入 Legacy override `extends` 的有序名称数组。 |

## `createJsonConfigs`

创建 JSON、JSONC 与 JSON5 配置。

严格 JSON 排除虽然以 `.json` 结尾、但规范允许注释的 tsconfig 与 VS Code 设置文件。
每个方言使用独立 override，防止严格 JSON 规则误读 JSONC/JSON5 语法。

### 签名

```ts
export const createJsonConfigs = ({ prettier = true }: JsonConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createJsonConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createJsonConfigs({ prettier: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型          | 必填/默认值   | 输入值说明            |
| --------- | ------------------- | ------------- | --------------------- |
| `options` | `JsonConfigOptions` | 否，默认 `{}` | Prettier 兼容层开关。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                                               |
| --------- | ------------------------- | ------------------------------------------------------------------------ |
| `configs` | `Linter.ConfigOverride[]` | 按严格 JSON、JSONC、JSON5、VS Code settings、tsconfig 排列的 overrides。 |

## `createLodashConfigs`

创建 Lodash 静态导入来源约束。

### 签名

```ts
export const createLodashConfigs = (preference: LodashPreference, files: readonly string[]): Linter.ConfigOverride[];
```

### 示例

```js
const { createLodashConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createLodashConfigs("lodash", ["src/**/*.ts"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值       | 输入值类型          | 必填/默认值 | 输入值说明                      |
| ------------ | ------------------- | ----------- | ------------------------------- |
| `preference` | `LodashPreference`  | 是          | 唯一允许使用的 Lodash 包入口。  |
| `files`      | `readonly string[]` | 是          | 应用该组织策略的代码文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                    |
| --------- | ------------------------- | --------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个规则 override；文件集合为空时返回空数组。 |

## `createMarkdownConfigs`

创建 Markdown processor 与虚拟代码块配置。

示例代码缺少完整工程上下文，因此关闭 resolver、未使用符号和控制台等高噪声检查。
processor 的根级 extends 与虚拟文件 override 分开返回，调用方必须保留两部分和顺序。

### 签名

```ts
export const createMarkdownConfigs = (): MarkdownConfigs;
```

### 示例

```js
const { createMarkdownConfigs } = require("@fast-china/eslint-config-legacy/configs");

const markdown = createMarkdownConfigs();

module.exports = {
	root: true,
	extends: markdown.extends,
	overrides: [
		...markdown.overrides,
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型        | 返回值说明                                           |
| --------- | ----------------- | ---------------------------------------------------- |
| `configs` | `MarkdownConfigs` | 根级 Markdown extends 与代码块 override 的组合结果。 |

## `createPrettierConfigs`

创建 Prettier 兼容层。

它只关闭冲突规则，不在 ESLint 中执行 Prettier；项目规则仍在它之后生效。

### 签名

```ts
export const createPrettierConfigs = (files: readonly string[]): Linter.ConfigOverride[];
```

### 示例

```js
const { createPrettierConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createPrettierConfigs(["src/**/*.{js,ts}"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值 | 输入值说明                            |
| ------- | ------------------- | ----------- | ------------------------------------- |
| `files` | `readonly string[]` | 是          | 需要关闭格式冲突规则的代码文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                                  |
| --------- | ------------------------- | ----------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个 Prettier 兼容规则 override；文件集合为空时返回空数组。 |

## `createPromiseConfigs`

创建 Promise 控制流与异常处理推荐配置。

该配置应用 `plugin:promise/recommended`，不启动类型服务；需要类型信息的 Promise
检查由 `/type-aware` 中的 typescript-eslint 预置提供。

### 签名

```ts
export const createPromiseConfigs = (files: readonly string[]): Linter.ConfigOverride[];
```

### 示例

```js
const { createPromiseConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createPromiseConfigs(["src/**/*.{js,ts}"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值 | 输入值说明                         |
| ------- | ------------------- | ----------- | ---------------------------------- |
| `files` | `readonly string[]` | 是          | 应用 Promise 规则的代码文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                        |
| --------- | ------------------------- | ------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个推荐规则 override；文件集合为空时返回空数组。 |

## `createReactConfigs`

创建 React、Hooks 与 JSX accessibility Legacy overrides。

JavaScript 和 TypeScript 使用独立 override，但共享 React、Hooks、JSX accessibility
extends 与 React version settings。TSX override 额外关闭 PropTypes；automatic runtime
额外关闭要求 React 标识符处于作用域的规则。禁用语言或提供空文件范围时不会创建对应项。

### 签名

```ts
export const createReactConfigs = ({
		javascriptFiles = [...GLOBS_JAVASCRIPT],
		jsxRuntime = "automatic",
		typescriptFiles = [...GLOBS_TYPESCRIPT],
		version = "detect",
	}: ReactConfigOptions = {}, { javascript = true, typescript = true, typescriptOptions = {} }: ReactLanguageOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createReactConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createReactConfigs({ importSource: "react", version: "detect" }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型             | 必填/默认值   | 输入值说明                                     |
| --------- | ---------------------- | ------------- | ---------------------------------------------- |
| `options` | `ReactConfigOptions`   | 否，默认 `{}` | React 版本、JSX runtime 与两种语言的文件范围。 |
| `options` | `ReactLanguageOptions` | 否，默认 `{}` | React 版本、JSX runtime 与两种语言的文件范围。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                             |
| --------- | ------------------------- | ------------------------------------------------------ |
| `configs` | `Linter.ConfigOverride[]` | 按 JavaScript、TypeScript 顺序排列的 React overrides。 |

## `createRegexpConfigs`

创建正则表达式正确性与安全配置。

显式启用与现代配置一致的无效结构、潜在错误和灾难性回溯规则，不继承包含
样式偏好的完整 recommended 预置。部分规则支持自动修复，修复后仍需验证真实匹配行为。

### 签名

```ts
export const createRegexpConfigs = (files: readonly string[]): Linter.ConfigOverride[];
```

### 示例

```js
const { createRegexpConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createRegexpConfigs(["src/**/*.{js,ts}"]),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值  | 输入值类型          | 必填/默认值 | 输入值说明                        |
| ------- | ------------------- | ----------- | --------------------------------- |
| `files` | `readonly string[]` | 是          | 应用 RegExp 规则的代码文件 glob。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                        |
| --------- | ------------------------- | ------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 单个推荐规则 override；文件集合为空时返回空数组。 |

## `createPackageJsonSortConfigs`

创建显式启用的 `package.json` 排序 override。

当调用方没有加载 JSON 基础配置时，该函数会为 `package.json` 补充严格 JSON parser
与推荐规则。实际字段顺序由 `packageJsonSortRules` 定义，并刻意避开条件导出对象。

### 签名

```ts
export const createPackageJsonSortConfigs = ({ json = true, prettier = true }: PackageJsonSortConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createPackageJsonSortConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createPackageJsonSortConfigs({ json: true, prettier: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型                     | 必填/默认值   | 输入值说明                                  |
| --------- | ------------------------------ | ------------- | ------------------------------------------- |
| `options` | `PackageJsonSortConfigOptions` | 否，默认 `{}` | JSON 基础配置存在性及 Prettier 兼容层开关。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                              |
| --------- | ------------------------- | --------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 只匹配 `package.json` 的单个 override。 |

## `createTsconfigSortConfigs`

创建显式启用的 `tsconfig*.json` 排序 override。

当调用方没有加载 JSON 基础配置时，该函数会补充 JSONC parser 与推荐规则，确保注释
合法且被保留。排序只改变字段顺序，不改变编译器选项、文件列表或项目引用值。

### 签名

```ts
export const createTsconfigSortConfigs = ({ json = true, prettier = true }: TsconfigSortConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createTsconfigSortConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createTsconfigSortConfigs({ json: true, prettier: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型                  | 必填/默认值   | 输入值说明                                  |
| --------- | --------------------------- | ------------- | ------------------------------------------- |
| `options` | `TsconfigSortConfigOptions` | 否，默认 `{}` | JSON 基础配置存在性及 Prettier 兼容层开关。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                  |
| --------- | ------------------------- | ------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 匹配根和派生 tsconfig 文件的单个 override。 |

## `createTypeScriptParserOptions`

创建 TypeScript 与 Vue TypeScript 共用的 parserOptions。

非类型感知模式只声明现代 ECMAScript module 语义；类型感知模式另外启动 Project
Service，统一声明 Vue 与 NVue 扩展名，并只在调用方明确提供时写入 `tsconfigRootDir`。
所有类型感知文件必须保持相同的 `extraFileExtensions`，避免 TypeScript Server 在混合
检查 TypeScript 与 Vue 文件时反复重载项目。

### 签名

```ts
export const createTypeScriptParserOptions = (options: TypeAwareOptions = {}): Linter.ParserOptions;
```

### 示例

```js
const { createTypeScriptParserOptions } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: createTypeScriptParserOptions({ typeChecked: true }),
	extends: ["@fast-china/eslint-config-legacy/typescript"],
};
```

### 输入

| 输入值    | 输入值类型         | 必填/默认值   | 输入值说明                           |
| --------- | ------------------ | ------------- | ------------------------------------ |
| `options` | `TypeAwareOptions` | 否，默认 `{}` | 类型感知开关及可选 tsconfig 根目录。 |

### 返回

| 返回值    | 返回值类型             | 返回值说明                                                                    |
| --------- | ---------------------- | ----------------------------------------------------------------------------- |
| `configs` | `Linter.ParserOptions` | 可用于 `@typescript-eslint/parser` 或 Vue 子 parser 的新 parserOptions 对象。 |

## `createTypeScriptExtends`

返回与类型感知模式对应的 typescript-eslint Legacy 推荐预置。

### 签名

```ts
export const createTypeScriptExtends = (options: TypeAwareOptions = {}): string[];
```

### 示例

```js
const { createTypeScriptExtends } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		{
			files: ["src/**/*.ts"],
			extends: createTypeScriptExtends({}),
			rules: { "no-console": "warn" },
		},
	],
};
```

### 输入

| 输入值    | 输入值类型         | 必填/默认值   | 输入值说明     |
| --------- | ------------------ | ------------- | -------------- |
| `options` | `TypeAwareOptions` | 否，默认 `{}` | 类型感知开关。 |

### 返回

| 返回值    | 返回值类型 | 返回值说明                                                       |
| --------- | ---------- | ---------------------------------------------------------------- |
| `configs` | `string[]` | 与现代基准的 recommendedTypeChecked 对应的 Legacy extends 名称。 |

## `createTypeScriptConfig`

创建 TypeScript 配置。

本地 JavaScript 规则继续覆盖 TS 文件，再由 typescript-eslint 替代规则关闭不理解类型语法的核心实现。

### 签名

```ts
export const createTypeScriptConfig = (options: TypeScriptConfigOptions = {}, files: readonly string[] = options.files ?? GLOBS_TYPESCRIPT): TypeScriptConfigOverride;
```

### 示例

```js
const { createTypeScriptConfig } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		createTypeScriptConfig({}),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型                | 必填/默认值                                  | 输入值说明                                              |
| --------- | ------------------------- | -------------------------------------------- | ------------------------------------------------------- |
| `options` | `TypeScriptConfigOptions` | 否，默认 `{}`                                | TypeScript 文件范围与类型感知 parser 选项。             |
| `files`   | `readonly string[]`       | 否，默认 `options.files ?? GLOBS_TYPESCRIPT` | 可覆盖 `options.files` 的显式文件范围，供框架配置复用。 |

### 返回

| 返回值    | 返回值类型                 | 返回值说明                                                              |
| --------- | -------------------------- | ----------------------------------------------------------------------- |
| `configs` | `TypeScriptConfigOverride` | 包含 parser、extends、parserOptions 与完整本地规则记录的单个 override。 |

## `createTypeScriptConfigs`

将 包装为组合器使用的 override 数组。

### 签名

```ts
export const createTypeScriptConfigs = (options: TypeScriptConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createTypeScriptConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createTypeScriptConfigs({ typeChecked: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型                | 必填/默认值   | 输入值说明                          |
| --------- | ------------------------- | ------------- | ----------------------------------- |
| `options` | `TypeScriptConfigOptions` | 否，默认 `{}` | TypeScript 文件范围与 parser 选项。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                                |
| --------- | ------------------------- | ----------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 始终包含一个 TypeScript override 的数组。 |

## `createTypeScriptDeclarationConfigs`

创建 TypeScript 声明文件兼容 override。

声明文件允许未使用的公共符号和仅用于全局扩展的类型导入，因此关闭普通源码中用于
清理实现细节的 unused 与 type-import 规则。该 override 应位于普通 TypeScript 配置之后。

### 签名

```ts
export const createTypeScriptDeclarationConfigs = (): Linter.ConfigOverride[];
```

### 示例

```js
const { createTypeScriptDeclarationConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createTypeScriptDeclarationConfigs(),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                | 返回值说明                                           |
| --------- | ------------------------- | ---------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 匹配 `.d.ts`、`.d.cts` 与 `.d.mts` 的单个 override。 |

## `createTypeAwareConfigs`

创建可叠加在任意 TypeScript、React、Angular 或 Vue 配置之后的类型感知片段。

Project Service 会从被检查文件向上寻找最近的 tsconfig；复杂 monorepo 可以在自己的
`.eslintrc` override 中补充 `parserOptions.tsconfigRootDir`。
TypeScript/TSX 与 Vue SFC 使用独立 parser 链，避免 Vue 模板被 TypeScript parser 误读。

### 签名

```ts
export const createTypeAwareConfigs = (): Linter.ConfigOverride[];
```

### 示例

```js
const { createTypeAwareConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createTypeAwareConfigs(),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

该方法没有输入参数。

### 返回

| 返回值    | 返回值类型                | 返回值说明                                                    |
| --------- | ------------------------- | ------------------------------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 依次覆盖 TypeScript 方言与 Vue SFC 的两个类型感知 overrides。 |

## `createVueConfigs`

创建 Vue 2/3 单文件组件配置。

`vue-eslint-parser` 始终负责模板；TypeScript 启用时再通过 `parserOptions.parser` 解析
script，并应用 TypeScript 核心替代规则。Vue common 规则在 upstream preset 之后应用，
最后追加 Vue 主版本专属规则。

### 签名

```ts
export const createVueConfigs = ({
	files = [GLOB_VUE],
	typeChecked = false,
	tsconfigRootDir,
	typescript = true,
	version = 3,
}: VueConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createVueConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createVueConfigs({ version: 3, typescript: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型         | 必填/默认值   | 输入值说明                                        |
| --------- | ------------------ | ------------- | ------------------------------------------------- |
| `options` | `VueConfigOptions` | 否，默认 `{}` | Vue 主版本、文件范围、TypeScript 与类型感知选项。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                            |
| --------- | ------------------------- | ------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 匹配 Vue SFC 的单个 Legacy override。 |

## `createYamlConfigs`

创建 YAML 解析、推荐规则与可选 Prettier 兼容配置。

### 签名

```ts
export const createYamlConfigs = ({ prettier = true }: YamlConfigOptions = {}): Linter.ConfigOverride[];
```

### 示例

```js
const { createYamlConfigs } = require("@fast-china/eslint-config-legacy/configs");

module.exports = {
	root: true,
	overrides: [
		...createYamlConfigs({ prettier: true }),
		{
			files: ["src/**/*.{js,ts,vue}"],
			rules: {
				"no-console": "warn",
			},
		},
	],
};
```

### 输入

| 输入值    | 输入值类型          | 必填/默认值   | 输入值说明            |
| --------- | ------------------- | ------------- | --------------------- |
| `options` | `YamlConfigOptions` | 否，默认 `{}` | Prettier 兼容层开关。 |

### 返回

| 返回值    | 返回值类型                | 返回值说明                               |
| --------- | ------------------------- | ---------------------------------------- |
| `configs` | `Linter.ConfigOverride[]` | 匹配 `.yaml` 与 `.yml` 的单个 override。 |
