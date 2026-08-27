<script setup lang="ts">
import { ref } from "vue";

const value = ref<number | null>(null);
const data = [
	{ id: 1, name: "平台研发部", locked: false, description: "负责 SDK 与基础设施" },
	{ id: 2, name: "业务研发部", locked: false, description: "负责业务应用交付" },
	{ id: 3, name: "归档部门", locked: true, description: "不可继续选择" },
	{ id: 4, name: "隐藏部门", hidden: true, description: "不会出现在下拉列表" },
];
</script>

<template>
	<FaSelect
		v-model="value"
		:data="data"
		:props="{ label: 'name', disabled: 'locked', hide: 'hidden' }"
		value-key="id"
		more-detail
		clearable
		placeholder="选择部门"
		style="max-width: 420px"
	>
		<template #default="option">
			<div class="demo-option-detail">
				<strong>{{ option.label }}</strong
				><small>{{ option["description"] }}</small>
			</div>
		</template>
	</FaSelect>
</template>
