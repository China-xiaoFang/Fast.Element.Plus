<script setup>
import Images from "../examples/upload/Images.vue"
import ImagesSource from "../examples/upload/Images.vue?raw"
</script>

# FaUploadImages 多图上传

多图上传，默认启用多文件模式，支持数量限制、预览列表、删除和 `string[] | null` 模型；清空后的模型值为 `[]`。在手动上传模式下，选择文件时会立即校验文件类型和大小。图片卡片尺寸和边框颜色沿用 Element Plus 默认值，调用方可通过对应 CSS Variables 自定义。

上传后的 URL 数组通过 `v-model` 获取，`onChange(uploadFile, uploadFiles)` 保持 Element Plus 原生文件状态回调。

<DemoBlock :code="ImagesSource" title="多图上传、数量限制、预览与删除">
  <Images />
</DemoBlock>

<ComponentApi name="FaUploadImages" native="ElUpload" />
