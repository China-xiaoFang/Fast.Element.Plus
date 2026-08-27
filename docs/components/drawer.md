<script setup>
import DrawerBasic from "../examples/dialog-drawer/DrawerBasic.vue"
import DrawerBasicSource from "../examples/dialog-drawer/DrawerBasic.vue?raw"
import DrawerDirections from "../examples/dialog-drawer/DrawerDirections.vue"
import DrawerDirectionsSource from "../examples/dialog-drawer/DrawerDirections.vue?raw"
</script>

# FaDrawer 抽屉

使用与 FaDialog 相同的业务生命周期和 Footer 约定，四个方向均支持拖动边缘改变尺寸，桌面端和移动端保留不同的安全尺寸。

<DemoBlock :code="DrawerBasicSource" title="异步打开、关闭与业务 Loading">
  <DrawerBasic />
</DemoBlock>

<DemoBlock :code="DrawerDirectionsSource" title="四个打开方向与拖动调整尺寸">
  <DrawerDirections />
</DemoBlock>

<ComponentApi name="FaDrawer" native="ElDrawer" />
