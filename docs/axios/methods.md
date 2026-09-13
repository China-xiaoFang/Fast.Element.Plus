# Fast.Axios 方法 API

本页逐项记录根入口、容器、处理器、uni-app 扩展及构建插件的公开可调用方法。

## `createFastAxios`

创建或更新全局 FastAxios 容器，也可以返回不写入单例的独立容器。

### 签名

```ts
createFastAxios(options?: InitializeOptions, newInstance?: boolean): FastAxios;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const result = createFastAxios({ baseUrl: "/api", timeout: 30_000, requestCipher: false });
```

### 输入

| 输入值        | 输入值类型          | 必填/默认值      | 输入值说明                                   |
| ------------- | ------------------- | ---------------- | -------------------------------------------- |
| `options`     | `InitializeOptions` | 否               | 基础地址、超时、公共请求头和全局加解密开关。 |
| `newInstance` | `boolean`           | 否，默认 `false` | 为 `true` 时创建不影响全局单例的独立容器。   |

### 返回

| 返回值   | 返回值类型  | 返回值说明                     |
| -------- | ----------- | ------------------------------ |
| `result` | `FastAxios` | 全局单例或新建的独立配置容器。 |

## `useFastAxios`

取得已经初始化的 FastAxios 全局单例。

### 签名

```ts
useFastAxios(): FastAxios;
```

### 示例

```ts
import { createFastAxios, useFastAxios } from "@fast-china/axios";

createFastAxios({ baseUrl: "/api" });
const result = useFastAxios();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型  | 返回值说明                                     |
| -------- | ----------- | ---------------------------------------------- |
| `result` | `FastAxios` | 已初始化的全局容器；尚未初始化时抛出 `Error`。 |

## `fastAxios.setOptions`

合并基础配置；Headers 按字段合并，其他显式值直接覆盖。

### 签名

```ts
setOptions(options?: InitializeOptions): this;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

const result = fastAxios.setOptions({ timeout: 15_000, headers: { Authorization: "Bearer token" } });
```

### 输入

| 输入值    | 输入值类型          | 必填/默认值   | 输入值说明           |
| --------- | ------------------- | ------------- | -------------------- |
| `options` | `InitializeOptions` | 否，默认 `{}` | 需要更新的基础配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明               |
| -------- | ---------- | ------------------------ |
| `result` | `this`     | 当前容器，支持链式调用。 |

## `fastAxios.addErrorCode`

添加或覆盖单个错误提示；也支持一次传入错误码映射。

### 签名

```ts
addErrorCode(key: string | number, message: string): FastAxios;
addErrorCode(codes: Record<string | number, string>): FastAxios;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.addErrorCode(40101, "登录状态已失效");
const result = fastAxios.addErrorCode({ 40102: "账号已停用", CUSTOM_ERROR: "自定义错误" });
```

### 输入

| 输入值    | 输入值类型                         | 必填/默认值  | 输入值说明                       |
| --------- | ---------------------------------- | ------------ | -------------------------------- |
| `key`     | `string \| number`                 | 单值重载必填 | HTTP、Axios 或 Fast 业务错误码。 |
| `message` | `string`                           | 单值重载必填 | 展示给用户的提示。               |
| `codes`   | `Record<string \| number, string>` | 映射重载必填 | 批量错误码与提示映射。           |

### 返回

| 返回值   | 返回值类型  | 返回值说明               |
| -------- | ----------- | ------------------------ |
| `result` | `FastAxios` | 当前容器，支持链式调用。 |

## `axiosUtil.request`

按照 Fast 请求约定执行 Axios 请求。

### 签名

```ts
request<Output = unknown, Input = unknown>(config: FastAxiosRequestConfig<Input>): Promise<Output>;
```

### 示例

```ts
import { axiosUtil } from "@fast-china/axios";

