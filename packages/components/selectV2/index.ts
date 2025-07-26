import { withInstall } from "@fast-china/utils";
import SelectV2, { SelectV2Props, faSelectV2Props } from "./src/selectV2";
import type { faSelectV2Emits } from "./src/selectV2";
import type { ExtractPropTypes } from "vue";

export const FaSelectV2 = withInstall(SelectV2);
export default FaSelectV2;

export { SelectV2Props, faSelectV2Props };

export type FaSelectV2Instance = InstanceType<typeof SelectV2>;

export type FaSelectV2Props = ExtractPropTypes<typeof faSelectV2Props>;

export type FaSelectV2Emits = typeof faSelectV2Emits;
