# Array 数组方法 API

本文逐项记录 `@fast-china/utils` 的 Array 数组公开函数。示例、输入和返回值均按 Fast.Utils 2.1.7 源码核对。

## `chunk`

将只读数组按固定大小分组。

### 签名

```ts
export function chunk<Item>(items: readonly Item[], size: number): Item[][];
```

### 示例

```ts
import { chunk } from "@fast-china/utils";

const result = chunk([1, 2, 3], 2);
```

### 输入

| 输入值  | 输入值类型        | 必填/默认值 | 输入值说明                               |
| ------- | ----------------- | ----------- | ---------------------------------------- |
| `items` | `readonly Item[]` | 是          | 不会被修改的输入数组。                   |
| `size`  | `number`          | 是          | 每组最多包含的项目数，必须是正安全整数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                |
| -------- | ---------- | ----------------------------------------- |
| `result` | `Item[][]` | 新建的二维数组；最后一组可能小于 `size`。 |

## `removeNullishValues`

删除数组中的 `null` 与 `undefined`，保留 `false`、`0` 和空字符串。

### 签名

```ts
export function removeNullishValues<Item>(items: readonly (Item | null | undefined)[]): Item[];
```

### 示例

```ts
import { removeNullishValues } from "@fast-china/utils";

const result = removeNullishValues([1, null, 2, undefined, 3]);
```

### 输入

| 输入值  | 输入值类型                               | 必填/默认值 | 输入值说明             |
| ------- | ---------------------------------------- | ----------- | ---------------------- |
| `items` | `readonly (Item \| null \| undefined)[]` | 是          | 可包含空值的只读数组。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明           |
| -------- | ---------- | -------------------- |
| `result` | `Item[]`   | 保持原顺序的新数组。 |

## `unique`

使用 JavaScript `Set` 的 SameValueZero 语义去重。

### 签名

```ts
export function unique<Item>(items: readonly Item[]): Item[];
```

### 示例

```ts
import { unique } from "@fast-china/utils";

const result = unique([1, 2, 2, 3]);
```

### 输入

| 输入值  | 输入值类型        | 必填/默认值 | 输入值说明             |
| ------- | ----------------- | ----------- | ---------------------- |
| `items` | `readonly Item[]` | 是          | 不会被修改的输入数组。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                           |
| -------- | ---------- | ---------------------------------------------------- |
| `result` | `Item[]`   | 保留每个值首次出现顺序的新数组；稀疏数组空位被忽略。 |

## `uniqueBy`

按选择器返回的键去重。

### 签名

```ts
export function uniqueBy<Item, Key>(items: readonly Item[], selectKey: KeySelector<Item, Key>): Item[];
```

### 示例

```ts
import { uniqueBy } from "@fast-china/utils";

const result = uniqueBy([1, 2, 3], (item) => item);
```

### 输入

| 输入值      | 输入值类型               | 必填/默认值 | 输入值说明                         |
| ----------- | ------------------------ | ----------- | ---------------------------------- |
| `items`     | `readonly Item[]`        | 是          | 不会被修改的输入数组。             |
| `selectKey` | `KeySelector<Item, Key>` | 是          | 接收项目与索引并返回去重键的函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                           |
| -------- | ---------- | ---------------------------------------------------- |
| `result` | `Item[]`   | 保留每个键首次出现项目的新数组；稀疏数组空位被忽略。 |

## `groupBy`

按选择器结果分组。

### 签名

```ts
export function groupBy<Item, Key>(items: readonly Item[], selectKey: KeySelector<Item, Key>): Map<Key, Item[]>;
```

### 示例

```ts
import { groupBy } from "@fast-china/utils";

const result = groupBy([1, 2, 3], (item) => item);
```

### 输入

| 输入值      | 输入值类型               | 必填/默认值 | 输入值说明                |
| ----------- | ------------------------ | ----------- | ------------------------- |
| `items`     | `readonly Item[]`        | 是          | 不会被修改的输入数组。    |
| `selectKey` | `KeySelector<Item, Key>` | 是          | 返回任意 `Map` 键的函数。 |

### 返回

| 返回值   | 返回值类型         | 返回值说明                                                           |
| -------- | ------------------ | -------------------------------------------------------------------- |
| `result` | `Map<Key, Item[]>` | 按键首次出现顺序排列的 `Map`；每个分组保持输入顺序，稀疏空位被忽略。 |

## `partition`

按谓词把数组拆分为匹配项和非匹配项。

### 签名

```ts
export function partition<Item>(items: readonly Item[], predicate: (item: Item, index: number) => boolean): [matched: Item[], unmatched: Item[]];
```

### 示例

```ts
import { partition } from "@fast-china/utils";

const result = partition([1, 2, 3], (item) => item > 1);
```

### 输入

