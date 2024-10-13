/**
 * @description 正则表达式
 */
export const RegExps = {
	/**
	 * UUID
	 */
	UUID: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
	/**
	 * 手机号
	 */
	Mobile: /^(?:(?:\+|00)86)?1\d{10}$/,
	/**
	 * 电话
	 */
	Phone: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
	/**
	 * 邮箱
	 */
	Email: /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/,
	/**
	 * 身份证
	 */
	IdCard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
	/**
	 * 外部链接
	 * 匹配http、https、mailto、tel和ftp开头的链接
	 */
	External: /^(https?:|mailto:|tel:|ftp:)/,
	/**
	 * Url
	 */
	Url: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
	/**
	 * 车牌号
	 */
	CarNumber: /^[京津冀晋蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新军使领]{1}[A-HJ-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/,
	/**
	 * 新能源车牌号
	 */
	NewEnergyCarNumber:
		/^[京津冀晋蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新军使领]{1}[A-HJ-Z]{1}(([0-9]{5}[DF]$)|([ABCDE][A-HJ-NP-Z0-9][0-9]{3}[0-9挂学警港澳]{1}$)|([FGHJK][A-HJ-NP-Z0-9][0-9]{3}[0-9挂学警港澳]{1}$))/,
	/**
	 * 邮政编码
	 */
	PostCode: /^[1-9]\d{5}$/,
	/**
	 * ipv4
	 */
	Ipv4: /^([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])$/,
	/**
	 * 护照
	 */
	Passport: /^[EeGg]\d{8}$/,
	/**
	 * 港澳通行证
	 */
	HKMacauPass: /^[HMhm]\d{8}$/,
	/**
	 * 账号（6-20位字母或数字，必须以字母开头，不能全为数字）
	 */
	Account: /^[a-zA-Z][a-zA-Z\d]{5,19}$/,
	/**
	 * 弱密码（只包含字母和数字，长度为6到18位）
	 */
	Password: /^[A-Za-z0-9]{6,18}$/,
	/**
	 * 强密码（8到20位，包含大小写字母、数字及特殊字符）
	 */
	StrongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,20}$/,
	/**
	 * 中文字符
	 */
	Chinese: /^[\u4E00-\u9FA5]+$/,
	/**
	 * 英文字符
	 */
	English: /^[a-zA-Z]+$/,
};
