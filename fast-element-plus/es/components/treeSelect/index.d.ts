import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as TreeSelect, faTreeSelectEmits, faTreeSelectProps } from "./src/treeSelect";

export declare const FaTreeSelect: TSXWithInstall<typeof TreeSelect>;
export default FaTreeSelect;

export { faTreeSelectProps, faTreeSelectEmits };

export declare type FaTreeSelectInstance = InstanceType<typeof TreeSelect>;

export declare type FaTreeSelectProps = ExtractPropTypes<typeof faTreeSelectProps>;

export declare type FaTreeSelectEmits = typeof faTreeSelectEmits;
