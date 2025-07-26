import { withInstall } from "@fast-china/utils";
import UploadImage, { faUploadImageEmits, faUploadImageProps } from "./src/uploadImage";
import type { ExtractPropTypes } from "vue";

export const FaUploadImage = withInstall(UploadImage);
export default FaUploadImage;

export { faUploadImageProps, faUploadImageEmits };

export type FaUploadImageInstance = InstanceType<typeof UploadImage>;

export type FaUploadImageProps = ExtractPropTypes<typeof faUploadImageProps>;

export type FaUploadImageEmits = typeof faUploadImageEmits;
