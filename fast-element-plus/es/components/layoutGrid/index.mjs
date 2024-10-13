import "../../utils/index.mjs";
import LayoutGrid from "./src/layoutGrid.mjs";
import LayoutGridItem from "./src/layoutGridItem.mjs";
import "./src/layoutGrid.type.mjs";
import { withInstall, withNoopInstall } from "../../utils/vue/install.mjs";
const FaLayoutGrid = withInstall(LayoutGrid, {
  LayoutGridItem
});
const FaLayoutGridItem = withNoopInstall(LayoutGridItem);
export {
  FaLayoutGrid,
  FaLayoutGridItem,
  FaLayoutGrid as default
};
//# sourceMappingURL=index.mjs.map
