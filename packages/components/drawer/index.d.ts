import type { ExtractPropTypes } from "vue";
import type { default as Drawer } from "./src/drawer";
import type { faDrawerEmits, faDrawerProps } from "./src/drawer";
import type { TSXWithInstall } from "../../utils";

export declare const FaDrawer: TSXWithInstall<typeof Drawer>;
export default FaDrawer;

export { faDrawerProps, faDrawerEmits };

export type FaDrawerInstance = InstanceType<typeof Drawer>;

export type FaDrawerProps = ExtractPropTypes<typeof faDrawerProps>;

export type FaDrawerEmits = typeof faDrawerEmits;
