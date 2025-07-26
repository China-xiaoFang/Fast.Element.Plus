import { withInstall } from "@fast-china/utils";
import CarNumber from "./src/carNumber";

export const FaCarNumber = withInstall(CarNumber);
export default CarNumber;

export * from "./src/common";

export type FaCarNumberInstance = InstanceType<typeof CarNumber>;
