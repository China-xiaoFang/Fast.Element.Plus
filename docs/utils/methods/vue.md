# Vue 3 Helper方法 API

本文逐项记录 `@fast-china/utils` 的 Vue 3 Helper 公开函数。示例、输入和返回值均按 Fast.Utils 2.1.8 源码核对。

## `useEmits`

构建响应式 Vue 事件处理器。

### 签名

```ts
export function useEmits<Emits extends EmitsOptions>(
	emits: Emits,
	emit: (...arguments_: never[]) => unknown,
	ignoredEvents: readonly (keyof Emits)[] = []
): ComputedRef<Partial<EmitHandlers<Emits>>>;
```

### 示例

```ts
import { useEmits } from "@fast-china/utils";

const result = useEmits({ change: null }, () => undefined);
```

### 输入

| 输入值          | 输入值类型                            | 必填/默认值   | 输入值说明                       |
| --------------- | ------------------------------------- | ------------- | -------------------------------- |
| `emits`         | `Emits`                               | 是            | Vue emits 配置对象。             |
| `emit`          | `(...arguments_: never[]) => unknown` | 是            | `setup` 上下文提供的 emit 函数。 |
| `ignoredEvents` | `readonly (keyof Emits)[]`            | 否，默认 `[]` | 不需要向子组件透传的事件名。     |

### 返回

| 返回值   | 返回值类型                                  | 返回值说明                       |
| -------- | ------------------------------------------- | -------------------------------- |
| `result` | `ComputedRef<Partial<EmitHandlers<Emits>>>` | 随配置重新计算的事件处理器对象。 |

## `useExpose`

同时暴露组件实例能力并返回同一个对象，便于 `setup` 返回状态供 Vue Devtools 查看。

### 签名

```ts
export function useExpose<Exposed extends object>(expose: (exposed?: Exposed) => void, exposed: Exposed): Exposed;
```

### 示例

```ts
import { useExpose } from "@fast-china/utils";

const exposed = { focus: () => undefined };
const result = useExpose((value) => console.log(value), exposed);
```

### 输入

| 输入值    | 输入值类型                    | 必填/默认值 | 输入值说明                         |
| --------- | ----------------------------- | ----------- | ---------------------------------- |
| `expose`  | `(exposed?: Exposed) => void` | 是          | `setup` 上下文提供的 expose 函数。 |
| `exposed` | `Exposed`                     | 是          | 需要暴露的状态和方法。             |

### 返回

| 返回值   | 返回值类型 | 返回值说明          |
| -------- | ---------- | ------------------- |
| `result` | `Exposed`  | 原始 exposed 对象。 |

## `callOptionalFunction`

统一执行同步或异步函数，异常保持原样向调用方传播。

### 签名

```ts
export async function callOptionalFunction<Arguments extends readonly unknown[], Result>(
	function_: AwaitableFunction<Arguments, Result> | null | undefined,
	...arguments_: Arguments
): Promise<Awaited<Result> | undefined>;
```

### 示例

```ts
import { callOptionalFunction } from "@fast-china/utils";

const result = await callOptionalFunction((value: string) => value.length, "Fast");
```

### 输入

| 输入值       | 输入值类型                                                  | 必填/默认值 | 输入值说明           |
| ------------ | ----------------------------------------------------------- | ----------- | -------------------- |
| `function_`  | `AwaitableFunction<Arguments, Result> \| null \| undefined` | 是          | 可选的待执行函数。   |
| `arguments_` | `Arguments`                                                 | 是          | 原样传入函数的参数。 |

### 返回

| 返回值   | 返回值类型                              | 返回值说明                             |
| -------- | --------------------------------------- | -------------------------------------- |
| `result` | `Promise<Awaited<Result> \| undefined>` | 函数结果；未传函数时返回 `undefined`。 |

## `withInstall`

为主组件附加 Vue 3 `app.use()` 安装能力。

### 签名

```ts
export function withInstall<Main extends VueInstallValue, Extras extends Record<string, VueInstallValue> = Record<never, never>>(
	main: Main,
	extras?: Extras
): Installable<Main> & Extras;
```

### 示例

```ts
import { withInstall } from "@fast-china/utils";

const result = withInstall({ name: "FastMain" }, { Extra: { name: "FastExtra" } });
```

### 输入

| 输入值   | 输入值类型 | 必填/默认值 | 输入值说明                                       |
| -------- | ---------- | ----------- | ------------------------------------------------ |
| `main`   | `Main`     | 是          | 具有非空 `name` 的组件。                         |
| `extras` | `Extras`   | 否          | 同时注册并以可枚举属性挂到主组件的附属组件映射。 |

