# Date 日期方法 API

本文逐项记录 `@fast-china/utils` 的 Date 日期公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `toDate`

转换并克隆有效日期。

### 签名

```ts
export function toDate(value: DateInput): Date;
```

### 示例

```ts
import { toDate } from "@fast-china/utils";

const result = toDate("2026-09-13T08:00:00+08:00");
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值 | 输入值说明                                  |
| ------- | ----------- | ----------- | ------------------------------------------- |
| `value` | `DateInput` | 是          | Date、Unix 毫秒时间戳或运行时可解析字符串。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                      |
| -------- | ---------- | ------------------------------- |
| `result` | `Date`     | 与输入不共享可变状态的新 Date。 |

## `isValidDate`

判断输入能否转换为有效日期。

### 签名

```ts
export function isValidDate(value: unknown): value is DateInput;
```

### 示例

```ts
import { isValidDate } from "@fast-china/utils";

const result = isValidDate("2026-09-13");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------- | ---------- | ----------- | -------------- |
| `value` | `unknown`  | 是          | 任意待检查值。 |

### 返回

| 返回值   | 返回值类型           | 返回值说明                                       |
| -------- | -------------------- | ------------------------------------------------ |
| `result` | `value is DateInput` | 仅 Date、数字或字符串且时间戳有限时返回 `true`。 |

## `startOfDay`

返回输入日期所在本地时区日期的 `00:00:00.000`，不修改输入。

### 签名

```ts
export function startOfDay(value: DateInput): Date;
```

### 示例

```ts
import { startOfDay } from "@fast-china/utils";

const result = startOfDay("2026-09-13T08:00:00+08:00");
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值 | 输入值说明     |
| ------- | ----------- | ----------- | -------------- |
| `value` | `DateInput` | 是          | 有效日期输入。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明             |
| -------- | ---------- | ---------------------- |
| `result` | `Date`     | 新建的本地日开始时间。 |

## `endOfDay`

返回输入日期所在本地时区日期的 `23:59:59.999`，不修改输入。

### 签名

```ts
export function endOfDay(value: DateInput): Date;
```

### 示例

```ts
import { endOfDay } from "@fast-china/utils";

const result = endOfDay("2026-09-13T08:00:00+08:00");
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值 | 输入值说明     |
| ------- | ----------- | ----------- | -------------- |
| `value` | `DateInput` | 是          | 有效日期输入。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明             |
| -------- | ---------- | ---------------------- |
| `result` | `Date`     | 新建的本地日结束时间。 |

## `addDays`

按本地日历增加整数天，不修改输入。

### 签名

```ts
export function addDays(value: DateInput, amount: number): Date;
```

### 示例

```ts
import { addDays } from "@fast-china/utils";

const result = addDays("2026-09-13T08:00:00+08:00", 1);
```

### 输入

| 输入值   | 输入值类型  | 必填/默认值 | 输入值说明               |
| -------- | ----------- | ----------- | ------------------------ |
| `value`  | `DateInput` | 是          | 基准日期。               |
| `amount` | `number`    | 是          | 可为负数的安全整数日数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                          |
| -------- | ---------- | ------------------------------------------------------------------- |
| `result` | `Date`     | 本地日历运算后的新 Date；夏令时变化可能使实际毫秒差不等于 24 小时。 |

## `addMonths`

按本地日历增加整数月，并把不存在的日期夹到目标月末。

### 签名

```ts
export function addMonths(value: DateInput, amount: number): Date;
```

### 示例

```ts
import { addMonths } from "@fast-china/utils";

const result = addMonths("2026-09-13T08:00:00+08:00", 1);
```

### 输入

| 输入值   | 输入值类型  | 必填/默认值 | 输入值说明               |
| -------- | ----------- | ----------- | ------------------------ |
| `value`  | `DateInput` | 是          | 基准日期。               |
| `amount` | `number`    | 是          | 可为负数的安全整数月数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明            |
| -------- | ---------- | --------------------- |
| `result` | `Date`     | 月份运算后的新 Date。 |

## `addYears`

按本地日历增加整数年，并沿用 的月末夹取规则。

### 签名

```ts
export function addYears(value: DateInput, amount: number): Date;
```

### 示例

```ts
import { addYears } from "@fast-china/utils";

const result = addYears("2026-09-13T08:00:00+08:00", 1);
```

### 输入

