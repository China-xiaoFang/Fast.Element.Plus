<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

interface TableExpose {
	loading: boolean;
	refresh: () => Promise<void>;
	reset: () => Promise<void>;
}

const tableRef = ref<TableExpose>();
const rows = [
	{ id: 1, name: "Fast.Element.Plus", version: "2.0.0" },
	{ id: 2, name: "Fast.NET", version: "5.x" },
];
</script>

<template>
	<FaTable ref="tableRef" :data="rows" :pagination="false" hide-search-time>
		<template #header><ElTag type="primary">自定义头部插槽</ElTag></template>
		<template #toolButton>
			<ElButton type="primary" @click="tableRef?.refresh()">刷新</ElButton>
			<ElButton @click="tableRef?.reset()">重置</ElButton>
		</template>
		<FaTableColumn prop="name" label="项目" min-width="180" />
		<FaTableColumn prop="version" label="版本" width="120" />
		<template #operation="{ row }"><ElButton link type="primary" @click="ElMessage.info(`查看 ${String(row['name'])}`)">查看</ElButton></template>
		<template #footer
			><div class="demo-value">表格 Loading：{{ tableRef?.loading ? "是" : "否" }}</div></template
		>
	</FaTable>
</template>
