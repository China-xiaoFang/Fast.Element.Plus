<script setup lang="ts">
const createImage = (text: string, color: string): string =>
	"data:image/svg+xml;charset=UTF-8," +
	encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" rx="20" fill="${color}"/><circle cx="70" cy="70" r="32" fill="rgba(255,255,255,.32)"/><path d="M30 170 105 105l48 42 42-32 95 55" fill="none" stroke="white" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><text x="250" y="58" text-anchor="middle" font-size="30" fill="white">${text}</text></svg>`
	);

const rows = [
	{ id: 1, name: "项目封面", cover: createImage("封面", "#409eff") },
	{ id: 2, name: "产品截图", cover: createImage("截图", "#67c23a") },
	{ id: 3, name: "无图片占位", cover: "" },
];
</script>

<template>
	<FaTable :data="rows" :pagination="false" :tool-btn="false" hide-search-time>
		<FaTableColumn type="index" label="#" width="58" />
		<FaTableColumn prop="cover" label="缩略图与预览" type="image" original-image width="130" />
		<FaTableColumn prop="cover" label="隐藏缩略图" type="image" hide-image width="130" />
		<FaTableColumn prop="name" label="资源名称" min-width="180" />
	</FaTable>
</template>
