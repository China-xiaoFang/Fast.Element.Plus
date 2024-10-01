import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import type { faIconProps } from "./src/icon";
import Icon from "./src/icon";

export const FaIcon = withInstall(Icon);
export default FaIcon;

export type GIconInstance = InstanceType<typeof Icon>;

export type GIconProps = ExtractPropTypes<typeof faIconProps>;
