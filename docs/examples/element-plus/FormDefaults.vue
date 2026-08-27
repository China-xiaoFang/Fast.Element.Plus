<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({ name: "Fast", count: 1 });
</script>

<template>
	<ElForm :model="form" style="max-width: 520px">
		<ElFormItem label="项目名称">
			<ElInput v-model="form.name" maxlength="12" placeholder="默认显示字数统计" />
		</ElFormItem>
		<ElFormItem label="副本数量">
			<ElInputNumber v-model="form.count" :min="1" :max="10" />
		</ElFormItem>
	</ElForm>
</template>
