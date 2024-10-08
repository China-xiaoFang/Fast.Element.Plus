/**
 * v-longpress
 * 长按指令，长按时触发事件
 */
import type { Directive, DirectiveBinding } from "vue";
import { withInstallDirective } from "@fast-element-plus/utils";

const LongpressDirective: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}

		// 运行函数
		const handler = (e: MouseEvent | TouchEvent): void => {
			binding.value(e);
		};

		// 定义变量
		let pressTimer: any = null;
		// 创建计时器（ 2秒后执行函数 ）
		const start = (e: any): void => {
			if (e.button) {
				if (e.type === "click" && e.button !== 0) {
					return;
				}
			}
			if (pressTimer === null) {
				pressTimer = setTimeout(() => {
					handler(e);
				}, 1000);
			}
		};
		// 取消计时器
		const cancel = (): void => {
			if (pressTimer !== null) {
				clearTimeout(pressTimer);
				pressTimer = null;
			}
		};
		// 添加事件监听器
		el.addEventListener("mousedown", start);
		el.addEventListener("touchstart", start);
		// 取消计时器
		el.addEventListener("click", cancel);
		el.addEventListener("mouseout", cancel);
		el.addEventListener("touchend", cancel);
		el.addEventListener("touchcancel", cancel);
	},
};

export const vLongpress = withInstallDirective(LongpressDirective, "longpress");
export default vLongpress;
