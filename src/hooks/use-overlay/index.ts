let activeOverlayCount = 0;

/** 全局页面遮罩层控制器。 */
export const useOverlay = {
	/**
	 * 显示全局页面遮罩层。
	 *
	 * @param transparent - 遮罩层透明度。
	 */
	show: (transparent = 0): void => {
		activeOverlayCount++;
		// 判断是否存在遮罩层
		let overlayEl = document.querySelector<HTMLElement>(".__fa-overlay");
		if (!overlayEl) {
			const bodyEl: Element = document.body;
			overlayEl = document.createElement("div");
			overlayEl.className = "__fa-overlay";
			bodyEl.insertBefore(overlayEl, bodyEl.firstChild);
		}
		overlayEl.style.backgroundColor = `rgba(0, 0, 0, ${transparent})`;
		window.overlay = true;
	},
	/** 隐藏全局页面遮罩层。 */
	hide: (): void => {
		activeOverlayCount = Math.max(activeOverlayCount - 1, 0);
		if (activeOverlayCount > 0 || !window.overlay) return;
		document.querySelector(".__fa-overlay")?.remove();
		window.overlay = false;
	},
};
