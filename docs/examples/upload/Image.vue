<script setup lang="ts">
import { ref } from "vue";

const createImage = (text: string, color: string): string =>
	"data:image/svg+xml;charset=UTF-8," +
	encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" rx="18" fill="${color}"/><text x="160" y="115" text-anchor="middle" font-size="38" fill="white">${text}</text></svg>`
	);
const image = ref<string | null>(createImage("封面图", "#409eff"));
const uploadApi = async (formData: FormData): Promise<string> => {
	const file = formData.get("file");
	if (!(file instanceof File)) throw new TypeError("未找到上传图片");
	return URL.createObjectURL(file);
};
</script>

<template>
	<FaUploadImage v-model="image" :upload-api="uploadApi" :width="220" :height="140" />
</template>
