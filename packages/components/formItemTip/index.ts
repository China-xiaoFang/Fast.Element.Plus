import { withInstall } from "@fast-china/utils";
import FormItemTip, { faFormItemTipProps } from "./src/formItemTip";
import type { ExtractPropTypes } from "vue";

export const FaFormItemTip = withInstall(FormItemTip);
export default FaFormItemTip;

export { faFormItemTipProps };

export type FaFormItemTipInstance = InstanceType<typeof FormItemTip>;

export type FaFormItemTipProps = ExtractPropTypes<typeof faFormItemTipProps>;
