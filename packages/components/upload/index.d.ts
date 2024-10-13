import type { ExtractPropTypes } from "vue";
import type { default as Upload } from "./src/upload";
import { faUploadEmits, faUploadProps } from "./src/upload";
import type { TSXWithInstall } from "../../utils";

export declare const FaUpload: TSXWithInstall<typeof Upload>;
export default FaUpload;

export { faUploadProps, faUploadEmits };

export type FaUploadInstance = InstanceType<typeof Upload>;

export type FaUploadProps = ExtractPropTypes<typeof faUploadProps>;

export type FaUploadEmits = typeof faUploadEmits;
