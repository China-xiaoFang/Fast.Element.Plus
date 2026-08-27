<script setup>
import CarNumber from "../examples/form/CarNumber.vue"
import CarNumberSource from "../examples/form/CarNumber.vue?raw"
</script>

# FaCarNumber 车牌输入

组合 ElInput 与省份、字母、数字车牌键盘，支持普通车牌和新能源车牌校验，并自动接入 ElForm 校验。

<DemoBlock :code="CarNumberSource" title="车牌选择、清空与禁用状态">
  <CarNumber />
</DemoBlock>

<ComponentApi name="FaCarNumber" native="ElInput" />
