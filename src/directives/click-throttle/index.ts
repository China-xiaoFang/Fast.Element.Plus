import { withInstallDirective } from "../../utils/vue/install";
import type { Directive } from "vue";

interface ThrottleElement extends HTMLElement {
	__handleClick__?: () => void;
	__throttle_timer__?: ReturnType<typeof setTimeout>;
	__throttle_callback__?: (...arguments_: unknown[]) => void;
	disabled: boolean;
}

const ThrottleDirective: Directive<ThrottleElement, (...arguments_: unknown[]) => void> = {
	mounted(el, binding) {
		if (typeof binding.value !== "function") {
			throw new TypeError("callback 必须是函数。");
		}
		el.__throttle_callback__ = binding.value;
		el.__handleClick__ = (): void => {
			// 冷却期内的额外事件不能清除解锁计时器，否则元素会一直禁用。
			if (el.__throttle_timer__ !== undefined || el.disabled) return;
			el.disabled = true;
			// 在调用业务回调前登记计时器；回调抛错或同步触发卸载时也能正确清理。
			el.__throttle_timer__ = setTimeout(() => {
				el.__throttle_timer__ = undefined;
				el.disabled = false;
			}, 1000);
			el.__throttle_callback__?.();
		};
		el.addEventListener("click", el.__handleClick__);
	},
	updated(el, binding) {
		if (typeof binding.value !== "function") {
			throw new TypeError("callback 必须是函数。");
		}
		el.__throttle_callback__ = binding.value;
	},
	beforeUnmount(el) {
		if (el.__handleClick__) el.removeEventListener("click", el.__handleClick__);
		if (el.__throttle_timer__ !== undefined) {
			clearTimeout(el.__throttle_timer__);
			el.disabled = false;
		}
		delete el.__handleClick__;
		delete el.__throttle_timer__;
		delete el.__throttle_callback__;
	},
};

/** 对点击回调进行前缘节流；冷却期为 1 秒，卸载时清理监听与计时器。 */
export const vThrottle = withInstallDirective(ThrottleDirective, "throttle");
export default vThrottle;
