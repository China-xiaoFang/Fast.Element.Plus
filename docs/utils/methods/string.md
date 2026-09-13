# String 字符串方法 API

本文逐项记录 `@fast-china/utils` 的 String 字符串公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `decodeURIComponentRepeatedly`

重复执行 URI 组件解码，直到值稳定或达到深度上限。

### 签名

```ts
export function decodeURIComponentRepeatedly(value: string, maxDepth = 10): string;
```

### 示例

```ts
import { decodeURIComponentRepeatedly } from "@fast-china/utils";

const result = decodeURIComponentRepeatedly("Fast 文档", 10);
```

### 输入

| 输入值     | 输入值类型 | 必填/默认值   | 输入值说明                      |
| ---------- | ---------- | ------------- | ------------------------------- |
| `value`    | `string`   | 是            | 不包含 URI 路径语义的编码组件。 |
| `maxDepth` | `unknown`  | 否，默认 `10` | 最大解码次数，默认 `10`。       |

### 返回

| 返回值   | 返回值类型 | 返回值说明                       |
| -------- | ---------- | -------------------------------- |
| `result` | `string`   | 解码稳定或达到上限后的组件文本。 |

## `parseQueryString`

解析带 `://` 的绝对 URL、`?query` 或纯查询字符串。

### 签名

```ts
export function parseQueryString(input: string): ParsedQueryParameters;
```

### 示例

```ts
import { parseQueryString } from "@fast-china/utils";

const result = parseQueryString("?page=1&tag=vue&tag=tsx");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                                     |
| ------- | ---------- | ----------- | ---------------------------------------------- |
| `input` | `string`   | 是          | 完整 URL、带前导问号或不带前导问号的查询文本。 |

### 返回

| 返回值   | 返回值类型              | 返回值说明                                 |
| -------- | ----------------------- | ------------------------------------------ |
| `result` | `ParsedQueryParameters` | 重复键对应字符串数组，空值保留为空字符串。 |

## `isValidJson`

判断文本是否为任意合法 JSON 值，包括标量与 `null`。

### 签名

```ts
export function isValidJson(value: string): boolean;
```

### 示例

```ts
import { isValidJson } from "@fast-china/utils";

const result = isValidJson(`{"name":"Fast"}`);
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                      |
| ------- | ---------- | ----------- | ------------------------------- |
| `value` | `string`   | 是          | 待解析文本；纯空白不视为 JSON。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `boolean`  | `JSON.parse` 能完整解析时返回 `true`。 |

## `splitWords`

按大小写边界、连字符、下划线与空白切分单词。

### 签名

```ts
export function splitWords(value: string): string[];
```

### 示例

```ts
import { splitWords } from "@fast-china/utils";

const result = splitWords("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明   |
| ------- | ---------- | ----------- | ------------ |
| `value` | `string`   | 是          | 待拆分文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                         |
| -------- | ---------- | ---------------------------------- |
| `result` | `string[]` | 删除空项、保持输入顺序的单词数组。 |

## `upperFirst`

将首个 Unicode 码点转为大写。

### 签名

```ts
export function upperFirst(value: string, locale?: StringLocale): string;
```

### 示例

```ts
import { upperFirst } from "@fast-china/utils";

const result = upperFirst("Fast 文档", "zh-CN");
```

### 输入

| 输入值   | 输入值类型     | 必填/默认值 | 输入值说明                     |
| -------- | -------------- | ----------- | ------------------------------ |
| `value`  | `string`       | 是          | 输入文本；空字符串保持为空。   |
| `locale` | `StringLocale` | 否          | 显式语言，默认固定为 `en-US`。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                      |
| -------- | ---------- | ------------------------------- |
| `result` | `string`   | 首个 Unicode 码点转换后的文本。 |

## `lowerFirst`

将首个 Unicode 码点转为小写。

### 签名

```ts
export function lowerFirst(value: string, locale?: StringLocale): string;
```

### 示例

```ts
import { lowerFirst } from "@fast-china/utils";

const result = lowerFirst("Fast 文档", "zh-CN");
```

### 输入

| 输入值   | 输入值类型     | 必填/默认值 | 输入值说明                     |
| -------- | -------------- | ----------- | ------------------------------ |
| `value`  | `string`       | 是          | 输入文本；空字符串保持为空。   |
| `locale` | `StringLocale` | 否          | 显式语言，默认固定为 `en-US`。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                      |
| -------- | ---------- | ------------------------------- |
| `result` | `string`   | 首个 Unicode 码点转换后的文本。 |

## `camelCase`

将文本转换为 camelCase。

### 签名

```ts
export function camelCase(value: string, locale?: StringLocale): string;
```

### 示例

```ts
import { camelCase } from "@fast-china/utils";

const result = camelCase("Fast 文档", "zh-CN");
```

### 输入

| 输入值   | 输入值类型     | 必填/默认值 | 输入值说明                                 |
| -------- | -------------- | ----------- | ------------------------------------------ |
| `value`  | `string`       | 是          | 由大小写、连字符、下划线或空白分隔的文本。 |
| `locale` | `StringLocale` | 否          | 大小写转换使用的语言，默认固定为 `en-US`。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明       |
| -------- | ---------- | ---------------- |
| `result` | `string`   | camelCase 文本。 |

## `pascalCase`

将文本转换为 PascalCase。

### 签名

```ts
export function pascalCase(value: string, locale?: StringLocale): string;
```

### 示例

```ts
import { pascalCase } from "@fast-china/utils";

