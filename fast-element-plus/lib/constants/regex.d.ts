/**
 * 正则表达式
 */
export declare const RegExps: {
    /**
     * UUID
     */
    UUID: RegExp;
    /**
     * 手机号
     */
    Mobile: RegExp;
    /**
     * 电话
     */
    Phone: RegExp;
    /**
     * 邮箱
     */
    Email: RegExp;
    /**
     * 身份证
     */
    IdCard: RegExp;
    /**
     * 外部链接
     * 匹配http、https、mailto、tel和ftp开头的链接
     */
    External: RegExp;
    /**
     * Url
     */
    Url: RegExp;
    /**
     * 车牌号
     */
    CarNumber: RegExp;
    /**
     * 新能源车牌号
     */
    NewEnergyCarNumber: RegExp;
    /**
     * 邮政编码
     */
    PostCode: RegExp;
    /**
     * ipv4
     */
    Ipv4: RegExp;
    /**
     * 护照
     */
    Passport: RegExp;
    /**
     * 港澳通行证
     */
    HKMacauPass: RegExp;
    /**
     * 账号（6-20位字母或数字，必须以字母开头，不能全为数字）
     */
    Account: RegExp;
    /**
     * 弱密码（只包含字母和数字，长度为6到18位）
     */
    Password: RegExp;
    /**
     * 强密码（8到20位，包含大小写字母、数字及特殊字符）
     */
    StrongPassword: RegExp;
    /**
     * 中文字符
     */
    Chinese: RegExp;
    /**
     * 英文字符
     */
    English: RegExp;
};
