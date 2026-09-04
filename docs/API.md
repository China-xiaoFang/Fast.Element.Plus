# Fast.Element.Plus API

Fast.Element.Plus exposes one named-export ESM root entry, one Vue global-type entry, and one stylesheet entry. Import public JavaScript APIs from `fast-element-plus`; internal `dist/` paths are not public.

This is a business SDK built around Fast team conventions, not a drop-in replacement for native Element Plus components. Wrappers may intentionally change defaults, event payloads, and business flows; the Fast.Element.Plus types and documentation define their contract.

## Plugin

```ts
import FastElementPlus, { install, version } from "fast-element-plus";
```

- The default export is a Vue plugin with `install(app)` and `version`.
- `install` registers Element Plus, both required icon sets, all components, and all directives. Reinstalling into the same Vue application is a no-op.
- `version` is the package version.
- `INSTALLED_KEY` is the convention key used by the full plugin to mark a Vue application as installed. It is only needed by custom installer integrations.

Importing the root entry applies the Fast Element Plus default Props and enhances the `ElMessageBox.alert`, `ElMessageBox.confirm`, and `ElMessageBox.prompt` singleton methods. Calling `app.use(FastElementPlus)` additionally registers Element Plus and both icon sets. These behaviors are part of the public runtime contract.

An Element Plus minor upgrade requires the [compatibility and upgrade audit](./ELEMENT_PLUS_COMPATIBILITY.md).

## Components

| Group     | Components                                                                                      | Purpose                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Basic     | `FaAvatar`, `FaButton`, `FaIcon`, `FaImage`                                                     | Opinionated display, action, icon, and image behavior                                   |
| Form      | `FaForm`, `FaFormItem`, `FaFormItemTip`, `FaCarNumber`                                          | Form layout, validation integration, field help, and vehicle-number input               |
| Selection | `FaSelect`, `FaSelectOption`, `FaSelectPage`, `FaSelectV2`, `FaTreeSelect`, `FaInputDialogPage` | Local, remote, paged, virtualized, tree, and dialog-based selection                     |
| Data      | `FaTable`, `FaTableColumn`, `FaTree`                                                            | Search, pagination, sorting, columns, selection, tree data, and exposed control methods |
| Overlay   | `FaContextMenu`, `FaDialog`, `FaDrawer`                                                         | Context actions and opinionated overlay containers                                      |
| Layout    | `FaLayoutGrid`, `FaLayoutGridItem`                                                              | Responsive grid layout used by forms and table search areas                             |
| Upload    | `FaUpload`, `FaUploadImage`, `FaUploadImages`                                                   | File and image selection, validation, preview, and upload integration                   |
| Utility   | `FaIconSelector`                                                                                | Selection across Element Plus and Fast.Element.Plus icon sets                           |

Each component also exports its applicable props, emits, slot, instance, context, and supporting types through the root entry. Component names, prop names, emit names, exposed methods, and type shapes are part of the public API.

`FaTable` also exposes `TableColumnsSettingDialog`, `TablePagination`, `TableSearchForm`, and `TableSearchFormItem` as attached components. A full installation registers them as `FaTableColumnsSettingDialog`, `FaTablePagination`, `FaTableSearchForm`, and `FaTableSearchFormItem`. They require the FaTable context and are documented on the [FaTable page](./components/table.md).

Upload transport precedence is an explicitly supplied native `httpRequest`, then `uploadApi`, `uploadUrl`, and a non-default native `action`. The built-in Fast transport continues to apply file validation, model synchronization, form validation, and team notifications. A custom `httpRequest` owns its network implementation and rejoins the Fast state flow through Element Plus success, error, and removal callbacks.

## Component helper exports

`formUtil.validate(ref)` and `formUtil.validateScrollToField(ref)` resolve with `true` when validation succeeds. Starting in `2.0.12`, validation failure rejects with `false` instead of an `Error`; handle this through `catch`, not a resolved boolean check. An unmounted form still rejects with an `Error`. The same contract applies to `FaForm.validate()` without a callback and `FaForm.validateScrollToField()`; `FaForm.validate(callback)` retains the native Element Plus callback behavior.

