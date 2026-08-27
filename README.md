[中文](./README.zh.md) | **English**

<h1 align="center">Fast.Element.Plus</h1>

<p align="center">
	Typed Vue 3 components, directives, and hooks for business applications built on Element Plus.
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/fast-element-plus"><img src="https://img.shields.io/npm/v/fast-element-plus?color=orange" alt="npm version" /></a>
	<a href="https://gitee.com/FastDotnet/fast.element.plus/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/fast-element-plus" alt="license" /></a>
</p>

Fast.Element.Plus is an officially open-source Fast business SDK for the Fast team and developers who adopt its coding and interaction conventions. It provides opinionated form, selection, table, tree, upload, layout, dialog, drawer, image, icon, and utility components, plus installable directives, browser UI hooks, shared constants, global component types, and one complete `app.use()` plugin.

The SDK builds business behavior on Element Plus and is not a drop-in replacement. Some defaults, event semantics, remote-data flows, and interactions intentionally follow Fast team conventions.

## Requirements

- ES2022 modern browsers or WebViews.
- Vue `^3.5.41`.
- Element Plus `^2.14.5`.
- Element Plus Icons `^2.3.2`.
- Fast.Element.Plus.Icons `^2.0.0`.

Vue, Element Plus, Element Plus Icons, and Fast.Element.Plus.Icons are required peer dependencies. Both icon packages remain external to the build. Component-only utilities are included in the Fast.Element.Plus build.

The current manually audited Element Plus baseline is `2.14.x`. When the Element Plus minor version changes, for example from `2.14.x` to `2.15.x` or later, native Props, Emits, Slots, exposed methods, defaults, and internal style structures must be audited again. See [Element Plus compatibility and upgrade audit](./docs/ELEMENT_PLUS_COMPATIBILITY.md).

## Install

```bash
pnpm add fast-element-plus vue element-plus @element-plus/icons-vue @fast-element-plus/icons-vue
```

## Use

Register the complete component library:

```ts
import { createApp } from "vue";
import "element-plus/dist/index.css";
import FastElementPlus from "fast-element-plus";
import "fast-element-plus/style.css";
import App from "./App.vue";

createApp(App).use(FastElementPlus).mount("#app");
```

### Theme and responsive layout

Fast.Element.Plus uses Element Plus CSS Variables and supports its official `html.dark` dark mode. Import the official dark variables before the Fast styles when dark mode is required:

```ts
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "fast-element-plus/style.css";

document.documentElement.classList.toggle("dark", isDark);
```

Desktop is the base layout. Responsive rules cover phones below `768px` and tablets from `768px` through `1199px`, including dialogs, drawers, tables, search forms, pagination, trees, selectors, and upload areas. Applications may customize branding, surfaces, borders, shadows, and spacing through Element Plus CSS Variables.

Or import named APIs and let the application control registration:

```ts
import { FaButton, FaTable, useOverlay, vCopy } from "fast-element-plus";

app.use(FaButton);
app.use(FaTable);
app.directive("copy", vCopy);

useOverlay.show();
```

For global component and directive types, add the package type entry to the application `tsconfig.json`:

```jsonc
{
	"compilerOptions": {
		"types": ["element-plus/global", "fast-element-plus/global"],
	},
}
```

## Public modules

| Module     | Public APIs                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Components | `FaAvatar`, `FaButton`, `FaCarNumber`, `FaContextMenu`, `FaDialog`, `FaDrawer`, `FaForm`, `FaFormItem`, `FaFormItemTip`, `FaIcon`, `FaIconSelector`, `FaImage`, `FaInputDialogPage`, `FaLayoutGrid`, `FaLayoutGridItem`, `FaSelect`, `FaSelectOption`, `FaSelectPage`, `FaSelectV2`, `FaTable`, `FaTableColumn`, `FaTree`, `FaTreeSelect`, `FaUpload`, `FaUploadImage`, `FaUploadImages` |
| Directives | `vCopy`, `vDebounce`, `vDraggable`, `vIconCopy`, `vLongpress`, `vThrottle`                                                                                                                                                                                                                                                                                                               |
| Hooks      | `useLoading`, `useOverlay`, `useScreenFull`                                                                                                                                                                                                                                                                                                                                              |
| Constants  | `FaMimeType`, `RegExps`                                                                                                                                                                                                                                                                                                                                                                  |
| Utilities  | `Decimal`, `install`, `version`, `FastElementPlus` component namespace                                                                                                                                                                                                                                                                                                                   |

The package root is the only JavaScript API entry. `fast-element-plus/global` provides Vue global declarations, and `fast-element-plus/style.css` provides the component styles. Files under `dist/` are implementation details.

## CDN

The `unpkg` and `jsdelivr` fields select `dist/index.global.min.js`. Load Vue, Element Plus, Element Plus Icons, and Fast.Element.Plus.Icons first, then access the library as `globalThis.FastElementPlus`. Load `dist/index.css` separately.

## Documentation

- [Component documentation and interactive examples (Chinese)](./docs/components/overview.md)
- [Installation guide (Chinese)](./docs/guide/installation.md)
- [Documentation build and deployment (Chinese)](./docs/guide/deployment.md)
- [API reference](./docs/API.md)
- [Runtime contract](./docs/RUNTIME_CONTRACT.md)
- [Element Plus compatibility and upgrade audit](./docs/ELEMENT_PLUS_COMPATIBILITY.md)
- [Development and release guide (Chinese)](./docs/DEVELOPMENT_RELEASE.zh-CN.md)
- [Contributing](./CONTRIBUTING.md)
- [Security policy](./SECURITY.md)
- [Changelog](./CHANGELOG.md)

Run the complete documentation site locally:

```bash
pnpm docs:dev
```

## License

[Apache-2.0](./LICENSE)
