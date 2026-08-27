<script setup>
import Images from "../examples/upload/Images.vue"
import ImagesSource from "../examples/upload/Images.vue?raw"
</script>

# FaUploadImages 多图上传

多图上传，支持数量限制、预览列表、删除和 `string[] | null` 模型。

<DemoBlock :code="ImagesSource" title="多图上传、数量限制、预览与删除">
  <Images />
</DemoBlock>

<ComponentApi name="FaUploadImages" native="ElUpload" />
