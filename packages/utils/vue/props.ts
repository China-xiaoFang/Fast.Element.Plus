import type { ComputedRef } from "vue";
import { computed } from "vue";
import { omit, pick } from "lodash-unified";

/**
 * 构建 props
 * @param props props
 * @param rawProps 原生 props
 * @param ignoreRawProps 忽略 原生 props 的 key
 * @param mergeProps 合并的 props，固定的值，即使在外部props中传入了也没用
 */
const useProps = <T extends Record<string, unknown>, RT extends Record<string, unknown>>(
	props: T,
	rawProps?: RT,
	ignoreRawProps?: (keyof RT)[],
	mergeProps?: Partial<Record<keyof RT, unknown>>
): ComputedRef<Record<string, unknown>> => {
	if (!props) return computed(() => ({}));

	return computed<Record<string, unknown>>(() => {
		const omittedRawProps = rawProps ? omit(rawProps, ignoreRawProps ?? []) : {};
		const pickedProps = pick(props, Object.keys(omittedRawProps)) as Record<string, unknown>;
		return { ...pickedProps, ...(mergeProps ?? {}) };
	});
};

export { useProps };
