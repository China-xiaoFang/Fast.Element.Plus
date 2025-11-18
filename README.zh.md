**中** | [En](https://github.com/China-xiaoFang/Fast.Element.Plus)

<h1 align="center">Fast.Element.Plus</h1>

<p align="center">
  <code>Fast</code> 平台下基于 <code>Vue3</code>，<code>Vite</code>，<code>TypeScript</code>，<code>Element Plus</code> 构建的组件库。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/fast-element-plus">
    <img src="https://img.shields.io/npm/v/fast-element-plus?color=orange&label=" alt="version" />
  </a>
  <a href="https://gitee.com/FastDotnet/Fast.Element.Plus/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/fast-element-plus" alt="license" />
  </a>
</p>

## 前言

#### 为什么又会基于 `Element Plus` 去封装一层组件库呢？

  > **前人栽树 后人乘凉**
  > 因为本人技术有限，导致只能站在巨人的肩膀上去遥望远方。（说白了就是菜）
  > **开发效率**
  > 因为在实际的业务开发中，单纯的 `Element Plus` 组件库如果直接使用的话效率会很低。*（但是我并没有说 `Element Plus` 不好用）*
  > **适合的封装**
  > 相反，恰恰是因为它好用，所以我才进行了封装，使其对于我来说，或者说对于我们这些每天只会 `CRUD` 的 `工程师/开发者` 来说，才是最合适的，开发效率最快的。

## 安装

#### 站在巨人肩膀上 <a href="https://github.com/element-plus/element-plus">`Element Plus`</a>

```
因框架依赖 Element Plus，所以需要同时安装 Element Plus 才可正常使用。
```

#### 使用包管理器

```sh
# 选择一个你喜欢的包管理器

# NPM
npm install fast-element-plus

# Yarn
yarn add fast-element-plus

# pnpm（推荐）
pnpm install fast-element-plus
```

#### 浏览器直接引入

##### unpkg

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- 导入 Element Plus 组件库 -->
  <script src="//unpkg.com/element-plus"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/fast-element-plus"></script>
</head>
```

##### jsDelivr

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- 导入 Element Plus 组件库 -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
  <!-- 导入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/fast-element-plus"></script>
</head>
```

## 使用

在 `main.ts`

```typescript
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import FastElementPlus from "fast-element-plus";
import App from "./App.vue";

const app = createApp(App);

// 全局注册
app.use(FastElementPlus);

app.mount('#app');
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
{
  "compilerOptions": {
    // ...
    "types": ["fast-element-plus/global"]
  }
}
```

## 更新日志

更新日志 [点击查看](https://gitee.com/FastDotnet/Fast.Element.Plus/commits/master)

## 协议

[Fast.Element.Plus](https://gitee.com/FastDotnet/Fast.Element.Plus) 遵循 [Apache-2.0](https://gitee.com/FastDotnet/Fast.Element.Plus/blob/master/LICENSE) 开源协议，欢迎大家提交 `PR` 或 `Issue`。

```
Apache开源许可证

版权所有 © 2018-Now 小方

许可授权：
本协议授予任何获得本软件及其相关文档（以下简称“软件”）副本的个人或组织。
在遵守本协议条款的前提下，享有使用、复制、修改、合并、发布、分发、再许可、销售软件副本的权利：
1.所有软件副本或主要部分必须保留本版权声明及本许可协议。
2.软件的使用、复制、修改或分发不得违反适用法律或侵犯他人合法权益。
3.修改或衍生作品须明确标注原作者及原软件出处。

特别声明：
- 本软件按“原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于对适销性、适用性和非侵权的保证。
- 在任何情况下，作者或版权持有人均不对因使用或无法使用本软件导致的任何直接或间接损失的责任。
- 包括但不限于数据丢失、业务中断等情况。

免责条款：
禁止利用本软件从事危害国家安全、扰乱社会秩序或侵犯他人合法权益等违法活动。
对于基于本软件二次开发所引发的任何法律纠纷及责任，作者不承担任何责任。
```

## 免责申明

```
请勿用于违反我国法律的项目上
```

## 贡献者

感谢他们的所做的一切贡献！

<a href="https://github.com/China-xiaoFang/Fast.Element.Plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=China-xiaoFang/Fast.Element.Plus" />
</a>

## 补充说明

```
如果对您有帮助，您可以点右上角 ⭐Star 收藏一下 ，获取第一时间更新，谢谢！
```
