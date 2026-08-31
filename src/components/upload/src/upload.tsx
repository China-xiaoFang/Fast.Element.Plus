import { Fragment, computed, defineComponent, ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
import { ElIcon, ElUpload, uploadProps } from "element-plus";
import { isArray, isNull, isString } from "lodash-unified";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "../../../utils";
import { useUpload } from "./useUpload";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile } from "element-plus";
import type { VNode } from "vue";

/** FaUpload 的运行时 Props 定义。 */
export const faUploadProps = {
	...uploadProps,
	/** @description whether to activate drag and drop mode */
	drag: {
		type: Boolean,
		default: true,
	},
	/** @description maximum number of uploads allowed */
	limit: {
		type: Number,
		default: 1,
	},
	/** @description v-model绑定值 */
	modelValue: definePropType<string | string[] | null>([String, Array]),
	/** @description 大小限制，单位kb */
	maxSize: {
		type: definePropType<string | number>([String, Number]),
		default: 5120,
	},
	/** @description 图片上传接口，优先级最高 */
	uploadApi: {
		type: definePropType<(formData: FormData) => Promise<string>>(Function),
	},
	/** @description 图片上传地址 */
	uploadUrl: String,
};

/** FaUpload 的运行时 Emits 定义。 */
export const faUploadEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),
};

/** FaUpload 的插槽参数。 */
export interface FaUploadSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 触发文件选择框的内容 */
	trigger: never;
	/** @description 提示说明文字 */
	tip: never;
	/** @description 缩略图模板的内容 */
	file: { file: UploadFile; index: number };
}

export default defineComponent({
	name: "FaUpload",
	props: faUploadProps,
	emits: faUploadEmits,
	slots: makeSlots<FaUploadSlots>(),
	setup(props, { slots, emit, expose }) {
		const {
			fileList,
			loading,
			formContext,
			maxSizeMB,
			handleHttpRequest,
			handleOnSuccess,
			handleOnError,
			handleOnRemove,
			handleOnExceed,
			handleOnUpload,
		} = useUpload("FaUpload", "文件", props, emit, {
			get maxSize() {
				return props.maxSize;
			},
			get uploadApi() {
				return props.uploadApi;
			},
			get uploadUrl() {
				return props.uploadUrl || (props.action === uploadProps.action.default ? undefined : props.action);
			},
		});

		const disabled = computed(() => {
			return props.disabled === true || formContext?.disabled === true;
		});

		const uploadRef = ref<UploadInstance>();
		const httpRequest = computed(() => (props.httpRequest === uploadProps.httpRequest.default ? handleHttpRequest : props.httpRequest));

		const handleOnChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
			if (uploadFile.status !== "ready") return;

			if (!handleOnUpload(uploadFile)) {
				fileList.value = fileList.value.filter((item) => item.uid !== uploadFile.uid);
			} else {
				props.onChange?.(uploadFile, uploadFiles);
			}
		};

		const handleBeforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
			// onChange 已完成首次校验；被移除的非法文件不能在自动上传流程中继续提交。
			if (!fileList.value.some((item) => item.uid === rawFile.uid) || !handleOnUpload(rawFile)) return false;
			return props.beforeUpload?.(rawFile) ?? true;
		};

		const elUploadProps = useProps(props, uploadProps, [
			"fileList",
			"disabled",
			"httpRequest",
			"beforeUpload",
			"onExceed",
			"onSuccess",
			"onError",
			"onRemove",
			"onChange",
		]);

		useRender(() => (
			<ElUpload
				{...elUploadProps.value}
				ref={uploadRef}
				class="fa-upload"
				vLoading={loading.value}
				vModel:fileList={fileList.value}
				disabled={disabled.value}
				httpRequest={httpRequest.value}
				beforeUpload={handleBeforeUpload}
				onExceed={handleOnExceed}
				onSuccess={handleOnSuccess}
				onError={handleOnError}
				onRemove={handleOnRemove}
				onChange={handleOnChange}
			>
				{{
					default: () =>
						slots.default ? (
							slots.default()
						) : (
							<Fragment>
								<ElIcon class="el-icon--upload">
									<UploadFilled />
								</ElIcon>
								<div class="el-upload__text">
									Drop file here or <em>click to upload</em>
								</div>
							</Fragment>
						),
					...(slots.trigger && { trigger: (): VNode | VNode[] => slots.trigger?.() ?? [] }),
					tip: () =>
						slots.tip ? (
							slots.tip()
						) : (
							<Fragment>
								<div class="el-upload__tip">files with a size less than {maxSizeMB.value.toString()}MB</div>
								{!props.showFileList && fileList.value.length > 0 && (
									<div class="el-upload__tip">
										{fileList.value.map((item, index) => (
											<Fragment>
												{item.name}
												{fileList.value.length <= index && <br />}
											</Fragment>
										))}
									</div>
								)}
							</Fragment>
						),
					...(slots.file && {
						file: ({ file, index }: { file: UploadFile; index: number }): VNode | VNode[] => slots.file?.({ file, index }) ?? [],
					}),
				}}
			</ElUpload>
		));

		return useExpose(expose, {
			/** @description 取消上传请求 */
			abort: computed(() => uploadRef.value?.abort),
			/** @description 手动上传文件列表 */
			submit: computed(() => uploadRef.value?.submit),
			/** @description 清空已上传的文件列表（该方法不支持在 before-upload 中调用） */
			clearFiles: computed(() => uploadRef.value?.clearFiles),
			/** @description 手动选择文件 */
			handleStart: computed(() => uploadRef.value?.handleStart),
			/** @description 手动移除文件。file 和 rawFile 已被合并。 */
			handleRemove: computed(() => uploadRef.value?.handleRemove),
			/** @description 加载状态 */
			loading,
			/** @description 文件集合 */
			fileList,
		});
	},
});
