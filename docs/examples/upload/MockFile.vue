<script setup lang="ts">
import { reactive } from "vue";

const form = reactive<{ credentialPhoto: string | null }>({
	credentialPhoto: null,
});
const uploadApi = async (formData: FormData): Promise<string> => {
	await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
	const file = formData.get("file");
	if (!(file instanceof File)) throw new TypeError("未找到上传文件");
	return URL.createObjectURL(file);
};
</script>

<template>
	<ElForm :model="form" label-width="88px" style="max-width: 620px">
		<ElFormItem label="证件照" prop="credentialPhoto" required>
			<div class="demo-stack" style="width: 100%">
				<FaUpload
					v-model="form.credentialPhoto"
					:upload-api="uploadApi"
					accept=".jpg,.jpeg,.png,image/jpeg,image/png"
					:max-size="2048"
					style="width: min(100%, 280px)"
				>
					<template #tip>
						<div class="el-upload__tip">仅允许 JPG/PNG，大小不超过 2 MB；示例使用本地 Object URL，不发送网络请求。</div>
					</template>
				</FaUpload>
				<span class="demo-value">模型值：{{ form.credentialPhoto ?? "尚未上传" }}</span>
			</div>
		</ElFormItem>
	</ElForm>
</template>
