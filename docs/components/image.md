<script setup>
import ImageModes from "../examples/basic/ImageModes.vue"
import ImageModesSource from "../examples/basic/ImageModes.vue?raw"
</script>

# FaImage 图片

默认启用懒加载、图片预览和 Teleport，并提供团队图片地址转换与完整 Viewer 插槽。

<DemoBlock :code="ImageModesSource" title="图片适应、预览与错误插槽">
  <ImageModes />
</DemoBlock>

<ComponentApi name="FaImage" native="ElImage" />
