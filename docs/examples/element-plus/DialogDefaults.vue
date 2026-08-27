<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
	<ElButton type="primary" @click="visible = true">打开原生 ElDialog</ElButton>
	<ElDialog v-model="visible" title="默认可拖拽的 ElDialog" width="min(520px, 90vw)">
		<p>此处没有传入 draggable；导入 Fast.Element.Plus 根入口后默认值已变为 true。</p>
		<template #footer>
			<ElButton @click="visible = false">关闭</ElButton>
		</template>
	</ElDialog>
</template>
