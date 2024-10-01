import { Ref } from 'vue';
import { ElForm, FormItemRule, FormValidationResult } from 'element-plus';
export declare const formUtil: {
    /**
     * ElForm 表单验证
     * @param elFormRef ElForm 组件ref
     */
    validate(elFormRef: Ref<InstanceType<typeof ElForm>>): FormValidationResult;
    /**
     * ElForm 表单验证，带滚动
     * @param elFormRef ElForm 组件ref
     */
    validateScrollToField(elFormRef: Ref<InstanceType<typeof ElForm>>): FormValidationResult;
    /**
     * 手机号
     */
    mobile(rule: any, value: string, callback: any): void;
    /**
     * 电话号码
     */
    phone(rule: any, value: string, callback: any): void;
    /**
     * 邮箱
     */
    email(rule: any, value: string, callback: any): void;
    /**
     * 身份证
     */
    idCard(rule: any, value: string, callback: any): void;
    /**
     * 车牌号
     */
    carNumber(rule: any, value: string, callback: any): void;
    /**
     * editor 必填
     */
    editorRequired(rule: any, value: string, callback: any): void;
    /**
     * 外部链接
     */
    external(rule: any, value: string, callback: any): void;
    /**
     * 有效的URL
     */
    url(rule: any, value: string, callback: any): void;
    /**
     * 邮政编码
     */
    postCode(rule: any, value: string, callback: any): void;
    /**
     * 账号（6-20位字母或数字，必须以字母开头，不能全为数字）
     */
    account(rule: any, value: string, callback: any): void;
    /**
     * 弱密码（只包含字母和数字，长度为6到18位）
     */
    password(rule: any, value: string, callback: any): void;
    /**
     * 强密码（8到20位，包含大小写字母、数字及特殊字符）
     */
    strongPassword(rule: any, value: string, callback: any): void;
    /**
     * 中文字符
     */
    chinese(rule: any, value: string, callback: any): void;
    /**
     * 英文字符
     */
    english(rule: any, value: string, callback: any): void;
    /**
     * 文本框必填
     */
    inputRequired(message: string, trigger?: string): FormItemRule;
    /**
     * 选择器必选
     */
    selectRequired(message: string, trigger?: string): FormItemRule;
};
