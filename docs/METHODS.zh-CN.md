# Fast.Element.Plus 方法 API

本页逐项记录组件库根入口的安装方法、Hooks、表单与表格工具方法。组件实例方法继续在各组件页的 Expose 表中按组件展示。

## `install`

向 Vue App 注册 Element Plus、两套图标、全部 Fast 组件和指令。

### 签名

```ts
install(app: App): void;
```

### 示例

```ts
import { createApp } from "vue";
import { install } from "fast-element-plus";

const app = createApp({});
install(app);
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                   |
| ------ | ---------- | ----------- | ---------------------------- |
| `app`  | `App`      | 是          | 需要安装组件库的 Vue 3 App。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                              |
| -------- | ---------- | --------------------------------------- |
| `result` | `void`     | 没有返回值；同一 App 重复安装保持幂等。 |

## `useLoading.show`

增加活动计数并显示全页 Loading。

### 签名

```ts
show(): void;
```

### 示例

```ts
import { useLoading } from "fast-element-plus";

useLoading.show();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `useLoading.hide`

减少活动计数；计数归零后延迟移除全页 Loading。

### 签名

```ts
hide(): void;
```

### 示例

```ts
import { useLoading } from "fast-element-plus";

useLoading.hide();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `useOverlay.show`

增加活动计数并显示全页遮罩。

### 签名

```ts
show(transparent?: number): void;
```

### 示例

```ts
import { useOverlay } from "fast-element-plus";

useOverlay.show(0.35);
```

### 输入

| 输入值        | 输入值类型 | 必填/默认值  | 输入值说明                  |
| ------------- | ---------- | ------------ | --------------------------- |
| `transparent` | `number`   | 否，默认 `0` | CSS rgba 使用的遮罩透明度。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `useOverlay.hide`

减少活动计数；计数归零时移除遮罩。

### 签名

```ts
hide(): void;
```

### 示例

```ts
import { useOverlay } from "fast-element-plus";

useOverlay.hide();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `useScreenFull.isFullscreen`

读取当前响应式全屏状态。

### 签名

```ts
isFullscreen(): boolean;
```

### 示例

```ts
import { useScreenFull } from "fast-element-plus";

const result = useScreenFull.isFullscreen();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                    |
| -------- | ---------- | ----------------------------- |
| `result` | `boolean`  | 当前处于全屏状态时为 `true`。 |

## `useScreenFull.init`

初始化一次 Screenfull change 监听。

### 签名

```ts
init(): void;
```

### 示例

```ts
import { onMounted } from "vue";
import { useScreenFull } from "fast-element-plus";

onMounted(() => useScreenFull.init());
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                             |
| -------- | ---------- | -------------------------------------- |
| `result` | `void`     | 没有返回值；浏览器不支持时不执行操作。 |

## `useScreenFull.dispose`

释放此前初始化的全屏状态监听。

### 签名

```ts
dispose(): void;
```

### 示例

```ts
import { onUnmounted } from "vue";
import { useScreenFull } from "fast-element-plus";

onUnmounted(() => useScreenFull.dispose());
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `useScreenFull.toggle`

在进入和退出全屏之间切换。

### 签名

```ts
toggle(): void;
```

### 示例

```ts
import { useScreenFull } from "fast-element-plus";

useScreenFull.toggle();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                         |
| -------- | ---------- | ---------------------------------- |
| `result` | `void`     | 没有返回值；不支持全屏时显示警告。 |

## `useScreenFull.full`

请求进入全屏；已经全屏时保持不变。

### 签名

```ts
full(): void;
```

### 示例

```ts
import { useScreenFull } from "fast-element-plus";

useScreenFull.full();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                     |
| -------- | ---------- | ------------------------------ |
| `result` | `void`     | 没有返回值；底层请求异步执行。 |

## `useScreenFull.exit`

当前全屏时请求退出。

### 签名

```ts
exit(): void;
```

### 示例

```ts
import { useScreenFull } from "fast-element-plus";

useScreenFull.exit();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型 | 返回值说明                     |
| -------- | ---------- | ------------------------------ |
| `result` | `void`     | 没有返回值；底层退出异步执行。 |

## `getTableDefaultSlots`

从 FaTable 状态中取得默认插槽共享的数据和操作。

### 签名

```ts
getTableDefaultSlots(state: FaTableState): FaTableDefaultSlotsResult;
```

### 示例

```ts
import { getTableDefaultSlots } from "fast-element-plus";

const result = getTableDefaultSlots(tableState);
```

