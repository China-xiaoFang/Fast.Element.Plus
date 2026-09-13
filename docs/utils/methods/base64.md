# Base64 编解码方法 API

本文逐项记录 `@fast-china/utils` 的 Base64 编解码公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `encodeBase64Bytes`

将任意字节编码为标准 Base64。

### 签名

```ts
export function encodeBase64Bytes(bytes: Uint8Array): string;
```

### 示例

```ts
import { encodeBase64Bytes } from "@fast-china/utils";

const result = encodeBase64Bytes(new Uint8Array([70, 97, 115, 116]));
```

### 输入

| 输入值  | 输入值类型   | 必填/默认值 | 输入值说明             |
| ------- | ------------ | ----------- | ---------------------- |
| `bytes` | `Uint8Array` | 是          | 不会被修改的字节序列。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                      |
| -------- | ---------- | ------------------------------- |
| `result` | `string`   | 带标准 `=` 填充的 Base64 文本。 |

## `decodeBase64Bytes`

解码标准 Base64。

### 签名

```ts
export function decodeBase64Bytes(value: string): Uint8Array;
```

### 示例

```ts
import { decodeBase64Bytes } from "@fast-china/utils";

const result = decodeBase64Bytes("RmFzdA==");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明    |
| ------- | ---------- | ----------- | ------------- |
| `value` | `string`   | 是          | Base64 文本。 |

### 返回

| 返回值   | 返回值类型   | 返回值说明       |
| -------- | ------------ | ---------------- |
| `result` | `Uint8Array` | 新建的字节数组。 |

## `encodeBase64`

将 UTF-8 文本编码为标准 Base64。

### 签名

```ts
export function encodeBase64(value: string): string;
```

### 示例

```ts
import { encodeBase64 } from "@fast-china/utils";