| 输入值   | 输入值类型  | 必填/默认值 | 输入值说明               |
| -------- | ----------- | ----------- | ------------------------ |
| `value`  | `DateInput` | 是          | 基准日期。               |
| `amount` | `number`    | 是          | 可为负数的安全整数年数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明            |
| -------- | ---------- | --------------------- |
| `result` | `Date`     | 年份运算后的新 Date。 |

## `isSameDay`

判断两个输入是否属于同一本地日历日。

### 签名

```ts
export function isSameDay(left: DateInput, right: DateInput): boolean;
```

### 示例

```ts
import { isSameDay } from "@fast-china/utils";

const result = isSameDay("2026-09-13", "2026-09-13T23:00:00");
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值 | 输入值说明 |
| ------- | ----------- | ----------- | ---------- |
| `left`  | `DateInput` | 是          | 第一日期。 |
| `right` | `DateInput` | 是          | 第二日期。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                          |
| -------- | ---------- | ----------------------------------- |
| `result` | `boolean`  | 本地年、月、日均相同时返回 `true`。 |

## `isFuture`

判断时间是否晚于基准时间。

### 签名

```ts
export function isFuture(value: DateInput, now: DateInput = Date.now()): boolean;
```

### 示例

```ts
import { isFuture } from "@fast-china/utils";

const result = isFuture("2026-09-13T08:00:00+08:00", Date.now());
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值           | 输入值说明                       |
| ------- | ----------- | --------------------- | -------------------------------- |
| `value` | `DateInput` | 是                    | 待比较时间。                     |
| `now`   | `DateInput` | 否，默认 `Date.now()` | 比较基准，默认调用时的当前时刻。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                          |
| -------- | ---------- | ----------------------------------- |
| `result` | `boolean`  | `value` 严格晚于基准时返回 `true`。 |

## `getLocalDayBounds`

返回指定基准所在本地日历日的完整闭区间。

### 签名

```ts
export function getLocalDayBounds(value: DateInput = Date.now()): [start: Date, end: Date];
```

### 示例

```ts
import { getLocalDayBounds } from "@fast-china/utils";

const result = getLocalDayBounds(Date.now());
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值           | 输入值说明                     |
| ------- | ----------- | --------------------- | ------------------------------ |
| `value` | `DateInput` | 否，默认 `Date.now()` | 日期基准，默认调用时当前日期。 |

### 返回

| 返回值   | 返回值类型                 | 返回值说明                         |
| -------- | -------------------------- | ---------------------------------- |
| `result` | `[start: Date, end: Date]` | 新建的本地日开始和结束时间二元组。 |

## `isWithinInterval`

判断日期是否位于包含首尾的时间区间。

### 签名

```ts
export function isWithinInterval(value: DateInput, start: DateInput, end: DateInput): boolean;
```

### 示例

```ts
import { isWithinInterval } from "@fast-china/utils";

const result = isWithinInterval("2026-09-13T08:00:00+08:00", "2026-09-01", "2026-09-30");
```

### 输入

| 输入值  | 输入值类型  | 必填/默认值 | 输入值说明   |
| ------- | ----------- | ----------- | ------------ |
| `value` | `DateInput` | 是          | 待检查日期。 |
| `start` | `DateInput` | 是          | 包含的起点。 |
| `end`   | `DateInput` | 是          | 包含的终点。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                        |
| -------- | ---------- | --------------------------------- |
| `result` | `boolean`  | 时间戳位于闭区间内时返回 `true`。 |

## `formatRelativeTime`

使用 `Intl.RelativeTimeFormat` 生成人类可读相对时间。

### 签名

```ts
export function formatRelativeTime(value: DateInput, options: RelativeTimeOptions = {}): string;
```

### 示例

```ts
import { formatRelativeTime } from "@fast-china/utils";

const result = formatRelativeTime("2026-09-13T08:00:00+08:00", {});
```

### 输入

| 输入值    | 输入值类型            | 必填/默认值   | 输入值说明             |
| --------- | --------------------- | ------------- | ---------------------- |
| `value`   | `DateInput`           | 是            | 目标时间。             |
| `options` | `RelativeTimeOptions` | 否，默认 `{}` | 语言、样式与比较基准。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                      |
| -------- | ---------- | ----------------------------------------------- |
| `result` | `string`   | 由 `Intl.RelativeTimeFormat` 生成的本地化文本。 |

## `formatChineseRelativeTime`

把日期转换为固定中文相对时间文本。

### 签名

```ts
export function formatChineseRelativeTime(value: Date | number | string | null | undefined): string;
```

### 示例

```ts
import { formatChineseRelativeTime } from "@fast-china/utils";

