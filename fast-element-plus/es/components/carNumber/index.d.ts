import { TSXWithInstall } from "@fast-china/utils";
import { default as CarNumber } from "./src/carNumber";

export declare const FaCarNumber: TSXWithInstall<typeof CarNumber>;
export default CarNumber;

export * from "./src/common";

export declare type FaCarNumberInstance = InstanceType<typeof CarNumber>;
