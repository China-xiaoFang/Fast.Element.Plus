<script setup lang="ts">
import { ref } from "vue";

const file = ref<string | string[] | null>(null);
const image = ref<string | string[] | null>(null);
</script>

<template>
	<div class="demo-row" style="align-items: flex-start">
		<FaUpload v-model="file" disabled>
			<ElButton type="primary" disabled>选择文件</ElButton>
			<template #tip>示例禁用真实上传，请在项目中配置 uploadApi 或 uploadUrl。</template>
		</FaUpload>
		<FaUploadImage v-model="image" disabled :width="180" :height="120" />
	</div>
</template>
