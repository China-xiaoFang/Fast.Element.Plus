import { defineComponent } from "vue";
import { ElIcon, ElTooltip } from "element-plus";
import { QuestionFilled } from "@element-plus/icons-vue";
import { makeSlots, useRender } from "@fast-china/utils";

export const faFormItemTipProps = {
	/** @description 提示 */
	tips: String,
	/** @description 显示 */
	label: String,
};

type FaFormItemTipSlots = {
	/** @description 显示插槽 */
	label: never;
};

export default defineComponent({
	name: "FaFormItemTip",
	props: faFormItemTipProps,
	slots: makeSlots<FaFormItemTipSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
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
