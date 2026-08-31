import { useVModel } from "@vueuse/core";
import { computed, defineComponent, reactive, ref } from "vue";
import { Delete, Search } from "@element-plus/icons-vue";
import { ElButton, ElButtonGroup, ElInput } from "element-plus";
import { isFunction, isNull, isNumber, isString } from "lodash-unified";
import { definePropType, makeSlots, useExpose, useRender, withDefineType } from "../../../utils";
import FaDialog from "../../dialog";
import { FaTable } from "../../table";
import type { TableProps } from "element-plus";
import type { PropType } from "vue";
import type { FaDialogInstance } from "../../dialog";
import type { DefaultRow, FaTableInstance, PagedInput, PagedResult } from "../../table";

/** FaInputDialogPage 的运行时 Props 定义。 */
export const faInputDialogPageProps = {
	/** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
	rowKey: {
		type: [String, Function] as PropType<TableProps<DefaultRow>["rowKey"]>,
		default: "id",
	},
	/** @description v-model绑定值 */
	modelValue: [String, Number] as PropType<string | number | null>,
	/** @description v-model:label绑定值 */
	label: String as PropType<string | null>,
	/** @description 输入框占位文本 */
	placeholder: {
		type: String,
		default: "请选择",
	},
	/** @description 禁用 */
	disabled: Boolean,
	/** @description 标题 */
	title: String,
	/** @description 请求api */
	requestApi: {
		type: definePropType<(params?: PagedInput) => Promise<PagedResult | DefaultRow[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | PagedInput>([String, Number, Object]),
	/** @description 显示文本 Key */
	labelKey: {
		type: String,
		default: "name",
	},
};

/** FaInputDialogPage 的运行时 Emits 定义。 */
export const faInputDialogPageEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | number | null): boolean => isString(value) || isNumber(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string | null): boolean => isString(value) || isNull(value),
	/** @description 选中数据改变 */
	change: (_data: DefaultRow | null, _value?: string | number | null): boolean => true,
};

/** FaInputDialogPage 的插槽参数。 */
export interface FaInputDialogPageSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaInputDialogPage",
	props: faInputDialogPageProps,
	emits: faInputDialogPageEmits,
	slots: makeSlots<FaInputDialogPageSlots>(),
	setup(props, { slots, emit, expose }) {
		const modelValue = useVModel(props, "modelValue", emit, { passive: true });
		const selectedLabel = useVModel(props, "label", emit, { passive: true });

		const state = reactive({
			selectionRow: withDefineType<DefaultRow | undefined>(),
		});

		const faDialogRef = ref<FaDialogInstance>();
		const faTableRef = ref<FaTableInstance>();

		const handleDeleteClick = (): void => {
			modelValue.value = null;
			selectedLabel.value = null;
			state.selectionRow = undefined;
			emit("change", null, null);
		};

		const handleSearchClick = async (): Promise<void> => {
			await faDialogRef.value?.open(() => {
				const table = faTableRef.value;
				if (table === undefined) return;
				if (state.selectionRow) {
					// 判断当前行是否选中
					const rawRowKey: unknown = isFunction(props.rowKey) ? props.rowKey(state.selectionRow) : state.selectionRow[props.rowKey];
					const rowSelected = (typeof rawRowKey === "string" || typeof rawRowKey === "number") && table.selectedListIds.includes(rawRowKey);
					if (!rowSelected) {
						table.toggleRowSelection?.(state.selectionRow);
					}
				}
			});
		};

		const handleConfirmClick = (): void => {
			void faDialogRef.value?.close(() => {
				const table = faTableRef.value;
				const selectedData = table?.selectedList[0];
				if (table?.selected && selectedData) {
					state.selectionRow = selectedData;
					const selectedValue: unknown = isFunction(props.rowKey) ? props.rowKey(selectedData) : selectedData[props.rowKey];
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

		const handleTableRowDblclick = (row: DefaultRow): void => {
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
								<ElButton
									disabled={props.disabled}
									icon={Search}
									onClick={() => {
										void handleSearchClick();
									}}
								/>
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
			/** @description 选择行数据 */
			selectionRow: computed(() => state.selectionRow),
			/** @description 打开选择器弹窗 */
			open: handleSearchClick,
			/** @description 清除选择 */
			clear: handleDeleteClick,
		});
	},
});
