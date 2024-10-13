import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import FormItemTip, { faFormItemTipProps } from "./src/formItemTip";

export const FaFormItemTip = withInstall(FormItemTip);
export default FaFormItemTip;

export { faFormItemTipProps };

export type FaFormItemTipInstance = InstanceType<typeof FormItemTip>;

export type FaFormItemTipProps = ExtractPropTypes<typeof faFormItemTipProps>;
