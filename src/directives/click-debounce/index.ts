/**
 * v-debounce
 * 按钮防抖指令
 */
import { withInstallDirective } from "../../utils";
import type { Directive } from "vue";

interface DebounceElement extends HTMLElement {
	__debounce_timer__?: ReturnType<typeof setTimeout>;
	__debounce_originClick__?: (...arguments_: unknown[]) => unknown;
}

const DebounceDirective: Directive<DebounceElement> = {
	created(el, _binding, vNode) {
		const props = vNode.props as { onClick?: (...arguments_: unknown[]) => unknown } | null;
		if (props?.onClick === undefined) return;

		// 记录原来的点击事件方法
		el.__debounce_originClick__ = props.onClick;

		// 替换原来的点击事件
		props.onClick = (...arguments_: unknown[]): void => {
			if (el.__debounce_timer__) {
				clearTimeout(el.__debounce_timer__);
			}
			// 防抖处理
			el.__debounce_timer__ = setTimeout(() => {
				el.__debounce_originClick__?.(...arguments_);
			}, 500);
		};
	},
};

/** 对点击回调进行防抖处理的 Vue 指令。 */
export const vDebounce = withInstallDirective(DebounceDirective, "debounce");
export default vDebounce;
