import { Fragment, computed, defineComponent, reactive, ref, withModifiers } from "vue";
import { Delete, Edit, UploadFilled, ZoomIn } from "@element-plus/icons-vue";
import { useUpload } from "@fast-element-plus/components/upload/src/useUpload";
import { FaMimeType } from "@fast-element-plus/constants";
import { FastApp } from "@fast-element-plus/settings";
import { definePropType, makeSlots, stringUtil, useExpose, useProps, useRender } from "@fast-element-plus/utils";
import { ElIcon, ElImageViewer, ElUpload, uploadProps } from "element-plus";
import type { UploadInstance, UploadProps, UploadUserFile, uploadListTypes } from "element-plus";
import { isArray, isNumber, isString } from "lodash-unified";

export const faUploadImageProps = {
	...uploadProps,
	/** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
	accept: {
		type: String,
		default: (): string => FaMimeType.Image,
	},
	/** @description type of file list */
	listType: {
		type: definePropType<(typeof uploadListTypes)[number]>(String),
		default: "picture",
	},
	/** @description whether to show the uploaded file list */
	showFileList: {
		type: Boolean,
		default: false,
	},
	/** @description v-model绑定值 */
	modelValue: String,
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
	/** @description 宽度 */
	width: {
		type: definePropType<string | number>([String, Number]),
		default: 150,
	},
	/** @description 高度 */
	height: {
		type: definePropType<string | number>([String, Number]),
		default: 150,
	},
	/** @description 文件类型 */
	fileType: Number,
};

export const faUploadImageEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string): boolean => isString(value) || isArray(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string): boolean => isString(value) || isArray(value),
};

type FaUploadImageSlots = {
	/** @description 默认内容插槽 */
	default: never;
};

export default defineComponent({
	name: "FaUploadImage",
	props: faUploadImageProps,
	emits: faUploadImageEmits,
	slots: makeSlots<FaUploadImageSlots>(),
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
		} = useUpload("FaUploadImage", "图片", props, emit, {
			maxSize: props.maxSize,
			uploadUrl: props.uploadUrl,
		});

		const disabled = computed(() => {
			return props.disabled || formContext?.disabled;
		});

		const state = reactive({
			uploadKey: `fa-upload-image__${stringUtil.generateRandomString(8)}`,
			preview: false,
			previewList: [],
			style: computed(() => {
				const result = {};
				if (isNumber(props.width)) {
					result["--fa-upload-image-width"] = `${props.width}px`;
				} else {
					result["--fa-upload-image-width"] = props.width;
				}
				if (isNumber(props.height)) {
					result["--fa-upload-image-height"] = `${props.height}px`;
				} else {
					result["--fa-upload-image-height"] = props.height;
				}
				return result;
			}),
		});

		const uploadRef = ref<UploadInstance>();

		const handleEdit = (): void => {
			const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
			uploadInputEl && uploadInputEl.dispatchEvent(new MouseEvent("click"));
		};

		const handlePreview = (): void => {
			state.previewList = [fileList.value[0].url];
			state.preview = true;
		};

		const handleRemove = (): void => {
			fileList.value = [];
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
					class={["fa-upload-image", state.uploadKey]}
					style={state.style}
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
							fileList.value.length > 0 ? (
								<Fragment>
									<img class="el-upload-list__item-thumbnail" src={fileList.value[0].url} />
									<span
										class="el-upload-list__item-actions"
										onClick={withModifiers(() => {
											return;
										}, ["stop"])}
									>
										<span class="el-upload-list__item-icon" onClick={() => handlePreview()} title="查看">
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
												<span class="el-upload-list__item-icon" onClick={() => handleRemove()} title="删除">
													<ElIcon>
														<Delete />
													</ElIcon>
												</span>
											</Fragment>
										)}
									</span>
								</Fragment>
							) : slots.default ? (
								slots.default()
							) : (
								<Fragment>
									<ElIcon class="el-icon--upload">
										<UploadFilled />
									</ElIcon>
									<div class="el-upload__text">
										Drop file here <br />
										<em>click to upload</em>
									</div>
								</Fragment>
							),
						tip: () => <div class="el-upload__tip">file with a size less than {maxSizeMB.toString()}MB</div>,
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
