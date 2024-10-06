import type { CSSProperties, PropType } from "vue";
import { computed, defineComponent, h, reactive, resolveComponent } from "vue";
import { RegExps } from "@fast-element-plus/constants";
import { useRender } from "@fast-element-plus/utils";
import { ElIcon } from "element-plus";
import { isNumber } from "lodash-unified";

export const faIconProps = {
	/**
	 * 名称
	 * @description el-icon- 使用 El-icon 的图标；fa-icon 使用 Fast 图标组件库；
	 * @requires 必填
	 */
	name: {
		type: String,
		required: true,
	},
	/**
	 * 大小
	 */
	size: [Number, String] as PropType<number | string>,
	/**
	 * 颜色
	 */
	color: String,
};

/**
 * FaIcon 组件
 */
export default defineComponent({
	name: "FaIcon",
	props: faIconProps,
	setup(props, { attrs }) {
		const state = reactive({
			isUrl: computed(() => RegExps.External.test(props.name)),
			style: computed((): CSSProperties => {
				const result: any = {};
				if (props.size) {
					if (isNumber(props.size)) {
						result.size = `${props.size}px`;
					} else {
						result.size = props.size;
					}
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
