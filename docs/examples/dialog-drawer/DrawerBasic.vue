<script setup lang="ts">
import { useTemplateRef } from "vue";

interface DrawerExpose {
	close: (callback?: () => void | Promise<void>) => Promise<void>;
	open: (callback?: () => void | Promise<void>) => Promise<void>;
}

const drawerRef = useTemplateRef<DrawerExpose>("drawerRef");
const wait = async (): Promise<void> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 600));
};
const confirm = (): void => {
	void drawerRef.value?.close(wait);
};
</script>

<template>
	<ElButton type="primary" @click="drawerRef?.open(wait)">异步打开 Drawer</ElButton>
	<FaDrawer ref="drawerRef" title="项目详情" size="42%" :before-close="wait" @confirm-click="confirm">
		<template #default="{ loading }">
			<ElAlert :closable="false" :title="loading ? '正在执行业务钩子…' : '内容已就绪'" type="success" />
		</template>
	</FaDrawer>
</template>
