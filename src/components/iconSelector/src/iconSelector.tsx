import { computed, defineComponent, reactive, watch } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ChromeFilled, RefreshRight } from "@element-plus/icons-vue";
import { ElIcon, ElInput, ElPopover, ElScrollbar } from "element-plus";
import * as FastElementPlusIconsVue from "@fast-element-plus/icons-vue";
import { isNull, isString } from "lodash-unified";
import { definePropType, useExpose, useRender, withDefineType } from "../../../utils";
import { FaIcon } from "../../icon";
import type { PropType } from "vue";

type IconType = "ele" | "fastEle" | "local";

export default defineComponent({
	name: "FaIconSelector",
	props: {
		/** @description v-model绑定值 */
		modelValue: String as PropType<string | null>,
		/** @description 自定义图标 */
		customIcons: {
			type: definePropType<string[]>(Array),
			default: (): string[] => [],
		},
	},
	emits: {
		/** @description v-model 回调 */
		"update:modelValue": (value: string | null) => isString(value) || isNull(value),
		/** @description 改变 */
		change: (value: string | null) => isString(value) || isNull(value),
	},
	setup(props, { emit, expose }) {
		const state = reactive({
			value: withDefineType<string | null>(props.modelValue ?? null),
			searchValue: withDefineType<string | null>(),
			iconType: withDefineType<IconType>("ele"),
			popoverVisible: false,
			iconNames: withDefineType<string[]>(Object.keys(ElementPlusIconsVue).map((name) => `el-icon-${name}`)),
			renderIconNames: computed((): string[] => {
				if (!state.searchValue) return state.iconNames;
				return state.iconNames.filter((f) => f.toLowerCase().includes(state.searchValue?.toLowerCase() ?? ""));
			}),
		});
		const popoverVisibleModel = computed({
			get: () => state.popoverVisible,
			set: (visible: boolean) => {
				state.popoverVisible = visible;
				if (!visible) state.searchValue = null;
			},
		});

		const handleTabClick = (iconType: IconType): void => {
			state.iconType = iconType;
			state.iconNames = [];
			switch (iconType) {
				case "ele":
					state.iconNames = Object.keys(ElementPlusIconsVue).map((name) => `el-icon-${name}`);
					break;
				case "fastEle":
					state.iconNames = Object.keys(FastElementPlusIconsVue).map((name) => `fa-icon-${name}`);
					break;
				case "local":
					state.iconNames = props.customIcons;
					break;
			}
		};

		const handleIconClick = (value: string): void => {
			state.popoverVisible = false;
			state.value = value;
			state.searchValue = "";
			emit("update:modelValue", value);
			emit("change", value);
		};

		const handleRefresh = (): void => {
			state.value = null;
			state.searchValue = null;
			emit("update:modelValue", null);
			emit("change", null);
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				state.value = newValue ?? null;
			}
		);

		watch(
			() => props.customIcons,
			() => {
				if (state.iconType === "local") state.iconNames = [...props.customIcons];
			},
			{ deep: true }
		);

		useRender(() => (
			<ElPopover
				popperClass="fa-icon-selector-popover"
				vModel:visible={popoverVisibleModel.value}
				width="auto"
				trigger="click"
				showArrow={false}
				showAfter={0}
				hideAfter={0}
			>
				{{
					reference: () => (
						<ElInput
							class="fa-icon-selector"
							modelValue={state.popoverVisible ? (state.searchValue ?? "") : (state.value ?? "")}
							placeholder={state.popoverVisible ? "搜索图标" : "请选择图标"}
							readonly={!state.popoverVisible}
							onInput={(value: string) => {
								if (state.popoverVisible) state.searchValue = value;
							}}
						>
							{{
								prepend: () => <ElIcon>{state.value ? <FaIcon name={state.value} /> : <ChromeFilled />}</ElIcon>,
								append: () => (
									<ElIcon
										onClick={(event: MouseEvent) => {
											event.stopPropagation();
											handleRefresh();
										}}
									>
										<RefreshRight />
									</ElIcon>
								),
							}}
						</ElInput>
					),
					default: () => (
						<div class="fa-icon-selector-popover__box">
							<div class="fa-icon-selector-popover__box-header">
								<div class="fa-icon-selector-popover__box-header__title">请选择图标</div>
								<div class="fa-icon-selector-popover__box-header__tab">
									<button
										type="button"
										class={{ "is-active": state.iconType === "ele" }}
										title="Element Plus 图标"
										onClick={() => handleTabClick("ele")}
									>
										ele
									</button>
									<button
										type="button"
										class={{ "is-active": state.iconType === "fastEle" }}
										title="Fast Element Plus 图标"
										onClick={() => handleTabClick("fastEle")}
									>
										fastEle
									</button>
									<button
										type="button"
										class={{ "is-active": state.iconType === "local" }}
										title="本地图标"
										onClick={() => handleTabClick("local")}
									>
										local
									</button>
								</div>
							</div>
							<div class="fa-icon-selector-popover__box-body">
								<ElScrollbar>
									{state.renderIconNames.map((m) => (
										<button
											type="button"
											key={m}
											class="fa-icon-selector-popover__box-body__item"
											title={m}
											onClick={() => handleIconClick(m)}
										>
											<FaIcon name={m} />
										</button>
									))}
								</ElScrollbar>
							</div>
						</div>
					),
				}}
			</ElPopover>
		));

		return useExpose(expose, {
			/** 当前图标来源。 */
			iconType: computed(() => state.iconType),
			/** 当前选中的图标名称。 */
			value: computed(() => state.value),
		});
	},
});
