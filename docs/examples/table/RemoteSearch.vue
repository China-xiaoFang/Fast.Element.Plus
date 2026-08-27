<script setup lang="ts">
import type { FaTableColumnCtx, FaTableEnumColumnCtx, PagedInput, PagedResult } from "../../../src";

const statuses: FaTableEnumColumnCtx[] = [
	{ label: "停用", value: 0, type: "danger" },
	{ label: "启用", value: 1, type: "success" },
];
const allRows = Array.from({ length: 57 }, (_, index) => ({
	id: index + 1,
	name: `业务模块 ${String(index + 1).padStart(2, "0")}`,
	owner: ["平台组", "业务组", "SDK 组"][index % 3],
	status: index % 4 === 0 ? 0 : 1,
	createdTime: `2026-08-${String((index % 26) + 1).padStart(2, "0")} 10:30:00`,
}));
const columns: FaTableColumnCtx[] = [
	{ type: "index", label: "#", width: 58 },
	{ prop: "name", label: "模块名称", minWidth: 180, copy: true, search: { el: "el-input", order: 3 } },
	{ prop: "owner", label: "负责人", width: 120, search: { el: "el-input", order: 2 } },
	{ prop: "status", label: "状态", width: 100, tag: true, enum: statuses, search: { el: "el-select", order: 1 } },
	{ prop: "createdTime", label: "创建时间", type: "dateTime", width: 180 },
];

const requestApi = async (input?: PagedInput): Promise<PagedResult<Record<string, unknown>>> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 300));
	let result = [...allRows];
	for (const search of input?.searchList ?? []) {
		if (!search.enField || search.value === undefined || search.value === null || search.value === "") continue;
		result = result.filter((row) => String(row[search.enField as keyof typeof row]).includes(String(search.value)));
	}
	const pageIndex = input?.pageIndex ?? 1;
	const pageSize = input?.pageSize ?? 20;
	return {
		pageIndex,
		pageSize,
		totalRows: result.length,
		rows: result.slice((pageIndex - 1) * pageSize, pageIndex * pageSize),
	};
};
</script>

<template>
	<FaTable :request-api="requestApi" :columns="columns" column-setting-btn :search-form-cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }" />
</template>
