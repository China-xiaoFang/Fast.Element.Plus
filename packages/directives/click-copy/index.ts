/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { ElMessage } from "element-plus";
import { stringUtil, withInstallDirective } from "@fast-china/utils";
import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	copyData: string | number;
	__handleClick__: () => void;
}

const CopyDirective: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;

		el.__handleClick__ = async (): Promise<void> => {
			if (!el.copyData) return;
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
		el.addEventListener("click", el.__handleClick__);
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	},
};

export const vCopy = withInstallDirective(CopyDirective, "copy");
export default vCopy;