interface User {
	id: number;
	name: string;
}
const result = await axiosUtil.request<User, { name: string }>({ url: "/users", method: "post", requestType: "add", data: { name: "Fast" } });
```

### 输入

| 输入值   | 输入值类型                      | 必填/默认值 | 输入值说明                               |
| -------- | ------------------------------- | ----------- | ---------------------------------------- |
| `config` | `FastAxiosRequestConfig<Input>` | 是          | Axios 原生请求配置与 Fast 请求扩展选项。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                                                     |
| -------- | ----------------- | -------------------------------------------------------------- |
| `result` | `Promise<Output>` | 简洁业务数据、自定义处理结果、原始响应体或文件 AxiosResponse。 |

## `axiosUtil.downloadFile`

在浏览器中保存已有 Axios 文件响应。

### 签名

```ts
downloadFile(response: AxiosResponse): void;
```

### 示例

```ts
import axios from "axios";
import { axiosUtil } from "@fast-china/axios";

const response = await axios.get<Blob>("/reports/1", { responseType: "blob" });
axiosUtil.downloadFile(response);
```

### 输入

| 输入值     | 输入值类型      | 必填/默认值 | 输入值说明                                  |
| ---------- | --------------- | ----------- | ------------------------------------------- |
| `response` | `AxiosResponse` | 是          | Data 为 Blob 或可构造 Blob 数据的文件响应。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                            |
| -------- | ---------- | ------------------------------------- |
| `result` | `void`     | 没有返回值；uni-app 不执行 DOM 下载。 |

## `createUniAppAxiosAdapter`

创建把 Axios 请求分发给 uni.request、uploadFile 或 downloadFile 的 Adapter。

### 签名

```ts
createUniAppAxiosAdapter(): AxiosAdapter;
```

### 示例

```ts
import axios from "axios";
import { createUniAppAxiosAdapter } from "@fast-china/axios";

const result = createUniAppAxiosAdapter();
const http = axios.create({ adapter: result });
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型     | 返回值说明                      |
| -------- | -------------- | ------------------------------- |
| `result` | `AxiosAdapter` | 可赋给 Axios `adapter` 的函数。 |

## `axios.upload`

通过首次创建 uni-app Adapter 安装的 Axios 扩展方法上传文件。

### 签名

```ts
upload<T, R, D>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
```

### 示例

```ts
import axios from "axios";
import { createUniAppAxiosAdapter } from "@fast-china/axios";

const http = axios.create({ adapter: createUniAppAxiosAdapter() });
const tempPath = "/tmp/avatar.png";
const result = await http.upload("/files", { category: "avatar" }, { filePath: tempPath, name: "file" });
```

### 输入

| 输入值   | 输入值类型              | 必填/默认值 | 输入值说明                                |
| -------- | ----------------------- | ----------- | ----------------------------------------- |
| `url`    | `string`                | 是          | 上传地址。                                |
| `data`   | `D`                     | 否          | 普通 multipart 表单字段。                 |
| `config` | `AxiosRequestConfig<D>` | 否          | filePath、name、files 及其他 Axios 配置。 |

### 返回

| 返回值   | 返回值类型   | 返回值说明                                  |
| -------- | ------------ | ------------------------------------------- |
| `result` | `Promise<R>` | uni.uploadFile 结果转换后的 AxiosResponse。 |

## `axios.download`

通过首次创建 uni-app Adapter 安装的 Axios 扩展方法下载文件。

### 签名

```ts
download<T, R, D>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
```

### 示例

```ts
import axios from "axios";
import { createUniAppAxiosAdapter } from "@fast-china/axios";

const http = axios.create({ adapter: createUniAppAxiosAdapter() });
const result = await http.download("/reports/1");
console.log(result.data);
```

### 输入

| 输入值   | 输入值类型              | 必填/默认值 | 输入值说明                      |
| -------- | ----------------------- | ----------- | ------------------------------- |
| `url`    | `string`                | 是          | 下载地址。                      |
| `config` | `AxiosRequestConfig<D>` | 否          | Axios 与 uni-app 平台请求选项。 |

### 返回

