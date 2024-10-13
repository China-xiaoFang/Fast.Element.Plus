import type { ExtractPropTypes } from "vue";
import type { default as UploadImages } from "./src/uploadImages";
import type { faUploadImagesEmits, faUploadImagesProps } from "./src/uploadImages";
import type { TSXWithInstall } from "../../utils";

export declare const FaUploadImages: TSXWithInstall<typeof UploadImages>;
export default FaUploadImages;

export { faUploadImagesProps, faUploadImagesEmits };

export type FaUploadImagesInstance = InstanceType<typeof UploadImages>;

export type FaUploadImagesProps = ExtractPropTypes<typeof faUploadImagesProps>;

export type FaUploadImagesEmits = typeof faUploadImagesEmits;
