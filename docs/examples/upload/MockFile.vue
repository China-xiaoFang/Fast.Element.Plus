<script setup lang="ts">
import { ref } from "vue";

const fileUrl = ref<string | null>(null);
const uploadApi = async (formData: FormData): Promise<string> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
	const file = formData.get("file");
	if (!(file instanceof File)) throw new TypeError("未找到上传文件");
	return URL.createObjectURL(file);
};
</script>

<template>
	<div class="demo-stack">
		<FaUpload v-model="fileUrl" :upload-api="uploadApi" accept=".txt,.md,text/plain,text/markdown" :max-size="1024">
			<template #tip>仅允许 TXT/Markdown，最大 1 MB；示例使用本地 Object URL，不发送网络请求。</template>
		</FaUpload>
		<span class="demo-value">模型值：{{ fileUrl ?? "尚未上传" }}</span>
	</div>
</template>
