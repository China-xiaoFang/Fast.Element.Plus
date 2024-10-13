import { reactive } from "vue";
import { Local, Session, consoleError, makeIdentity } from "@fast-element-plus/utils";
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { merge } from "lodash-unified";

/**
 * Vite 环境
 */
export type ViteEnv = "production" | "development" | "test" | "staging";

/**
 * 日期范围
 */
export type DataRange = "Past1D" | "Past3D" | "Past1W" | "Past1M" | "Past3M" | "Past6M" | "Past1Y";

/**
 * Fast App 配置选项
 */
export type FastAppOptions = {
	/**
	 * 环境
	 * @default "development"
	 */
	env?: ViteEnv;
	/**
	 * 存储加密，请在初始化的时候确认，后续不可再修改，否则所有数据都将失效
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
		/**
		 * 拦截器
		 */
		interceptors?: {
			/**
			 * 请求拦截器
			 */
			request?: <Input = any>(config: InternalAxiosRequestConfig<Input>) => void;
			/**
			 * 响应拦截器
			 */
			response?: <Output = any, Input = any>(response: AxiosResponse<Output, Input>) => any | void;
			/**
			 * 响应错误处理
			 */
			responseError?: (error: AxiosError | any) => any | void;
		};
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
	/**
	 * 上传
	 */
	upload?: {
		/**
		 * 上传路径
		 */
		url?: string;
	};
};

/**
 * 后续删除
 */
type IMapToDo = { value: any };

export class FastApp {
	public static state = reactive<FastAppOptions>({
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
		upload: {
			url: "",
		},
	});

	private static stateMap = reactive({
		dictionary: new Map<string, IMapToDo[]>(),
		columns: new Map<string, IMapToDo[]>(),
	});

	/**
	 * 设置 App 配置
	 */
	public static setAppOptions = (appOptions: FastAppOptions): void => {
		merge(FastApp.state, appOptions);
	};

	/**
	 * 设置环境
	 */
	public static setEnv = (env: ViteEnv): void => {
		FastApp.state.env = env;
	};

	/**
	 * 设置 Axios 选项
	 */
	public static setAxiosOptions = (axiosOptions: FastAppOptions["axios"]): void => {
		FastApp.state.axios = Object.assign(FastApp.state.axios, axiosOptions);
	};

	/**
	 * 设置 Table 选项
	 */
	public static setTableOptions = (tableOptions: FastAppOptions["table"]): void => {
		FastApp.state.table = Object.assign(FastApp.state.table, tableOptions);
	};

	/**
	 * 设置 Upload 选项
	 */
	public static setUploadOptions = (uploadOptions: FastAppOptions["upload"]): void => {
		FastApp.state.upload = Object.assign(FastApp.state.upload, uploadOptions);
	};

	/**
	 * 设置字典
	 */
	public static setDictionary = (dictionary: Map<string, IMapToDo[]>): void => {
		FastApp.stateMap.dictionary = dictionary;
	};

	/**
	 * 获取字典
	 */
	public static getDictionary = (key: string): IMapToDo[] => {
		if (!FastApp.stateMap.dictionary.has(key)) {
			consoleError("app", `字典 [${key}] 不存在`);
			return [];
		}
		return FastApp.stateMap.dictionary.get(key);
	};

	/**
	 * 获取表格列
	 */
	public static getTableColumns = (tableKey: string): IMapToDo[] | false => {
		if (!FastApp.stateMap.columns.has(tableKey)) {
			consoleError("app", `表格列 [${tableKey}] 不存在`);
			return [];
		}
		return FastApp.stateMap.columns.get(tableKey);
	};

	/**
	 * 设置或更新表格列
	 */
	public static setTableColumns = (tableKey: string, columns: IMapToDo[]): void => {
		if (FastApp.stateMap.columns.has(tableKey)) {
			FastApp.stateMap.columns.delete(tableKey);
		}
		FastApp.stateMap.columns.set(tableKey, columns);
	};

	/**
	 * 清除 App 缓存
	 */
	public static clearAppCache = (): void => {
		// 获取设备Id，这里按理来说不应该不存在的
		const deviceId = makeIdentity();
		// 清空 Local 缓存
		Local.clear();
		// 清空 Session 缓存
		Session.clear();
		// 重新设置设备Id
		makeIdentity(deviceId);
	};
}
