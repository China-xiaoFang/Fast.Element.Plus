# Changelog

All notable changes to Fast.Element.Plus are documented in this file.

## [2.0.5] - 2026-08-31

### Fixed

- Aligned blank fill colors with overlay backgrounds in dialogs, drawers, and table cards to prevent nested component background differences.
- Removed the table search border transition to prevent temporary light or dark border flashes while showing or hiding it.

## [2.0.4] - 2026-08-31

### Fixed

- Restored caller-controlled item, dialog, drawer, table, tree, and upload dimensions without responsive minimum-size overrides.
- Restored the `FaDrawer` opening and closing transform transition.
- Restored Element Plus theme-controlled border colors for tables, trees, popovers, drawers, and upload variants.
- Corrected `FaUploadImage` width and height handling and restored Element Plus picture-card sizing for `FaUploadImages`.

## [2.0.3] - 2026-08-31

### Fixed

- Forwarded only configured search, cell, and `headerSlot` slots from `FaTable` to generated child components.
- Restored table date parsing and V1-compatible local sorting for comparable non-number values.
- Returned `Promise` from asynchronous public loading and Dialog/Drawer methods so callback errors remain available to callers.
- Restored `undefined` as the default `FaTree` “全部” value.
- Restored expose-only visibility control for `FaDialog` and `FaDrawer`; external `v-model` values no longer open or close them.

## [2.0.2] - 2026-08-29

### Changed

- Relaxed open-ended business data types for tables, pagination, selectors, trees, context menus, request parameters, and dynamic configuration while preserving `unknown` at untrusted runtime boundaries.
- Added generic selector and tree payload types, precise selection change payloads, and consumer type tests for anonymous-data defaults.
- Renamed the public table row type from `FaTableRow` to `DefaultRow` and removed redundant internal forwarding exports for Element Plus tree types.

## [2.0.1] - 2026-08-28

### Changed

- Externalized declared runtime dependencies from the ESM build so package managers resolve the installed dependency graph without copying third-party modules into `dist/node_modules`; the CDN IIFE remains self-contained.

### Removed

- Removed the redundant named `FastElementPlus` component namespace export; components remain available as tree-shakable named exports and the default export remains the complete Vue plugin.

## [2.0.0] - 2026-08-28

### Added

- Added one typed ESM package entry for 26 Vue components, 6 directives, 3 browser UI hooks, constants, Decimal, and the complete application plugin.
- Added Vue global component and directive declarations through `fast-element-plus/global`.
- Added a separately minified CDN IIFE and a documented `fast-element-plus/style.css` entry.
- Added strict type checking, local ESLint Flat Config, formatting checks, runtime tests, consumer type tests, package-contract tests, Publint, and Node.js 22/24 CI.
- Added synchronized English and Chinese README and API references, runtime contract, contribution guidance, security policy, and development/release instructions.
- Standardized repository-root publishing with one `package.json` and one root `dist/` directory.
- Added an Element Plus `2.14.x` compatibility audit that checks native runtime Props and Emits and blocks unreviewed minor-version upgrades.
- Added public Slot type exports and missing native events, Slots, and exposed methods for Form, Image, Tree, TreeSelect, SelectV2, and Table wrappers.
- Added phone, tablet, and desktop responsive styles that follow Element Plus light/dark CSS Variables directly.

### Changed

- Established the TypeScript 6 and tsdown build pipeline.
- Organized source code under `src/` and component styles under `styles/`.
- Merged declaration generation into the root `tsconfig.json`.
- Synchronized the complete applicable Fast.ESLint.Config rule set in the repository-local Flat Config while retaining explanatory Chinese comments.
- Kept Vue, Element Plus, and both required icon implementations as external runtime peers, and moved the required Fast.Utils behavior into non-public `src/utils/` modules.
- Documented Fast.Element.Plus as an officially open-source Fast business SDK rather than a drop-in Element Plus replacement.
- Applied Element Plus default Props and MessageBox shortcut enhancements during root-module evaluation while keeping only CSS declared as a package side effect.
- Preserved Fast default Props and MessageBox shortcut conventions while preventing caller option mutation and duplicate completion; MessageBox `beforeClose` callbacks close by default after settling.
- Made remote Select, SelectPage, SelectV2, TreeSelect, Tree, and Table data loading resistant to stale request results.
- Improved upload request configuration, concurrent loading state, native custom requests, removal hooks, and model synchronization.
- Improved Dialog and Drawer model synchronization, accessibility, resizing, and cleanup while preserving Fast asynchronous `open` and `close` event semantics without duplicate native forwarding.
- Restored the pre-Element Plus 2.14 empty `ElInput` clearable layout for Table, Tree, SelectPage, and dynamic Table search fields so hidden clear icons do not reserve space.
- Scoped Table styles and added responsive IconSelector styling.
- Improved dialogs, drawers, tables, forms, trees, selectors, car-number input, images, and uploads for dark mode, touch input, and narrow viewports.

[2.0.5]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.5
[2.0.4]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.4
[2.0.3]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.3
[2.0.2]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.2
[2.0.1]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.1
[2.0.0]: https://gitee.com/FastDotnet/fast.element.plus/releases/tag/v2.0.0
