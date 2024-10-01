import { reactive } from "vue";

/**
 * 日期范围
 */
export type DataRange = "Past1D" | "Past3D" | "Past1W" | "Past1M" | "Past3M" | "Past6M" | "Past1Y";

/**
 * Fast 配置选项
 */
export type FastOptions = {
	/**
	 * 警告页面数量
	 * @default 15
	 */
	warnPageNum?: number;
	/**
	 * 存储加密
	 * @description 请在初始化的时候确认，后续不可再修改，否则所有数据都将失效
	 * @default true
	 */
	storageCrypto?: boolean;
	/**
	 * Axios 配置
	 */
	axios?: {
		/**
		 * 请求域名或者Base路径
		 */
		baseUrl?: string;
		/**
		 * 超时时间，单位毫秒
		 * @default 60000
		 */
		timeout?: number;
		/**
		 * 请求加密解密
		 * @default true
		 */
		requestCipher?: boolean;
	};
	/**
	 * 表格配置
	 */
	table?: {
		/**
		 * 显示搜索Form
		 * @default true
		 */
		showSearch?: boolean;
		/**
		 * 隐藏图片
		 * @default true
		 */
		hideImage?: boolean;
		/**
		 * 时间搜索范围
		 */
		dataSearchRange?: DataRange;
	};
};

/**
 * 全局 Fast 配置选项
 */
export const fastOptions = reactive<FastOptions>({
	warnPageNum: 15,
	storageCrypto: true,
	axios: {
		baseUrl: undefined,
		timeout: 60000,
		requestCipher: true,
	},
	table: {
		showSearch: true,
		hideImage: true,
		dataSearchRange: "Past3D",
	},
});

const merge = (target: FastOptions, source: FastOptions): void => {
	for (const key in source) {
		const value = source[key];
		if (value !== undefined && value != null) {
			if (typeof value === "object") {
				target[key] = merge(target[key], source[key]);
			} else {
				target[key] = source[key];
			}
		}
	}
};

/**
 * 设置 全局 Fast 配置选项
 */
export const setFastOptions = (options: FastOptions): void => {
	merge(fastOptions, options);
};