### 返回

| 返回值   | 返回值类型                   | 返回值说明                                                    |
| -------- | ---------------------------- | ------------------------------------------------------------- |
| `result` | `Installable<Main> & Extras` | 原始 `main` 引用，并附加类型化的 `install` 与 `extras` 属性。 |

## `withNoopInstall`

为不需要单独注册的附属组件附加空安装函数。

### 签名

```ts
export function withNoopInstall<Value extends VueInstallValue>(component: Value): TSXWithInstall<Value>;
```

### 示例

```ts
import { withNoopInstall } from "@fast-china/utils";

const result = withNoopInstall({ name: "FastChild" });
```

### 输入

| 输入值      | 输入值类型 | 必填/默认值 | 输入值说明                            |
| ----------- | ---------- | ----------- | ------------------------------------- |
| `component` | `Value`    | 是          | 尚未定义或继承 `install` 属性的组件。 |

### 返回

| 返回值   | 返回值类型              | 返回值说明                              |
| -------- | ----------------------- | --------------------------------------- |
| `result` | `TSXWithInstall<Value>` | 原组件引用及无副作用的 `install` 方法。 |

## `withInstallDirective`

为 Vue 3 指令附加插件安装能力。

### 签名

```ts
export function withInstallDirective<Value extends VueInstallValue>(directive: Value, name: string): Installable<Value>;
```

### 示例

```ts
import { withInstallDirective } from "@fast-china/utils";

const result = withInstallDirective({ mounted: () => undefined }, "focus");
```

### 输入

| 输入值      | 输入值类型 | 必填/默认值 | 输入值说明                                     |
| ----------- | ---------- | ----------- | ---------------------------------------------- |
| `directive` | `Value`    | 是          | 尚未定义或继承 `install` 属性的 Vue 指令对象。 |
| `name`      | `string`   | 是          | 非空、无空白且不以 `v-` 开头的全局指令名。     |

### 返回

| 返回值   | 返回值类型           | 返回值说明                               |
| -------- | -------------------- | ---------------------------------------- |
| `result` | `Installable<Value>` | 原指令引用及 Vue Plugin `install` 方法。 |

## `definePropType`

为 Vue 运行时 Props 构造器附加泛型类型。

### 签名

```ts
export function definePropType<Value>(runtimeType: unknown): PropType<Value>;
```

### 示例

```ts
import { definePropType } from "@fast-china/utils";

const result = definePropType<string>(String);
```

### 输入

| 输入值        | 输入值类型 | 必填/默认值 | 输入值说明                           |
| ------------- | ---------- | ----------- | ------------------------------------ |
| `runtimeType` | `unknown`  | 是          | Vue 支持的运行时构造器或构造器数组。 |

### 返回

| 返回值   | 返回值类型        | 返回值说明                                     |
| -------- | ----------------- | ---------------------------------------------- |
| `result` | `PropType<Value>` | 同一引用，仅在类型层收窄为 `PropType<Value>`。 |

## `useProps`

构建需要透传给子组件的响应式 Props。

### 签名

```ts
export function useProps<Props extends object, RawProps extends object, IgnoredProp extends keyof RawProps = never>(
	props: Props,
	rawProps: RawProps,
	ignoredProps: readonly IgnoredProp[] = []
): ComputedRef<Omit<Pick<Props, Extract<keyof Props, keyof RawProps>>, Extract<IgnoredProp, keyof Props>>>;
```

### 示例

```ts
import { useProps } from "@fast-china/utils";

const props = { internal: true, label: "Fast" };
const rawProps = { label: String };
const result = useProps(props, rawProps);
```

### 输入

| 输入值         | 输入值类型               | 必填/默认值   | 输入值说明                                |
| -------------- | ------------------------ | ------------- | ----------------------------------------- |
| `props`        | `Props`                  | 是            | Vue `setup` 接收的只读响应式 Props 对象。 |
| `rawProps`     | `RawProps`               | 是            | 子组件的运行时 Props 配置。               |
| `ignoredProps` | `readonly IgnoredProp[]` | 否，默认 `[]` | 不需要透传的 Props 名称。                 |

### 返回

| 返回值   | 返回值类型                                                                                                | 返回值说明                                              |
| -------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `result` | `ComputedRef<Omit<Pick<Props, Extract<keyof Props, keyof RawProps>>, Extract<IgnoredProp, keyof Props>>>` | 只包含 `rawProps` 声明键且随 Props 更新的 ComputedRef。 |

## `useRender`

在当前 Vue 3 组件实例上安装 TSX 渲染函数。

### 签名

