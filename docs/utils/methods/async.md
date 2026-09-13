# Async 异步方法 API

本文逐项记录 `@fast-china/utils` 的 Async 异步公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `sleep`

等待指定时间，并支持 `AbortSignal`。

### 签名

```ts
export function sleep(milliseconds: number, options: AbortOptions = {}): Promise<void>;
```

### 示例

```ts
import { sleep } from "@fast-china/utils";

const result = await sleep(100, {});
```

### 输入

| 输入值         | 输入值类型     | 必填/默认值   | 输入值说明                        |
| -------------- | -------------- | ------------- | --------------------------------- |
| `milliseconds` | `number`       | 是            | 0 至 2,147,483,647 的有限毫秒数。 |
| `options`      | `AbortOptions` | 否，默认 `{}` | 可选取消信号。                    |

### 返回

| 返回值   | 返回值类型      | 返回值说明             |
| -------- | --------------- | ---------------------- |
| `result` | `Promise<void>` | 到期后完成的 Promise。 |

## `withTimeout`

为 Promise 增加等待上限。

### 签名

```ts
export function withTimeout<Result>(promise: PromiseLike<Result>, timeoutMs: number, options: TimeoutOptions = {}): Promise<Result>;
```

### 示例

```ts
import { withTimeout } from "@fast-china/utils";

const result = await withTimeout(Promise.resolve("done"), 100, {});
```

### 输入

| 输入值      | 输入值类型            | 必填/默认值   | 输入值说明                          |
| ----------- | --------------------- | ------------- | ----------------------------------- |
| `promise`   | `PromiseLike<Result>` | 是            | 需要等待的 Promise 或 PromiseLike。 |
| `timeoutMs` | `number`              | 是            | 0 至 2,147,483,647 的有限等待时间。 |
| `options`   | `TimeoutOptions`      | 否，默认 `{}` | 取消信号与自定义消息。              |

### 返回

| 返回值   | 返回值类型        | 返回值说明            |
| -------- | ----------------- | --------------------- |
| `result` | `Promise<Result>` | 底层 Promise 的结果。 |

## `retry`

使用有上限的指数退避重试操作。

### 签名

```ts
export async function retry<Result>(
	operation: (context: RetryContext) => Result | PromiseLike<Result>,
	options: RetryOptions = {}
): Promise<Awaited<Result>>;
```

### 示例

```ts
import { retry } from "@fast-china/utils";

const result = await retry(async ({ attempt }) => (attempt < 2 ? Promise.reject(new Error("retry")) : "done"), { attempts: 2 });
```

### 输入

| 输入值      | 输入值类型                                                 | 必填/默认值   | 输入值说明                                    |
| ----------- | ---------------------------------------------------------- | ------------- | --------------------------------------------- |
| `operation` | `(context: RetryContext) => Result \| PromiseLike<Result>` | 是            | 每次尝试都会调用的函数；`attempt` 从 1 开始。 |
| `options`   | `RetryOptions`                                             | 否，默认 `{}` | 尝试次数、退避和取消策略。                    |

### 返回

| 返回值   | 返回值类型                 | 返回值说明     |
| -------- | -------------------------- | -------------- |
| `result` | `Promise<Awaited<Result>>` | 首次成功结果。 |

## `mapConcurrent`

以固定并发度映射数组，并保持结果顺序。

### 签名

```ts
export async function mapConcurrent<Item, Result>(
	items: readonly Item[],
	concurrency: number,
	mapper: (item: Item, index: number, signal: AbortSignal | undefined) => Result | PromiseLike<Result>,
	options: ConcurrentMapOptions = {}
): Promise<Awaited<Result>[]>;
```

### 示例

```ts
import { mapConcurrent } from "@fast-china/utils";

const result = await mapConcurrent([1, 2, 3], 2, async (item) => item * 2);
```

### 输入

| 输入值        | 输入值类型                                                                                       | 必填/默认值   | 输入值说明                               |
| ------------- | ------------------------------------------------------------------------------------------------ | ------------- | ---------------------------------------- |
| `items`       | `readonly Item[]`                                                                                | 是            | 不会被修改的输入数组。                   |
| `concurrency` | `number`                                                                                         | 是            | 同时运行的最大任务数，必须为正安全整数。 |
| `mapper`      | `(item: Item, index: number, signal: AbortSignal \| undefined) => Result \| PromiseLike<Result>` | 是            | 接收项目、索引和取消信号的映射函数。     |
| `options`     | `ConcurrentMapOptions`                                                                           | 否，默认 `{}` | 可选取消信号。                           |

### 返回

| 返回值   | 返回值类型                   | 返回值说明                                                           |
| -------- | ---------------------------- | -------------------------------------------------------------------- |
| `result` | `Promise<Awaited<Result>[]>` | 与输入长度和顺序一致的结果数组；稀疏空位保持为空位且不会调用映射器。 |

## `debounce`

创建 Promise 感知的防抖函数。

### 签名

```ts
export function debounce<Arguments extends unknown[], Result>(
	callback: AsyncCallback<Arguments, Result>,
	delayMs = 300
): DebouncedFunction<Arguments, Awaited<Result>>;
```

### 示例

```ts
import { debounce } from "@fast-china/utils";

const save = debounce((value: string) => value.length, 200);
const pending = save("Fast");
await save.flush();
const result = await pending;
```

### 输入

| 输入值     | 输入值类型                         | 必填/默认值    | 输入值说明                                         |
| ---------- | ---------------------------------- | -------------- | -------------------------------------------------- |
| `callback` | `AsyncCallback<Arguments, Result>` | 是             | 同步或异步回调。                                   |
| `delayMs`  | `unknown`                          | 否，默认 `300` | 0 至 2,147,483,647 的有限等待时间，默认 300 毫秒。 |

### 返回

| 返回值   | 返回值类型                                      | 返回值说明                               |
| -------- | ----------------------------------------------- | ---------------------------------------- |
| `result` | `DebouncedFunction<Arguments, Awaited<Result>>` | 具有取消、立即执行和状态方法的防抖函数。 |

## `throttle`

创建 Promise 感知的前缘节流函数。

### 签名

```ts
export function throttle<Arguments extends unknown[], Result>(
	callback: AsyncCallback<Arguments, Result>,
	delayMs = 300
): ThrottledFunction<Arguments, Awaited<Result>>;
```

### 示例

```ts
import { throttle } from "@fast-china/utils";

const update = throttle((value: number) => value * 2, 200);
const result = await update(2);
```

### 输入

| 输入值     | 输入值类型                         | 必填/默认值    | 输入值说明                                         |
| ---------- | ---------------------------------- | -------------- | -------------------------------------------------- |
| `callback` | `AsyncCallback<Arguments, Result>` | 是             | 同步或异步回调。                                   |
| `delayMs`  | `unknown`                          | 否，默认 `300` | 0 至 2,147,483,647 的有限冷却时间，默认 300 毫秒。 |

### 返回

| 返回值   | 返回值类型                                      | 返回值说明                         |
| -------- | ----------------------------------------------- | ---------------------------------- |
| `result` | `ThrottledFunction<Arguments, Awaited<Result>>` | 具有取消和状态方法的前缘节流函数。 |
