# Color 颜色方法 API

本文逐项记录 `@fast-china/utils` 的 Color 颜色公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `parseHexColor`

解析可带可不带 `#` 的 `rgb`、`rgba`、`rrggbb` 或 `rrggbbaa`。

### 签名

```ts
export function parseHexColor(value: string): RgbaColor;
```

### 示例

```ts
import { parseHexColor } from "@fast-china/utils";

const result = parseHexColor("#409eff");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明         |
| ------- | ---------- | ----------- | ------------------ |
| `value` | `string`   | 是          | 十六进制颜色文本。 |

### 返回

| 返回值   | 返回值类型  | 返回值说明                              |
| -------- | ----------- | --------------------------------------- |
| `result` | `RgbaColor` | 标准化的 RGBA 对象；省略 Alpha 时为 1。 |

## `formatHexColor`

把 RGB 或 RGBA 对象格式化为小写十六进制颜色。

### 签名

```ts
export function formatHexColor(color: RgbColor | RgbaColor, includeAlpha: boolean = "alpha" in color && color.alpha < 1): string;
```

### 示例

```ts
import { formatHexColor } from "@fast-china/utils";

const result = formatHexColor({ red: 64, green: 158, blue: 255 });
```

### 输入

| 输入值         | 输入值类型              | 必填/默认值                                    | 输入值说明                                           |
| -------------- | ----------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| `color`        | `RgbColor \| RgbaColor` | 是                                             | 颜色通道；RGB 会四舍五入到最近整数。                 |
| `includeAlpha` | `boolean`               | 否，默认 `"alpha" in color && color.alpha < 1` | 是否输出 Alpha；默认只在传入 Alpha 且小于 1 时输出。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                           |
| -------- | ---------- | ------------------------------------ |
| `result` | `string`   | 小写 `#rrggbb` 或 `#rrggbbaa` 文本。 |

## `mixHexColors`

线性混合两种十六进制颜色，包括 Alpha 通道。

### 签名

```ts
export function mixHexColors(first: string, second: string, amount: number): string;
```

### 示例

```ts
import { mixHexColors } from "@fast-china/utils";

const result = mixHexColors("#000000", "#ffffff", 0.5);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明              |
| -------- | ---------- | ----------- | ----------------------- |
| `first`  | `string`   | 是          | `amount = 0` 时的颜色。 |
| `second` | `string`   | 是          | `amount = 1` 时的颜色。 |
| `amount` | `number`   | 是          | 0 至 1 的混合比例。     |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                       |
| -------- | ---------- | ------------------------------------------------ |
| `result` | `string`   | 小写十六进制颜色；任一输入含透明度时保留 Alpha。 |

## `mixHexColorWithBlack`

按比例向黑色混合。

### 签名

```ts
export function mixHexColorWithBlack(color: string, amount: number): string;
```

### 示例

```ts
import { mixHexColorWithBlack } from "@fast-china/utils";

const result = mixHexColorWithBlack("#409eff", 0.5);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明          |
| -------- | ---------- | ----------- | ------------------- |
| `color`  | `string`   | 是          | 合法十六进制颜色。  |
| `amount` | `number`   | 是          | 0 至 1 的混合比例。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `string`   | 混入黑色后的十六进制颜色；参数与异常语义见 。 |

## `mixHexColorWithWhite`

按比例向白色混合。

### 签名

```ts
export function mixHexColorWithWhite(color: string, amount: number): string;
```

### 示例

```ts
import { mixHexColorWithWhite } from "@fast-china/utils";

const result = mixHexColorWithWhite("#409eff", 0.5);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明          |
| -------- | ---------- | ----------- | ------------------- |
| `color`  | `string`   | 是          | 合法十六进制颜色。  |
| `amount` | `number`   | 是          | 0 至 1 的混合比例。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `string`   | 混入白色后的十六进制颜色；参数与异常语义见 。 |

## `relativeLuminance`

计算 WCAG sRGB 相对亮度。

### 签名

```ts
export function relativeLuminance(color: string): number;
```

### 示例

```ts
import { relativeLuminance } from "@fast-china/utils";

const result = relativeLuminance("#409eff");
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明         |
| ------- | ---------- | ----------- | ------------------ |
| `color` | `string`   | 是          | 合法十六进制颜色。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明          |
| -------- | ---------- | ------------------- |
| `result` | `number`   | 0 至 1 的相对亮度。 |

## `contrastRatio`

计算两种不透明颜色的 WCAG 对比度，范围 1 至 21。

### 签名

```ts
export function contrastRatio(first: string, second: string): number;
```

### 示例

```ts
import { contrastRatio } from "@fast-china/utils";

const result = contrastRatio("#000000", "#ffffff");
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明           |
| -------- | ---------- | ----------- | -------------------- |
| `first`  | `string`   | 是          | 第一种十六进制颜色。 |
| `second` | `string`   | 是          | 第二种十六进制颜色。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                   |
| -------- | ---------- | ---------------------------- |
| `result` | `number`   | 较亮颜色与较暗颜色的对比度。 |

## `pickHigherContrastColor`

从两个候选颜色中选择与背景对比度更高的一项。

### 签名

```ts
export function pickHigherContrastColor(background: string, first = "#000000", second = "#ffffff"): string;
```

### 示例

```ts
import { pickHigherContrastColor } from "@fast-china/utils";

const result = pickHigherContrastColor("#ffffff", "#000000", "#ffffff");
```

### 输入

| 输入值       | 输入值类型 | 必填/默认值          | 输入值说明           |
| ------------ | ---------- | -------------------- | -------------------- |
| `background` | `string`   | 是                   | 实际不透明背景色。   |
| `first`      | `unknown`  | 否，默认 `"#000000"` | 第一候选，默认黑色。 |
| `second`     | `unknown`  | 否，默认 `"#ffffff"` | 第二候选，默认白色。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                       |
| -------- | ---------- | ------------------------------------------------ |
| `result` | `string`   | 对比度较高的原始候选字符串；相同时返回 `first`。 |
