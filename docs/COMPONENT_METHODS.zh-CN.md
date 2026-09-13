# Fast.Element.Plus 组件实例方法 API

本页逐项记录 Fast 组件通过 `ref` 对外暴露的可调用方法。类型由当前源码的 `useExpose` 返回对象推导；状态属性仍在各组件页的 Expose 表中展示。

> 示例中的 `componentRef` 均为对应组件实例引用；`row`、`rawFile` 等业务值在示例内给出最小上下文。继承自 Element Plus 的方法保持其原始语义。

## FaButton

### `doLoading`

按钮加载

#### 签名

```ts
doLoading(loadingFunction: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaButton } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaButton>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.doLoading(async () => saveData());
</script>

<template>
	<FaButton ref="componentRef" />
</template>
```

#### 输入

| 输入值            | 输入值类型                    | 必填/默认值 | 输入值说明                             |
| ----------------- | ----------------------------- | ----------- | -------------------------------------- |
| `loadingFunction` | `() => void \| Promise<void>` | 是          | 需要在加载状态中执行的同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaContextMenu

### `open`

打开菜单

#### 签名

```ts
open(axis?: { x: number; y: number; }): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaContextMenu } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaContextMenu>>();
componentRef.value?.open({ x: 120, y: 80 });
</script>

<template>
	<FaContextMenu ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                  | 必填/默认值 | 输入值说明                                                  |
| ------ | --------------------------- | ----------- | ----------------------------------------------------------- |
| `axis` | `{ x: number; y: number; }` | 否          | 菜单相对视口的横向和纵向坐标；省略时使用 `{ x: 0, y: 0 }`。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `close`

关闭菜单

#### 签名

```ts
close(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaContextMenu } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaContextMenu>>();
componentRef.value?.close();
</script>

<template>
	<FaContextMenu ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaDialog

### `handleClose`

调用原生关闭流程，并执行 beforeClose。

#### 签名

