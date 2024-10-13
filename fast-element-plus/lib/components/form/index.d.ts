import type { ExtractPropTypes } from "vue";
import type { faFormProps } from "./src/form";
import type { default as Form } from "./src/form";
import type { faFormItemProps } from "./src/formItem";
import type { default as FormItem } from "./src/formItem";
import type { TSXWithInstall } from "../../utils";

export declare const FaForm: TSXWithInstall<typeof Form> & {
	FormItem: typeof FormItem;
};
export default FaForm;

export declare const FaFormItem: TSXWithInstall<typeof FormItem>;

export { faFormProps, faFormItemProps };

export type FaFormInstance = InstanceType<typeof Form>;

export type FaFormProps = ExtractPropTypes<typeof faFormProps>;

export type FaFormItemInstance = InstanceType<typeof FormItem>;

export type FaFormItemProps = ExtractPropTypes<typeof faFormItemProps>;
