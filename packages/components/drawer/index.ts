import type { ExtractPropTypes } from "vue";
import { withInstall } from "@fast-element-plus/utils";
import type { faDrawerEmits, faDrawerProps } from "./src/drawer";
import Drawer from "./src/drawer";

export const FaDrawer = withInstall(Drawer);
export default FaDrawer;

export { faDrawerProps, faDrawerEmits };

export type FaDrawerInstance = InstanceType<typeof Drawer>;

export type FaDrawerProps = ExtractPropTypes<typeof faDrawerProps>;

export type FaDrawerEmits = typeof faDrawerEmits;
