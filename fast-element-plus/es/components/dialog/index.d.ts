import type { ExtractPropTypes } from "vue";
import type { default as Dialog } from "./src/dialog";
import type { faDialogEmits, faDialogProps } from "./src/dialog";
import type { TSXWithInstall } from "../../utils";

export declare const FaDialog: TSXWithInstall<typeof Dialog>;
export default FaDialog;

export { faDialogProps, faDialogEmits };

export type FaDialogInstance = InstanceType<typeof Dialog>;

export type FaDialogProps = ExtractPropTypes<typeof faDialogProps>;

export type FaDialogEmits = typeof faDialogEmits;
