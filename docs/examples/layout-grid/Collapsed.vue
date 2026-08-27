<script setup lang="ts">
import { ref } from "vue";

const collapsed = ref(true);
</script>

<template>
	<FaLayoutGrid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }" :gap="[16, 12]" :collapsed="collapsed" :collapsed-rows="1">
		<FaLayoutGridItem v-for="item in 8" :key="item" :index="item - 1">
			<div class="demo-grid-card">筛选项 {{ item }}</div>
		</FaLayoutGridItem>
		<FaLayoutGridItem suffix :span="1">
			<ElButton type="primary" @click="collapsed = !collapsed">{{ collapsed ? "展开" : "收起" }}</ElButton>
		</FaLayoutGridItem>
	</FaLayoutGrid>
</template>
