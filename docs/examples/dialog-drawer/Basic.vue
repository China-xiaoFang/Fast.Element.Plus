<script setup lang="ts">
import { useTemplateRef } from "vue";

interface ContainerExpose {
	close: (callback?: () => void | Promise<void>) => void;
	open: (callback?: () => void | Promise<void>) => void;
}

const dialogRef = useTemplateRef<ContainerExpose>("dialogRef");

const wait = async (): Promise<void> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 600));
};

const confirmDialog = (): void => {
	dialogRef.value?.close(wait);
};
</script>

<template>
	<div class="demo-row">
		<ElButton type="primary" @click="dialogRef?.open(wait)">打开 Dialog</ElButton>
	</div>

	<FaDialog ref="dialogRef" title="编辑项目" :before-close="wait" @confirm-click="confirmDialog">
		<template #default="{ loading }">
			<ElAlert :closable="false" :title="loading ? '正在执行业务钩子…' : '内容已就绪'" type="success" />
		</template>
	</FaDialog>
</template>
