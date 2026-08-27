<script setup>
import Basic from "../examples/dialog-drawer/Basic.vue"
import BasicSource from "../examples/dialog-drawer/Basic.vue?raw"
import DialogFeatures from "../examples/dialog-drawer/DialogFeatures.vue"
import DialogFeaturesSource from "../examples/dialog-drawer/DialogFeatures.vue?raw"
import Lifecycle from "../examples/dialog-drawer/Lifecycle.vue"
import LifecycleSource from "../examples/dialog-drawer/Lifecycle.vue?raw"
</script>

# FaDialog 对话框

在 ElDialog 上统一拖动、全屏、刷新、Footer、异步打开/关闭和业务 Loading。调用 Expose `open(function?)`、`close(function?)` 执行业务钩子；直接修改 `v-model` 只同步显示状态。`open`、`close` 是 Fast 业务流程完成事件，`opened`、`closed` 仍保留 Element Plus 动画生命周期。

<DemoBlock :code="BasicSource" title="异步打开、关闭与业务 Loading">
  <Basic />
</DemoBlock>

<DemoBlock :code="LifecycleSource" title="afterOpen、beforeClose 与真实事件时序">
  <Lifecycle />
</DemoBlock>

<DemoBlock :code="DialogFeaturesSource" title="Expose 打开、全高、刷新、全屏与作用域插槽">
  <DialogFeatures />
</DemoBlock>

<ComponentApi name="FaDialog" native="ElDialog" />
