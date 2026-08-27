**中文** | [English](./README.md)

<h1 align="center">Fast.Element.Plus</h1>

<p align="center">
	基于 Element Plus 构建的 Vue 3 类型化业务组件、指令与 Hook。
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/fast-element-plus"><img src="https://img.shields.io/npm/v/fast-element-plus?color=orange" alt="npm 版本" /></a>
	<a href="https://gitee.com/FastDotnet/fast.element.plus/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/fast-element-plus" alt="开源协议" /></a>
</p>

Fast.Element.Plus 是正式开源的 Fast 系列业务 SDK，面向 Fast 团队以及认同 Fast 团队编码与交互约定的开发者。它提供表单、选择器、表格、树、上传、布局、对话框、抽屉、图片、图标等约定式组件，以及可安装指令、浏览器 UI Hook、共享常量、全局组件类型和完整的 `app.use()` 插件。

本 SDK 基于 Element Plus 进行业务增强，不承诺无差异替代 Element Plus 原生组件。部分默认 Props、事件语义、远程数据流程和交互行为会遵循 Fast 团队约定。

## 环境要求

- 支持 ES2022 的现代浏览器或 WebView。
- Vue `^3.5.41`。
- Element Plus `^2.14.5`。
- Element Plus Icons `^2.3.2`。
- Fast.Element.Plus.Icons `^2.0.0`。

Vue、Element Plus、Element Plus Icons 和 Fast.Element.Plus.Icons 均为强制 Peer Dependency。两套图标包保持在构建产物之外，组件内部工具包含在 Fast.Element.Plus 构建产物中。

当前 Element Plus 人工审计基线为 `2.14.x`。当 Element Plus 次版本号发生变化，例如由 `2.14.x` 升级到 `2.15.x` 或更高时，必须重新核对封装涉及的原生 Props、Emits、Slots、Expose、默认值和内部样式结构，详见 [Element Plus 兼容性与升级核对](./docs/ELEMENT_PLUS_COMPATIBILITY.zh-CN.md)。

## 安装

```bash
pnpm add fast-element-plus vue element-plus @element-plus/icons-vue @fast-element-plus/icons-vue
```

## 使用

注册完整组件库：

```ts
import { createApp } from "vue";
import "element-plus/dist/index.css";
import FastElementPlus from "fast-element-plus";
import "fast-element-plus/style.css";
import App from "./App.vue";

createApp(App).use(FastElementPlus).mount("#app");
```

### 主题与响应式

Fast.Element.Plus 使用 Element Plus CSS Variables，并兼容其官方 `html.dark` 深色模式。需要深色模式时，在 Fast 样式之前额外导入官方深色变量：

```ts
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "fast-element-plus/style.css";

document.documentElement.classList.toggle("dark", isDark);
```

基础样式以 PC 为默认布局，并为手机（小于 `768px`）和平板（`768px` 至 `1199px`）提供弹窗、抽屉、表格、搜索表单、分页、树、选择器和上传区域的响应式规则。业务应用可通过 Element Plus CSS Variables 调整品牌色、表面、边框、阴影和间距。

也可以使用具名 API，由应用自行控制注册范围：

```ts
import { FaButton, FaTable, useOverlay, vCopy } from "fast-element-plus";

app.use(FaButton);
app.use(FaTable);
app.directive("copy", vCopy);

useOverlay.show();
```

如需全局组件和指令类型，在应用 `tsconfig.json` 中加入包类型入口：

```jsonc
{
	"compilerOptions": {
		"types": ["element-plus/global", "fast-element-plus/global"],
	},
}
```

## 公开模块

| 模块 | 公开 API                                                                                                                                                                                                                                                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 组件 | `FaAvatar`、`FaButton`、`FaCarNumber`、`FaContextMenu`、`FaDialog`、`FaDrawer`、`FaForm`、`FaFormItem`、`FaFormItemTip`、`FaIcon`、`FaIconSelector`、`FaImage`、`FaInputDialogPage`、`FaLayoutGrid`、`FaLayoutGridItem`、`FaSelect`、`FaSelectOption`、`FaSelectPage`、`FaSelectV2`、`FaTable`、`FaTableColumn`、`FaTree`、`FaTreeSelect`、`FaUpload`、`FaUploadImage`、`FaUploadImages` |
| 指令 | `vCopy`、`vDebounce`、`vDraggable`、`vIconCopy`、`vLongpress`、`vThrottle`                                                                                                                                                                                                                                                                                                               |
| Hook | `useLoading`、`useOverlay`、`useScreenFull`                                                                                                                                                                                                                                                                                                                                              |
| 常量 | `FaMimeType`、`RegExps`                                                                                                                                                                                                                                                                                                                                                                  |
| 工具 | `Decimal`、`install`、`version`、`FastElementPlus` 组件命名空间                                                                                                                                                                                                                                                                                                                          |

包根入口是唯一 JavaScript API 入口；`fast-element-plus/global` 提供 Vue 全局声明，`fast-element-plus/style.css` 提供组件样式。`dist/` 下的其他文件均为实现细节。

## CDN

`unpkg` 和 `jsdelivr` 字段都指向 `dist/index.global.min.js`。页面先加载 Vue、Element Plus、Element Plus Icons 和 Fast.Element.Plus.Icons，再通过 `globalThis.FastElementPlus` 访问组件库。样式需单独加载 `dist/index.css`。

## 文档

- [组件文档与交互案例](./docs/components/overview.md)
- [安装与使用](./docs/guide/installation.md)
- [文档站构建与部署](./docs/guide/deployment.md)
- [API 参考](./docs/API.zh-CN.md)
- [运行时契约](./docs/RUNTIME_CONTRACT.md)
- [Element Plus 兼容性与升级核对](./docs/ELEMENT_PLUS_COMPATIBILITY.zh-CN.md)
- [开发与发布指南](./docs/DEVELOPMENT_RELEASE.zh-CN.md)
- [贡献指南](./CONTRIBUTING.md)
- [安全策略](./SECURITY.md)
- [更新日志](./CHANGELOG.md)

本地运行完整文档站：

```bash
pnpm docs:dev
```

## 开源协议

[Apache-2.0](./LICENSE)
