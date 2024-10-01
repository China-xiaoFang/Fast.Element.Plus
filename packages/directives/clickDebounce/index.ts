/**
 * v-debounce
 * 按钮防抖指令
 */
import type { Directive, DirectiveBinding, VNode } from "vue";
import { withInstallDirective } from "@fast-element-plus/utils";

interface ElType extends HTMLElement {
	__debounce_timer__: NodeJS.Timeout;
	__debounce_originClick__: () => any;
}

const DebounceDirective: Directive = {
	created(el: ElType, binding: DirectiveBinding, vNode: VNode) {
		// 记录原来的点击事件方法
		el.__debounce_originClick__ = vNode.props.onClick;

		// 替换原来的点击事件
		vNode.props.onClick = (): void => {
			if (el.__debounce_timer__) {
				clearInterval(el.__debounce_timer__);
			}
			// 防抖处理
			el.__debounce_timer__ = setTimeout(() => {
				el.__debounce_originClick__();
			}, 500);
		};
	},
};

export const vDebounce = withInstallDirective(DebounceDirective, "debounce");
export default vDebounce;