### 输入

| 输入值  | 输入值类型     | 必填/默认值 | 输入值说明                               |
| ------- | -------------- | ----------- | ---------------------------------------- |
| `state` | `FaTableState` | 是          | FaTable 内部或组合式封装持有的表格状态。 |

### 返回

| 返回值   | 返回值类型                  | 返回值说明                                              |
| -------- | --------------------------- | ------------------------------------------------------- |
| `result` | `FaTableDefaultSlotsResult` | Loading、搜索条件、选择状态和可选搜索方法组成的新对象。 |

## `formUtil.validate`

调用已挂载 ElForm 的完整表单校验。

### 签名

```ts
validate(ref: Readonly<Ref<FormInstance | null | undefined>>): FormValidationResult;
```

### 示例

```ts
import { ref } from "vue";
import { formUtil } from "fast-element-plus";
import type { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
const result = await formUtil.validate(formRef);
```

### 输入

| 输入值 | 输入值类型                                         | 必填/默认值 | 输入值说明        |
| ------ | -------------------------------------------------- | ----------- | ----------------- |
| `ref`  | `Readonly<Ref<FormInstance \| null \| undefined>>` | 是          | ElForm 实例引用。 |

### 返回

| 返回值   | 返回值类型             | 返回值说明                                                                 |
| -------- | ---------------------- | -------------------------------------------------------------------------- |
| `result` | `FormValidationResult` | 有效时以 `true` 完成；无效时以 invalidFields 拒绝，未挂载时以 Error 拒绝。 |

## `formUtil.validateScrollToField`

校验表单并在失败时滚动到无效字段。

### 签名

```ts
validateScrollToField(ref: Readonly<Ref<FormInstance | null | undefined>>): FormValidationResult;
```

### 示例

```ts
const result = await formUtil.validateScrollToField(formRef);
```

### 输入

| 输入值 | 输入值类型                                         | 必填/默认值 | 输入值说明        |
| ------ | -------------------------------------------------- | ----------- | ----------------- |
| `ref`  | `Readonly<Ref<FormInstance \| null \| undefined>>` | 是          | ElForm 实例引用。 |

### 返回

| 返回值   | 返回值类型             | 返回值说明                                                |
| -------- | ---------------------- | --------------------------------------------------------- |
| `result` | `FormValidationResult` | 有效时以 `true` 完成；无效时滚动并以 invalidFields 拒绝。 |

## `formUtil.mobile`

Element Plus 表单规则回调：校验必填中国大陆手机号。

### 签名

```ts
mobile(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.mobile({} as FormItemRule, "13800138000", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的必填中国大陆手机号。                        |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.phone`

Element Plus 表单规则回调：校验可选固定电话号码。

### 签名

```ts
phone(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.phone({} as FormItemRule, "010-12345678", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的可选固定电话号码。                          |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.email`

Element Plus 表单规则回调：校验可选邮箱。

### 签名

```ts
email(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.email({} as FormItemRule, "user@example.com", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的可选邮箱。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.idCard`

Element Plus 表单规则回调：校验可选身份证号。

### 签名

```ts
idCard(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.idCard({} as FormItemRule, "11010519491231002X", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的可选身份证号。                              |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.carNumber`

Element Plus 表单规则回调：校验七位或八位车牌号。

### 签名

```ts
carNumber(rule: FormItemRule, value: string | null | undefined, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.carNumber({} as FormItemRule, "京A12345", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                    | 必填/默认值 | 输入值说明                                            |
| ---------- | ----------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`                | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string \| null \| undefined` | 是          | 需要校验的七位或八位车牌号。                          |
| `callback` | `(error?: Error) => void`     | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.editorRequired`

Element Plus 表单规则回调：校验富文本必填值。

### 签名

```ts
editorRequired(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.editorRequired({} as FormItemRule, "<p>正文</p>", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的富文本必填值。                              |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.external`

Element Plus 表单规则回调：校验外部链接。

### 签名

```ts
external(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.external({} as FormItemRule, "https://example.com", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的外部链接。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.url`

Element Plus 表单规则回调：校验有效 URL。

### 签名

```ts
url(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.url({} as FormItemRule, "https://example.com/path", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的有效 URL。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.postCode`

Element Plus 表单规则回调：校验邮政编码。

### 签名

```ts
postCode(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.postCode({} as FormItemRule, "100000", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的邮政编码。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.account`

Element Plus 表单规则回调：校验6 至 20 位账号。

