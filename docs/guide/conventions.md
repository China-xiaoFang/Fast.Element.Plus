# 设计约定

## 项目定位

Fast.Element.Plus 是 Fast 系列内部业务组件库的开源 SDK。组件优先服务团队开发效率和交互一致性，因此允许主动调整 Element Plus 默认值、事件语义和业务流程。

## 原生能力

封装组件会尽量透传对应 Element Plus 组件的 Props、Emits、Slots 和 Expose，但不是无差异代理。Fast 新增、覆盖或明确禁用的能力，以本站文档和公开 TypeScript 类型为准。

Element Plus 次版本号中间位升级，例如 `2.14.x` 升级到 `2.15.x` 或更高时，必须重新核对原生 Props、Emits、Slots、Expose、默认值和内部样式结构。完整清单见 [Element Plus 兼容性与升级核对](../ELEMENT_PLUS_COMPATIBILITY.zh-CN)。

## 异步业务流程

`FaDialog` 与 `FaDrawer` 的 `open`、`close` 是 Fast 业务流程完成事件：

- `afterOpen` 完成后触发 `open`。
- `closeFunction` 或 `beforeClose` 完成后触发 `close`。
- 等待期间组件保持加载状态，避免用户重复操作。

这与 Element Plus 原生同名生命周期事件的真实 DOM 时机不同，是有意保留的团队约定。

## 选择器模型与事件

`FaSelect`、`FaSelectPage`、`FaSelectV2`、`FaTreeSelect` 与 `FaInputDialogPage` 将模型更新与业务数据事件分开处理：

- `update:modelValue` 是选中值的唯一更新入口，并保留原生值类型；多选清空后仍为数组，不转换为单值。
- `FaSelect`、`FaSelectPage`、`FaSelectV2` 和 `FaTreeSelect` 保留增强的 `change(data, value)`：单选返回选项对象，多选返回选项对象数组，清空返回 `null`；该事件不再重复修改模型。
- `clear`、`remove-tag`、`check` 等其他事件保持对应 Element Plus 事件参数。
- `v-model:label` 是根据当前选中值和选项数据计算的派生模型，业务也可以只监听 `update:modelValue` 自行处理标签或其他附加状态。
- `FaTreeSelect` 的 `node-click` 只表示节点点击，不用于判断节点最终是否选中；选择状态以 `update:modelValue`、`change` 或 `check` 为准。
- `FaInputDialogPage` 的 `change(data, value)` 返回本次确认的选中行和选中值；`selectionRow` Expose 同步保留当前选中行，清空时同步清除。

程序通过组件 Expose 修改选中值时只触发模型更新，不伪造用户交互产生的原生 `change` 事件。

`FaTree` 仅在当前节点值确实发生变化时触发 `change(data, node, instance, event)`；`node-click(data, node, instance, event)` 始终表示节点点击。

## 上传模型与回调

- `FaUpload`、`FaUploadImage` 与 `FaUploadImages` 只通过 `update:modelValue` 输出上传后的 URL 模型。
- `onChange(uploadFile, uploadFiles)` 保持 Element Plus 上传文件状态回调，不再混入 URL 字符串或数组。
- 多文件模型清空后输出 `[]`，单文件模型清空后输出 `null`。
- `update:fileList` 只在文件列表实际更新时回写，不在删除回调中重复赋值。

## 样式与主题

- 颜色、边框、背景和文字优先使用 `--el-*` 变量，应用切换 Element Plus 深浅色主题时组件同步变化。
- 组件内部只在确有组件语义时保留现有 `--fa-dialog-*`、`--fa-table-*` 等变量。
- 响应式断点由统一 SCSS 变量维护，覆盖手机、平板和桌面布局。
- 应用原有的 `--width` 等公开组件变量继续有效。

## 公共 API

Props、Emits、Slots、Expose、组件实例和辅助类型都属于公开 API。当前版本不承诺稳定兼容，破坏性调整应同步更新类型、案例、API 文档和 Changelog。
