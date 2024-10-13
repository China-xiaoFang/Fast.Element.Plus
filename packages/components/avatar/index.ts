import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import type { faAvatarEmits, faAvatarProps } from "./src/avatar";
import Avatar from "./src/avatar";

export const FaAvatar = withInstall(Avatar);
export default FaAvatar;

export { faAvatarProps as faAvatarProps, faAvatarEmits as faAvatarEmits };

export type FaAvatarInstance = InstanceType<typeof Avatar>;

export type FaAvatarProps = ExtractPropTypes<typeof faAvatarProps>;

export type FaAvatarEmits = typeof faAvatarEmits;