| 输入值      | 输入值类型                               | 必填/默认值 | 输入值说明                 |
| ----------- | ---------------------------------------- | ----------- | -------------------------- |
| `items`     | `readonly Item[]`                        | 是          | 不会被修改的输入数组。     |
| `predicate` | `(item: Item, index: number) => boolean` | 是          | 接收项目与索引的判断函数。 |

### 返回

| 返回值   | 返回值类型                             | 返回值说明                                                             |
| -------- | -------------------------------------- | ---------------------------------------------------------------------- |
| `result` | `[matched: Item[], unmatched: Item[]]` | 二元组：第一项匹配谓词，第二项不匹配；两组都保持原顺序并忽略稀疏空位。 |

## `difference`

返回只出现在左侧数组中的不同值。

### 签名

```ts
export function difference<Item>(left: readonly Item[], right: readonly Item[]): Item[];
```

### 示例

```ts
import { difference } from "@fast-china/utils";

const result = difference([1, 2, 3], [2, 4]);
```

### 输入

| 输入值  | 输入值类型        | 必填/默认值 | 输入值说明     |
| ------- | ----------------- | ----------- | -------------- |
| `left`  | `readonly Item[]` | 是          | 主输入数组。   |
| `right` | `readonly Item[]` | 是          | 需要排除的值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                             |
| -------- | ---------- | ------------------------------------------------------ |
| `result` | `Item[]`   | 保留左侧首次出现顺序的去重结果；两侧稀疏空位都被忽略。 |

## `intersection`

返回两个数组共有的不同值。

### 签名

```ts
export function intersection<Item>(left: readonly Item[], right: readonly Item[]): Item[];
```

### 示例

```ts
import { intersection } from "@fast-china/utils";

const result = intersection([1, 2, 3], [2, 4]);
```

### 输入

| 输入值  | 输入值类型        | 必填/默认值 | 输入值说明           |
| ------- | ----------------- | ----------- | -------------------- |
| `left`  | `readonly Item[]` | 是          | 决定结果顺序的数组。 |
| `right` | `readonly Item[]` | 是          | 用于成员判断的数组。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                             |
| -------- | ---------- | ------------------------------------------------------ |
| `result` | `Item[]`   | 保留左侧首次出现顺序的去重结果；两侧稀疏空位都被忽略。 |

## `symmetricDifference`

返回只存在于其中一个数组的不同值。

### 签名

```ts
export function symmetricDifference<Item>(left: readonly Item[], right: readonly Item[]): Item[];
```

### 示例

```ts
import { symmetricDifference } from "@fast-china/utils";

const result = symmetricDifference([1, 2, 3], [2, 4]);
```

### 输入

| 输入值  | 输入值类型        | 必填/默认值 | 输入值说明               |
| ------- | ----------------- | ----------- | ------------------------ |
| `left`  | `readonly Item[]` | 是          | 决定左侧结果顺序的数组。 |
| `right` | `readonly Item[]` | 是          | 决定右侧结果顺序的数组。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                                            |
| -------- | ---------- | ------------------------------------------------------------------------------------- |
| `result` | `Item[]`   | 先按左侧、再按右侧首次出现顺序排列的对称差集；使用 SameValueZero 比较并忽略稀疏空位。 |

## `hasDuplicatesBy`

判断选择器产生的键是否重复。

### 签名

```ts
export function hasDuplicatesBy<Item, Key>(items: readonly Item[], selectKey: KeySelector<Item, Key>): boolean;
```

### 示例

```ts
import { hasDuplicatesBy } from "@fast-china/utils";

const result = hasDuplicatesBy([1, 2, 3], (item) => item);
```

### 输入

| 输入值      | 输入值类型               | 必填/默认值 | 输入值说明                                        |
| ----------- | ------------------------ | ----------- | ------------------------------------------------- |
| `items`     | `readonly Item[]`        | 是          | 不会被修改的输入数组。                            |
| `selectKey` | `KeySelector<Item, Key>` | 是          | 返回比较键的函数；键使用 SameValueZero 语义比较。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                        |
| -------- | ---------- | --------------------------------- |
| `result` | `boolean`  | 存在至少一个重复键时返回 `true`。 |

## `allEqualBy`

判断所有项目是否具有相同的选择器结果。

### 签名

```ts
export function allEqualBy<Item, Key>(items: readonly Item[], selectKey: KeySelector<Item, Key>): boolean;
```

### 示例

```ts
import { allEqualBy } from "@fast-china/utils";

const result = allEqualBy([1, 2, 3], (item) => item);
```

### 输入

| 输入值      | 输入值类型               | 必填/默认值 | 输入值说明             |
| ----------- | ------------------------ | ----------- | ---------------------- |
| `items`     | `readonly Item[]`        | 是          | 不会被修改的输入数组。 |
| `selectKey` | `KeySelector<Item, Key>` | 是          | 返回比较键的函数。     |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                     |
| -------- | ---------- | ---------------------------------------------- |
| `result` | `boolean`  | 所有键都满足 SameValueZero 相等时返回 `true`。 |
