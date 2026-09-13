# Crypto 密码学方法 API

本文逐项记录 `@fast-china/utils` 的 Crypto 密码学公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `GenerateRandomBytes`

生成随机字节。

### 签名

```ts
export function GenerateRandomBytes(length: number): Uint8Array;
```

### 示例

```ts
import { GenerateRandomBytes } from "@fast-china/utils";

const result = GenerateRandomBytes(16);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明               |
| -------- | ---------- | ----------- | ------------------------ |
| `length` | `number`   | 是          | 0 至 65,536 的安全整数。 |

### 返回

| 返回值   | 返回值类型   | 返回值说明            |
| -------- | ------------ | --------------------- |
| `result` | `Uint8Array` | 新建的 `Uint8Array`。 |

## `FixedTimeEquals`

以不提前退出的方式比较两个字节数组。

### 签名

```ts
export function FixedTimeEquals(left: Uint8Array, right: Uint8Array): boolean;
```

### 示例

```ts
import { FixedTimeEquals } from "@fast-china/utils";

const result = FixedTimeEquals(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3]));
```

### 输入

| 输入值  | 输入值类型   | 必填/默认值 | 输入值说明     |
| ------- | ------------ | ----------- | -------------- |
| `left`  | `Uint8Array` | 是          | 第一字节序列。 |
| `right` | `Uint8Array` | 是          | 第二字节序列。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                          |
| -------- | ---------- | ----------------------------------- |
| `result` | `boolean`  | 长度和每个字节均相同时返回 `true`。 |

## `MD5Encrypt`

计算 MD5 摘要并返回小写十六进制文本。

### 签名

```ts
export function MD5Encrypt(value: string): string;
```

### 示例

```ts
import { MD5Encrypt } from "@fast-china/utils";

