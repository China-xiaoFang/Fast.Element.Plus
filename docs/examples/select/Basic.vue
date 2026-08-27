<script setup lang="ts">
import { ref } from "vue";

const departmentId = ref<number>();
const departmentName = ref<string | null>(null);
const roles = ref<number[]>([]);

const departments = [
	{ value: 1, label: "研发中心" },
	{ value: 2, label: "产品中心" },
	{ value: 3, label: "运营中心", disabled: true },
];
</script>

<template>
	<div class="demo-row">
		<FaSelect
			v-model="departmentId"
			v-model:label="departmentName"
			:data="departments"
			clearable
			filterable
			placeholder="选择部门"
			style="width: 240px"
		/>
		<FaSelect v-model="roles" :data="departments" multiple clearable placeholder="选择多个部门" style="width: 300px" />
	</div>
	<p style="margin: 14px 0 0; color: var(--el-text-color-secondary)">
		当前值：{{ departmentId ?? "未选择" }}；当前标签：{{ departmentName ?? "未选择" }}
	</p>
</template>