| 返回值   | 返回值类型   | 返回值说明                            |
| -------- | ------------ | ------------------------------------- |
| `result` | `Promise<R>` | Data 为临时文件路径的 AxiosResponse。 |

## `Vite 插件默认方法`

创建小程序 Axios FormData/Blob Polyfill 的 Vite 插件。

### 签名

```ts
vitePlugin(options?: unknown): FastAxiosVitePlugin;
```

### 示例

```ts
import fastAxios from "@fast-china/axios/vite";

export default { plugins: [fastAxios()] };
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明                                     |
| --------- | ---------- | ----------- | ---------------------------------------------- |
| `options` | `unknown`  | 否          | 由 unplugin 接收的保留选项；当前实现无需配置。 |

### 返回

| 返回值   | 返回值类型            | 返回值说明                               |
| -------- | --------------------- | ---------------------------------------- |
| `result` | `FastAxiosVitePlugin` | 包含 Vite 插件名称与转换钩子的插件对象。 |

## `Webpack 插件默认方法`

创建小程序 Axios FormData/Blob Polyfill 的 Webpack 插件。

### 签名

```ts
webpackPlugin(options?: unknown): FastAxiosWebpackPlugin;
```

### 示例

```ts
import FastAxiosPlugin from "@fast-china/axios/webpack";

export default { plugins: [FastAxiosPlugin()] };
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明                                     |
| --------- | ---------- | ----------- | ---------------------------------------------- |
| `options` | `unknown`  | 否          | 由 unplugin 接收的保留选项；当前实现无需配置。 |

### 返回

| 返回值   | 返回值类型               | 返回值说明                                   |
| -------- | ------------------------ | -------------------------------------------- |
| `result` | `FastAxiosWebpackPlugin` | 具有 `apply(compiler)` 的 Webpack 插件对象。 |

## `fastAxios.message.success`

调用当前 success 消息处理器。

### 签名

```ts
(message: string): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.success("操作完成");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明           |
| --------- | ---------- | ----------- | -------------------- |
| `message` | `string`   | 是          | 需要展示的消息文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.message.success.use`

替换当前 success 消息处理器。

### 签名

```ts
use(fn: (message: string) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.success.use((message) => console.log("success", message));
```

### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明         |
| ------ | --------------------------- | ----------- | ------------------ |
| `fn`   | `(message: string) => void` | 是          | 新的消息展示函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                       |
| -------- | ---------- | -------------------------------- |
| `result` | `void`     | 没有返回值；后续请求使用新实现。 |

## `fastAxios.message.warning`

调用当前 warning 消息处理器。

### 签名

```ts
(message: string): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.warning("操作完成");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明           |
| --------- | ---------- | ----------- | -------------------- |
| `message` | `string`   | 是          | 需要展示的消息文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.message.warning.use`

替换当前 warning 消息处理器。

### 签名

```ts
use(fn: (message: string) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.warning.use((message) => console.log("warning", message));
```

### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明         |
| ------ | --------------------------- | ----------- | ------------------ |
| `fn`   | `(message: string) => void` | 是          | 新的消息展示函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                       |
| -------- | ---------- | -------------------------------- |
| `result` | `void`     | 没有返回值；后续请求使用新实现。 |

## `fastAxios.message.info`

调用当前 info 消息处理器。

### 签名

```ts
(message: string): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.info("操作完成");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明           |
| --------- | ---------- | ----------- | -------------------- |
| `message` | `string`   | 是          | 需要展示的消息文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.message.info.use`

替换当前 info 消息处理器。

### 签名

```ts
use(fn: (message: string) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.info.use((message) => console.log("info", message));
```

### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明         |
| ------ | --------------------------- | ----------- | ------------------ |
| `fn`   | `(message: string) => void` | 是          | 新的消息展示函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                       |
| -------- | ---------- | -------------------------------- |
| `result` | `void`     | 没有返回值；后续请求使用新实现。 |

## `fastAxios.message.error`

调用当前 error 消息处理器。

