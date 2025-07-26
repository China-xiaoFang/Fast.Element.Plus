import { TSXWithInstall } from "@fast-china/utils";
import type { default as LayoutGrid } from "./src/layoutGrid";
import type { default as LayoutGridItem } from "./src/layoutGridItem";

export declare const FaLayoutGrid: TSXWithInstall<typeof LayoutGrid> & {
	LayoutGridItem: typeof LayoutGridItem;
};
export default FaLayoutGrid;

export declare const FaLayoutGridItem: TSXWithInstall<typeof LayoutGridItem>;

export * from "./src/layoutGrid.type";

export type FaLayoutGridInstance = InstanceType<typeof LayoutGrid>;

export type FaLayoutGridItemInstance = InstanceType<typeof LayoutGridItem>;
