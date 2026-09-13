# Object 对象方法 API

本文逐项记录 `@fast-china/utils` 的 Object 对象公开函数。示例、输入和返回值均按 Fast.Utils 2.1.5 源码核对。

## `isPlainObject`

判断值是否是普通对象。

### 签名

```ts
export function isPlainObject(value: unknown): value is Record<PropertyKey, unknown>;
```

### 示例

```ts
import { isPlainObject } from "@fast-china/utils";

const result = isPlainObject({});
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------- | ---------- | ----------- | -------------- |
| `value` | `unknown`  | 是          | 任意待检查值。 |

### 返回

| 返回值   | 返回值类型                              | 返回值说明                                          |
| -------- | --------------------------------------- | --------------------------------------------------- |
| `result` | `value is Record<PropertyKey, unknown>` | 原型为 `Object.prototype` 或 `null` 时返回 `true`。 |

## `hasOwn`

安全判断对象是否拥有自己的属性。

### 签名

```ts
export function hasOwn<ObjectType extends object, Key extends PropertyKey>(value: ObjectType, key: Key): key is Key & keyof ObjectType;
```

### 示例

```ts
import { hasOwn } from "@fast-china/utils";

const result = hasOwn({}, "profile");
```

### 输入

| 输入值  | 输入值类型   | 必填/默认值 | 输入值说明                     |
| ------- | ------------ | ----------- | ------------------------------ |
| `value` | `ObjectType` | 是          | 待检查对象。                   |
| `key`   | `Key`        | 是          | 字符串、数字或 Symbol 属性键。 |

### 返回

| 返回值   | 返回值类型                      | 返回值说明                                      |
| -------- | ------------------------------- | ----------------------------------------------- |
| `result` | `key is Key & keyof ObjectType` | 属性为对象自有属性时返回 `true`，并收窄键类型。 |

## `cloneDeep`

递归创建值的深层副本。

### 签名

```ts
export function cloneDeep<Value>(value: Value): Value;
```

### 示例

```ts
import { cloneDeep } from "@fast-china/utils";

const result = cloneDeep({});
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明           |
| ------- | ---------- | ----------- | -------------------- |
| `value` | `Value`    | 是          | 需要深复制的任意值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                       |
| -------- | ---------- | ---------------------------------------------------------------- |
| `result` | `Value`    | 与输入类型一致且不共享可克隆嵌套值的新值；原始类型直接返回自身。 |

## `isEqual`

深度比较两个值是否等价。

### 签名

```ts
export function isEqual(left: unknown, right: unknown): boolean;
```

### 示例

```ts
import { isEqual } from "@fast-china/utils";

const result = isEqual([1, 2, 3], [2, 4]);
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------- | ---------- | ----------- | -------------- |
| `left`  | `unknown`  | 是          | 第一待比较值。 |
| `right` | `unknown`  | 是          | 第二待比较值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                    |
| -------- | ---------- | ----------------------------- |
| `result` | `boolean`  | 两个值深度等价时返回 `true`。 |

## `pick`

执行对应的公共工具能力。

### 签名

```ts
export function pick<Source extends object>(source: Source, keys: readonly PropertyKey[]): Partial<Source>;
```

### 示例

```ts
import { pick } from "@fast-china/utils";

const result = pick({ id: 1, name: "Fast" }, ["id"] as const);
```

### 输入

| 输入值   | 输入值类型               | 必填/默认值 | 输入值说明         |
| -------- | ------------------------ | ----------- | ------------------ |
| `source` | `Source`                 | 是          | 见签名及方法说明。 |
| `keys`   | `readonly PropertyKey[]` | 是          | 见签名及方法说明。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                   |
| -------- | ----------------- | ---------------------------- |
| `result` | `Partial<Source>` | 返回该方法计算或创建的结果。 |

## `omit`

执行对应的公共工具能力。

### 签名

```ts
export function omit<Source extends object>(source: Source, keys: readonly PropertyKey[]): Partial<Source>;
```

### 示例

```ts
import { omit } from "@fast-china/utils";

const result = omit({ id: 1, name: "Fast" }, ["id"] as const);
```

### 输入

| 输入值   | 输入值类型               | 必填/默认值 | 输入值说明         |
| -------- | ------------------------ | ----------- | ------------------ |
| `source` | `Source`                 | 是          | 见签名及方法说明。 |
| `keys`   | `readonly PropertyKey[]` | 是          | 见签名及方法说明。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                   |
| -------- | ----------------- | ---------------------------- |
| `result` | `Partial<Source>` | 返回该方法计算或创建的结果。 |

## `omitBy`

按条件排除对象的自有可枚举属性。

### 签名

```ts
export function omitBy<Source extends object>(
	source: Source,
	predicate: (value: Source[keyof Source], key: keyof Source, source: Source) => unknown
): Partial<Source>;
```

### 示例

```ts
import { omitBy } from "@fast-china/utils";

