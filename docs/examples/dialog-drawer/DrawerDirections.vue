<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from "vue";
import type { DrawerProps } from "element-plus";

const drawerRef = useTemplateRef<{ open: () => Promise<void> }>("drawerRef");
const direction = ref<DrawerProps["direction"]>("rtl");

const open = async (value: DrawerProps["direction"]): Promise<void> => {
	direction.value = value;
	await nextTick();
	await drawerRef.value?.open();
};
</script>

<template>
	<div class="demo-row">
		<ElButton @click="open('ltr')">从左侧打开</ElButton>
		<ElButton type="primary" @click="open('rtl')">从右侧打开</ElButton>
		<ElButton @click="open('ttb')">从顶部打开</ElButton>
		<ElButton @click="open('btt')">从底部打开</ElButton>
	</div>
	<FaDrawer ref="drawerRef" :direction="direction" :size="direction === 'rtl' || direction === 'ltr' ? '42%' : '45%'" title="可拖动 Drawer">
		<div class="demo-stack">
			<ElAlert :closable="false" title="拖动内容边缘可改变 Drawer 尺寸" type="info" />
			<p>当前方向：{{ direction }}</p>
		</div>
	</FaDrawer>
</template>
