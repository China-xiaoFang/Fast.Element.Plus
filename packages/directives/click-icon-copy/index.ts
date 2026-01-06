/**
 * v-iconCopy
 * 左侧插入复制图标，复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { type Directive, type DirectiveBinding, h, render } from "vue";
import { ElIcon, ElMessage } from "element-plus";
import { CopyDocument } from "@element-plus/icons-vue";
import { stringUtil, withInstallDirective } from "@fast-china/utils";

interface IconCopyElement extends HTMLElement {
	copyData: string | number;
	__iconElement__: Node;
}

const IconCopyDirective: Directive = {
	mounted(el: IconCopyElement, binding: DirectiveBinding<string | number>) {
		el.copyData = binding.value;

		if (!el.copyData) return;

		const handleCopyClick = async (): Promise<void> => {
			try {
				await stringUtil.copy(String(el.copyData));
				ElMessage({
					type: "success",
					message: "复制成功",
				});
			} catch (error) {
				ElMessage({
					type: "error",
					message: "复制失败",
				});
				throw error;
			}
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

		el.__iconElement__ = tempDiv.firstChild;
		el.parentElement.insertBefore(tempDiv.firstChild, el);
	},
	updated(el: IconCopyElement, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: IconCopyElement) {
		if (el.__iconElement__) {
			el.parentElement.removeChild(el.__iconElement__);
		}
	},
};

export const vIconCopy = withInstallDirective(IconCopyDirective, "iconCopy");
export default vIconCopy;
