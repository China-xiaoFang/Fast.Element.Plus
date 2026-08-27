let activeLoadingCount = 0;
let hideTimer: ReturnType<typeof setTimeout> | undefined;

/** 全局页面加载效果控制器。 */
export const useLoading = {
	/** 显示全局页面加载效果。 */
	show: (): void => {
		activeLoadingCount++;
		if (hideTimer !== undefined) {
			clearTimeout(hideTimer);
			hideTimer = undefined;
		}
		// 判断是否存在加载效果
		if (!document.querySelector(".__fa-loading")) {
			const bodyEl: Element = document.body;
			const div = document.createElement("div");
			div.className = "__fa-loading";
			div.innerHTML = `
<div class="__fa-loading__box">
	<div class="__fa-loading__box-warp">
			<div class="__fa-loading__box-warp__item"></div>
	</div>
</div>
`;
			bodyEl.insertBefore(div, bodyEl.firstChild);
		}
		window.loading = true;
	},
	/** 隐藏全局页面加载效果。 */
	hide: (): void => {
		activeLoadingCount = Math.max(activeLoadingCount - 1, 0);
		if (activeLoadingCount > 0 || !window.loading) return;
		if (hideTimer !== undefined) clearTimeout(hideTimer);
		hideTimer = setTimeout(() => {
			document.querySelector(".__fa-loading")?.remove();
			window.loading = false;
			hideTimer = undefined;
		}, 500);
	},
};
