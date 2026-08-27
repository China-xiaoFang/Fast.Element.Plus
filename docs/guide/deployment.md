# 发布文档站

本站使用 VitePress 构建，生成纯静态 HTML、CSS 和 JavaScript，可以部署到任意静态文件服务。

## 本地开发

```bash
pnpm docs:dev
```

默认访问地址为 `http://localhost:5173`，修改 Markdown、Vue 案例或组件源码后会自动更新。

## 构建与预览

```bash
pnpm docs:build
pnpm docs:preview
```

构建产物位于 `docs/.vitepress/dist`。预览命令默认在 `http://localhost:4173` 启动静态服务。

## 部署参数

在 Vercel、Netlify、Cloudflare Pages 或其他静态托管平台配置：

| 配置项   | 值                               |
| -------- | -------------------------------- |
| 安装命令 | `pnpm install --frozen-lockfile` |
| 构建命令 | `pnpm docs:build`                |
| 输出目录 | `docs/.vitepress/dist`           |
| Node.js  | `22.18.0` 或兼容版本             |

部署到独立域名或站点根路径时不需要修改配置。部署到 `/fast-element-plus/` 这类子路径时，在构建命令中传入：

```bash
pnpm docs:build --base /fast-element-plus/
```

Nginx、对象存储或 CDN 只需要发布整个 `docs/.vitepress/dist` 目录。启用 `cleanUrls` 后，静态服务应支持目录式或无扩展名路由回退。
