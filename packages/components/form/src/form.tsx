import { computed, defineComponent, provide, reactive, ref } from "vue";
import { FaLayoutGrid } from "@fast-element-plus/components/layoutGrid";
import type { FaLayoutGridBreakPoint } from "@fast-element-plus/components/layoutGrid";
import { definePropType, formUtil, makeSlots, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import type { FormInstance, FormValidationResult } from "element-plus";
import { ElForm, formProps } from "element-plus";
import { isNumber, isObject } from "lodash-unified";

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
	/** @description 详情From，会删除 FormItem 的 padding-bottom */
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
		const state = reactive({
			cols: computed(() => {
				if (isObject(props.cols)) {
					return props.cols;
				} else {
					const colsNumber = isNumber(props.cols) ? props.cols : Number(props.cols);
					return { xs: 1, sm: colsNumber, md: colsNumber, lg: colsNumber, xl: colsNumber };
				}
			}),
			gap: [20, 0],
		});

		const formRef = ref<FormInstance>();

		// 注入 cols
		provide("faFormCols", state.cols);

		const elFormProps = useProps(props, formProps);

		useRender(() => (
			<ElForm {...elFormProps.value} ref={formRef} class={["fa-form", { "fa-form-detail": props.detailForm }]}>
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
			...computed(() => ({
				/** @description Validate the whole form. Receives a callback or returns `Promise`. */
				validate: (): FormValidationResult => formUtil.validate(formRef),
				/** @description Validate specified fields. */
				validateField: (): FormValidationResult => formUtil.validateScrollToField(formRef),
				/** @description Reset specified fields and remove validation result. */
				resetFields: formRef.value?.resetFields,
				/** @description Clear validation message for specified fields. */
				clearValidate: formRef.value?.clearValidate,
				/** @description Scroll to the specified fields. */
				scrollToField: formRef.value?.scrollToField,
				/** @description All fields context. */
				fields: formRef.value?.fields,
			})).value,
		});
	},
});
