import "../../utils/index.mjs";
import Upload from "./src/upload.mjs";
import { faUploadEmits, faUploadProps } from "./src/upload.mjs";
import { withInstall } from "../../utils/vue/install.mjs";
const FaUpload = withInstall(Upload);
export {
  FaUpload,
  FaUpload as default,
  faUploadEmits,
  faUploadProps
};
//# sourceMappingURL=index.mjs.map
