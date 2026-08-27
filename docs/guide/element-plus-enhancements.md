<script setup>
import DataDefaults from "../examples/element-plus/DataDefaults.vue"
import DataDefaultsSource from "../examples/element-plus/DataDefaults.vue?raw"
import DialogDefaults from "../examples/element-plus/DialogDefaults.vue"
import DialogDefaultsSource from "../examples/element-plus/DialogDefaults.vue?raw"
import FormDefaults from "../examples/element-plus/FormDefaults.vue"
import FormDefaultsSource from "../examples/element-plus/FormDefaults.vue?raw"
import MessageBox from "../examples/element-plus/MessageBox.vue"
import MessageBoxSource from "../examples/element-plus/MessageBox.vue?raw"
</script>

# Element Plus 全局增强

导入 Fast.Element.Plus 根入口时会立即应用团队约定的 Element Plus 默认值，并增强 `ElMessageBox` 三个快捷单例方法。以下案例均直接使用原生 `El*` 组件，没有重复传入这些默认属性。

## 已修改的默认值

| 原生组件        | Fast 默认值                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `ElDialog`      | `draggable: true`                                                            |
| `ElForm`        | `labelWidth: "auto"`、`labelSuffix: "："`、`scrollToError: true`             |
| `ElInput`       | `showWordLimit: true`                                                        |
| `ElInputNumber` | `controls: false`                                                            |
| `ElSelect`      | 中文加载/空数据提示、`collapseTags: true`、`collapseTagsTooltip: true`       |
| `ElTable`       | `border: true`、`highlightCurrentRow: true`、`rowKey: "id"`                  |
| `ElTree`        | `defaultExpandAll: true`、`checkOnClickNode: true`、`highlightCurrent: true` |
| `ElTreeSelect`  | 选择器和树组件的上述默认值，并设置 `expandOnClickNode: false`                |

<DemoBlock :code="FormDefaultsSource" title="表单、输入框与数字输入默认值">
  <FormDefaults />
</DemoBlock>

<DemoBlock :code="DataDefaultsSource" title="选择器、表格与树默认值">
  <DataDefaults />
</DemoBlock>

<DemoBlock :code="DialogDefaultsSource" title="原生对话框默认拖拽">
  <DialogDefaults />
</DemoBlock>

## ElMessageBox 快捷方法增强

`alert`、`confirm`、`prompt` 默认使用中文标题和按钮，可拖拽，并禁止通过遮罩或 Escape 意外关闭。传入异步 `beforeClose` 时，确认阶段会显示按钮及全局 Loading，异步完成后默认关闭。

<DemoBlock :code="MessageBoxSource" title="Alert、Confirm、Prompt 与异步关闭">
  <MessageBox />
</DemoBlock>
