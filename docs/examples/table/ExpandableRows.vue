<script setup lang="ts">
import { ref } from "vue";

const expandedNames = ref<string[]>([]);
const rows = [
	{ id: 1, name: "Fast.Element.Plus", owner: "Fast 团队", description: "面向团队编码习惯封装的 Element Plus 业务组件库。" },
	{ id: 2, name: "Fast.NET", owner: "SDK 团队", description: "Fast 系列 .NET SDK 基础能力。" },
	{ id: 3, name: "Fast.Admin", owner: "平台团队", description: "后台管理与权限业务应用。" },
];

const handleExpand = (row: Record<string, unknown>, expanded: boolean | Record<string, unknown>[]): void => {
	const name = String(row["name"]);
	if (Array.isArray(expanded)) {
		expandedNames.value = expanded.map((item) => String(item["name"]));
	} else if (expanded === true) {
		expandedNames.value = [...new Set([...expandedNames.value, name])];
	} else {
		expandedNames.value = expandedNames.value.filter((item) => item !== name);
	}
};
</script>

<template>
	<div class="demo-stack">
		<FaTable :data="rows" :pagination="false" :tool-btn="false" hide-search-time @expand-change="handleExpand">
			<FaTableColumn type="expand" width="48">
				<template #default="{ row }">
					<div style="padding: 12px 24px">
						<strong>{{ row["name"] }}</strong>
						<p style="margin: 6px 0 0">{{ row["description"] }}</p>
					</div>
				</template>
			</FaTableColumn>
			<FaTableColumn prop="name" label="项目" min-width="200" />
			<FaTableColumn prop="owner" label="负责团队" min-width="140" />
		</FaTable>
		<span class="demo-value">已展开：{{ expandedNames.join("、") || "无" }}</span>
	</div>
</template>
