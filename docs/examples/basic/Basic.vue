<script setup lang="ts">
import { ElMessage } from "element-plus";

const handleAsyncClick = (_event: MouseEvent, done?: () => void): void => {
	window.setTimeout(() => {
		ElMessage.success("异步操作完成");
		done?.();
	}, 700);
};
</script>

<template>
	<div class="demo-row">
		<FaButton type="primary" @click="handleAsyncClick">异步按钮</FaButton>
		<FaButton type="success" disabled-loading>普通按钮</FaButton>
		<FaButton type="warning" plain disabled-loading>警告操作</FaButton>
		<FaAvatar :size="42" />
		<FaIcon name="el-icon-Search" :size="22" color="var(--el-color-primary)" />
	</div>
</template>
