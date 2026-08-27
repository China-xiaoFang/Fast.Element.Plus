<script setup lang="ts">
import { ref } from "vue";

interface RowData {
	id: number;
	name: string;
	owner: string;
	status: string;
	visits: number;
}

const sourceRows: RowData[] = [
	{ id: 1, name: "Fast.Element.Plus 文档与案例建设", owner: "小方", status: "进行中", visits: 1860 },
	{ id: 2, name: "Fast.NET SDK", owner: "研发组", status: "已完成", visits: 5320 },
	{ id: 3, name: "Fast.Admin 权限中心", owner: "平台组", status: "进行中", visits: 2980 },
	{ id: 4, name: "移动端业务门户", owner: "前端组", status: "已暂停", visits: 920 },
];
const rows = ref([...sourceRows]);

const filterStatus = (value: unknown, row: Record<string, unknown>): boolean => row["status"] === value;
const handleSort = ({ prop, order }: { order: "" | "ascending" | "descending"; prop: string }): void => {
	if (!order) {
		rows.value = [...sourceRows];
		return;
	}
	const key = prop as keyof RowData;
	const direction = order === "ascending" ? 1 : -1;
	rows.value = [...sourceRows].sort((left, right) => {
		const leftValue = Number(left[key]);
		const rightValue = Number(right[key]);
		return leftValue === rightValue ? 0 : leftValue > rightValue ? direction : -direction;
	});
};
</script>

<template>
	<FaTable :data="rows" :pagination="false" :tool-btn="false" height="320" hide-search-time border @sort-change="handleSort">
		<FaTableColumn type="index" label="#" width="58" fixed />
		<FaTableColumn prop="name" label="名称" min-width="230" fixed show-overflow-tooltip />
		<FaTableColumn prop="owner" label="负责人" width="110" />
		<FaTableColumn
			prop="status"
			label="状态筛选"
			width="130"
			:filters="[
				{ text: '进行中', value: '进行中' },
				{ text: '已完成', value: '已完成' },
				{ text: '已暂停', value: '已暂停' },
			]"
			:filter-method="filterStatus"
		/>
		<FaTableColumn prop="visits" label="访问量排序" width="140" sortable align="right" />
		<FaTableColumn label="固定操作" width="110" fixed="right">
			<template #default="{ row }"
				><ElButton link type="primary">查看 {{ row["id"] }}</ElButton></template
			>
		</FaTableColumn>
	</FaTable>
</template>
