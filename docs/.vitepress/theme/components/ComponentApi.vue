<script setup lang="ts">
import { computed } from "vue";
import { version as elementPlusVersion } from "element-plus";
import {
	componentPropDescriptions,
	eventDescriptions,
	exposeDescriptions,
	fastComponents,
	fastMetadata,
	nativeComponents,
	nativeDocumentation,
	nativeMetadata,
	propDescriptions,
	slotDescriptions,
} from "./api-metadata";
import type { ComponentApiMetadata, FastComponentName, NativeApiMember, NativeComponentName } from "./api-metadata";

type RuntimeProp =
	| {
			default?: unknown;
			required?: boolean;
			type?: unknown;
	  }
	| Function
	| Function[];

interface RuntimeComponent {
	emits?: Record<string, unknown> | string[];
	props?: Record<string, RuntimeProp>;
}

interface ApiRow {
	defaultValue: string;
	description: string;
	name: string;
	required: boolean;
	type: string;
}

interface MemberRow {
	description: string;
	name: string;
	type: string;
}

interface DisplayApiRow extends ApiRow {
	nativeDefaultValue?: string;
	sourceLabel: string;
	sourceState: string;
}

interface DisplayMemberRow extends MemberRow {
	sourceLabel: string;
	sourceState: string;
}

interface MemberSection {
	emptyText: string;
	key: string;
	rows: DisplayMemberRow[];
	title: string;
}

const props = defineProps<{
	name: FastComponentName;
	native?: NativeComponentName;
}>();

const asRuntimeComponent = (component: unknown): RuntimeComponent => component as RuntimeComponent;

const formatType = (rawProp: RuntimeProp): string => {
	const value = typeof rawProp === "function" || Array.isArray(rawProp) ? { type: rawProp } : rawProp;
	const type = value?.type;
	const types = Array.isArray(type) ? type : type ? [type] : [];
	const names = types.map((item) => (typeof item === "function" && item.name ? item.name : String(item)));
	return names.length > 0 ? names.join(" / ") : "—";
};

const formatDefault = (rawProp: RuntimeProp): string => {
	const value = typeof rawProp === "function" || Array.isArray(rawProp) ? { type: rawProp } : rawProp;
	const types = Array.isArray(value?.type) ? value.type : [value?.type];
	if (value?.default === undefined) {
		return types.includes(Boolean) ? "false" : "—";
	}
	if (typeof value.default === "function") {
		if (types.includes(Function)) return "—";
		if (types.includes(Array) || types.includes(Object)) {
			try {
				return JSON.stringify(value.default());
			} catch {
				return "工厂函数";
			}
		}
		return "运行时生成";
	}
	if (typeof value.default === "string") return value.default || '""';
	try {
		return JSON.stringify(value.default);
	} catch {
		return String(value.default);
	}
};

const normalizeProps = (component: unknown, componentName: string, documentedProps: NativeApiMember[] = []): ApiRow[] => {
	const runtimeProps = asRuntimeComponent(component).props ?? {};
	const documentedPropsMap = new Map(documentedProps.map((item) => [item.name, item]));
	return Object.entries(runtimeProps).map(([name, rawProp]) => {
		const value = typeof rawProp === "function" || Array.isArray(rawProp) ? { type: rawProp } : rawProp;
		const documentedProp = documentedPropsMap.get(name);
		return {
			name,
			type: documentedProp?.type ?? formatType(rawProp),
			defaultValue: formatDefault(rawProp),
			required: Boolean(value?.required),
			description:
				componentPropDescriptions[componentName]?.[name] ??
				propDescriptions[name] ??
				documentedProp?.description ??
				(componentName.startsWith("El") ? `Element Plus 原生 ${name} 属性，Fast 未修改其语义。` : "Fast 组件属性。"),
		};
	});
};

const normalizeEmits = (component: unknown): string[] => {
	const emits = asRuntimeComponent(component).emits ?? [];
	return Array.isArray(emits) ? emits : Object.keys(emits);
};

const fastComponent = computed(() => fastComponents[props.name]);
const nativeComponent = computed(() => (props.native ? nativeComponents[props.native] : undefined));
const metadata = computed<ComponentApiMetadata>(() => fastMetadata[props.name]);
const nativeApiMetadata = computed<ComponentApiMetadata>(() => (props.native ? nativeMetadata[props.native] : {}));
const nativeDocs = computed(() => (props.native ? nativeDocumentation[props.native] : undefined));
const fastRows = computed(() => normalizeProps(fastComponent.value, props.name));
const nativeRows = computed(() =>
	nativeComponent.value && props.native ? normalizeProps(nativeComponent.value, props.native, nativeDocs.value?.props) : []
);
const changedNames = computed(() => new Set(metadata.value.changedProps ?? []));
const fastEmits = computed(() => normalizeEmits(fastComponent.value));
const nativeEmits = computed(() => (nativeComponent.value ? normalizeEmits(nativeComponent.value) : []));
const apiHeadingId = computed(() => `${props.name.replaceAll(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()}-api`);

