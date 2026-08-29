<script setup lang="ts">
import { useTemplateRef } from "vue";

interface DialogExpose {
	close: (callback?: () => void | Promise<void>) => void;
	doLoading: (callback: () => void | Promise<void>) => void;
	open: (callback?: () => void | Promise<void>) => void;
}

const dialogRef = useTemplateRef<DialogExpose>("dialogRef");
const load = async (): Promise<void> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
};
</script>

<template>
	<ElButton type="primary" @click="dialogRef?.open(load)">通过 Expose 打开</ElButton>
	<FaDialog ref="dialogRef" title="完整功能 Dialog" full-height style="--height: 72%" width="72%" show-before-close>
		<template #header><ElTag size="small">自定义 Header</ElTag></template>
		<template #default="{ loading }">
			<div class="demo-stack">
				<ElAlert :closable="false" :title="loading ? '业务处理中…' : '内容已就绪'" type="success" />
				<ElButton @click="dialogRef?.doLoading(load)">运行局部异步任务</ElButton>
			</div>
		</template>
		<template #footer="{ close }"><ElButton @click="close">插槽关闭</ElButton></template>
	</FaDialog>
</template>
