# Storage 存储方法 API

本文逐项记录 `@fast-china/utils` 的 Storage 存储公开函数。示例、输入和返回值均按 Fast.Utils 2.1.8 源码核对。

## `configureStorage`

在首次 Storage 操作前可选配置 `Local` 与 `Session`。

### 签名

```ts
export function configureStorage(options: StorageConfiguration = {}): void;
```

### 示例

```ts
import { configureStorage } from "@fast-china/utils";

configureStorage({ prefix: "admin:", crypto: false });
```

### 输入

| 输入值    | 输入值类型             | 必填/默认值   | 输入值说明                                    |
| --------- | ---------------------- | ------------- | --------------------------------------------- |
| `options` | `StorageConfiguration` | 否，默认 `{}` | 可选的全局键前缀、Codec、旧版混淆选项与时钟。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `isStorageConfigured`

返回全局 Storage 是否已经由应用入口配置。

### 签名

```ts
export function isStorageConfigured(): boolean;
```

### 示例

```ts
import { isStorageConfigured } from "@fast-china/utils";

const result = isStorageConfigured();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                   |
| -------- | ---------- | ---------------------------- |
| `result` | `boolean`  | 返回该方法计算或创建的结果。 |
