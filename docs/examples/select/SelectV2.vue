<script setup lang="ts">
import { ref } from "vue";

const value = ref<number[]>([]);
const data = Array.from({ length: 1000 }, (_, index) => ({
	value: index + 1,
	label: `虚拟选项 ${String(index + 1).padStart(4, "0")}`,
	group: `分组 ${Math.floor(index / 100) + 1}`,
}));
</script>

<template>
	<FaSelectV2 v-model="value" :data="data" multiple filterable more-detail clearable placeholder="从 1000 项中筛选" style="max-width: 480px">
		<template #default="{ item }">
			<div class="demo-option-detail">
				<strong>{{ item.label }}</strong
				><small>{{ item["group"] }}</small>
			</div>
		</template>
	</FaSelectV2>
</template>