const result = encodeBase64("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明            |
| ------- | ---------- | ----------- | --------------------- |
| `value` | `string`   | 是          | 任意 Unicode 字符串。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                 |
| -------- | ---------- | -------------------------- |
| `result` | `string`   | 带标准填充的 Base64 文本。 |

## `decodeBase64`

将标准 Base64 解码为 UTF-8 文本。

### 签名

```ts
export function decodeBase64(value: string): DecodedText;
```

### 示例

```ts
import { decodeBase64 } from "@fast-china/utils";

const result = decodeBase64("RmFzdA==");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明    |
| ------- | ---------- | ----------- | ------------- |
| `value` | `string`   | 是          | Base64 文本。 |

### 返回

| 返回值   | 返回值类型    | 返回值说明                                                         |
| -------- | ------------- | ------------------------------------------------------------------ |
| `result` | `DecodedText` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 Unicode 字符串。 |

## `encodeBase64UrlBytes`

将任意字节编码为无填充 Base64URL。

### 签名

```ts
export function encodeBase64UrlBytes(bytes: Uint8Array): string;
```

### 示例

```ts
import { encodeBase64UrlBytes } from "@fast-china/utils";

const result = encodeBase64UrlBytes(new Uint8Array([70, 97, 115, 116]));
```

### 输入

| 输入值  | 输入值类型   | 必填/默认值 | 输入值说明             |
| ------- | ------------ | ----------- | ---------------------- |
| `bytes` | `Uint8Array` | 是          | 不会被修改的字节序列。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                    |
| -------- | ---------- | ----------------------------- |
| `result` | `string`   | 仅使用 URL 安全字母表的文本。 |

## `decodeBase64UrlBytes`

解码 Base64URL 字节。

### 签名

```ts
export function decodeBase64UrlBytes(value: string): Uint8Array;
```

### 示例

```ts
import { decodeBase64UrlBytes } from "@fast-china/utils";

const result = decodeBase64UrlBytes("RmFzdA");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明       |
| ------- | ---------- | ----------- | ---------------- |
| `value` | `string`   | 是          | Base64URL 文本。 |

### 返回

| 返回值   | 返回值类型   | 返回值说明       |
| -------- | ------------ | ---------------- |
| `result` | `Uint8Array` | 新建的字节数组。 |

## `encodeBase64Url`

将 UTF-8 文本编码为无填充 Base64URL。

### 签名

```ts
export function encodeBase64Url(value: string): string;
```

### 示例

```ts
import { encodeBase64Url } from "@fast-china/utils";

const result = encodeBase64Url("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明            |
| ------- | ---------- | ----------- | --------------------- |
| `value` | `string`   | 是          | 任意 Unicode 字符串。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                    |
| -------- | ---------- | ----------------------------- |
| `result` | `string`   | 仅使用 URL 安全字母表的文本。 |

## `decodeBase64Url`

将 Base64URL 解码为 UTF-8 文本。

### 签名

```ts
export function decodeBase64Url(value: string): DecodedText;
```

### 示例

```ts
import { decodeBase64Url } from "@fast-china/utils";

const result = decodeBase64Url("RmFzdA");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                        |
| ------- | ---------- | ----------- | --------------------------------- |
| `value` | `string`   | 是          | 带填充或无填充的 Base64URL 文本。 |

### 返回

| 返回值   | 返回值类型    | 返回值说明                                                         |
| -------- | ------------- | ------------------------------------------------------------------ |
| `result` | `DecodedText` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 Unicode 字符串。 |

## `encodeLatin1Base64`

把 Latin-1 文本编码为标准 Base64。

### 签名

```ts
export function encodeLatin1Base64(value: string): string;
```

### 示例

```ts
import { encodeLatin1Base64 } from "@fast-china/utils";

const result = encodeLatin1Base64("Fast");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                                |
| ------- | ---------- | ----------- | ----------------------------------------- |
| `value` | `string`   | 是          | 每个 UTF-16 码元都必须位于 0–255 的文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                 |
| -------- | ---------- | -------------------------- |
| `result` | `string`   | 带标准填充的 Base64 文本。 |

## `decodeLatin1Base64`

把标准 Base64 解码为 Latin-1 文本。

### 签名

```ts
export function decodeLatin1Base64(value: string): DecodedText;
```

### 示例

```ts
import { decodeLatin1Base64 } from "@fast-china/utils";

const result = decodeLatin1Base64("RmFzdA==");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                                        |
| ------- | ---------- | ----------- | ------------------------------------------------- |
| `value` | `string`   | 是          | 标准 Base64 文本；允许 ASCII 空白和省略尾部填充。 |

### 返回

| 返回值   | 返回值类型    | 返回值说明                                                         |
| -------- | ------------- | ------------------------------------------------------------------ |
| `result` | `DecodedText` | 可直接使用或显式调用 `.parseJson<Value>()` 的 Latin-1 原始字符串。 |

## `encodeSecureBase64`

使用固定字典和随机前缀编码文本。

### 签名

```ts
export function encodeSecureBase64(value: string, prefixLength: number = defaultRandomPrefixLength): string;
```

### 示例

```ts
import { encodeSecureBase64 } from "@fast-china/utils";

const result = encodeSecureBase64("Fast");
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值                          | 输入值说明                                          |
| -------------- | ---------- | ------------------------------------ | --------------------------------------------------- |
| `value`        | `string`   | 是                                   | 任意可由 `encodeURIComponent` 处理的 Unicode 文本。 |
| `prefixLength` | `number`   | 否，默认 `defaultRandomPrefixLength` | 随机字母前缀长度；默认 `6`。                        |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                   |
| -------- | ---------- | ------------------------------------------------------------ |
| `result` | `string`   | 带随机前缀和兼容字典字符的 Base64 文本；空输入返回空字符串。 |

## `decodeSecureBase64`

解码 生成的 SecureBase64 兼容格式。

### 签名

```ts
export function decodeSecureBase64(value: string, prefixLength: number = defaultRandomPrefixLength): DecodedText;
```

### 示例

```ts
import { decodeSecureBase64, encodeSecureBase64 } from "@fast-china/utils";

const payload = encodeSecureBase64("Fast");
const result = decodeSecureBase64(payload);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值                          | 输入值说明                                                |
| -------------- | ---------- | ------------------------------------ | --------------------------------------------------------- |
| `value`        | `string`   | 是                                   | SecureBase64 文本；必须使用与编码时相同的前缀长度。       |
| `prefixLength` | `number`   | 否，默认 `defaultRandomPrefixLength` | 需要移除的前缀长度；默认 `6`，传入 `0` 时不移除字典字符。 |

### 返回

| 返回值   | 返回值类型    | 返回值说明                                                                             |
| -------- | ------------- | -------------------------------------------------------------------------------------- |
| `result` | `DecodedText` | 可直接使用或显式调用 `.parseJson<Value>()` 的原始 Unicode 字符串；空输入返回空字符串。 |
