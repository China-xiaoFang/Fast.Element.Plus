import { computed, defineComponent, inject, reactive, ref, watch } from "vue";
import { isNumber } from "lodash-unified";
import { definePropType, makeSlots, useExpose, useRender } from "../../../utils";
import type { FaLayoutGridBreakPoint, FaLayoutGridItemResponsive } from "./layoutGrid.type";
import type { Ref } from "vue";

/** FaLayoutGridItem 的插槽参数。 */
export interface FaLayoutGridItemSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaLayoutGridItem",
	props: {
		/** @description 偏移 */
		offset: {
			type: [String, Number],
			default: 0,
		},
		/** @description 占位 */
		span: {
			type: [String, Number],
			default: 1,
		},
		/** @description 后缀 */
		suffix: { type: Boolean, default: false },
		/** @description 响应式，小于480px屏幕配置 */
		xs: {
			type: definePropType<FaLayoutGridItemResponsive>(Object),
			default: undefined,
		},
		/** @description 响应式，平板竖屏配置 */
		sm: {
			type: definePropType<FaLayoutGridItemResponsive>(Object),
			default: undefined,
		},
		/** @description 响应式，平板横屏配置 */
		md: {
			type: definePropType<FaLayoutGridItemResponsive>(Object),
			default: undefined,
		},
		/** @description 响应式，小型桌面配置 */
		lg: {
			type: definePropType<FaLayoutGridItemResponsive>(Object),
			default: undefined,
		},
		/** @description 响应式，大型桌面配置 */
		xl: {
			type: definePropType<FaLayoutGridItemResponsive>(Object),
			default: undefined,
		},
	},
	slots: makeSlots<FaLayoutGridItemSlots>(),
	setup(props, { attrs, slots, expose }) {
		const state = reactive({
			show: true,
		});

		const attrsObj = attrs as Record<string, unknown>;

		// 注入断点
		const breakPoint = inject<Ref<FaLayoutGridBreakPoint>>("breakPoint", ref("xl"));
		const shouldHiddenIndex = inject<Ref<number>>("shouldHiddenIndex", ref(-1));

		watch(
			() => [shouldHiddenIndex.value, breakPoint.value],
			(n) => {
				const index = Number(attrsObj["data-index"] ?? attrsObj["index"]);
				if (Number.isInteger(index)) {
					state.show = !(n[0] !== -1 && index >= Number(n[0]));
				}
			},
			{ immediate: true }
		);

		const gap = inject("gap", 0);
		const cols = inject<Ref<number>>("cols", ref(5));

		const style = computed(() => {
			const breakPointObk = props[breakPoint.value];
			const span = breakPointObk?.span ?? (isNumber(props.span) ? props.span : Number(props.span));
			const offset = breakPointObk?.offset ?? (isNumber(props.offset) ? props.offset : Number(props.offset));
			if (props.suffix) {
				return {
					gridColumnStart: cols.value - span - offset + 1,
					gridColumnEnd: `span ${span + offset}`,
					marginLeft: offset !== 0 ? `calc(((100% + ${gap}px) / ${span + offset}) * ${offset})` : "unset",
				};
			} else {
				return {
					gridColumn: `span ${span + offset > cols.value ? cols.value : span + offset}/span ${
						span + offset > cols.value ? cols.value : span + offset
					}`,
					marginLeft: offset !== 0 ? `calc(((100% + ${gap}px) / ${span + offset}) * ${offset})` : "unset",
				};
			}
		});

		useRender(() => (
			<div style={style.value} vShow={state.show}>
				{slots.default?.()}
			</div>
		));

		return useExpose(expose, {
			show: state.show,
		});
	},
});
