import { RegExps } from "@fast-element-plus/constants";
import { Local, stringUtil } from "@fast-element-plus/utils";

/**
 * 设备Id Key
 */
export const DEVICE_ID_KEY = "__DEVICE_ID";

/**
 * 生成设备唯一标识（不安全）
 * @description 如果存在，则返回已经生成的唯一标识
 */
export const makeIdentity = (deviceId?: string): string => {
	if (deviceId && RegExps.UUID.test(deviceId)) {
		Local.set(DEVICE_ID_KEY, deviceId);
		window.deviceId = deviceId;
		return deviceId;
	}
	// 生成浏览器唯一 UUID
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
