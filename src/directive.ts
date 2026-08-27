import { vCopy } from "./directives/click-copy";
import { vDebounce } from "./directives/click-debounce";
import { vDraggable } from "./directives/click-draggable";
import { vIconCopy } from "./directives/click-icon-copy";
import { vLongpress } from "./directives/click-longpress";
import { vThrottle } from "./directives/click-throttle";
import type { Plugin } from "vue";

/** 默认安装器注册的全部 Fast.Element.Plus 指令。 */
export default [vCopy, vDebounce, vDraggable, vIconCopy, vLongpress, vThrottle] as Plugin[];
