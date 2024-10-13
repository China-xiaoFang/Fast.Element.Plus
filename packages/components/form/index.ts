import type { ExtractPropTypes } from "vue";
import { withInstall, withNoopInstall } from "@fast-element-plus/utils";
import Form, { faFormProps } from "./src/form";
import FormItem, { faFormItemProps } from "./src/formItem";

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
