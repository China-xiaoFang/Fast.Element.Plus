import "../constants/index.mjs";
import "./index.mjs";
import { RegExps } from "../constants/regex.mjs";
import { Local } from "./storage.mjs";
import { stringUtil } from "./string.mjs";
const DEVICE_ID_KEY = "__DEVICE_ID";
const makeIdentity = (deviceId) => {
  if (deviceId && RegExps.UUID.test(deviceId)) {
    Local.set(DEVICE_ID_KEY, deviceId);
    window.deviceId = deviceId;
    return deviceId;
  }
  deviceId = Local.get(DEVICE_ID_KEY);
  if (deviceId && RegExps.UUID.test(deviceId)) {
    window.deviceId = deviceId;
    return deviceId;
  }
  deviceId = stringUtil.generateUUID();
  Local.set(DEVICE_ID_KEY, deviceId);
  window.deviceId = deviceId;
  return deviceId;
};
export {
  DEVICE_ID_KEY,
  makeIdentity
};
//# sourceMappingURL=deviceId.mjs.map
