<script setup>
import Basic from "../examples/basic/Basic.vue"
import BasicSource from "../examples/basic/Basic.vue?raw"
</script>

# 组件总览

Fast.Element.Plus 在 Element Plus 之上封装团队高频业务能力。所有组件支持深浅色主题，并针对手机、平板和桌面布局进行适配。左侧菜单以独立业务组件为单位；只能跟随主组件使用的关联组件放在主组件页面，不重复建立菜单。

<div class="component-cards">
  <a class="component-card" href="./avatar"><strong>FaAvatar</strong><span>头像</span></a>
  <a class="component-card" href="./button"><strong>FaButton</strong><span>按钮</span></a>
  <a class="component-card" href="./icon"><strong>FaIcon</strong><span>图标</span></a>
  <a class="component-card" href="./icon-selector"><strong>FaIconSelector</strong><span>图标选择器</span></a>
  <a class="component-card" href="./image"><strong>FaImage</strong><span>图片</span></a>
  <a class="component-card" href="./form"><strong>FaForm</strong><span>表单、FormItem、FormItemTip</span></a>
  <a class="component-card" href="./car-number"><strong>FaCarNumber</strong><span>车牌输入</span></a>
  <a class="component-card" href="./select"><strong>FaSelect</strong><span>选择器、SelectOption</span></a>
  <a class="component-card" href="./select-page"><strong>FaSelectPage</strong><span>分页选择器</span></a>
  <a class="component-card" href="./select-v2"><strong>FaSelectV2</strong><span>虚拟选择器</span></a>
  <a class="component-card" href="./tree-select"><strong>FaTreeSelect</strong><span>树形选择器</span></a>
  <a class="component-card" href="./input-dialog-page"><strong>FaInputDialogPage</strong><span>弹窗分页选择器</span></a>
  <a class="component-card" href="./table"><strong>FaTable</strong><span>表格、TableColumn</span></a>
  <a class="component-card" href="./tree"><strong>FaTree</strong><span>树</span></a>
  <a class="component-card" href="./dialog"><strong>FaDialog</strong><span>对话框</span></a>
  <a class="component-card" href="./drawer"><strong>FaDrawer</strong><span>抽屉</span></a>
  <a class="component-card" href="./context-menu"><strong>FaContextMenu</strong><span>右键菜单</span></a>
  <a class="component-card" href="./layout-grid"><strong>FaLayoutGrid</strong><span>响应式布局、LayoutGridItem</span></a>
  <a class="component-card" href="./upload"><strong>FaUpload</strong><span>文件上传</span></a>
  <a class="component-card" href="./upload-image"><strong>FaUploadImage</strong><span>单图上传</span></a>
  <a class="component-card" href="./upload-images"><strong>FaUploadImages</strong><span>多图上传</span></a>
</div>

## 阅读 API 表格

每个组件页面同时列出 Fast 新增或改变的 API，以及当前锁定 Element Plus 版本的完整原生 Props、Events、Slots 和 Expose。原生属性表中的“Fast 支持情况”会明确标识直接透传、默认值调整或未透传，最终仍以当前包导出的 TypeScript 类型为准。

原生 Props 和 Events 从当前安装的 Element Plus 运行时定义读取；Slots 和 Expose 依据当前锁定版本人工核对。Element Plus 连续升级两个及以上次版本（minor）时，必须重新核对原生 Props、Events、Slots 和 Expose，避免文档与封装出现缺失或冗余。

每项主要能力都有独立标题的交互案例。点击案例下方的“查看代码”可展开完整 Vue 代码并复制。

<DemoBlock :code="BasicSource" title="基础组件组合使用">
  <Basic />
</DemoBlock>

## 组件分类

| 主组件         | 关联组件                                    |
| -------------- | ------------------------------------------- |
| `FaForm`       | `FaFormItem`、`FaFormItemTip`               |
| `FaSelect`     | `FaSelectOption`                            |
| `FaTable`      | `FaTableColumn`、列设置、分页和搜索内部组件 |
| `FaLayoutGrid` | `FaLayoutGridItem`                          |
| 其余主组件     | 独立页面，不重复引入其他组件的关联 API      |
