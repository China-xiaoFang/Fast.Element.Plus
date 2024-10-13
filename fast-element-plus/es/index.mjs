import { makeInstaller } from "./make-installer.mjs";
import { INSTALLED_KEY } from "./make-installer.mjs";
import * as index from "./components/index.mjs";
import "./constants/index.mjs";
import "./directives/index.mjs";
import "./hooks/index.mjs";
import { FastApp } from "./settings/index.mjs";
import "./utils/index.mjs";
import { FaAvatar } from "./components/avatar/index.mjs";
import { FaButton } from "./components/button/index.mjs";
import { faButtonEmits, faButtonProps } from "./components/button/src/button.mjs";
import { FaContextMenu } from "./components/contextMenu/index.mjs";
import { FaDialog } from "./components/dialog/index.mjs";
import { faDialogEmits, faDialogProps } from "./components/dialog/src/dialog.mjs";
import { FaDrawer } from "./components/drawer/index.mjs";
import { FaForm, FaFormItem } from "./components/form/index.mjs";
import { faFormProps } from "./components/form/src/form.mjs";
import { faFormItemProps } from "./components/form/src/formItem.mjs";
import { FaFormItemTip } from "./components/formItemTip/index.mjs";
import { faFormItemTipProps } from "./components/formItemTip/src/formItemTip.mjs";
import { FaIcon } from "./components/icon/index.mjs";
import { FaIconSelector } from "./components/iconSelector/index.mjs";
import { FaImage } from "./components/image/index.mjs";
import { faImageProps } from "./components/image/src/image.mjs";
import { FaLayoutGrid, FaLayoutGridItem } from "./components/layoutGrid/index.mjs";
import { FaUpload } from "./components/upload/index.mjs";
import { faUploadEmits, faUploadProps } from "./components/upload/src/upload.mjs";
import { FaUploadImage } from "./components/uploadImage/index.mjs";
import { faUploadImageEmits, faUploadImageProps } from "./components/uploadImage/src/uploadImage.mjs";
import { FaUploadImages } from "./components/uploadImages/index.mjs";
import { FaMimeType } from "./constants/mime.mjs";
import { RegExps } from "./constants/regex.mjs";
import { vCopy } from "./directives/clickCopy/index.mjs";
import { vDebounce } from "./directives/clickDebounce/index.mjs";
import { vDraggable } from "./directives/clickDraggable/index.mjs";
import { vIconCopy } from "./directives/clickIconCopy/index.mjs";
import { vLongpress } from "./directives/clickLongpress/index.mjs";
import { vThrottle } from "./directives/clickThrottle/index.mjs";
import { useLoading } from "./hooks/useLoading/index.mjs";
import { useOverlay } from "./hooks/useOverlay/index.mjs";
import { useScreenFull } from "./hooks/useScreenFull/index.mjs";
import { useExpose } from "./utils/vue/expose.mjs";
import { execFunction } from "./utils/vue/func.mjs";
import { withInstall, withInstallDirective, withNoopInstall } from "./utils/vue/install.mjs";
import { definePropType, useProps } from "./utils/vue/props.mjs";
import { makeSlots } from "./utils/vue/slots.mjs";
import { useRender } from "./utils/vue/useRender.mjs";
import { withDefineType } from "./utils/vue/with.mjs";
import { HTTP_CACHE_KEY, axiosUtil } from "./utils/axios.mjs";
import { base64Util } from "./utils/base64.mjs";
import { clickUtil } from "./utils/click.mjs";
import { colorUtil } from "./utils/color.mjs";
import { consoleDebug, consoleError, consoleLog, consoleWarn } from "./utils/console.mjs";
import { DEVICE_ID_KEY, makeIdentity } from "./utils/deviceId.mjs";
import { errorHandler } from "./utils/errorHandler.mjs";
import { formUtil } from "./utils/form.mjs";
import { CACHE_EXPIRE_SUFFIX, CACHE_PREFIX, Local, Session } from "./utils/storage.mjs";
import { stringUtil } from "./utils/string.mjs";
import { uploadUtil } from "./utils/upload.mjs";
const installer = makeInstaller();
const install = installer.install;
const version = installer.version;
export {
  CACHE_EXPIRE_SUFFIX,
  CACHE_PREFIX,
  DEVICE_ID_KEY,
  FaAvatar,
  FaButton,
  FaContextMenu,
  FaDialog,
  FaDrawer,
  FaForm,
  FaFormItem,
  FaFormItemTip,
  FaIcon,
  FaIconSelector,
  FaImage,
  FaLayoutGrid,
  FaLayoutGridItem,
  FaMimeType,
  FaUpload,
  FaUploadImage,
  FaUploadImages,
  FastApp,
  index as FastElementPlus,
  HTTP_CACHE_KEY,
  INSTALLED_KEY,
  Local,
  RegExps,
  Session,
  axiosUtil,
  base64Util,
  clickUtil,
  colorUtil,
  consoleDebug,
  consoleError,
  consoleLog,
  consoleWarn,
  installer as default,
  definePropType,
  errorHandler,
  execFunction,
  faButtonEmits,
  faButtonProps,
  faDialogEmits,
  faDialogProps,
  faFormItemProps,
  faFormItemTipProps,
  faFormProps,
  faImageProps,
  faUploadEmits,
  faUploadImageEmits,
  faUploadImageProps,
  faUploadProps,
  formUtil,
  install,
  makeIdentity,
  makeSlots,
  stringUtil,
  uploadUtil,
  useExpose,
  useLoading,
  useOverlay,
  useProps,
  useRender,
  useScreenFull,
  vCopy,
  vDebounce,
  vDraggable,
  vIconCopy,
  vLongpress,
  vThrottle,
  version,
  withDefineType,
  withInstall,
  withInstallDirective,
  withNoopInstall
};
//# sourceMappingURL=index.mjs.map
