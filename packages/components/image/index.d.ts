import { TSXWithInstall } from "@fast-china/utils";
import type { default as Image, faImageProps } from "./src/image";
import type { ExtractPropTypes } from "vue";

export declare const FaImage: TSXWithInstall<typeof Image>;
export default FaImage;

export { faImageProps };

export type FaImageInstance = InstanceType<typeof Image>;

export type FaImageProps = ExtractPropTypes<typeof faImageProps>;
