<script setup lang="ts">
const detail = {
	name: "Fast.Element.Plus",
	version: "2.0.2",
	license: "Apache-2.0",
	description: "Fast 系列内部业务组件库",
};
</script>

<template>
	<FaForm :model="detail" detail-form :cols="2">
		<FaFormItem label="项目名称"
			><span>{{ detail.name }}</span></FaFormItem
		>
		<FaFormItem label="当前版本"
			><ElTag>{{ detail.version }}</ElTag></FaFormItem
		>
		<FaFormItem label="开源许可"
			><span>{{ detail.license }}</span></FaFormItem
		>
		<FaFormItem label="项目说明" row
			><span>{{ detail.description }}</span></FaFormItem
		>
	</FaForm>
</template>
