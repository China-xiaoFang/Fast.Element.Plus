# Fast.Vite.Plugins 方法 API

本文逐项记录 `fast-vite-plugins` 2.0.15 根入口的 13 个公开插件方法。选项字段的完整默认值与分支说明继续参见[详细 API](./api)。

## `buildInfo`

在构建产物中生成版本信息 JSON，同时提供开发地址和虚拟模块。
插件只读取版本清单，不会在构建过程中改写 package.json。

### 签名

```ts
export function buildInfo(options: BuildInfoPluginOptions = {}): Plugin;
```

### 示例

```ts
import { buildInfo } from "fast-vite-plugins";

const plugin = buildInfo({ fileName: "meta/build-info.json", version: "1.2.3" });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型               | 必填/默认值   | 输入值说明                                   |
| --------- | ------------------------ | ------------- | -------------------------------------------- |
| `options` | `BuildInfoPluginOptions` | 否，默认 `{}` | 版本来源、输出文件、开发端点和虚拟模块配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的构建信息插件。 |

## `bundleBudget`

为 Vite 构建增加可执行的产物体积预算。

与 Vite 自带的 chunk 警告不同，本插件可检查任意产物、合计多个文件、使用真实压缩
体积，并在 CI 中让超限构建失败。插件只在生产构建运行。

### 签名

```ts
export function bundleBudget(options: BundleBudgetPluginOptions): Plugin;
```

### 示例

```ts
import { bundleBudget } from "fast-vite-plugins";

const plugin = bundleBudget({ budgets: [{ name: "entry", filter: /\.js$/, limit: 250 * 1024 }] });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                  | 必填/默认值 | 输入值说明               |
| --------- | --------------------------- | ----------- | ------------------------ |
| `options` | `BundleBudgetPluginOptions` | 是          | 预算规则及超限处理方式。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的构建体积预算插件。 |

## `cdnImport`

将指定依赖替换为 CDN 全局变量，并按依赖顺序向 HTML 注入 CSS 与 JavaScript。

### 签名

```ts
export function cdnImport(options: CdnImportPluginOptions): Plugin;
```

### 示例

```ts
import { cdnImport } from "fast-vite-plugins";

const plugin = cdnImport({ modules: { name: "vue", global: "Vue", version: "3.5.11", js: "dist/vue.global.prod.js" } });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型               | 必填/默认值 | 输入值说明                                     |
| --------- | ------------------------ | ----------- | ---------------------------------------------- |
| `options` | `CdnImportPluginOptions` | 是          | CDN 模块、版本解析、开发模式、SSR 与标签配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                  |
| -------- | ---------- | ------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的 CDN 导入插件。 |

## `componentRegistry`

扫描 Vue/TSX/JSX 组件，并生成命名导出、实例类型、全局注册方法和全局组件类型。

### 签名

```ts
export function componentRegistry(options: ComponentRegistryPluginOptions = {}): Plugin;
```

### 示例

```ts
import { componentRegistry } from "fast-vite-plugins";

const plugin = componentRegistry({ dirs: ["src/components"], output: "src/components/index.ts" });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                       | 必填/默认值   | 输入值说明                                 |
| --------- | -------------------------------- | ------------- | ------------------------------------------ |
| `options` | `ComponentRegistryPluginOptions` | 否，默认 `{}` | 扫描目录、输出文件、过滤、命名和冲突策略。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的组件入口生成插件。 |

## `compression`

为构建产物生成 `.gz` / `.br` 预压缩文件，适合 Nginx、Caddy 与对象存储直接提供静态压缩资源。

### 签名

```ts
export function compression(options: CompressionPluginOptions = {}): Plugin;
```

### 示例

```ts
import { compression } from "fast-vite-plugins";

const plugin = compression({ algorithms: ["gzip", "brotli"], threshold: 1024 });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                 | 必填/默认值   | 输入值说明                                   |
| --------- | -------------------------- | ------------- | -------------------------------------------- |
| `options` | `CompressionPluginOptions` | 否，默认 `{}` | 压缩算法、阈值、收益率、过滤器和编码器选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的预压缩插件。 |

## `devRestart`

在外部配置、代码生成输入或 monorepo 共享文件变化时重启 Vite 开发服务器。

Vite 已经原生监听 vite.config 与 `.env`，无需重复配置这些文件。本插件适用于 Vite
模块图之外、但会影响插件初始化结果的文件。生产构建不会注册任何监听器。

### 签名

```ts
export function devRestart(options: DevRestartPluginOptions): Plugin;
```

### 示例

```ts
import { devRestart } from "fast-vite-plugins";

const plugin = devRestart({ paths: ["schema", "config/features.json"], debounce: 100 });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                | 必填/默认值 | 输入值说明                                   |
| --------- | ------------------------- | ----------- | -------------------------------------------- |
| `options` | `DevRestartPluginOptions` | 是          | 监听路径、防抖、依赖预构建和重启前钩子配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `plugin` | `Plugin`   | 仅在开发服务器中生效的 Vite 重启插件。 |

## `envGuard`

在 Vite 启动和构建前校验环境变量，尽早暴露缺失配置。

### 签名

```ts
export function envGuard(options: EnvGuardPluginOptions): Plugin;
```

### 示例

