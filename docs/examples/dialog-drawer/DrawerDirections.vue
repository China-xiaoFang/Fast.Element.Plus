<script setup lang="ts">
import { ref } from "vue";
import type { DrawerProps } from "element-plus";

const visible = ref(false);
const direction = ref<DrawerProps["direction"]>("rtl");

const open = (value: DrawerProps["direction"]): void => {
	direction.value = value;
	visible.value = true;
};
</script>

<template>
	<div class="demo-row">
		<ElButton @click="open('ltr')">从左侧打开</ElButton>
		<ElButton type="primary" @click="open('rtl')">从右侧打开</ElButton>
		<ElButton @click="open('ttb')">从顶部打开</ElButton>
		<ElButton @click="open('btt')">从底部打开</ElButton>
	</div>
	<FaDrawer v-model="visible" :direction="direction" :size="direction === 'rtl' || direction === 'ltr' ? '42%' : '45%'" title="可拖动 Drawer">
		<div class="demo-stack">
			<ElAlert :closable="false" title="拖动内容边缘可改变 Drawer 尺寸" type="info" />
			<p>当前方向：{{ direction }}</p>
		</div>
	</FaDrawer>
</template>
