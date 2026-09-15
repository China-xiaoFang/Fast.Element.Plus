<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { genFileId } from "element-plus";
import type { UploadRawFile } from "element-plus";

type UploadPreview = { handleStart: (file: UploadRawFile) => void; submit: () => void };
const pendingFileNoDrag = ref<UploadPreview | null>(null);
const pendingFileDrag = ref<UploadPreview | null>(null);
const pendingImageNoDrag = ref<UploadPreview | null>(null);
const pendingImageDrag = ref<UploadPreview | null>(null);
const pendingImagesNoDrag = ref<UploadPreview | null>(null);
const pendingImagesDrag = ref<UploadPreview | null>(null);
const pendingFormImage = ref<UploadPreview | null>(null);
const imageUrl = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140"><rect width="220" height="140" fill="#409eff"/><text x="110" y="77" text-anchor="middle" fill="white" font-size="18">已上传图片</text></svg>')}`;
const uploadApi = (): Promise<string> =>
	new Promise((resolve) => {
		window.setTimeout(resolve, 300_000, imageUrl);
	});
const singleImage = ref<string | null>(imageUrl);
const images = ref<string[] | null>([imageUrl]);

const startUpload = (target: UploadPreview) => {
	const png = Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII="), (character) =>
		character.charCodeAt(0)
	);
	const file = Object.assign(new File([png], "preview.png", { type: "image/png" }), { uid: genFileId() });
	target.handleStart(file);
	target.submit();
};

onMounted(() => {
	for (const target of [pendingFileNoDrag, pendingFileDrag, pendingImageNoDrag, pendingImageDrag, pendingImagesNoDrag, pendingImagesDrag]) {
		if (target.value) startUpload(target.value);
	}
});

watch(
	pendingFormImage,
	(target) => {
		if (target) startUpload(target);
	},
	{ once: true }
);
</script>

<template>
	<main class="upload-layout-preview">
		<h1>上传组件布局状态</h1>
		<div class="preview-matrix">
			<div class="matrix-heading">组件</div>
			<div class="matrix-heading">无拖拽 · 常态</div>
			<div class="matrix-heading">拖拽 · 常态</div>
			<div class="matrix-heading">无拖拽 · 加载</div>
			<div class="matrix-heading">拖拽 · 加载</div>
			<div class="matrix-label">FaUpload</div>
			<div class="matrix-cell"><FaUpload :drag="false" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUpload drag :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUpload ref="pendingFileNoDrag" :drag="false" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUpload ref="pendingFileDrag" drag :upload-api="uploadApi" /></div>
			<div class="matrix-label">FaUploadImage</div>
			<div class="matrix-cell"><FaUploadImage :drag="false" v-model="singleImage" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImage drag v-model="singleImage" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImage ref="pendingImageNoDrag" :drag="false" v-model="singleImage" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImage ref="pendingImageDrag" drag v-model="singleImage" :upload-api="uploadApi" /></div>
			<div class="matrix-label">FaUploadImages</div>
			<div class="matrix-cell"><FaUploadImages :drag="false" v-model="images" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImages drag v-model="images" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImages ref="pendingImagesNoDrag" :drag="false" v-model="images" :upload-api="uploadApi" /></div>
			<div class="matrix-cell"><FaUploadImages ref="pendingImagesDrag" drag v-model="images" :upload-api="uploadApi" /></div>
		</div>
		<h2>表单整行宽度下的单图上传</h2>
		<ClientOnly>
			<div class="form-preview-row">
				<ElForm class="form-width-test"
					><ElFormItem label="头像"><FaUploadImage v-model="singleImage" :upload-api="uploadApi" /></ElFormItem
				></ElForm>
				<ElForm class="form-width-test"
					><ElFormItem label="加载"><FaUploadImage ref="pendingFormImage" v-model="singleImage" :upload-api="uploadApi" /></ElFormItem
				></ElForm>
			</div>
		</ClientOnly>
	</main>
</template>

<style scoped>
.upload-layout-preview {
	padding: 28px;
	font-family: sans-serif;
}
.upload-layout-preview h1 {
	margin: 0 0 20px;
	font-size: 24px;
}
.preview-matrix {
	display: grid;
	grid-template-columns: 150px repeat(4, minmax(220px, 1fr));
	gap: 0;
}
.matrix-heading,
.matrix-label,
.matrix-cell {
	box-sizing: border-box;
	padding: 16px;
	border: 1px solid var(--el-border-color);
}
.matrix-heading {
	background: var(--el-fill-color-light);
	font-weight: 600;
}
.matrix-label {
	font-weight: 600;
}
.matrix-cell {
	min-width: 0;
	min-height: 210px;
}
.form-preview-row {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 24px;
}
.form-preview-row .el-form {
	min-width: 0;
}
</style>

<style>
.form-width-test.el-form:not(.fa-form-detail) .el-form-item .el-form-item__content > * {
	width: 100%;
}
</style>
