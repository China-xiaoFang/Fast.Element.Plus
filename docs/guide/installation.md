# 安装与使用

Fast.Element.Plus 面向 Fast 系列内部业务项目以及采用相同编码约定的开发者。它是正式开源 SDK，但不承诺稳定兼容，也不承诺无差异替代 Element Plus。

## 环境要求

- Node.js `^22.18.0 || ^24.18.0`
- pnpm `^11.0.0`
- Vue `^3.5.41`
- Element Plus `^2.14.5`

## 安装

```bash
pnpm add fast-element-plus element-plus @element-plus/icons-vue @fast-element-plus/icons-vue
```

## 完整引入

```ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import FastElementPlus from "fast-element-plus";
import "element-plus/dist/index.css";
import "fast-element-plus/style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(FastElementPlus);
app.mount("#app");
```

`FastElementPlus.install` 已包含 Element Plus 与两套图标的注册，因此业务项目也可以只调用 `app.use(FastElementPlus)`。显式安装 Element Plus 便于阅读项目入口，两种方式不会重复注册 Fast 组件。

## 按需导入

```vue
<script setup lang="ts">
import { FaButton, FaTable, FaTableColumn } from "fast-element-plus";
import "element-plus/dist/index.css";
import "fast-element-plus/style.css";
</script>
```

导入根入口会立即应用 Fast 团队对 Element Plus 默认 Props 和 `ElMessageBox` 单例方法的增强，这是当前 SDK 的公开运行时契约。

## 全局类型

需要模板全局组件和指令提示时，在应用的 `tsconfig.json` 中增加：

```json
{
	"compilerOptions": {
		"types": ["element-plus/global", "fast-element-plus/global"]
	}
}
```

下一步可阅读[设计约定](./conventions)，了解 Fast 封装与 Element Plus 原生行为的差异。