const memberName = (value: string): string => value.split(/[({（]/, 1)[0] ?? value;
const memberKey = (value: string): string =>
	memberName(value)
		.replaceAll(/-([a-z])/g, (_, character: string) => character.toUpperCase())
		.toLowerCase();
const memberType = (value: string): string => {
	const index = value.search(/[({（]/);
	return index < 0 ? "—" : value.slice(index).replace("（", "(");
};
const normalizeMemberRows = (values: string[] | undefined, descriptions: Record<string, string>, fallback: string): MemberRow[] =>
	(values ?? []).map((name) => ({
		name,
		description: descriptions[name] ?? descriptions[memberName(name)] ?? fallback,
		type: memberType(name),
	}));

const fastSlotRows = computed(() => normalizeMemberRows(metadata.value.slots, slotDescriptions, "组件自定义插槽。"));
const fastExposeRows = computed(() => normalizeMemberRows(metadata.value.exposes, exposeDescriptions, "组件公开实例成员。"));
const nativeExposeRows = computed(() => normalizeMemberRows(nativeApiMetadata.value.exposes, exposeDescriptions, "Element Plus 公开实例成员。"));

const mergeNativeMembers = (documented: NativeApiMember[] | undefined, names: string[]): NativeApiMember[] => {
	const members = new Map((documented ?? []).map((item) => [item.name, item]));
	for (const name of names) {
		if (!members.has(name)) members.set(name, { name });
	}
	return [...members.values()];
};

const nativeEventRows = computed(() =>
	mergeNativeMembers(nativeDocs.value?.events, nativeEmits.value).map((item) => ({
		...item,
		description: item.description ?? eventDescriptions[item.name] ?? "Element Plus 组件事件。",
	}))
);
const nativeSlotRows = computed(() =>
	mergeNativeMembers(nativeDocs.value?.slots, nativeApiMetadata.value.slots ?? []).map((item) => ({
		...item,
		description: item.description ?? slotDescriptions[item.name] ?? "Element Plus 组件插槽。",
	}))
);

const propRows = computed<DisplayApiRow[]>(() => {
	const fastMap = new Map(fastRows.value.map((item) => [item.name, item]));
	const nativeMap = new Map(nativeRows.value.map((item) => [item.name, item]));
	const names = [...new Set([...fastMap.keys(), ...nativeMap.keys()])];
	return names
		.map((name, index) => {
			const fastRow = fastMap.get(name);
			const nativeRow = nativeMap.get(name);
			const row = fastRow ?? nativeRow;
			if (!row) return undefined;

			const changed = Boolean(fastRow && nativeRow && (changedNames.value.has(name) || fastRow.defaultValue !== nativeRow.defaultValue));
			const sourceLabel = changed ? "Fast 修改" : fastRow && !nativeRow ? "Fast 新增" : fastRow ? "EL 原生" : "EL 原生 · 未透传";
			const sourceState = changed ? "is-changed" : fastRow && !nativeRow ? "is-fast" : fastRow ? "is-supported" : "is-unsupported";
			const rank = changed ? 0 : fastRow && !nativeRow ? 1 : fastRow ? 2 : 3;
			return {
				...row,
				description:
					fastRow?.description === "Fast 组件属性。"
						? (nativeRow?.description ?? fastRow.description)
						: (fastRow?.description ?? row.description),
				...(changed && nativeRow ? { nativeDefaultValue: nativeRow.defaultValue } : {}),
				sourceLabel,
				sourceState,
				_rank: rank,
				_index: index,
			};
		})
		.filter((item): item is DisplayApiRow & { _index: number; _rank: number } => item !== undefined)
		.sort((left, right) => left._rank - right._rank || left._index - right._index);
});

const mergeMemberRows = (fast: MemberRow[], native: MemberRow[]): DisplayMemberRow[] => {
	const fastMap = new Map(fast.map((item) => [memberKey(item.name), item]));
	const nativeMap = new Map(native.map((item) => [memberKey(item.name), item]));
	const keys = [...new Set([...fastMap.keys(), ...nativeMap.keys()])];
	return keys.map((key) => {
		const fastRow = fastMap.get(key);
		const nativeRow = nativeMap.get(key);
		const row = fastRow ?? nativeRow;
		if (!row) throw new Error(`API 成员 ${key} 缺少定义。`);
		return {
			name: fastRow?.name ?? nativeRow?.name ?? row.name,
			description: fastRow?.description ?? nativeRow?.description ?? row.description,
			type: nativeRow?.type && nativeRow.type !== "—" ? nativeRow.type : (fastRow?.type ?? "—"),
			sourceLabel: fastRow && nativeRow ? "EL 原生" : fastRow ? "Fast 新增" : "EL 原生 · 未透传",
			sourceState: fastRow && nativeRow ? "is-supported" : fastRow ? "is-fast" : "is-unsupported",
		};
	});
};

const fastEventRows = computed<MemberRow[]>(() =>
	fastEmits.value.map((name) => ({ name, type: "—", description: eventDescriptions[name] ?? "当前组件触发的业务事件。" }))
);
const documentedNativeEventRows = computed<MemberRow[]>(() =>
	nativeEventRows.value.map((item) => ({ name: item.name, type: item.type ?? "—", description: item.description }))
);
const documentedNativeSlotRows = computed<MemberRow[]>(() =>
	nativeSlotRows.value.map((item) => ({ name: item.name, type: item.type ?? "—", description: item.description }))
);

const memberSections = computed<MemberSection[]>(() => [
	{
		key: "events",
		title: "Events 事件",
		emptyText: "无运行时 Emits 声明。",
		rows: mergeMemberRows(fastEventRows.value, documentedNativeEventRows.value),
	},
	{
		key: "slots",
		title: "Slots 插槽",
		emptyText: "无。",
		rows: mergeMemberRows(fastSlotRows.value, documentedNativeSlotRows.value),
	},
	{
		key: "exposes",
		title: "Expose 暴露",
		emptyText: "无。",
		rows: mergeMemberRows(fastExposeRows.value, nativeExposeRows.value),
	},
]);
</script>

<template>
	<section class="component-api">
		<h2 :id="apiHeadingId">{{ name }} 完整 API</h2>
		<p v-if="metadata.note" class="component-api__note">{{ metadata.note }}</p>

		<details open>
			<summary>Props 属性（{{ propRows.length }}）</summary>
			<p v-if="native" class="component-api__hint">
				Fast 与 Element Plus {{ elementPlusVersion }} 的属性已合并展示；Fast 修改项优先排列，未透传的原生属性保留用于兼容性核对。
			</p>
			<div class="component-api__table-wrap">
				<table class="component-api__table--props">
					<thead>
						<tr>
							<th>属性</th>
							<th>来源</th>
							<th>说明</th>
							<th>类型</th>
							<th>默认值</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in propRows" :key="item.name">
							<td data-label="属性">
								<code>{{ item.name }}</code
								><sup v-if="item.required">必填</sup>
							</td>
							<td data-label="来源">
								<span class="component-api__source" :class="item.sourceState">{{ item.sourceLabel }}</span>
							</td>
							<td data-label="说明">{{ item.description }}</td>
							<td data-label="类型">
								<code>{{ item.type }}</code>
							</td>
							<td data-label="默认值">
								<template v-if="item.nativeDefaultValue !== undefined">
									<span class="component-api__default"
										><small>Fast</small><code>{{ item.defaultValue }}</code></span
									>
									<span class="component-api__default"
										><small>EL</small><code>{{ item.nativeDefaultValue }}</code></span
									>
								</template>
								<code v-else>{{ item.defaultValue }}</code>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</details>

		<details v-for="section in memberSections" :key="section.key" open>
			<summary>{{ section.title }}（{{ section.rows.length }}）</summary>
			<div class="component-api__table-wrap">
				<table class="component-api__table--members">
					<thead>
						<tr>
							<th>名称</th>
							<th>来源</th>
							<th>说明</th>
							<th>参数 / 类型</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in section.rows" :key="item.name">
							<td data-label="名称">
								<code>{{ item.name }}</code>
							</td>
							<td data-label="来源">
								<span class="component-api__source" :class="item.sourceState">{{ item.sourceLabel }}</span>
							</td>
							<td data-label="说明">{{ item.description }}</td>
							<td data-label="参数 / 类型">
								<code>{{ item.type }}</code>
							</td>
						</tr>
						<tr v-if="section.rows.length === 0">
							<td class="component-api__empty" colspan="4">{{ section.emptyText }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</details>
	</section>
</template>
