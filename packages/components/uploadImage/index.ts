import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import UploadImage, { faUploadImageEmits, faUploadImageProps } from "./src/uploadImage";

export const FaUploadImage = withInstall(UploadImage);
export default FaUploadImage;

export { faUploadImageProps, faUploadImageEmits };

export type FaUploadImageInstance = InstanceType<typeof UploadImage>;

export type FaUploadImageProps = ExtractPropTypes<typeof faUploadImageProps>;

export type FaUploadImageEmits = typeof faUploadImageEmits;
