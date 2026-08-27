/** Vue TSX 组件透传 Attribute 与构建期指令的补充类型。 */
declare module "vue" {
	interface ComponentCustomProps {
		/** 组件根节点可透传的原生点击事件。 */
		onClick?: HTMLAttributes["onClick"];
		/** 组件根节点可透传的原生键盘抬起事件。 */
		onKeyup?: HTMLAttributes["onKeyup"];
		/** 组件根节点可透传的原生标题属性。 */
		title?: HTMLAttributes["title"];
		/** unplugin-vue-jsx 的默认 v-model 写法。 */
		vModel?: unknown;
		/** 支持 `vModel:fileList` 等任意命名 v-model。 */
		[name: `vModel:${string}`]: unknown;
		/** 支持 `vModel_trim` 等任意 v-model 修饰符。 */
		[name: `vModel_${string}`]: unknown;
		/** Element Plus Loading 指令。 */
		vLoading?: boolean;
		/** unplugin-vue-jsx 的对象式 Slot 写法。 */
		vSlots?: Slots;
	}

	interface HTMLAttributes {
		/** Element Plus Loading 指令。 */
		vLoading?: boolean;
		/** Vue v-show 指令。 */
		vShow?: boolean;
	}
}

export {};