const result = formatChineseRelativeTime("2026-09-13T08:00:00+08:00");
```

### 输入

| 输入值  | 输入值类型                                      | 必填/默认值 | 输入值说明                         |
| ------- | ----------------------------------------------- | ----------- | ---------------------------------- |
| `value` | `Date \| number \| string \| null \| undefined` | 是          | Date、时间戳、可解析字符串或空值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                        |
| -------- | ---------- | ------------------------------------------------- |
| `result` | `string`   | 例如“3分钟前”“半年后”；非法或空输入返回空字符串。 |

## `createOneMonthRangeFromToday`

创建从今天到前后一个月日期的完整本地日范围。

### 签名

```ts
export function createOneMonthRangeFromToday(towardFuture = false): [start: Date, end: Date];
```

### 示例

```ts
import { createOneMonthRangeFromToday } from "@fast-china/utils";

const result = createOneMonthRangeFromToday(false);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值      | 输入值说明                                          |
| -------------- | ---------- | ---------------- | --------------------------------------------------- |
| `towardFuture` | `unknown`  | 否，默认 `false` | `true` 返回今天至一个月后，默认返回一个月前至今天。 |

### 返回

| 返回值   | 返回值类型                 | 返回值说明                     |
| -------- | -------------------------- | ------------------------------ |
| `result` | `[start: Date, end: Date]` | 每次调用新建的本地日首尾边界。 |

## `isDateAfterNow`

判断日期是否晚于调用时的当前时刻。

### 签名

```ts
export function isDateAfterNow(time: Date): boolean;
```

### 示例

```ts
import { isDateAfterNow } from "@fast-china/utils";

const result = isDateAfterNow(new Date(Date.now() + 60_000));
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明   |
| ------ | ---------- | ----------- | ------------ |
| `time` | `Date`     | 是          | 待比较日期。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                  |
| -------- | ---------- | ------------------------------------------- |
| `result` | `boolean`  | 时间戳严格晚于 `Date.now()` 时返回 `true`。 |

## `getLocalTimeGreeting`

根据浏览器本地小时返回固定中文问候语。

### 签名

```ts
export function getLocalTimeGreeting(): string;
```

### 示例

```ts
import { getLocalTimeGreeting } from "@fast-china/utils";

const result = getLocalTimeGreeting();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                     |
| -------- | ---------- | ------------------------------ |
| `result` | `string`   | 与当前时段对应的中文欢迎文本。 |

## `createDateRangeShortcuts`

创建面向过去或未来的常用完整日期范围快捷项。

### 签名

```ts
export function createDateRangeShortcuts(towardFuture = false): DateRangeShortcut[];
```

### 示例

```ts
import { createDateRangeShortcuts } from "@fast-china/utils";

const result = createDateRangeShortcuts(false);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值      | 输入值说明                              |
| -------------- | ---------- | ---------------- | --------------------------------------- |
| `towardFuture` | `unknown`  | 否，默认 `false` | `true` 创建未来范围，默认创建历史范围。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                                 |
| -------- | --------------------- | ------------------------------------------ |
| `result` | `DateRangeShortcut[]` | 每次求值都会重新读取当前时间的范围快捷项。 |

## `createDateShortcuts`

创建面向过去或未来的常用单日期快捷项。

### 签名

```ts
export function createDateShortcuts(towardFuture = false): DateShortcut[];
```

### 示例

```ts
import { createDateShortcuts } from "@fast-china/utils";

const result = createDateShortcuts(false);
```

### 输入

| 输入值         | 输入值类型 | 必填/默认值      | 输入值说明                              |
| -------------- | ---------- | ---------------- | --------------------------------------- |
| `towardFuture` | `unknown`  | 否，默认 `false` | `true` 创建未来日期，默认创建历史日期。 |

### 返回

| 返回值   | 返回值类型       | 返回值说明                                   |
| -------- | ---------------- | -------------------------------------------- |
| `result` | `DateShortcut[]` | 每次求值都会重新读取当前时间的单日期快捷项。 |

## `getStartOfToday`

返回今天的本地零点。

### 签名

```ts
export function getStartOfToday(): Date;
```

### 示例

```ts
import { getStartOfToday } from "@fast-china/utils";

const result = getStartOfToday();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                   |
| -------- | ---------- | ---------------------------- |
| `result` | `Date`     | 新建的 `00:00:00.000` Date。 |
