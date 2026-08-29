<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

interface TreeExpose {
	append?: (data: Record<string, unknown>, parent: string) => void;
	getCheckedKeys?: () => unknown[];
	remove?: (key: string) => void;
	setCheckedKeys?: (keys: string[]) => void;
}

const treeRef = useTemplateRef<TreeExpose>("treeRef");
const checked = ref("暂无");
const data = [
	{
		value: "root",
		label: "Fast 系列",
		children: [
			{ value: "element", label: "Fast.Element.Plus" },
			{ value: "net", label: "Fast.NET" },
		],
	},
];

const readChecked = (): void => {
	checked.value = treeRef.value?.getCheckedKeys?.().join("、") || "暂无";
};
</script>

<template>
	<div class="demo-stack">
		<div class="demo-row">
			<ElButton @click="treeRef?.setCheckedKeys?.(['element'])">选中组件库</ElButton>
			<ElButton @click="treeRef?.append?.({ value: 'admin', label: 'Fast.Admin' }, 'root')">追加节点</ElButton>
			<ElButton @click="treeRef?.remove?.('admin')">删除追加节点</ElButton>
			<ElButton type="primary" @click="readChecked">读取选中 Key</ElButton>
		</div>
		<FaTree ref="treeRef" :data="data" hide-all hide-filter show-checkbox node-key="value" :width="360" />
		<span class="demo-value">选中 Key：{{ checked }}</span>
	</div>
</template>
