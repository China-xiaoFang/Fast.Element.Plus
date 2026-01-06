/**
 * v-debounce
 * 按钮防抖指令
 */
import { withInstallDirective } from "@fast-china/utils";
import type { Directive, DirectiveBinding, VNode } from "vue";

interface DebounceElement extends HTMLElement {
	__debounce_timer__: NodeJS.Timeout;
	__debounce_originClick__: () => any;
}

interface DebounceVNode extends VNode {
	props: {
		/** @description 点击事件 */
		onClick?: (...args) => any;
		[key: string]: any;
	};
}

const DebounceDirective: Directive = {
	created(el: DebounceElement, binding: DirectiveBinding, vNode: DebounceVNode) {
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
