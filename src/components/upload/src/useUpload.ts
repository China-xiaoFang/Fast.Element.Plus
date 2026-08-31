import { useVModel } from "@vueuse/core";
import { computed, inject, onMounted, ref, watch } from "vue";
import { ElMessage, ElNotification, formContextKey, formItemContextKey, genFileId, uploadProps } from "element-plus";
import { isArray, isNumber } from "lodash-unified";
import { Decimal } from "decimal.js";
import { uploadUtil } from "../utils/upload";
import type {
	FormContext,
	FormItemContext,
	UploadFile,
	UploadFiles,
	UploadProps,
	UploadRawFile,
	UploadRequestOptions,
	UploadUserFile,
} from "element-plus";
import type { ComputedRef, Ref, WritableComputedRef } from "vue";

interface UploadComposable {
	fileList: WritableComputedRef<UploadUserFile[]>;
	loading: Ref<boolean>;
	formContext: FormContext | undefined;
	formItemContext: FormItemContext | undefined;
	maxSizeMB: ComputedRef<Decimal>;
	handleValue: () => void;
	handleHttpRequest: (options: UploadRequestOptions) => Promise<void>;
	handleOnSuccess: (fileUrl: string, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
	handleOnError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
	handleOnRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
	handleOnExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
	handleOnUpload: (file: UploadFile | UploadRawFile) => boolean;
}

/**
 * 创建上传组件共享的文件状态和操作方法。
 *
 * @param componentName - 组件名称。
 * @param fileTypeName - 文件类型名称。
 * @param props - 上传组件的 Props。
 * @param emit - 上传组件的事件触发器。
 * @param options - 文件大小和类型校验配置。
 * @returns 文件列表、加载状态和上传操作方法。
 */
export const useUpload = <T extends string | string[]>(
	componentName: string,
	fileTypeName: string,
	props: Partial<UploadProps> & {
		modelValue?: T | null;
	},
	emit: ((event: "update:fileList", value: UploadUserFile[]) => void) & ((event: "update:modelValue", value: T | null) => void),
	data?: {
		maxSize?: string | number;
		uploadApi?: (formData: FormData) => Promise<string>;
		uploadUrl?: string;
	}
): UploadComposable => {
	const fileListModel = useVModel(props, "fileList", emit, { passive: true });
	const fileList = computed<UploadUserFile[]>({
		get: () => fileListModel.value ?? [],
		set: (value) => {
			fileListModel.value = value;
		},
	});

	const loading = ref(false);
	let activeUploadCount = 0;

	// 获取 el-form 组件上下文
	const formContext = inject(formContextKey, undefined);
	// 获取 el-form-item 组件上下文
	const formItemContext = inject(formItemContextKey, undefined);

	const mbNum = new Decimal(1024);
	const maxSizeKB = computed(() => new Decimal(isNumber(data?.maxSize) ? data.maxSize : Number(data?.maxSize)));
	const maxSizeMB = computed(() => maxSizeKB.value.div(mbNum));

	onMounted(() => {
		if (!props.disabled && props.autoUpload && !data?.uploadApi && !data?.uploadUrl && props.httpRequest === uploadProps.httpRequest.default) {
			console.warn(`[Fast:${componentName}]`, "uploadApi 和 uploadUrl 至少需要提供一个。");
		}
	});

	const handleValue = (files: UploadUserFile[] = fileList.value): void => {
		if (files.length > 0) {
			if (props.multiple === true) {
				const value = files.flatMap((item) => (item.url ? [item.url] : []));
				emit("update:modelValue", value as T);
			} else {
				const fileUrl = files[0]?.url;
				if (!fileUrl) return;
				emit("update:modelValue", fileUrl as T);
			}
		} else {
			emit("update:modelValue", props.multiple === true ? ([] as unknown as T) : null);
		}
	};

	const handleHttpRequest = async (options: UploadRequestOptions): Promise<void> => {
		const propsData = options.data;
		if (!data?.uploadApi && !data?.uploadUrl) {
			const error = new Error(`上传${fileTypeName}接口 uploadApi 或地址 uploadUrl 不能为空。`);
			ElMessage.error(`上传${fileTypeName}Api或地址不能为空`);
			console.error(`[Fast:${componentName}]`, error.message);
			return Promise.reject(error);
		}
		activeUploadCount++;
		loading.value = true;
		try {
			let fileUrl: string;
			if (data?.uploadApi) {
				fileUrl = await uploadUtil.uploadFileByApi(data.uploadApi, options.file, options.filename, propsData);
			} else {
				const headers =
					options.headers instanceof Headers
						? options.headers
						: new Headers(
								Object.entries(options.headers).flatMap(([key, value]) =>
									value === null || value === undefined ? [] : [[key, String(value)] as [string, string]]
								)
							);
				fileUrl = await uploadUtil.uploadFile(data?.uploadUrl ?? options.action, options.file, options.filename, propsData, {
					headers,
					method: options.method,
					withCredentials: options.withCredentials,
				});
			}
			options.onSuccess(fileUrl);
		} finally {
			activeUploadCount = Math.max(activeUploadCount - 1, 0);
			loading.value = activeUploadCount > 0;
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
		if (formItemContext?.prop) void formContext?.validateField([formItemContext.prop]);
		ElMessage.success("上传成功");
		props.onSuccess?.(fileUrl, uploadFile, uploadFiles);
	};

	const handleOnError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
		ElNotification({
			message: `【${uploadFile.name}】${fileTypeName}上传失败，请您重新上传`,
			type: "error",
		});
		props.onError?.(error, uploadFile, uploadFiles);
	};

	const handleOnRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
		handleValue(uploadFiles);
		props.onRemove?.(uploadFile, uploadFiles);
	};

	const handleOnExceed = (files: File[], uploadFiles: UploadUserFile[]): void => {
		ElMessage.warning(`最多只能上传 ${props.limit} 个${fileTypeName}，请移除后再进行上传`);
		props.onExceed?.(files, uploadFiles);
	};

	const handleOnUpload = (file: UploadFile | UploadRawFile): boolean => {
		const fileSizeKB = new Decimal(file.size ?? 0).div(mbNum);

		if (fileSizeKB.greaterThan(maxSizeKB.value)) {
			console.warn(`[Fast:${componentName}]`, `【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.value.toString()}MB。`);
			ElMessage.warning(`【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.value.toString()}MB`);
			return false;
		}

		const rawFile = "type" in file ? file : file.raw;
		if (!rawFile) return false;
		if (!uploadUtil.matchesAccept(rawFile, props.accept)) {
			const uploadFileNames = uploadUtil.detectFileType(props.accept ?? "");
			console.warn(`[Fast:${componentName}]`, `只允许上传【${uploadFileNames}】格式的${fileTypeName}。`);
			ElMessage.warning(`只允许上传【${uploadFileNames}】格式的${fileTypeName}`);
			return false;
		}

		return true;
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
			} else {
				fileList.value = [];
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
		handleOnRemove,
		handleOnExceed,
		handleOnUpload,
	};
};
