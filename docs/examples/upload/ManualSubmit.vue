<script setup lang="ts">
import { ref } from "vue";

interface UploadExpose {
	clearFiles?: () => void;
	submit?: () => void;
}

const uploadRef = ref<UploadExpose>();
const fileUrl = ref<string | null>(null);
const uploadApi = async (formData: FormData): Promise<string> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 350));
	const file = formData.get("file");
	if (!(file instanceof File)) throw new TypeError("未找到上传文件");
	return URL.createObjectURL(file);
};
</script>

<template>
	<div class="demo-stack">
		<FaUpload ref="uploadRef" v-model="fileUrl" :upload-api="uploadApi" :auto-upload="false" :drag="false" show-file-list>
			<ElButton type="primary">选择文件</ElButton>
			<template #tip>选择后通过 Expose 手动提交。</template>
		</FaUpload>
		<div class="demo-row">
			<ElButton type="success" @click="uploadRef?.submit?.()">开始上传</ElButton>
			<ElButton @click="uploadRef?.clearFiles?.()">清空列表</ElButton>
		</div>
	</div>
</template>
