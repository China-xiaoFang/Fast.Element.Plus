<script setup lang="ts">
import { ref } from "vue";

const carNumber = ref<string | null>("粤B12345");
</script>

<template>
	<div class="demo-stack">
		<FaCarNumber v-model="carNumber" clearable style="max-width: 360px" />
		<FaCarNumber model-value="粤B12345" disabled style="max-width: 360px" />
		<span class="demo-value">当前车牌：{{ carNumber ?? "未选择" }}</span>
	</div>
</template>
