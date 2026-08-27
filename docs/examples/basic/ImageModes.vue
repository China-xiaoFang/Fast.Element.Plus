<script setup lang="ts">
const image =
	"data:image/svg+xml;charset=UTF-8," +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g"><stop stop-color="#409eff"/><stop offset="1" stop-color="#36cfc9"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/><circle cx="500" cy="80" r="45" fill="#fff" opacity=".65"/><text x="48" y="205" font-size="54" fill="white">Fast.Element.Plus</text></svg>'
	);
</script>

<template>
	<div class="demo-image-grid">
		<div><FaImage :src="image" original fit="cover" style="width: 100%; height: 140px" /><span>Cover + 点击预览</span></div>
		<div><FaImage :src="image" original fit="contain" style="width: 100%; height: 140px" /><span>Contain</span></div>
		<div>
			<FaImage src="invalid-image" original :preview="false" style="width: 100%; height: 140px">
				<template #error><div class="demo-image-error">自定义加载失败</div></template>
			</FaImage>
			<span>错误插槽</span>
		</div>
	</div>
</template>
