import { withInstall } from "@fast-china/utils";
import TreeSelect, { faTreeSelectEmits, faTreeSelectProps } from "./src/treeSelect";
import type { ExtractPropTypes } from "vue";

export const FaTreeSelect = withInstall(TreeSelect);
export default FaTreeSelect;

export { faTreeSelectProps, faTreeSelectEmits };

export type FaTreeSelectInstance = InstanceType<typeof TreeSelect>;

export type FaTreeSelectProps = ExtractPropTypes<typeof faTreeSelectProps>;

export type FaTreeSelectEmits = typeof faTreeSelectEmits;
