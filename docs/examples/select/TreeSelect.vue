<script setup lang="ts">
import { ref } from "vue";

const singleValue = ref<string>();
const singleLabel = ref<string | null>(null);
const multipleValue = ref<string[]>([]);
const data = [
	{
		value: "frontend",
		label: "前端组件",
		children: [
			{ value: "form", label: "表单" },
			{ value: "table", label: "表格" },
			{ value: "upload", label: "上传", disabled: true },
		],
	},
	{
		value: "backend",
		label: "后端 SDK",
		children: [
			{ value: "fast-net", label: "Fast.NET" },
			{ value: "fast-admin", label: "Fast.Admin" },
		],
	},
];
const requestApi = async () => data;
</script>

<template>
	<div style="display: grid; max-width: 480px; gap: 12px">
		<FaTreeSelect
			:request-api="requestApi"
			v-model="singleValue"
			v-model:label="singleLabel"
			check-strictly
			filterable
			clearable
			placeholder="选择单个节点"
		/>
		<FaTreeSelect v-model="multipleValue" :data="data" multiple show-checkbox check-strictly filterable clearable placeholder="选择多个节点" />
	</div>
</template>
