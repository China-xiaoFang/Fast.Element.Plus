import { nextTick } from "vue";

export const useOverlay = {
	show: (transparent = 0): void => {
		// 判断是否存在遮罩层
		if (!window.overlay) {
			const bodyEl: Element = document.body;
			const div = document.createElement("div");
			div.className = "__fa-overlay";
			div.style.backgroundColor = `rgba(0, 0, 0, ${transparent})`;
			bodyEl.insertBefore(div, bodyEl.childNodes[0]);
			window.overlay = true;
		}
	},
	hide: (): void => {
		// 判断是否存在遮罩层
		if (window.overlay) {
			nextTick(() => {
				const loadingEl = document.querySelector(".__fa-overlay");
				loadingEl && loadingEl.parentNode?.removeChild(loadingEl);
				window.overlay = false;
			});
		}
	},
};
