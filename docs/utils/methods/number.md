# Number 数值方法 API

本文逐项记录 `@fast-china/utils` 的 Number 数值公开函数。示例、输入和返回值均按 Fast.Utils 2.1.8 源码核对。

## `clamp`

把数字限制在闭区间内。

### 签名

```ts
export function clamp(value: number, minimum: number, maximum: number): number;
```

### 示例

```ts
import { clamp } from "@fast-china/utils";

const result = clamp(1, 1, 10);
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明       |
| --------- | ---------- | ----------- | ---------------- |
| `value`   | `number`   | 是          | 需要限制的数字。 |
| `minimum` | `number`   | 是          | 闭区间下界。     |
| `maximum` | `number`   | 是          | 闭区间上界。     |

### 返回

| 返回值   | 返回值类型 | 返回值说明                            |
| -------- | ---------- | ------------------------------------- |
| `result` | `number`   | `minimum <= result <= maximum` 的值。 |

## `inRange`

判断数字是否位于指定区间。

### 签名

```ts
export function inRange(value: number, minimum: number, maximum: number, includeMaximum = false): boolean;
```

### 示例

```ts
import { inRange } from "@fast-china/utils";

const result = inRange(1, 1, 10, false);
```

### 输入

| 输入值           | 输入值类型 | 必填/默认值      | 输入值说明                                            |
| ---------------- | ---------- | ---------------- | ----------------------------------------------------- |
| `value`          | `number`   | 是               | 待检查数字。                                          |
| `minimum`        | `number`   | 是               | 包含的下界。                                          |
| `maximum`        | `number`   | 是               | 上界。                                                |
| `includeMaximum` | `unknown`  | 否，默认 `false` | 是否包含上界；默认使用半开区间 `[minimum, maximum)`。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                      |
| -------- | ---------- | ------------------------------- |
| `result` | `boolean`  | 数字满足区间边界时返回 `true`。 |

## `roundTo`

按十进制位数四舍五入。

### 签名

```ts
export function roundTo(value: number, digits = 0): number;
```

### 示例

```ts
import { roundTo } from "@fast-china/utils";

const result = roundTo(1, 0);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值  | 输入值说明                                       |
| -------- | ---------- | ------------ | ------------------------------------------------ |
| `value`  | `number`   | 是           | 有限数字。                                       |
| `digits` | `unknown`  | 否，默认 `0` | 小数位数；负数表示十位、百位等，范围 -15 至 15。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                         |
| -------- | ---------- | ---------------------------------- |
| `result` | `number`   | 按 `Math.round` 语义舍入后的数字。 |

## `sum`

对有限数字求和。

### 签名

```ts
export function sum(values: readonly number[]): number;
```

### 示例

```ts
import { sum } from "@fast-china/utils";

const result = sum([1, 2, 3]);
```

### 输入

| 输入值   | 输入值类型          | 必填/默认值 | 输入值说明             |
| -------- | ------------------- | ----------- | ---------------------- |
| `values` | `readonly number[]` | 是          | 不会被修改的数字数组。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明               |
| -------- | ---------- | ------------------------ |
| `result` | `number`   | 算术和；空数组返回 `0`。 |

## `average`

计算有限数字的算术平均值。

### 签名

```ts
export function average(values: readonly number[]): number | undefined;
```

### 示例

```ts
import { average } from "@fast-china/utils";

const result = average([1, 2, 3]);
```

### 输入

| 输入值   | 输入值类型          | 必填/默认值 | 输入值说明             |
| -------- | ------------------- | ----------- | ---------------------- |
| `values` | `readonly number[]` | 是          | 不会被修改的数字数组。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                                   |
| -------- | --------------------- | ------------------------------------------------------------ |
| `result` | `number \| undefined` | 空数组或只有稀疏空位的数组返回 `undefined`；空位不参与分母。 |

## `lerp`

在两个数字间做线性插值。

### 签名

```ts
export function lerp(start: number, end: number, amount: number): number;
```

### 示例

```ts
import { lerp } from "@fast-china/utils";

const result = lerp(0, 10, 1);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明              |
| -------- | ---------- | ----------- | ----------------------- |
| `start`  | `number`   | 是          | `amount = 0` 时的起点。 |
| `end`    | `number`   | 是          | `amount = 1` 时的终点。 |
| `amount` | `number`   | 是          | 插值或外推比例。        |

### 返回

| 返回值   | 返回值类型 | 返回值说明     |
| -------- | ---------- | -------------- |
| `result` | `number`   | 线性计算结果。 |

## `formatBytes`

将非负字节数格式化为 SI 或 IEC 单位。

### 签名

```ts
export function formatBytes(bytes: number, options: FormatBytesOptions = {}): string;
```

### 示例

```ts
import { formatBytes } from "@fast-china/utils";

const result = formatBytes(1_536, { base: 1024, decimals: 1 });
```

### 输入

| 输入值    | 输入值类型           | 必填/默认值   | 输入值说明               |
| --------- | -------------------- | ------------- | ------------------------ |
| `bytes`   | `number`             | 是            | 非负有限字节数。         |
| `options` | `FormatBytesOptions` | 否，默认 `{}` | 基数、小数位和语言选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明       |
| -------- | ---------- | ---------------- |
| `result` | `string`   | 例如 `1.5 KiB`。 |

## `randomInt`

在半开区间内生成随机整数。

### 签名

```ts
export function randomInt(minimum: number, maximumExclusive: number): number;
```

### 示例

```ts
import { randomInt } from "@fast-china/utils";

const result = randomInt(1, 10);
```

### 输入

| 输入值             | 输入值类型 | 必填/默认值 | 输入值说明                                  |
| ------------------ | ---------- | ----------- | ------------------------------------------- |
| `minimum`          | `number`   | 是          | 包含的安全整数下界。                        |
| `maximumExclusive` | `number`   | 是          | 不包含的安全整数上界；区间宽度最大为 2^32。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                      |
| -------- | ---------- | ----------------------------------------------- |
| `result` | `number`   | 位于 `[minimum, maximumExclusive)` 的随机整数。 |
