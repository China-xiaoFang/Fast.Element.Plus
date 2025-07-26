import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as SelectPage, faSelectPageEmits, faSelectPageProps } from "./src/selectPage";

export declare const FaSelectPage: TSXWithInstall<typeof SelectPage>;
export default FaSelectPage;

export { faSelectPageProps, faSelectPageEmits };

export declare type FaSelectPageInstance = InstanceType<typeof SelectPage>;

export declare type FaSelectPageProps = ExtractPropTypes<typeof faSelectPageProps>;

export declare type FaSelectPageEmits = typeof faSelectPageEmits;
