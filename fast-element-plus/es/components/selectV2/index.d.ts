import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as SelectV2, SelectV2Props, faSelectV2Emits, faSelectV2Props } from "./src/selectV2";

export declare const FaSelectV2: TSXWithInstall<typeof SelectV2>;
export default FaSelectV2;

export { SelectV2Props, faSelectV2Props };

export type FaSelectV2Instance = InstanceType<typeof SelectV2>;

export type FaSelectV2Props = ExtractPropTypes<typeof faSelectV2Props>;

export type FaSelectV2Emits = typeof faSelectV2Emits;
