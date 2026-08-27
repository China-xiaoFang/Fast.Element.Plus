# Element Plus compatibility and upgrade audit

## Project scope

Fast.Element.Plus is an officially open-source Fast business SDK for the Fast team and developers who adopt its coding and interaction conventions. It adds opinionated defaults and business-oriented table, upload, remote-data, dialog, and form behavior. It is not a drop-in replacement for Element Plus.

The SDK intentionally keeps its Element Plus default-prop configuration and its enhanced `ElMessageBox.alert`, `ElMessageBox.confirm`, and `ElMessageBox.prompt` singleton methods. These enhancements are applied when the Fast.Element.Plus root entry is imported and are part of the documented runtime contract.

## Audited baseline

- Element Plus: `2.14.x`; the current development version is `2.14.5`.
- Vue: `3.5.x`; the current development version is `3.5.41`.

## Upgrade rule

- Patch upgrade, such as `2.14.5` to `2.14.6`: run the complete checks and review relevant Element Plus changelog entries.
- Minor upgrade, meaning the middle SemVer number changes, such as `2.14.x` to `2.15.x` or later: complete the full manual audit in this document before updating the dependency.
- Major upgrade, such as `2.x` to `3.x`: treat it as a compatibility migration with a dedicated release and migration guide.

## Required audit

For every wrapped Avatar, Button, Dialog, Drawer, Form, Image, Select, SelectV2, Table, TableColumn, Tree, TreeSelect, and Upload component:

1. Compare native Props, including additions, removals, renames, defaults, and validators.
2. Compare native Emits, payloads, and timing; verify that business events are not duplicated.
3. Compare Slot names and scoped Slot payloads.
4. Compare exposed methods and their signatures.
5. Verify `setPropsDefaults` support and all Fast default values.
6. Verify MessageBox shortcut overloads and `beforeClose` behavior.
7. Verify whether an empty clearable `ElInput` renders and reserves suffix space.
8. Review every `.el-*` internal selector and Element Plus CSS variable used by SDK styles.
9. Run type, package, CDN, Tree Shaking, and component behavior tests.
10. Update API documentation, the runtime contract, the changelog, and the audited baseline only after completing the review.

Business wrappers may intentionally change Element Plus defaults or behavior, but those differences must be explicit in public types and documentation. Dependency upgrades must not silently introduce missing or obsolete native capabilities.
