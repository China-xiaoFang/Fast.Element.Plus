import { withInstall, withNoopInstall } from "@fast-china/utils";
import Select, { SelectProps, faSelectProps } from "./src/select";
import SelectOption from "./src/selectOption";
import type { faSelectEmits } from "./src/select";
import type { ExtractPropTypes } from "vue";

export const FaSelect = withInstall(Select, {
	SelectOption,
});
export default FaSelect;

export const FaSelectOption = withNoopInstall(SelectOption);

export { SelectProps, faSelectProps };
export * from "./src/select.type";

export type FaSelectInstance = InstanceType<typeof Select>;

export type FaSelectProps = ExtractPropTypes<typeof faSelectProps>;

export type FaSelectEmits = typeof faSelectEmits;

export type FaSelectOptionInstance = InstanceType<typeof SelectOption>;
