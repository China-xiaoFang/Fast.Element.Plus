/**
 * v-iconCopy
 * 左侧插入复制图标，复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { type Directive, type DirectiveBinding, h, render } from "vue";
import { CopyDocument } from "@element-plus/icons-vue";
import { ElIcon, ElMessage } from "element-plus";
import { copy as copyToClipboard, withInstallDirective } from "../../utils";

interface IconCopyElement extends HTMLElement {
	copyData: string | number;
	__iconElement__: Node;
}

const IconCopyDirective: Directive = {
	mounted(el: IconCopyElement, binding: DirectiveBinding<string | number>) {
		el.copyData = binding.value;

		if (!el.copyData) return;

		const handleCopyClick = (): void => {
			void copyToClipboard(String(el.copyData)).then(
				() => {
					ElMessage({
						type: "success",
						message: "复制成功",
					});
				},
				() => {
					ElMessage({
						type: "error",
						message: "复制失败",
					});
				}
			);
		};

		// 创建 ELIcon 组件
		const iconEl = h(
			ElIcon,
			{
				class: "fa__copy-icon",
				title: "复制",
				onClick: handleCopyClick,
			},
			{
				default: () => h(CopyDocument),
			}
		);

		const tempDiv = document.createElement("div");
		render(iconEl, tempDiv);

		const iconElement = tempDiv.firstChild;
		const parentElement = el.parentElement;
		if (iconElement === null || parentElement === null) return;
		el.__iconElement__ = iconElement;
		parentElement.insertBefore(iconElement, el);
	},
	updated(el: IconCopyElement, binding: DirectiveBinding<string | number>) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: IconCopyElement) {
		if (el.__iconElement__ && el.parentElement) {
			el.parentElement.removeChild(el.__iconElement__);
		}
	},
};

/** 在目标元素前渲染复制图标的 Vue 指令。 */
export const vIconCopy = withInstallDirective(IconCopyDirective, "iconCopy");
export default vIconCopy;
