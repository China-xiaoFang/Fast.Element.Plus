import { withInstall } from "@fast-china/utils";
import InputDialogPage, { faInputDialogPageEmits, faInputDialogPageProps } from "./src/inputDialogPage";
import type { ExtractPropTypes } from "vue";

export const FaInputDialogPage = withInstall(InputDialogPage);
export default FaInputDialogPage;

export { faInputDialogPageProps, faInputDialogPageEmits };

export type FaInputDialogPageInstance = InstanceType<typeof InputDialogPage>;

export type FaInputDialogPageProps = ExtractPropTypes<typeof faInputDialogPageProps>;

export type FaInputDialogPageEmits = typeof faInputDialogPageEmits;
