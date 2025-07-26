import { computed, defineComponent, reactive } from "vue";
import { ElIcon, ElInput, ElPopover, ElScrollbar } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ChromeFilled, RefreshRight } from "@element-plus/icons-vue";
import { FaIcon } from "@fast-element-plus/components/icon";
import FastElementPlusIconsVue from "@fast-element-plus/icons-vue";
import { definePropType, useExpose, useRender, withDefineType } from "@fast-china/utils";
import { isNull, isString } from "lodash-unified";

type IconType = "ele" | "fastEle" | "local";

export default defineComponent({
	name: "FaIconSelector",
	props: {
		/** @description v-model绑定值 */
		modelValue: String,
		/** @description 自定义图标 */
		customIcons: definePropType<string[]>(Array),
	},
	emits: {
		/** @description v-model 回调 */
		"update:modelValue": (value: string) => isString(value) || isNull(value),
		/** @description 改变 */
		change: (value: string) => isString(value) || isNull(value),
	},
	setup(props, { attrs, slots, emit, expose }) {
		const state = reactive({
			value: withDefineType<string>(),
			searchValue: withDefineType<string>(),
			iconType: withDefineType<IconType>("ele"),
			popoverVisible: false,
			iconNames: withDefineType<string[]>(Object.keys(ElementPlusIconsVue)),
			renderIconNames: computed((): string[] => {
				if (!state.searchValue) return state.iconNames;
				return state.iconNames.filter((f) => f.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1);
			}),
		});

		const handleTabClick = (iconType: IconType): void => {
			state.iconType = iconType;
			state.iconNames = [];
			switch (iconType) {
				case "ele":
					state.iconNames = Object.keys(ElementPlusIconsVue).map((m) => `el-icon-${m}`);
					break;
				case "fastEle":
					state.iconNames = Object.keys(FastElementPlusIconsVue).map((m) => `fa-icon-${m}`);
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

		useRender(() => (
			<ElPopover
				popperClass="fa-icon-selector-popover"
				visible={state.popoverVisible}
				width="auto"
				trigger="click"
				showArrow={false}
				showAfter={0}
				hideAfter={0}
			>
				{{
					reference: () => (
						<ElInput vModel={state.searchValue} placeholder="搜索图标">
							{{
								prepend: () => (
									<ElIcon>
										<ChromeFilled />
									</ElIcon>
								),
								append: () => (
									<ElIcon onClick={handleRefresh}>
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
									<span
										class={{ "is-active": state.iconType === "ele" }}
										title="Element Plus 图标"
										onClick={() => handleTabClick("ele")}
									>
										ele
									</span>
									<span
										class={{ "is-active": state.iconType === "fastEle" }}
										title="Fast Element Plus 图标"
										onClick={() => handleTabClick("fastEle")}
									>
										fastEle
									</span>
									<span
										class={{ "is-active": state.iconType === "local" }}
										title="本地图标"
										onClick={() => handleTabClick("local")}
									>
										local
									</span>
								</div>
							</div>
							<div class="fa-icon-selector-popover__box-body">
								<ElScrollbar>
									{state.renderIconNames.map((m) => (
										<div class="fa-icon-selector-popover__box-body__item" title={m} onClick={() => handleIconClick(m)}>
											<FaIcon name={m} />
										</div>
									))}
								</ElScrollbar>
							</div>
						</div>
					),
				}}
			</ElPopover>
		));

		return useExpose(expose, {
			iconType: state.iconType,
		});
	},
});
