# Fast.Element.Plus API

Fast.Element.Plus 提供一个具名导出的 ESM 根入口、一个 Vue 全局类型入口和一个样式入口。所有公开 JavaScript API 均从 `fast-element-plus` 导入；`dist/` 内部路径不是公共入口。

这是遵循 Fast 团队约定的业务 SDK，不是 Element Plus 原生组件的无差异替代品。封装可以有意改变默认值、事件参数和业务流程，具体以 Fast.Element.Plus 类型与文档为准。

## 插件

```ts
import FastElementPlus, { install, version } from "fast-element-plus";
```

- 默认导出是包含 `install(app)` 和 `version` 的 Vue 插件。
- `install` 会注册 Element Plus、两套强制安装的图标、全部组件和全部指令；同一 Vue 应用重复安装不会再次注册。
- `version` 是当前包版本。
- `INSTALLED_KEY` 是完整插件用于标记 Vue 应用已完成安装的内部约定键；仅在自定义安装集成时需要使用。

导入根入口时会应用 Fast 团队约定的 Element Plus 默认 Props，并增强 `ElMessageBox.alert`、`ElMessageBox.confirm`、`ElMessageBox.prompt` 单例方法；调用 `app.use(FastElementPlus)` 还会注册 Element Plus 与两套图标。这些行为属于公开运行时契约。

Element Plus 次版本升级必须执行 [兼容性与升级核对](./ELEMENT_PLUS_COMPATIBILITY.zh-CN.md)。

## 组件

| 分类 | 组件                                                                                            | 用途                                             |
| ---- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 基础 | `FaAvatar`、`FaButton`、`FaIcon`、`FaImage`                                                     | 头像、操作、图标和图片的约定式展示行为           |
| 表单 | `FaForm`、`FaFormItem`、`FaFormItemTip`、`FaCarNumber`                                          | 表单布局、校验集成、字段提示和车牌号输入         |
| 选择 | `FaSelect`、`FaSelectOption`、`FaSelectPage`、`FaSelectV2`、`FaTreeSelect`、`FaInputDialogPage` | 本地、远程、分页、虚拟列表、树形和对话框选择     |
| 数据 | `FaTable`、`FaTableColumn`、`FaTree`                                                            | 搜索、分页、排序、列、选择、树数据和公开控制方法 |
| 浮层 | `FaContextMenu`、`FaDialog`、`FaDrawer`                                                         | 上下文操作、对话框和抽屉容器                     |
| 布局 | `FaLayoutGrid`、`FaLayoutGridItem`                                                              | 表单与表格搜索区域使用的响应式网格布局           |
| 上传 | `FaUpload`、`FaUploadImage`、`FaUploadImages`                                                   | 文件和图片选择、校验、预览与上传集成             |
| 工具 | `FaIconSelector`                                                                                | 选择 Element Plus 与 Fast.Element.Plus 图标      |

各组件适用的 Props、Emits、Slots、实例、上下文及辅助类型同样从根入口导出。组件名、Prop 名、Emit 名、公开方法和类型结构都属于公共 API。

`FaTable` 还以附属属性公开 `TableColumnsSettingDialog`、`TablePagination`、`TableSearchForm` 和 `TableSearchFormItem`。完整安装会分别注册为 `FaTableColumnsSettingDialog`、`FaTablePagination`、`FaTableSearchForm` 和 `FaTableSearchFormItem`；它们依赖 FaTable 上下文，API 统一收录在 [FaTable 文档](./components/table.md)中。

上传组件的传输实现优先级为：显式传入的原生 `httpRequest`、`uploadApi`、`uploadUrl`、非默认值的原生 `action`。使用 Fast 内置传输时会继续应用文件校验、模型同步、表单校验和团队提示；自定义 `httpRequest` 负责自身网络实现，并继续通过 Element Plus 的成功、失败和移除回调进入 Fast 状态流程。

## 组件辅助导出

`formUtil.validate(ref)` 与 `formUtil.validateScrollToField(ref)` 校验成功时 Promise 以 `true` 完成。从 `2.0.12` 起，校验失败时以 `false` 拒绝，不再以 `Error` 拒绝，需通过 `catch` 处理，并非返回一个成功完成的 `false`。实例尚未挂载时仍以 `Error` 拒绝。`FaForm.validate()`（不传回调）与 `FaForm.validateScrollToField()` 遵循相同约定；`FaForm.validate(callback)` 保持 Element Plus 原生回调行为。

