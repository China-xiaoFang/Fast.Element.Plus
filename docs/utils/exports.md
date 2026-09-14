# Fast.Utils 完整导出清单

以下模块不再只列举名称；每个模块均链接到逐方法文档，每个公开函数都包含实际调用示例、输入值、输入类型、输入说明、返回值、返回类型及返回说明。导出对象及返回函数上的方法另见[对象方法 API](./object-methods)。

| 模块        | 逐方法文档                 |
| ----------- | -------------------------- |
| Array       | [查看](./methods/array)    |
| Async       | [查看](./methods/async)    |
| Base64      | [查看](./methods/base64)   |
| Color       | [查看](./methods/color)    |
| Crypto      | [查看](./methods/crypto)   |
| Date        | [查看](./methods/date)     |
| DOM         | [查看](./methods/dom)      |
| Environment | [查看](./methods/env)      |
| Function    | [查看](./methods/function) |
| Identity    | [查看](./methods/identity) |
| Logger      | [查看](./methods/logger)   |
| Number      | [查看](./methods/number)   |
| Object      | [查看](./methods/object)   |
| Storage     | [查看](./methods/storage)  |
| String      | [查看](./methods/string)   |
| Vue         | [查看](./methods/vue)      |

以下清单按 `@fast-china/utils` 2.1.7 根入口逐模块核对。全部成员均从包根具名导入，不存在公开模块子路径；类型成员使用 `import type`。具体存储、密码学、错误与跨端约束见 [API 参考](./api) 和[运行时契约](./runtime-contract)。

```ts
import { chunk, sleep, encodeBase64, parseHexColor, addDays, addCssUnit, isBrowser, once, clamp, pick, Local, camelCase } from "@fast-china/utils";

const pages = chunk([1, 2, 3, 4], 2);
await sleep(20);
const encoded = encodeBase64("Fast");
const color = parseHexColor("#409eff");
const tomorrow = addDays(new Date(), 1);
const size = addCssUnit(24);
const browser = isBrowser();
const initialize = once(() => ({ ready: true }));
const progress = clamp(120, 0, 100);
const selected = pick({ id: 1, name: "Fast" }, ["id"] as const);
Local.set("profile", selected);
const className = camelCase("fast-element-plus");
```

## Array

- 类型：`KeySelector`。
- 函数：`chunk`、`removeNullishValues`、`unique`、`uniqueBy`、`groupBy`、`partition`、`difference`、`intersection`、`symmetricDifference`、`hasDuplicatesBy`、`allEqualBy`。

## Async

- 类型：`AbortOptions`、`TimeoutOptions`、`RetryContext`、`RetryOptions`、`ConcurrentMapOptions`、`DebouncedFunction`、`ThrottledFunction`。
- 函数：`sleep`、`withTimeout`、`retry`、`mapConcurrent`、`debounce`、`throttle`。

异步 API 保留原始失败原因；取消通过 `AbortSignal` 传播。`debounce` 与 `throttle` 返回的函数公开 `cancel`、`flush` 和 `pending`。

## Base64

- 类型：`DecodedText`。
- 函数：`encodeBase64Bytes`、`decodeBase64Bytes`、`encodeBase64`、`decodeBase64`、`encodeBase64UrlBytes`、`decodeBase64UrlBytes`、`encodeBase64Url`、`decodeBase64Url`、`encodeLatin1Base64`、`decodeLatin1Base64`、`encodeSecureBase64`、`decodeSecureBase64`。

`DecodedText` 可作为普通字符串使用；只有显式调用 `.parseJson<T>()` 才尝试解析 JSON。SecureBase64 是兼容编码，不是加密。

## Color

- 类型：`RgbColor`、`RgbaColor`。
- 函数：`parseHexColor`、`formatHexColor`、`mixHexColors`、`mixHexColorWithBlack`、`mixHexColorWithWhite`、`relativeLuminance`、`contrastRatio`、`pickHigherContrastColor`。

## Crypto

- 类型：`AesCipherMode`、`AesPaddingMode`、`PemKeyPair`、`EcNamedCurve`。
- 随机与比较：`GenerateRandomBytes`、`FixedTimeEquals`。
- 摘要：`MD5Encrypt`、`SHA1Encrypt`、`SHA256Bytes`、`SHA256Encrypt`、`SHA384Bytes`、`SHA384Encrypt`、`SHA512Bytes`、`SHA512Encrypt`。
- HMAC 与派生：`HMACSHA256Encrypt`、`HMACSHA384Encrypt`、`HMACSHA512Encrypt`、`PBKDF2SHA256`、`HashPasswordPBKDF2SHA256`、`VerifyPasswordPBKDF2SHA256`、`HKDFSHA256`。
- AES：`AESEncrypt`、`AESDecrypt`、`AESEncryptAuthenticated`、`AESDecryptAuthenticated`、`AESEncryptWithPassword`、`AESDecryptWithPassword`。
- RSA：`GenerateRSAKeyPair`、`RSAEncryptOAEP`、`RSADecryptOAEP`、`RSASignPSS`、`RSAVerifyPSS`。
- EC：`GenerateECDSAKeyPair`、`ECDSASign`、`ECDSAVerify`、`GenerateECDHKeyPair`、`DeriveECDHSecret`、`DeriveECDHKeySHA256`。

