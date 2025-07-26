import { withInstallDirective } from "@fast-china/utils";
const DraggableDirective = {
  mounted(el) {
    el.style.cursor = "move";
    el.style.position = "absolute";
    el.onmousedown = (e) => {
      const disX = e.pageX - el.offsetLeft;
      const disY = e.pageY - el.offsetTop;
      document.onmousemove = (e2) => {
        let x = e2.pageX - disX;
        let y = e2.pageY - disY;
        const maxX = el.parentNode.offsetWidth - el.offsetWidth;
        const maxY = el.parentNode.offsetHeight - el.offsetHeight;
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }
        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      };
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    };
  }
};
const vDraggable = withInstallDirective(DraggableDirective, "draggable");
export {
  vDraggable as default,
  vDraggable
};
//# sourceMappingURL=index.mjs.map
