import { withInstall } from "@fast-china/utils";
import SelectPage, { faSelectPageEmits, faSelectPageProps } from "./src/selectPage";
import type { ExtractPropTypes } from "vue";

export const FaSelectPage = withInstall(SelectPage);
export default FaSelectPage;

export { faSelectPageProps, faSelectPageEmits };

export type FaSelectPageInstance = InstanceType<typeof SelectPage>;

export type FaSelectPageProps = ExtractPropTypes<typeof faSelectPageProps>;

export type FaSelectPageEmits = typeof faSelectPageEmits;
