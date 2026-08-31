<script setup lang="ts">
import { ref } from "vue";
import type { PagedInput, PagedResult } from "../../../src";

const value = ref<number | null>(2);
const label = ref<string | null>("Fast.Element.Plus");
const changedData = ref<unknown>();
const rows = [
	{ id: 1, name: "Fast.NET", owner: "SDK 团队", status: "稳定" },
	{ id: 2, name: "Fast.Element.Plus", owner: "前端团队", status: "开发中" },
	{ id: 3, name: "Fast.Admin", owner: "业务团队", status: "稳定" },
];

const requestApi = async (_input?: PagedInput): Promise<PagedResult<Record<string, unknown>>> => ({
	pageIndex: 1,
	pageSize: 20,
	totalRows: rows.length,
	rows,
});
</script>

<template>
	<div class="demo-stack">
		<FaInputDialogPage
			v-model="value"
			v-model:label="label"
			:request-api="requestApi"
			row-key="id"
			label-key="name"
			title="选择 Fast 项目"
			placeholder="请选择项目"
			@change="changedData = $event"
		>
			<FaTableColumn prop="name" label="项目" min-width="180" />
			<FaTableColumn prop="owner" label="团队" width="120" />
			<FaTableColumn prop="status" label="状态" width="100" />
		</FaInputDialogPage>
		<span class="demo-value">当前项目：{{ label ?? "未选择" }}（{{ value ?? "—" }}）；change 数据：{{ JSON.stringify(changedData) }}</span>
	</div>
</template>
