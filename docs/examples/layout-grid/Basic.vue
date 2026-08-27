<template>
	<FaLayoutGrid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }" :gap="16">
		<FaLayoutGridItem v-for="item in 5" :key="item">
			<div class="demo-grid-card">第 {{ item }} 项</div>
		</FaLayoutGridItem>
		<FaLayoutGridItem :span="2" :xs="{ span: 1 }">
			<div class="demo-grid-card">桌面占两列，手机占一列</div>
		</FaLayoutGridItem>
	</FaLayoutGrid>
</template>
