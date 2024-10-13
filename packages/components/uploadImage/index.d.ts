import type { ExtractPropTypes } from "vue";
import type { default as UploadImage } from "./src/uploadImage";
import type { faUploadImageEmits, faUploadImageProps } from "./src/uploadImage";
import type { TSXWithInstall } from "../../utils";

export declare const FaUploadImage: TSXWithInstall<typeof UploadImage>;
export default FaUploadImage;

export { faUploadImageProps, faUploadImageEmits };

export type FaUploadImageInstance = InstanceType<typeof UploadImage>;

export type FaUploadImageProps = ExtractPropTypes<typeof faUploadImageProps>;

export type FaUploadImageEmits = typeof faUploadImageEmits;
