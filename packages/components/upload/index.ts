import { withInstall } from "@fast-china/utils";
import Upload, { faUploadEmits, faUploadProps } from "./src/upload";
import type { ExtractPropTypes } from "vue";

export const FaUpload = withInstall(Upload);
export default FaUpload;

export { faUploadProps, faUploadEmits };

export type FaUploadInstance = InstanceType<typeof Upload>;

export type FaUploadProps = ExtractPropTypes<typeof faUploadProps>;

export type FaUploadEmits = typeof faUploadEmits;
