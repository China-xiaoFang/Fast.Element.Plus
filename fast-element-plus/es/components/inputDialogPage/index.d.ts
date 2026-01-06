import { TSXWithInstall } from "@fast-china/utils";
import type { default as InputDialogPage, faInputDialogPageEmits, faInputDialogPageProps } from "./src/inputDialogPage";
import type { ExtractPropTypes } from "vue";

export declare const FaInputDialogPage: TSXWithInstall<typeof InputDialogPage>;
export default FaInputDialogPage;

export { faInputDialogPageProps, faInputDialogPageEmits };

export type FaInputDialogPageInstance = InstanceType<typeof InputDialogPage>;

export type FaInputDialogPageProps = ExtractPropTypes<typeof faInputDialogPageProps>;

export type FaInputDialogPageEmits = typeof faInputDialogPageEmits;