| Group                    | Runtime exports                                                                                                                                                                                                                                                                                                                                                | Purpose                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Props                    | `faAvatarProps`, `faButtonProps`, `faDialogProps`, `faDrawerProps`, `faFormProps`, `faFormItemProps`, `faFormItemTipProps`, `faIconProps`, `faImageProps`, `faInputDialogPageProps`, `faSelectProps`, `faSelectPageProps`, `faSelectV2Props`, `faTableProps`, `faTreeProps`, `faTreeSelectProps`, `faUploadProps`, `faUploadImageProps`, `faUploadImagesProps` | Reuse component runtime prop definitions               |
| Emits                    | `faAvatarEmits`, `faButtonEmits`, `faDialogEmits`, `faDrawerEmits`, `faFormEmits`, `faImageEmits`, `faInputDialogPageEmits`, `faSelectPageEmits`, `faTableEmits`, `faTreeEmits`, `faTreeSelectEmits`, `faUploadEmits`, `faUploadImageEmits`, `faUploadImagesEmits`                                                                                             | Reuse runtime emit validators                          |
| Native table definitions | `tableProps`, `tableColumnProps`                                                                                                                                                                                                                                                                                                                               | Element Plus table prop baselines used by the wrappers |
| Table utilities          | `PagedSearchTypeEnum`, `getTableDefaultSlots`, `formUtil`, `tableUtil`                                                                                                                                                                                                                                                                                         | Paged conditions, slot data, and table helpers         |
| Selector                 | `SelectV2Props`                                                                                                                                                                                                                                                                                                                                                | Reusable FaSelectV2 prop type and value definitions    |
| Vehicle number           | `CarNumberArea`, `CarNumberDigit`, `CarNumberLetter`                                                                                                                                                                                                                                                                                                           | Region, digit, and letter keyboard data                |

Public types include each component's `Props`, `Emits`, `Slots`, `Instance`, and `Exposes`, together with business data types such as `DefaultRow`, `ElSelectorValue`, `ElSelectorModelValue`, `ElSelectorOutput`, `ElTreeValue`, `ElTreeOutput`, `FaLayoutGridBreakPoint`, `FaTableColumnCtx`, `FaTableSearchColumnCtx`, `PagedInput`, and `PagedResult`. The generated TypeScript declaration at the root entry is authoritative for exact fields, generics, and nullability.

Open-ended application data defaults to `any` when the SDK cannot know its schema. `PagedResult<Output>`, `ElSelectorOutput<Value, Data>`, and `ElTreeOutput<Value, Data>` accept explicit models when available. Raw runtime inputs, errors, reflection results, and values that must be validated remain `unknown`.

## Directives

| API          | Registered name | Behavior                                                 |
| ------------ | --------------- | -------------------------------------------------------- |
| `vCopy`      | `v-copy`        | Copies bound text or numbers when the element is clicked |
| `vDebounce`  | `v-debounce`    | Coalesces rapid click calls                              |
| `vDraggable` | `v-draggable`   | Drags an element inside its parent bounds                |
| `vIconCopy`  | `v-icon-copy`   | Inserts a copy icon next to an element                   |
| `vLongpress` | `v-longpress`   | Calls the bound callback after a long press              |
| `vThrottle`  | `v-throttle`    | Limits repeated click callbacks                          |

These directives require a browser DOM. Applications remain responsible for validating callbacks and copied content.

## Hooks

- `useLoading`: shows or hides the package-owned full-page loading indicator.
- `useOverlay`: shows or hides the package-owned page overlay and accepts an optional opacity.
- `useScreenFull`: initializes or disposes fullscreen observation and provides query, toggle, enter, and exit operations.

The hooks resolve browser globals when called. Do not call them during server rendering.

## Constants and utilities

- `FaMimeType`: file MIME type constants used by upload APIs.
- `RegExps`: regular expressions shared by components, including mainland China mobile numbers, email addresses, weak/medium/strong passwords, six-digit verification codes, and four-character image CAPTCHA codes.
- `Decimal`: the `decimal.js` constructor re-exported for upload progress and consumer calculations.

## Global types and styles

Add `fast-element-plus/global` to `compilerOptions.types` for global component and directive declarations. Import `fast-element-plus/style.css` once per application for package styles. Element Plus styles remain an application responsibility.

## Errors and environment

Invalid component inputs follow each component's documented validation and Element Plus behavior. Browser capability failures surface when the corresponding directive or hook is used. Upload request, clipboard, fullscreen, and application callback failures are not silently converted into successful results.