### 签名

```ts
(message: string): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.error("操作完成");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值 | 输入值说明           |
| --------- | ---------- | ----------- | -------------------- |
| `message` | `string`   | 是          | 需要展示的消息文本。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.message.error.use`

替换当前 error 消息处理器。

### 签名

```ts
use(fn: (message: string) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.message.error.use((message) => console.log("error", message));
```

### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明         |
| ------ | --------------------------- | ----------- | ------------------ |
| `fn`   | `(message: string) => void` | 是          | 新的消息展示函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                       |
| -------- | ---------- | -------------------------------- |
| `result` | `void`     | 没有返回值；后续请求使用新实现。 |

## `fastAxios.loading.show`

调用当前 Loading 显示处理器。

### 签名

```ts
(text: string): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.loading.show("加载中...");
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明         |
| ------ | ---------- | ----------- | ------------------ |
| `text` | `string`   | 是          | Loading 提示文字。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.loading.show.use`

替换 Loading 显示处理器。

### 签名

```ts
use(fn: (text: string) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.loading.show.use((text) => console.log("show loading", text));
```

### 输入

| 输入值 | 输入值类型               | 必填/默认值 | 输入值说明           |
| ------ | ------------------------ | ----------- | -------------------- |
| `fn`   | `(text: string) => void` | 是          | 项目 UI 的显示函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.loading.close`

调用当前 Loading 关闭处理器。

### 签名

```ts
(options: AxiosOptions): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.loading.close({ loading: true });
```

### 输入

| 输入值    | 输入值类型     | 必填/默认值 | 输入值说明                           |
| --------- | -------------- | ----------- | ------------------------------------ |
| `options` | `AxiosOptions` | 是          | 当前 Fast 请求选项，可用于并发计数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.loading.close.use`

替换 Loading 关闭处理器。

### 签名

```ts
use(fn: (options: AxiosOptions) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.loading.close.use((options) => console.log("close loading", options));
```

### 输入

| 输入值 | 输入值类型                        | 必填/默认值 | 输入值说明           |
| ------ | --------------------------------- | ----------- | -------------------- |
| `fn`   | `(options: AxiosOptions) => void` | 是          | 项目 UI 的关闭函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.cache.get`

按请求唯一键调用当前缓存读取器。

### 签名

```ts
(key: string): unknown;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

const result = fastAxios.cache.get("GET&/users");
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明             |
| ------ | ---------- | ----------- | ---------------------- |
| `key`  | `string`   | 是          | 请求流程生成的缓存键。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `result` | `unknown`  | 缓存值；未命中应为 `null` 或 `undefined`。 |

## `fastAxios.cache.get.use`

替换缓存读取器。

### 签名

```ts
use(fn: (key: string) => unknown): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

const store = new Map<string, unknown>();
fastAxios.cache.get.use((key) => store.get(key));
```

### 输入

| 输入值 | 输入值类型                 | 必填/默认值 | 输入值说明         |
| ------ | -------------------------- | ----------- | ------------------ |
| `fn`   | `(key: string) => unknown` | 是          | 新的缓存读取函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.cache.set`

调用当前缓存写入器。

### 签名

```ts
(key: string, value: unknown): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.cache.set("GET&/users", [{ id: 1 }]);
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明               |
| ------- | ---------- | ----------- | ------------------------ |
| `key`   | `string`   | 是          | 请求缓存键。             |
| `value` | `unknown`  | 是          | 最终返回给调用方的结果。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.cache.set.use`

替换缓存写入器。

### 签名

```ts
use(fn: (key: string, value: unknown) => void): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

const store = new Map<string, unknown>();
fastAxios.cache.set.use((key, value) => {
	store.set(key, value);
});
```

### 输入

| 输入值 | 输入值类型                              | 必填/默认值 | 输入值说明         |
| ------ | --------------------------------------- | ----------- | ------------------ |
| `fn`   | `(key: string, value: unknown) => void` | 是          | 新的缓存写入函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.crypto.encrypt`

