<script setup lang="ts">
import { ref } from "vue";

const selected = ref(["Vue", "Element Plus", "Fast.Element.Plus"]);
const options = ["Vue", "Element Plus", "Fast.Element.Plus", "TypeScript"];
const rows = [
	{ id: 1, name: "Fast.Element.Plus", status: "维护中" },
	{ id: 2, name: "Fast.NET", status: "稳定" },
];
const tree = [
	{
		id: 1,
		label: "Fast 系列",
		children: [
			{ id: 11, label: "Fast.Element.Plus" },
			{ id: 12, label: "Fast.NET" },
		],
	},
];
</script>

<template>
	<div class="demo-stack" style="width: 100%">
		<ElSelect v-model="selected" multiple style="width: min(100%, 420px)">
			<ElOption v-for="item in options" :key="item" :label="item" :value="item" />
		</ElSelect>
		<ElTable :data="rows" style="width: 100%">
			<ElTableColumn prop="name" label="项目" />
			<ElTableColumn prop="status" label="状态" width="120" />
		</ElTable>
		<ElTree :data="tree" node-key="id" style="width: 100%" />
	</div>
</template>
