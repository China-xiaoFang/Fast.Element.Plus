import type { ExtractPropTypes } from "vue";
import type { default as Icon, faIconProps } from "./src/icon";
import type { TSXWithInstall } from "../../utils";

export declare const FaIcon: TSXWithInstall<typeof Icon>;
export default FaIcon;

export type FaIconInstance = InstanceType<typeof Icon>;

export type FaIconProps = ExtractPropTypes<typeof faIconProps>;