const result = pascalCase("Fast 文档", "zh-CN");
```

### 输入

| 输入值   | 输入值类型     | 必填/默认值 | 输入值说明                 |
| -------- | -------------- | ----------- | -------------------------- |
| `value`  | `string`       | 是          | 参数语义与 一致。          |
| `locale` | `StringLocale` | 否          | 大小写转换使用的显式语言。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明        |
| -------- | ---------- | ----------------- |
| `result` | `string`   | PascalCase 文本。 |

## `kebabCase`

将文本转换为 kebab-case。

### 签名

```ts
export function kebabCase(value: string, locale?: StringLocale): string;
```

### 示例

```ts
import { kebabCase } from "@fast-china/utils";

const result = kebabCase("Fast 文档", "zh-CN");
```

### 输入

| 输入值   | 输入值类型     | 必填/默认值 | 输入值说明                 |
| -------- | -------------- | ----------- | -------------------------- |
| `value`  | `string`       | 是          | 参数语义与 一致。          |
| `locale` | `StringLocale` | 否          | 大小写转换使用的显式语言。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明        |
| -------- | ---------- | ----------------- |
| `result` | `string`   | kebab-case 文本。 |

## `truncateGraphemes`

按 Unicode 字素簇截断文本，避免拆开 emoji、组合音标或代理对。

### 签名

```ts
export function truncateGraphemes(value: string, maxLength: number, suffix = "…", locale?: StringLocale): string;
```

### 示例

```ts
import { truncateGraphemes } from "@fast-china/utils";

const result = truncateGraphemes("Fast 文档", 4, "…", "zh-CN");
```

### 输入

| 输入值      | 输入值类型     | 必填/默认值    | 输入值说明                                             |
| ----------- | -------------- | -------------- | ------------------------------------------------------ |
| `value`     | `string`       | 是             | 输入文本。                                             |
| `maxLength` | `number`       | 是             | 保留的最大字素簇数量。                                 |
| `suffix`    | `unknown`      | 否，默认 `"…"` | 被截断时追加的文本，默认单字符省略号 `…`；不计入上限。 |
| `locale`    | `StringLocale` | 否             | 字素分割语言，默认固定为 `en-US`。                     |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `result` | `string`   | 未超限时返回原字符串，否则返回截断内容与后缀。 |

## `copy`

把文本复制到系统剪贴板。

### 签名

```ts
export async function copy(value: string): Promise<void>;
```

### 示例

```ts
import { copy } from "@fast-china/utils";

const result = await copy("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------- | ---------- | ----------- | -------------- |
| `value` | `string`   | 是          | 要复制的文本。 |

### 返回

| 返回值   | 返回值类型      | 返回值说明                 |
| -------- | --------------- | -------------------------- |
| `result` | `Promise<void>` | 复制完成后兑现的 Promise。 |

## `randomString`

生成随机字符串。

### 签名

```ts
export function randomString(length: number, alphabet: string = defaultRandomAlphabet): string;
```

### 示例

```ts
import { randomString } from "@fast-china/utils";

const result = randomString(16, "ABCDEFGHJKLMNPQRSTUVWXYZ23456789");
```

### 输入

| 输入值     | 输入值类型 | 必填/默认值                      | 输入值说明                                          |
| ---------- | ---------- | -------------------------------- | --------------------------------------------------- |
| `length`   | `number`   | 是                               | 字符数量，必须是 0 至 1,000,000 的安全整数。        |
| `alphabet` | `string`   | 否，默认 `defaultRandomAlphabet` | 不得为空、包含重复字符或超过 2^32 个 Unicode 码点。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `string`   | 由 `alphabet` 中 Unicode 码点组成的随机文本。 |

## `generateUuidV4`

生成 RFC 4122 version 4 UUID。

### 签名

```ts
export function generateUuidV4(): string;
```

### 示例

```ts
import { generateUuidV4 } from "@fast-china/utils";

const result = generateUuidV4();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                 |
| -------- | ---------- | -------------------------- |
| `result` | `string`   | 小写、带连字符的 UUID v4。 |

## `isUuidV4`

判断字符串是否为 RFC 4122 version 4 UUID。

### 签名

```ts
export function isUuidV4(value: string): boolean;
```

### 示例

```ts
import { isUuidV4 } from "@fast-china/utils";

const result = isUuidV4("550e8400-e29b-41d4-a716-446655440000");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------- | ---------- | ----------- | ------------------------------------ |
| `value` | `string`   | 是          | 待验证文本；十六进制字母大小写均可。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `boolean`  | 版本位与 Variant 位均正确时返回 `true`。 |

## `escapeHtml`

转义 HTML 文本上下文中的五个特殊字符。

### 签名

```ts
export function escapeHtml(value: string): string;
```

### 示例

```ts
import { escapeHtml } from "@fast-china/utils";

const result = escapeHtml("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                         |
| ------- | ---------- | ----------- | ---------------------------------- |
| `value` | `string`   | 是          | 将作为 HTML 文本节点内容的字符串。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                   |
| -------- | ---------- | -------------------------------------------- |
| `result` | `string`   | 转义 `&`、`<`、`>`、双引号与单引号后的文本。 |

## `normalizeWhitespace`

把连续 Unicode 空白折叠为单个空格并删除两端空白。

### 签名

```ts
export function normalizeWhitespace(value: string): string;
```

### 示例

```ts
import { normalizeWhitespace } from "@fast-china/utils";

const result = normalizeWhitespace("Fast 文档");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明 |
| ------- | ---------- | ----------- | ---------- |
| `value` | `string`   | 是          | 输入文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `string`   | 规范化后的文本；全空白输入返回空字符串。 |
