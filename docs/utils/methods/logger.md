# Logger 日志方法 API

本文逐项记录 `@fast-china/utils` 的 Logger 日志公开函数。示例、输入和返回值均按 Fast.Utils 2.1.8 源码核对。

## `createLogger`

创建独立日志器。

### 签名

```ts
export function createLogger(options: LoggerOptions = {}): Logger;
```

### 示例

```ts
import { createLogger } from "@fast-china/utils";

const result = createLogger({ brand: "Admin", minimumLevel: "warn" });
```

### 输入

| 输入值    | 输入值类型      | 必填/默认值   | 输入值说明                                         |
| --------- | --------------- | ------------- | -------------------------------------------------- |
| `options` | `LoggerOptions` | 否，默认 `{}` | 级别、前缀、输出目标和 uni-app App-Plus 拆分选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                   |
| -------- | ---------- | -------------------------------------------- |
| `result` | `Logger`   | 不会修改全局控制台或其他日志器配置的新实例。 |

## `configureLogger`

替换默认 的完整配置。

### 签名

```ts
export function configureLogger(options: LoggerOptions = {}): void;
```

### 示例

```ts
import { configureLogger } from "@fast-china/utils";

configureLogger({ brand: "Admin", minimumLevel: "warn" });
```

### 输入

| 输入值    | 输入值类型      | 必填/默认值   | 输入值说明                                                           |
| --------- | --------------- | ------------- | -------------------------------------------------------------------- |
| `options` | `LoggerOptions` | 否，默认 `{}` | 默认 Logger 使用的级别、前缀、输出目标和 uni-app App-Plus 拆分选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |
