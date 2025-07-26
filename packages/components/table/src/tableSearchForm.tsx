import { computed, defineComponent, inject, reactive, ref, watch } from "vue";
import { ElButton, ElIcon, useGlobalSize } from "element-plus";
import { ArrowDown, ArrowUp, Eleme, Refresh, Search } from "@element-plus/icons-vue";
import { FaDrawer } from "@fast-element-plus/components/drawer";
import { FaLayoutGrid, FaLayoutGridItem } from "@fast-element-plus/components/layoutGrid";
import { Brush } from "@fast-element-plus/icons-vue";
import { definePropType, makeSlots, useRender, withDefineType } from "@fast-china/utils";
import { getTableDefaultSlots } from "./table.type";
import FaTableSearchFormItem from "./tableSearchFormItem";
import { tableStateKey } from "./useTable";
import type { FaTableColumnCtx, FaTableDefaultSlotsResult, FaTableSearchColumnCtx } from "./table.type";
import type { FaDrawerInstance } from "@fast-element-plus/components/drawer";
import type { FaLayoutGridBreakPoint, FaLayoutGridInstance, FaLayoutGridItemResponsive } from "@fast-element-plus/components/layoutGrid";

type FaTableSearchFormSlots = {
	[key: string]: FaTableDefaultSlotsResult & {
		column?: FaTableColumnCtx;
		search?: () => void;
	};
};

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
			required: true,
		},
		/** @description 高级搜素抽屉 */
		advancedSearchDrawer: {
			type: Boolean,
			required: true,
		},
		/** @description Grid布局列配置 */
		cols: {
			type: definePropType<string | number | Record<FaLayoutGridBreakPoint, number>>([String, Number, Object]),
			default: () => ({ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }),
		},
		/** @description 搜索 */
		search: {
			type: definePropType<() => void>(Function),
			required: true,
		},
		/** @description 重置 */
		reset: {
			type: definePropType<() => void>(Function),
			required: true,
		},
	},
	slots: makeSlots<FaTableSearchFormSlots>(),
	setup(props, { slots, expose }) {
		const _globalSize = useGlobalSize();

		// 获取响应式断点
		const gridRef = ref<FaLayoutGridInstance>();

		const tableState = inject(tableStateKey);

		const breakPoint = computed<FaLayoutGridBreakPoint>(() => gridRef.value?.breakPoint);

		const state = reactive({
			refreshing: false,
			height: "auto",
			/** 折叠 */
			collapsed: true,
			/** 显示折叠 */
			showCollapsed: computed(() => {
				let show = false;
				tableState.searchColumns.reduce((prev, current) => {
					prev +=
						(current.search[breakPoint.value]?.span ?? current.search?.span ?? 1) +
						(current.search[breakPoint.value]?.offset ?? current.search?.offset ?? 0);
					if (typeof props.cols !== "number") {
						if (prev >= props.cols[breakPoint.value]) show = true;
					} else {
						if (prev >= props.cols) show = true;
					}
					return prev;
				}, 0);
				return show;
			}),
			searchColumns: withDefineType<FaTableColumnCtx[]>([]),
			advancedSearchColumns: withDefineType<FaTableColumnCtx[]>([]),
			breakPoint: undefined,
		});

		const faTableSearchFormRef = ref<HTMLElement>();
		const advancedSearchRef = ref<FaDrawerInstance>();

		// 获取响应式设置
		const getResponsive = (
			item: FaTableSearchColumnCtx
		): {
			span: number;
			offset: number;
			xs: FaLayoutGridItemResponsive;
			sm: FaLayoutGridItemResponsive;
			md: FaLayoutGridItemResponsive;
			lg: FaLayoutGridItemResponsive;
			xl: FaLayoutGridItemResponsive;
		} => {
			return {
				span: item?.span,
				offset: item?.offset ?? 0,
				xs: item?.xs,
				sm: item?.sm,
				md: item?.md,
				lg: item?.lg,
				xl: item?.xl,
			};
		};

		const handleBreakPointChange = ({ breakPoint }: { breakPoint: FaLayoutGridBreakPoint }): void => {
			// 这里 -1 是排除固定的
			state.breakPoint = props.cols[breakPoint] - 1;
			state.searchColumns = tableState.searchColumns.filter((f) => f?.show).slice(0, state.breakPoint);
			state.advancedSearchColumns = tableState.searchColumns.filter((f) => f?.show).slice(state.breakPoint);
		};

		watch(
			() => tableState.searchColumns,
			() => {
				if (state.breakPoint) {
					state.searchColumns = tableState.searchColumns.filter((f) => f?.show).slice(0, state.breakPoint);
					state.advancedSearchColumns = tableState.searchColumns.filter((f) => f?.show).slice(state.breakPoint);
				}
			}
		);

		const searchColumns = computed(() => (props.advancedSearchDrawer ? state.searchColumns : tableState.searchColumns));

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
				setTimeout(() => {
					state.refreshing = false;
				}, 1);
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

		useRender(
			() =>
				tableState.searchColumns.length > 0 && (
					<div
						ref={faTableSearchFormRef}
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
									gap={_globalSize.value === "small" ? [20, 0] : [20, 10]}
									cols={props.cols}
									onBreakPointChange={handleBreakPointChange}
								>
									{searchColumns.value.map((item, index) => (
										<FaLayoutGridItem key={item?.search?.key ?? item.prop} {...getResponsive(item.search)} index={index}>
											<div class="el-form-item el-form-item--default el-form-item--label-right">
												<label class="el-form-item__label">{item.search.label}</label>
												<div class="el-form-item__content">
													{item.search?.slot ? (
														slots[item.search.slot] &&
														slots[item.search.slot]({
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
									))}
									<FaLayoutGridItem suffix>
										<div class="fa-table__search-operation">
											<ElButton
												loading={tableState.loading}
												loadingIcon={Eleme}
												title="搜索"
												type="primary"
												plain
												icon={Refresh}
												onClick={() => props.search()}
											>
												搜索
											</ElButton>
											<ElButton
												loading={tableState.loading}
												loadingIcon={Eleme}
												title="重置"
												icon={Brush}
												onClick={() => props.reset()}
											>
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
															onClick={() => advancedSearchRef.value.open()}
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
								onConfirmClick={() => props.search()}
							>
								<form class="el-form el-form--default el-form--label-top">
									<FaLayoutGrid gap={[20, 0]} cols={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
										{state.advancedSearchColumns.map((item, index) => (
											<FaLayoutGridItem key={item.prop ?? item?.search?.key} {...getResponsive(item.search)} index={index}>
												<div class="el-form-item el-form-item--default el-form-item--label-top">
													<label class="el-form-item__label">{item.search.label}</label>
													<div class="el-form-item__content">
														{item.search.slot ? (
															slots[item.search.slot] &&
															slots[item.search.slot]({
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
										))}
									</FaLayoutGrid>
								</form>
							</FaDrawer>
						)}
					</div>
				)
		);
	},
});
