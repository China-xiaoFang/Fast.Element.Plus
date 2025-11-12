import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as Avatar, faAvatarEmits, faAvatarProps } from "./src/avatar";

export declare const FaAvatar: TSXWithInstall<typeof Avatar>;
export default FaAvatar;

export { faAvatarProps, faAvatarEmits };

export type FaAvatarInstance = InstanceType<typeof Avatar>;

export type FaAvatarProps = ExtractPropTypes<typeof faAvatarProps>;

export type FaAvatarEmits = typeof faAvatarEmits;
