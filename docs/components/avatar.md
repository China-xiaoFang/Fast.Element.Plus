<script setup>
import AvatarModes from "../examples/basic/AvatarModes.vue"
import AvatarModesSource from "../examples/basic/AvatarModes.vue?raw"
</script>

# FaAvatar 头像

除原生头像能力外，支持 Base64 和团队图片服务的原图、标准图、小图、缩略图后缀。

<DemoBlock :code="AvatarModesSource" title="头像尺寸、形状与图片模式">
  <AvatarModes />
</DemoBlock>

<ComponentApi name="FaAvatar" native="ElAvatar" />
