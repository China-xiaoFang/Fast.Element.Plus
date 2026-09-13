# Environment 环境方法 API

本文逐项记录 `@fast-china/utils` 的 Environment 环境公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `isBrowser`

判断当前运行时是否具有浏览器 `window` 与 `document`。

### 签名

```ts
export function isBrowser(): boolean;
```

### 示例

```ts
import { isBrowser } from "@fast-china/utils";

const result = isBrowser();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `result` | `boolean`  | 两项能力均存在时返回 `true`；不读取 DOM 内容。 |

## `isWebWorker`

判断当前运行时是否像 Web Worker 且不是 Window。

### 签名

```ts
export function isWebWorker(): boolean;
```

### 示例

```ts
import { isWebWorker } from "@fast-china/utils";

const result = isWebWorker();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                               |
| -------- | ---------- | -------------------------------------------------------- |
| `result` | `boolean`  | 具有 `importScripts` 且不是浏览器 Window 时返回 `true`。 |

## `isNode`

判断当前运行时是否暴露 Node.js 版本标记。

### 签名

```ts
export function isNode(): boolean;
```

### 示例

```ts
import { isNode } from "@fast-china/utils";

const result = isNode();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                      |
| -------- | ---------- | ----------------------------------------------- |
| `result` | `boolean`  | `process.versions.node` 为字符串时返回 `true`。 |

## `isUniApp`

判断当前运行时是否暴露 uni-app 的 `uni` 全局对象。

### 签名

```ts
export function isUniApp(): boolean;
```

### 示例

```ts
import { isUniApp } from "@fast-china/utils";

const result = isUniApp();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                         |
| -------- | ---------- | ------------------------------------------------------------------ |
| `result` | `boolean`  | 全局属性存在且不为 `undefined` 时返回 `true`；不调用任何平台 API。 |

## `hasWebCrypto`

判断当前运行时是否具备本库完整加密 API 所需的 Web Crypto 能力。

### 签名

```ts
export function hasWebCrypto(): boolean;
```

### 示例

```ts
import { hasWebCrypto } from "@fast-china/utils";

const result = hasWebCrypto();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                          |
| -------- | ---------- | --------------------------------------------------- |
| `result` | `boolean`  | 同时提供本库 Web Crypto 功能所需方法时返回 `true`。 |

## `detectRuntime`

返回当前主要运行环境。

### 签名

```ts
export function detectRuntime(): RuntimeKind;
```

### 示例

```ts
import { detectRuntime } from "@fast-china/utils";

const result = detectRuntime();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型    | 返回值说明                                             |
| -------- | ------------- | ------------------------------------------------------ |
| `result` | `RuntimeKind` | `browser`、`worker`、`node` 或无法识别时的 `unknown`。 |

## `isMobileUserAgent`

基于 User-Agent 启发式判断手机设备。

### 签名

```ts
export function isMobileUserAgent(userAgent: string = currentUserAgent()): boolean;
```

### 示例

```ts
import { isMobileUserAgent } from "@fast-china/utils";

const result = isMobileUserAgent("Mozilla/5.0 (iPhone; Mobile)");
```

### 输入

| 输入值      | 输入值类型 | 必填/默认值                   | 输入值说明                                                         |
| ----------- | ---------- | ----------------------------- | ------------------------------------------------------------------ |
| `userAgent` | `string`   | 否，默认 `currentUserAgent()` | 默认读取当前 `navigator.userAgent`；平台对象不存在时使用空字符串。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                  |
| -------- | ---------- | --------------------------- |
| `result` | `boolean`  | 命中手机特征时返回 `true`。 |

## `isTabletUserAgent`

基于 User-Agent 与触点数量启发式判断平板设备。

### 签名

```ts
export function isTabletUserAgent(userAgent: string = currentUserAgent(), maxTouchPoints: number = currentTouchPoints()): boolean;
```

### 示例

```ts
import { isTabletUserAgent } from "@fast-china/utils";

const result = isTabletUserAgent("Mozilla/5.0 (iPad)", 5);
```

### 输入

| 输入值           | 输入值类型 | 必填/默认值                     | 输入值说明                                                    |
| ---------------- | ---------- | ------------------------------- | ------------------------------------------------------------- |
| `userAgent`      | `string`   | 否，默认 `currentUserAgent()`   | 默认读取当前 User-Agent。                                     |
| `maxTouchPoints` | `number`   | 否，默认 `currentTouchPoints()` | 用于识别桌面 User-Agent 模式下的 iPadOS，默认读取当前触点数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                  |
| -------- | ---------- | --------------------------- |
| `result` | `boolean`  | 命中平板特征时返回 `true`。 |
