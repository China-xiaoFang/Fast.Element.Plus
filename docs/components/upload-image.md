<script setup>
import Image from "../examples/upload/Image.vue"
import ImageSource from "../examples/upload/Image.vue?raw"
</script>

# FaUploadImage 单图上传

单图上传，支持固定宽高、替换、删除、预览和 `string | null` 模型。

<DemoBlock :code="ImageSource" title="单图尺寸、替换与图片预览">
  <Image />
</DemoBlock>

<ComponentApi name="FaUploadImage" native="ElUpload" />
