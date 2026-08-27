<script setup>
import ContextMenu from "../examples/dialog-drawer/ContextMenu.vue"
import ContextMenuSource from "../examples/dialog-drawer/ContextMenu.vue?raw"
</script>

# FaContextMenu 右键菜单

通过实例 `open({ x, y })` 在鼠标坐标打开菜单，支持图标、隐藏、禁用、菜单项回调和统一 `click` 事件。

<DemoBlock :code="ContextMenuSource" title="右键菜单、图标、禁用与隐藏项">
  <ContextMenu />
</DemoBlock>

<ComponentApi name="FaContextMenu" />
