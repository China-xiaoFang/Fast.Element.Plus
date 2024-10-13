import type { ExtractPropTypes } from "vue";
import type { default as Avatar } from "./src/avatar";
import { faAvatarEmits, faAvatarProps } from "./src/avatar";
import type { TSXWithInstall } from "../../utils";

export declare const FaAvatar: TSXWithInstall<typeof Avatar>;
export default FaAvatar;

export { faAvatarProps, faAvatarEmits };

export type FaAvatarInstance = InstanceType<typeof Avatar>;

export type FaAvatarProps = ExtractPropTypes<typeof faAvatarProps>;

export type FaAvatarEmits = typeof faAvatarEmits;
