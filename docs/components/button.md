<script setup>
import ButtonStates from "../examples/basic/ButtonStates.vue"
import ButtonStatesSource from "../examples/basic/ButtonStates.vue?raw"
</script>

# FaButton 按钮

封装 Element Plus Button，并加入团队统一的自动 Loading、页面遮罩和 `doLoading` 实例方法。

<DemoBlock :code="ButtonStatesSource" title="按钮类型、自动 Loading 与 Expose">
  <ButtonStates />
</DemoBlock>

<ComponentApi name="FaButton" native="ElButton" />
