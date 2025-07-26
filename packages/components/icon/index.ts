import { withInstall } from "@fast-china/utils";
import Icon from "./src/icon";
import type { faIconProps } from "./src/icon";
import type { ExtractPropTypes } from "vue";

export const FaIcon = withInstall(Icon);
export default FaIcon;

export { faIconProps };

export type FaIconInstance = InstanceType<typeof Icon>;

export type FaIconProps = ExtractPropTypes<typeof faIconProps>;