| 分类         | 运行时导出                                                                                                                                                                                                                                                                                                                                                     | 用途                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Props        | `faAvatarProps`、`faButtonProps`、`faDialogProps`、`faDrawerProps`、`faFormProps`、`faFormItemProps`、`faFormItemTipProps`、`faIconProps`、`faImageProps`、`faInputDialogPageProps`、`faSelectProps`、`faSelectPageProps`、`faSelectV2Props`、`faTableProps`、`faTreeProps`、`faTreeSelectProps`、`faUploadProps`、`faUploadImageProps`、`faUploadImagesProps` | 复用组件运行时 Props 定义                   |
| Emits        | `faAvatarEmits`、`faButtonEmits`、`faDialogEmits`、`faDrawerEmits`、`faFormEmits`、`faImageEmits`、`faInputDialogPageEmits`、`faSelectPageEmits`、`faTableEmits`、`faTreeEmits`、`faTreeSelectEmits`、`faUploadEmits`、`faUploadImageEmits`、`faUploadImagesEmits`                                                                                             | 复用组件运行时 Emits 校验                   |
| 表格原生定义 | `tableProps`、`tableColumnProps`                                                                                                                                                                                                                                                                                                                               | 当前封装采用的 Element Plus 表格 Props 基线 |
| 表格工具     | `PagedSearchTypeEnum`、`getTableDefaultSlots`、`formUtil`、`tableUtil`                                                                                                                                                                                                                                                                                         | 分页条件、插槽数据和表格业务辅助能力        |
| 选择器       | `SelectV2Props`                                                                                                                                                                                                                                                                                                                                                | FaSelectV2 可复用的 Props 类型和值定义      |
| 车牌         | `CarNumberArea`、`CarNumberDigit`、`CarNumberLetter`                                                                                                                                                                                                                                                                                                           | 车牌地区、数字和字母键盘数据                |

公开类型包括各组件的 `Props`、`Emits`、`Slots`、`Instance`、`Exposes`，以及 `DefaultRow`、`ElSelectorValue`、`ElSelectorModelValue`、`ElSelectorOutput`、`ElTreeValue`、`ElTreeOutput`、`FaLayoutGridBreakPoint`、`FaTableColumnCtx`、`FaTableSearchColumnCtx`、`PagedInput`、`PagedResult` 等业务数据类型。精确字段、泛型和可空性以根入口生成的 TypeScript 声明为准。

SDK 无法预知结构的业务数据默认使用 `any`。已知模型可通过 `PagedResult<Output>`、`ElSelectorOutput<Value, Data>` 和 `ElTreeOutput<Value, Data>` 显式约束；未经验证的运行时输入、错误对象、反射结果和必须先收窄的值继续使用 `unknown`。

## 指令

| API          | 注册名称      | 行为                           |
| ------------ | ------------- | ------------------------------ |
| `vCopy`      | `v-copy`      | 点击元素后复制绑定的文本或数字 |
| `vDebounce`  | `v-debounce`  | 合并短时间内连续发生的点击调用 |
| `vDraggable` | `v-draggable` | 在父元素边界内拖动目标元素     |
| `vIconCopy`  | `v-icon-copy` | 在目标元素旁插入复制图标       |
| `vLongpress` | `v-longpress` | 长按后调用绑定的回调           |
| `vThrottle`  | `v-throttle`  | 限制重复点击回调的执行频率     |

这些指令要求浏览器 DOM。应用仍需自行校验回调和复制内容。

## Hook

- `useLoading`：显示或隐藏包管理的全页 Loading。
- `useOverlay`：显示或隐藏包管理的页面遮罩，并接受可选透明度。
- `useScreenFull`：初始化或释放全屏状态监听，并提供查询、切换、进入和退出操作。

Hook 只在调用时解析浏览器全局对象，服务端渲染阶段不得调用。

## 常量与工具

- `FaMimeType`：上传 API 使用的文件 MIME 类型常量。
- `RegExps`：组件共享的正则表达式。
- `Decimal`：重新导出的 `decimal.js` 构造函数，可用于上传进度和消费端计算。

## 全局类型与样式

在 `compilerOptions.types` 中加入 `fast-element-plus/global` 可获得全局组件和指令声明。每个应用只需导入一次 `fast-element-plus/style.css`；Element Plus 样式仍由应用负责导入。

## 错误与环境

非法组件输入遵循对应组件校验和 Element Plus 行为。浏览器能力缺失会在调用相关指令或 Hook 时暴露。上传请求、剪贴板、全屏和应用回调失败不会被静默转换为成功结果。
