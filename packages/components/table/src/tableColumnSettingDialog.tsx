import { Fragment, defineComponent, inject, reactive, ref } from "vue";
import { ElInput, ElInputNumber, ElMessage, ElNotification, ElRadio, ElRadioGroup, ElSwitch, ElTable, ElTableColumn } from "element-plus";
import { FaDialog } from "@fast-element-plus/components/dialog";
import { definePropType, stringUtil, useExpose, useRender } from "@fast-china/utils";
import Sortable from "sortablejs";
import { tableStateKey } from "./useTable";
import type { FaTableColumnCtx } from "./table.type";
import type { FaDialogInstance } from "@fast-element-plus/components/dialog";
import type { TableColumnCtx } from "element-plus";

export default defineComponent({
	name: "FaTableColumnsSettingDialog",
	props: {
		/** @description 改变 */
		change: {
			type: definePropType<(columns: FaTableColumnCtx[]) => Promise<void>>(Function),
		},
	},
	setup(props, { expose }) {
		const tableState = inject(tableStateKey);

		const state = reactive({
			tableKey: stringUtil.generateRandomString(8),
			sortableInstance: undefined,
			change: false,
		});

		const faDialogRef = ref<FaDialogInstance>();

		const indexMethod = (index: number): number => {
			return index + 1;
		};

		// /**
		//  * 处理固定行ClassName
		//  */
		// const handleFixedRowClassName = (row: FaTableColumnCtx) => {
		// 	if (row.fixed) {
		// 		return "fa-table__setting-fixed-column";
		// 	}
		// };

		const tableRowDrop = (): void => {
			const tBody = document.querySelector(`.fa-table__column-setting-${state.tableKey} .el-table__body-wrapper tbody`) as any;

			// 销毁现有Sortable实例（如果存在）
			if (state.sortableInstance) {
				state.sortableInstance.destroy();
			}

			state.sortableInstance = new Sortable(tBody, {
				// ms, number 单位：ms，定义排序动画的时间
				animation: 150,
				delay: 0,
				// filter: ".fa-table__setting-fixed-column",
				// onMove(evt: any) {
				// 	const { related } = evt;
				// 	return !related.classList.contains("fa-table__setting-fixed-column");
				// },
				onEnd(evt: any): void {
					const { newIndex, oldIndex } = evt;
					if (newIndex !== oldIndex) {
						state.change = true;
						const curRow = tableState.orgColumns.splice(oldIndex, 1)[0];
						tableState.orgColumns.splice(newIndex, 0, curRow);
						tableState.orgColumns = tableState.orgColumns.map((item, index) => {
							return {
								...item,
								order: index + 1,
							};
						});
					}
				},
			});
		};

		const open = (): void => {
			faDialogRef.value.open(() => {
				tableRowDrop();
				ElNotification({
					message: "点击保存才会进行数据缓存，点击取消为本此生效",
					type: "info",
				});
			});
		};

		const handleChange = async (): Promise<void> => {
			if (state.change) {
				props.change && (await props.change(tableState.orgColumns));
			} else {
				ElMessage.info("列配置未发生变化");
			}
		};

		const handleConfirmClick = (): void => {
			faDialogRef.value.close(async () => {
				await handleChange();
			});
		};

		const handleOrderChange = (): void => {
			state.change = true;
			let orderColumns = tableState.orgColumns.filter((f) => !f?.pureSearch);
			orderColumns = orderColumns.sort((a, b) => {
				if (a.order !== b.order) {
					return a.order - b.order;
				} else {
					return orderColumns.indexOf(b) - orderColumns.indexOf(a);
				}
			});
			tableState.orgColumns = [...orderColumns, ...tableState.orgColumns.filter((f) => f?.pureSearch)];
			tableState.orgColumns.forEach((item, index) => {
				item.order = index + 1;
			});
		};

		const handleColumnChange = (): void => {
			state.change = true;
		};

		const autoWidthDisabled = (
			row: FaTableColumnCtx,
			switchEl = false
		): {
			modelValue: any;
			disabled: boolean;
			placeholder: any;
		} => {
			const result = { modelValue: undefined, disabled: false, placeholder: undefined };
			if (row?.type) {
				switch (row?.type) {
					case "expand":
						result.disabled = true;
						result.placeholder = "暂不支持宽度配置";
						break;
					case "image":
						result.disabled = true;
						result.placeholder = "图片列无需配置";
						break;
					case "date":
					case "time":
					case "dateTime":
						result.disabled = true;
						result.placeholder = "时间/日期列无需配置";
						break;
					case "timeInfo":
						result.disabled = true;
						result.placeholder = "当前列无需配置";
						break;
				}
			} else if (row?.tag) {
				result.disabled = true;
				result.placeholder = "标签列无需配置";
			} else if (row?.autoWidth) {
				result.disabled = true;
				result.placeholder = "自动列宽无需配置";
			}
			if (!result.disabled) {
				delete result.disabled;
				delete result.modelValue;
				delete result.placeholder;
			}
			if (switchEl) {
				delete result.placeholder;
			}
			return result;
		};

		const pureSearchDisabled = (
			row: FaTableColumnCtx,
			switchEl = false,
			orderEl = false,
			radioEl = false
		): {
			modelValue: any;
			disabled: boolean;
			placeholder: any;
		} => {
			const result = { modelValue: undefined, disabled: false, placeholder: undefined };
			if (row?.pureSearch) {
				result.disabled = true;
				result.placeholder = "搜索列无需配置";
			}
			if (!result.disabled) {
				delete result.disabled;
				delete result.modelValue;
				delete result.placeholder;
			} else {
				if (radioEl) {
					delete result.modelValue;
				}
			}
			if (switchEl) {
				delete result.placeholder;
			}
			if (orderEl) {
				result.placeholder = "999";
			}
			return result;
		};

		useRender(() => (
			<FaDialog
				ref={faDialogRef}
				class="fa-table__column-setting-dialog"
				onConfirmClick={handleConfirmClick}
				showFullscreen={false}
				confirmButtonText={state.change ? "保存更改" : "确认"}
				fullHeight
			>
				{{
					header: () => (
						<Fragment>
							列表配置（留空则恢复默认配置）
							<el-text type="info">点击保存才会进行数据缓存，点击取消为本此生效</el-text>
						</Fragment>
					),
					default: () => (
						<ElTable
							class={["fa-table__column-setting", `fa-table__column-setting-${state.tableKey}`]}
							data={tableState.orgColumns}
							rowKey="prop"
							border
							// rowClassName={handleFixedRowClassName}
						>
							{{
								default: () => (
									<Fragment>
										<ElTableColumn type="index" fixed="left" align="center" width={45} index={indexMethod} />
										<ElTableColumn label="列显示名称" minWidth={200}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) =>
													row.type === "image" ? (
														<ElInput
															disabled
															readonly
															vModel={row.label}
															placeholder="请输入列显示名称"
															onChange={handleColumnChange}
														/>
													) : (
														<ElInput
															vModel={row.label}
															placeholder="请输入列显示名称"
															{...pureSearchDisabled(row)}
															onChange={handleColumnChange}
														/>
													),
											}}
										</ElTableColumn>
										<ElTableColumn label="固定" width={230}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElRadioGroup
														vModel={row.fixed}
														{...pureSearchDisabled(row, false, false, true)}
														onChange={handleColumnChange}
													>
														<ElRadio value={false}>无</ElRadio>
														<ElRadio value="left">左侧</ElRadio>
														<ElRadio value="right">右侧</ElRadio>
													</ElRadioGroup>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="宽度" width={200}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElInputNumber
														vModel={row.width}
														min={1}
														max={999}
														stepStrictly
														controls={false}
														clearable
														placeholder="请输入宽度"
														{...autoWidthDisabled(row)}
														{...pureSearchDisabled(row)}
														onChange={handleColumnChange}
													>
														{{
															suffix: () => <span>px</span>,
														}}
													</ElInputNumber>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="小的宽度" width={200}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElInputNumber
														vModel={row.smallWidth}
														min={1}
														max={999}
														stepStrictly
														controls={false}
														clearable
														placeholder="请输入小的宽度"
														{...autoWidthDisabled(row)}
														{...pureSearchDisabled(row)}
														onChange={handleColumnChange}
													>
														{{
															suffix: () => <span>px</span>,
														}}
													</ElInputNumber>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="顺序" width={100}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElInputNumber
														style="width: auto;"
														vModel={row.order}
														min={1}
														max={999}
														stepStrictly
														controls={false}
														clearable
														placeholder="请输入顺序"
														{...pureSearchDisabled(row, false, true)}
														onChange={handleOrderChange}
													/>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="排序" width={65}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElSwitch
														vModel={row.sortable}
														inlinePrompt
														activeText="是"
														inactiveText="否"
														disabled={row.disabledSortable || row?.type === "image"}
														{...pureSearchDisabled(row, true)}
														onChange={handleColumnChange}
													/>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="复制" width={65}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElSwitch
														vModel={row.copy}
														inlinePrompt
														activeText="是"
														inactiveText="否"
														disabled={!!row?.type || !!row?.slot}
														{...pureSearchDisabled(row, true)}
														onChange={handleColumnChange}
													/>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="自动宽度" width={85}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElSwitch
														vModel={row.autoWidth}
														inlinePrompt
														activeText="是"
														inactiveText="否"
														disabled={!!row?.type}
														{...pureSearchDisabled(row, true)}
														onChange={handleColumnChange}
													/>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="显示" width={75}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) => (
													<ElSwitch
														vModel={row.show}
														inlinePrompt
														activeText="显示"
														inactiveText="隐藏"
														onChange={handleColumnChange}
													/>
												),
											}}
										</ElTableColumn>
										<ElTableColumn label="搜索框名称" minWidth={200}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) =>
													row.search ? (
														<ElInput
															vModel={row.search.label}
															placeholder="请输入搜索框名称"
															onChange={handleColumnChange}
														/>
													) : (
														<ElInput disabled placeholder="当前列暂无搜索项配置" />
													),
											}}
										</ElTableColumn>
										<ElTableColumn label="搜索框顺序" width={200}>
											{{
												default: ({ row }: { row: FaTableColumnCtx; column: TableColumnCtx<any>; $index: number }) =>
													row.search ? (
														<ElInputNumber
															vModel={row.search.order}
															min={1}
															max={999}
															stepStrictly
															controls={false}
															clearable
															placeholder="请输入搜索框顺序"
															onChange={handleColumnChange}
														/>
													) : (
														<ElInputNumber
															disabled
															min={1}
															max={999}
															stepStrictly
															controls={false}
															clearable
															placeholder="当前列暂无搜索项配置"
														/>
													),
											}}
										</ElTableColumn>
									</Fragment>
								),
							}}
						</ElTable>
					),
				}}
			</FaDialog>
		));

		return useExpose(expose, {
			/** @description 打开 */
			open,
			/** @description 列改变 */
			change: handleChange,
		});
	},
});
