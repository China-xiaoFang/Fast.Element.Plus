<script setup>
import Basic from "../examples/upload/Basic.vue"
import BasicSource from "../examples/upload/Basic.vue?raw"
import ManualSubmit from "../examples/upload/ManualSubmit.vue"
import ManualSubmitSource from "../examples/upload/ManualSubmit.vue?raw"
import MockFile from "../examples/upload/MockFile.vue"
import MockFileSource from "../examples/upload/MockFile.vue?raw"
</script>

# FaUpload 文件上传

保留 ElUpload 的拖拽、文件列表、手动提交、自定义请求和回调能力，并统一文件类型、大小、数量、模型同步、表单校验和团队提示。上传区域不会强制设置宽度或最小高度，可通过调用方样式和插槽控制实际尺寸；边框颜色沿用 Element Plus 主题。

<DemoBlock :code="MockFileSource" title="拖拽上传、类型与大小校验、uploadApi">
  <MockFile />
</DemoBlock>

<DemoBlock :code="ManualSubmitSource" title="手动提交、清空列表与 Expose">
  <ManualSubmit />
</DemoBlock>

<DemoBlock :code="BasicSource" title="禁用状态与基础样式">
  <Basic />
</DemoBlock>

## 传输优先级

1. 显式传入的 Element Plus `httpRequest`。
2. Fast `uploadApi(formData)`。
3. Fast `uploadUrl`。
4. 非默认值的原生 `action`。

Fast 内置传输默认使用 `POST`。浏览器会为 `FormData` 自动生成包含 boundary 的 `Content-Type`，不应手动写死 `multipart/form-data`。

<ComponentApi name="FaUpload" native="ElUpload" />
