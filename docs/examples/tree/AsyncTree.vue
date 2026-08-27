<script setup lang="ts">
import { ref } from "vue";

interface TreeExpose {
	loading: boolean;
	refresh: () => Promise<void>;
}

const treeRef = ref<TreeExpose>();
let version = 0;
const requestApi = async (): Promise<Record<string, unknown>[]> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 400));
	version++;
	return [
		{ value: "components", label: `组件（刷新 ${version}）`, children: [{ value: "table", label: "表格" }] },
		{ value: "sdk", label: "SDK", children: [{ value: "net", label: "Fast.NET" }] },
	];
};
</script>

<template>
	<div class="demo-stack">
		<ElButton :loading="treeRef?.loading" @click="treeRef?.refresh()">重新请求树数据</ElButton>
		<FaTree ref="treeRef" :request-api="requestApi" title="异步目录" :width="360" />
	</div>
</template>
