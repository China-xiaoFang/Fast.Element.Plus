import { computed, defineComponent, provide, reactive, ref } from "vue";
import { ElForm, formProps, useGlobalSize } from "element-plus";
import { FaLayoutGrid } from "@fast-element-plus/components/layoutGrid";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "@fast-china/utils";
import { isNumber, isObject } from "lodash-unified";
import { formUtil } from "../utils/form";
import type { FaLayoutGridBreakPoint } from "@fast-element-plus/components/layoutGrid";
import type { FormInstance, FormItemContext, FormValidationResult } from "element-plus";

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

type FaFormSlots = {
	/** @description 默认内容插槽 */
	default: unknown;
};

export default defineComponent({
	name: "FaForm",
	props: faFormProps,
	slots: makeSlots<FaFormSlots>(),
	setup(props, { attrs, slots, expose }) {
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
			gap: computed(() => (_globalSize.value === "small" ? [15, 0] : [20, 0])),
		});

		const formRef = ref<FormInstance>();

		// 注入 cols
		provide("faFormCols", state.cols);

		const elFormProps = useProps(props, formProps);

		useRender(() => (
			<ElForm
				{...elFormProps.value}
				ref={formRef}
				class={["fa-form", `fa-form-${_globalSize.value}`, { [`fa-form-detail fa-form-detail_${_globalSize.value}`]: props.detailForm }]}
			>
				{{
					default: () =>
						props.grid ? (
							<FaLayoutGrid collapsed gap={state.gap} cols={state.cols}>
								{slots.default && slots.default(state)}
							</FaLayoutGrid>
						) : (
							slots.default && slots.default(state)
						),
				}}
			</ElForm>
		));

		return useExpose(expose, {
			/** @description 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 */
			validate: (): FormValidationResult => formUtil.validate(formRef),
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
			/** @description 对整个表单的内容进行验证，带滚动。 接收一个回调函数，或返回 Promise。 */
			validateScrollToField: (): FormValidationResult => formUtil.validateScrollToField(formRef),
		});
	},
});
