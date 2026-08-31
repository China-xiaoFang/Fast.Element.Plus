<script setup>
import Basic from "../examples/table/Basic.vue"
import BasicSource from "../examples/table/Basic.vue?raw"
import ColumnTypes from "../examples/table/ColumnTypes.vue"
import ColumnTypesSource from "../examples/table/ColumnTypes.vue?raw"
import ExpandableRows from "../examples/table/ExpandableRows.vue"
import ExpandableRowsSource from "../examples/table/ExpandableRows.vue?raw"
import ImageColumns from "../examples/table/ImageColumns.vue"
import ImageColumnsSource from "../examples/table/ImageColumns.vue?raw"
import MergeTimeInfo from "../examples/table/MergeTimeInfo.vue"
import MergeTimeInfoSource from "../examples/table/MergeTimeInfo.vue?raw"
import RemoteSearch from "../examples/table/RemoteSearch.vue"
import RemoteSearchSource from "../examples/table/RemoteSearch.vue?raw"
import Selection from "../examples/table/Selection.vue"
import SelectionSource from "../examples/table/Selection.vue?raw"
import SortFilterFixed from "../examples/table/SortFilterFixed.vue"
import SortFilterFixedSource from "../examples/table/SortFilterFixed.vue?raw"
import SlotsExpose from "../examples/table/SlotsExpose.vue"
import SlotsExposeSource from "../examples/table/SlotsExpose.vue?raw"
import TreeTable from "../examples/table/TreeTable.vue"
import TreeTableSource from "../examples/table/TreeTable.vue?raw"
</script>

# FaTable 表格

在 ElTable 上集成搜索表单、分页、远程请求、列设置、单选/多选、树形数据、加载状态和业务插槽。组件高度由容器和传入的表格高度决定，移动端不会附加最小高度；卡片边框颜色沿用 Element Plus 主题。

## 行数据类型

`DefaultRow` 是 FaTable 默认公开行类型，允许业务接口返回未预先声明的字段。已知数据结构可以继承该类型，并通过 `FaTableColumnCtx<T>` 和 `PagedResult<T>` 获得更精确的列配置与分页数据提示。

```ts
import type { DefaultRow, FaTableColumnCtx, PagedResult } from "fast-element-plus";

interface UserRow extends DefaultRow {
	id: number;
	name: string;
}

const columns: FaTableColumnCtx<UserRow>[] = [{ prop: "name", label: "姓名" }];

const result: PagedResult<UserRow> = {
	rows: [{ id: 1, name: "Fast" }],
	totalRows: 1,
};
```

<DemoBlock :code="BasicSource" title="本地数据、关键字搜索、复制、标签与日期列">
  <Basic />
</DemoBlock>

<DemoBlock :code="RemoteSearchSource" title="远程搜索、分页、列设置与响应式搜索表单">
  <RemoteSearch />
</DemoBlock>

<DemoBlock :code="SelectionSource" title="单选、整行选择与禁用行">
  <Selection />
</DemoBlock>

<DemoBlock :code="TreeTableSource" title="树形表格与默认展开">
  <TreeTable />
</DemoBlock>

Element Plus 原生树表只需要提供 `row-key` 和 `children` 数据，不要设置 `tree-data`；Fast 的 `treeData` 用于把分组数据的子项展开为普通表格行。

<DemoBlock :code="ExpandableRowsSource" title="展开行、自定义内容与展开事件">
  <ExpandableRows />
</DemoBlock>

<DemoBlock :code="SortFilterFixedSource" title="固定列、状态筛选、远程排序与内容提示">
  <SortFilterFixed />
</DemoBlock>

<DemoBlock :code="SlotsExposeSource" title="头部、工具、操作、页脚插槽与 Expose">
  <SlotsExpose />
</DemoBlock>

<ComponentApi name="FaTable" native="ElTable" />

## 关联组件：FaTableColumn

除 ElTableColumn 原生列能力外，提供图片、日期、时间、精度数值、千分位、复制、链接、标签、合并行和时间信息等业务列类型。

<DemoBlock :code="ColumnTypesSource" title="图片、链接、复制、数值、枚举与日期列">
  <ColumnTypes />
</DemoBlock>

<DemoBlock :code="ImageColumnsSource" title="图片缩略图、原图预览、隐藏图片与空值占位">
  <ImageColumns />
</DemoBlock>

<DemoBlock :code="MergeTimeInfoSource" title="相同数据合并与操作时间信息列">
  <MergeTimeInfo />
</DemoBlock>

### Fast 列类型

| 类型                                      | 用途                         |
| ----------------------------------------- | ---------------------------- |
| `default`、`selection`、`index`、`expand` | 原生默认、选择、序号和展开列 |
| `image`                                   | 图片与预览列                 |
| `date`、`time`、`dateTime`                | 日期、时间和日期时间格式化   |
| `d2`、`d4`、`d6`                          | 固定 2、4、6 位小数          |
| `gd2`、`gd4`、`gd6`                       | 带千分位的固定精度数值       |
| `timeInfo`                                | 用户和时间信息组合展示       |

<ComponentApi name="FaTableColumn" native="ElTableColumn" />

## 关联组件：FaTableColumnsSettingDialog

FaTable 内部的列设置弹窗，由 `columnSettingBtn` 控制显示。它依赖 FaTable 提供的状态，只应通过 `FaTable.TableColumnsSettingDialog` 或 FaTable 内部流程使用。

<ComponentApi name="FaTableColumnsSettingDialog" />

## 关联组件：FaTablePagination

FaTable 内部分页栏，读取表格分页状态并触发页码、每页条数变化。它依赖 FaTable 上下文，不作为独立分页组件使用。

<ComponentApi name="FaTablePagination" />

## 关联组件：FaTableSearchForm

FaTable 的响应式搜索容器，负责基础搜索、高级搜索、折叠和重置操作。通常由 FaTable 根据列配置自动创建。

<ComponentApi name="FaTableSearchForm" />

## 关联组件：FaTableSearchFormItem

根据 `FaTableColumn` 的 `search` 配置渲染具体输入组件，并在值变化时触发表格搜索。它依赖 FaTable 搜索状态，不应脱离 FaTable 单独使用。

<ComponentApi name="FaTableSearchFormItem" />
