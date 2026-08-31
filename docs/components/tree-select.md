<script setup>
import TreeSelect from "../examples/select/TreeSelect.vue"
import TreeSelectSource from "../examples/select/TreeSelect.vue?raw"
</script>

# FaTreeSelect 树形选择器

组合 ElSelect 与 ElTree 的完整属性、事件和实例能力，并加入 Fast 数据请求、标签同步和默认字段映射。

<DemoBlock :code="TreeSelectSource" title="树形单选、多选、筛选与禁用节点">
  <TreeSelect />
</DemoBlock>

<ComponentApi name="FaTreeSelect" native="ElTreeSelect" />
