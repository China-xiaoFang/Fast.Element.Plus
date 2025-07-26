import { withInstall } from "@fast-china/utils";
import Dialog, { faDialogEmits, faDialogProps } from "./src/dialog";
import type { ExtractPropTypes } from "vue";

export const FaDialog = withInstall(Dialog);
export default FaDialog;

export { faDialogProps, faDialogEmits };

export type FaDialogInstance = InstanceType<typeof Dialog>;

export type FaDialogProps = ExtractPropTypes<typeof faDialogProps>;

export type FaDialogEmits = typeof faDialogEmits;
