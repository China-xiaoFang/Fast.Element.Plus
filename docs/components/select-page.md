<script setup>
import SelectPage from "../examples/select/SelectPage.vue"
import SelectPageSource from "../examples/select/SelectPage.vue?raw"
</script>

# FaSelectPage 分页选择器

在下拉面板内集成关键字搜索、分页和选中项回显，`requestApi` 使用 Fast `PagedInput` / `PagedResult` 契约。

<DemoBlock :code="SelectPageSource" title="服务端搜索、分页与标签回显">
  <SelectPage />
</DemoBlock>

<ComponentApi name="FaSelectPage" native="ElSelect" />
