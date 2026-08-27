/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { ElMessage } from "element-plus";
import { copy as copyToClipboard, withInstallDirective } from "../../utils";
import type { Directive, DirectiveBinding } from "vue";

interface CopyElement extends HTMLElement {
	copyData: string | number;
	__handleClick__: () => void;
}

const CopyDirective: Directive = {
	mounted(el: CopyElement, binding: DirectiveBinding<string | number>) {
		el.copyData = binding.value;

		const copy = async (): Promise<void> => {
			if (!el.copyData) return;
			try {
				await copyToClipboard(String(el.copyData));
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
		el.__handleClick__ = (): void => {
			void copy();
		};
		el.addEventListener("click", el.__handleClick__);
	},
	updated(el: CopyElement, binding: DirectiveBinding<string | number>) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: CopyElement) {
		el.removeEventListener("click", el.__handleClick__);
	},
};

/** 将绑定值复制到剪贴板的 Vue 指令。 */
export const vCopy = withInstallDirective(CopyDirective, "copy");
export default vCopy;
