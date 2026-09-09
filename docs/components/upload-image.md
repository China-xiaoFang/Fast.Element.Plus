<script setup>
import Image from "../examples/upload/Image.vue"
import ImageSource from "../examples/upload/Image.vue?raw"
</script>

# FaUploadImage 单图上传

单图上传，固定使用单文件模式，支持固定宽高、替换、删除、预览和 `string | null` 模型。在手动上传模式下，选择文件时会立即校验文件类型和大小。`width`、`height` 控制组件实际尺寸，上传区域会在总高度内为提示文字保留空间；边框颜色沿用 Element Plus 主题。

上传后的 URL 通过 `v-model` 获取，`onChange(uploadFile, uploadFiles)` 保持 Element Plus 原生文件状态回调。

<DemoBlock :code="ImageSource" title="单图尺寸、替换与图片预览">
  <Image />
</DemoBlock>

<ComponentApi name="FaUploadImage" native="ElUpload" />
