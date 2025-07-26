import { ExtractPropTypes } from "vue";
import { TSXWithInstall } from "@fast-china/utils";
import { default as Tree, faTreeEmits, faTreeProps } from "./src/tree";

export declare const FaTree: TSXWithInstall<typeof Tree>;
export default FaTree;

export { faTreeProps, faTreeEmits };
export * from "./src/tree.type";

export type FaTreeInstance = InstanceType<typeof Tree>;

export type FaTreeProps = ExtractPropTypes<typeof faTreeProps>;

export type FaTreeEmits = typeof faTreeEmits;
