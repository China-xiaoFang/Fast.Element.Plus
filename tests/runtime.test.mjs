import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { Rolldown } from "tsdown";

// 组件库面向浏览器打包器；测试将开发环境中可解析的运行时依赖打入第二阶段测试包。
const bundle = await Rolldown.rolldown({ input: fileURLToPath(new URL("../dist/index.mjs", import.meta.url)) });
const generated = await bundle.generate({ format: "esm", codeSplitting: false });
await bundle.close();
const entry = generated.output.find((item) => item.type === "chunk" && item.isEntry);
if (entry?.type !== "chunk") throw new Error("Runtime bundle did not produce an entry chunk.");
const library = await import(`data:text/javascript;base64,${Buffer.from(entry.code).toString("base64")}`);
const FastElementPlus = library.default;
const { getTableColumnSlotNames, getTableSearchSlotNames } = await import(new URL("../dist/components/table/src/table.mjs", import.meta.url));
const { formatTableDateValue } = await import(new URL("../dist/components/table/src/tableColumn.mjs", import.meta.url));
const { tableUtil } = await import(new URL("../dist/components/table/utils/table.mjs", import.meta.url));
const { faTreeEmits, faTreeProps } = await import(new URL("../dist/components/tree/src/tree.mjs", import.meta.url));

const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("FaTable only collects configured search, cell, and header slots", () => {
	const columns = [
		{ slot: "cell", headerSlot: "cellHeader", search: { slot: "search" } },
		{ slot: "cell", headerSlot: "secondHeader", search: { slot: "advancedSearch" } },
		{ search: {} },
	];

	assert.deepEqual(getTableSearchSlotNames(columns), ["search", "advancedSearch"]);
	assert.deepEqual(getTableColumnSlotNames(columns), ["cell", "cellHeader", "secondHeader"]);
});

test("FaTable date columns preserve Date input parsing", () => {
	assert.equal(formatTableDateValue(new Date(2026, 7, 31, 14, 5, 6), "YYYY-MM-DD HH:mm:ss"), "2026-08-31 14:05:06");
});

test("local FaTable sorting supports V1 comparable values", () => {
	const ascending = [{ value: true }, { value: false }].sort(tableUtil.arrayDynamicSort([{ enField: "value", mode: "ascending" }]));
	assert.deepEqual(
		ascending.map((row) => row.value),
		[false, true]
	);

	const newer = new Date(2026, 7, 31);
	const older = new Date(2025, 7, 31);
	const descending = [{ value: older }, { value: newer }].sort(tableUtil.arrayDynamicSort([{ enField: "value", mode: "descending" }]));
	assert.deepEqual(
		descending.map((row) => row.value),
		[newer, older]
	);
});

test("FaTree all defaults to undefined", () => {
	assert.equal(faTreeProps.allValue.default, undefined);
	assert.equal(faTreeEmits["update:modelValue"](undefined), true);
});

test("root entry exposes the documented plugin, components, directives, and hooks", () => {
	assert.equal(library.version, packageJson.version);
	assert.equal(FastElementPlus.version, packageJson.version);
	assert.equal(FastElementPlus.install, library.install);
	assert.equal("FastElementPlus" in library, false);

	for (const componentName of ["FaButton", "FaDialog", "FaTable", "FaTableColumn", "FaTree", "FaUpload"]) {
		const component = library[componentName];
		assert.equal(typeof component, "object");
		assert.equal(typeof component.install, "function");
	}

	for (const componentName of ["TableColumnsSettingDialog", "TablePagination", "TableSearchForm", "TableSearchFormItem"]) {
		const component = library.FaTable[componentName];
		assert.equal(typeof component, "object");
		assert.match(component.name, /^FaTable/u);
	}

	for (const directiveName of ["vCopy", "vDebounce", "vDraggable", "vIconCopy", "vLongpress", "vThrottle"]) {
		const directive = library[directiveName];
		assert.equal(typeof directive, "object");
		assert.equal(typeof directive.install, "function");
	}

	assert.equal(typeof library.useLoading.show, "function");
	assert.equal(typeof library.useOverlay.hide, "function");
	assert.equal(typeof library.useScreenFull, "object");
	assert.equal(typeof library.useScreenFull.toggle, "function");
});

test("FaTable installs its documented related components", () => {
	const components = new Map();
	const directives = new Map();
	const app = {
		component(name, component) {
			if (component === undefined) return components.get(name);
			components.set(name, component);
			return app;
		},
		directive(name, directive) {
			if (directive === undefined) return directives.get(name);
			directives.set(name, directive);
			return app;
		},
	};

	library.FaTable.install(app);
	assert.deepEqual(
		[...components.keys()],
		["FaTable", "FaTableColumn", "FaTableColumnsSettingDialog", "FaTablePagination", "FaTableSearchForm", "FaTableSearchFormItem"]
	);
});
