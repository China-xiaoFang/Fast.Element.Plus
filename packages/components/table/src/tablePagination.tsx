import { defineComponent, inject } from "vue";
import { ElNotification, ElPagination } from "element-plus";
import { definePropType, useRender } from "@fast-china/utils";
import { isNull, isNumber } from "lodash-unified";
import { tableStateKey } from "./useTable";

export default defineComponent({
	name: "FaTablePagination",
	props: {
		/** @description 页码 */
		pageSizes: {
			type: definePropType<number[]>(Array),
			default: [20, 30, 50, 100, 200, 300, 500, 1000],
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

		const handleSizeChange = (pageSize: number): void => {
			if (pageSize > 100) {
				ElNotification({
					title: "欢迎",
					message: "当前页码已经超过100条/页，可能会造成页面卡顿。",
					type: "warning",
					duration: 1000,
				});
			}
			emit("sizeChange", pageSize);
		};

		useRender(() => (
			<ElPagination
				class="fa-table-pagination"
				size="small"
				vModel:currentPage={tableState.tablePagination.pageIndex}
				vModel:pageSize={tableState.tablePagination.pageSize}
				pageSizes={props.pageSizes}
				background
				layout="jumper, prev, pager, next, sizes, total"
				total={tableState.tablePagination.totalRows}
				onSizeChange={handleSizeChange}
				onCurrentChange={(currentPage: number) => emit("currentChange", currentPage)}
			/>
		));
	},
});
