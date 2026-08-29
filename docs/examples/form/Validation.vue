<script setup lang="ts">
import { reactive, useTemplateRef } from "vue";
import { ElMessage } from "element-plus";
import type { FormRules } from "element-plus";

interface FormExpose {
	resetFields?: () => void;
	validateScrollToField: () => Promise<boolean>;
}

const formRef = useTemplateRef<FormExpose>("formRef");
const form = reactive({ name: "", email: "" });
const rules: FormRules = {
	name: [{ required: true, message: "请输入应用名称", trigger: "blur" }],
	email: [
		{ required: true, message: "请输入邮箱", trigger: "blur" },
		{ type: "email", message: "邮箱格式不正确", trigger: "blur" },
	],
};

const submit = async (): Promise<void> => {
	if (await formRef.value?.validateScrollToField()) ElMessage.success("校验通过");
};
</script>

<template>
	<FaForm ref="formRef" :model="form" :rules="rules" :cols="2">
		<FaFormItem label="应用名称" prop="name" tips="必填，失焦时校验">
			<ElInput v-model="form.name" placeholder="请输入应用名称" />
		</FaFormItem>
		<FaFormItem label="联系邮箱" prop="email">
			<ElInput v-model="form.email" placeholder="team@example.com" />
		</FaFormItem>
		<FaFormItem row>
			<div class="demo-row">
				<ElButton type="primary" @click="submit">提交并滚动到错误项</ElButton>
				<ElButton @click="formRef?.resetFields?.()">重置</ElButton>
			</div>
		</FaFormItem>
	</FaForm>
</template>