请求发送前调用当前加密器。

### 签名

```ts
<Input>(config: InternalAxiosRequestConfig<Input>, timestamp: number): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

import { AxiosHeaders, type InternalAxiosRequestConfig } from "axios";

const config = { headers: new AxiosHeaders() } as InternalAxiosRequestConfig;
fastAxios.crypto.encrypt(config, Date.now());
```

### 输入

| 输入值      | 输入值类型                          | 必填/默认值 | 输入值说明                           |
| ----------- | ----------------------------------- | ----------- | ------------------------------------ |
| `config`    | `InternalAxiosRequestConfig<Input>` | 是          | 可直接修改的 Axios 请求配置。        |
| `timestamp` | `number`                            | 是          | 当前请求统一使用的 Unix 毫秒时间戳。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；加密器通过修改 config 生效。 |

## `fastAxios.crypto.encrypt.use`

替换请求加密器。

### 签名

```ts
use(fn: CryptoEncryptHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.crypto.encrypt.use((config, timestamp) => {
	config.headers.set("X-Time", timestamp);
});
```

### 输入

| 输入值 | 输入值类型            | 必填/默认值 | 输入值说明               |
| ------ | --------------------- | ----------- | ------------------------ |
| `fn`   | `CryptoEncryptHandle` | 是          | 新的请求加密或签名函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.crypto.decrypt`

调用当前响应解密器。

### 签名

```ts
<Output, Input>(response: AxiosResponse<Output, Input>, options: FastAxiosRequestConfig<Input>): unknown;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

import axios from "axios";

