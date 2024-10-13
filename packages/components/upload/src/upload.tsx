import type { VNode } from "vue";
import { Fragment, computed, defineComponent, ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
import { FastApp } from "@fast-element-plus/settings";
import { definePropType, makeSlots, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile } from "element-plus";
import { ElIcon, ElUpload, uploadProps } from "element-plus";
import { isArray, isString } from "lodash-unified";
import { useUpload } from "./useUpload";

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
	/** @description 图片上传地址 */
	uploadUrl: {
		type: String,
		default: (): string => FastApp.state.upload.url,
	},
	/** @description 文件类型 */
	fileType: Number,
};

export const faUploadEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[]): boolean => isString(value) || isArray(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string | string[]): boolean => isString(value) || isArray(value),
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
			...computed(() => ({
				/** @description cancel upload request */
				abort: uploadRef.value?.abort,
				/** @description upload the file list manually */
				submit: uploadRef.value?.submit,
				/** @description clear the file list  */
				clearFiles: uploadRef.value?.clearFiles,
				/** @description select the file manually */
				handleStart: uploadRef.value?.handleStart,
				/** @description remove the file manually */
				handleRemove: uploadRef.value?.handleRemove,
			})).value,
			/** @description 加载状态 */
			loading,
			/** @description 文件集合 */
			fileList,
		});
	},
});
