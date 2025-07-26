import { TSXWithInstall } from "@fast-china/utils";
import type { default as Icon, faIconProps } from "./src/icon";
import type { ExtractPropTypes } from "vue";

export declare const FaIcon: TSXWithInstall<typeof Icon>;
export default FaIcon;

export { faIconProps };

export type FaIconInstance = InstanceType<typeof Icon>;

export type FaIconProps = ExtractPropTypes<typeof faIconProps>;
