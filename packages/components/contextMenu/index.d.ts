import type { default as ContextMenu } from "./src/contextMenu";
import type { TSXWithInstall } from "../../utils";

export declare const FaContextMenu: TSXWithInstall<typeof ContextMenu>;
export default FaContextMenu;

export * from "./src/contextMenu.type";

export type FaContextMenuInstance = InstanceType<typeof ContextMenu>;
