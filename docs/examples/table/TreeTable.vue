<script setup lang="ts">
const rows = [
	{
		id: 1,
		name: "组件",
		owner: "前端团队",
		children: [
			{ id: 11, name: "表单组件", owner: "表单小组" },
			{ id: 12, name: "表格组件", owner: "数据小组" },
		],
	},
	{
		id: 2,
		name: "SDK",
		owner: "平台团队",
		children: [{ id: 21, name: "Fast.NET", owner: "SDK 小组" }],
	},
];
</script>

<template>
	<FaTable :data="rows" default-expand-all :pagination="false" :tool-btn="false" hide-search-time>
		<FaTableColumn prop="name" label="模块" min-width="220" />
		<FaTableColumn prop="owner" label="负责团队" min-width="160" />
	</FaTable>
</template>
