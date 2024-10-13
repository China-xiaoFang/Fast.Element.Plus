import "../../utils/index.mjs";
import UploadImage from "./src/uploadImage.mjs";
import { faUploadImageEmits, faUploadImageProps } from "./src/uploadImage.mjs";
import { withInstall } from "../../utils/vue/install.mjs";
const FaUploadImage = withInstall(UploadImage);
export {
  FaUploadImage,
  FaUploadImage as default,
  faUploadImageEmits,
  faUploadImageProps
};
//# sourceMappingURL=index.mjs.map
