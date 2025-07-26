import { TSXWithInstall } from "@fast-china/utils";
import type { default as Drawer, faDrawerEmits, faDrawerProps } from "./src/drawer";
import type { ExtractPropTypes } from "vue";

export declare const FaDrawer: TSXWithInstall<typeof Drawer>;
export default FaDrawer;

export { faDrawerProps, faDrawerEmits };

export type FaDrawerInstance = InstanceType<typeof Drawer>;

export type FaDrawerProps = ExtractPropTypes<typeof faDrawerProps>;

export type FaDrawerEmits = typeof faDrawerEmits;
