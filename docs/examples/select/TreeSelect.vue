<script setup lang="ts">
import { ref } from "vue";

const value = ref<string[]>([]);
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
</script>

<template>
	<FaTreeSelect
		v-model="value"
		:data="data"
		multiple
		show-checkbox
		check-strictly
		filterable
		clearable
		placeholder="选择多个节点"
		style="max-width: 480px"
	/>
</template>
