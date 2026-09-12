import { computed, defineComponent, inject, onWatcherCleanup, reactive, shallowRef, watch } from "vue";
import { ArrowDown, ArrowUp, Eleme, Refresh, Search } from "@element-plus/icons-vue";
import { ElButton, ElIcon, useGlobalSize } from "element-plus";
import { Brush } from "@fast-element-plus/icons-vue";
import { definePropType, makeSlots, useRender, withDefineType } from "../../../utils";
import { FaDrawer } from "../../drawer";
import { FaLayoutGrid, FaLayoutGridItem } from "../../layoutGrid";
import { getTableDefaultSlots } from "./table.type";
import FaTableSearchFormItem from "./tableSearchFormItem";
import { tableStateKey } from "./useTable";
import type { FaDrawerInstance } from "../../drawer";
import type { FaLayoutGridBreakpoint, FaLayoutGridInstance } from "../../layoutGrid";
import type { FaTableColumnCtx, FaTableDefaultSlotsResult, FaTableSearchColumnCtx } from "./table.type";

type FaTableSearchFormSlots = Record<
	string,
	FaTableDefaultSlotsResult & {
		column?: FaTableColumnCtx;
		search?: () => Promise<void>;
	}
>;

export default defineComponent({
	name: "FaTableSearchForm",
	props: {
		/** @description 显示 */
		show: {
			type: Boolean,
			required: true,
		},
		/** @description 折叠搜素 */
		collapsedSearch: {
			type: Boolean,
			default: true,
		},
		/** @description 高级搜素抽屉 */
		advancedSearchDrawer: {
			type: Boolean,
			default: false,
		},
		/** @description Grid布局列配置 */
		cols: {
			type: definePropType<string | number | Partial<Record<FaLayoutGridBreakpoint, number>>>([String, Number, Object]),
			default: () => ({ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }),
		},
		/** @description 搜索 */
		search: {
			type: definePropType<() => Promise<void>>(Function),
			required: true,
		},
		/** @description 重置 */
		reset: {
			type: definePropType<() => Promise<void>>(Function),
			required: true,
		},
	},
	slots: makeSlots<FaTableSearchFormSlots>(),
	setup(props, { slots }) {
		const globalSize = useGlobalSize();

		// 获取响应式断点
		const gridRef = shallowRef<FaLayoutGridInstance | null>(null);
		const advancedSearchRef = shallowRef<FaDrawerInstance | null>(null);

		const tableState = inject(tableStateKey);
		if (tableState === undefined) throw new Error("FaTableSearchForm 必须在 FaTable 内部渲染。");

		const breakpoint = computed<FaLayoutGridBreakpoint>(() => gridRef.value?.breakpoint ?? "xl");
		const getColumnCount = (value: FaLayoutGridBreakpoint) => {
			if (typeof props.cols === "number") return props.cols;
			if (typeof props.cols === "object") return props.cols[value] ?? 1;
			return Number(props.cols) || 1;
		};

		const state = reactive({
			refreshing: false,
			height: "auto",
			/** 折叠 */
			collapsed: true,
			/** 显示折叠 */
			showCollapsed: computed(() => {
				let show = false;
				tableState.searchColumns.reduce((prev, current) => {
					const search = current.search;
					if (search === undefined) return prev;
					prev += (search[breakpoint.value]?.span ?? search.span ?? 1) + (search[breakpoint.value]?.offset ?? search.offset ?? 0);
					if (prev >= getColumnCount(breakpoint.value)) show = true;
					return prev;
				}, 0);
				return show;
			}),
			searchColumns: withDefineType<FaTableColumnCtx[]>([]),
			advancedSearchColumns: withDefineType<FaTableColumnCtx[]>([]),
			inlineColumnCount: 0,
		});

		// @ts-expect-error Element Plus 的递归 Props 在此处触发类型实例化深度限制。
		const searchColumns = computed(() => (props.advancedSearchDrawer ? state.searchColumns : tableState.searchColumns));

		// 获取响应式设置
		const getResponsive = (item: FaTableSearchColumnCtx) => {
			return {
				span: item.span ?? 1,
				offset: item.offset ?? 0,
				xs: item.xs,
				sm: item.sm,
				md: item.md,
				lg: item.lg,
				xl: item.xl,
			};
		};

		const handleBreakpointChange = ({ breakpoint }: { breakpoint: FaLayoutGridBreakpoint }) => {
			// 这里 -1 是排除固定的
			state.inlineColumnCount = getColumnCount(breakpoint) - 1;
			state.searchColumns = tableState.searchColumns.filter((f) => f.show).slice(0, state.inlineColumnCount);
			state.advancedSearchColumns = tableState.searchColumns.filter((f) => f.show).slice(state.inlineColumnCount);
		};

		watch(
			() => tableState.searchColumns,
			() => {
				if (state.inlineColumnCount) {
					state.searchColumns = tableState.searchColumns.filter((f) => f.show).slice(0, state.inlineColumnCount);
					state.advancedSearchColumns = tableState.searchColumns.filter((f) => f.show).slice(state.inlineColumnCount);
				}
			}
		);

		watch(
			() => props.advancedSearchDrawer,
			(newValue) => {
				if (newValue) {
					// 抽屉默认折叠
					state.collapsed = true;
				} else {
					state.collapsed = props.collapsedSearch;
				}
				state.refreshing = true;
				const refreshTimer = setTimeout(() => {
					state.refreshing = false;
				}, 1);
				onWatcherCleanup(() => clearTimeout(refreshTimer));
			}
		);

		watch(
			() => props.collapsedSearch,
			(newValue) => {
				if (!props.collapsedSearch) {
					state.collapsed = newValue;
				} else {
					// 抽屉默认折叠
					state.collapsed = true;
				}
			},
			{
				immediate: true,
			}
		);

		useRender(() =>
			tableState.searchColumns.length > 0 ? (
				<div
					class={[
						"el-card fa-table__search",
						{
							"fa-table__search-hidden": !props.show,
							"fa-table__search__disable": tableState.loading,
						},
					]}
				>
					<form class="el-form el-form--default el-form--label-right">
						{!state.refreshing && (
							<FaLayoutGrid
								ref={gridRef}
								collapsed={state.collapsed}
								gap={globalSize.value === "small" ? [20, 0] : [20, 10]}
								cols={props.cols}
								onBreakpointChange={handleBreakpointChange}
							>
								{searchColumns.value.map((item, index) =>
									item.search ? (
										<FaLayoutGridItem key={item.search.key ?? item.prop} data-index={index} {...getResponsive(item.search)}>
											<div class="el-form-item el-form-item--default el-form-item--label-right">
												<label class="el-form-item__label">{item.search.label}</label>
												<div class="el-form-item__content">
													{item.search.slot ? (
														slots[item.search.slot]?.({
															column: item,
															search: props.search,
															...getTableDefaultSlots(tableState),
														})
													) : (
														<FaTableSearchFormItem column={item} search={props.search} />
													)}
												</div>
											</div>
										</FaLayoutGridItem>
									) : null
								)}
								<FaLayoutGridItem suffix>
									<div class="fa-table__search-operation">
										<ElButton
											loading={tableState.loading}
											loadingIcon={Eleme}
											title="搜索"
											type="primary"
											plain
											icon={Refresh}
											onClick={props.search}
										>
											搜索
										</ElButton>
										<ElButton loading={tableState.loading} loadingIcon={Eleme} title="重置" icon={Brush} onClick={props.reset}>
											重置
										</ElButton>
										{props.advancedSearchDrawer
											? state.advancedSearchColumns.length > 0 && (
													<ElButton
														loading={tableState.loading}
														loadingIcon={Eleme}
														title="高级搜索"
														type="info"
														plain
														icon={Search}
														onClick={() => advancedSearchRef.value?.open()}
													>
														高级搜索
													</ElButton>
												)
											: state.showCollapsed && (
													<ElButton
														loading={tableState.loading}
														loadingIcon={Eleme}
														title={state.collapsed ? "展开" : "折叠"}
														link
														type="primary"
														onClick={() => {
															state.collapsed = !state.collapsed;
														}}
													>
														{state.collapsed ? "展开" : "折叠"}
														<ElIcon>{state.collapsed ? <ArrowDown /> : <ArrowUp />}</ElIcon>
													</ElButton>
												)}
									</div>
								</FaLayoutGridItem>
							</FaLayoutGrid>
						)}
					</form>
					{props.advancedSearchDrawer && state.advancedSearchColumns.length > 0 && (
						<FaDrawer
							ref={advancedSearchRef}
							class="fa-table__search-advanced"
							size="20%"
							title="高级搜索"
							appendToBody={false}
							showCloseButton={false}
							showConfirmButton={false}
							showFullscreen={false}
							showRefresh={false}
							onConfirmClick={props.search}
						>
							<form class="el-form el-form--default el-form--label-top">
								<FaLayoutGrid gap={[20, 0]} cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
									{state.advancedSearchColumns.map((item) =>
										item.search ? (
											<FaLayoutGridItem key={item.prop ?? item.search.key} {...getResponsive(item.search)}>
												<div class="el-form-item el-form-item--default el-form-item--label-top">
													<label class="el-form-item__label">{item.search.label}</label>
													<div class="el-form-item__content">
														{item.search.slot ? (
															slots[item.search.slot]?.({
																column: item,
																search: props.search,
																...getTableDefaultSlots(tableState),
															})
														) : (
															<FaTableSearchFormItem column={item} search={props.search} />
														)}
													</div>
												</div>
											</FaLayoutGridItem>
										) : null
									)}
								</FaLayoutGrid>
							</form>
						</FaDrawer>
					)}
				</div>
			) : (
				<div />
			)
		);
	},
});
