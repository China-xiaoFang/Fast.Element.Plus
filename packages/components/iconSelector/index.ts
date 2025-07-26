import { withInstall } from "@fast-china/utils";
import IconSelector from "./src/iconSelector";

export const FaIconSelector = withInstall(IconSelector);
export default FaIconSelector;

export type FaIconSelectorInstance = InstanceType<typeof IconSelector>;
