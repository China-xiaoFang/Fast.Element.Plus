import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import UploadImages from "./src/uploadImages";
import type { faUploadImagesEmits, faUploadImagesProps } from "./src/uploadImages";

export const FaUploadImages = withInstall(UploadImages);
export default FaUploadImages;

export { faUploadImagesProps, faUploadImagesEmits };

export type FaUploadImagesInstance = InstanceType<typeof UploadImages>;

export type FaUploadImagesProps = ExtractPropTypes<typeof faUploadImagesProps>;

export type FaUploadImagesEmits = typeof faUploadImagesEmits;
