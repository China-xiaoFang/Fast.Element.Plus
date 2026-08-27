<script setup lang="ts">
import { ref } from "vue";

const selectedNames = ref<string[]>([]);
const rows = [
	{ id: 1, name: "可选择记录", locked: false },
	{ id: 2, name: "锁定记录", locked: true },
	{ id: 3, name: "点击整行选择", locked: false },
];
</script>

<template>
	<div class="demo-stack">
		<FaTable
			:data="rows"
			:pagination="false"
			:tool-btn="false"
			hide-search-time
			single
			row-click-selection
			:row-selectable="(row) => !row['locked']"
			@selection-change="selectedNames = $event.map((item) => String(item['name']))"
		>
			<FaTableColumn prop="name" label="名称" min-width="180" />
			<FaTableColumn prop="locked" label="是否锁定" width="120">
				<template #default="{ row }"
					><ElTag :type="row['locked'] ? 'danger' : 'success'">{{ row["locked"] ? "锁定" : "可选" }}</ElTag></template
				>
			</FaTableColumn>
		</FaTable>
		<span class="demo-value">当前单选：{{ selectedNames.join("、") || "未选择" }}</span>
	</div>
</template>
