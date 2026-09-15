import { Transition, defineComponent, onBeforeUnmount, onMounted, reactive, toRef } from "vue";
import { useGlobalSize } from "element-plus";
import { definePropType, useExpose, useRender } from "../../../utils";
import { FaIcon } from "../../icon";
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
		click: (event: MouseEvent, data: FaContextMenuData | null) => event instanceof MouseEvent && typeof data === "object" && data !== null,
	},
	setup(props, { emit, expose }) {
		const globalSize = useGlobalSize();

		const state = reactive({
			visible: false,
			axis: {
				x: 0,
				y: 0,
			},
		});

		const handleClick = (event: MouseEvent, data: FaContextMenuData | null) => {
			if (data?.disabled) return;
			data?.click?.(event, data);
			emit("click", event, data);
		};

		const open = (axis: { x: number; y: number } = { x: 0, y: 0 }) => {
			state.axis = axis;
			state.visible = true;
		};

		const close = () => {
			state.visible = false;
		};

		onMounted(() => {
			document.addEventListener("click", close);
		});

		onBeforeUnmount(() => {
			document.removeEventListener("click", close);
		});

		useRender(() => (
			<Transition name="el-zoom-in-top">
				<div
					class={["fa-context-menu", `fa-context-menu-${globalSize.value}`, "el-popper el-dropdown__popper"]}
					style={{ top: `${state.axis.y + 5}px`, left: `${state.axis.x + 14}px` }}
					vShow={state.visible}
					key={Math.random()}
				>
					<ul class="el-dropdown-menu">
						{props.data
							.filter((f) => !f.hide)
							.map((item) => (
								<li
									class={["el-dropdown-menu__item", item.disabled === true ? "is-disabled" : ""]}
									tabindex="-1"
									onClick={(event: MouseEvent) => {
										handleClick(event, item);
									}}
								>
									{item.icon ? <FaIcon name={item.icon} /> : null}
									<span>{item.label}</span>
								</li>
							))}
					</ul>
				</div>
			</Transition>
		));

		return useExpose(expose, {
			/** @description 是否显示 */
			visible: toRef(state, "visible"),
			/** @description 打开菜单 */
			open,
			/** @description 关闭菜单 */
			close,
		});
	},
});
