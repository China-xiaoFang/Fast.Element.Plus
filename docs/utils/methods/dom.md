# DOM 与样式方法 API

本文逐项记录 `@fast-china/utils` 的 DOM 与样式公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `addCssUnit`

为数值或纯数字字符串添加 CSS 单位。

### 签名

```ts
export function addCssUnit(value?: string | number | null, unit = "px"): string;
```

### 示例

```ts
import { addCssUnit } from "@fast-china/utils";

const result = addCssUnit(12);
```

### 输入

| 输入值  | 输入值类型                 | 必填/默认值     | 输入值说明                                              |
| ------- | -------------------------- | --------------- | ------------------------------------------------------- |
| `value` | `string \| number \| null` | 否              | 数字、数字字符串或已有单位的 CSS 值；空值返回空字符串。 |
| `unit`  | `unknown`                  | 否，默认 `"px"` | 非零数字使用的单位，默认 `px`。                         |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `string`   | 零统一返回 `"0"`；非数字字符串保持原样。 |

## `serializeStyle`

将样式字符串、对象或嵌套数组序列化为内联 CSS。

### 签名

```ts
export function serializeStyle(styles: StyleInput): string;
```

### 示例

```ts
import { serializeStyle } from "@fast-china/utils";

const result = serializeStyle({ color: "red", width: 12 });
```

### 输入

| 输入值   | 输入值类型   | 必填/默认值 | 输入值说明                                                |
| -------- | ------------ | ----------- | --------------------------------------------------------- |
| `styles` | `StyleInput` | 是          | 可嵌套样式输入；后出现的声明由 CSS 层叠规则覆盖先前声明。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                |
| -------- | ---------- | ----------------------------------------- |
| `result` | `string`   | 以分号结束、以空格分隔的 CSS 声明字符串。 |
