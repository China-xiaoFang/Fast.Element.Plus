import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import Button, { faButtonEmits, faButtonProps } from "./src/button";

export const FaButton = withInstall(Button);
export default Button;

export { faButtonProps, faButtonEmits };

export type FaButtonInstance = InstanceType<typeof Button>;

export type FaButtonProps = ExtractPropTypes<typeof faButtonProps>;

export type FaButtonEmits = typeof faButtonEmits;
