<script setup lang="ts">
import { ref } from "vue";

const icon = ref<string | null>("el-icon-Search");
</script>

<template>
	<div class="demo-stack">
		<FaIconSelector v-model="icon" style="max-width: 360px" />
		<span class="demo-value">当前图标：{{ icon ?? "未选择" }}</span>
	</div>
</template>
