<script setup lang="ts">
const rows = [
	{
		id: 1,
		department: "研发中心",
		name: "组件库维护",
		createdUserName: "小方",
		createdTime: "2026-08-27 09:20:00",
	},
	{
		id: 2,
		department: "研发中心",
		name: "文档站建设",
		createdUserName: "前端组",
		createdTime: "2026-08-27 10:35:00",
	},
	{
		id: 3,
		department: "产品中心",
		name: "需求评审",
		createdUserName: "产品组",
		createdTime: "2026-08-26 16:10:00",
	},
];
</script>

<template>
	<FaTable :data="rows" :pagination="false" :tool-btn="false" hide-search-time border>
		<FaTableColumn type="index" label="#" width="58" />
		<FaTableColumn prop="department" label="部门（自动合并）" span-prop="department" min-width="150" />
		<FaTableColumn prop="name" label="工作事项" min-width="180" />
		<FaTableColumn type="timeInfo" label="操作信息" min-width="240" />
	</FaTable>
</template>
