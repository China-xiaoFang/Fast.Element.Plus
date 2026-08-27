import { defineComponent, inject } from "vue";
import { ElNotification, ElPagination } from "element-plus";
import { isNull, isNumber } from "lodash-unified";
import { definePropType, useRender } from "../../../utils";
import { tableStateKey } from "./useTable";

export default defineComponent({
	name: "FaTablePagination",
	props: {
		/** @description 页码 */
		pageSizes: {
			type: definePropType<number[]>(Array),
			default: [20, 30, 50, 100],
		},
	},
	emits: {
		/** @description 页码改变 */
		sizeChange: (pageSize: number) => isNumber(pageSize) || isNull(pageSize),
		/** @description 当前页数改变 */
		currentChange: (currentPage: number) => isNumber(currentPage) || isNull(currentPage),
	},
	setup(props, { emit }) {
		const tableState = inject(tableStateKey);
		if (tableState === undefined) {
			throw new Error("FaTablePagination 必须在 FaTable 内部渲染。");
		}

		const handleSizeChange = (pageSize: number): void => {
			if (pageSize > 100) {
				ElNotification({
					title: "欢迎",
					message: "当前页码已经超过100条/页，可能会造成页面卡顿。",
					type: "warning",
					duration: 2000,
				});
			}
			emit("sizeChange", pageSize);
		};

		useRender(() => (
			<ElPagination
				{...{
					"onUpdate:currentPage": (currentPage: number) => emit("currentChange", currentPage),
					"onUpdate:pageSize": handleSizeChange,
				}}
				class="fa-table-pagination"
				size="small"
				currentPage={tableState.tablePagination.pageIndex}
				pageSize={tableState.tablePagination.pageSize}
				pageSizes={props.pageSizes}
				background
				layout="jumper, prev, pager, next, sizes, total"
				total={tableState.tablePagination.totalRows}
			/>
		));
	},
});
