import type { VNode, VNodeArrayChildren } from "vue";
import { computed, defineComponent, nextTick, onActivated, onDeactivated, onMounted, onUnmounted, provide, ref, watch } from "vue";
import { consoleWarn, definePropType, makeSlots, useRender } from "@fast-element-plus/utils";
import { isArray, isNumber, isObject } from "lodash-unified";
import type { FaLayoutGridBreakPoint } from "./layoutGrid.type";

type FaLayoutGridSlots = {
	/** @description 默认内容插槽 */
	default: never;
};

export default defineComponent({
	name: "FaLayoutGrid",
	props: {
		/** @description Grid布局列配置 */
		cols: {
			type: definePropType<string | number | Record<FaLayoutGridBreakPoint, number>>([String, Number, Object]),
			default: (): Record<FaLayoutGridBreakPoint, number> => ({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }),
		},
		/** @description 折叠 */
		collapsed: Boolean,
		/** @description 折叠行数 */
		collapsedRows: {
			type: [String, Number],
			default: 1,
		},
		/** @description 间距，偏移 */
		gap: {
			type: definePropType<number | [number, number]>([Number, Array]),
			default: 0,
		},
	},
	emits: {
		/** @description 断点变化事件 */
		breakPointChange: ({ breakPoint }: { breakPoint: FaLayoutGridBreakPoint }) => true,
	},
	slots: makeSlots<FaLayoutGridSlots>(),
	setup(props, { slots, emit, expose }) {
		const divElRef = ref<HTMLElement>();

		// 注入 gap 间距
		provide("gap", isArray(props.gap) ? props.gap[0] : props.gap);

		// 注入响应式断点
		const breakPoint = ref<FaLayoutGridBreakPoint>("xl");
		provide("breakPoint", breakPoint);

		// 注入要开始折叠的 index
		const hiddenIndex = ref(-1);
		provide("shouldHiddenIndex", hiddenIndex);

		// 注入 cols
		const cols = computed(() => {
			if (isObject(props.cols)) return props.cols[breakPoint.value] ?? props.cols;
			return props.cols;
		});
		provide("cols", cols);

		const collapsedRows = isNumber(props.collapsedRows) ? props.collapsedRows : Number(props.collapsedRows);

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
		const resize = (e: ResizeObserverEntry[]): void => {
			// 这里肯定只有一个
			if (e.length !== 1) throw new Error("未知的多个El");
			const curEl = e[0];
			const width = curEl.target.scrollWidth;

			for (const [key, { min, max }] of Object.entries(breakpoints)) {
				if (width >= min && width <= max) {
					breakPoint.value = key as FaLayoutGridBreakPoint;
					break;
				}
			}
		};

		const findIndex = (): void => {
			const fields: VNodeArrayChildren = [];
			let suffix: VNode = null;
			const slotContent = divElRef.value?.children;
			if (slotContent) {
				for (let i = 0; i < slotContent.length; i++) {
					const slotNode = slotContent[i]["__vueParentComponent"]?.vnode;
					if (typeof slotNode?.type === "object" && slotNode?.type.name === "FaLayoutGridItem" && slotNode?.props?.suffix !== undefined)
						suffix = slotNode;
					if (typeof slotNode?.type === "symbol" && Array.isArray(slotNode?.children))
						slotNode?.children.forEach((child: VNode) => fields.push(child));
				}
			}

			// 计算 suffix 所占用的列
			let suffixCols = 0;
			if (suffix) {
				suffixCols =
					(suffix.props[breakPoint.value]?.span ?? suffix.props?.span ?? 1) +
					(suffix.props[breakPoint.value]?.offset ?? suffix.props?.offset ?? 0);
			}
			try {
				let find = false;
				fields.reduce((prev = 0, current, index) => {
					prev +=
						((current as VNode).props[breakPoint.value]?.span ?? (current as VNode).props?.span ?? 1) +
						((current as VNode).props[breakPoint.value]?.offset ?? (current as VNode).props?.offset ?? 0);
					if ((prev as number) > collapsedRows * (cols.value as number) - suffixCols) {
						hiddenIndex.value = index;
						find = true;
						// throw "find it";
					}
					return prev;
				}, 0);
				if (!find) hiddenIndex.value = -1;
			} catch (error) {
				consoleWarn("FaLayoutGrid", error);
			}
		};

		let resizeObserver: ResizeObserver = null;

		onMounted(() => {
			nextTick(() => {
				resizeObserver = new ResizeObserver(resize);
				resizeObserver.observe(divElRef.value);
			});
		});

		onActivated(() => {
			nextTick(() => {
				resizeObserver = new ResizeObserver(resize);
				resizeObserver.observe(divElRef.value);
			});
		});

		onUnmounted(() => {
			resizeObserver?.disconnect();
		});

		onDeactivated(() => {
			resizeObserver?.disconnect();
		});

		onMounted(() => {
			// 断点变化时 执行 findIndex
			watch(
				() => breakPoint.value,
				() => {
					if (props.collapsed) {
						emit("breakPointChange", { breakPoint: breakPoint.value });
						findIndex();
					}
				},
				{
					immediate: true,
				}
			);
		});

		// 监听 collapsed
		watch(
			() => props.collapsed,
			(value) => {
				if (value) return findIndex();
				hiddenIndex.value = -1;
			}
		);

		// 设置间距
		const gap = computed(() => {
			if (isNumber(props.gap)) return `${props.gap}px`;
			if (isArray(props.gap)) return `${props.gap[1]}px ${props.gap[0]}px`;
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

		useRender(() => (
			<div ref={divElRef} style={style.value}>
				{slots.default && slots.default()}
			</div>
		));
	},
});
