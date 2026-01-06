import { Fragment, computed, defineComponent, inject, ref } from "vue";
import { ElFormItem, formItemProps } from "element-plus";
import { FaFormItemTip } from "@fast-element-plus/components/formItemTip";
import { FaLayoutGridItem } from "@fast-element-plus/components/layoutGrid";
import { makeSlots, useExpose, useProps, useRender } from "@fast-china/utils";
import { isNumber } from "lodash-unified";
import type { FormItemInstance } from "element-plus";
import type { Ref, VNode } from "vue";

export const faFormItemProps = {
	...formItemProps,
	/** @description Label tips 提示 */
	tips: String,
	/** @description Grid 布局 */
	grid: {
		type: Boolean,
		default: true,
	},
	/** @description 偏移量 */
	offset: {
		type: [String, Number],
		default: 0,
	},
	/** @description 栅格跨度 */
	span: {
		type: [String, Number],
	},
	/** @description 独占一行。如果设置 span 则无效 */
	row: Boolean,
};

type FaFormItemSlots = {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 标签位置显示的内容 */
	label: { label: string };
	/** @description 验证错误信息的显示内容 */
	error: { error: string };
};

export default defineComponent({
	name: "FaFormItem",
	props: faFormItemProps,
	slots: makeSlots<FaFormItemSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const formItemRef = ref<FormItemInstance>();

		const cols = inject<Ref<number>>("cols", ref(4));

		// 获取响应式设置
		const getResponsive = (): {
			span?: number;
			offset?: number;
		} => {
			if (!props.grid) return {};
			if (props.span) {
				return {
					span: isNumber(props.span) ? props.span : Number(props.span),
					offset: isNumber(props.offset) ? props.offset : Number(props.offset),
				};
			} else {
				const result = {
					span: 1,
					offset: isNumber(props.offset) ? props.offset : Number(props.offset),
				};
				if (props.row) {
					result.span = cols.value;
				}
				return result;
			}
		};

		const elFormItemProps = useProps(props, formItemProps);

		const ParcelComponent = props.grid ? FaLayoutGridItem : Fragment;

		useRender(() => (
			<ParcelComponent {...getResponsive()}>
				<ElFormItem ref={formItemRef} {...elFormItemProps.value}>
					{{
						default: () => slots.default(),
						...(slots.label && !props.tips && { label: ({ label }: { label: string }): VNode[] => slots.label({ label }) }),
						...(slots.label &&
							props.tips && {
								label: ({ label }: { label: string }): VNode[] => (
									<FaFormItemTip>
										{{
											label: () => slots.label({ label }),
										}}
									</FaFormItemTip>
								),
							}),
						...(!slots.label &&
							props.tips && {
								label: ({ label }: { label: string }): VNode[] => <FaFormItemTip label={label ?? props.label} tips={props.tips} />,
							}),
						...(slots.error && { error: ({ error }: { error: string }): VNode[] => slots.error({ error }) }),
					}}
				</ElFormItem>
			</ParcelComponent>
		));

		return useExpose(expose, {
			/** @description 表单项大小 */
			size: computed(() => formItemRef.value?.size),
			/** @description 校验消息 */
			validateMessage: computed(() => formItemRef.value?.validateMessage),
			/** @description 校验状态 */
			validateState: computed(() => formItemRef.value?.validateState),
			/** @description 验证表单项 */
			validate: computed(() => formItemRef.value?.validate),
			/** @description 移除该表单项的校验结果 */
			clearValidate: computed(() => formItemRef.value?.clearValidate),
			/** @description 对该表单项进行重置，将其值重置为初始值并移除校验结果 */
			resetField: computed(() => formItemRef.value?.resetField),
		});
	},
});
