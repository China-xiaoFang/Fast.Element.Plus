import type { ExtractPropTypes } from "vue";
import type { default as Image } from "./src/image";
import type { faImageProps } from "./src/image";
import type { TSXWithInstall } from "../../utils";

export declare const FaImage: TSXWithInstall<typeof Image>;
export default FaImage;

export { faImageProps };

export type FaImageInstance = InstanceType<typeof Image>;

export type FaImageProps = ExtractPropTypes<typeof faImageProps>;
