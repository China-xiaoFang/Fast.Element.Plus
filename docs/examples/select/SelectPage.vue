<script setup lang="ts">
import { ref } from "vue";
import type { PagedInput, PagedResult } from "../../../src";

const value = ref<number | null>(null);
const label = ref<string | null>(null);
const changedData = ref<unknown>();
const allRows = Array.from({ length: 36 }, (_, index) => ({ value: index + 1, label: `业务用户 ${String(index + 1).padStart(2, "0")}` }));

const requestApi = async (input?: PagedInput): Promise<PagedResult<Record<string, unknown>>> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 250));
	const keyword = input?.searchValue?.toLowerCase() ?? "";
	const filtered = allRows.filter((item) => item.label.toLowerCase().includes(keyword));
	const pageIndex = input?.pageIndex ?? 1;
	const pageSize = input?.pageSize ?? 10;
	return {
		pageIndex,
		pageSize,
		totalRows: filtered.length,
		rows: filtered.slice((pageIndex - 1) * pageSize, pageIndex * pageSize),
	};
};
</script>

<template>
	<div class="demo-stack">
		<FaSelectPage
			v-model="value"
			v-model:label="label"
			:request-api="requestApi"
			clearable
			placeholder="搜索并翻页"
			style="max-width: 420px"
			@change="changedData = $event"
		/>
		<span class="demo-value">当前用户：{{ label ?? "未选择" }}（{{ value ?? "—" }}）；change 数据：{{ JSON.stringify(changedData) }}</span>
	</div>
</template>
