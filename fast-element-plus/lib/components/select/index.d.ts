import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as Select, SelectProps, faSelectEmits, faSelectProps } from "./src/select";
import { default as SelectOption } from "./src/selectOption";

export declare const FaSelect: TSXWithInstall<typeof Select> & {
	SelectOption: typeof SelectOption;
};
export default FaSelect;

export declare const FaSelectOption: TSXWithInstall<typeof SelectOption>;

export { SelectProps, faSelectProps };
export * from "./src/select.type";

export type FaSelectInstance = InstanceType<typeof Select>;

export type FaSelectProps = ExtractPropTypes<typeof faSelectProps>;

export type FaSelectEmits = typeof faSelectEmits;

export type FaSelectOptionInstance = InstanceType<typeof SelectOption>;
