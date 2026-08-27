# Fast.Element.Plus runtime contract / 运行时契约

## Runtime and package contract

- Runtime platforms: ES2022 modern browsers and WebViews running Vue `^3.5.41` and Element Plus `^2.14.5`.
- Package format: one public named-export ESM entry for package managers and one separately minified IIFE entry for CDN use; CommonJS and UMD are not shipped.
- Public paths: `fast-element-plus`, `fast-element-plus/global`, and `fast-element-plus/style.css` are the complete public export list.
- Dependency boundary: Vue, Element Plus, Element Plus Icons, and Fast.Element.Plus.Icons remain application-provided peers. Declared runtime dependencies remain external in ESM and are installed by the package manager; the CDN IIFE bundles them for direct browser use. Component-only utilities are bundled and are not public package dependencies.
- Publishing: the repository root is the only package, `dist/` is the only build output, and `package.json#exports` is the complete public path whitelist.
- Styles: Fast.Element.Plus styles are explicit and side-effectful. Applications import them once; Element Plus styles remain separate. Dark mode follows Element Plus `html.dark` and requires its official dark CSS Variables.
- Browser APIs: directives and hooks that use DOM, Clipboard, Fullscreen, timers, or global UI state may only be called in a browser document.

Importing the package does not itself show overlays, start fullscreen operations, copy data, upload files, or access application credentials. It does apply the documented Fast Element Plus default Props and enhance the three `ElMessageBox` shortcut singleton methods. Calling `app.use(FastElementPlus)` additionally registers Element Plus, both icon sets, Fast.Element.Plus components, and directives.

Fast.Element.Plus is a Fast business SDK rather than a drop-in Element Plus replacement. Element Plus minor-version upgrades require the audit in `ELEMENT_PLUS_COMPATIBILITY.md`.

The desktop layout is the default. Fast styles provide phone rules below `768px` and tablet rules from `768px` through `1199px`. Responsive behavior may intentionally change component width, column count, control arrangement, pagination detail, and touch-target size without changing business data semantics.

### Fast Element Plus defaults

| Component       | Intentional defaults                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| `ElDialog`      | `draggable: true`                                                             |
| `ElForm`        | `labelWidth: "auto"`, `labelSuffix: "："`, `scrollToError: true`              |
| `ElInput`       | `showWordLimit: true`                                                         |
| `ElInputNumber` | `controls: false`                                                             |
| `ElSelect`      | Chinese loading/empty text, `collapseTags: true`, `collapseTagsTooltip: true` |
| `ElTable`       | `border: true`, `highlightCurrentRow: true`, `rowKey: "id"`                   |
| `ElTree`        | `defaultExpandAll: true`, `checkOnClickNode: true`, `highlightCurrent: true`  |
| `ElTreeSelect`  | Select and Tree defaults above, plus `expandOnClickNode: false`               |

The three MessageBox shortcuts default to the title `温馨提示`, Chinese action labels, draggable behavior, and no modal-click or Escape close. Confirm and prompt show Cancel, prompt shows the input, and a supplied `beforeClose` uses the Fast loading overlay while the confirm branch is pending. The box closes by default after the callback settles.

## Public API policy

- The default export and named `install` export provide complete application installation.
- Components, directives, hooks, constants, Decimal, instance types, props, emits, slots, exposed methods, and supporting public types use named exports from the root.
- Internal component implementation modules are not public paths.
- Global component and directive declarations are isolated to the `global` type entry.
- Internal files, generated chunks, Source Maps, and CSS internals under `dist/` are implementation details.

## State and lifecycle

- Component state is instance-local unless an API explicitly documents shared page state.
- `FaDialog` and `FaDrawer` emit `open` after the Fast asynchronous opening hook resolves, and emit `close` after the Fast asynchronous closing hook resolves but before committing the close. Native `opened`, `closed`, and focus lifecycle events remain forwarded from Element Plus.
- `useLoading` and `useOverlay` own one page-global DOM element and mirror visibility on `window.loading` and `window.overlay`.
- `useScreenFull` mirrors the browser fullscreen state, provides idempotent initialization and disposal, and reports unsupported environments through Element Plus messages.
- Directive event listeners and third-party instances must be released during Vue unmount.
- Installing the complete plugin twice into the same Vue application is a no-op.

