import { withInstall, withNoopInstall } from "@fast-china/utils";
import LayoutGrid from "./src/layoutGrid";
import LayoutGridItem from "./src/layoutGridItem";

export const FaLayoutGrid = withInstall(LayoutGrid, {
	LayoutGridItem,
});
export default FaLayoutGrid;

export const FaLayoutGridItem = withNoopInstall(LayoutGridItem);

export * from "./src/layoutGrid.type";

export type FaLayoutGridInstance = InstanceType<typeof LayoutGrid>;

export type FaLayoutGridItemInstance = InstanceType<typeof LayoutGridItem>;
