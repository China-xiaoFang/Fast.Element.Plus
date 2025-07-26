import { withInstall } from "@fast-china/utils";
import Image, { faImageProps } from "./src/image";
import type { ExtractPropTypes } from "vue";

export const FaImage = withInstall(Image);
export default FaImage;

export { faImageProps };

export type FaImageInstance = InstanceType<typeof Image>;

export type FaImageProps = ExtractPropTypes<typeof faImageProps>;