### 签名

```ts
account(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.account({} as FormItemRule, "fast123", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的6 至 20 位账号。                            |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.password`

Element Plus 表单规则回调：校验6 至 18 位弱密码。

### 签名

```ts
password(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.password({} as FormItemRule, "fast1234", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的6 至 18 位弱密码。                          |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.strongPassword`

Element Plus 表单规则回调：校验8 至 20 位强密码。

### 签名

```ts
strongPassword(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.strongPassword({} as FormItemRule, "Fast@1234", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的8 至 20 位强密码。                          |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.chinese`

Element Plus 表单规则回调：校验中文字符。

### 签名

```ts
chinese(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.chinese({} as FormItemRule, "中文", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的中文字符。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.english`

Element Plus 表单规则回调：校验英文字符。

### 签名

```ts
english(rule: FormItemRule, value: string, callback: (error?: Error) => void): void;
```

### 示例

```ts
formUtil.english({} as FormItemRule, "Fast", (error) => {
	if (error) console.error(error.message);
});
```

### 输入

| 输入值     | 输入值类型                | 必填/默认值 | 输入值说明                                            |
| ---------- | ------------------------- | ----------- | ----------------------------------------------------- |
| `rule`     | `FormItemRule`            | 是          | Element Plus 传入的规则对象；当前校验器不读取其字段。 |
| `value`    | `string`                  | 是          | 需要校验的英文字符。                                  |
| `callback` | `(error?: Error) => void` | 是          | 成功时无参调用，失败时传入 Error。                    |

### 返回

| 返回值   | 返回值类型 | 返回值说明                               |
| -------- | ---------- | ---------------------------------------- |
| `result` | `void`     | 没有返回值；校验结果通过 callback 报告。 |

## `formUtil.inputRequired`

创建文本输入必填规则。

### 签名

```ts
inputRequired(message: string, trigger?: string): FormItemRule;
```

### 示例

```ts
const result = formUtil.inputRequired("此项必填", "blur");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值     | 输入值说明         |
| --------- | ---------- | --------------- | ------------------ |
| `message` | `string`   | 是              | 校验失败提示。     |
| `trigger` | `string`   | 否，默认 `blur` | 触发校验的事件名。 |

### 返回

| 返回值   | 返回值类型     | 返回值说明                                                   |
| -------- | -------------- | ------------------------------------------------------------ |
| `result` | `FormItemRule` | 包含 required、message 和 trigger 的 Element Plus 规则对象。 |

## `formUtil.selectRequired`

创建选择器必选规则。

### 签名

```ts
selectRequired(message: string, trigger?: string): FormItemRule;
```

### 示例

```ts
const result = formUtil.selectRequired("此项必填", "change");
```

### 输入

| 输入值    | 输入值类型 | 必填/默认值       | 输入值说明         |
| --------- | ---------- | ----------------- | ------------------ |
| `message` | `string`   | 是                | 校验失败提示。     |
| `trigger` | `string`   | 否，默认 `change` | 触发校验的事件名。 |

### 返回

| 返回值   | 返回值类型     | 返回值说明                                                   |
| -------- | -------------- | ------------------------------------------------------------ |
| `result` | `FormItemRule` | 包含 required、message 和 trigger 的 Element Plus 规则对象。 |

## `tableUtil.formatValue`

把数组单元格连接为文本，并规范空数组。

### 签名

```ts
formatValue(value: unknown): unknown;
```

### 示例

```ts
const result = tableUtil.formatValue(["A", "B"]);
```

### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------- | ---------- | ----------- | -------------- |
| `value` | `unknown`  | 是          | 当前单元格值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                    |
| -------- | ---------- | --------------------------------------------- |
| `result` | `unknown`  | 数组连接文本、空数组为 null，其他值原样返回。 |

## `tableUtil.handleRowAccordingToProp`

按点分隔路径读取嵌套行字段。

### 签名

```ts
handleRowAccordingToProp(row: DefaultRow, prop: string): unknown;
```

### 示例

```ts
const result = tableUtil.handleRowAccordingToProp({ user: { name: "Fast" } }, "user.name");
```

### 输入

| 输入值 | 输入值类型   | 必填/默认值 | 输入值说明           |
| ------ | ------------ | ----------- | -------------------- |
| `row`  | `DefaultRow` | 是          | 当前表格行。         |
| `prop` | `string`     | 是          | 字段名或点分隔路径。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                           |
| -------- | ---------- | ------------------------------------ |
| `result` | `unknown`  | 目标字段值；路径中断时为 undefined。 |

## `tableUtil.handleProp`

取得点分隔字段路径的最后一段。

### 签名

```ts
handleProp(prop: string): string;
```

### 示例

```ts
const result = tableUtil.handleProp("user.name");
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明 |
| ------ | ---------- | ----------- | ---------- |
| `prop` | `string`   | 是          | 字段路径。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明       |
| -------- | ---------- | ---------------- |
| `result` | `string`   | 最后一级字段名。 |

