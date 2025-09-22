import { nextTick } from "vue";
const useOverlay = {
  show: (transparent = 0) => {
    if (!window.overlay) {
      const bodyEl = document.body;
      const div = document.createElement("div");
      div.className = "__fa-overlay";
      div.style.backgroundColor = `rgba(0, 0, 0, ${transparent})`;
      bodyEl.insertBefore(div, bodyEl.childNodes[0]);
      window.overlay = true;
    }
  },
  hide: () => {
    if (window.overlay) {
      nextTick(() => {
        const loadingEl = document.querySelector(".__fa-overlay");
        loadingEl && loadingEl.parentNode?.removeChild(loadingEl);
        window.overlay = false;
      });
    }
  }
};
export {
  useOverlay
};
//# sourceMappingURL=index.mjs.map