## 运行时与包契约

- 运行平台：支持 ES2022 的现代浏览器与 WebView，并使用 Vue `^3.5.41` 和 Element Plus `^2.14.5`。
- 包格式：包管理器使用单一公开具名导出 ESM 入口，CDN 使用单独压缩的 IIFE；不发布 CommonJS 和 UMD。
- 公开路径：`fast-element-plus`、`fast-element-plus/global` 和 `fast-element-plus/style.css` 构成完整公开入口。
- 依赖边界：Vue、Element Plus、Element Plus Icons 和 Fast.Element.Plus.Icons 均由应用作为强制 Peer 提供。正式 Runtime Dependency 在 ESM 中保持外部导入并由包管理器自动安装，CDN IIFE 则将其内联以支持浏览器直接使用；组件内部工具已打包，且不构成公共依赖。
- 发布：仓库根目录是唯一 npm 包，`dist/` 是唯一构建输出，`exports` 是完整公共路径白名单。
- 样式：Fast.Element.Plus 样式是显式副作用入口，应用只导入一次；Element Plus 样式独立导入。深色模式遵循 Element Plus 的 `html.dark`，并要求应用导入其官方深色 CSS Variables。
- 浏览器 API：使用 DOM、剪贴板、全屏、计时器或全局 UI 状态的指令与 Hook 只能在浏览器文档中调用。

导入包本身不会显示遮罩、启动全屏、复制数据、上传文件或访问应用凭证，但会应用文档声明的 Fast Element Plus 默认 Props，并增强三个 `ElMessageBox` 快捷单例方法。调用 `app.use(FastElementPlus)` 还会注册 Element Plus、两套图标、Fast.Element.Plus 组件与指令。

Fast.Element.Plus 是 Fast 系列业务 SDK，不是 Element Plus 的无差异替代品。Element Plus 次版本升级必须执行 `ELEMENT_PLUS_COMPATIBILITY.zh-CN.md` 中的核对流程。

PC 是默认布局；Fast 样式为小于 `768px` 的手机和 `768px` 至 `1199px` 的平板提供响应式规则。响应式样式可以有意调整组件宽度、搜索列数、控件排列、分页信息和触控区域，但不改变业务数据语义。

### Fast Element Plus 默认值

| 组件            | 有意修改的默认值                                                             |
| --------------- | ---------------------------------------------------------------------------- |
| `ElDialog`      | `draggable: true`                                                            |
| `ElForm`        | `labelWidth: "auto"`、`labelSuffix: "："`、`scrollToError: true`             |
| `ElInput`       | `showWordLimit: true`                                                        |
| `ElInputNumber` | `controls: false`                                                            |
| `ElSelect`      | 中文加载与空数据提示、`collapseTags: true`、`collapseTagsTooltip: true`      |
| `ElTable`       | `border: true`、`highlightCurrentRow: true`、`rowKey: "id"`                  |
| `ElTree`        | `defaultExpandAll: true`、`checkOnClickNode: true`、`highlightCurrent: true` |
| `ElTreeSelect`  | 继承上述 Select 与 Tree 默认值，并设置 `expandOnClickNode: false`            |

三个 MessageBox 快捷方法默认使用标题“温馨提示”、中文操作按钮、可拖拽交互，并禁止点击遮罩或按 Escape 关闭；Confirm 与 Prompt 显示取消按钮，Prompt 显示输入框。传入 `beforeClose` 时，确认分支执行期间使用 Fast 加载遮罩，回调完成后默认关闭。

`FaDialog` 与 `FaDrawer` 在 Fast 异步打开钩子完成后触发 `open`，在 Fast 异步关闭钩子完成且正式关闭前触发 `close`；原生 `opened`、`closed` 和焦点生命周期事件继续从 Element Plus 透传。

默认导出和具名 `install` 用于完整安装；组件、指令、Hook、常量、Decimal、实例类型、Props、Emits、Slots、公开方法和辅助类型统一从根入口具名导出。内部实现模块不是公共路径。
