import "./index.mjs";
import { AES, enc, mode } from "crypto-js";
import { consoleError } from "./console.mjs";
const cryptoUtil = {
  /**
   * AES
   */
  aes: {
    /**
     * AES加密
     * @param dataStr 要加密的字符串
     * @param key 用于加密的密钥
     * @param vector 用于加密的向量（IV）
     * @param cipherMode 加密模式，默认为CBC模式
     */
    encrypt(dataStr, key, vector, cipherMode = mode.CBC) {
      if (!dataStr) {
        return dataStr;
      }
      if (key.length < 32) {
        key = key.padEnd(32, "f");
      }
      if (key.length > 32) {
        key = key.substring(0, 32);
      }
      if (vector.length < 16) {
        vector = vector.padEnd(16, "f");
      }
      if (vector.length > 16) {
        vector = vector.substring(0, 16);
      }
      return AES.encrypt(dataStr, enc.Utf8.parse(key), {
        iv: enc.Utf8.parse(vector),
        mode: cipherMode
      }).toString();
    },
    /**
     * AES解密
     * @param dataStr 要解密的Base64编码字符串
     * @param key 用于解密的密钥
     * @param vector 用于解密的向量（IV）
     * @param cipherMode 解密模式，默认为CBC模式
     */
    decrypt(dataStr, key, vector, cipherMode = mode.CBC) {
      if (!dataStr) {
        return null;
      }
      if (key.length < 32) {
        key = key.padEnd(32, "f");
      }
      if (key.length > 32) {
        key = key.substring(0, 32);
      }
      if (vector.length < 16) {
        vector = vector.padEnd(16, "f");
      }
      if (vector.length > 16) {
        vector = vector.substring(0, 16);
      }
      const resAESData = AES.decrypt(dataStr, enc.Utf8.parse(key), {
        iv: enc.Utf8.parse(vector),
        mode: cipherMode
      });
      try {
        const result = resAESData.toString(enc.Utf8);
        return JSON.parse(result);
      } catch (error) {
        consoleError("AESCrypto", error);
        return null;
      }
    }
  }
};
export {
  cryptoUtil
};
//# sourceMappingURL=crypto.mjs.map
