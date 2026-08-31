<script setup lang="ts">
import { ref } from "vue";

const singleValue = ref<string>();
const singleLabel = ref<string | null>(null);
const multipleValue = ref<string[]>([]);
const multipleLabel = ref<string[] | null>([]);
const singleChangedData = ref<unknown>();
const multipleChangedData = ref<unknown>();
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
			@change="singleChangedData = $event"
		/>
		<span class="demo-value">
			单选值：{{ JSON.stringify(singleValue) }}；标签：{{ JSON.stringify(singleLabel) }}；change 数据：{{ JSON.stringify(singleChangedData) }}
		</span>
		<FaTreeSelect
			v-model="multipleValue"
			v-model:label="multipleLabel"
			:data="data"
			multiple
			show-checkbox
			check-strictly
			filterable
			clearable
			placeholder="选择多个节点"
			@change="multipleChangedData = $event"
		/>
		<span class="demo-value">
			多选值：{{ JSON.stringify(multipleValue) }}；标签：{{ JSON.stringify(multipleLabel) }}；change 数据：{{
				JSON.stringify(multipleChangedData)
			}}
		</span>
	</div>
</template>
