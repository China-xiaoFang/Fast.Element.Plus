# Function 函数方法 API

本文逐项记录 `@fast-china/utils` 的 Function 函数公开函数。示例、输入和返回值均按 Fast.Utils 2.1.7 源码核对。

## `once`

创建最多执行一次并缓存首次结果的函数。

### 签名

```ts
export function once<This, Arguments extends unknown[], Result>(
	callback: (this: This, ...arguments_: Arguments) => Result
): (this: This, ...arguments_: Arguments) => Result;
```

### 示例

```ts
import { once } from "@fast-china/utils";

const initialize = once(() => ({ ready: true }));
const result = initialize();
```

### 输入

| 输入值     | 输入值类型                                         | 必填/默认值 | 输入值说明             |
| ---------- | -------------------------------------------------- | ----------- | ---------------------- |
| `callback` | `(this: This, ...arguments_: Arguments) => Result` | 是          | 只允许执行一次的函数。 |

### 返回

| 返回值   | 返回值类型                                         | 返回值说明                       |
| -------- | -------------------------------------------------- | -------------------------------- |
| `result` | `(this: This, ...arguments_: Arguments) => Result` | 保持原参数与返回类型的包装函数。 |
