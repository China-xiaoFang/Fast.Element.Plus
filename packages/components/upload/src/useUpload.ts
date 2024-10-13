import { inject, ref, watch } from "vue";
import { FastApp } from "@fast-element-plus/settings";
import { consoleError, consoleWarn, uploadUtil } from "@fast-element-plus/utils";
import { useVModel } from "@vueuse/core";
import { Decimal } from "decimal.js";
import type { UploadFile, UploadFiles, UploadProps, UploadRawFile, UploadRequestOptions, UploadUserFile } from "element-plus";
import { ElMessage, ElNotification, formContextKey, formItemContextKey, genFileId } from "element-plus";
import { isArray, isNumber, isString } from "lodash-unified";

export const useUpload = <T extends string | string[]>(
	componentName: string,
	fileTypeName: string,
	props: UploadProps & {
		modelValue: T;
	},
	emit: ((event: "update:fileList", value: UploadUserFile[]) => void) &
		((event: "update:modelValue", value: T) => void) &
		((event: "change", value: T) => void),
	data?: {
		maxSize?: string | number;
		uploadUrl?: string;
	} // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
	const fileList = useVModel(props, "fileList", emit, { passive: true });

	const loading = ref(false);

	// 获取 el-form 组件上下文
	const formContext = inject(formContextKey, undefined);
	// 获取 el-form-item 组件上下文
	const formItemContext = inject(formItemContextKey, undefined);

	const mbNum = new Decimal(1024);
	const maxSizeKB = new Decimal(isNumber(data?.maxSize) ? data?.maxSize : Number(data?.maxSize));
	const maxSizeMB = maxSizeKB.div(mbNum);

	const handleValue = (): void => {
		if (fileList.value.length > 0) {
			if (isString(props.modelValue)) {
				emit("update:modelValue", fileList.value[0].url as T);
				emit("change", fileList.value[0].url as T);
			} else {
				if (props.multiple) {
					const value = fileList.value.map((m) => m.url);
					emit("update:modelValue", value as T);
					emit("change", value as T);
				} else {
					emit("update:modelValue", fileList.value[0].url as T);
					emit("change", fileList.value[0].url as T);
				}
			}
		} else {
			emit("update:modelValue", null);
			emit("change", null);
		}
	};

	const handleHttpRequest = async (options: UploadRequestOptions): Promise<void> => {
		let propsData;
		if (props.data) {
			propsData = uploadUtil.getPropsData(options.file, props.data);
		}
		const uploadUrl = data?.uploadUrl ?? FastApp.state.upload.url;
		if (!uploadUrl) {
			ElMessage.error(`上传${fileTypeName}地址不能为空`);
			consoleError(componentName, `上传${fileTypeName}地址 “uploadUrl” 不能为空`);
			return;
		}
		loading.value = true;
		try {
			const fileUrl = await uploadUtil.uploadFile(uploadUrl, options.file, options.filename, propsData);
			options.onSuccess(fileUrl);
		} finally {
			loading.value = false;
		}
	};

	const handleOnSuccess = (fileUrl: string, uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
		if (!fileUrl) return;
		if (!props.multiple && uploadFiles.length > 1) {
			uploadFiles.shift();
		}
		uploadFile.url = fileUrl;
		handleValue();
		// 调用 el-form 内部的校验方法（可自动校验）
		formItemContext?.prop && formContext?.validateField([formItemContext.prop as string]);
		ElMessage.success("上传成功");
		props.onSuccess && props.onSuccess(fileUrl, uploadFile, uploadFiles);
	};

	const handleOnError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
		ElNotification({
			message: `【${uploadFile.name}】${fileTypeName}上传失败，请您重新上传`,
			type: "error",
		});
		props.onError && props.onError(error, uploadFile, uploadFiles);
	};

	const handleOnExceed = (files: File[], uploadFiles: UploadUserFile[]): void => {
		ElMessage.warning(`最多只能上传 ${props.limit} 个${fileTypeName}，请移除后再进行上传`);
		props.onExceed && props.onExceed(files, uploadFiles);
	};

	const handleOnUpload = (file: UploadFile | UploadRawFile): boolean => {
		const fileSizeKB = new Decimal(file.size).div(mbNum);

		if (fileSizeKB.greaterThan(maxSizeKB)) {
			consoleWarn(componentName, `【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.toString()}MB`);
			ElMessage.warning(`【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.toString()}MB`);
			return false;
		}

		const fileType = "type" in file ? file.type : file.raw.type;

		if (props.accept && props.accept.split(",").every((e) => e !== fileType)) {
			const uploadFileNames = uploadUtil.detectFileType(props.accept);
			consoleError(componentName, `只允许上传【${uploadFileNames}】格式的${fileTypeName}`);
			ElMessage.error(`只允许上传【${uploadFileNames}】格式的${fileTypeName}`);
			return false;
		}
	};

	/**
	 * 监听 v-model 绑定数据
	 */
	watch(
		() => props.modelValue,
		(newValue) => {
			if (newValue) {
				if (isArray(newValue)) {
					fileList.value = newValue.map((m) => {
						const find = fileList.value.find((f) => f.url === m);
						return {
							name: "",
							status: "success",
							uid: find?.uid ?? genFileId(),
							url: m,
						};
					});
				} else {
					const find = fileList.value.find((f) => f.url === newValue);
					fileList.value = [
						{
							name: "",
							status: "success",
							uid: find?.uid ?? genFileId(),
							url: newValue,
						},
					];
				}
			}
		},
		{
			immediate: true,
		}
	);

	return {
		fileList,
		loading,
		formContext,
		formItemContext,
		maxSizeMB,
		handleValue,
		handleHttpRequest,
		handleOnSuccess,
		handleOnError,
		handleOnExceed,
		handleOnUpload,
	};
};
