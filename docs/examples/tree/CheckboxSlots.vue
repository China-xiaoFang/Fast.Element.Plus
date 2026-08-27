<script setup lang="ts">
const data = [
	{
		value: "components",
		label: "组件",
		showQuantity: true,
		quantity: 26,
		children: [
			{ value: "form", label: "表单", showQuantity: true, quantity: 4 },
			{ value: "table", label: "表格", showQuantity: true, quantity: 2 },
			{ value: "upload", label: "上传", disabled: true },
		],
	},
	{ value: "guide", label: "开发指南", showQuantity: true, quantity: 3 },
];
</script>

<template>
	<FaTree :data="data" title="功能目录" :width="340" show-checkbox draggable>
		<template #label="{ node }"
			><strong>{{ node.label }}</strong></template
		>
		<template #default="{ data: item }"><ElTag v-if="item.disabled" size="small" type="info">禁用</ElTag></template>
	</FaTree>
</template>
