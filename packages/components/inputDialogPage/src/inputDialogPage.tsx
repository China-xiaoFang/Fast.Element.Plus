import { computed, defineComponent, reactive, ref } from "vue";
import { ElButton, ElButtonGroup, ElInput } from "element-plus";
import { Delete, Search } from "@element-plus/icons-vue";
import { definePropType, makeSlots, useExpose, useRender, withDefineType } from "@fast-china/utils";
import { isFunction, isNull, isNumber, isString } from "lodash-unified";
import type { TableProps } from "element-plus";
import type { PropType } from "vue";
import { FaTable, type FaTableInstance, type PagedInput, type PagedResult } from "@fast-element-plus/components/table";
import { useVModel } from "@vueuse/core";
import FaDialog, { FaDialogInstance } from "@fast-element-plus/components/dialog";

export const faInputDialogPageProps = {
	/** @description key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used */
	rowKey: {
		type: [String, Function] as PropType<TableProps<any>["rowKey"]>,
		default: "id",
	},
	/** @description v-model绑定值 */
	modelValue: [String, Number],
	/** @description v-model:label绑定值 */
	label: String,
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
		type: definePropType<(params?: PagedInput) => Promise<PagedResult | any[]>>(Function),
	},
	/** 初始化参数 */
	initParam: definePropType<string | number | any>([String, Number, Object]),
	/** @description 显示文本 Key */
	labelKey: {
		type: String,
		default: "name",
	},
};

export const faInputDialogPageEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | number) => isString(value) || isNumber(value) || isNull(value),
	/** @description v-model:label 回调 */
	"update:label": (value: string) => isString(value) || isNull(value),
	/** @description 改变 */
	change: (value: string | number) => isString(value) || isNumber(value) || isNull(value),
};

type FaInputDialogPageSlots = {
	/** @description 默认内容插槽 */
	default: never;
};

export default defineComponent({
	name: "FaInputDialogPage",
	props: faInputDialogPageProps,
	emits: faInputDialogPageEmits,
	slots: makeSlots<FaInputDialogPageSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const modelValue = useVModel(props, "modelValue", emit);
		const selectedLabel = useVModel(props, "label", emit);

		const state = reactive({
			selectionRow: withDefineType<unknown>(),
		});

		const faDialogRef = ref<FaDialogInstance>();
		const faTableRef = ref<FaTableInstance>();

		const handleDeleteClick = (): void => {
			modelValue.value = null;
			selectedLabel.value = null;
			emit("change", null);
		};

		const handleSearchClick = (): void => {
			faDialogRef.value.open(() => {
				if (state.selectionRow) {
					// 判断当前行是否选中
					const rowSelected = faTableRef.value.selectedListIds.includes(
						isFunction(props.rowKey) ? props.rowKey(state.selectionRow) : state.selectionRow[props.rowKey]
					);
					if (!rowSelected) {
						faTableRef.value.toggleRowSelection(state.selectionRow);
					}
				}
			});
		};

		const handleConfirmClick = (): void => {
			faDialogRef.value.close(() => {
				if (faTableRef.value.selected) {
					const selectedData = faTableRef.value.selectedList[0];
					modelValue.value = selectedData[isFunction(props.rowKey) ? props.rowKey(selectedData) : selectedData[props.rowKey]];
					selectedLabel.value = selectedData[props.labelKey];
					emit("change", selectedData);
				} else {
					modelValue.value = null;
					selectedLabel.value = null;
					emit("change", null);
				}
			});
		};

		const handleTableRowDblclick = (row: any): void => {
			faTableRef.value.clearSelection();
			faTableRef.value.toggleRowSelection(row);
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
					fillHeight
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
						exportBtn={false}
						onRowDblclick={handleTableRowDblclick}
					>
						{{
							default: () => slots.default && slots.default(),
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
