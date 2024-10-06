import { makeInstaller } from "./make-installer.mjs";
import { INSTALLED_KEY } from "./make-installer.mjs";
import * as index from "./components/index.mjs";
import "./constants/index.mjs";
import "./directives/index.mjs";
import "./hooks/index.mjs";
import { FastApp } from "./settings/index.mjs";
import "./utils/index.mjs";
import { FaIcon } from "./components/icon/index.mjs";
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
import { execAsyncFunction } from "./utils/vue/func.mjs";
import { withInstall, withInstallDirective, withNoopInstall } from "./utils/vue/install.mjs";
import { useProps } from "./utils/vue/props.mjs";
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
  FaIcon,
  FaMimeType,
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
  errorHandler,
  execAsyncFunction,
  formUtil,
  install,
  makeIdentity,
  makeSlots,
  stringUtil,
  uploadUtil,
  useLoading,
  useOverlay,
  useProps,
  useRender,
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
