/**
 * v-longpress
 * 长按指令，长按时触发事件
 */
import { withInstallDirective } from "../../utils";
import type { Directive, DirectiveBinding } from "vue";

const LongpressDirective: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding<(event: MouseEvent | TouchEvent) => void>) {
		if (typeof binding.value !== "function") {
			throw new TypeError("callback 必须是函数。");
		}

		// 运行函数
		const handler = (e: MouseEvent | TouchEvent): void => {
			binding.value(e);
		};

		// 定义变量
		let pressTimer: ReturnType<typeof setTimeout> | undefined;
		// 创建计时器（ 2秒后执行函数 ）
		const start = (event: MouseEvent | TouchEvent): void => {
			if (event instanceof MouseEvent && event.button !== 0) {
				return;
			}
			pressTimer ??= setTimeout(() => {
				handler(event);
			}, 1000);
		};
		// 取消计时器
		const cancel = (): void => {
			if (pressTimer !== undefined) {
				clearTimeout(pressTimer);
				pressTimer = undefined;
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

/** 长按时触发绑定回调的 Vue 指令。 */
export const vLongpress = withInstallDirective(LongpressDirective, "longpress");
export default vLongpress;
