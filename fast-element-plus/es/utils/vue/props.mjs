import { computed } from "vue";
import { omit, pick } from "lodash-unified";
const useProps = (props, rawProps, ignoreRawProps, mergeProps) => {
  if (!props) return computed(() => ({}));
  return computed(() => {
    const omittedRawProps = rawProps ? omit(rawProps, ignoreRawProps ?? []) : {};
    const pickedProps = pick(props, Object.keys(omittedRawProps));
    return { ...pickedProps, ...mergeProps ?? {} };
  });
};
export {
  useProps
};
//# sourceMappingURL=props.mjs.map
