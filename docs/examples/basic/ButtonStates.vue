<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";

const buttonRef = ref<{ doLoading: (callback: () => void | Promise<void>) => void }>();

const handleAsyncClick = (_event: MouseEvent, done?: () => void): void => {
	window.setTimeout(() => {
		ElMessage.success("异步操作完成");
		done?.();
	}, 700);
};

const handleExposeLoading = (): void => {
	buttonRef.value?.doLoading(async () => {
		await new Promise<void>((resolve) => window.setTimeout(resolve, 800));
		ElMessage.success("Expose Loading 完成");
	});
};
</script>

<template>
	<div class="demo-stack">
		<div class="demo-row">
			<FaButton type="primary" @click="handleAsyncClick">自动 Loading</FaButton>
			<FaButton ref="buttonRef" type="success" disabled-loading @click="handleExposeLoading">Expose Loading</FaButton>
			<FaButton type="warning" plain disabled-loading>禁用自动 Loading</FaButton>
			<FaButton type="danger" disabled>禁用状态</FaButton>
		</div>
		<div class="demo-row">
			<FaButton size="small" round disabled-loading>小型圆角</FaButton>
			<FaButton type="primary" dashed disabled-loading>虚线按钮</FaButton>
			<FaButton type="primary" link disabled-loading>链接按钮</FaButton>
			<FaButton type="primary" circle icon="el-icon-Search" disabled-loading />
		</div>
	</div>
</template>
