<script setup>
import AsyncSelect from "../examples/select/AsyncSelect.vue"
import AsyncSelectSource from "../examples/select/AsyncSelect.vue?raw"
import Basic from "../examples/select/Basic.vue"
import BasicSource from "../examples/select/Basic.vue?raw"
import FieldMapping from "../examples/select/FieldMapping.vue"
import FieldMappingSource from "../examples/select/FieldMapping.vue?raw"
</script>

# FaSelect 选择器

保留 ElSelect 原生筛选、多选、创建、远程搜索和插槽能力，并增加对象数据转换、标签双向绑定、懒加载和主动刷新。

<DemoBlock :code="BasicSource" title="本地数据、单选、多选与标签同步">
  <Basic />
</DemoBlock>

<DemoBlock :code="FieldMappingSource" title="字段映射、隐藏、禁用与详情插槽">
  <FieldMapping />
</DemoBlock>

<DemoBlock :code="AsyncSelectSource" title="首次展开懒加载与主动刷新">
  <AsyncSelect />
</DemoBlock>

<ComponentApi name="FaSelect" native="ElSelect" />

## 关联组件：FaSelectOption

根据 `data`、字段映射和显式 `value`、`label`、`disabled`、`children` 生成 ElOption 或 ElOptionGroup；显式属性优先于数据字段。

<ComponentApi name="FaSelectOption" />
