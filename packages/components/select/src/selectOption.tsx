import { Fragment, computed, defineComponent, h, reactive, resolveComponent } from "vue";
import { ElOption, ElOptionGroup } from "element-plus";
import { definePropType, makeSlots, useRender } from "@fast-china/utils";
import { isUndefined } from "lodash-unified";
import type { ElSelectorOutput } from "./select.type";

export default defineComponent({
	name: "FaSelectOption",
	props: {
		/** @description 绑定值，优先级比 data 高 */
		value: {
			type: definePropType<string | number | boolean | object>([String, Number, Boolean, Object]),
			default: undefined,
		},
		/** @description 显示值，优先级比 data 高 */
		label: String,
		/** @description 禁用值，优先级比 data 高 */
		disabled: {
			type: Boolean,
			default: undefined,
		},
		/** @description 子节点，优先级比 data 高 */
		children: {
			type: definePropType<ElSelectorOutput[]>(Array),
		},
		/** @description 下拉框数据 */
		data: {
			type: definePropType<ElSelectorOutput>(Object),
			default: () => ({}) as ElSelectorOutput,
		},
		/** @description 更多细节，只有使用slot的时候有用 */
		moreDetail: Boolean,
	},
	slots: makeSlots<{
		/** @description 默认内容插槽 */
		default: ElSelectorOutput | any;
	}>(),
	setup(props, { slots }) {
		const state = reactive({
			value: computed(() => (isUndefined(props.value) ? props.data.value : props.value)),
			label: computed(() => (isUndefined(props.label) ? props.data.label : props.label)),
			disabled: computed(() => (isUndefined(props.disabled) ? props.data.disabled : props.disabled) ?? false),
			children: computed(() => (isUndefined(props.children) ? props.data.children : props.children) ?? []),
		});

		useRender(() => (
			<Fragment>
				{state.children.length > 0 ? (
					<ElOptionGroup label={state.label} disabled={state.disabled}>
						{state.children.map((item) =>
							h(
								resolveComponent("FaSelectOption"),
								{
									moreDetail: props.moreDetail,
									data: item,
								},
								slots
							)
						)}
					</ElOptionGroup>
				) : (
					<ElOption
						class={{ "fa-select-page-dropdown__selector__more-detail": props.moreDetail && slots.default }}
						value={state.value}
						label={state.label}
						disabled={state.disabled}
					>
						{slots.default && slots.default(props.data)}
					</ElOption>
				)}
			</Fragment>
		));
	},
});
