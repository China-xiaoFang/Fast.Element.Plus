<script setup lang="ts">
import type { FaTableEnumColumnCtx } from "../../../src";

const rows = [
	{ id: 1, name: "Fast Admin", status: 1, owner: "小方", createdTime: "2026-08-20 09:30:00" },
	{ id: 2, name: "Fast Element Plus", status: 1, owner: "Fast 团队", createdTime: "2026-08-22 14:10:00" },
	{ id: 3, name: "Fast.NET", status: 0, owner: "SDK 团队", createdTime: "2026-08-25 18:20:00" },
];

const statusOptions: FaTableEnumColumnCtx[] = [
	{ label: "停用", value: 0, type: "danger" },
	{ label: "启用", value: 1, type: "success" },
];
</script>

<template>
	<FaTable :data="rows" :pagination="false" :tool-btn="false" hide-search-time>
		<FaTableColumn type="index" label="#" width="64" />
		<FaTableColumn prop="name" label="项目" min-width="180" copy />
		<FaTableColumn prop="owner" label="负责人" width="120" />
		<FaTableColumn prop="status" label="状态" width="100" tag :enum="statusOptions" />
		<FaTableColumn prop="createdTime" label="创建时间" type="dateTime" width="180" />
	</FaTable>
</template>
