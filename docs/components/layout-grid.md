<script setup>
import Basic from "../examples/layout-grid/Basic.vue"
import BasicSource from "../examples/layout-grid/Basic.vue?raw"
import Breakpoint from "../examples/layout-grid/Breakpoint.vue"
import BreakpointSource from "../examples/layout-grid/Breakpoint.vue?raw"
import Collapsed from "../examples/layout-grid/Collapsed.vue"
import CollapsedSource from "../examples/layout-grid/Collapsed.vue?raw"
import OffsetSuffix from "../examples/layout-grid/OffsetSuffix.vue"
import OffsetSuffixSource from "../examples/layout-grid/OffsetSuffix.vue?raw"
</script>

# FaLayoutGrid 响应式布局

根据容器宽度而非全局窗口宽度选择断点，适合可拖宽 Drawer、Dialog、表单和表格搜索区域。

<DemoBlock :code="BasicSource" title="响应式列数与跨列">
  <Basic />
</DemoBlock>

<DemoBlock :code="BreakpointSource" title="容器断点变化事件">
  <Breakpoint />
</DemoBlock>

<DemoBlock :code="CollapsedSource" title="折叠行与末尾操作项">
  <Collapsed />
</DemoBlock>

<ComponentApi name="FaLayoutGrid" />

## 关联组件：FaLayoutGridItem

支持基础 `span`、`offset`、末列 `suffix`，以及 `xs`、`sm`、`md`、`lg`、`xl` 的独立覆盖。

<DemoBlock :code="OffsetSuffixSource" title="Span、Offset、Suffix 与断点覆盖">
  <OffsetSuffix />
</DemoBlock>

<ComponentApi name="FaLayoutGridItem" />

## 断点范围

| 断点 | 容器宽度          |
| ---- | ----------------- |
| `xs` | `0 - 479px`       |
| `sm` | `480 - 768px`     |
| `md` | `> 768 - 1024px`  |
| `lg` | `> 1024 - 1440px` |
| `xl` | `> 1440px`        |
