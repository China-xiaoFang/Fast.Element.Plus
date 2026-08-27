import { computed, defineComponent, h, reactive, resolveComponent } from "vue";
import { ElIcon } from "element-plus";
import { RegExps } from "../../../constants";
import { addCssUnit, useRender } from "../../../utils";
import type { CSSProperties } from "vue";

/** FaIcon 的运行时 Props 定义。 */
export const faIconProps = {
	/** @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库； */
	name: {
		type: String,
		required: true as const,
	},
	/** @description 大小 */
	size: {
		type: [String, Number],
	},
	/** @description 颜色*/
	color: String,
};

export default defineComponent({
	name: "FaIcon",
	props: faIconProps,
	setup(props, { attrs }) {
		const state = reactive({
			isUrl: computed(() => RegExps.External.test(props.name)),
			style: computed((): CSSProperties => {
				const result: CSSProperties & { "-webkit-mask"?: string } = {};
				if (props.size) {
					result.fontSize = addCssUnit(props.size);
				}
				if (props.color) {
					result.color = props.color;
				}
				if (state.isUrl) {
					result.mask = `url(${props.name}) no-repeat 50% 50%`;
					result["-webkit-mask"] = `url(${props.name}) no-repeat 50% 50%`;
				}
				return result;
			}),
		});

		useRender(() =>
			props.name.startsWith("el-icon-") ? (
				<ElIcon {...attrs} {...props} class={["fa-icon", props.name]}>
					{h(resolveComponent(props.name))}
				</ElIcon>
			) : props.name.startsWith("fa-icon") ? (
				<ElIcon {...attrs} {...props} class={["fa-icon", props.name]}>
					{h(resolveComponent(props.name))}
				</ElIcon>
			) : state.isUrl ? (
				<div {...attrs} class="el-icon fa-icon url-icon" style={state.style} />
			) : (
				<i {...attrs} class={["el-icon fa-icon", props.name]} style={state.style} />
			)
		);
	},
});