## `tableUtil.filterEnum`

从表格枚举列表查找标签或 Tag 类型。

### 签名

```ts
filterEnum(value: unknown, enumData: FaTableEnumColumnCtx[], fieldNames?: { label: string; value: string }, type?: "tag"): unknown;
```

### 示例

```ts
const result = tableUtil.filterEnum(1, [{ label: "启用", value: 1, type: "success" }]);
```

### 输入

| 输入值       | 输入值类型                         | 必填/默认值 | 输入值说明                     |
| ------------ | ---------------------------------- | ----------- | ------------------------------ |
| `value`      | `unknown`                          | 是          | 当前单元格值。                 |
| `enumData`   | `FaTableEnumColumnCtx[]`           | 是          | 候选枚举列表。                 |
| `fieldNames` | `{ label: string; value: string }` | 否          | 自定义标签和值字段。           |
| `type`       | `"tag"`                            | 否          | 传入 tag 时返回枚举 Tag 类型。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `result` | `unknown`  | 匹配标签、Tag 类型或未匹配时的 null/info。 |

## `tableUtil.arrayDynamicSort`

根据分页排序条件创建多字段比较器。

### 签名

```ts
arrayDynamicSort(sortList: PagedSortInput[]): (a: DefaultRow, b: DefaultRow) => number;
```

### 示例

```ts
const compare = tableUtil.arrayDynamicSort([{ enField: "name", mode: "ascending" }]);
const result = rows.toSorted(compare);
```

### 输入

| 输入值     | 输入值类型         | 必填/默认值 | 输入值说明                         |
| ---------- | ------------------ | ----------- | ---------------------------------- |
| `sortList` | `PagedSortInput[]` | 是          | 按优先顺序排列的字段与升降序条件。 |

### 返回

| 返回值   | 返回值类型                                 | 返回值说明                      |
| -------- | ------------------------------------------ | ------------------------------- |
| `result` | `(a: DefaultRow, b: DefaultRow) => number` | 可传给 Array 排序方法的比较器。 |

## `tableUtil.setEnumMap`

把静态或工厂枚举写入表格枚举 Map。

### 签名

```ts
setEnumMap(columnEnum: FaTableEnumColumnType, prop: string, enumMap: Map<string, FaTableEnumColumnCtx[]>): void;
```

### 示例

```ts
const enumMap = new Map();
tableUtil.setEnumMap([{ label: "启用", value: 1 }], "status", enumMap);
```

### 输入

| 输入值       | 输入值类型                            | 必填/默认值 | 输入值说明                   |
| ------------ | ------------------------------------- | ----------- | ---------------------------- |
| `columnEnum` | `FaTableEnumColumnType`               | 是          | 枚举名、枚举数组或枚举工厂。 |
| `prop`       | `string`                              | 是          | Map 使用的列字段键。         |
| `enumMap`    | `Map<string, FaTableEnumColumnCtx[]>` | 是          | 需要更新的表格枚举 Map。     |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `tableUtil.flatColumns`

递归展平表格列，并可同步收集枚举。

### 签名

```ts
flatColumns(columns: FaTableColumnCtx[], enumMap?: Map<string, FaTableEnumColumnCtx[]>): FaTableColumnCtx[];
```

### 示例

```ts
const result = tableUtil.flatColumns(columns, new Map());
```

### 输入

| 输入值    | 输入值类型                            | 必填/默认值 | 输入值说明                  |
| --------- | ------------------------------------- | ----------- | --------------------------- |
| `columns` | `FaTableColumnCtx[]`                  | 是          | 可包含 `_children` 的列树。 |
| `enumMap` | `Map<string, FaTableEnumColumnCtx[]>` | 否          | 需要同步填充的枚举 Map。    |

### 返回

| 返回值   | 返回值类型           | 返回值说明               |
| -------- | -------------------- | ------------------------ |
| `result` | `FaTableColumnCtx[]` | 只包含叶子列的展平数组。 |
