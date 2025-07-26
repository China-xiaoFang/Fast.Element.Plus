import { TSXWithInstall } from "@fast-china/utils";
import type { default as UploadImages, faUploadImagesEmits, faUploadImagesProps } from "./src/uploadImages";
import type { ExtractPropTypes } from "vue";

export declare const FaUploadImages: TSXWithInstall<typeof UploadImages>;
export default FaUploadImages;

export { faUploadImagesProps, faUploadImagesEmits };

export type FaUploadImagesInstance = InstanceType<typeof UploadImages>;

export type FaUploadImagesProps = ExtractPropTypes<typeof faUploadImagesProps>;

export type FaUploadImagesEmits = typeof faUploadImagesEmits;
