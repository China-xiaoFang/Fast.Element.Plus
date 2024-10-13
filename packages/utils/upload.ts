import { FaMimeType } from "@fast-element-plus/constants";
import type { ApiResponse } from "@fast-element-plus/utils";
import { axiosUtil, consoleError } from "@fast-element-plus/utils";
import type { UploadRawFile } from "element-plus";
import { ElMessage } from "element-plus";
import { isArray, isFunction } from "lodash-unified";

const FaMimeTypeNames: Record<string, keyof typeof FaMimeType> = {};

for (const [kName, vAccept] of Object.entries(FaMimeType)) {
	vAccept.split(",").forEach((tItem) => {
		FaMimeTypeNames[tItem.trim()] = kName as keyof typeof FaMimeType;
	});
}

/**
 * 上传工具类
 */
export const uploadUtil = {
	/**
	 * 识别文件类型
	 */
	detectFileType(accept: string): string {
		const detectTypes = new Set<string>();
		accept.split(",").forEach((mimeType) => {
			detectTypes.add(FaMimeTypeNames[mimeType] ?? mimeType);
		});
		return Array.from(detectTypes).join(",");
	},
	/**
	 * 获取props data属性值
	 */
	getPropsData(rawFile: UploadRawFile, data: any | any[] | ((rawFile: UploadRawFile) => any[])): any {
		let propsData;
		if (isFunction(data)) {
			propsData = data(rawFile);
		} else {
			propsData = data;
		}

		const result = {};
		if (isArray(data)) {
			data.forEach((item) => {
				Object.assign(result, item);
			});
		} else {
			Object.assign(result, propsData);
		}

		return result;
	},
	/**
	 * 文件上传
	 * @param url 地址
	 * @param file 文件
	 * @param fileName 文件名称
	 * @param fileType 文件类型
	 * @param params 参数
	 */
	async uploadFile(url: string, file: File, fileName: string, params?: Record<string, any>): Promise<string | void> {
		if (!url) {
			consoleError("uploadUtil", "文件上传地址为空！");
			ElMessage.error("文件上传地址为空！");
			return Promise.reject();
		}
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);
		if (params) {
			Object.keys(params).forEach((key) => {
				formData.append(key, params[key]);
			});
		}
		try {
			const apiRes = await axiosUtil.request<FormData, ApiResponse<string>>({
				headers: {
					"Content-Type": "multipart/form-data",
				},
				url,
				method: "post",
				data: formData,
				cancelDuplicateRequest: false,
			});
			return Promise.resolve<string>(apiRes.data);
		} catch (error) {
			consoleError("uploadUtil", "文件上传失败！", error);
			ElMessage.error("文件上传失败！");
			return Promise.reject();
		}
	},
};
