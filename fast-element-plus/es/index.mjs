import { makeInstaller } from "./make-installer.mjs";
import { INSTALLED_KEY } from "./make-installer.mjs";
import * as index from "./components/index.mjs";
import "./constants/index.mjs";
import "./directives/index.mjs";
import "./hooks/index.mjs";
import { Decimal } from "decimal.js";
import { FaAvatar } from "./components/avatar/index.mjs";
import { FaButton } from "./components/button/index.mjs";
import { faButtonEmits, faButtonProps } from "./components/button/src/button.mjs";
import { CarNumberArea, CarNumberDigit, CarNumberLetter } from "./components/carNumber/src/common.mjs";
import { FaCarNumber } from "./components/carNumber/index.mjs";
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
import { FaSelect, FaSelectOption } from "./components/select/index.mjs";
import { SelectProps, faSelectProps } from "./components/select/src/select.mjs";
import { FaSelectPage } from "./components/selectPage/index.mjs";
import { faSelectPageEmits, faSelectPageProps } from "./components/selectPage/src/selectPage.mjs";
import { FaSelectV2 } from "./components/selectV2/index.mjs";
import { SelectV2Props, faSelectV2Props } from "./components/selectV2/src/selectV2.mjs";
import { PagedSearchTypeEnum } from "./components/table/src/page.type.mjs";
import { getTableDefaultSlots } from "./components/table/src/table.type.mjs";
import { tableUtil } from "./components/table/utils/table.mjs";
import { FaTable, FaTableColumn } from "./components/table/index.mjs";
import { tableProps } from "./components/table/src/table.mjs";
import { tableColumnProps } from "./components/table/src/tableColumn.mjs";
import { FaTree } from "./components/tree/index.mjs";
import { faTreeEmits, faTreeProps } from "./components/tree/src/tree.mjs";
import { FaTreeSelect } from "./components/treeSelect/index.mjs";
import { faTreeSelectEmits, faTreeSelectProps } from "./components/treeSelect/src/treeSelect.mjs";
import { FaUpload } from "./components/upload/index.mjs";
import { faUploadEmits, faUploadProps } from "./components/upload/src/upload.mjs";
import { FaUploadImage } from "./components/uploadImage/index.mjs";
import { faUploadImageEmits, faUploadImageProps } from "./components/uploadImage/src/uploadImage.mjs";
import { FaUploadImages } from "./components/uploadImages/index.mjs";
import { FaMimeType } from "./constants/mime.mjs";
import { RegExps } from "./constants/regex.mjs";
import { vCopy } from "./directives/click-copy/index.mjs";
import { vDebounce } from "./directives/click-debounce/index.mjs";
import { vDraggable } from "./directives/click-draggable/index.mjs";
import { vIconCopy } from "./directives/click-icon-copy/index.mjs";
import { vLongpress } from "./directives/click-longpress/index.mjs";
import { vThrottle } from "./directives/click-throttle/index.mjs";
import { useLoading } from "./hooks/use-loading/index.mjs";
import { useOverlay } from "./hooks/use-overlay/index.mjs";
import { useScreenFull } from "./hooks/use-screenFull/index.mjs";
const installer = makeInstaller();
const install = installer.install;
const version = installer.version;
export {
  CarNumberArea,
  CarNumberDigit,
  CarNumberLetter,
  Decimal,
  FaAvatar,
  FaButton,
  FaCarNumber,
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
  FaSelect,
  FaSelectOption,
  FaSelectPage,
  FaSelectV2,
  FaTable,
  FaTableColumn,
  FaTree,
  FaTreeSelect,
  FaUpload,
  FaUploadImage,
  FaUploadImages,
  index as FastElementPlus,
  INSTALLED_KEY,
  PagedSearchTypeEnum,
  RegExps,
  SelectProps,
  SelectV2Props,
  installer as default,
  faButtonEmits,
  faButtonProps,
  faDialogEmits,
  faDialogProps,
  faFormItemProps,
  faFormItemTipProps,
  faFormProps,
  faImageProps,
  faSelectPageEmits,
  faSelectPageProps,
  faSelectProps,
  faSelectV2Props,
  faTreeEmits,
  faTreeProps,
  faTreeSelectEmits,
  faTreeSelectProps,
  faUploadEmits,
  faUploadImageEmits,
  faUploadImageProps,
  faUploadProps,
  getTableDefaultSlots,
  install,
  tableColumnProps,
  tableProps,
  tableUtil,
  useLoading,
  useOverlay,
  useScreenFull,
  vCopy,
  vDebounce,
  vDraggable,
  vIconCopy,
  vLongpress,
  vThrottle,
  version
};
//# sourceMappingURL=index.mjs.map
