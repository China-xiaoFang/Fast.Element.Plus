import "../../../constants/index.mjs";
import { consoleWarn } from "@fast-china/utils";
import { RegExps } from "../../../constants/regex.mjs";
const formUtil = {
  /**
   * ElForm 表单验证
   * @param elFormRef ElForm 组件ref
   */
  validate(elFormRef) {
    return new Promise((resolve, reject) => {
      elFormRef.value.validate((isValid, invalidFields) => {
        if (isValid) {
          resolve(isValid);
        } else {
          if (invalidFields) {
            consoleWarn("formUtil", false, invalidFields);
          }
          reject(isValid);
        }
      });
    });
  },
  /**
   * ElForm 表单验证，带滚动
   * @param elFormRef ElForm 组件ref
   */
  validateScrollToField(elFormRef) {
    return new Promise((resolve, reject) => {
      elFormRef.value.validate((isValid, invalidFields) => {
        if (isValid) {
          resolve(isValid);
        } else {
          elFormRef.value.scrollToField(Object.keys(invalidFields));
          if (invalidFields) {
            consoleWarn("formUtil", false, invalidFields);
          }
          reject(isValid);
        }
      });
    });
  },
  /**
   * 手机号
   */
  mobile(rule, value, callback) {
    if (!value) {
      callback(new Error("请输入手机号码"));
    } else if (RegExps.Mobile.test(value)) {
      callback();
    } else {
      callback(new Error("请输入正确的手机号码"));
    }
  },
  /**
   * 电话号码
   */
  phone(rule, value, callback) {
    if (!value) {
      callback();
    } else if (RegExps.Phone.test(value)) {
      callback();
    } else {
      callback(new Error("请输入正确的电话号码"));
    }
  },
  /**
   * 邮箱
   */
  email(rule, value, callback) {
    if (!value) {
      callback();
    } else if (RegExps.Email.test(value)) {
      callback();
    } else {
      callback(new Error("请输入正确的邮箱地址"));
    }
  },
  /**
   * 身份证
   */
  idCard(rule, value, callback) {
    if (RegExps.IdCard.test(value) || !value) {
      callback();
    } else {
      callback(new Error("请输入正确的身份证号码"));
    }
  },
  /**
   * 车牌号
   */
  carNumber(rule, value, callback) {
    let success = false;
    if ((value == null ? void 0 : value.length) === 7) {
      success = RegExps.CarNumber.test(value);
    } else if ((value == null ? void 0 : value.length) === 8) {
      success = RegExps.NewEnergyCarNumber.test(value);
    }
    if (success) {
      callback();
    } else {
      callback(new Error("请输入正确的车牌号码"));
    }
  },
  /**
   * editor 必填
   */
  editorRequired(rule, value, callback) {
    if (value === "<p><br></p>") {
      return callback(new Error("内容不能为空"));
    }
    return callback();
  },
  /**
   * 外部链接
   */
  external(rule, value, callback) {
    if (RegExps.External.test(value)) {
      callback();
    } else {
      callback(new Error("请输入正确的外部链接"));
    }
  },
  /**
   * 有效的URL
   */
  url(rule, value, callback) {
    if (RegExps.Url.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的Url"));
    }
  },
  /**
   * 邮政编码
   */
  postCode(rule, value, callback) {
    if (RegExps.PostCode.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的邮政编码"));
    }
  },
  /**
   * 账号（6-20位字母或数字，必须以字母开头，不能全为数字）
   */
  account(rule, value, callback) {
    if (RegExps.Account.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的账号（6-20位字母或数字，必须以字母开头，不能全为数字）"));
    }
  },
  /**
   * 弱密码（只包含字母和数字，长度为6到18位）
   */
  password(rule, value, callback) {
    if (RegExps.Password.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的密码（只包含字母和数字，长度为6到18位）"));
    }
  },
  /**
   * 强密码（8到20位，包含大小写字母、数字及特殊字符）
   */
  strongPassword(rule, value, callback) {
    if (RegExps.StrongPassword.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的密码（8到20位，包含大小写字母、数字及特殊字符）"));
    }
  },
  /**
   * 中文字符
   */
  chinese(rule, value, callback) {
    if (RegExps.Chinese.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的中文字符"));
    }
  },
  /**
   * 英文字符
   */
  english(rule, value, callback) {
    if (RegExps.English.test(value)) {
      callback();
    } else {
      callback(new Error("请输入有效的英文字符"));
    }
  },
  /**
   * 文本框必填
   */
  inputRequired(message, trigger = "blur") {
    return {
      required: true,
      message,
      trigger
    };
  },
  /**
   * 选择器必选
   */
  selectRequired(message, trigger = "change") {
    return {
      required: true,
      message,
      trigger
    };
  }
};
export {
  formUtil
};
//# sourceMappingURL=form.mjs.map
