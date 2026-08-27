/*
  需求：防止按钮在短时间内被多次点击，使用节流函数限制规定时间内只能点击一次。

  思路：
    1、第一次点击，立即调用方法并禁用按钮，等延迟结束再次激活按钮
    2、将需要触发的方法绑定在指令上

  使用：给 Dom 加上 v-throttle 及回调函数即可
  <button v-throttle="debounceClick">节流提交</button>
*/
import { withInstallDirective } from "../../utils";
import type { Directive } from "vue";

interface ThrottleElement extends HTMLElement {
	__handleClick__: () => void;
	disabled: boolean;
}

const ThrottleDirective: Directive<ThrottleElement, (...arguments_: unknown[]) => void> = {
	mounted(el, binding) {
		if (typeof binding.value !== "function") {
			throw new TypeError("callback 必须是函数。");
		}
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = (): void => {
			if (timer) {
				clearTimeout(timer);
			}
			if (!el.disabled) {
				el.disabled = true;
				binding.value();
				timer = setTimeout(() => {
					el.disabled = false;
				}, 1000);
			}
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el) {
		el.removeEventListener("click", el.__handleClick__);
	},
};

/** 对点击回调进行节流处理的 Vue 指令。 */
export const vThrottle = withInstallDirective(ThrottleDirective, "throttle");
export default vThrottle;
