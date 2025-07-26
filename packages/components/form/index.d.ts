import { TSXWithInstall } from "@fast-china/utils";
import type { default as Form, faFormProps } from "./src/form";
import type { default as FormItem, faFormItemProps } from "./src/formItem";
import type { ExtractPropTypes } from "vue";

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
