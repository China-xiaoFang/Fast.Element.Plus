import { TSXWithInstall } from "@fast-china/utils";
import type { default as UploadImage, faUploadImageEmits, faUploadImageProps } from "./src/uploadImage";
import type { ExtractPropTypes } from "vue";

export declare const FaUploadImage: TSXWithInstall<typeof UploadImage>;
export default FaUploadImage;

export { faUploadImageProps, faUploadImageEmits };

export type FaUploadImageInstance = InstanceType<typeof UploadImage>;

export type FaUploadImageProps = ExtractPropTypes<typeof faUploadImageProps>;

export type FaUploadImageEmits = typeof faUploadImageEmits;
