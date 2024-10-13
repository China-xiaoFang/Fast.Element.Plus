import type { ExtractPropTypes } from "vue";
import { default as Button } from "./src/button";
import type { faButtonEmits, faButtonProps } from "./src/button";
import type { TSXWithInstall } from "../../utils";

export declare const FaButton: TSXWithInstall<typeof Button>;
export default Button;

export { faButtonProps, faButtonEmits };

export type FaButtonInstance = InstanceType<typeof Button>;

export type FaButtonProps = ExtractPropTypes<typeof faButtonProps>;

export type FaButtonEmits = typeof faButtonEmits;
