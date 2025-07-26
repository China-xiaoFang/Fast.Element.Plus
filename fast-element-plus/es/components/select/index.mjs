import { withInstall, withNoopInstall } from "@fast-china/utils";
import Select from "./src/select.mjs";
import { SelectProps, faSelectProps } from "./src/select.mjs";
import SelectOption from "./src/selectOption.mjs";
import "./src/select.type.mjs";
const FaSelect = withInstall(Select, {
  SelectOption
});
const FaSelectOption = withNoopInstall(SelectOption);
export {
  FaSelect,
  FaSelectOption,
  SelectProps,
  FaSelect as default,
  faSelectProps
};
//# sourceMappingURL=index.mjs.map