```ts
export function useRender(render: () => VNode): void;
```

### 示例

```ts
import { useRender } from "@fast-china/utils";

import { h } from "vue";

useRender(() => h("div", "Fast"));
```

### 输入

| 输入值   | 输入值类型    | 必填/默认值 | 输入值说明           |
| -------- | ------------- | ----------- | -------------------- |
| `render` | `() => VNode` | 是          | 当前组件的渲染函数。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明   |
| -------- | ---------- | ------------ |
| `result` | `void`     | 没有返回值。 |

## `makeSlots`

为 Options API 的 `slots` 选项创建带作用域参数的类型声明。

### 签名

```ts
export function makeSlots<Slots extends RawSlots>(): TypedSlotsDeclaration<Slots>;
```

### 示例

```ts
import { makeSlots } from "@fast-china/utils";

const result = makeSlots<{ default: { title: string } }>();
```

### 输入

该方法没有输入参数。

### 返回

| 返回值   | 返回值类型                     | 返回值说明                                                           |
| -------- | ------------------------------ | -------------------------------------------------------------------- |
| `result` | `TypedSlotsDeclaration<Slots>` | 运行时 `Object` 构造器，并携带仅供 TypeScript 使用的 Slot 类型标记。 |

## `withDefineType`

保留传入值并显式指定其 TypeScript 类型。

### 签名

```ts
export function withDefineType<Value>(data?: Value): Value;
```

### 示例

```ts
import { withDefineType } from "@fast-china/utils";

const result = withDefineType<{ name: string }>({ name: "Fast" });
```

### 输入

| 输入值 | 输入值类型 | 必填/默认值 | 输入值说明     |
| ------ | ---------- | ----------- | -------------- |
| `data` | `Value`    | 否          | 可选的原始值。 |

### 返回

| 返回值   | 返回值类型 | 返回值说明                                   |
| -------- | ---------- | -------------------------------------------- |
| `result` | `Value`    | 传入值本身；省略时返回类型化的 `undefined`。 |

## `useEventListener`

注册原生事件监听器，并在响应式目标变化或当前 Vue 作用域销毁时自动移除。

### 签名

```ts
export function useEventListener<EventType extends Event = Event>(
	target: EventTargetSource,
	event: string,
	listener: (event: EventType) => void,
	options?: boolean | AddEventListenerOptions
): () => void;
```

### 示例

```ts
import { useEventListener } from "@fast-china/utils";

const stop = useEventListener(document, "visibilitychange", () => {
	console.log(document.visibilityState);
});
```

### 输入

| 输入值     | 输入值类型                           | 必填/默认值 | 输入值说明                                              |
| ---------- | ------------------------------------ | ----------- | ------------------------------------------------------- |
| `target`   | `EventTargetSource`                  | 是          | 原生 EventTarget、Ref 或 Getter，可为空。               |
| `event`    | `string`                             | 是          | 原生事件名称。                                          |
| `listener` | `(event: EventType) => void`         | 是          | 事件回调。                                              |
| `options`  | `boolean \| AddEventListenerOptions` | 否          | 原生 `addEventListener` 与 `removeEventListener` 选项。 |

### 返回

| 返回值 | 返回值类型   | 返回值说明                                       |
| ------ | ------------ | ------------------------------------------------ |
| `stop` | `() => void` | 可提前移除监听器；Vue 作用域销毁时也会自动调用。 |

## `useWindowSize`

响应式读取浏览器窗口的 `innerWidth` 和 `innerHeight`。

### 签名

```ts
export function useWindowSize(): UseWindowSizeReturn;
```

### 示例

```ts
import { useWindowSize } from "@fast-china/utils";

const { width, height } = useWindowSize();
```

### 输入

该方法没有输入参数。浏览器环境必须在 Vue 响应式作用域内调用，以便自动清理监听器。

### 返回

| 返回值   | 返回值类型                     | 返回值说明                                      |
| -------- | ------------------------------ | ----------------------------------------------- |
| `width`  | `Readonly<ShallowRef<number>>` | 当前 `window.innerWidth`；非浏览器环境为 `0`。  |
| `height` | `Readonly<ShallowRef<number>>` | 当前 `window.innerHeight`；非浏览器环境为 `0`。 |

本方法不提供初始尺寸、Visual Viewport、Outer Size 等高级选项。

## `useResizeObserver`

使用原生 `ResizeObserver` 监听单个元素或响应式元素。

### 签名

```ts
export function useResizeObserver(target: ResizeObserverTarget, callback: ResizeObserverCallback, options?: ResizeObserverOptions): () => void;
```

### 示例

