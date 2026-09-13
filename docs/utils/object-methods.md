# Fast.Utils 对象方法 API

本页补充根入口导出对象、返回函数与扩展类型上的全部公开方法；顶层函数见各模块方法页。

## `Local.get / Session.get`

读取并解码当前命名空间的业务值；过期记录会被删除。

### 签名

```ts
get<Value = string>(key: string, options?: StorageReadOptions): Value | undefined;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

const result = Local.get<{ name: string }>("profile");
```

### 输入

| 输入值    | 输入值类型           | 必填/默认值 | 输入值说明                                 |
| --------- | -------------------- | ----------- | ------------------------------------------ |
| `key`     | `string`             | 是          | 不含全局前缀的非空业务键。                 |
| `options` | `StorageReadOptions` | 否          | 单次 Base64 Codec 覆盖，必须与写入时一致。 |

### 返回

| 返回值   | 返回值类型           | 返回值说明                                       |
| -------- | -------------------- | ------------------------------------------------ |
| `result` | `Value \| undefined` | 解码后的业务值；键缺失或过期时返回 `undefined`。 |

## `Local.set / Session.set`

编码并写入业务值，可附加 TTL。

### 签名

```ts
set<Value>(key: string, value: Value, options?: StorageWriteOptions): void;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

Local.set("profile", { name: "Fast" }, { ttlMs: 3_600_000 });
```

### 输入

| 输入值    | 输入值类型            | 必填/默认值 | 输入值说明                      |
| --------- | --------------------- | ----------- | ------------------------------- |
| `key`     | `string`              | 是          | 不含全局前缀的非空业务键。      |
| `value`   | `Value`               | 是          | 当前 Codec 能够序列化的业务值。 |
| `options` | `StorageWriteOptions` | 否          | 单次 Codec 与有效毫秒数。       |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `void`     | 没有返回值；非法键、TTL、值或后端失败时抛错。 |

## `Local.has / Session.has`

判断业务键是否存在、未过期并且能够成功读取。

### 签名

```ts
has(key: string): boolean;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

const result = Local.has("profile");
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                 |
| ------ | ---------- | ----------- | -------------------------- |
| `key`  | `string`   | 是          | 不含全局前缀的非空业务键。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                    |
| -------- | ---------- | ----------------------------- |
| `result` | `boolean`  | 键存在且包络有效时为 `true`。 |

## `Local.keys / Session.keys`

枚举当前命名空间的业务键。

### 签名

```ts
keys(): string[];
```

### 示例

```ts
import { Local } from "@fast-china/utils";

const result = Local.keys();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                           |
| -------- | ---------- | ------------------------------------ |
| `result` | `string[]` | 移除物理前缀并按字典序排列的新数组。 |

## `Local.remove / Session.remove`

幂等删除单个业务键。

### 签名

```ts
remove(key: string): void;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

Local.remove("profile");
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                 |
| ------ | ---------- | ----------- | -------------------------- |
| `key`  | `string`   | 是          | 不含全局前缀的非空业务键。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `Local.removeByPrefix / Session.removeByPrefix`

删除当前命名空间中以指定文本开头的全部业务键。

### 签名

```ts
removeByPrefix(keyPrefix: string): void;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

Local.removeByPrefix("profile:");
```

### 输入

| 输入值      | 输入值类型 | 必填/默认值 | 输入值说明                     |
| ----------- | ---------- | ----------- | ------------------------------ |
| `keyPrefix` | `string`   | 是          | 不含全局前缀的非空业务键前缀。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `void`     | 没有返回值；不会影响命名空间以外的键。 |

## `Local.pruneExpired / Session.pruneExpired`

扫描并删除当前命名空间的全部过期记录。

### 签名

```ts
pruneExpired(): number;
```

### 示例

```ts
import { Local } from "@fast-china/utils";

const result = Local.pruneExpired();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明               |
| -------- | ---------- | ------------------------ |
| `result` | `number`   | 本次实际删除的记录数量。 |

## `Local.clear / Session.clear`

清空当前命名空间，不影响同一后端的其他应用键。

### 签名

```ts
clear(): void;
```

### 示例

```ts
import { Session } from "@fast-china/utils";

Session.clear();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `installationIdentity.getOrCreate`

按显式值、内存值、持久化值、随机值的顺序取得安装 UUID。

### 签名

```ts
getOrCreate(installationId?: string): string;
```

### 示例

```ts
import { installationIdentity } from "@fast-china/utils";

const result = installationIdentity.getOrCreate();
```

### 输入

| 输入值           | 输入值类型 | 必填/默认值 | 输入值说明                       |
| ---------------- | ---------- | ----------- | -------------------------------- |
| `installationId` | `string`   | 否          | 需要覆盖当前值时传入的 UUID v4。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `string`   | 已校验并写入内存和 Local Storage 的 UUID v4。 |

## `installationIdentity.read`

读取并校验持久化的安装标识，不修改内存中的 `deviceId`。

### 签名

```ts
read(): string | undefined;
```

### 示例

```ts
import { installationIdentity } from "@fast-china/utils";

