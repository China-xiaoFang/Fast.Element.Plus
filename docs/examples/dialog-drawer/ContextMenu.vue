<script setup lang="ts">
import { useTemplateRef } from "vue";
import { ElMessage } from "element-plus";

interface ContextMenuExpose {
	open: (axis: { x: number; y: number }) => void;
}

const menuRef = useTemplateRef<ContextMenuExpose>("menuRef");
const data = [
	{
		name: "refresh",
		label: "刷新",
		icon: "el-icon-Refresh",
		click: () => {
			ElMessage.success("已刷新");
		},
	},
	{ name: "edit", label: "编辑", icon: "el-icon-Edit" },
	{ name: "locked", label: "禁用项", icon: "el-icon-Lock", disabled: true },
	{ name: "hidden", label: "隐藏项", hide: true },
];
const openMenu = (event: MouseEvent): void => {
	event.preventDefault();
	menuRef.value?.open({ x: event.clientX, y: event.clientY });
};
</script>

<template>
	<div class="demo-context-target" @contextmenu="openMenu">在此区域单击鼠标右键</div>
	<FaContextMenu ref="menuRef" :data="data" />
</template>
