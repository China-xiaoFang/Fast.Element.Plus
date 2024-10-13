import { withInstall } from "@fast-element-plus/utils";
import ContextMenu from "./src/contextMenu";

export const FaContextMenu = withInstall(ContextMenu);
export default FaContextMenu;

export * from "./src/contextMenu.type";

export type FaContextMenuInstance = InstanceType<typeof ContextMenu>;
