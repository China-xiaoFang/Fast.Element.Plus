<template>
	<FaLayoutGrid :cols="{ xs: 1, sm: 3, md: 4, lg: 5, xl: 6 }" :gap="16">
		<FaLayoutGridItem :span="2" :xs="{ span: 1 }"><div class="demo-grid-card">span=2，手机 span=1</div></FaLayoutGridItem>
		<FaLayoutGridItem :span="1" :offset="1" :xs="{ span: 1, offset: 0 }"><div class="demo-grid-card">offset=1</div></FaLayoutGridItem>
		<FaLayoutGridItem suffix :span="1"><div class="demo-grid-card">suffix 贴齐末列</div></FaLayoutGridItem>
	</FaLayoutGrid>
</template>
