<script setup lang="ts">
import { ref } from "vue";

const value = ref<number[]>([]);
const label = ref<string[] | null>([]);
const changedData = ref<unknown>();
const data = Array.from({ length: 1000 }, (_, index) => ({
	value: index + 1,
	label: `虚拟选项 ${String(index + 1).padStart(4, "0")}`,
	group: `分组 ${Math.floor(index / 100) + 1}`,
}));
</script>

<template>
	<div class="demo-stack">
		<FaSelectV2
			v-model="value"
			v-model:label="label"
			:data="data"
			multiple
			filterable
			more-detail
			clearable
			placeholder="从 1000 项中筛选"
			style="max-width: 480px"
			@change="changedData = $event"
		>
			<template #default="{ item }">
				<div class="demo-option-detail">
					<strong>{{ item.label }}</strong
					><small>{{ item["group"] }}</small>
				</div>
			</template>
		</FaSelectV2>
		<span class="demo-value"
			>值：{{ JSON.stringify(value) }}；标签：{{ JSON.stringify(label) }}；change 数据：{{ JSON.stringify(changedData) }}</span
		>
	</div>
</template>
