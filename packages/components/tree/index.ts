import { withInstall } from "@fast-china/utils";
import Tree, { faTreeEmits, faTreeProps } from "./src/tree";
import type { ExtractPropTypes } from "vue";

export const FaTree = withInstall(Tree);
export default FaTree;

export { faTreeProps, faTreeEmits };
export * from "./src/tree.type";

export declare type FaTreeInstance = InstanceType<typeof Tree>;

export declare type FaTreeProps = ExtractPropTypes<typeof faTreeProps>;

export declare type FaTreeEmits = typeof faTreeEmits;
