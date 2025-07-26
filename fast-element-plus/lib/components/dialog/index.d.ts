import { TSXWithInstall } from "@fast-china/utils";
import type { default as Dialog, faDialogEmits, faDialogProps } from "./src/dialog";
import type { ExtractPropTypes } from "vue";

export declare const FaDialog: TSXWithInstall<typeof Dialog>;
export default FaDialog;

export { faDialogProps, faDialogEmits };

export type FaDialogInstance = InstanceType<typeof Dialog>;

export type FaDialogProps = ExtractPropTypes<typeof faDialogProps>;

export type FaDialogEmits = typeof faDialogEmits;
