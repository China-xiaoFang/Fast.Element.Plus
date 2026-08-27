<script setup lang="ts">
import { ElMessage } from "element-plus";
import type { FaTableEnumColumnCtx } from "../../../src";

const image =
	"data:image/svg+xml;charset=UTF-8," +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80"><rect width="120" height="80" rx="8" fill="#409eff"/><text x="60" y="48" text-anchor="middle" font-size="20" fill="white">Fast</text></svg>'
	);
const rows = [
	{ id: 1, name: "Fast.Element.Plus", amount: 12345.6, ratio: 0.876543, status: 1, image, createdTime: "2026-08-26 09:30:00" },
	{ id: 2, name: "Fast.NET", amount: 9876543.21, ratio: 0.123456, status: 0, image, createdTime: "2026-08-25 16:20:00" },
];
const statuses: FaTableEnumColumnCtx[] = [
	{ label: "停用", value: 0, type: "danger" },
	{ label: "启用", value: 1, type: "success" },
];
const handleLinkClick = ({ row }: { row: Record<string, unknown> }): void => {
	ElMessage.info(String(row["name"]));
};
</script>

<template>
	<FaTable :data="rows" :pagination="false" :tool-btn="false" hide-search-time>
		<FaTableColumn type="index" label="#" width="58" />
		<FaTableColumn prop="image" label="图片" type="image" original-image width="90" />
		<FaTableColumn prop="name" label="名称" min-width="180" copy link :click="handleLinkClick" />
		<FaTableColumn prop="amount" label="千分位" type="gd2" width="130" align="right" />
		<FaTableColumn prop="ratio" label="六位小数" type="d6" width="120" align="right" />
		<FaTableColumn prop="status" label="枚举标签" tag :enum="statuses" width="100" />
		<FaTableColumn prop="createdTime" label="日期时间" type="dateTime" width="180" />
	</FaTable>
</template>
