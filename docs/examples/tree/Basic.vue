<script setup lang="ts">
import { ref } from "vue";

const value = ref<string | number | boolean | object | null>("table");
const label = ref("表格组件");
const changedData = ref<unknown>();
const changeCount = ref(0);
const data = [
	{
		value: "components",
		label: "组件",
		children: [
			{ value: "form", label: "表单组件" },
			{ value: "table", label: "表格组件" },
			{ value: "upload", label: "上传组件" },
		],
	},
	{
		value: "guide",
		label: "开发指南",
		children: [{ value: "install", label: "安装与使用" }],
	},
];

const handleChange = (data: unknown): void => {
	changedData.value = data;
	changeCount.value++;
};
</script>

<template>
	<FaTree v-model="value" v-model:label="label" :data="data" title="文档导航" :width="280" @change="handleChange" />
	<p style="margin: 14px 0 0; color: var(--el-text-color-secondary)">
		当前节点：{{ label }}（{{ value }}）；change 数据：{{ JSON.stringify(changedData) }}（{{ changeCount }} 次）
	</p>
</template>
