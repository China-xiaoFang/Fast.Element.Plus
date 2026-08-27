import { computed, defineComponent, provide, reactive, ref } from "vue";
import { ElForm, formEmits, formProps, useGlobalSize } from "element-plus";
import { isNumber, isObject } from "lodash-unified";
import { definePropType, makeSlots, useEmits, useExpose, useProps, useRender } from "../../../utils";
import { FaLayoutGrid } from "../../layoutGrid";
import { formUtil } from "../utils/form";
import type { FaLayoutGridBreakPoint } from "../../layoutGrid";
import type { FormInstance, FormItemContext, FormValidateCallback, FormValidationResult } from "element-plus";

/** FaForm 的运行时 Props 定义。 */
export const faFormProps = {
	...formProps,
	/** @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported. */
	labelWidth: {
		type: [String, Number],
		default: "auto",
	},
	/** @description Suffix of the label. */
	labelSuffix: {
		type: String,
		default: "：",
	},
	/** @description When validation fails, scroll to the first error form entry. */
	scrollToError: {
		type: Boolean,
		default: true,
	},
	/** @description 详情From，会删除 FormItem 的 paddinfa-bottom */
	detailForm: Boolean,
	/** @description Grid布局*/
	grid: {
		type: Boolean,
		default: true,
	},
	/** @description Grid布局列配置 */
	cols: {
		type: definePropType<string | number | Record<FaLayoutGridBreakPoint, number>>([String, Number, Object]),
		default: (): Record<FaLayoutGridBreakPoint, number> => ({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }),
	},
};

/** FaForm 的运行时事件定义。 */
export const faFormEmits = {
	...formEmits,
};

/** FaForm 的插槽参数。 */
export interface FaFormSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: unknown;
}

export default defineComponent({
	name: "FaForm",
	props: faFormProps,
	emits: faFormEmits,
	slots: makeSlots<FaFormSlots>(),
	setup(props, { slots, expose, emit }) {
		const _globalSize = useGlobalSize();

		const state = reactive({
			cols: computed(() => {
				if (isObject(props.cols)) {
					return props.cols;
				} else {
					const colsNumber = isNumber(props.cols) ? props.cols : Number(props.cols);
					return { xs: 1, sm: colsNumber, md: colsNumber, lg: colsNumber, xl: colsNumber };
				}
			}),
			gap: computed<[number, number]>(() => (_globalSize.value === "small" ? [15, 0] : [20, 0])),
		});

		const formRef = ref<FormInstance>();

		// 注入 cols
		provide("faFormCols", state.cols);

		const elFormProps = useProps(props, formProps);
		const elFormEmits = useEmits(formEmits, emit);

		useRender(() => (
			<ElForm
				{...elFormProps.value}
				{...elFormEmits.value}
				ref={formRef}
				class={["fa-form", `fa-form-${_globalSize.value}`, { [`fa-form-detail fa-form-detail_${_globalSize.value}`]: props.detailForm }]}
			>
				{{
					default: () =>
						props.grid ? (
							<FaLayoutGrid collapsed gap={state.gap} cols={state.cols}>
								{slots.default?.(state)}
							</FaLayoutGrid>
						) : (
							slots.default?.(state)
						),
				}}
			</ElForm>
		));

		return useExpose(expose, {
			/** @description 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 */
			validate: (callback?: FormValidateCallback): FormValidationResult =>
				callback ? (formRef.value?.validate(callback) ?? Promise.reject(new Error("ElForm 实例尚未挂载。"))) : formUtil.validate(formRef),
			/** @description 验证具体的某个字段。 */
			validateField: computed(() => formRef.value?.validateField),
			/** @description 重置该表单项，将其值重置为初始值，并移除校验结果 */
			resetFields: computed(() => formRef.value?.resetFields),
			/** @description 清理某个字段的表单验证信息。 */
			clearValidate: computed(() => formRef.value?.clearValidate),
			/** @description 滚动到指定的字段 */
			scrollToField: computed(() => formRef.value?.scrollToField),
			/** @description 获取所有字段的 context */
			fields: computed(() => formRef.value?.fields as FormItemContext[]),
			/** @description 获取指定字段的 context。 */
			getField: computed(() => formRef.value?.getField),
			/** @description 设置表单字段的初始值。 */
			setInitialValues: computed(() => formRef.value?.setInitialValues),
			/** @description 对整个表单的内容进行验证，带滚动。 接收一个回调函数，或返回 Promise。 */
			validateScrollToField: (): FormValidationResult => formUtil.validateScrollToField(formRef),
		});
	},
});
