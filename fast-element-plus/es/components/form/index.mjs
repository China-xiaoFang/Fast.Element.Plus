import "../../utils/index.mjs";
import Form from "./src/form.mjs";
import { faFormProps } from "./src/form.mjs";
import FormItem from "./src/formItem.mjs";
import { faFormItemProps } from "./src/formItem.mjs";
import { withInstall, withNoopInstall } from "../../utils/vue/install.mjs";
const FaForm = withInstall(Form, {
  FormItem
});
const FaFormItem = withNoopInstall(FormItem);
export {
  FaForm,
  FaFormItem,
  FaForm as default,
  faFormItemProps,
  faFormProps
};
//# sourceMappingURL=index.mjs.map
