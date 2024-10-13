import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import Image, { faImageProps } from "./src/image";

export const FaImage = withInstall(Image);
export default FaImage;

export { faImageProps };

export type FaImageInstance = InstanceType<typeof Image>;

export type FaImageProps = ExtractPropTypes<typeof faImageProps>;
