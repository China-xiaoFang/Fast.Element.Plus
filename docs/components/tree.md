<script setup>
import AsyncTree from "../examples/tree/AsyncTree.vue"
import AsyncTreeSource from "../examples/tree/AsyncTree.vue?raw"
import Basic from "../examples/tree/Basic.vue"
import BasicSource from "../examples/tree/Basic.vue?raw"
import CheckboxSlots from "../examples/tree/CheckboxSlots.vue"
import CheckboxSlotsSource from "../examples/tree/CheckboxSlots.vue?raw"
import NodeOperations from "../examples/tree/NodeOperations.vue"
import NodeOperationsSource from "../examples/tree/NodeOperations.vue?raw"
</script>

# FaTree 树

保留 ElTree 的选择、勾选、拖拽、懒加载和节点操作能力，并增加标题、全部节点、过滤、折叠导航、标签同步与异步请求。

<DemoBlock :code="BasicSource" title="单选、标题、过滤与标签同步">
  <Basic />
</DemoBlock>

<DemoBlock :code="CheckboxSlotsSource" title="复选框、拖拽、数量与自定义节点插槽">
  <CheckboxSlots />
</DemoBlock>

<DemoBlock :code="AsyncTreeSource" title="异步数据、Loading 与主动刷新">
  <AsyncTree />
</DemoBlock>

<DemoBlock :code="NodeOperationsSource" title="勾选、读取、追加和删除节点 Expose">
  <NodeOperations />
</DemoBlock>

<ComponentApi name="FaTree" native="ElTree" />
