/**
 * 设备Id Key
 */
export declare const DEVICE_ID_KEY = "__DEVICE_ID";
/**
 * 生成设备唯一标识（不安全）
 * @description 如果存在，则返回已经生成的唯一标识
 */
export declare const makeIdentity: (deviceId?: string) => string;
