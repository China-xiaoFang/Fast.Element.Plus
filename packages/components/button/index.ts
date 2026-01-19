import { withInstall } from "@fast-china/utils";
import Button, { faButtonEmits, faButtonProps } from "./src/button";
import type { ExtractPropTypes } from "vue";

export const FaButton = withInstall(Button);
export default FaButton;

export { faButtonProps, faButtonEmits };

export type FaButtonInstance = InstanceType<typeof Button>;

export type FaButtonProps = ExtractPropTypes<typeof faButtonProps>;

export type FaButtonEmits = typeof faButtonEmits;
