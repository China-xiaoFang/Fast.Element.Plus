<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
	name: "Fast Admin",
	status: "enabled",
	remark: "",
});
</script>

<template>
	<FaForm :model="form" :cols="{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }">
		<FaFormItem label="应用名称" prop="name" tips="显示在系统标题和浏览器标签中">
			<ElInput v-model="form.name" maxlength="30" />
		</FaFormItem>
		<FaFormItem label="状态" prop="status">
			<ElSelect v-model="form.status">
				<ElOption label="启用" value="enabled" />
				<ElOption label="停用" value="disabled" />
			</ElSelect>
		</FaFormItem>
		<FaFormItem label="备注" prop="remark" row>
			<ElInput v-model="form.remark" type="textarea" :rows="3" maxlength="120" />
		</FaFormItem>
	</FaForm>
</template>
