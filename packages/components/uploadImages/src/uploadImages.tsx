import { Fragment, computed, defineComponent, reactive, ref } from "vue";
import { Delete, Edit, Plus, ZoomIn } from "@element-plus/icons-vue";
import { useUpload } from "@fast-element-plus/components/upload/src/useUpload";
import { FaMimeType } from "@fast-element-plus/constants";
import { FastApp } from "@fast-element-plus/settings";
import { definePropType, makeSlots, stringUtil, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import { ElIcon, ElImageViewer, ElUpload, uploadProps } from "element-plus";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile, uploadListTypes } from "element-plus";
import { isArray, isString } from "lodash-unified";

export const faUploadImagesProps = {
	...uploadProps,
	/** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
	accept: {
		type: String,
		default: (): string => FaMimeType.Image,
	},
	/** @description type of file list */
	listType: {
		type: definePropType<(typeof uploadListTypes)[number]>(String),
		default: "picture-card",
	},
	/** @description whether uploading multiple files is permitted */
	multiple: {
		type: Boolean,
		default: true,
	},
	/** @description maximum number of uploads allowed */
	limit: {
		type: Number,
		default: 9,
	},
	/** @description v-model绑定值 */
	modelValue: definePropType<string | string[]>([String, Array]),
	/** @description 大小限制，单位kb */
	maxSize: {
		type: definePropType<string | number>([String, Number]),
		default: 2048,
	},
	/** @description 图片上传地址 */
	uploadUrl: {
		type: String,
		default: (): string => FastApp.state.upload.url,
	},
	/** @description 文件类型 */
	fileType: Number,
};

export const faUploadImagesEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[]): boolean => isString(value) || isArray(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string | string[]): boolean => isString(value) || isArray(value),
};

type FaUploadImagesSlots = {
	/** @description 默认内容插槽 */
	default: never;
};

export default defineComponent({
	name: "FaUploadImages",
	props: faUploadImagesProps,
	emits: faUploadImagesEmits,
	slots: makeSlots<FaUploadImagesSlots>(),
	setup(props, { attrs, slots, emit, expose }) {
		const {
			fileList,
			loading,
			formContext,
			maxSizeMB,
			handleValue,
			handleHttpRequest,
			handleOnSuccess,
			handleOnError,
			handleOnExceed,
			handleOnUpload,
		} = useUpload("FaUploadImages", "图片", props, emit, {
			maxSize: props.maxSize,
			uploadUrl: props.uploadUrl,
		});

		const disabled = computed(() => {
			return props.disabled || formContext?.disabled;
		});

		const state = reactive({
			uploadKey: `fa-upload-images__${stringUtil.generateRandomString(8)}`,
			preview: false,
			previewIndex: -1,
			previewList: [],
		});

		const uploadRef = ref<UploadInstance>();

		const handleEdit = (): void => {
			const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
			uploadInputEl && uploadInputEl.dispatchEvent(new MouseEvent("click"));
		};

		const handlePreview = (uploadFile: UploadFile): void => {
			state.previewIndex = fileList.value.findIndex((f) => f.url === uploadFile.url);
			state.previewList = fileList.value.map((m) => m.url);
			state.preview = true;
		};

		const handleRemove = (index: number): void => {
			fileList.value.splice(index, 1);
			handleValue();
		};

		const handleBeforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
			if (!handleOnUpload(rawFile)) {
				return false;
			}
			if (props.beforeUpload) {
				return props.beforeUpload(rawFile);
			}
			return true;
		};

		const elUploadProps = useProps(props, uploadProps, [
			"fileList",
			"disabled",
			"httpRequest",
			"beforeUpload",
			"onExceed",
			"onSuccess",
			"onError",
		]);

		useRender(() => (
			<Fragment>
				<ElUpload
					{...elUploadProps.value}
					ref={uploadRef}
					class={["fa-upload-images", state.uploadKey, { "fa-upload-images__hidden-upload": fileList.value.length >= props.limit }]}
					vLoading={loading.value}
					vModel:fileList={fileList.value}
					disabled={disabled.value}
					httpRequest={handleHttpRequest}
					beforeUpload={handleBeforeUpload}
					onExceed={handleOnExceed}
					onSuccess={handleOnSuccess}
					onError={handleOnError}
				>
					{{
						default: () =>
							fileList.value.length < props.limit && slots.default ? (
								slots.default()
							) : (
								<ElIcon>
									<Plus />
								</ElIcon>
							),
						tip: () => <div class="el-upload__tip">files with a size less than {maxSizeMB.toString()}MB</div>,
						file: ({ file, index }: { file: UploadFile; index: number }) => (
							<div>
								<img class="el-upload-list__item-thumbnail" src={file.url} />
								<span class="el-upload-list__item-actions">
									<span class="el-upload-list__item-preview" onClick={() => handlePreview(file)} title="查看">
										<ElIcon>
											<ZoomIn />
										</ElIcon>
									</span>
									{!disabled.value && (
										<Fragment>
											<span class="el-upload-list__item-icon" onClick={handleEdit} title="编辑">
												<ElIcon>
													<Edit />
												</ElIcon>
											</span>
											<span class="el-upload-list__item-icon" onClick={() => handleRemove(index)} title="删除">
												<ElIcon>
													<Delete />
												</ElIcon>
											</span>
										</Fragment>
									)}
								</span>
							</div>
						),
					}}
				</ElUpload>
				{state.preview ? (
					<ElImageViewer
						closeOnPressEscape
						hideOnClickModal
						teleported
						onClose={() => (state.preview = false)}
						urlList={state.previewList}
					/>
				) : null}
			</Fragment>
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
			/** @description 预览 */
			preview: state.preview,
			/** @description 预览集合 */
			previewList: state.previewList,
		});
	},
});