const result = installationIdentity.read();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型            | 返回值说明                                   |
| -------- | --------------------- | -------------------------------------------- |
| `result` | `string \| undefined` | 持久化 UUID v4；缺失或过期时为 `undefined`。 |

## `installationIdentity.clear`

删除持久化标识并清空内存中的 `deviceId`。

### 签名

```ts
clear(): void;
```

### 示例

```ts
import { installationIdentity } from "@fast-china/utils";

installationIdentity.clear();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `DecodedText.parseJson`

显式尝试把解码或解密后的原始字符串解析为 JSON。

### 签名

```ts
parseJson<Value = any>(): Value;
```

### 示例

```ts
import { decodeBase64 } from "@fast-china/utils";

const text = decodeBase64("eyJpZCI6MX0=");
const result = text.parseJson<{ id: number }>();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                                                             |
| -------- | ---------- | ---------------------------------------------------------------------- |
| `result` | `Value`    | 合法 JSON 的解析结果；无效 JSON 返回原始字符串。泛型不执行运行时校验。 |

## `DebouncedFunction.cancel`

取消尚未执行的防抖批次，并拒绝该批次所有 Promise。

### 签名

```ts
cancel(reason?: unknown): void;
```

### 示例

```ts
import { debounce } from "@fast-china/utils";

const save = debounce(async () => "saved");
const pending = save();
save.cancel(new Error("cancelled"));
await pending.catch(() => undefined);
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明                                   |
| -------- | ---------- | ----------- | -------------------------------------------- |
| `reason` | `unknown`  | 否          | Promise 的拒绝原因；省略时使用内部取消错误。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `DebouncedFunction.flush`

立即执行待处理的防抖批次。

### 签名

```ts
flush(): Promise<Result> | undefined;
```

### 示例

```ts
import { debounce } from "@fast-china/utils";

const save = debounce(async () => "saved");
save();
const result = await save.flush();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型                     | 返回值说明                                         |
| -------- | ------------------------------ | -------------------------------------------------- |
| `result` | `Promise<Result> \| undefined` | 共享执行 Promise；没有待处理批次时为 `undefined`。 |

## `DebouncedFunction.pending`

检查是否存在尚未开始的防抖批次。

### 签名

```ts
pending(): boolean;
```

### 示例

```ts
import { debounce } from "@fast-china/utils";

const save = debounce(() => 1);
save();
const result = save.pending();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                |
| -------- | ---------- | ------------------------- |
| `result` | `boolean`  | 存在等待批次时为 `true`。 |

## `ThrottledFunction.cancel`

提前结束节流冷却期；不会取消已经开始的操作。

### 签名

```ts
cancel(): void;
```

### 示例

```ts
import { throttle } from "@fast-china/utils";

const update = throttle(() => 1);
update.cancel();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `ThrottledFunction.pending`

检查节流回调是否正在执行或仍处于冷却期。

### 签名

```ts
pending(): boolean;
```

### 示例

```ts
import { throttle } from "@fast-china/utils";

const update = throttle(() => 1);
update();
const result = update.pending();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                  |
| -------- | ---------- | --------------------------- |
| `result` | `boolean`  | 执行中或冷却中时为 `true`。 |

## `logger.debug / logger.log / logger.warn / logger.error`

按指定级别向当前 Logger Sink 输出一条带作用域的日志。四个方法具有相同输入和 `void` 返回契约。

### 签名

```ts
debug(scope: string, ...content: unknown[]): void;
log(scope: string, ...content: unknown[]): void;
warn(scope: string, ...content: unknown[]): void;
error(scope: string, ...content: unknown[]): void;
```

### 示例

```ts
import { logger } from "@fast-china/utils";

logger.debug("startup", "initializing");
logger.log("api", "request completed", { status: 200 });
logger.warn("cache", "entry expired");
logger.error("api", "request failed", new Error("network"));
```

### 输入

| 输入值       | 输入值类型  | 必填/默认值  | 输入值说明                                 |
| ------------ | ----------- | ------------ | ------------------------------------------ |
| `scope`      | `string`    | 是           | 无外围空白的非空模块、组件或业务来源名称。 |
| `...content` | `unknown[]` | 否，可传多个 | 消息和附加值；非字符串值保持原始类型。     |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `void`     | 没有返回值；低于最低日志级别时不输出。 |

## `Installable.install`

把 `withInstall`、`withNoopInstall` 或 `withInstallDirective` 返回值安装到 Vue App。

### 签名

```ts
install(app: App): void;
```

### 示例

```ts
import { createApp } from "vue";
import { FastComponent } from "./component";

const app = createApp({});
app.use(FastComponent);
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                                         |
| ------ | ---------- | ----------- | -------------------------------------------------- |
| `app`  | `App`      | 是          | 提供 `component()` 与 `directive()` 的 Vue 3 App。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `void`     | 没有返回值；组件或指令名称非法时抛错。 |
