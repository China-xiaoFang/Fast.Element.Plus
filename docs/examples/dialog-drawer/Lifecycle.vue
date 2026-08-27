<script setup lang="ts">
import { ref } from "vue";

interface DialogExpose {
	close: (callback?: () => void | Promise<void>) => void;
	open: () => void;
}

const dialogRef = ref<DialogExpose>();
const logs = ref<string[]>([]);
const append = (message: string): void => {
	logs.value.unshift(`${new Date().toLocaleTimeString()} ${message}`);
};
const waitOpen = async (): Promise<void> => {
	append("afterOpen 开始");
	await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
	append("afterOpen 完成");
};
const waitClose = async (): Promise<void> => {
	append("beforeClose 开始");
	await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
	append("beforeClose 完成");
};
</script>

<template>
	<div class="demo-stack">
		<ElButton type="primary" @click="dialogRef?.open()">观察事件时序</ElButton>
		<div class="demo-log">
			<div v-for="item in logs" :key="item">{{ item }}</div>
			<span v-if="logs.length === 0">尚无事件</span>
		</div>
	</div>
	<FaDialog
		ref="dialogRef"
		title="异步生命周期"
		:after-open="waitOpen"
		:before-close="waitClose"
		@open="append('Fast open 事件')"
		@opened="append('Element opened 动画事件')"
		@close="append('Fast close 事件')"
		@closed="append('Element closed 动画事件')"
		@confirm-click="dialogRef?.close(waitClose)"
	>
		<template #default="{ loading }">{{ loading ? "等待业务钩子" : "业务内容已可操作" }}</template>
	</FaDialog>
</template>
