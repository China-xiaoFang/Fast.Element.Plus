import { computed, defineComponent, nextTick, onActivated, onDeactivated, onMounted, onUnmounted, provide, ref, shallowRef, watch } from "vue";
import { definePropType, makeSlots, useExpose, useRender } from "../../../utils";
import type { VNode, VNodeArrayChildren } from "vue";
import type { FaLayoutGridBreakpoint, FaLayoutGridItemResponsive } from "./layoutGrid.type";

/** FaLayoutGrid 的插槽参数 */
export interface FaLayoutGridSlots extends Record<string, unknown> {
	/** 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaLayoutGrid",
	props: {
		/** Grid布局列配置 */
		cols: {
			type: definePropType<string | number | Partial<Record<FaLayoutGridBreakpoint, number>>>([String, Number, Object]),
			default: () => ({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }),
		},
		/** 折叠 */
		collapsed: Boolean,
		/** 折叠行数 */
		collapsedRows: {
			type: [String, Number],
			default: 1,
		},
		/** 间距，偏移 */
		gap: {
			type: definePropType<number | [number, number]>([Number, Array]),
			default: 0,
		},
	},
	emits: {
		/** 断点变化事件 */
		breakpointChange: ({ breakpoint: _breakpoint }: { breakpoint: FaLayoutGridBreakpoint }) => true,
	},
	slots: makeSlots<FaLayoutGridSlots>(),
	setup(props, { slots, emit, expose }) {
		const containerRef = shallowRef<HTMLElement | null>(null);

		// 注入响应式横向 gap 间距
		const horizontalGap = computed(() => (Array.isArray(props.gap) ? props.gap[0] : props.gap));
		provide("gap", horizontalGap);

		// 注入响应式断点
		const breakpoint = ref<FaLayoutGridBreakpoint>("xl");
		provide("breakpoint", breakpoint);

		// 注入要开始折叠的 index
		const firstHiddenIndex = ref(-1);
		provide("firstHiddenIndex", firstHiddenIndex);

		// 注入 cols
		const cols = computed<string | number>(() => {
			if (typeof props.cols === "object" && props.cols !== null) return props.cols[breakpoint.value] ?? 1;
			return props.cols;
		});
		provide("cols", cols);

		const collapsedRows = computed(() => (typeof props.collapsedRows === "number" ? props.collapsedRows : Number(props.collapsedRows)));

		// 设置间距
		const gap = computed(() => {
			if (typeof props.gap === "number") return `${props.gap}px`;
			if (Array.isArray(props.gap)) return `${props.gap[1]}px ${props.gap[0]}px`;
			return "unset";
		});

		// 设置 style
		const style = computed(() => {
			return {
				display: "grid",
				gridGap: gap.value,
				gridTemplateColumns: `repeat(${cols.value}, minmax(0, 1fr))`,
			};
		});

		// 断点映射
		const breakpoints = {
			// 小于480屏幕（如手机）
			xs: { min: 0, max: 479 },
			// 平板竖屏
			sm: { min: 480, max: 768 },
			// 平板横屏
			md: { min: 768, max: 1024 },
			// 小型桌面
			lg: { min: 1024, max: 1440 },
			// 大型桌面
			xl: { min: 1440, max: Infinity },
		};

		// 监听屏幕变化
		const resize = (e: ResizeObserverEntry[]) => {
			// 当前只监听布局容器，ResizeObserver 每次回调应当只有一个目标。
			if (e.length !== 1 || e[0] === undefined) throw new Error("FaLayoutGrid 监听到了非预期数量的布局容器。");
			const curEl = e[0];
			const width = curEl.target.scrollWidth;

			for (const [key, { min, max }] of Object.entries(breakpoints)) {
				if (width >= min && width <= max) {
					breakpoint.value = key as FaLayoutGridBreakpoint;
					break;
				}
			}
		};

		let resizeObserver: ResizeObserver | undefined;
		const observeResize = () => {
			const element = containerRef.value;
			if (!element) return;
			resizeObserver?.disconnect();
			resizeObserver = new ResizeObserver(resize);
			resizeObserver.observe(element);
		};

		watch(
			() => breakpoint.value,
			(newValue) => {
				emit("breakpointChange", { breakpoint: newValue });
			}
		);

		onMounted(() => {
			nextTick(observeResize);
			emit("breakpointChange", { breakpoint: breakpoint.value });
		});

		onActivated(() => nextTick(observeResize));

		onDeactivated(() => {
			resizeObserver?.disconnect();
		});

		onUnmounted(() => {
			resizeObserver?.disconnect();
		});

		useRender(() => {
			const defaultSlot = slots.default?.() ?? [];

			if (props.collapsed) {
				const fields: VNodeArrayChildren = [];
				let suffix: VNode | undefined;

				defaultSlot.forEach((slot) => {
					// suffix
					if (
						typeof slot.type === "object" &&
						"name" in slot.type &&
						slot.type.name === "FaLayoutGridItem" &&
						slot.props?.["suffix"] !== undefined
					) {
						suffix = slot;
					}
					// slot children
					if (typeof slot.type === "symbol" && Array.isArray(slot.children)) fields.push(...slot.children);
				});

				// 计算 suffix 所占用的列
				let suffixCols = 0;
				if (suffix?.props) {
					const activeBreakpointProps = suffix.props[breakpoint.value] as FaLayoutGridItemResponsive | undefined;
					suffixCols =
						(activeBreakpointProps?.span ?? Number(suffix.props["span"] ?? 1)) +
						(activeBreakpointProps?.offset ?? Number(suffix.props["offset"] ?? 0));
				}

				let occupiedCols = 0;
				firstHiddenIndex.value = -1;
				for (const [index, current] of fields.entries()) {
					const currentVNode = current as VNode;
					const currentProps = currentVNode.props;
					if (currentProps === null) continue;
					const activeBreakpointProps = currentProps[breakpoint.value] as FaLayoutGridItemResponsive | undefined;
					occupiedCols +=
						(activeBreakpointProps?.span ?? Number(currentProps["span"] ?? 1)) +
						(activeBreakpointProps?.offset ?? Number(currentProps["offset"] ?? 0));
					if (occupiedCols > collapsedRows.value * Number(cols.value) - suffixCols) {
						firstHiddenIndex.value = index;
						break;
					}
				}
			} else {
				firstHiddenIndex.value = -1;
			}

			return (
				<div ref={containerRef} style={style.value}>
					{defaultSlot}
				</div>
			);
		});

		return useExpose(expose, {
			/** 响应式断点 */
			breakpoint,
		});
	},
});
