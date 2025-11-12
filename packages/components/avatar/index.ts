import { withInstall } from "@fast-china/utils";
import Avatar from "./src/avatar";
import type { faAvatarEmits, faAvatarProps } from "./src/avatar";
import type { ExtractPropTypes } from "vue";

export const FaAvatar = withInstall(Avatar);
export default FaAvatar;

export { faAvatarProps as faAvatarProps, faAvatarEmits as faAvatarEmits };

export type FaAvatarInstance = InstanceType<typeof Avatar>;

export type FaAvatarProps = ExtractPropTypes<typeof faAvatarProps>;

export type FaAvatarEmits = typeof faAvatarEmits;