```ts
handleClose(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
componentRef.value?.handleClose();
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `resetPosition`

重置位置

#### 签名

```ts
resetPosition(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
componentRef.value?.resetPosition();
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `open`

打开弹窗

#### 签名

```ts
open(openFunction?: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.open(async () => saveData());
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

| 输入值         | 输入值类型                                   | 必填/默认值 | 输入值说明                           |
| -------------- | -------------------------------------------- | ----------- | ------------------------------------ |
| `openFunction` | `(() => void \| Promise<void>) \| undefined` | 否          | 打开动画前执行的可选同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `close`

关闭弹窗

#### 签名

```ts
close(closeFunction?: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.close(async () => saveData());
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

| 输入值          | 输入值类型                                   | 必填/默认值 | 输入值说明                           |
| --------------- | -------------------------------------------- | ----------- | ------------------------------------ |
| `closeFunction` | `(() => void \| Promise<void>) \| undefined` | 否          | 关闭动画前执行的可选同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `refresh`

刷新弹窗

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `doLoading`

弹窗加载

#### 签名

```ts
doLoading(loadingFunction: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDialog } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDialog>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.doLoading(async () => saveData());
</script>

<template>
	<FaDialog ref="componentRef" />
</template>
```

#### 输入

| 输入值            | 输入值类型                    | 必填/默认值 | 输入值说明                             |
| ----------------- | ----------------------------- | ----------- | -------------------------------------- |
| `loadingFunction` | `() => void \| Promise<void>` | 是          | 需要在加载状态中执行的同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaDrawer

### `handleClose`

用于关闭 Drawer, 该方法会调用传入的 before-close 方法

#### 签名

```ts
handleClose(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDrawer } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDrawer>>();
componentRef.value?.handleClose();
</script>

<template>
	<FaDrawer ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `open`

打开弹窗

#### 签名

```ts
open(openFunction?: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDrawer } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDrawer>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.open(async () => saveData());
</script>

<template>
	<FaDrawer ref="componentRef" />
</template>
```

#### 输入

| 输入值         | 输入值类型                                   | 必填/默认值 | 输入值说明                           |
| -------------- | -------------------------------------------- | ----------- | ------------------------------------ |
| `openFunction` | `(() => void \| Promise<void>) \| undefined` | 否          | 打开动画前执行的可选同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `close`

关闭弹窗

#### 签名

```ts
close(closeFunction?: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDrawer } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDrawer>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.close(async () => saveData());
</script>

<template>
	<FaDrawer ref="componentRef" />
</template>
```

#### 输入

| 输入值          | 输入值类型                                   | 必填/默认值 | 输入值说明                           |
| --------------- | -------------------------------------------- | ----------- | ------------------------------------ |
| `closeFunction` | `(() => void \| Promise<void>) \| undefined` | 否          | 关闭动画前执行的可选同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `refresh`

刷新弹窗

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDrawer } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDrawer>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaDrawer ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `doLoading`

弹窗加载

#### 签名

```ts
doLoading(loadingFunction: () => void | Promise<void>): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaDrawer } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaDrawer>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.doLoading(async () => saveData());
</script>

<template>
	<FaDrawer ref="componentRef" />
</template>
```

#### 输入

| 输入值            | 输入值类型                    | 必填/默认值 | 输入值说明                             |
| ----------------- | ----------------------------- | ----------- | -------------------------------------- |
| `loadingFunction` | `() => void \| Promise<void>` | 是          | 需要在加载状态中执行的同步或异步任务。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaForm

### `validate`

对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。

#### 签名

```ts
validate(callback?: FormValidateCallback): import("element-plus").FormValidationResult;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
const result = componentRef.value?.validate((valid) => console.log(valid));
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型                          | 必填/默认值 | 输入值说明             |
| ---------- | ----------------------------------- | ----------- | ---------------------- |
| `callback` | `FormValidateCallback \| undefined` | 否          | 校验完成后的回调函数。 |

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `FormValidationResult` | 方法调用结果，具体数据与当前组件状态一致。 |

### `validateField`

验证具体的某个字段。

#### 签名

```ts
validateField(props?: import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemProp>, callback?: FormValidateCallback): import("element-plus").FormValidationResult;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
const result = componentRef.value?.validateField("name", (valid) => console.log(valid));
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型                             | 必填/默认值 | 输入值说明                         |
| ---------- | -------------------------------------- | ----------- | ---------------------------------- |
| `props`    | `Arrayable<FormItemProp> \| undefined` | 否          | 需要重置或清除校验的表单字段路径。 |
| `callback` | `FormValidateCallback \| undefined`    | 否          | 校验完成后的回调函数。             |

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `FormValidationResult` | 方法调用结果，具体数据与当前组件状态一致。 |

### `resetFields`

重置该表单项，将其值重置为初始值，并移除校验结果

#### 签名

```ts
resetFields(props?: import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemProp>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
componentRef.value?.resetFields("name");
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                         |
| ------- | -------------------------------------- | ----------- | ---------------------------------- |
| `props` | `Arrayable<FormItemProp> \| undefined` | 否          | 需要重置或清除校验的表单字段路径。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearValidate`

清理某个字段的表单验证信息。

#### 签名

```ts
clearValidate(props?: import("element-plus/es/utils/typescript.mjs").Arrayable<import("element-plus").FormItemProp>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
componentRef.value?.clearValidate("name");
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                         |
| ------- | -------------------------------------- | ----------- | ---------------------------------- |
| `props` | `Arrayable<FormItemProp> \| undefined` | 否          | 需要重置或清除校验的表单字段路径。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `scrollToField`

滚动到指定的字段

#### 签名

```ts
scrollToField(prop: import("element-plus").FormItemProp): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
componentRef.value?.scrollToField("name");
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型     | 必填/默认值 | 输入值说明                     |
| ------ | -------------- | ----------- | ------------------------------ |
| `prop` | `FormItemProp` | 是          | 表单字段路径或表格排序字段名。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getField`

获取指定字段的 context。

#### 签名

```ts
getField(prop: import("element-plus").FormItemProp): import("element-plus").FormItemContext | undefined;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
const result = componentRef.value?.getField("name");
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型     | 必填/默认值 | 输入值说明                     |
| ------ | -------------- | ----------- | ------------------------------ |
| `prop` | `FormItemProp` | 是          | 表单字段路径或表格排序字段名。 |

#### 返回

| 返回值   | 返回值类型                     | 返回值说明                                 |
| -------- | ------------------------------ | ------------------------------------------ |
| `result` | `FormItemContext \| undefined` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setInitialValues`

设置表单字段的初始值。

#### 签名

```ts
setInitialValues(initModel: Record<string, any>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
componentRef.value?.setInitialValues({ name: "Fast" });
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

| 输入值      | 输入值类型            | 必填/默认值 | 输入值说明                          |
| ----------- | --------------------- | ----------- | ----------------------------------- |
| `initModel` | `Record<string, any>` | 是          | 作为后续 reset 基准的表单初始数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `validateScrollToField`

对整个表单的内容进行验证，带滚动。 接收一个回调函数，或返回 Promise。

#### 签名

```ts
validateScrollToField(): import("element-plus").FormValidationResult;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaForm } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaForm>>();
const result = componentRef.value?.validateScrollToField();
</script>

<template>
	<FaForm ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `FormValidationResult` | 方法调用结果，具体数据与当前组件状态一致。 |

## FaFormItem

### `validate`

验证表单项

#### 签名

```ts
validate(trigger: string, callback?: import("element-plus").FormValidateCallback): import("element-plus").FormValidationResult;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaFormItem } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaFormItem>>();
const result = componentRef.value?.validate("Fast", (valid) => console.log(valid));
</script>

<template>
	<FaFormItem ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型                          | 必填/默认值 | 输入值说明                            |
| ---------- | ----------------------------------- | ----------- | ------------------------------------- |
| `trigger`  | `string`                            | 是          | 触发表单项校验的场景名称，例如 blur。 |
| `callback` | `FormValidateCallback \| undefined` | 否          | 校验完成后的回调函数。                |

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `FormValidationResult` | 方法调用结果，具体数据与当前组件状态一致。 |

### `clearValidate`

移除该表单项的校验结果

#### 签名

```ts
clearValidate(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaFormItem } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaFormItem>>();
componentRef.value?.clearValidate();
</script>

<template>
	<FaFormItem ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `resetField`

对该表单项进行重置，将其值重置为初始值并移除校验结果

#### 签名

```ts
resetField(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaFormItem } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaFormItem>>();
componentRef.value?.resetField();
</script>

<template>
	<FaFormItem ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setInitialValue`

设置该表单项的初始值。

#### 签名

```ts
setInitialValue(value: any): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaFormItem } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaFormItem>>();
componentRef.value?.setInitialValue(1);
</script>

<template>
	<FaFormItem ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------- | ---------- | ----------- | ------------------------------------ |
| `value` | `any`      | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaImage

### `showPreview`

手动打开图片预览。

#### 签名

```ts
showPreview(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaImage>>();
componentRef.value?.showPreview();
</script>

<template>
	<FaImage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaInputDialogPage

### `open`

打开选择器弹窗

#### 签名

```ts
open(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaInputDialogPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaInputDialogPage>>();
const result = await componentRef.value?.open();
</script>

<template>
	<FaInputDialogPage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `clear`

清除选择

#### 签名

```ts
clear(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaInputDialogPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaInputDialogPage>>();
componentRef.value?.clear();
</script>

<template>
	<FaInputDialogPage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaSelect

### `focus`

使选择器的输入框获取焦点

#### 签名

```ts
focus(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelect>>();
componentRef.value?.focus();
</script>

<template>
	<FaSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `blur`

使选择器的输入框失去焦点，并隐藏下拉框

#### 签名

```ts
blur(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelect>>();
componentRef.value?.blur();
</script>

<template>
	<FaSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

刷新

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelect>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `setSelection`

设置选择

#### 签名

```ts
setSelection(value: Exclude<ElSelectorModelValue, null | undefined>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelect>>();
componentRef.value?.setSelection(1);
</script>

<template>
	<FaSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                           |
| ------- | -------------------------------------- | ----------- | ------------------------------------ |
| `value` | `ElSelectorValue \| ElSelectorValue[]` | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearSelection`

清除选择

#### 签名

```ts
clearSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelect>>();
componentRef.value?.clearSelection();
</script>

<template>
	<FaSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaSelectPage

### `focus`

使选择器的输入框获取焦点

#### 签名

```ts
focus(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectPage>>();
componentRef.value?.focus();
</script>

<template>
	<FaSelectPage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `blur`

使选择器的输入框失去焦点，并隐藏下拉框

#### 签名

```ts
blur(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectPage>>();
componentRef.value?.blur();
</script>

<template>
	<FaSelectPage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

刷新

#### 签名

```ts
refresh(pageIndex?: number): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectPage>>();
const result = await componentRef.value?.refresh(1);
</script>

<template>
	<FaSelectPage ref="componentRef" />
</template>
```

#### 输入

| 输入值      | 输入值类型            | 必填/默认值 | 输入值说明             |
| ----------- | --------------------- | ----------- | ---------------------- |
| `pageIndex` | `number \| undefined` | 否          | 刷新时要切换到的页码。 |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `setSelection`

设置选择

#### 签名

```ts
setSelection(value: Exclude<ElSelectorModelValue, null | undefined>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectPage>>();
componentRef.value?.setSelection(1);
</script>

<template>
	<FaSelectPage ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                           |
| ------- | -------------------------------------- | ----------- | ------------------------------------ |
| `value` | `ElSelectorValue \| ElSelectorValue[]` | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearSelection`

清除选择

#### 签名

```ts
clearSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectPage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectPage>>();
componentRef.value?.clearSelection();
</script>

<template>
	<FaSelectPage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaSelectV2

### `focus`

使选择器的输入框获取焦点

#### 签名

```ts
focus(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
componentRef.value?.focus();
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `blur`

使选择器的输入框失去焦点，并隐藏下拉框

#### 签名

```ts
blur(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
componentRef.value?.blur();
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `scrollTo`

滚动到指定选项索引。

#### 签名

```ts
scrollTo(index: number): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
componentRef.value?.scrollTo(120);
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明           |
| ------- | ---------- | ----------- | -------------------- |
| `index` | `number`   | 是          | 从零开始的选项索引。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

刷新

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `setSelection`

设置选择

#### 签名

```ts
setSelection(value: Exclude<ElSelectorModelValue, null | undefined>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
componentRef.value?.setSelection(1);
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                           |
| ------- | -------------------------------------- | ----------- | ------------------------------------ |
| `value` | `ElSelectorValue \| ElSelectorValue[]` | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearSelection`

清除选择

#### 签名

```ts
clearSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaSelectV2 } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaSelectV2>>();
componentRef.value?.clearSelection();
</script>

<template>
	<FaSelectV2 ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaTable

### `clearSelection`

用于多选表格，清空用户的选择

#### 签名

```ts
clearSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.clearSelection();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getSelectionRows`

返回当前选中的行

#### 签名

```ts
getSelectionRows(): import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const result = componentRef.value?.getSelectionRows();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型     | 返回值说明                                 |
| -------- | -------------- | ------------------------------------------ |
| `result` | `DefaultRow[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getHalfSelectionRows`

返回当前半选中的行。

#### 签名

```ts
getHalfSelectionRows(): import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const result = componentRef.value?.getHalfSelectionRows();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型     | 返回值说明                                 |
| -------- | -------------- | ------------------------------------------ |
| `result` | `DefaultRow[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `toggleRowSelection`

用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否

#### 签名

```ts
toggleRowSelection(row: import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow, selected?: boolean, ignoreSelectable?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.toggleRowSelection(row, true, true);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值             | 输入值类型             | 必填/默认值 | 输入值说明                 |
| ------------------ | ---------------------- | ----------- | -------------------------- |
| `row`              | `DefaultRow`           | 是          | 目标表格行数据。           |
| `selected`         | `boolean \| undefined` | 否          | 是否选中目标行。           |
| `ignoreSelectable` | `boolean \| undefined` | 否          | 是否忽略 selectable 限制。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `toggleAllSelection`

用于多选表格，切换全选和全不选

#### 签名

```ts
toggleAllSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.toggleAllSelection();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `toggleRowExpansion`

用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。

#### 签名

```ts
toggleRowExpansion(row: import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow, expanded?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.toggleRowExpansion(row, true);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明       |
| ---------- | ---------------------- | ----------- | ---------------- |
| `row`      | `DefaultRow`           | 是          | 目标表格行数据。 |
| `expanded` | `boolean \| undefined` | 否          | 是否展开目标行。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setCurrentRow`

用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。

#### 签名

```ts
setCurrentRow(row?: import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow | undefined): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.setCurrentRow(row);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明       |
| ------ | ------------------------- | ----------- | ---------------- |
| `row`  | `DefaultRow \| undefined` | 否          | 目标表格行数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearSort`

用于清空排序条件，数据会恢复成未排序的状态

#### 签名

```ts
clearSort(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.clearSort();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearFilter`

传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器

#### 签名

```ts
clearFilter(columnKeys?: string[] | string): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.clearFilter(["name"]);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值       | 输入值类型                        | 必填/默认值 | 输入值说明                                 |
| ------------ | --------------------------------- | ----------- | ------------------------------------------ |
| `columnKeys` | `string \| string[] \| undefined` | 否          | 需要清除筛选条件的列 key；省略时清除全部。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `doLayout`

对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局

#### 签名

```ts
doLayout(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.doLayout();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `sort`

手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。

#### 签名

```ts
sort(prop: string, order: string): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.sort("name", "ascending");
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                               |
| ------- | ---------- | ----------- | ---------------------------------------- |
| `prop`  | `string`   | 是          | 表单字段路径或表格排序字段名。           |
| `order` | `string`   | 是          | 排序方向，例如 ascending 或 descending。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `scrollTo`

滚动到一组特定坐标

#### 签名

```ts
scrollTo(options: ScrollToOptions | number, yCoord?: number): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.scrollTo({ top: 120, behavior: "smooth" }, 1);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                  | 必填/默认值 | 输入值说明                       |
| --------- | --------------------------- | ----------- | -------------------------------- |
| `options` | `number \| ScrollToOptions` | 是          | 滚动距离或标准 ScrollToOptions。 |
| `yCoord`  | `number \| undefined`       | 否          | 纵向滚动坐标。                   |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setScrollTop`

设置垂直滚动位置

#### 签名

```ts
setScrollTop(top?: number): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.setScrollTop(120);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型            | 必填/默认值 | 输入值说明     |
| ------ | --------------------- | ----------- | -------------- |
| `top`  | `number \| undefined` | 否          | 纵向滚动距离。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setScrollLeft`

设置水平滚动位置

#### 签名

```ts
setScrollLeft(left?: number): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.setScrollLeft(120);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型            | 必填/默认值 | 输入值说明     |
| ------ | --------------------- | ----------- | -------------- |
| `left` | `number \| undefined` | 否          | 横向滚动距离。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `updateKeyChildren`

适用于 lazy Table, 需要设置 rowKey, 更新 key children

#### 签名

```ts
updateKeyChildren(key: string, data: import("element-plus/es/components/table/src/table/defaults.mjs").DefaultRow[]): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
componentRef.value?.updateKeyChildren(1, [row]);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型     | 必填/默认值 | 输入值说明                           |
| ------ | -------------- | ----------- | ------------------------------------ |
| `key`  | `string`       | 是          | 节点、行或列的唯一标识。             |
| `data` | `DefaultRow[]` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `toggleRowIndeterminateSelection`

部分选中（样式不一样而已），用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否

#### 签名

```ts
toggleRowIndeterminateSelection(row: DefaultRow, selected?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.toggleRowIndeterminateSelection(row, true);
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明       |
| ---------- | ---------------------- | ----------- | ---------------- |
| `row`      | `DefaultRow`           | 是          | 目标表格行数据。 |
| `selected` | `boolean \| undefined` | 否          | 是否选中目标行。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

异步方法，刷新表格

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `reset`

异步方法，重置表格

#### 签名

```ts
reset(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const result = await componentRef.value?.reset();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `doRender`

对 Table 进行重新渲染。当 TableKey 发生变化的时候可以通过此方法重新渲染表格

#### 签名

```ts
doRender(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const result = await componentRef.value?.doRender();
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `doLoading`

Table 加载

#### 签名

```ts
doLoading(loadingFunction: () => void | Promise<void>, loadingText?: string): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTable>>();
const saveData = async () => Promise.resolve();
const result = await componentRef.value?.doLoading(async () => saveData(), "保存中");
</script>

<template>
	<FaTable ref="componentRef" />
</template>
```

#### 输入

| 输入值            | 输入值类型                    | 必填/默认值 | 输入值说明                             |
| ----------------- | ----------------------------- | ----------- | -------------------------------------- |
| `loadingFunction` | `() => void \| Promise<void>` | 是          | 需要在加载状态中执行的同步或异步任务。 |
| `loadingText`     | `string \| undefined`         | 否          | 加载遮罩显示的可选文字。               |

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaTableColumnsSettingDialog

### `open`

打开

#### 签名

```ts
open(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const Component = FaTable.TableColumnsSettingDialog;
const componentRef = ref<InstanceType<typeof Component>>();
const result = await componentRef.value?.open();
</script>

<template>
	<Component ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `change`

列改变

#### 签名

```ts
change(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTable } from "fast-element-plus";

const Component = FaTable.TableColumnsSettingDialog;
const componentRef = ref<InstanceType<typeof Component>>();
const result = await componentRef.value?.change();
</script>

<template>
	<Component ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaTree

### `filter`

过滤所有树节点，过滤后的节点将被隐藏

#### 签名

```ts
filter(value: FilterValue): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
componentRef.value?.filter(1);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------- | ---------- | ----------- | ------------------------------------ |
| `value` | `any`      | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getNodeKey`

获取节点的唯一标识。

#### 签名

```ts
getNodeKey(node: import("element-plus/es/components/tree/src/model/node.mjs").default): any;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
const result = componentRef.value?.getNodeKey(row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                   |
| ------ | ---------- | ----------- | ---------------------------- |
| `node` | `Node`     | 是          | Element Plus Tree 节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `result` | `any`      | 方法调用结果，具体数据与当前组件状态一致。 |

### `getNodePath`

获取指定节点的路径数据。

#### 签名

```ts
getNodePath(data: import("element-plus").TreeKey | TreeNodeData): TreeNodeData[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
const result = componentRef.value?.getNodePath(row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                           |
| ------ | ------------------------- | ----------- | ------------------------------------ |
| `data` | `TreeNodeData \| TreeKey` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型       | 返回值说明                                 |
| -------- | ---------------- | ------------------------------------------ |
| `result` | `TreeNodeData[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `updateKeyChildren`

为节点设置新数据，只有当设置 node-key 属性的时候才可用

#### 签名

```ts
updateKeyChildren(key: import("element-plus").TreeKey, data: import("element-plus").TreeData): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.updateKeyChildren(1, row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------ | ---------- | ----------- | ------------------------------------ |
| `key`  | `TreeKey`  | 是          | 节点、行或列的唯一标识。             |
| `data` | `TreeData` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getCheckedNodes`

如果节点可以被选中，(show-checkbox 为 true), 本方法将返回当前选中节点的数组

#### 签名

```ts
getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): TreeNodeData[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getCheckedNodes(true, true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值               | 输入值类型             | 必填/默认值 | 输入值说明                 |
| -------------------- | ---------------------- | ----------- | -------------------------- |
| `leafOnly`           | `boolean \| undefined` | 否          | 是否只返回叶子节点。       |
| `includeHalfChecked` | `boolean \| undefined` | 否          | 返回结果是否包含半选节点。 |

#### 返回

| 返回值   | 返回值类型       | 返回值说明                                 |
| -------- | ---------------- | ------------------------------------------ |
| `result` | `TreeNodeData[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCheckedNodes`

设置目前勾选的节点，使用此方法必须提前设置 node-key 属性

#### 签名

```ts
setCheckedNodes(nodes: import("element-plus/es/components/tree/src/model/node.mjs").default[], leafOnly?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
componentRef.value?.setCheckedNodes([row], true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明           |
| ---------- | ---------------------- | ----------- | -------------------- |
| `nodes`    | `Node[]`               | 是          | 需要勾选的节点集合。 |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getCheckedKeys`

若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组

#### 签名

```ts
getCheckedKeys(leafOnly?: boolean): import("element-plus").TreeKey[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getCheckedKeys(true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明           |
| ---------- | ---------------------- | ----------- | -------------------- |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。 |

#### 返回

| 返回值   | 返回值类型  | 返回值说明                                 |
| -------- | ----------- | ------------------------------------------ |
| `result` | `TreeKey[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCheckedKeys`

设置目前选中的节点，使用此方法必须设置 node-key 属性

#### 签名

```ts
setCheckedKeys(keys: import("element-plus").TreeKey[], leafOnly?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
componentRef.value?.setCheckedKeys(["name"], true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明                |
| ---------- | ---------------------- | ----------- | ------------------------- |
| `keys`     | `TreeKey[]`            | 是          | 需要勾选的节点 key 集合。 |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。      |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setChecked`

设置节点是否被选中, 使用此方法必须设置 node-key 属性

#### 签名

```ts
setChecked(data: import("element-plus").TreeKey | TreeNodeData, checked: boolean, deep?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.setChecked(row, true, true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                | 必填/默认值 | 输入值说明                           |
| --------- | ------------------------- | ----------- | ------------------------------------ |
| `data`    | `TreeNodeData \| TreeKey` | 是          | 要查询、插入、删除或替换的业务数据。 |
| `checked` | `boolean`                 | 是          | 是否勾选目标节点。                   |
| `deep`    | `boolean \| undefined`    | 否          | 是否同时包含后代节点。               |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getHalfCheckedNodes`

如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组

#### 签名

```ts
getHalfCheckedNodes(): TreeNodeData[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getHalfCheckedNodes();
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型       | 返回值说明                                 |
| -------- | ---------------- | ------------------------------------------ |
| `result` | `TreeNodeData[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getHalfCheckedKeys`

若节点可被选中(show-checkbox 为 true)，则返回目前半选中的节点的 key 所组成的数组

#### 签名

```ts
getHalfCheckedKeys(): import("element-plus").TreeKey[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getHalfCheckedKeys();
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型  | 返回值说明                                 |
| -------- | ----------- | ------------------------------------------ |
| `result` | `TreeKey[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getCurrentKey`

返回当前被选中节点的数据 (如果没有则返回 null)

#### 签名

```ts
getCurrentKey(): import("element-plus").TreeKey | null;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getCurrentKey();
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型        | 返回值说明                                 |
| -------- | ----------------- | ------------------------------------------ |
| `result` | `TreeKey \| null` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getCurrentNode`

返回当前被选中节点的数据 (如果没有则返回 null)

#### 签名

```ts
getCurrentNode(): TreeNodeData | null;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = componentRef.value?.getCurrentNode();
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `TreeNodeData \| null` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCurrentKey`

通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性

#### 签名

```ts
setCurrentKey(key?: import("element-plus").TreeKey | null, shouldAutoExpandParent?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
componentRef.value?.setCurrentKey(1, true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值                   | 输入值类型                     | 必填/默认值 | 输入值说明                   |
| ------------------------ | ------------------------------ | ----------- | ---------------------------- |
| `key`                    | `TreeKey \| null \| undefined` | 否          | 节点、行或列的唯一标识。     |
| `shouldAutoExpandParent` | `boolean \| undefined`         | 否          | 是否自动展开目标节点的父级。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setCurrentNode`

设置节点为选中状态，使用此方法必须设置 node-key 属性

#### 签名

```ts
setCurrentNode(node: import("element-plus/es/components/tree/src/model/node.mjs").default, shouldAutoExpandParent?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.setCurrentNode(row, true);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值                   | 输入值类型             | 必填/默认值 | 输入值说明                   |
| ------------------------ | ---------------------- | ----------- | ---------------------------- |
| `node`                   | `Node`                 | 是          | Element Plus Tree 节点实例。 |
| `shouldAutoExpandParent` | `boolean \| undefined` | 否          | 是否自动展开目标节点的父级。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getNode`

根据 data 或者 key 拿到 Tree 组件中的 node

#### 签名

```ts
getNode(data: import("element-plus").TreeKey | TreeNodeData): import("element-plus/es/components/tree/src/model/node.mjs").default;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
const result = componentRef.value?.getNode(row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                           |
| ------ | ------------------------- | ----------- | ------------------------------------ |
| `data` | `TreeNodeData \| TreeKey` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `result` | `Node`     | 方法调用结果，具体数据与当前组件状态一致。 |

### `remove`

删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性

#### 签名

```ts
remove(data: TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.remove(row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型             | 必填/默认值 | 输入值说明                           |
| ------ | ---------------------- | ----------- | ------------------------------------ |
| `data` | `TreeNodeData \| Node` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `append`

为 Tree 中的一个节点追加一个子节点

#### 签名

```ts
append(data: TreeNodeData, parentNode: TreeNodeData | import("element-plus").TreeKey | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.append(row, row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值       | 输入值类型                        | 必填/默认值 | 输入值说明                                   |
| ------------ | --------------------------------- | ----------- | -------------------------------------------- |
| `data`       | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。         |
| `parentNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 追加节点时使用的父节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `insertBefore`

在 Tree 中给定节点前插入一个节点

#### 签名

```ts
insertBefore(data: TreeNodeData, refNode: import("element-plus").TreeKey | TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.insertBefore(row, row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                        | 必填/默认值 | 输入值说明                                 |
| --------- | --------------------------------- | ----------- | ------------------------------------------ |
| `data`    | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。       |
| `refNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 插入位置所参照的节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `insertAfter`

在 Tree 中给定节点后插入一个节点

#### 签名

```ts
insertAfter(data: TreeNodeData, refNode: import("element-plus").TreeKey | TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.insertAfter(row, row);
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                        | 必填/默认值 | 输入值说明                                 |
| --------- | --------------------------------- | ----------- | ------------------------------------------ |
| `data`    | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。       |
| `refNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 插入位置所参照的节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

刷新

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTree } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTree>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaTree ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

## FaTreeSelect

### `focus`

使选择器的输入框获取焦点。

#### 签名

```ts
focus(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.focus();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `blur`

使选择器的输入框失去焦点，并隐藏下拉框。

#### 签名

```ts
blur(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.blur();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `filter`

过滤所有树节点，过滤后的节点将被隐藏。

#### 签名

```ts
filter(value: FilterValue): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.filter(1);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------- | ---------- | ----------- | ------------------------------------ |
| `value` | `any`      | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `updateKeyChildren`

为节点设置新数据，只有设置 node-key 时可用。

#### 签名

```ts
updateKeyChildren(key: import("element-plus").TreeKey, data: import("element-plus").TreeData): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.updateKeyChildren(1, row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------ | ---------- | ----------- | ------------------------------------ |
| `key`  | `TreeKey`  | 是          | 节点、行或列的唯一标识。             |
| `data` | `TreeData` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getCheckedNodes`

获取当前选中的节点。

#### 签名

```ts
getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): TreeNodeData[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getCheckedNodes(true, true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值               | 输入值类型             | 必填/默认值 | 输入值说明                 |
| -------------------- | ---------------------- | ----------- | -------------------------- |
| `leafOnly`           | `boolean \| undefined` | 否          | 是否只返回叶子节点。       |
| `includeHalfChecked` | `boolean \| undefined` | 否          | 返回结果是否包含半选节点。 |

#### 返回

| 返回值   | 返回值类型       | 返回值说明                                 |
| -------- | ---------------- | ------------------------------------------ |
| `result` | `TreeNodeData[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCheckedNodes`

设置当前选中的节点。

#### 签名

```ts
setCheckedNodes(nodes: import("element-plus/es/components/tree/src/model/node.mjs").default[], leafOnly?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.setCheckedNodes([row], true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明           |
| ---------- | ---------------------- | ----------- | -------------------- |
| `nodes`    | `Node[]`               | 是          | 需要勾选的节点集合。 |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getCheckedKeys`

获取当前选中的节点 Key。

#### 签名

```ts
getCheckedKeys(leafOnly?: boolean): import("element-plus").TreeKey[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getCheckedKeys(true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明           |
| ---------- | ---------------------- | ----------- | -------------------- |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。 |

#### 返回

| 返回值   | 返回值类型  | 返回值说明                                 |
| -------- | ----------- | ------------------------------------------ |
| `result` | `TreeKey[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCheckedKeys`

设置当前选中的节点 Key。

#### 签名

```ts
setCheckedKeys(keys: import("element-plus").TreeKey[], leafOnly?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.setCheckedKeys(["name"], true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值     | 输入值类型             | 必填/默认值 | 输入值说明                |
| ---------- | ---------------------- | ----------- | ------------------------- |
| `keys`     | `TreeKey[]`            | 是          | 需要勾选的节点 key 集合。 |
| `leafOnly` | `boolean \| undefined` | 否          | 是否只返回叶子节点。      |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setChecked`

设置节点选中状态。

#### 签名

```ts
setChecked(data: import("element-plus").TreeKey | TreeNodeData, checked: boolean, deep?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.setChecked(row, true, true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                | 必填/默认值 | 输入值说明                           |
| --------- | ------------------------- | ----------- | ------------------------------------ |
| `data`    | `TreeNodeData \| TreeKey` | 是          | 要查询、插入、删除或替换的业务数据。 |
| `checked` | `boolean`                 | 是          | 是否勾选目标节点。                   |
| `deep`    | `boolean \| undefined`    | 否          | 是否同时包含后代节点。               |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getHalfCheckedNodes`

获取当前半选中的节点。

#### 签名

```ts
getHalfCheckedNodes(): TreeNodeData[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getHalfCheckedNodes();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型       | 返回值说明                                 |
| -------- | ---------------- | ------------------------------------------ |
| `result` | `TreeNodeData[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getHalfCheckedKeys`

获取当前半选中的节点 Key。

#### 签名

```ts
getHalfCheckedKeys(): import("element-plus").TreeKey[];
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getHalfCheckedKeys();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型  | 返回值说明                                 |
| -------- | ----------- | ------------------------------------------ |
| `result` | `TreeKey[]` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getCurrentKey`

获取当前节点 Key。

#### 签名

```ts
getCurrentKey(): import("element-plus").TreeKey | null;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getCurrentKey();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型        | 返回值说明                                 |
| -------- | ----------------- | ------------------------------------------ |
| `result` | `TreeKey \| null` | 方法调用结果，具体数据与当前组件状态一致。 |

### `getCurrentNode`

获取当前节点。

#### 签名

```ts
getCurrentNode(): TreeNodeData | null;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = componentRef.value?.getCurrentNode();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型             | 返回值说明                                 |
| -------- | ---------------------- | ------------------------------------------ |
| `result` | `TreeNodeData \| null` | 方法调用结果，具体数据与当前组件状态一致。 |

### `setCurrentKey`

设置当前节点 Key。

#### 签名

```ts
setCurrentKey(key?: import("element-plus").TreeKey | null, shouldAutoExpandParent?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.setCurrentKey(1, true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值                   | 输入值类型                     | 必填/默认值 | 输入值说明                   |
| ------------------------ | ------------------------------ | ----------- | ---------------------------- |
| `key`                    | `TreeKey \| null \| undefined` | 否          | 节点、行或列的唯一标识。     |
| `shouldAutoExpandParent` | `boolean \| undefined`         | 否          | 是否自动展开目标节点的父级。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `setCurrentNode`

设置当前节点。

#### 签名

```ts
setCurrentNode(node: import("element-plus/es/components/tree/src/model/node.mjs").default, shouldAutoExpandParent?: boolean): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.setCurrentNode(row, true);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值                   | 输入值类型             | 必填/默认值 | 输入值说明                   |
| ------------------------ | ---------------------- | ----------- | ---------------------------- |
| `node`                   | `Node`                 | 是          | Element Plus Tree 节点实例。 |
| `shouldAutoExpandParent` | `boolean \| undefined` | 否          | 是否自动展开目标节点的父级。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `getNode`

根据数据或 Key 获取节点。

#### 签名

```ts
getNode(data: import("element-plus").TreeKey | TreeNodeData): import("element-plus/es/components/tree/src/model/node.mjs").default;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
const result = componentRef.value?.getNode(row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                           |
| ------ | ------------------------- | ----------- | ------------------------------------ |
| `data` | `TreeNodeData \| TreeKey` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明                                 |
| -------- | ---------- | ------------------------------------------ |
| `result` | `Node`     | 方法调用结果，具体数据与当前组件状态一致。 |

### `remove`

删除节点。

#### 签名

```ts
remove(data: TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.remove(row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型             | 必填/默认值 | 输入值说明                           |
| ------ | ---------------------- | ----------- | ------------------------------------ |
| `data` | `TreeNodeData \| Node` | 是          | 要查询、插入、删除或替换的业务数据。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `append`

追加子节点。

#### 签名

```ts
append(data: TreeNodeData, parentNode: TreeNodeData | import("element-plus").TreeKey | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.append(row, row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值       | 输入值类型                        | 必填/默认值 | 输入值说明                                   |
| ------------ | --------------------------------- | ----------- | -------------------------------------------- |
| `data`       | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。         |
| `parentNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 追加节点时使用的父节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `insertBefore`

在指定节点前插入节点。

#### 签名

```ts
insertBefore(data: TreeNodeData, refNode: import("element-plus").TreeKey | TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.insertBefore(row, row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                        | 必填/默认值 | 输入值说明                                 |
| --------- | --------------------------------- | ----------- | ------------------------------------------ |
| `data`    | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。       |
| `refNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 插入位置所参照的节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `insertAfter`

在指定节点后插入节点。

#### 签名

```ts
insertAfter(data: TreeNodeData, refNode: import("element-plus").TreeKey | TreeNodeData | import("element-plus/es/components/tree/src/model/node.mjs").default): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const row = { id: 1, name: "Fast" };
componentRef.value?.insertAfter(row, row);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型                        | 必填/默认值 | 输入值说明                                 |
| --------- | --------------------------------- | ----------- | ------------------------------------------ |
| `data`    | `TreeNodeData`                    | 是          | 要查询、插入、删除或替换的业务数据。       |
| `refNode` | `TreeNodeData \| TreeKey \| Node` | 是          | 插入位置所参照的节点数据、key 或节点实例。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `refresh`

刷新

#### 签名

```ts
refresh(): Promise<void>;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
const result = await componentRef.value?.refresh();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型      | 返回值说明                                     |
| -------- | --------------- | ---------------------------------------------- |
| `result` | `Promise<void>` | 异步完成后的结果；Promise 拒绝时由调用方处理。 |

### `setSelection`

设置选择

#### 签名

```ts
setSelection(value: Exclude<ElSelectorModelValue, null | undefined>): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.setSelection(1);
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

| 输入值  | 输入值类型                             | 必填/默认值 | 输入值说明                           |
| ------- | -------------------------------------- | ----------- | ------------------------------------ |
| `value` | `ElSelectorValue \| ElSelectorValue[]` | 是          | 要设置的表单值、选择值或过滤关键字。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearSelection`

清除选择

#### 签名

```ts
clearSelection(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaTreeSelect } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaTreeSelect>>();
componentRef.value?.clearSelection();
</script>

<template>
	<FaTreeSelect ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaUpload

### `abort`

取消上传请求

#### 签名

```ts
abort(file?: UploadFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUpload } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUpload>>();
componentRef.value?.abort(undefined);
</script>

<template>
	<FaUpload ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                                     |
| ------ | ------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadFile \| undefined` | 否          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `submit`

手动上传文件列表

#### 签名

```ts
submit(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUpload } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUpload>>();
componentRef.value?.submit();
</script>

<template>
	<FaUpload ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearFiles`

清空已上传的文件列表（该方法不支持在 before-upload 中调用）

#### 签名

```ts
clearFiles(states?: import("element-plus").UploadStatus[]): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUpload } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUpload>>();
componentRef.value?.clearFiles(["success"]);
</script>

<template>
	<FaUpload ref="componentRef" />
</template>
```

#### 输入

| 输入值   | 输入值类型                    | 必填/默认值 | 输入值说明               |
| -------- | ----------------------------- | ----------- | ------------------------ |
| `states` | `UploadStatus[] \| undefined` | 否          | 需要清除的上传状态集合。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleStart`

手动选择文件

#### 签名

```ts
handleStart(rawFile: import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUpload } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUpload>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleStart(rawFile);
</script>

<template>
	<FaUpload ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型      | 必填/默认值 | 输入值说明                                           |
| --------- | --------------- | ----------- | ---------------------------------------------------- |
| `rawFile` | `UploadRawFile` | 是          | 浏览器选择的原始文件，并带有 Element Plus 上传 uid。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleRemove`

手动移除文件。file 和 rawFile 已被合并。

#### 签名

```ts
handleRemove(file: UploadFile | import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUpload } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUpload>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleRemove(rawFile);
</script>

<template>
	<FaUpload ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                    | 必填/默认值 | 输入值说明                                     |
| ------ | ----------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadRawFile \| UploadFile` | 是          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaUploadImage

### `abort`

取消上传请求

#### 签名

```ts
abort(file?: UploadFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImage>>();
componentRef.value?.abort(undefined);
</script>

<template>
	<FaUploadImage ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                                     |
| ------ | ------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadFile \| undefined` | 否          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `submit`

手动上传文件列表

#### 签名

```ts
submit(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImage>>();
componentRef.value?.submit();
</script>

<template>
	<FaUploadImage ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearFiles`

清空已上传的文件列表（该方法不支持在 before-upload 中调用）

#### 签名

```ts
clearFiles(states?: import("element-plus").UploadStatus[]): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImage>>();
componentRef.value?.clearFiles(["success"]);
</script>

<template>
	<FaUploadImage ref="componentRef" />
</template>
```

#### 输入

| 输入值   | 输入值类型                    | 必填/默认值 | 输入值说明               |
| -------- | ----------------------------- | ----------- | ------------------------ |
| `states` | `UploadStatus[] \| undefined` | 否          | 需要清除的上传状态集合。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleStart`

手动选择文件

#### 签名

```ts
handleStart(rawFile: import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImage>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleStart(rawFile);
</script>

<template>
	<FaUploadImage ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型      | 必填/默认值 | 输入值说明                                           |
| --------- | --------------- | ----------- | ---------------------------------------------------- |
| `rawFile` | `UploadRawFile` | 是          | 浏览器选择的原始文件，并带有 Element Plus 上传 uid。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleRemove`

手动移除文件。file 和 rawFile 已被合并。

#### 签名

```ts
handleRemove(file: UploadFile | import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImage } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImage>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleRemove(rawFile);
</script>

<template>
	<FaUploadImage ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                    | 必填/默认值 | 输入值说明                                     |
| ------ | ----------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadRawFile \| UploadFile` | 是          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## FaUploadImages

### `abort`

取消上传请求

#### 签名

```ts
abort(file?: UploadFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImages } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImages>>();
componentRef.value?.abort(undefined);
</script>

<template>
	<FaUploadImages ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                | 必填/默认值 | 输入值说明                                     |
| ------ | ------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadFile \| undefined` | 否          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `submit`

手动上传文件列表

#### 签名

```ts
submit(): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImages } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImages>>();
componentRef.value?.submit();
</script>

<template>
	<FaUploadImages ref="componentRef" />
</template>
```

#### 输入

该方法没有输入参数。

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `clearFiles`

清空已上传的文件列表（该方法不支持在 before-upload 中调用）

#### 签名

```ts
clearFiles(states?: import("element-plus").UploadStatus[]): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImages } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImages>>();
componentRef.value?.clearFiles(["success"]);
</script>

<template>
	<FaUploadImages ref="componentRef" />
</template>
```

#### 输入

| 输入值   | 输入值类型                    | 必填/默认值 | 输入值说明               |
| -------- | ----------------------------- | ----------- | ------------------------ |
| `states` | `UploadStatus[] \| undefined` | 否          | 需要清除的上传状态集合。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleStart`

手动选择文件

#### 签名

```ts
handleStart(rawFile: import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImages } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImages>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleStart(rawFile);
</script>

<template>
	<FaUploadImages ref="componentRef" />
</template>
```

#### 输入

| 输入值    | 输入值类型      | 必填/默认值 | 输入值说明                                           |
| --------- | --------------- | ----------- | ---------------------------------------------------- |
| `rawFile` | `UploadRawFile` | 是          | 浏览器选择的原始文件，并带有 Element Plus 上传 uid。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

### `handleRemove`

手动移除文件。file 和 rawFile 已被合并。

#### 签名

```ts
handleRemove(file: UploadFile | import("element-plus").UploadRawFile): void;
```

#### 示例

```vue
<script setup lang="ts">
import { ref } from "vue";
import { FaUploadImages } from "fast-element-plus";

const componentRef = ref<InstanceType<typeof FaUploadImages>>();
const rawFile = Object.assign(new File(["Fast"], "fast.txt", { type: "text/plain" }), { uid: Date.now() });
componentRef.value?.handleRemove(rawFile);
</script>

<template>
	<FaUploadImages ref="componentRef" />
</template>
```

#### 输入

| 输入值 | 输入值类型                    | 必填/默认值 | 输入值说明                                     |
| ------ | ----------------------------- | ----------- | ---------------------------------------------- |
| `file` | `UploadRawFile \| UploadFile` | 是          | 需要取消或移除的上传文件；省略时取消全部请求。 |

#### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |
