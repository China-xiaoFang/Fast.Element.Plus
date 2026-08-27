<script setup lang="ts">
import { ref } from "vue";

const breakpoint = ref("等待布局计算");
</script>

<template>
	<div class="demo-stack">
		<ElAlert :closable="false" :title="`当前容器断点：${breakpoint}`" type="info" />
		<FaLayoutGrid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }" :gap="12" @break-point-change="breakpoint = $event.breakPoint">
			<FaLayoutGridItem v-for="item in 5" :key="item"
				><div class="demo-grid-card">{{ item }}</div></FaLayoutGridItem
			>
		</FaLayoutGrid>
	</div>
</template>