const result = MD5Encrypt("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明   |
| ------- | ---------- | ----------- | ------------ |
| `value` | `string`   | 是          | UTF-8 文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                |
| -------- | ---------- | ------------------------- |
| `result` | `string`   | 32 字符小写十六进制摘要。 |

## `SHA1Encrypt`

计算 SHA-1 摘要并返回大写十六进制文本。

### 签名

```ts
export function SHA1Encrypt(value: string): string;
```

### 示例

```ts
import { SHA1Encrypt } from "@fast-china/utils";

const result = SHA1Encrypt("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明   |
| ------- | ---------- | ----------- | ------------ |
| `value` | `string`   | 是          | UTF-8 文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                |
| -------- | ---------- | ------------------------- |
| `result` | `string`   | 40 字符大写十六进制摘要。 |

## `SHA256Bytes`

计算 SHA-256 摘要。

### 签名

```ts
export async function SHA256Bytes(value: string): Promise<Uint8Array>;
```

### 示例

```ts
import { SHA256Bytes } from "@fast-china/utils";

const result = await SHA256Bytes("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明               |
| ------- | ---------- | ----------- | ------------------------ |
| `value` | `string`   | 是          | UTF-8 字符串或原始字节。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明    |
| -------- | --------------------- | ------------- |
| `result` | `Promise<Uint8Array>` | 32 字节摘要。 |

## `SHA256Encrypt`

计算 SHA-256 并格式化为十六进制。

### 签名

```ts
export async function SHA256Encrypt(value: string): Promise<string>;
```

### 示例

```ts
import { SHA256Encrypt } from "@fast-china/utils";

const result = await SHA256Encrypt("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明               |
| ------- | ---------- | ----------- | ------------------------ |
| `value` | `string`   | 是          | UTF-8 字符串或原始字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                |
| -------- | ----------------- | ------------------------- |
| `result` | `Promise<string>` | 64 字符大写十六进制文本。 |

## `SHA384Bytes`

计算 SHA-384 摘要。

### 签名

```ts
export async function SHA384Bytes(value: string): Promise<Uint8Array>;
```

### 示例

```ts
import { SHA384Bytes } from "@fast-china/utils";

const result = await SHA384Bytes("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明             |
| ------- | ---------- | ----------- | ---------------------- |
| `value` | `string`   | 是          | UTF-8 文本或原始字节。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明    |
| -------- | --------------------- | ------------- |
| `result` | `Promise<Uint8Array>` | 48 字节摘要。 |

## `SHA384Encrypt`

计算 SHA-384 并格式化为十六进制文本。

### 签名

```ts
export async function SHA384Encrypt(value: string): Promise<string>;
```

### 示例

```ts
import { SHA384Encrypt } from "@fast-china/utils";

const result = await SHA384Encrypt("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明             |
| ------- | ---------- | ----------- | ---------------------- |
| `value` | `string`   | 是          | UTF-8 文本或原始字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                        |
| -------- | ----------------- | --------------------------------- |
| `result` | `Promise<string>` | 96 个大写十六进制字符组成的摘要。 |

## `SHA512Bytes`

计算 SHA-512 摘要。

### 签名

```ts
export async function SHA512Bytes(value: string): Promise<Uint8Array>;
```

### 示例

```ts
import { SHA512Bytes } from "@fast-china/utils";

const result = await SHA512Bytes("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明             |
| ------- | ---------- | ----------- | ---------------------- |
| `value` | `string`   | 是          | UTF-8 文本或原始字节。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明    |
| -------- | --------------------- | ------------- |
| `result` | `Promise<Uint8Array>` | 64 字节摘要。 |

## `SHA512Encrypt`

计算 SHA-512 并格式化为十六进制文本。

### 签名

```ts
export async function SHA512Encrypt(value: string): Promise<string>;
```

### 示例

```ts
import { SHA512Encrypt } from "@fast-china/utils";

const result = await SHA512Encrypt("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明             |
| ------- | ---------- | ----------- | ---------------------- |
| `value` | `string`   | 是          | UTF-8 文本或原始字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                         |
| -------- | ----------------- | ---------------------------------- |
| `result` | `Promise<string>` | 128 个大写十六进制字符组成的摘要。 |

## `HMACSHA256Encrypt`

使用 HMAC-SHA-256 认证文本，并返回十六进制标签。

### 签名

```ts
export async function HMACSHA256Encrypt(value: string, key: string): Promise<string>;
```

### 示例

```ts
import { HMACSHA256Encrypt } from "@fast-china/utils";

const result = await HMACSHA256Encrypt("Fast 文档", "secret-key");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                            |
| ------- | ---------- | ----------- | ------------------------------------- |
| `value` | `string`   | 是          | 要认证的 UTF-8 文本或原始字节。       |
| `key`   | `string`   | 是          | 非空的 UTF-8 文本密钥或原始密钥字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                            |
| -------- | ----------------- | ------------------------------------- |
| `result` | `Promise<string>` | 64 个小写十六进制字符组成的认证标签。 |

## `HMACSHA384Encrypt`

使用 HMAC-SHA-384 认证文本或字节，并返回十六进制标签。

### 签名

```ts
export async function HMACSHA384Encrypt(value: string, key: string): Promise<string>;
```

### 示例

```ts
import { HMACSHA384Encrypt } from "@fast-china/utils";

const result = await HMACSHA384Encrypt("Fast 文档", "secret-key");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                            |
| ------- | ---------- | ----------- | ------------------------------------- |
| `value` | `string`   | 是          | 要认证的 UTF-8 文本或原始字节。       |
| `key`   | `string`   | 是          | 非空的 UTF-8 文本密钥或原始密钥字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                            |
| -------- | ----------------- | ------------------------------------- |
| `result` | `Promise<string>` | 96 个小写十六进制字符组成的认证标签。 |

## `HMACSHA512Encrypt`

使用 HMAC-SHA-512 认证文本或字节，并返回十六进制标签。

### 签名

```ts
export async function HMACSHA512Encrypt(value: string, key: string): Promise<string>;
```

### 示例

```ts
import { HMACSHA512Encrypt } from "@fast-china/utils";

const result = await HMACSHA512Encrypt("Fast 文档", "secret-key");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                            |
| ------- | ---------- | ----------- | ------------------------------------- |
| `value` | `string`   | 是          | 要认证的 UTF-8 文本或原始字节。       |
| `key`   | `string`   | 是          | 非空的 UTF-8 文本密钥或原始密钥字节。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                             |
| -------- | ----------------- | -------------------------------------- |
| `result` | `Promise<string>` | 128 个小写十六进制字符组成的认证标签。 |

## `PBKDF2SHA256`

使用 PBKDF2-HMAC-SHA-256 从密码派生密钥。

### 签名

```ts
export async function PBKDF2SHA256(password: string, salt: Uint8Array, iterations = defaultPbkdf2Iterations, outputLength = 32): Promise<Uint8Array>;
```

### 示例

```ts
import { PBKDF2SHA256 } from "@fast-china/utils";

const result = await PBKDF2SHA256("correct horse battery staple", new Uint8Array([1, 2, 3, 4]));
```

### 输入

| 输入值         | 输入值类型   | 必填/默认值                        | 输入值说明                              |
| -------------- | ------------ | ---------------------------------- | --------------------------------------- |
| `password`     | `string`     | 是                                 | 1 至 1,024 UTF-8 字节的密码。           |
| `salt`         | `Uint8Array` | 是                                 | 至少 8 字节的盐。                       |
| `iterations`   | `unknown`    | 否，默认 `defaultPbkdf2Iterations` | 迭代次数，范围为 100,000 至 5,000,000。 |
| `outputLength` | `unknown`    | 否，默认 `32`                      | 输出长度，范围为 1 至 1,024 字节。      |

### 返回

| 返回值   | 返回值类型            | 返回值说明           |
| -------- | --------------------- | -------------------- |
| `result` | `Promise<Uint8Array>` | 指定长度的派生密钥。 |

## `HashPasswordPBKDF2SHA256`

生成可持久化的随机盐 PBKDF2-HMAC-SHA-256 密码哈希。

### 签名

```ts
export async function HashPasswordPBKDF2SHA256(password: string, iterations = defaultPbkdf2Iterations): Promise<string>;
```

### 示例

```ts
import { HashPasswordPBKDF2SHA256 } from "@fast-china/utils";

const result = await HashPasswordPBKDF2SHA256("correct horse battery staple");
```

### 输入

| 输入值       | 输入值类型 | 必填/默认值                        | 输入值说明                              |
| ------------ | ---------- | ---------------------------------- | --------------------------------------- |
| `password`   | `string`   | 是                                 | 1 至 1,024 UTF-8 字节的密码。           |
| `iterations` | `unknown`  | 否，默认 `defaultPbkdf2Iterations` | 迭代次数，范围为 100,000 至 5,000,000。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                                                          |
| -------- | ----------------- | ------------------------------------------------------------------- |
| `result` | `Promise<string>` | 包含版本、迭代次数、16 字节随机盐和 32 字节派生密钥的自描述字符串。 |

## `VerifyPasswordPBKDF2SHA256`

验证 生成的密码哈希。

### 签名

```ts
export async function VerifyPasswordPBKDF2SHA256(password: string, passwordHash: string): Promise<boolean>;
```

### 示例

```ts
import { VerifyPasswordPBKDF2SHA256 } from "@fast-china/utils";

const storedHash = await HashPasswordPBKDF2SHA256("correct horse battery staple");
const result = await VerifyPasswordPBKDF2SHA256("correct horse battery staple", storedHash);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值 | 输入值说明                              |
| -------------- | ---------- | ----------- | --------------------------------------- |
| `password`     | `string`   | 是          | 要验证的密码。                          |
| `passwordHash` | `string`   | 是          | 自描述的 PBKDF2-HMAC-SHA-256 密码哈希。 |

### 返回

| 返回值   | 返回值类型         | 返回值说明                                                          |
| -------- | ------------------ | ------------------------------------------------------------------- |
| `result` | `Promise<boolean>` | 格式有效且密码匹配时返回 `true`；格式无效或密码错误时返回 `false`。 |

## `HKDFSHA256`

使用 RFC 5869 HKDF-SHA-256 派生上下文隔离的密钥材料。

### 签名

```ts
export async function HKDFSHA256(
	inputKeyMaterial: Uint8Array,
	salt: Uint8Array = new Uint8Array(),
	info: Uint8Array = new Uint8Array(),
	outputLength = 32
): Promise<Uint8Array>;
```

### 示例

```ts
import { HKDFSHA256 } from "@fast-china/utils";

const result = await HKDFSHA256(new Uint8Array([1, 2, 3]), new Uint8Array(), new Uint8Array(), 32);
```

### 输入

| 输入值             | 输入值类型   | 必填/默认值                 | 输入值说明                               |
| ------------------ | ------------ | --------------------------- | ---------------------------------------- |
| `inputKeyMaterial` | `Uint8Array` | 是                          | 输入密钥材料，例如 ECDH 原始共享秘密。   |
| `salt`             | `Uint8Array` | 否，默认 `new Uint8Array()` | 可选盐；空值按 RFC 5869 的零盐语义处理。 |
| `info`             | `Uint8Array` | 否，默认 `new Uint8Array()` | 应用、协议和密钥用途上下文。             |
| `outputLength`     | `unknown`    | 否，默认 `32`               | 输出长度，范围为 1 至 8,160 字节。       |

### 返回

| 返回值   | 返回值类型            | 返回值说明                           |
| -------- | --------------------- | ------------------------------------ |
| `result` | `Promise<Uint8Array>` | 与 `salt` 和 `info` 绑定的派生密钥。 |

## `AESEncrypt`

使用 AES-256 对 UTF-8 文本进行分组加密。

### 签名

```ts
export function AESEncrypt(
	dataStr: string,
	key: string,
	vector: string,
	cipherMode: AesCipherMode = "CBC",
	paddingMode: AesPaddingMode = "PKCS7"
): string | null;
```

### 示例

```ts
import { AESEncrypt } from "@fast-china/utils";

const result = AESEncrypt("Fast", "0123456789abcdef0123456789abcdef", "0123456789abcdef");
```

### 输入

| 输入值        | 输入值类型       | 必填/默认值        | 输入值说明                                                         |
| ------------- | ---------------- | ------------------ | ------------------------------------------------------------------ |
| `dataStr`     | `string`         | 是                 | 要加密的 UTF-8 文本；空白文本返回 `null`。                         |
| `key`         | `string`         | 是                 | 非空白的密钥文本。                                                 |
| `vector`      | `string`         | 是                 | 非空白的初始化向量文本；ECB 模式仍要求传入该参数以对齐 .NET 签名。 |
| `cipherMode`  | `AesCipherMode`  | 否，默认 `"CBC"`   | AES 分组模式，默认 `CBC`。                                         |
| `paddingMode` | `AesPaddingMode` | 否，默认 `"PKCS7"` | AES 填充模式，默认 `PKCS7`。                                       |

### 返回

| 返回值   | 返回值类型       | 返回值说明                                         |
| -------- | ---------------- | -------------------------------------------------- |
| `result` | `string \| null` | Base64 密文；输入、密钥或 IV 为空白时返回 `null`。 |

## `AESDecrypt`

使用 AES-256 解密 Base64 分组密文。

### 签名

```ts
export function AESDecrypt(
	dataStr: string,
	key: string,
	vector: string,
	cipherMode: AesCipherMode = "CBC",
	paddingMode: AesPaddingMode = "PKCS7"
): DecodedText | null;
```

### 示例

```ts
import { AESDecrypt, AESEncrypt } from "@fast-china/utils";

const ciphertext = AESEncrypt("Fast", "0123456789abcdef0123456789abcdef", "0123456789abcdef");
const result = ciphertext === null ? null : AESDecrypt(ciphertext, "0123456789abcdef0123456789abcdef", "0123456789abcdef");
```

### 输入

| 输入值        | 输入值类型       | 必填/默认值        | 输入值说明                         |
| ------------- | ---------------- | ------------------ | ---------------------------------- |
| `dataStr`     | `string`         | 是                 | Base64 密文；空白文本返回 `null`。 |
| `key`         | `string`         | 是                 | 加密时使用的密钥文本。             |
| `vector`      | `string`         | 是                 | 加密时使用的初始化向量文本。       |
| `cipherMode`  | `AesCipherMode`  | 否，默认 `"CBC"`   | AES 分组模式，默认 `CBC`。         |
| `paddingMode` | `AesPaddingMode` | 否，默认 `"PKCS7"` | AES 填充模式，默认 `PKCS7`。       |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                                                                            |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| `result` | `DecodedText \| null` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 UTF-8 字符串；输入、密钥或 IV 为空白时返回 `null`。 |

## `AESEncryptAuthenticated`

使用 SHA-256 归一化文本密钥，再以 AES-256-GCM 认证加密 UTF-8 文本。

### 签名

```ts
export async function AESEncryptAuthenticated(plaintext: string, key: string): Promise<string>;
```

### 示例

```ts
import { AESEncryptAuthenticated } from "@fast-china/utils";

const result = await AESEncryptAuthenticated("Fast", "0123456789abcdef0123456789abcdef");
```

### 输入

| 输入值      | 输入值类型 | 必填/默认值 | 输入值说明                                                 |
| ----------- | ---------- | ----------- | ---------------------------------------------------------- |
| `plaintext` | `string`   | 是          | 要加密的 UTF-8 文本。                                      |
| `key`       | `string`   | 是          | 非空的 UTF-8 文本密钥；内部归一化为 32 字节 SHA-256 摘要。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                          |
| -------- | ----------------- | ----------------------------------- |
| `result` | `Promise<string>` | Base64 编码的 v1 AES-GCM 认证载荷。 |

## `AESDecryptAuthenticated`

解密并认证 .NET `AESEncryptAuthenticated` 或 生成的载荷。

### 签名

```ts
export async function AESDecryptAuthenticated(payload: string, key: string): Promise<DecodedText>;
```

### 示例

```ts
import { AESDecryptAuthenticated, AESEncryptAuthenticated } from "@fast-china/utils";

const storedPayload = await AESEncryptAuthenticated("Fast", "0123456789abcdef0123456789abcdef");
const result = await AESDecryptAuthenticated(storedPayload, "0123456789abcdef0123456789abcdef");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明                            |
| --------- | ---------- | ----------- | ------------------------------------- |
| `payload` | `string`   | 是          | Base64 编码的 v1 AES-GCM 二进制载荷。 |
| `key`     | `string`   | 是          | 加密时使用的非空 UTF-8 文本密钥。     |

### 返回

| 返回值   | 返回值类型             | 返回值说明                                                       |
| -------- | ---------------------- | ---------------------------------------------------------------- |
| `result` | `Promise<DecodedText>` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 UTF-8 字符串。 |

## `AESEncryptWithPassword`

使用 PBKDF2-HMAC-SHA-256 派生密钥，再以 AES-256-GCM 认证加密 UTF-8 文本。

### 签名

```ts
export async function AESEncryptWithPassword(plaintext: string, password: string, iterations = defaultPbkdf2Iterations): Promise<string>;
```

### 示例

```ts
import { AESEncryptWithPassword } from "@fast-china/utils";

const result = await AESEncryptWithPassword("Fast", "correct horse battery staple");
```

### 输入

| 输入值       | 输入值类型 | 必填/默认值                        | 输入值说明                                           |
| ------------ | ---------- | ---------------------------------- | ---------------------------------------------------- |
| `plaintext`  | `string`   | 是                                 | 原始文本，不进行 JSON 推断；UTF-8 编码后最大 8 MiB。 |
| `password`   | `string`   | 是                                 | 1 至 1024 UTF-8 字节的秘密口令。                     |
| `iterations` | `unknown`  | 否，默认 `defaultPbkdf2Iterations` | PBKDF2 工作因子，默认 600,000。                      |

### 返回

| 返回值   | 返回值类型        | 返回值说明                                 |
| -------- | ----------------- | ------------------------------------------ |
| `result` | `Promise<string>` | 认证密文字符串；相同输入每次产生不同结果。 |

## `AESDecryptWithPassword`

解密 生成的 v1 认证载荷。

### 签名

```ts
export async function AESDecryptWithPassword(payload: string, password: string): Promise<DecodedText>;
```

### 示例

```ts
import { AESDecryptWithPassword, AESEncryptWithPassword } from "@fast-china/utils";

const storedPayload = await AESEncryptWithPassword("Fast", "correct horse battery staple");
const result = await AESDecryptWithPassword(storedPayload, "correct horse battery staple");
```

### 输入

| 输入值     | 输入值类型 | 必填/默认值 | 输入值说明                             |
| ---------- | ---------- | ----------- | -------------------------------------- |
| `payload`  | `string`   | 是          | 未修改的 v1 载荷，最大约 16 MiB 文本。 |
| `password` | `string`   | 是          | 加密时使用的口令。                     |

### 返回

| 返回值   | 返回值类型             | 返回值说明                                                       |
| -------- | ---------------------- | ---------------------------------------------------------------- |
| `result` | `Promise<DecodedText>` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 UTF-8 字符串。 |

## `GenerateRSAKeyPair`

生成可供 RSA-OAEP/SHA-256 与 RSA-PSS/SHA-256 共用的 PEM 密钥对。

### 签名

```ts
export async function GenerateRSAKeyPair(modulusLength = 2048): Promise<PemKeyPair>;
```

### 示例

```ts
import { GenerateRSAKeyPair } from "@fast-china/utils";

const result = await GenerateRSAKeyPair(2048);
```

### 输入

| 输入值          | 输入值类型 | 必填/默认值     | 输入值说明                                                 |
| --------------- | ---------- | --------------- | ---------------------------------------------------------- |
| `modulusLength` | `unknown`  | 否，默认 `2048` | RSA 模数位数，默认 2,048；必须是不小于 2,048 的 256 倍数。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                                        |
| -------- | --------------------- | ----------------------------------------------------------------- |
| `result` | `Promise<PemKeyPair>` | 未加密 PKCS#8 私钥和 SubjectPublicKeyInfo 公钥组成的 PEM 密钥对。 |

## `RSAEncryptOAEP`

使用 RSA-OAEP/SHA-256 公钥加密 UTF-8 文本。

### 签名

```ts
export async function RSAEncryptOAEP(plaintext: string, publicKeyPem: string): Promise<string>;
```

### 示例

```ts
import { GenerateRSAKeyPair, RSAEncryptOAEP } from "@fast-china/utils";

const { publicKey } = await GenerateRSAKeyPair();
const result = await RSAEncryptOAEP("Fast", publicKey);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值 | 输入值说明                                            |
| -------------- | ---------- | ----------- | ----------------------------------------------------- |
| `plaintext`    | `string`   | 是          | 要加密的 UTF-8 文本；长度必须满足 RSA-OAEP 模数限制。 |
| `publicKeyPem` | `string`   | 是          | SubjectPublicKeyInfo PEM 公钥。                       |

### 返回

| 返回值   | 返回值类型        | 返回值说明               |
| -------- | ----------------- | ------------------------ |
| `result` | `Promise<string>` | Base64 编码的 RSA 密文。 |

## `RSADecryptOAEP`

使用 RSA-OAEP/SHA-256 私钥解密 Base64 密文。

### 签名

```ts
export async function RSADecryptOAEP(ciphertext: string, privateKeyPem: string): Promise<DecodedText>;
```

### 示例

```ts
import { GenerateRSAKeyPair, RSADecryptOAEP, RSAEncryptOAEP } from "@fast-china/utils";

const { privateKey, publicKey } = await GenerateRSAKeyPair();
const storedCiphertext = await RSAEncryptOAEP("Fast", publicKey);
const result = await RSADecryptOAEP(storedCiphertext, privateKey);
```

### 输入

| 输入值          | 输入值类型 | 必填/默认值 | 输入值说明                 |
| --------------- | ---------- | ----------- | -------------------------- |
| `ciphertext`    | `string`   | 是          | Base64 编码的 RSA 密文。   |
| `privateKeyPem` | `string`   | 是          | 未加密的 PKCS#8 PEM 私钥。 |

### 返回

| 返回值   | 返回值类型             | 返回值说明                                                       |
| -------- | ---------------------- | ---------------------------------------------------------------- |
| `result` | `Promise<DecodedText>` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 UTF-8 字符串。 |

## `RSASignPSS`

使用 RSA-PSS/SHA-256 私钥签名文本或字节。

### 签名

```ts
export async function RSASignPSS(value: string, privateKeyPem: string): Promise<string>;
```

### 示例

```ts
import { GenerateRSAKeyPair, RSASignPSS } from "@fast-china/utils";

const { privateKey } = await GenerateRSAKeyPair();
const result = await RSASignPSS("Fast", privateKey);
```

### 输入

| 输入值          | 输入值类型 | 必填/默认值 | 输入值说明                      |
| --------------- | ---------- | ----------- | ------------------------------- |
| `value`         | `string`   | 是          | 要签名的 UTF-8 文本或原始字节。 |
| `privateKeyPem` | `string`   | 是          | 未加密的 PKCS#8 PEM 私钥。      |

### 返回

| 返回值   | 返回值类型        | 返回值说明                                         |
| -------- | ----------------- | -------------------------------------------------- |
| `result` | `Promise<string>` | Base64 编码的 RSA-PSS 签名；盐长度固定为 32 字节。 |

## `RSAVerifyPSS`

使用 RSA-PSS/SHA-256 公钥验证 Base64 签名。

### 签名

```ts
export async function RSAVerifyPSS(value: string, signature: string, publicKeyPem: string): Promise<boolean>;
```

### 示例

```ts
import { GenerateRSAKeyPair, RSASignPSS, RSAVerifyPSS } from "@fast-china/utils";

const { privateKey, publicKey } = await GenerateRSAKeyPair();
const storedSignature = await RSASignPSS("Fast", privateKey);
const result = await RSAVerifyPSS("Fast", storedSignature, publicKey);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值 | 输入值说明                          |
| -------------- | ---------- | ----------- | ----------------------------------- |
| `value`        | `string`   | 是          | 签名时使用的 UTF-8 文本或原始字节。 |
| `signature`    | `string`   | 是          | Base64 编码的 RSA-PSS 签名。        |
| `publicKeyPem` | `string`   | 是          | SubjectPublicKeyInfo PEM 公钥。     |

### 返回

| 返回值   | 返回值类型         | 返回值说明                          |
| -------- | ------------------ | ----------------------------------- |
| `result` | `Promise<boolean>` | 签名与内容、公钥匹配时返回 `true`。 |

## `GenerateECDSAKeyPair`

生成 ECDSA PEM 签名密钥对。

### 签名

```ts
export async function GenerateECDSAKeyPair(namedCurve: EcNamedCurve = "P-256"): Promise<PemKeyPair>;
```

### 示例

```ts
import { GenerateECDSAKeyPair } from "@fast-china/utils";

const result = await GenerateECDSAKeyPair("P-256");
```

### 输入

| 输入值       | 输入值类型     | 必填/默认值        | 输入值说明                         |
| ------------ | -------------- | ------------------ | ---------------------------------- |
| `namedCurve` | `EcNamedCurve` | 否，默认 `"P-256"` | NIST 曲线：P-256、P-384 或 P-521。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                                        |
| -------- | --------------------- | ----------------------------------------------------------------- |
| `result` | `Promise<PemKeyPair>` | 未加密 PKCS#8 私钥和 SubjectPublicKeyInfo 公钥组成的 PEM 密钥对。 |

## `ECDSASign`

使用 ECDSA 私钥签名文本或字节。

### 签名

```ts
export async function ECDSASign(value: string, privateKeyPem: string, namedCurve: EcNamedCurve = "P-256"): Promise<string>;
```

### 示例

```ts
import { ECDSASign, GenerateECDSAKeyPair } from "@fast-china/utils";

const { privateKey } = await GenerateECDSAKeyPair();
const result = await ECDSASign("Fast", privateKey);
```

### 输入

| 输入值          | 输入值类型     | 必填/默认值        | 输入值说明                      |
| --------------- | -------------- | ------------------ | ------------------------------- |
| `value`         | `string`       | 是                 | 要签名的 UTF-8 文本或原始字节。 |
| `privateKeyPem` | `string`       | 是                 | 未加密的 EC PKCS#8 PEM 私钥。   |
| `namedCurve`    | `EcNamedCurve` | 否，默认 `"P-256"` | 私钥使用的 NIST 曲线。          |

### 返回

| 返回值   | 返回值类型        | 返回值说明                            |
| -------- | ----------------- | ------------------------------------- |
| `result` | `Promise<string>` | Base64 编码的 IEEE P1363 ECDSA 签名。 |

## `ECDSAVerify`

使用 ECDSA 公钥验证 Base64 签名。

### 签名

```ts
export async function ECDSAVerify(value: string, signature: string, publicKeyPem: string, namedCurve: EcNamedCurve = "P-256"): Promise<boolean>;
```

### 示例

```ts
import { ECDSASign, ECDSAVerify, GenerateECDSAKeyPair } from "@fast-china/utils";

const { privateKey, publicKey } = await GenerateECDSAKeyPair();
const storedSignature = await ECDSASign("Fast", privateKey);
const result = await ECDSAVerify("Fast", storedSignature, publicKey);
```

### 输入

| 输入值         | 输入值类型     | 必填/默认值        | 输入值说明                            |
| -------------- | -------------- | ------------------ | ------------------------------------- |
| `value`        | `string`       | 是                 | 签名时使用的 UTF-8 文本或原始字节。   |
| `signature`    | `string`       | 是                 | Base64 编码的 IEEE P1363 ECDSA 签名。 |
| `publicKeyPem` | `string`       | 是                 | EC SubjectPublicKeyInfo PEM 公钥。    |
| `namedCurve`   | `EcNamedCurve` | 否，默认 `"P-256"` | 公钥使用的 NIST 曲线。                |

### 返回

| 返回值   | 返回值类型         | 返回值说明                                |
| -------- | ------------------ | ----------------------------------------- |
| `result` | `Promise<boolean>` | 签名与内容、公钥和曲线匹配时返回 `true`。 |

## `GenerateECDHKeyPair`

生成 ECDH PEM 密钥协商密钥对。

### 签名

```ts
export async function GenerateECDHKeyPair(namedCurve: EcNamedCurve = "P-256"): Promise<PemKeyPair>;
```

### 示例

```ts
import { GenerateECDHKeyPair } from "@fast-china/utils";

const result = await GenerateECDHKeyPair("P-256");
```

### 输入

| 输入值       | 输入值类型     | 必填/默认值        | 输入值说明                         |
| ------------ | -------------- | ------------------ | ---------------------------------- |
| `namedCurve` | `EcNamedCurve` | 否，默认 `"P-256"` | NIST 曲线：P-256、P-384 或 P-521。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                                        |
| -------- | --------------------- | ----------------------------------------------------------------- |
| `result` | `Promise<PemKeyPair>` | 未加密 PKCS#8 私钥和 SubjectPublicKeyInfo 公钥组成的 PEM 密钥对。 |

## `DeriveECDHSecret`

使用本方 ECDH 私钥与对方 ECDH 公钥派生共享秘密。

### 签名

```ts
export async function DeriveECDHSecret(privateKeyPem: string, publicKeyPem: string, namedCurve: EcNamedCurve = "P-256"): Promise<Uint8Array>;
```

### 示例

```ts
import { DeriveECDHSecret, GenerateECDHKeyPair } from "@fast-china/utils";

const own = await GenerateECDHKeyPair();
const peer = await GenerateECDHKeyPair();
const result = await DeriveECDHSecret(own.privateKey, peer.publicKey);
```

### 输入

| 输入值          | 输入值类型     | 必填/默认值        | 输入值说明                                |
| --------------- | -------------- | ------------------ | ----------------------------------------- |
| `privateKeyPem` | `string`       | 是                 | 本方未加密的 EC PKCS#8 PEM 私钥。         |
| `publicKeyPem`  | `string`       | 是                 | 对方的 EC SubjectPublicKeyInfo PEM 公钥。 |
| `namedCurve`    | `EcNamedCurve` | 否，默认 `"P-256"` | 双方密钥使用的 NIST 曲线。                |

### 返回

| 返回值   | 返回值类型            | 返回值说明                         |
| -------- | --------------------- | ---------------------------------- |
| `result` | `Promise<Uint8Array>` | 曲线字段长度的原始 ECDH 共享秘密。 |

## `DeriveECDHKeySHA256`

使用 ECDH 后以 SHA-256 派生共享密钥。

### 签名

```ts
export async function DeriveECDHKeySHA256(privateKeyPem: string, publicKeyPem: string, namedCurve: EcNamedCurve = "P-256"): Promise<Uint8Array>;
```

### 示例

```ts
import { DeriveECDHKeySHA256, GenerateECDHKeyPair } from "@fast-china/utils";

const own = await GenerateECDHKeyPair();
const peer = await GenerateECDHKeyPair();
const result = await DeriveECDHKeySHA256(own.privateKey, peer.publicKey);
```

### 输入

| 输入值          | 输入值类型     | 必填/默认值        | 输入值说明                                |
| --------------- | -------------- | ------------------ | ----------------------------------------- |
| `privateKeyPem` | `string`       | 是                 | 本方未加密的 EC PKCS#8 PEM 私钥。         |
| `publicKeyPem`  | `string`       | 是                 | 对方的 EC SubjectPublicKeyInfo PEM 公钥。 |
| `namedCurve`    | `EcNamedCurve` | 否，默认 `"P-256"` | 双方密钥使用的 NIST 曲线。                |

### 返回

| 返回值   | 返回值类型            | 返回值说明        |
| -------- | --------------------- | ----------------- |
| `result` | `Promise<Uint8Array>` | 32 字节共享密钥。 |
