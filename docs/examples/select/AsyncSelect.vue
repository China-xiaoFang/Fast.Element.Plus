<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

interface SelectExpose {
	loading: boolean;
	refresh: () => Promise<void>;
}

const selectRef = useTemplateRef<SelectExpose>("selectRef");
const value = ref<number | null>(null);
let loadCount = 0;

const requestApi = async (): Promise<Record<string, unknown>[]> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 450));
	loadCount++;
	return [
		{ value: 1, label: `研发中心（第 ${loadCount} 次加载）` },
		{ value: 2, label: "产品中心" },
		{ value: 3, label: "运营中心" },
	];
};
</script>

<template>
	<div class="demo-row">
		<FaSelect ref="selectRef" v-model="value" :request-api="requestApi" clearable placeholder="首次展开时加载" style="width: 300px" />
		<ElButton :loading="selectRef?.loading" @click="selectRef?.refresh()">主动刷新</ElButton>
	</div>
</template>
