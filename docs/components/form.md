<script setup>
import Basic from "../examples/form/Basic.vue"
import BasicSource from "../examples/form/Basic.vue?raw"
import DetailForm from "../examples/form/DetailForm.vue"
import DetailFormSource from "../examples/form/DetailForm.vue?raw"
import Validation from "../examples/form/Validation.vue"
import ValidationSource from "../examples/form/Validation.vue?raw"
</script>

# FaForm 表单

在 ElForm 上增加响应式 Grid、详情模式、团队标签格式和滚动校验方法。

`validate()`（不传回调）与 `validateScrollToField()` 校验成功时 Promise 以 `true` 完成；从 `2.0.12` 起，校验失败时以 `false` 拒绝，需通过 `catch` 处理，并非返回一个成功完成的 `false`。实例尚未挂载时仍以 `Error` 拒绝。`validate(callback)` 保持 Element Plus 原生回调行为。

<DemoBlock :code="BasicSource" title="响应式表单布局与字段提示">
  <Basic />
</DemoBlock>

<DemoBlock :code="ValidationSource" title="规则校验、重置与 validateScrollToField">
  <Validation />
</DemoBlock>

<DemoBlock :code="DetailFormSource" title="详情表单模式">
  <DetailForm />
</DemoBlock>

<ComponentApi name="FaForm" native="ElForm" />

## 关联组件：FaFormItem

支持普通布局或 Grid 布局，提供 `span`、`offset`、`row`、标签提示和原生校验插槽。

<ComponentApi name="FaFormItem" native="ElFormItem" />

## 关联组件：FaFormItemTip

用于在表单标签旁展示统一的问号提示，`tips` 支持 HTML 内容，`label` 可由属性或插槽提供。

<ComponentApi name="FaFormItemTip" />
