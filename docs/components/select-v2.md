<script setup>
import SelectV2 from "../examples/select/SelectV2.vue"
import SelectV2Source from "../examples/select/SelectV2.vue?raw"
</script>

# FaSelectV2 虚拟选择器

适用于大数据量虚拟列表，支持本地数据、远程数据、分页结果、自定义选项、标签同步和主动刷新。选项的实际高度与虚拟列表偏移均服从 `itemHeight`。

<DemoBlock :code="SelectV2Source" title="千条数据虚拟滚动、多选与自定义选项">
  <SelectV2 />
</DemoBlock>

<ComponentApi name="FaSelectV2" native="ElSelectV2" />
