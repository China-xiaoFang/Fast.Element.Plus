import { computed, nextTick, provide, reactive, ref, watch } from "vue";
import { dayjs, useGlobalSize } from "element-plus";
import { clickUtil, consoleError, execFunction, type makeSlots } from "@fast-china/utils";
import { isArray, isFunction } from "lodash-unified";
import { tableUtil } from "../utils/table";
import { getTableDefaultSlots } from "./table.type";
import type { PagedInput, PagedResult } from "./page.type";
import type { FaTableSlots, faTableEmits, faTableProps } from "./table";
import type { FaTableState } from "./table.state";
import type { FaTableColumnCtx, FaTableEnumColumnCtx } from "./table.type";
import type { TableInstance } from "element-plus";
import type { ExtractPropTypes, InjectionKey, SetupContext } from "vue";

export const tableStateKey: InjectionKey<FaTableState> = Symbol("tableState");
export const enumMapKey: InjectionKey<Map<string, FaTableEnumColumnCtx[]>> = Symbol("enumMap");

type TableSetupContext = SetupContext<typeof faTableEmits, ReturnType<typeof makeSlots<FaTableSlots>>>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const useTable = (props: ExtractPropTypes<typeof faTableProps>, slots: TableSetupContext["slots"], emit: TableSetupContext["emit"]) => {
	const _globalSize = useGlobalSize();

	const elementRef = ref<HTMLElement>();
	const tableRef = ref<TableInstance>();

	/**
	 * 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
	 */
	const enumMap = reactive(new Map<string, FaTableEnumColumnCtx[]>());
	provide(enumMapKey, enumMap);

	const state: FaTableState = reactive({
		loading: false,
		loadingText: "加载中...",
		orgColumns: [],
		tableColumns: computed(() => state.orgColumns.filter((f) => f.prop && !f.pureSearch)),
		searchColumns: computed(() =>
			state.orgColumns
				.filter((f) => f.pureSearch || f.search)
				.sort((a, b) => {
					return a.search?.order - b.search?.order;
				})
		),
		spanColumns: computed(() => [
			...state.orgColumns
				.filter((f) => f.spanProp)
				.map((col) => {
					return {
						prop: col?.prop,
						spanProp: col?.spanProp,
					};
				}),
			...(props.props.span
				? [
						{ prop: "__table-index", spanProp: props.props.span },
						{ prop: "__table-selection", spanProp: props.props.span },
						{ prop: "__table-operation", spanProp: props.props.span },
					]
				: []),
		]),
		tableData: [],
		tableSpanData: computed(() => {
			if (state.spanColumns?.length > 0 && state.tableData?.length > 0) {
				const result = [];
				state.spanColumns.forEach((item) => {
					result[item.prop] = new Array(state.tableData.length).fill(1, 0, 1).fill(0, 1);
					result[`${item.prop}-index`] = 0;
				});
				for (let i = 1; i < state.tableData.length; i++) {
					state.spanColumns.forEach((item) => {
						if (state.tableData[i][item.spanProp] === state.tableData[i - 1][item.spanProp]) {
							result[item.prop][result[`${item.prop}-index`]]++;
						} else {
							result[`${item.prop}-index`] = i;
							result[item.prop][i] = 1;
						}
					});
				}
				return result;
			}
			return [];
		}),
		tablePagination: {
			pageIndex: 1,
			pageSize: 20,
			totalRows: 0,
		},
		initParam: {},
		searchParam: {},
		searchValueUpdate: "",
		searchForm: props.searchForm,
		hideImage: computed(() => props.hideImage),
		selected: false,
		selectedList: [],
		selectedListIds: computed(() => state.selectedList.map((item) => (isFunction(props.rowKey) ? props.rowKey(item) : item[props.rowKey]))),
		indeterminateSelectedListIds: [],
		responseConfig: undefined,
		operationColumnWidth: computed(() => {
			const findAutoCol = state.autoColumnWidth.find((f) => f.prop === "__table-operation");
			if (findAutoCol) {
				return `${findAutoCol.width}px`;
			}
			switch (_globalSize.value) {
				case "large":
				case "default":
					return "54px";
				case "small":
					return "42px";
				default:
					return "auto";
			}
		}),
		imagePreview: false,
		previewList: [],
		tableWidth: undefined,
		tableHeight: undefined,
		autoColumnWidth: [],
	});

	provide(tableStateKey, state);

	const handleTableColumnAutoWidth = (): void => {
		state.loading = true;
		state.loadingText = "加载中...";
		state.autoColumnWidth = [];
		const autoWidthColumns = state.tableColumns.filter((f) => f.autoWidth);
		if (slots?.operation) {
			// 操作列自动宽度
			autoWidthColumns.push({
				prop: "__table-operation",
			});
		}
		if (autoWidthColumns?.length > 0) {
			// padding24/16 + border1
			const otherWidth = _globalSize.value === "default" ? 25 : 17;
			nextTick(() => {
				const tableDom = document.querySelector(`.fa-table__${props.tableKey}`);
				if (tableDom) {
					autoWidthColumns.forEach((item) => {
						const headerColumnDom = tableDom.querySelector(`.__fa-table__auto-width-column__cell-header__${item?.prop}`);
						const cellColumnDoms = tableDom.querySelectorAll(`.__fa-table__auto-width-column__cell__${item?.prop}`);
						let maxWidth = 0;
						if (headerColumnDom) {
							maxWidth = Math.ceil(headerColumnDom.scrollWidth) + otherWidth;
							if (item?.sortable) {
								maxWidth += 24;
							}
						}
						cellColumnDoms.forEach((cellDom) => {
							const curWidth = Math.ceil(cellDom.scrollWidth) + otherWidth;
							if (curWidth > maxWidth) {
								maxWidth = curWidth;
							}
						});
						const findInfo = state.autoColumnWidth.find((f) => f.prop === item?.prop);
						if (findInfo) {
							findInfo.width = Math.max(findInfo.width, maxWidth);
						} else {
							state.autoColumnWidth.push({
								prop: item?.prop,
								width: maxWidth,
							});
						}
					});
				}
			});
		}
		state.loading = false;
	};

	const handleTableData = (data: any[]): any[] => {
		if (props.treeData) {
			const result: any[] = [];
			data.forEach((row) => {
				const rowList = row[props.props.children];
				if (isArray(rowList)) {
					// 如果 rowList 是数组，遍历并合并每个子项
					rowList.forEach((cRow) => result.push({ ...row, ...cRow }));
				} else {
					result.push({ ...row, ...(rowList || {}) });
				}
			});
			return result;
		} else {
			return data;
		}
	};

	const getRequestParam = (): PagedInput => {
		const params = { ...state.searchParam, ...(props.pagination ? state.tablePagination : {}) };
		// 删除总条数
		delete params.totalRows;
		return params;
	};

	const loadData = async (): Promise<void> => {
		state.loading = true;
		state.loadingText = "加载中...";
		if (props.requestApi) {
			const params = getRequestParam();
			emit("refresh", params);
			let pageData = [];
			try {
				const resData = await props.requestApi(params);
				// 数据回调
				props.dataCallback && props.dataCallback(resData);
				// 解析 API 接口返回的分页数据（如果有分页更新分页信息）
				if (props.pagination) {
					const pageRes = resData as PagedResult;
					pageData = pageRes.rows;
					// 更新分页信息
					Object.assign(state.tablePagination, {
						pageIndex: pageRes.pageIndex,
						pageSize: pageRes.pageSize,
						totalRows: pageRes.totalRows,
					});
				} else {
					pageData = resData as any[];
					// 更新分页信息
					Object.assign(state.tablePagination, {
						pageIndex: 1,
						pageSize: 0,
						totalRows: pageData.length,
					});
				}
				state.tableData = handleTableData(pageData);
			} catch (error) {
				consoleError("FaTable", error);
				state.tableData = [];
			} finally {
				state.loading = false;
			}
		} else {
			emit("refresh", { searchValue: state.searchParam.searchValue });
			let _value = handleTableData(props.data);
			_value = _value.filter((f) => {
				if (!state.searchParam.searchValue) return true;
				return state.tableColumns.some((col) => {
					return f[col.prop]?.toString()?.toLowerCase().includes(state.searchParam.searchValue?.toLowerCase());
				});
			});
			if (state.searchParam.sortList?.length > 0) {
				_value = _value.sort(tableUtil.arrayDynamicSort(state.searchParam.sortList));
			}
			if (props.pagination) {
				// 更新分页信息
				Object.assign(state.tablePagination, {
					totalRows: _value.length,
				});
				const pageStart = (state.tablePagination.pageIndex - 1) * state.tablePagination.pageSize;
				const pageEnd = pageStart + state.tablePagination.pageSize;
				state.tableData = _value.slice(pageStart, pageEnd);
			} else {
				state.tableData = _value;
				// 更新分页信息
				Object.assign(state.tablePagination, {
					pageIndex: 1,
					pageSize: 0,
					totalRows: _value.length,
				});
			}
			state.loading = false;
		}
		handleTableColumnAutoWidth();
	};

	const loadTableColumns = (): void => {
		let columns: FaTableColumnCtx[] = props.columns;
		// 默认值处理
		columns.forEach((col) => {
			// 处理搜索项的 key 和 label
			if (col.pureSearch || col.search) {
				col.search.key ??= col.prop;
				col.search.label ??= col.label;
				// 处理默认值
				if (col.search.defaultValue) {
					state.searchParam[col.search.key] = col.search.defaultValue;
				}
			}
		});

		// 排序
		columns = columns.sort((a, b) => {
			return a?.order - b?.order;
		});

		// TODO:这里的扁平化暂时没用到
		state.orgColumns = tableUtil.flatColumns(columns, enumMap);
	};

	const handleSizeChange = (pageSize: number): void => {
		state.tablePagination.pageIndex = 1;
		state.tablePagination.pageSize = pageSize;
		emit("sizeChange", pageSize);
		emit("paginationChange", 1, pageSize);
		loadData();
	};
	const handlePaginationChange = (val: number): void => {
		state.tablePagination.pageIndex = val;
		emit("sizeChange", state.tablePagination.pageSize);
		emit("paginationChange", val, state.tablePagination.pageSize);
		loadData();
	};

	const updatedTotalParam = (): void => {
		// 处理查询参数，可以给查询参数加自定义前缀操作
		const newSearchParam = {};
		// 防止手动清空输入框携带参数（这里可以自定义查询参数前缀）
		for (const key in state.searchParam) {
			// * 某些情况下参数为 false/0 也应该携带参数
			if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
				newSearchParam[key] = state.searchParam[key];
			}
			// 处理某些情况下如果为空字符串，其实是不需要传到后端的
			else if (!state.searchParam[key]) {
				delete state.searchParam[key];
			}
		}
		Object.assign(state.searchParam, newSearchParam);
	};

	const defaultSearchTime = (): void => {
		if (props.hideSearchTime) {
			state.searchParam.searchTimeList = undefined;
		} else {
			const end = new Date();
			const start = new Date();
			switch (props.dataSearchRange) {
				case "Past1D":
					start.setDate(start.getDate() - 1);
					break;
				case "Past3D":
					start.setDate(start.getDate() - 3);
					break;
				case "Past1W":
					start.setDate(start.getDate() - 7);
					break;
				case "Past1M":
					start.setMonth(start.getMonth() - 1);
					break;
				case "Past3M":
					start.setMonth(start.getMonth() - 3);
					break;
				case "Past6M":
					start.setMonth(start.getMonth() - 6);
					break;
				case "Past1Y":
					start.setFullYear(start.getFullYear() - 1);
					break;
				case "Past3Y":
					start.setFullYear(start.getFullYear() - 3);
					break;
			}
			state.searchParam.searchTimeList = [dayjs(start).format("YYYY-MM-DD 00:00:00"), dayjs(end).format("YYYY-MM-DD 23:59:59")];
		}
	};

	const tableSearch = async (): Promise<void> => {
		// 重置到第一页
		state.tablePagination.pageIndex = 1;
		updatedTotalParam();
		await loadData();
	};

	const tableReset = async (): Promise<void> => {
		// 重置到第一页
		state.tablePagination.pageIndex = 1;
		// 清除搜索条件
		state.searchParam = {};
		defaultSearchTime();
		// 重置搜索表单的时候，如果有默认搜索参数，则重置默认的搜索参数
		Object.keys(state.initParam ?? {}).forEach((key) => {
			state.searchParam[key] = state.initParam[key];
		});
		emit("reset", state.searchParam);
		await loadData();
	};

	const doRender = async (): Promise<void> => {
		state.orgColumns = [];
		state.autoColumnWidth = [];
		state.tableData = [];
		await clickUtil.debounceAsync(async () => {
			loadTableColumns();
			await tableSearch();
		}, 300);
	};

	const doLoading = (loadingFunction: () => void | Promise<void>, loadingText = "加载中..."): void => {
		state.loading = true;
		state.loadingText = loadingText;
		execFunction(loadingFunction)
			.then()
			.catch((error) => {
				consoleError("FaTable", error);
			})
			.finally(() => {
				state.loading = false;
			});
	};

	const handleCustomCellClick = (emitName: string, { row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number }): void => {
		emit("customCellClick", emitName, { row, column, $index, ...getTableDefaultSlots(state) });
	};

	watch(
		() => props.tableKey,
		async () => {
			await doRender();
		}
	);

	watch(
		() => props.searchForm,
		(newValue) => {
			state.searchForm = newValue;
		}
	);

	return {
		_globalSize,
		state,
		elementRef,
		tableRef,
		handleTableColumnAutoWidth,
		getRequestParam,
		loadTableColumns,
		handleSizeChange,
		handlePaginationChange,
		defaultSearchTime,
		tableSearch,
		tableReset,
		doRender,
		doLoading,
		handleCustomCellClick,
	};
};
