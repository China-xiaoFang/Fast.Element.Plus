import { computed, defineComponent, reactive, shallowRef, useModel } from "vue";
import { Delete, Search } from "@element-plus/icons-vue";
import { ElButton, ElButtonGroup, ElInput } from "element-plus";
import { definePropType, makeSlots, useExpose, useRender, withDefineType } from "../../../utils";
import FaDialog from "../../dialog";
import { FaTable } from "../../table";
import type { TableProps } from "element-plus";
import type { PropType } from "vue";
import type { FaDialogInstance } from "../../dialog";
import type { DefaultRow, FaTableInstance, PagedInput, PagedResult } from "../../table";

/** FaInputDialogPage 的运行时 Props 定义 */
export const faInputDialogPageProps = {
	/** key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
	rowKey: {
		type: [String, Function] as PropType<NonNullable<TableProps<DefaultRow>["rowKey"]>>,
		default: "id",
	},
	/** v-model 绑定值 */
	modelValue: [String, Number] as PropType<string | number | null>,
	/** v-model:label 绑定值 */
	label: String as PropType<string | null>,
	/** 输入框占位文本 */
	placeholder: {
		type: String,
		default: "请选择",
	},
	/** 禁用 */
	disabled: Boolean,
	/** 标题 */
	title: String,
	/** 请求数据的函数 */
	requestApi: {
		type: definePropType<(params?: PagedInput) => Promise<PagedResult | DefaultRow[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | PagedInput>([String, Number, Object]),
	/** 显示文本 Key */
	labelKey: {
		type: String,
		default: "name",
	},
};

/** FaInputDialogPage 的运行时 Emits 定义 */
export const faInputDialogPageEmits = {
	/** v-model 回调 */
	"update:modelValue": (value: string | number | null) => typeof value === "string" || typeof value === "number" || value === null,
	/** v-model:label 回调 */
	"update:label": (value: string | null) => typeof value === "string" || value === null,
	/** 选中数据改变 */
	change: (_data: DefaultRow | null, _value?: string | number | null) => true,
};

/** FaInputDialogPage 的插槽参数 */
export interface FaInputDialogPageSlots extends Record<string, unknown> {
	/** 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaInputDialogPage",
	props: faInputDialogPageProps,
	emits: faInputDialogPageEmits,
	slots: makeSlots<FaInputDialogPageSlots>(),
	setup(props, { slots, emit, expose }) {
		const modelValue = useModel(props, "modelValue");
		const selectedLabel = useModel(props, "label");

		const faDialogRef = shallowRef<FaDialogInstance | null>(null);
		const faTableRef = shallowRef<FaTableInstance | null>(null);

		const state = reactive({
			selectionRow: withDefineType<DefaultRow | undefined>(),
		});

		const handleDeleteClick = () => {
			modelValue.value = null;
			selectedLabel.value = null;
			state.selectionRow = undefined;
			emit("change", null, null);
		};

		const handleSearchClick = async () => {
			await faDialogRef.value?.open(() => {
				const table = faTableRef.value;
				if (table === null) return;
				if (state.selectionRow) {
					// 判断当前行是否选中
					const rawRowKey: unknown =
						typeof props.rowKey === "function" ? props.rowKey(state.selectionRow) : state.selectionRow[props.rowKey];
					const rowSelected = (typeof rawRowKey === "string" || typeof rawRowKey === "number") && table.selectedListIds.includes(rawRowKey);
					if (!rowSelected) {
						table.toggleRowSelection?.(state.selectionRow);
					}
				}
			});
		};

		const handleConfirmClick = () => {
			faDialogRef.value?.close(() => {
				const table = faTableRef.value;
				const selectedData = table?.selectedList[0];
				if (table?.selected && selectedData) {
					state.selectionRow = selectedData;
					const selectedValue: unknown = typeof props.rowKey === "function" ? props.rowKey(selectedData) : selectedData[props.rowKey];
					modelValue.value = typeof selectedValue === "string" || typeof selectedValue === "number" ? selectedValue : null;
					const label: unknown = selectedData[props.labelKey];
					selectedLabel.value = typeof label === "string" ? label : null;
					emit("change", selectedData, modelValue.value);
				} else {
					modelValue.value = null;
					selectedLabel.value = null;
					state.selectionRow = undefined;
					emit("change", null, null);
				}
			});
		};

		const handleTableRowDblclick = (row: DefaultRow) => {
			faTableRef.value?.clearSelection?.();
			faTableRef.value?.toggleRowSelection?.(row);
			state.selectionRow = row;
			handleConfirmClick();
		};

		useRender(() => (
			<div class="fa-input-dialog-page">
				<ElInput vModel={selectedLabel.value} placeholder={props.placeholder} disabled={props.disabled} readonly>
					{{
						append: () => (
							<ElButtonGroup>
								<ElButton disabled={props.disabled} icon={Delete} onClick={handleDeleteClick} />
								<ElButton disabled={props.disabled} icon={Search} onClick={handleSearchClick} />
							</ElButtonGroup>
						),
					}}
				</ElInput>
				<FaDialog
					ref={faDialogRef}
					style="--height: 70%;"
					width="50%"
					title={props.title}
					fullHeight
					disabledConfirmButton={!faTableRef.value?.selected}
					onConfirmClick={handleConfirmClick}
				>
					<FaTable
						ref={faTableRef}
						rowKey={props.rowKey}
						requestApi={props.requestApi}
						initParam={props.initParam}
						single
						rowClickSelection
						hideSearchTime
						onRowDblclick={handleTableRowDblclick}
					>
						{{
							default: () => slots.default?.(),
						}}
					</FaTable>
				</FaDialog>
			</div>
		));

		return useExpose(expose, {
			/** 选择行数据 */
			selectionRow: computed(() => state.selectionRow),
			/** 打开选择器弹窗 */
			open: handleSearchClick,
			/** 清除选择 */
			clear: handleDeleteClick,
		});
	},
});