```ts
import { useResizeObserver } from "@fast-china/utils";

const stop = useResizeObserver(elementRef, (entries) => {
	console.log(entries[0]?.contentRect);
});
```

### 输入

| 输入值     | 输入值类型               | 必填/默认值 | 输入值说明                        |
| ---------- | ------------------------ | ----------- | --------------------------------- |
| `target`   | `ResizeObserverTarget`   | 是          | 原生元素、Ref 或 Getter，可为空。 |
| `callback` | `ResizeObserverCallback` | 是          | 原生 ResizeObserver 回调。        |
| `options`  | `ResizeObserverOptions`  | 否          | 原生元素观察选项。                |

### 返回

| 返回值 | 返回值类型   | 返回值说明                                             |
| ------ | ------------ | ------------------------------------------------------ |
| `stop` | `() => void` | 提前断开观察；不支持 ResizeObserver 的运行时为空操作。 |

## `useElementSize`

通过 `useResizeObserver` 响应式读取元素的 Content Rect 尺寸。

### 签名

```ts
export function useElementSize(target: ResizeObserverTarget, initialSize?: ElementSize, options?: ResizeObserverOptions): UseElementSizeReturn;
```

### 示例

```ts
import { useElementSize } from "@fast-china/utils";

const { width, height, stop } = useElementSize(elementRef, { height: 0, width: 0 });
```

### 输入

| 输入值        | 输入值类型              | 必填/默认值                        | 输入值说明                        |
| ------------- | ----------------------- | ---------------------------------- | --------------------------------- |
| `target`      | `ResizeObserverTarget`  | 是                                 | 原生元素、Ref 或 Getter，可为空。 |
| `initialSize` | `ElementSize`           | 否，默认 `{ width: 0, height: 0 }` | 首次观察结果前的宽高。            |
| `options`     | `ResizeObserverOptions` | 否                                 | 原生元素观察选项。                |

### 返回

| 返回值   | 返回值类型                     | 返回值说明                    |
| -------- | ------------------------------ | ----------------------------- |
| `width`  | `Readonly<ShallowRef<number>>` | 元素 Content Rect 宽度。      |
| `height` | `Readonly<ShallowRef<number>>` | 元素 Content Rect 高度。      |
| `stop`   | `() => void`                   | 提前停止底层 ResizeObserver。 |

## `useNow`

按固定间隔提供响应式当前时间。

### 签名

```ts
export function useNow(intervalMilliseconds?: number): Readonly<ShallowRef<Date>>;
```

### 示例

```ts
import { useNow } from "@fast-china/utils";

const now = useNow();
```

### 输入

| 输入值                 | 输入值类型 | 必填/默认值     | 输入值说明                               |
| ---------------------- | ---------- | --------------- | ---------------------------------------- |
| `intervalMilliseconds` | `number`   | 否，默认 `1000` | 原生计时器支持范围内的非负整数毫秒间隔。 |

### 返回

| 返回值 | 返回值类型                   | 返回值说明                                |
| ------ | ---------------------------- | ----------------------------------------- |
| `now`  | `Readonly<ShallowRef<Date>>` | 当前时间；SSR 中只返回调用时的静态 Date。 |

浏览器和 uni-app 中必须在 Vue 响应式作用域内调用，定时器会随作用域自动停止。

## `useBreakpoints`

通过原生 `matchMedia()` 创建响应式最小宽度断点。

### 签名

```ts
export function useBreakpoints<Key extends string>(breakpoints: Breakpoints<Key>): UseBreakpointsReturn<Key>;
```

### 示例

```ts
import { useBreakpoints } from "@fast-china/utils";

const breakpoints = useBreakpoints({ desktop: 1280, mobile: 0, tablet: 768 });
const active = breakpoints.active();
```

### 输入

| 输入值        | 输入值类型         | 必填/默认值 | 输入值说明                                         |
| ------------- | ------------------ | ----------- | -------------------------------------------------- |
| `breakpoints` | `Breakpoints<Key>` | 是          | 断点名称与非负最小像素宽度；名称 `active` 被保留。 |

### 返回

| 返回值       | 返回值类型                      | 返回值说明                                 |
| ------------ | ------------------------------- | ------------------------------------------ |
| 同名断点属性 | `Readonly<ShallowRef<boolean>>` | 当前视口是否满足对应的 `min-width`。       |
| `active()`   | `ComputedRef<Key \| "">`        | 当前命中的最大断点，未命中时返回空字符串。 |

非浏览器环境下所有断点均为 `false`；浏览器环境必须在 Vue 响应式作用域内调用。本方法只支持 `min-width`。
