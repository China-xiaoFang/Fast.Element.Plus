import { useVModel } from "@vueuse/core";
import { Fragment, computed, defineComponent, inject, reactive, ref } from "vue";
import { Back } from "@element-plus/icons-vue";
import { ElButton, ElInput, ElMessage, ElPopover, formContextKey, formItemContextKey, inputProps } from "element-plus";
import { isNull, isString } from "lodash-unified";
import { RegExps } from "../../../constants";
import { definePropType, useProps, useRender } from "../../../utils";
import { CarNumberArea, CarNumberDigit, CarNumberLetter } from "./common";
import type { PopoverInstance } from "element-plus";

export default defineComponent({
	name: "FaCarNumber",
	props: {
		...inputProps,
		/** @description value conversion function */
		parser: {
			...inputProps.parser,
			type: definePropType<(value: string) => string>(Function),
		},
		/** @description v-model绑定值 */
		modelValue: {
			type: definePropType<string | null>(String),
			default: undefined,
		},
		/** @description placeholder */
		placeholder: {
			type: String,
			default: "请选择",
		},
	},
	emits: {
		/** @description v-model 回调 */
		"update:modelValue": (value: string | null) => isString(value) || isNull(value),
		/** @description 改变 */
		change: (value: string | null) => isString(value) || isNull(value),
	},
	setup(props, { emit }) {
		const modelValue = useVModel(props, "modelValue", emit, { passive: true });

		const state = reactive({
			switchLetter: computed(() => {
				if ((modelValue.value?.length ?? 0) >= 1) {
					return true;
				}
				return false;
			}),
			disabledButton: computed(() => {
				if ((modelValue.value?.length ?? 0) >= 8) {
					return true;
				}
				return false;
			}),
		});

		const popoverRef = ref<PopoverInstance>();
		// 获取 el-form 组件上下文
		const formContext = inject(formContextKey, undefined);
		// 获取 el-form-item 组件上下文
		const formItemContext = inject(formItemContextKey, undefined);

		const handleInputFormatter = (value: string): string => {
			if (value.length === 2) {
				return `${value} ● `;
			} else if (value.length > 2) {
				return `${value.slice(0, 2)} ● ${value.slice(2)}`;
			} else {
				return value;
			}
		};

		const handleSelectCarNumber = (value: string): void => {
			modelValue.value ??= "";
			modelValue.value += value;
		};

		const handleBackClick = (): void => {
			const value = modelValue.value ?? "";
			if (value.length === 0) return;
			modelValue.value = value.substring(0, value.length - 1);
		};

		const handleConfirmClick = (): void => {
			let success = false;
			const value = modelValue.value ?? "";
			if (value.length === 7) {
				success = RegExps.CarNumber.test(value);
			} else if (value.length === 8) {
				success = RegExps.NewEnergyCarNumber.test(value);
			}
			if (success) {
				emit("change", value);
				// 调用 el-form 内部的校验方法（可自动校验）
				if (formItemContext?.prop) void formContext?.validateField([formItemContext.prop]);
			} else {
				if (formItemContext?.prop && formContext) {
					emit("change", value);
					// 调用 el-form 内部的校验方法（可自动校验）
					void formContext.validateField([formItemContext.prop]);
				} else {
					ElMessage.error("车牌号格式不正确");
				}
			}
			popoverRef.value?.hide();
		};

		const handleClearClick = (): void => {
			modelValue.value = null;
			emit("change", null);
			// 调用 el-form 内部的校验方法（可自动校验）
			if (formItemContext?.prop) void formContext?.validateField([formItemContext.prop]);
		};

		const elInputProps = useProps(props, inputProps, ["modelValue", "readonly", "formatter"]);

		useRender(() => (
			<ElPopover
				ref={popoverRef}
				width="auto"
				popperClass="fa-car-number__popover"
				trigger="click"
				showArrow={false}
				showAfter={0}
				hideAfter={0}
			>
				{{
					reference: () => (
						<ElInput
							{...elInputProps.value}
							class="fa-car-number__input"
							vModel={modelValue.value}
							readonly
							formatter={handleInputFormatter}
						/>
					),
					default: () => (
						<Fragment>
							<div class={["fa-car-number__popover__area", state.switchLetter ? "fa-car-number__popover__hide" : ""]}>
								{CarNumberArea.map((area) => (
									<ElButton disabled={state.disabledButton} onClick={() => handleSelectCarNumber(area)}>
										{area}
									</ElButton>
								))}
							</div>
							<div class={["fa-car-number__popover__digit-letter", state.switchLetter ? "" : "fa-car-number__popover__hide"]}>
								{CarNumberDigit.map((digit) => (
									<ElButton disabled={state.disabledButton} onClick={() => handleSelectCarNumber(digit)}>
										{digit}
									</ElButton>
								))}
								{CarNumberLetter.map((letter) => (
									<ElButton disabled={state.disabledButton} onClick={() => handleSelectCarNumber(letter)}>
										{letter}
									</ElButton>
								))}
							</div>
							<div class="fa-car-number__popover__btn">
								<ElButton class="fa-car-number__popover__btn__clear" disabled={!modelValue.value} onClick={handleClearClick}>
									清除
								</ElButton>
								<ElButton
									class="fa-car-number__popover__btn__back"
									type="danger"
									icon={Back}
									disabled={!modelValue.value}
									onClick={handleBackClick}
								/>
								<ElButton
									class="fa-car-number__popover__btn__confirm"
									type="primary"
									disabled={!modelValue.value || modelValue.value.length < 7}
									onClick={handleConfirmClick}
								>
									确认
								</ElButton>
							</div>
						</Fragment>
					),
				}}
			</ElPopover>
		));
	},
});
