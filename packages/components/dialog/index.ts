import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import Dialog, { faDialogEmits, faDialogProps } from "./src/dialog";

export const FaDialog = withInstall(Dialog);
export default FaDialog;

export { faDialogProps, faDialogEmits };

export type FaDialogInstance = InstanceType<typeof Dialog>;

export type FaDialogProps = ExtractPropTypes<typeof faDialogProps>;

export type FaDialogEmits = typeof faDialogEmits;
