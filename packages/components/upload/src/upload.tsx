import { Fragment, computed, defineComponent, ref } from "vue";
import { ElIcon, ElUpload, uploadProps } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "@fast-china/utils";
import { isArray, isNull, isString } from "lodash-unified";
import { useUpload } from "./useUpload";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile } from "element-plus";
import type { VNode } from "vue";

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
	modelValue: definePropType<string | string[]>([String, Array]),
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

export const faUploadEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[]): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string | string[]): boolean => isString(value) || isArray(value) || isNull(value),
};

type FaUploadSlots = {
	/** @description 默认内容插槽 */
	default: never;
	/** @description 触发文件选择框的内容 */
	trigger: never;
	/** @description 提示说明文字 */
	tip: never;
	/** @description 缩略图模板的内容 */
	file: { file: UploadFile; index: number };
};

export default defineComponent({
	name: "FaUpload",
	props: faUploadProps,
	emits: faUploadEmits,
	slots: makeSlots<FaUploadSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const { fileList, loading, formContext, maxSizeMB, handleHttpRequest, handleOnSuccess, handleOnError, handleOnExceed, handleOnUpload } =
			useUpload("FaUpload", "文件", props, emit, {
				maxSize: props.maxSize,
				uploadApi: props.uploadApi,
				uploadUrl: props.uploadUrl,
			});

		const disabled = computed(() => {
			return props.disabled || formContext?.disabled;
		});

		const uploadRef = ref<UploadInstance>();

		const handleOnChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
			if (uploadFile.status !== "ready") return;

			if (!handleOnUpload(uploadFile)) {
				fileList.value = fileList.value.slice(0, -1);
			} else {
				props.onChange && props.onChange(uploadFile, uploadFiles);
			}
		};

		const elUploadProps = useProps(props, uploadProps, ["fileList", "disabled", "httpRequest", "onExceed", "onSuccess", "onError", "onChange"]);

		useRender(() => (
			<ElUpload
				{...elUploadProps.value}
				ref={uploadRef}
				class="fa-upload"
				vLoading={loading.value}
				vModel:fileList={fileList.value}
				disabled={disabled.value}
				httpRequest={handleHttpRequest}
				onExceed={handleOnExceed}
				onSuccess={handleOnSuccess}
				onError={handleOnError}
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
					...(slots.trigger && { trigger: (): VNode | VNode[] => slots.trigger() }),
					tip: () =>
						slots.tip ? (
							slots.tip()
						) : (
							<Fragment>
								<div class="el-upload__tip">files with a size less than {maxSizeMB.toString()}MB</div>
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
						file: ({ file, index }: { file: UploadFile; index: number }): VNode | VNode[] => slots.file({ file, index }),
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
			/** @description 手动移除文件。 file 和rawFile 已被合并。 rawFile 将在 v2.2.0 中移除 */
			handleRemove: computed(() => uploadRef.value?.handleRemove),
			/** @description 加载状态 */
			loading,
			/** @description 文件集合 */
			fileList,
		});
	},
});
