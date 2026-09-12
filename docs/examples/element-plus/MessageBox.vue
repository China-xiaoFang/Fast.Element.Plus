<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";

const showAlert = (): void => {
	ElMessageBox.alert("默认标题为“温馨提示”，确定按钮为“确定”。").then(() => ElMessage.success("已确认"));
};

const showConfirm = (): void => {
	ElMessageBox.confirm("默认显示取消按钮，并禁止点击遮罩或按 Escape 关闭。", { type: "warning" })
		.then(() => ElMessage.success("已确认"))
		.catch(() => ElMessage.info("已取消"));
};

const showPrompt = (): void => {
	ElMessageBox.prompt("请输入项目名称。")
		.then(({ value }) => ElMessage.success(`已输入：${value}`))
		.catch(() => ElMessage.info("已取消"));
};

const showAsyncConfirm = (): void => {
	ElMessageBox.confirm("确认后模拟异步保存；完成前按钮和全局遮罩保持 Loading。", {
		type: "info",
		beforeClose: (action, instance, done) => {
			if (action !== "confirm") {
				done();
				return;
			}
			instance.confirmButtonLoading = true;
			window.setTimeout(() => {
				instance.confirmButtonLoading = false;
				ElMessage.success("保存完成");
				done();
			}, 1200);
		},
	}).catch(() => ElMessage.info("已取消"));
};
</script>

<template>
	<div class="demo-row">
		<ElButton @click="showAlert">Alert</ElButton>
		<ElButton type="warning" @click="showConfirm">Confirm</ElButton>
		<ElButton type="success" @click="showPrompt">Prompt</ElButton>
		<ElButton type="primary" @click="showAsyncConfirm">异步 beforeClose</ElButton>
	</div>
</template>
