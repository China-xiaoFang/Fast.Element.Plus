# Security Policy

## Supported releases

Security fixes are provided for the latest stable release. Pre-release builds and unsupported runtime combinations receive best-effort investigation only.

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability. Email `2875616188@qq.com` with the subject `fast-element-plus security report` and include:

- affected package version and public API;
- browser, WebView, Vue, and Element Plus versions;
- a minimal reproduction without real credentials or user data;
- expected and observed impact;
- whether untrusted text, URLs, files, HTML attributes, or upload responses are involved.

Maintainers should acknowledge a complete report within five business days. Timelines depend on severity, reproducibility, affected platforms, and release coordination. Do not disclose the issue publicly until a fix and coordinated disclosure plan are available.

## Security boundaries

Fast.Element.Plus is a UI component library. It does not authenticate users, authorize operations, sanitize arbitrary HTML, validate server permissions, or scan uploaded files.

- Applications must validate and encode untrusted data before passing it to rendered HTML, URLs, styles, or third-party components.
- Upload components provide UI and request integration only. The server must enforce file type, size, content, storage, authorization, and malware controls.
- Copy, drag, long-press, throttle, debounce, loading, overlay, and fullscreen APIs require a browser DOM and must only receive application-controlled callbacks and elements.
- Peer dependencies remain application-controlled. Applications must review and pin their own Vue and Element Plus versions according to their supply-chain policy; bundled icon and internal utility code is reviewed through this package lockfile.
- CDN consumers must control script order, exact versions, CSP, and SRI where required.
- Source maps contain source content for debugging. Do not place credentials, private endpoints, or production data in source files.

## Dependency and release controls

- Development dependency resolution is locked by `pnpm-lock.yaml` and CI installs with `--frozen-lockfile`.
- Public packages are built from the repository root and checked with type tests, runtime tests, package-contract tests, and Publint.
- Releases are performed manually from a trusted environment after archive inspection; CI does not publish packages.