```ts
import { AESDecryptWithPassword, AESEncryptWithPassword, HashPasswordPBKDF2SHA256, VerifyPasswordPBKDF2SHA256 } from "@fast-china/utils";

const payload = await AESEncryptWithPassword("message", "password");
const plaintext = await AESDecryptWithPassword(payload, "password");
const passwordHash = await HashPasswordPBKDF2SHA256("password");
const valid = await VerifyPasswordPBKDF2SHA256("password", passwordHash);
```

## Date

- 类型：`DateInput`、`RelativeTimeOptions`、`DateShortcut`、`DateRangeShortcut`。
- 函数：`toDate`、`isValidDate`、`startOfDay`、`endOfDay`、`addDays`、`addMonths`、`addYears`、`isSameDay`、`isFuture`、`getLocalDayBounds`、`isWithinInterval`、`formatRelativeTime`、`formatChineseRelativeTime`、`createOneMonthRangeFromToday`、`isDateAfterNow`、`getLocalTimeGreeting`、`createDateRangeShortcuts`、`createDateShortcuts`、`getStartOfToday`。

## DOM

- 类型：`StyleValue`、`StyleObject`、`StyleInput`。
- 函数：`addCssUnit`、`serializeStyle`。

## Environment

- 类型：`RuntimeKind`。
- 函数：`isBrowser`、`isWebWorker`、`isNode`、`isUniApp`、`hasWebCrypto`、`detectRuntime`、`isMobileUserAgent`、`isTabletUserAgent`。

检测结果只描述当前能力或 User-Agent，不承诺目标平台支持全部库功能。

## Function 与 Identity

- Function：`once`。
- Identity 类型：`InstallationIdentityConfiguration`、`InstallationIdentity`。
- Identity 值：`configureInstallationIdentity`、`installationIdentity`、`getOrCreateInstallationId`。

安装标识只标识当前存储空间中的安装实例，不是认证凭证、硬件标识或秘密。

## Logger

- 类型：`LogLevel`、`LoggerSink`、`LoggerOptions`、`Logger`。
- 值：`createLogger`、`configureLogger`、`logger`。

## Number

- 类型：`FormatBytesOptions`。
- 函数：`clamp`、`inRange`、`roundTo`、`sum`、`average`、`lerp`、`formatBytes`、`randomInt`。

## Object 与 Query

- 类型：`QueryPrimitive`、`QueryValue`、`QueryStringOptions`。
- 函数：`isPlainObject`、`hasOwn`、`cloneDeep`、`isEqual`、`pick`、`omit`、`omitBy`、`pickBy`、`mapValues`、`shallowEqual`、`toQueryString`。

## Storage

- 类型：`StorageCodec`、`StorageConfiguration`、`StorageReadOptions`、`StorageWriteOptions`、`StorageArea`。
- 值：`base64StorageCodec`、`Local`、`Session`、`configureStorage`、`isStorageConfigured`。

## String

- 类型：`ParsedQueryParameters`、`StringLocale`。
- 函数：`decodeURIComponentRepeatedly`、`parseQueryString`、`isValidJson`、`splitWords`、`upperFirst`、`lowerFirst`、`camelCase`、`pascalCase`、`kebabCase`、`truncateGraphemes`、`copy`、`randomString`、`generateUuidV4`、`isUuidV4`、`escapeHtml`、`normalizeWhitespace`。

## Vue

- 类型：`AwaitableFunction`、`Breakpoints`、`ElementSize`、`EmitHandlers`、`EventTargetSource`、`ResizeObserverTarget`、`UseBreakpointsReturn`、`UseElementSizeReturn`、`UseWindowSizeReturn`、`VueInstallValue`、`Installable`、`TSXWithInstall`、`TypedSlots`、`TypedSlotsDeclaration`。
- 函数：`callOptionalFunction`、`useBreakpoints`、`useElementSize`、`useEmits`、`useEventListener`、`useExpose`、`useNow`、`useResizeObserver`、`useWindowSize`、`definePropType`、`useProps`、`useRender`、`makeSlots`、`withDefineType`、`withInstall`、`withNoopInstall`、`withInstallDirective`。

```ts
import { definePropType, makeSlots, withInstall } from "@fast-china/utils";
import { defineComponent } from "vue";

const slots = makeSlots<{ default: () => unknown }>();
const valueType = definePropType<string>(String);
const component = withInstall(defineComponent({ name: "ExampleComponent", props: { value: valueType }, slots }));
```

Vue Helper 是组件库作者能力。普通业务应用通常只需要数据、异步、环境和 Storage API。