```ts
import { envGuard } from "fast-vite-plugins";

const plugin = envGuard({ schema: { VITE_API_URL: { required: true, pattern: /^https:\/\// } } });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型              | 必填/默认值 | 输入值说明                                |
| --------- | ----------------------- | ----------- | ----------------------------------------- |
| `options` | `EnvGuardPluginOptions` | 是          | 环境变量 schema、跳过模式和失败处理方式。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的环境变量校验插件。 |

## `htmlTemplate`

注入 HTML 模板数据与 Vite `HtmlTagDescriptor` 标签。

### 签名

```ts
export function htmlTemplate(options: HtmlTemplatePluginOptions): Plugin;
```

### 示例

```ts
import { htmlTemplate } from "fast-vite-plugins";

const plugin = htmlTemplate({ data: { APP_TITLE: "Fast Admin" }, strict: true });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                  | 必填/默认值 | 输入值说明                               |
| --------- | --------------------------- | ----------- | ---------------------------------------- |
| `options` | `HtmlTemplatePluginOptions` | 是          | 模板数据、附加标签、转义与严格模式配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                   |
| -------- | ---------- | -------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的 HTML 模板插件。 |

## `routerMeta`

为路由缓存、KeepAlive 或权限配置生成页面文件路径与稳定组件名的 JSON 映射。

### 签名

```ts
export function routerMeta(options: RouterMetaPluginOptions = {}): Plugin;
```

### 示例

```ts
import { routerMeta } from "fast-vite-plugins";

const plugin = routerMeta({ dir: "src/views", output: "src/router/routes.generated.json" });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                | 必填/默认值   | 输入值说明                                    |
| --------- | ------------------------- | ------------- | --------------------------------------------- |
| `options` | `RouterMetaPluginOptions` | 否，默认 `{}` | 页面扫描、命名、路径键、JSON 输出和监听配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                       |
| -------- | ---------- | ------------------------------------------------ |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的路由元数据生成插件。 |

## `staticCopy`

在 Vite 写出构建产物后复制许可证、robots.txt 或其他静态目录。

### 签名

```ts
export function staticCopy(options: StaticCopyPluginOptions): Plugin;
```

### 示例

```ts
import { staticCopy } from "fast-vite-plugins";

const plugin = staticCopy({ targets: [{ src: "public/robots.txt", dest: "meta/robots.txt" }] });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                | 必填/默认值 | 输入值说明                         |
| --------- | ------------------------- | ----------- | ---------------------------------- |
| `options` | `StaticCopyPluginOptions` | 是          | 复制目标及源路径缺失时的处理方式。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的静态复制插件。 |

## `subresourceIntegrity`

为 Vite 最终 JavaScript/CSS 产物生成 SRI，并更新构建后的 HTML 入口。

插件在输出阶段末尾运行；若同时使用预压缩插件，应把本插件放在压缩插件之前，使
`.gz` / `.br` HTML 与注入后的原文件保持一致。

### 签名

```ts
export function subresourceIntegrity(options: SubresourceIntegrityPluginOptions = {}): Plugin;
```

### 示例

```ts
import { subresourceIntegrity } from "fast-vite-plugins";

const plugin = subresourceIntegrity({ algorithms: ["sha384"], manifest: "meta/integrity.json" });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                          | 必填/默认值   | 输入值说明                                           |
| --------- | ----------------------------------- | ------------- | ---------------------------------------------------- |
| `options` | `SubresourceIntegrityPluginOptions` | 否，默认 `{}` | 摘要算法、资源过滤、CORS、覆盖、清单和严格模式配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                |
| -------- | ---------- | --------------------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的 Subresource Integrity 插件。 |

## `svgIcons`

将 SVG 目录编译为独立的 Vue 图标组件与根索引。

生成组件通过 `defineComponent` 与内联 SVG JSX 渲染，消费项目需要启用 Vue JSX/TSX 转换。

### 签名

```ts
export function svgIcons(options: SvgIconsPluginOptions = {}): Plugin;
```

### 示例

```ts
import { svgIcons } from "fast-vite-plugins";

const plugin = svgIcons({ dir: "src/assets/icons", output: "src/icons/index.ts" });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型              | 必填/默认值   | 输入值说明                                   |
| --------- | ----------------------- | ------------- | -------------------------------------------- |
| `options` | `SvgIconsPluginOptions` | 否，默认 `{}` | SVG 目录、输出文件、命名、过滤和根属性配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                      |
| -------- | ---------- | ----------------------------------------------- |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的 SVG 图标生成插件。 |

## `virtualModules`

使用对象声明虚拟模块。

生成内容必须是合法 ESM 源码。消费项目应为每个公开模块 ID 提供相应的 `declare module`
声明，示例见 API 文档。

### 签名

```ts
export function virtualModules(options: VirtualModulesPluginOptions): Plugin;
```

### 示例

```ts
import { virtualModules } from "fast-vite-plugins";

const plugin = virtualModules({ modules: { "virtual:app-config": 'export default { name: "Fast" }' } });

export default { plugins: [plugin] };
```

### 输入

| 输入值    | 输入值类型                    | 必填/默认值 | 输入值说明                               |
| --------- | ----------------------------- | ----------- | ---------------------------------------- |
| `options` | `VirtualModulesPluginOptions` | 是          | 公开虚拟模块 ID 与静态或动态源码的映射。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `plugin` | `Plugin`   | 可直接加入 Vite `plugins` 的虚拟模块插件。 |
