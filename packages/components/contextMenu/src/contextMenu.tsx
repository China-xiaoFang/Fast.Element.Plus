import { Transition, defineComponent, onMounted, reactive } from "vue";
import { FaIcon } from "@fast-element-plus/components/icon";
import { definePropType, useExpose, useRender } from "@fast-element-plus/utils";
import { useEventListener } from "@vueuse/core";
import { isObject } from "lodash-unified";
import type { FaContextMenuData } from "./contextMenu.type";

export default defineComponent({
	name: "FaContextMenu",
	props: {
		/** @description 数据 */
		data: {
			type: definePropType<FaContextMenuData[]>(Array),
			default: () => [],
		},
	},
	emits: {
		/** @description 点击事件 */
		click: (event: MouseEvent, data: FaContextMenuData) => event instanceof MouseEvent && isObject(data),
	},
	setup(props, { emit, expose }) {
		const state = reactive({
			visible: false,
			axis: {
				x: 0,
				y: 0,
			},
		});

		const handleClick = (event: MouseEvent, data: FaContextMenuData): void => {
			if (data?.disabled) return;
			data?.click && data.click(event, data);
			emit("click", event, data);
		};

		const open = (axis: { x: number; y: number } = { x: 0, y: 0 }): void => {
			state.axis = axis;
			state.visible = true;
		};

		const close = (): void => {
			state.visible = false;
		};

		onMounted(() => {
			useEventListener(document, "click", close);
		});

		useRender(() => (
			<Transition name="el-zoom-in-center">
				<div
					class="fa-context-menu el-popper el-dropdown__popper"
					vShow={state.visible}
					style={{ top: `${state.axis.y + 5}px`, left: `${state.axis.x + 14}px` }}
					key={Math.random()}
				>
					<ul class="el-dropdown-menu">
						{props.data
							.filter((f) => !f.hide)
							.map((item) => (
								<li
									class={["el-dropdown-menu__item", item?.disabled === true ? "is-disabled" : ""]}
									tabIndex="-1"
									onClick={(event: MouseEvent) => {
										handleClick(event, item);
									}}
								>
									{item?.icon ? <FaIcon name={item?.icon} /> : null}
									<span>{item.label}</span>
								</li>
							))}
					</ul>
				</div>
			</Transition>
		));

		return useExpose(expose, {
			/** @description 是否显示 */
			visible: state.visible,
			/** @description 打开菜单 */
			open,
			/** @description 关闭菜单 */
			close,
		});
	},
});
