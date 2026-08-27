<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
	defineProps<{
		code: string;
		title?: string;
	}>(),
	{
		title: "示例",
	}
);

const copied = ref(false);

const headingId = computed(() => {
	const slug = props.title
		.toLowerCase()
		.replaceAll(/[^\p{L}\p{N}]+/gu, "-")
		.replaceAll(/^-|-$/g, "");
	return `demo-${slug || "example"}`;
});

const escapeHtml = (value: string): string =>
	value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const highlightTag = (source: string): string => {
	const tagMatch = /^(<\/?)([\w.-]+)([\s\S]*?)(\/?>)$/.exec(source);
	if (!tagMatch) return escapeHtml(source);

	const [, open = "", tagName = "", attributes = "", close = ""] = tagMatch;
	const attributePattern = /([:@#]?[\w.-]+)(\s*=\s*)("(?:\\.|[^"])*"|'(?:\\.|[^'])*')/g;
	let result = "";
	let lastIndex = 0;

	for (const match of attributes.matchAll(attributePattern)) {
		const index = match.index ?? 0;
		result += escapeHtml(attributes.slice(lastIndex, index));
		result += `<span class="token attr-name">${escapeHtml(match[1] ?? "")}</span>`;
		result += `<span class="token punctuation">${escapeHtml(match[2] ?? "")}</span>`;
		result += `<span class="token string">${escapeHtml(match[3] ?? "")}</span>`;
		lastIndex = index + match[0].length;
	}
	result += escapeHtml(attributes.slice(lastIndex));

	return `<span class="token punctuation">${escapeHtml(open)}</span><span class="token tag">${escapeHtml(tagName)}</span>${result}<span class="token punctuation">${escapeHtml(close)}</span>`;
};

const highlightCode = (source: string): string => {
	const tokenPattern =
		/<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/|\/\/[^\n]*|`(?:\\[\s\S]|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[A-Za-z][^>]*>|\b(?:async|await|break|case|catch|class|const|continue|default|do|else|export|extends|finally|for|from|function|if|import|in|instanceof|interface|let|new|of|return|switch|throw|try|type|typeof|void|while)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b/g;
	let result = "";
	let lastIndex = 0;

	for (const match of source.matchAll(tokenPattern)) {
		const index = match.index ?? 0;
		const token = match[0];
		result += escapeHtml(source.slice(lastIndex, index));

		if (token.startsWith("<") && !token.startsWith("<!--")) {
			result += highlightTag(token);
		} else {
			const type =
				token.startsWith("//") || token.startsWith("/*") || token.startsWith("<!--")
					? "comment"
					: token.startsWith('"') || token.startsWith("'") || token.startsWith("`")
						? "string"
						: /^\d/.test(token)
							? "number"
							: /^(?:true|false|null|undefined)$/.test(token)
								? "boolean"
								: "keyword";
			result += `<span class="token ${type}">${escapeHtml(token)}</span>`;
		}

		lastIndex = index + token.length;
	}

	return result + escapeHtml(source.slice(lastIndex));
};

const highlightedCode = computed(() => highlightCode(props.code.trim()));

const copyCode = async (): Promise<void> => {
	await navigator.clipboard.writeText(props.code);
	copied.value = true;
	window.setTimeout(() => {
		copied.value = false;
	}, 1600);
};
</script>

<template>
	<section class="demo-block">
		<header class="demo-block__header">
			<h2 :id="headingId" class="demo-block__title">{{ title }}</h2>
		</header>
		<div class="demo-block__preview">
			<ClientOnly>
				<slot />
			</ClientOnly>
		</div>
		<details class="demo-block__source">
			<summary><span>查看代码</span></summary>
			<div class="demo-block__code">
				<div class="demo-block__toolbar">
					<span>Vue</span>
					<button type="button" class="demo-block__copy" @click="copyCode">
						{{ copied ? "已复制" : "复制代码" }}
					</button>
				</div>
				<pre><code v-html="highlightedCode"></code></pre>
			</div>
		</details>
	</section>
</template>
