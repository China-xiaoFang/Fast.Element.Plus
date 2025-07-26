import { withInstall, withNoopInstall } from "@fast-china/utils";
import Form, { faFormProps } from "./src/form";
import FormItem, { faFormItemProps } from "./src/formItem";
import type { ExtractPropTypes } from "vue";

export const FaForm = withInstall(Form, {
	FormItem,
});
export default FaForm;

export const FaFormItem = withNoopInstall(FormItem);

export { faFormProps, faFormItemProps };

export type FaFormInstance = InstanceType<typeof Form>;

export type FaFormProps = ExtractPropTypes<typeof faFormProps>;

export type FaFormItemInstance = InstanceType<typeof FormItem>;

export type FaFormItemProps = ExtractPropTypes<typeof faFormItemProps>;
