import { withInstall, withNoopInstall } from "@fast-china/utils";
import Form from "./src/form.mjs";
import { faFormProps } from "./src/form.mjs";
import FormItem from "./src/formItem.mjs";
import { faFormItemProps } from "./src/formItem.mjs";
import { formUtil } from "./utils/form.mjs";
const FaForm = withInstall(Form, {
  FormItem
});
const FaFormItem = withNoopInstall(FormItem);
export {
  FaForm,
  FaFormItem,
  FaForm as default,
  faFormItemProps,
  faFormProps,
  formUtil
};
//# sourceMappingURL=index.mjs.map
