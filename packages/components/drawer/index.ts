import { withInstall } from "@fast-china/utils";
import Drawer from "./src/drawer";
import type { faDrawerEmits, faDrawerProps } from "./src/drawer";
import type { ExtractPropTypes } from "vue";

export const FaDrawer = withInstall(Drawer);
export default FaDrawer;

export { faDrawerProps, faDrawerEmits };

export type FaDrawerInstance = InstanceType<typeof Drawer>;

export type FaDrawerProps = ExtractPropTypes<typeof faDrawerProps>;

export type FaDrawerEmits = typeof faDrawerEmits;
