import { Fragment, computed, defineComponent, inject, reactive, ref, watch } from "vue";
import { ElButton, ElInput, ElMessage, ElPopover, formContextKey, formItemContextKey, inputProps } from "element-plus";
import { Back } from "@element-plus/icons-vue";
import { RegExps } from "@fast-element-plus/constants";
import { useProps, useRender, withDefineType } from "@fast-china/utils";
import { isNull, isString } from "lodash-unified";
import { CarNumberArea, CarNumberDigit, CarNumberLetter } from "./common";
import type { PopoverInstance } from "element-plus";

export default defineComponent({
	name: "FaCarNumber",
	props: {
		...inputProps,
		/** @description placeholder */
		placeholder: {
			type: String,
			default: "请选择",
		},
	},
	emits: {
		/** @description v-model 回调 */
		"update:modelValue": (value: string) => isString(value) || isNull(value),
		/** @description 改变 */
		change: (value: string) => isString(value) || isNull(value),
	},
	setup(props, { attrs, emit }) {
		const state = reactive({
			value: withDefineType<string>(),
			switchLetter: computed(() => {
				if (state.value?.length >= 1) {
					return true;
				}
				return false;
			}),
			disabledButton: computed(() => {
				if (state.value?.length >= 8) {
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
			state.value ??= "";
			state.value += value;
		};

		const handleBackClick = (): void => {
			if (state.value?.length === 0) return;
			state.value = state.value.substring(0, state.value.length - 1);
		};

		const handleConfirmClick = (): void => {
			let success = false;
			if (state.value.length === 7) {
				success = RegExps.CarNumber.test(state.value);
			} else if (state.value.length === 8) {
				success = RegExps.NewEnergyCarNumber.test(state.value);
			}
			if (success) {
				emit("update:modelValue", state.value);
				emit("change", state.value);
				// 调用 el-form 内部的校验方法（可自动校验）
				formItemContext?.prop && formContext?.validateField([formItemContext.prop]);
			} else {
				if (formItemContext?.prop && formContext) {
					emit("update:modelValue", state.value);
					emit("change", state.value);
					// 调用 el-form 内部的校验方法（可自动校验）
					formContext.validateField([formItemContext.prop]);
				} else {
					ElMessage.error("车牌号格式不正确");
				}
			}
			popoverRef.value?.hide();
		};

		const handleClearClick = (): void => {
			state.value = null;
			emit("update:modelValue", null);
			emit("change", null);
			// 调用 el-form 内部的校验方法（可自动校验）
			formItemContext?.prop && formContext?.validateField([formItemContext.prop]);
		};

		watch(
			() => props.modelValue,
			(newValue) => {
				state.value = newValue.toString();
			},
			{
				immediate: true,
			}
		);

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
							vModel={state.value}
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
								<ElButton
									class="fa-car-number__popover__btn__clear"
									disabled={state.value === null || state.value.length === 0}
									onClick={handleClearClick}
								>
									清除
								</ElButton>
								<ElButton
									class="fa-car-number__popover__btn__back"
									type="danger"
									icon={Back}
									disabled={state.value === null || state.value.length === 0}
									onClick={handleBackClick}
								/>
								<ElButton
									class="fa-car-number__popover__btn__confirm"
									type="primary"
									disabled={state.value === null || state.value.length < 7}
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
