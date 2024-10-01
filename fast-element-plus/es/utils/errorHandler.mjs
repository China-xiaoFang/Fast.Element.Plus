import { nextTick } from "vue";
import "./index.mjs";
import { AxiosError } from "axios";
import { ElNotification } from "element-plus";
import { consoleWarn, consoleError } from "./console.mjs";
const errorHandler = (error) => {
  if (!error) return;
  if (error instanceof AxiosError) {
    return false;
  }
  const errorMap = {
    InternalError: "Javascript引擎内部错误",
    ReferenceError: "未找到对象",
    TypeError: "使用了错误的类型或对象",
    RangeError: "使用内置对象时，参数超范围",
    SyntaxError: "语法错误",
    EvalError: "错误的使用了Eval",
    URIError: "URI错误",
    AggregateError: "未知的多个错误",
    TimeoutError: "操作超时",
    NetworkError: "网络错误",
    OutOfMemoryError: "内存溢出"
  };
  if (error === "cancel") {
    consoleWarn("Cancel", "操作已取消");
  } else {
    const errorName = errorMap[error.name] || "未知错误";
    consoleError("Handler", error);
    nextTick(() => {
      ElNotification({
        title: "系统错误",
        message: errorName,
        duration: 3e3,
        position: "top-right"
      });
    });
  }
};
export {
  errorHandler
};
//# sourceMappingURL=errorHandler.mjs.map