const requestOptions = { url: "/users" };
const response = await axios.request(requestOptions);
const result = fastAxios.crypto.decrypt(response, requestOptions);
```

### 输入

| 输入值     | 输入值类型                      | 必填/默认值 | 输入值说明                        |
| ---------- | ------------------------------- | ----------- | --------------------------------- |
| `response` | `AxiosResponse<Output, Input>`  | 是          | 已经通过 RESTful 状态校验的响应。 |
| `options`  | `FastAxiosRequestConfig<Input>` | 是          | 当前 Fast 请求选项。              |

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `unknown`  | 后续简洁数据拆包流程处理的完整响应体。 |

## `fastAxios.crypto.decrypt.use`

替换响应解密器。

### 签名

```ts
use(fn: CryptoDecryptHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.crypto.decrypt.use((response) => response.data);
```

### 输入

| 输入值 | 输入值类型            | 必填/默认值 | 输入值说明         |
| ------ | --------------------- | ----------- | ------------------ |
| `fn`   | `CryptoDecryptHandle` | 是          | 新的响应解密函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.interceptors.request`

调用当前项目级请求前置处理器。

### 签名

```ts
<Input>(config: InternalAxiosRequestConfig<Input>): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

import { AxiosHeaders, type InternalAxiosRequestConfig } from "axios";

const config = { headers: new AxiosHeaders() } as InternalAxiosRequestConfig;
fastAxios.interceptors.request(config);
```

### 输入

| 输入值   | 输入值类型                          | 必填/默认值 | 输入值说明                       |
| -------- | ----------------------------------- | ----------- | -------------------------------- |
| `config` | `InternalAxiosRequestConfig<Input>` | 是          | 即将发送且可直接修改的请求配置。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.interceptors.request.use`

替换项目级请求前置处理器。

### 签名

```ts
use(fn: InterceptorsRequestHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.interceptors.request.use((config) => {
	config.headers.set("Authorization", "Bearer token");
});
```

### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明         |
| ------ | --------------------------- | ----------- | ------------------ |
| `fn`   | `InterceptorsRequestHandle` | 是          | 新的请求处理函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.interceptors.response`

调用当前项目级成功响应处理器。

### 签名

```ts
<Output, Input>(response: AxiosResponse<Output, Input>, options: FastAxiosRequestConfig<Input>): unknown;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

import axios from "axios";

const requestOptions = { url: "/users" };
const response = await axios.request(requestOptions);
const result = fastAxios.interceptors.response(response, requestOptions);
```

### 输入

| 输入值     | 输入值类型                      | 必填/默认值 | 输入值说明           |
| ---------- | ------------------------------- | ----------- | -------------------- |
| `response` | `AxiosResponse<Output, Input>`  | 是          | Axios 成功响应。     |
| `options`  | `FastAxiosRequestConfig<Input>` | 是          | 当前 Fast 请求选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                           |
| -------- | ---------- | ---------------------------------------------------- |
| `result` | `unknown`  | 非空值会完整接管默认响应处理；空值表示继续默认流程。 |

## `fastAxios.interceptors.response.use`

替换项目级成功响应处理器。

### 签名

```ts
use(fn: InterceptorsResponseHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.interceptors.response.use((response) => (response.headers["x-custom"] ? response.data : undefined));
```

### 输入

| 输入值 | 输入值类型                   | 必填/默认值 | 输入值说明             |
| ------ | ---------------------------- | ----------- | ---------------------- |
| `fn`   | `InterceptorsResponseHandle` | 是          | 新的成功响应处理函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.interceptors.responseError`

调用当前项目级失败响应处理器。

### 签名

```ts
<Input>(error: AxiosError<unknown, Input>, options: FastAxiosRequestConfig<Input>): unknown;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

import { AxiosError } from "axios";

const error = new AxiosError("Network Error");
const requestOptions = { url: "/users" };
const result = fastAxios.interceptors.responseError(error, requestOptions);
```

### 输入

| 输入值    | 输入值类型                      | 必填/默认值 | 输入值说明           |
| --------- | ------------------------------- | ----------- | -------------------- |
| `error`   | `AxiosError<unknown, Input>`    | 是          | Axios 请求失败对象。 |
| `options` | `FastAxiosRequestConfig<Input>` | 是          | 当前 Fast 请求选项。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                   |
| -------- | ---------- | ---------------------------- |
| `result` | `unknown`  | 非空值会替换最终抛出的错误。 |

## `fastAxios.interceptors.responseError.use`

替换项目级失败响应处理器。

### 签名

```ts
use(fn: InterceptorsResponseErrorHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.interceptors.responseError.use((error) => (error.response?.status === 401 ? new Error("登录失效") : undefined));
```

### 输入

| 输入值 | 输入值类型                        | 必填/默认值 | 输入值说明             |
| ------ | --------------------------------- | ----------- | ---------------------- |
| `fn`   | `InterceptorsResponseErrorHandle` | 是          | 新的失败响应处理函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `fastAxios.messageBox.confirm`

打开确认框并等待用户选择。

### 签名

```ts
(options: MessageBoxOptions): Promise<void>;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

await fastAxios.messageBox.confirm({ message: "确认删除？", type: "warning" });
```

### 输入

| 输入值    | 输入值类型          | 必填/默认值 | 输入值说明             |
| --------- | ------------------- | ----------- | ---------------------- |
| `options` | `MessageBoxOptions` | 是          | 正文、类型和按钮文字。 |

### 返回

| 返回值   | 返回值类型      | 返回值说明                         |
| -------- | --------------- | ---------------------------------- |
| `result` | `Promise<void>` | 确认时完成；取消或平台失败时拒绝。 |

## `fastAxios.messageBox.confirm.use`

替换确认框处理器。

### 签名

```ts
use(fn: MessageBoxHandle): void;
```

### 示例

```ts
import { createFastAxios } from "@fast-china/axios";

const fastAxios = createFastAxios({ baseUrl: "/api" }, true);

fastAxios.messageBox.confirm.use(async (options) => {
	console.log(options.message);
});
```

### 输入

| 输入值 | 输入值类型         | 必填/默认值 | 输入值说明           |
| ------ | ------------------ | ----------- | -------------------- |
| `fn`   | `MessageBoxHandle` | 是          | 新的异步确认框函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |
