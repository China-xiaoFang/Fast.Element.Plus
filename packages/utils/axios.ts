import { FastApp } from "@fast-element-plus/settings";
import { Local, consoleDebug, consoleError, consoleLog, consoleWarn } from "@fast-element-plus/utils";
import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { ElLoading, ElMessage, ElMessageBox, type LoadingOptions } from "element-plus";
import { isObject, isString } from "lodash-unified";
import { cryptoUtil } from "./crypto";

/**
 * RESTful风格Api响应
 */
export type ApiResponse<Input = any, Output = any> = {
	/**
	 * 执行成功
	 */
	success?: boolean;
	/**
	 * 状态码
	 */
	code?: number;
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 数据
	 */
	data?: Output;
	/**
	 * 时间戳
	 */
	timestamp?: number;
	/**
	 * 响应
	 */
	response?: AxiosResponse<Output, Input>;
};

/**
 * RESTful风格Api Promise
 */
export type ApiPromise<Input = any, Output = any> = Promise<ApiResponse<Input, Output>>;

/**
 * Axios 选项
 */
export type AxiosOptions = {
	/**
	 * 是否开启取消重复请求, 默认为
	 * @default true
	 */
	cancelDuplicateRequest?: boolean;
	/**
	 * 是否开启loading层效果
	 * @default false
	 */
	loading?: boolean;
	/**
	 * 是否开启缓存，只有Get请求才行
	 * @default false
	 */
	cache?: boolean;
	/**
	 * 忽略错误
	 * @default false
	 */
	ignoreError?: boolean;
	/**
	 * Get请求缓存问题处理
	 * @default true
	 */
	getMethodCacheHandle?: boolean;
	/**
	 * 是否开启简洁的数据结构响应
	 * - 只有响应格式是JSON的才开启
	 * @default true
	 */
	simpleDataFormat?: boolean;
	/**
	 * 是否开启接口错误信息展示
	 * @default true
	 */
	showErrorMessage?: boolean;
	/**
	 * 是否开启code信息提示
	 * - code >= 200 && code <= 299 则不提示
	 * @default true
	 */
	showCodeMessage?: boolean;
	/**
	 * 是否开启请求成功的信息提示
	 * - 只有 code >= 200 && code <= 299 才提示
	 * @default false
	 */
	showSuccessMessage?: boolean;
	/**
	 * 是否开启自动下载文件
	 * - 只有 responseType 配置了 "blob" 才会自动下载
	 * @default true
	 */
	autoDownloadFile?: boolean;
};

type FastAxiosRequestConfig<Input> = AxiosRequestConfig<Input> & AxiosOptions;

/**
 * Http 缓存 Key
 */
export const HTTP_CACHE_KEY = "HTTP_CACHE_";

const axiosOptions: AxiosOptions = {
	cancelDuplicateRequest: true,
	loading: false,
	cache: false,
	ignoreError: false,
	getMethodCacheHandle: true,
	simpleDataFormat: true,
	showErrorMessage: true,
	showCodeMessage: true,
	showSuccessMessage: false,
	autoDownloadFile: true,
};

const loadingOptions: LoadingOptions = {
	fullscreen: true,
	lock: true,
	text: "加载中...",
	background: "rgba(0, 0, 0, 0.7)",
};

const errorCodeMessages = {
	cancelDuplicate: "重复请求，自动取消！",
	offLine: "您断网了！",
	fileDownloadError: "文件下载失败或此文件不存在！",
	302: "接口重定向了！",
	400: "参数不正确！",
	401: "您没有权限操作（令牌、用户名、密码错误）！",
	403: "您的访问是被禁止的！",
	404: "请求的资源不存在！",
	405: "请求的格式不正确！",
	408: "请求超时！",
	409: "系统已存在相同数据！",
	410: "请求的资源被永久删除，且不会再得到的！",
	422: "当创建一个对象时，发生一个验证错误！",
	429: "请求过于频繁，请稍后再试！",
	500: "服务器内部错误！",
	501: "服务未实现！",
	502: "网关错误！",
	503: "服务不可用，服务器暂时过载或维护！",
	504: "服务暂时无法访问，请稍后再试！",
	505: "HTTP版本不受支持！",
	default: "请求错误！",
	ERR_NETWORK: "网关错误，服务不可用，服务器暂时过载或维护！",
};

const pendingMap = new Map();

/**
 * 加载实例
 */
const loadingInstance = {
	// ElLoading 的实例信息
	target: null,
	// 总数
	count: 0,
};

/**
 * 关闭Loading层实例
 */
const closeLoading = (options: AxiosOptions): void => {
	if (options.loading && loadingInstance.count > 0) loadingInstance.count--;
	if (loadingInstance.count === 0) {
		loadingInstance.target.close();
		loadingInstance.target = null;
	}
};

/**
 * 生成每个请求的唯一key
 */
const getPendingKey = (axiosConfig: AxiosRequestConfig): string => {
	let { data } = axiosConfig;
	const { url, method, params } = axiosConfig;
	// response里面返回的config.data是个字符串对象
	if (isString(data)) data = JSON.parse(data);
	return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&");
};

/**
 * 储存每个请求的唯一cancel回调, 以此为标识
 */
const addPending = (pendingKey: string, axiosConfig: AxiosRequestConfig): void => {
	axiosConfig.cancelToken =
		axiosConfig.cancelToken ||
		new axios.CancelToken((cancel) => {
			if (!pendingMap.has(pendingKey)) {
				pendingMap.set(pendingKey, cancel);
			}
		});
};

/**
 * 删除重复的请求
 */
const removePending = (pendingKey: string): void => {
	if (pendingMap.has(pendingKey)) {
		const cancelToken = pendingMap.get(pendingKey);
		cancelToken(pendingKey);
		pendingMap.delete(pendingKey);
	}
};

/**
 * Http 错误状态码处理
 */
const httpErrorStatusHandle = (error: AxiosError | any): void => {
	// 判断请求是否被取消
	if (axios.isCancel(error)) {
		return;
	}
	let message = "";
	// 判断是否断网
	if (!window.navigator.onLine) {
		message = errorCodeMessages["offLine"];
	} else {
		// 其他错误码处理
		// 尝试获取 Restful 风格返回Code，或者获取响应状态码
		const code = error?.response?.data?.code || error?.response?.status || error?.code || "default";
		// 400业务异常
		// 500服务器内部错误，可能返回错误信息
		message = error?.response?.data?.message || errorCodeMessages[code];
	}
	ElMessage.error(message);
};

/**
 * 获取错误信息
 */
const getPromiseReject = <Input = any, Output = any>(
	options: FastAxiosRequestConfig<Input>,
	code = 500,
	message?: string,
	data?: any,
	response?: AxiosResponse<Output, Input>
): Promise<any> => {
	if (options.simpleDataFormat) {
		return Promise.resolve({
			success: false,
			code,
			message,
			data,
			timestamp: Date.now(),
			response,
		} as Output);
	} else {
		return Promise.resolve(response);
	}
};

/**
 * 下载文件
 */
const downloadFile = (response: AxiosResponse): void => {
	const blob = new Blob([response.data], { type: "application/octet-stream;charset=UTF-8" });
	const contentDisposition = response.headers["content-disposition"];
	const pat = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
	const result = pat.exec(contentDisposition);
	const filename = result[1];
	const downloadElement = document.createElement("a");
	const href = window.URL.createObjectURL(blob); // 创建下载的链接
	const reg = /^["](.*)["]$/g;
	downloadElement.style.display = "none";
	downloadElement.href = href;
	downloadElement.download = decodeURI(filename.replace(reg, "$1")); // 下载后文件名
	document.body.appendChild(downloadElement);
	// 点击下载
	downloadElement.click();
	// 下载完成移除元素
	document.body.removeChild(downloadElement);
	window.URL.revokeObjectURL(href);
};

/**
 * 创建 Axios
 * @param axiosConfig axios 请求配置
 * @param loading loading配置
 */
const createAxios = <Input = any, Output = any>(axiosConfig: FastAxiosRequestConfig<Input>, loading?: LoadingOptions): Promise<Output> => {
	// 合并选项
	const options = { ...axiosOptions, ...axiosConfig };

	// 只有Get请求并且开启了简洁响应才可以进行缓存处理，且默认是不存在loading的
	if (options.cache && options.method.toUpperCase() === "GET" && options.simpleDataFormat) {
		// 如果启用缓存，则默认是不能携带参数的
		if (options.params) {
			consoleWarn("axiosUtil", "如果使用 Http Cache，则不能存在任何 'params' 参数");
			return getPromiseReject<Input, Output>(
				options,
				405,
				"如果使用 Http Cache，则不能存在任何 'params' 参数",
				new Error("如果使用 Http Cache，则不能存在任何 'params' 参数")
			);
		}

		const cacheKey = `${HTTP_CACHE_KEY}${options.url}`;
		const cacheRes = Local.get<Output>(cacheKey);
		if (cacheRes) {
			return Promise.resolve(cacheRes);
		}
	} else {
		// 不满足上述条件，则默认不使用缓存
		options.cache = false;
	}

	// 获取请求唯一 Key
	const pendingKey = getPendingKey(axiosConfig);

	const timestamp = Date.now();

	// 创建 Axios 请求
	const Axios = axios.create({
		baseURL: FastApp.state.axios.baseUrl,
		timeout: FastApp.state.axios.timeout,
		headers: {
			"Fast-DeviceID": window.deviceId,
			// 配置请求来源，标识为PC端
			"Fast-DeviceType": "Web",
		},
		responseType: "json",
	});

	/**
	 * 请求拦截
	 */
	Axios.interceptors.request.use(
		(config: InternalAxiosRequestConfig<Input>) => {
			// 删除重复请求
			removePending(pendingKey);

			// 判断是否开启取消重复请求
			options.cancelDuplicateRequest && addPending(pendingKey, config);

			// 自定义请求拦截器
			FastApp.state.axios.interceptors.request && FastApp.state.axios.interceptors.request(config);

			// 判断是否显示loading层
			if (options.loading) {
				loadingInstance.count++;
				if (loadingInstance.count === 1) {
					// 合并 Loading 配置
					loading = { ...loadingOptions, ...loading };
					loadingInstance.target = ElLoading.service(loading);
				}
			}

			// 请求参数加密
			if (FastApp.state.axios.requestCipher) {
				let requestData = config.params || config.data;
				const dataStr = JSON.stringify(requestData);
				if (dataStr != null && dataStr != "" && dataStr != "{}") {
					consoleDebug("axiosUtil", `HTTP request data("${config.url}")`, requestData);
					const decryptData = cryptoUtil.aes.encrypt(dataStr, `${timestamp}`, `FIV${timestamp}`);
					// 组装请求格式
					requestData = {
						data: decryptData,
						timestamp,
					};
					switch (config.method.toUpperCase()) {
						case "GET":
						case "DELETE":
						case "HEAD":
							config.params = requestData;
							break;
						case "POST":
						case "PUT":
						case "PATCH":
							config.data = requestData;
							break;
						case "OPTIONS":
						case "CONNECT":
						case "TRACE":
							throw new Error("This request mode is not supported.");
					}
					// 请求头部增加加密标识
					config.headers["Fast-Request-Encipher"] = "true";
				}
			} else {
				// Get请求缓存处理
				if (config.method.toUpperCase() === "GET") {
					config.params = config.params || {};
					config.params._ = timestamp;
				}
			}

			return config;
		},
		(error) => {
			return getPromiseReject<Input, Output>(options, 500, "应用程序内部错误！", error);
		}
	);

	/**
	 * 响应拦截
	 */
	Axios.interceptors.response.use(
		(response: AxiosResponse<Output, Input>) => {
			// 删除重复请求
			removePending(pendingKey);

			// 关闭loading层
			options.loading && closeLoading(options);

			// 判断是否忽略错误
			if (options.ignoreError) {
				return Promise.resolve(response);
			}

			// 自定义响应拦截器
			if (FastApp.state.axios.interceptors.response) {
				try {
					const result = FastApp.state.axios.interceptors.response(response);
					if (result != null && result != undefined) {
						return Promise.resolve(result);
					}
				} catch (error) {
					// 判断是否忽略错误
					if (options.ignoreError) {
						return Promise.resolve(response);
					}
					return getPromiseReject<Input, Output>(options, 500, "应用程序内部错误！", error);
				}
			}

			switch (response.config.responseType) {
				// 配置了blob，不处理直接返回文件流
				case "blob":
					if (response.status === 200) {
						// 判断是否自动下载
						if (options.autoDownloadFile) {
							downloadFile(response);
						}
						// 这里直接返回
						return Promise.resolve(response);
					} else {
						ElMessage.error(errorCodeMessages["fileDownloadError"]);
						return Promise.reject(response);
					}
				// 正常 JSON 格式响应处理
				case "json":
					{
						const responseData = response.data;
						const restfulData = response.data as ApiResponse<Input, Output>;
						const code: number = restfulData?.code ?? response.status;
						if (code < 200 || code > 299 || !restfulData?.success) {
							// 判断是否显示错误消息
							if (options.showCodeMessage) {
								// 判断返回的 message 是否为对象类型
								if (restfulData?.message) {
									if (isObject(restfulData?.message)) {
										ElMessage.error(JSON.stringify(restfulData?.message));
									} else {
										ElMessage.error(restfulData?.message);
									}
								}
								return getPromiseReject<Input, Output>(
									options,
									code,
									responseData["message"] ?? "服务器内部错误！",
									restfulData?.data ?? responseData,
									response
								);
							}

							// 请求响应解密
							if (FastApp.state.axios.requestCipher) {
								if (restfulData?.data) {
									restfulData.data = cryptoUtil.aes.decrypt<Output>(
										restfulData.data as string,
										`${restfulData.timestamp}`,
										`FIV${restfulData.timestamp}`
									);
									// 处理 ""xxx"" 这种数据
									if (isString(restfulData.data) && restfulData.data.startsWith('"') && restfulData.data.endsWith('"')) {
										restfulData.data = restfulData.data.replace(/"/g, "") as Output;
									}
									consoleDebug("axiosUtil", `HTTP response data("${response.config.url}")`, restfulData.data);
								}
							}

							// 判断是否缓存
							if (options.cache) {
								const cacheKey = `${HTTP_CACHE_KEY}${options.url}`;
								// 默认缓存24小时
								Local.set(cacheKey, restfulData?.data ?? responseData, 60 * 24);
							}

							if (options.simpleDataFormat) {
								return Promise.resolve({ ...(restfulData?.data ?? responseData), response });
							} else {
								return Promise.resolve(response);
							}
						}
					}
					break;
				default:
					if (options.simpleDataFormat) {
						return Promise.resolve({ ...response.data, response });
					} else {
						return Promise.resolve(response);
					}
			}
		},
		(error: AxiosError | any) => {
			// 删除重复请求标识
			error?.config && removePending(error?.config);
			// 关闭loading层
			options.loading && closeLoading(options);
			// 判断请求是否被取消
			if (!axios.isCancel(error)) {
				consoleError("axiosUtil", errorCodeMessages["cancelDuplicate"], error);
			}

			// 自定义响应错误
			if (FastApp.state.axios.interceptors.responseError) {
				try {
					const result = FastApp.state.axios.interceptors.responseError(error);
					if (result != null && result != undefined) {
						return Promise.reject(result);
					}
				} catch (error) {
					return getPromiseReject<Input, Output>(options, 500, "应用程序内部错误！", error);
				}
			}

			// 处理错误状态码
			options.showErrorMessage && httpErrorStatusHandle(error);

			// 错误继续返回给到具体页面
			return getPromiseReject<Input, Output>(options, 500, "服务器内部错误！", error);
		}
	);
};

/**
 * 是否存在版本更新实例
 */
let existsVersionUpdateInstance = false;

/**
 * 检测版本更新
 */
const versionUpdate = (version: string): void => {
	consoleLog("axiosUtil", `当前版本 ${version}`);

	axios
		.get<{ version: string; dateTime: string }>(`/version.json?_=${Date.now()}`)
		.then((response) => {
			if (version !== response.data.version) {
				// 判断是否存在版本更新实例弹窗
				if (existsVersionUpdateInstance) return;
				existsVersionUpdateInstance = true;
				consoleLog("axiosUtil", `发现新版本 ${response.data.version}`);
				ElMessageBox.confirm(`发现新版本 ${response.data.version}，是否立即更新？`, {
					type: "warning",
					confirmButtonText: "更新",
					closeOnClickModal: false,
				})
					.then(() => {
						consoleLog("axiosUtil", `更新版本 ${response.data.version}`);
						// 强制刷新浏览器
						window.location.reload();
					})
					.catch(() => {
						existsVersionUpdateInstance = false;
						consoleWarn("axiosUtil", `取消更新版本 ${response.data.version}`);
						ElMessage.warning({
							message: "您取消了更新，将在十分钟后再次进行提示！",
						});
					});
			}
		})
		.then((error) => {
			consoleError("axiosUtil", "检测版本更新错误。", error);
		});
};

/**
 * 检测版本更新
 * @default 默认10分钟一次
 */
const checkVersionUpdate = (version: string, delay = 10 * 60 * 1000): void => {
	versionUpdate(version);
	setInterval(() => {
		versionUpdate(version);
	}, delay);
};

export const axiosUtil = {
	/**
	 * 请求
	 * @param axiosConfig axios 请求配置
	 * @param loading loading配置
	 */
	request: createAxios,
	/**
	 * 下载文件
	 */
	downloadFile,
	/**
	 * 删除HTTP 缓存数据
	 */
	deleteHttpCache: (): void => {
		Local.removeByPrefix(HTTP_CACHE_KEY);
	},
	/**
	 * 检测版本更新
	 * @default 默认10分钟一次
	 */
	checkVersionUpdate,
};
