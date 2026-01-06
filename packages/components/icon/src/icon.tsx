import { computed, defineComponent, h, reactive, resolveComponent } from "vue";
import { ElIcon } from "element-plus";
import { RegExps } from "@fast-element-plus/constants";
import { addUnit, useRender } from "@fast-china/utils";
import type { CSSProperties } from "vue";

export const faIconProps = {
	/** @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库； */
	name: {
		type: String,
		required: true,
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
	setup(props, { attrs, slots, emit, expose }) {
		const state = reactive({
			isUrl: computed(() => RegExps.External.test(props.name)),
			style: computed((): CSSProperties => {
				const result: any = {};
				if (props.size) {
					result.size = addUnit(props.size);
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
			props.name.indexOf("el-icon-") === 0 ? (
				<ElIcon {...attrs} {...props} class={["fa-icon", props.name]}>
					{h(resolveComponent(props.name))}
				</ElIcon>
			) : props.name.indexOf("fa-icon") === 0 ? (
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
