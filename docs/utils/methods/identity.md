# Identity 安装标识方法 API

本文逐项记录 `@fast-china/utils` 的 Identity 安装标识公开函数。示例、输入和返回值均按 Fast.Utils 2.1.8 源码核对。

## `configureInstallationIdentity`

在应用入口配置安装标识使用的 Storage 业务键。

### 签名

```ts
export function configureInstallationIdentity(options: InstallationIdentityConfiguration = {}): void;
```

### 示例

```ts
import { configureInstallationIdentity } from "@fast-china/utils";

configureInstallationIdentity({ cacheKey: "identity:device" });
```

### 输入

| 输入值    | 输入值类型                          | 必填/默认值   | 输入值说明                                                        |
| --------- | ----------------------------------- | ------------- | ----------------------------------------------------------------- |
| `options` | `InstallationIdentityConfiguration` | 否，默认 `{}` | 安装标识配置；省略 `cacheKey` 时使用 `identity:installation-id`。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `getOrCreateInstallationId`

返回已有安装标识，否则创建并持久化一个 UUID v4。

### 签名

```ts
export function getOrCreateInstallationId(installationId?: string): string;
```

### 示例

```ts
import { getOrCreateInstallationId } from "@fast-china/utils";

const result = getOrCreateInstallationId();
```

### 输入

| 输入值           | 输入值类型 | 必填/默认值 | 输入值说明                                           |
| ---------------- | ---------- | ----------- | ---------------------------------------------------- |
| `installationId` | `string`   | 否          | 可选的显式安装标识；传入时会校验并覆盖当前持久化值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                           |
| -------- | ---------- | ---------------------------------------------------- |
| `result` | `string`   | 显式值、内存值、持久化值或新生成值中的最终安装标识。 |
