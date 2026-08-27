<script setup lang="ts">
const avatar =
	"data:image/svg+xml;charset=UTF-8," +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#409eff"/><text x="60" y="76" text-anchor="middle" font-size="34" fill="white">Fast</text></svg>'
	);
const pixel = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl2nzoAAAAASUVORK5CYII=";
</script>

<template>
	<div class="demo-row">
		<div class="demo-caption-item"><FaAvatar :src="avatar" original :size="64" /><span>原图</span></div>
		<div class="demo-caption-item"><FaAvatar :src="avatar" original shape="square" :size="64" /><span>方形</span></div>
		<div class="demo-caption-item"><FaAvatar :src="pixel" base64 :size="64">Base64</FaAvatar><span>Base64</span></div>
		<div class="demo-caption-item"><FaAvatar :size="64" /><span>默认图标</span></div>
	</div>
</template>
