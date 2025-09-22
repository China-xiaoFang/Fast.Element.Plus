import { nextTick } from "vue";
const useLoading = {
  show: () => {
    if (!window.loading) {
      const bodyEl = document.body;
      const div = document.createElement("div");
      div.className = "__fa-loading";
      div.innerHTML = `
<div class="__fa-loading__box">
	<div class="__fa-loading__box-warp">
			<div class="__fa-loading__box-warp__item"></div>
	</div>
</div>
`;
      bodyEl.insertBefore(div, bodyEl.childNodes[0]);
      window.loading = true;
    }
  },
  hide: () => {
    if (window.loading) {
      nextTick(() => {
        setTimeout(() => {
          const loadingEl = document.querySelector(".__fa-loading__box");
          loadingEl && loadingEl.parentNode?.removeChild(loadingEl);
          window.loading = false;
        }, 500);
      });
    }
  }
};
export {
  useLoading
};
//# sourceMappingURL=index.mjs.map
