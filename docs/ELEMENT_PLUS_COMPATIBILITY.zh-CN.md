# Element Plus 兼容性与升级核对

## 项目定位

Fast.Element.Plus 是正式开源的 Fast 系列业务 SDK，面向 Fast 团队以及认同 Fast 团队编码与交互约定的开发者。它基于 Element Plus 提供约定式默认值、远程数据、表格、上传、弹窗等业务能力，但不承诺可以无差异替代 Element Plus 原生组件。

项目会保留对 Element Plus 默认 Props 和 `ElMessageBox.alert`、`ElMessageBox.confirm`、`ElMessageBox.prompt` 单例方法的团队化增强。这些增强在导入 Fast.Element.Plus 根入口时应用，属于 SDK 运行时契约。

## 当前审计基线

- Element Plus：`2.14.x`，当前开发版本为 `2.14.5`。
- Vue：`3.5.x`，当前开发版本为 `3.5.41`。

## 升级规则

Element Plus 版本采用 `主版本.次版本.修订版本`：

- 修订版本变化，例如 `2.14.5` 升级到 `2.14.6`：必须执行完整检查，并核对 Element Plus Changelog 中涉及当前组件的内容。
- 次版本号变化，即中间位变化，例如 `2.14.x` 升级到 `2.15.x` 或更高：必须执行本页全部人工核对，不能只更新依赖和锁文件。
- 主版本变化，例如 `2.x` 升级到 `3.x`：视为完整兼容性迁移，需要单独版本方案和迁移文档。

## 必查内容

对下列封装逐项核对 Element Plus 原生 Props、Emits、Slots 和 Expose：

| Fast 组件                                     | Element Plus 基础组件      |
| --------------------------------------------- | -------------------------- |
| `FaAvatar`                                    | `ElAvatar`                 |
| `FaButton`                                    | `ElButton`                 |
| `FaDialog`                                    | `ElDialog`                 |
| `FaDrawer`                                    | `ElDrawer`                 |
| `FaForm`                                      | `ElForm`                   |
| `FaImage`                                     | `ElImage`                  |
| `FaSelect`、`FaSelectPage`                    | `ElSelect`                 |
| `FaSelectV2`                                  | `ElSelectV2`               |
| `FaTable`、`FaTableColumn`                    | `ElTable`、`ElTableColumn` |
| `FaTree`                                      | `ElTree`                   |
| `FaTreeSelect`                                | `ElTreeSelect`             |
| `FaUpload`、`FaUploadImage`、`FaUploadImages` | `ElUpload`                 |

核对要求：

1. 新增的原生 Prop 是否需要透传、覆盖默认值或明确不支持。
2. 删除或重命名的原生 Prop 是否仍残留在本仓库手工定义中。
3. 原生 Emit 的名称、参数和触发时机是否变化；业务事件是否会重复触发。
4. 原生 Slot 的名称和作用域参数是否变化；封装是否丢失作用域数据。
5. 原生 Expose 方法是否新增、删除或变更签名。
6. `setPropsDefaults` 支持的组件和默认值是否仍有效。
7. `ElMessageBox` 快捷方法重载与 `beforeClose` 行为是否变化。
8. `ElInput` 的 `clearable` 是否在空值时渲染并占用后缀空间。
9. SCSS 使用的 `.el-*` 内部结构和 CSS 变量是否变化。
10. TypeScript 声明、根导出、CDN 构建和 Tree Shaking 是否正常。

## 建议流程

1. 阅读目标版本 Changelog 和相关组件文档。
2. 更新 `peerDependencies`、`devDependencies` 和锁文件。
3. 对照 Element Plus 类型声明，记录新增或缺失的 Props、Emits、Slots 和 Expose。
4. 人工核对 Slots、Expose、默认值、事件时序和内部样式结构。
5. 为行为变化增加组件测试，并更新 API、运行时契约和 Changelog。
6. 执行 `pnpm check` 和发布包内容检查。
7. 最后更新本文的审计基线。

业务封装可以有意改变 Element Plus 默认值、事件语义或交互方式，但必须在公开类型和文档中明确，不得因为依赖升级而无意缺失或保留已经失效的原生能力。