const result = omitBy({ id: 1, name: "Fast" }, (_value, key) => key === "id");
```

### 输入

| 输入值      | 输入值类型                                                                    | 必填/默认值 | 输入值说明                                     |
| ----------- | ----------------------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `source`    | `Source`                                                                      | 是          | 不会被修改的源对象。                           |
| `predicate` | `(value: Source[keyof Source], key: keyof Source, source: Source) => unknown` | 是          | 接收属性值、键和源对象；返回真值时排除该属性。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                 |
| -------- | ----------------- | -------------------------- |
| `result` | `Partial<Source>` | 由未匹配属性组成的新对象。 |

## `pickBy`

按条件选择对象的自有可枚举属性。

### 签名

```ts
export function pickBy<Source extends object>(
	source: Source,
	predicate: (value: Source[keyof Source], key: keyof Source, source: Source) => unknown
): Partial<Source>;
```

### 示例

```ts
import { pickBy } from "@fast-china/utils";

const result = pickBy({ id: 1, name: "Fast" }, (_value, key) => key === "name");
```

### 输入

| 输入值      | 输入值类型                                                                    | 必填/默认值 | 输入值说明                                     |
| ----------- | ----------------------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `source`    | `Source`                                                                      | 是          | 不会被修改的源对象。                           |
| `predicate` | `(value: Source[keyof Source], key: keyof Source, source: Source) => unknown` | 是          | 接收属性值、键和源对象；返回真值时保留该属性。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明               |
| -------- | ----------------- | ------------------------ |
| `result` | `Partial<Source>` | 由匹配属性组成的新对象。 |

## `mapValues`

映射对象的自有可枚举属性值。

### 签名

```ts
export function mapValues<Source extends object, Result>(
	source: Source,
	mapper: (value: Source[keyof Source], key: keyof Source, source: Source) => Result
): { [Key in keyof Source]: Result };
```

### 示例

```ts
import { mapValues } from "@fast-china/utils";

const result = mapValues({ first: 1, second: 2 }, (value) => value * 2);
```

### 输入

| 输入值   | 输入值类型                                                                   | 必填/默认值 | 输入值说明                     |
| -------- | ---------------------------------------------------------------------------- | ----------- | ------------------------------ |
| `source` | `Source`                                                                     | 是          | 不会被修改的源对象。           |
| `mapper` | `(value: Source[keyof Source], key: keyof Source, source: Source) => Result` | 是          | 接收值、键和源对象的映射函数。 |

### 返回

| 返回值   | 返回值类型                          | 返回值说明         |
| -------- | ----------------------------------- | ------------------ |
| `result` | `{ [Key in keyof Source]: Result }` | 保留原键的新对象。 |

## `shallowEqual`

对自有可枚举属性执行 SameValue 浅比较。

### 签名

```ts
export function shallowEqual(left: object, right: object): boolean;
```

### 示例

```ts
import { shallowEqual } from "@fast-china/utils";

const result = shallowEqual([1, 2, 3], [2, 4]);
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明 |
| ------- | ---------- | ----------- | ---------- |
| `left`  | `object`   | 是          | 第一对象。 |
| `right` | `object`   | 是          | 第二对象。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                               |
| -------- | ---------- | -------------------------------------------------------- |
| `result` | `boolean`  | 自有可枚举键集合与对应值均满足 SameValue 时返回 `true`。 |

## `toQueryString`

将对象序列化为标准 URL 查询字符串。

### 签名

```ts
export function toQueryString(value: Readonly<Record<string, QueryValue>>, options: QueryStringOptions = {}): string;
```

### 示例

```ts
import { toQueryString } from "@fast-china/utils";

const result = toQueryString({ page: 1, tag: ["vue", "tsx"] });
```

### 输入

| 输入值    | 输入值类型                             | 必填/默认值   | 输入值说明                 |
| --------- | -------------------------------------- | ------------- | -------------------------- |
| `value`   | `Readonly<Record<string, QueryValue>>` | 是            | 查询参数对象。             |
| `options` | `QueryStringOptions`                   | 否，默认 `{}` | 排序、空格和问号前缀选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                           |
| -------- | ---------- | ---------------------------------------------------- |
| `result` | `string`   | URL 编码后的查询字符串；没有参数时始终返回空字符串。 |
