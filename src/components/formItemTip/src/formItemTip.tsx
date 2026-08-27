import { defineComponent } from "vue";
import { QuestionFilled } from "@element-plus/icons-vue";
import { ElIcon, ElTooltip } from "element-plus";
import { makeSlots, useRender } from "../../../utils";

/** FaFormItemTip 的运行时 Props 定义。 */
export const faFormItemTipProps = {
	/** @description 提示 */
	tips: String,
	/** @description 显示 */
	label: String,
};

/** FaFormItemTip 的插槽参数。 */
export interface FaFormItemTipSlots extends Record<string, unknown> {
	/** @description 显示插槽 */
	label: never;
}

export default defineComponent({
	name: "FaFormItemTip",
	props: faFormItemTipProps,
	slots: makeSlots<FaFormItemTipSlots>(),
	setup(props, { slots }) {
		useRender(() => (
			<div class="fa-form-item-tip">
				<ElTooltip effect="dark" rawContent content={props.tips} placement="top">
					<ElIcon>
						<QuestionFilled />
					</ElIcon>
				</ElTooltip>
				<span class="fa-form-item-tip__label">{slots.label ? slots.label() : props.label}</span>
			</div>
		));
	},
});
