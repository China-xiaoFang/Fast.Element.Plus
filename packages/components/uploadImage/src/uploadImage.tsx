import { Fragment, computed, defineComponent, reactive, ref, withModifiers } from "vue";
import { ElIcon, ElImageViewer, ElUpload, uploadProps } from "element-plus";
import { Delete, Edit, UploadFilled, ZoomIn } from "@element-plus/icons-vue";
import { useUpload } from "@fast-element-plus/components/upload/src/useUpload";
import { FaMimeType } from "@fast-element-plus/constants";
import { addUnit, definePropType, makeSlots, stringUtil, useExpose, useProps, useRender } from "@fast-china/utils";
import { isArray, isNull, isString } from "lodash-unified";
import type { UploadInstance, UploadProps, UploadUserFile, uploadListTypes } from "element-plus";

export const faUploadImageProps = {
	...uploadProps,
	/** @description whether to activate drag and drop mode */
	drag: {
		type: Boolean,
		default: true,
	},
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
	modelValue: definePropType<string | string[]>([String, Array]),
	/** @description 大小限制，单位kb */
	maxSize: {
		type: [String, Number],
		default: 2048,
	},
	/** @description 图片上传接口，优先级最高 */
	uploadApi: {
		type: definePropType<(formData: FormData) => Promise<string>>(Function),
	},
	/** @description 图片上传地址 */
	uploadUrl: String,
	/** @description 宽度 */
	width: {
		type: [String, Number],
		default: 150,
	},
	/** @description 高度 */
	height: {
		type: [String, Number],
		default: 150,
	},
};

export const faUploadImageEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[]): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
	/** @description 改变 */
	change: (value: string | string[]): boolean => isString(value) || isArray(value) || isNull(value),
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
		} = useUpload<string | string[]>("FaUploadImage", "图片", props, emit, {
			maxSize: props.maxSize,
			uploadApi: props.uploadApi,
			uploadUrl: props.uploadUrl,
		});

		const disabled = computed(() => {
			return props.disabled || formContext?.disabled;
		});

		const state = reactive({
			uploadKey: `fa-upload-image__${stringUtil.generateRandomString(8)}`,
			preview: false,
			previewList: [],
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
					style={{
						"--width": addUnit(props.width),
						"--height": addUnit(props.height),
					}}
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
				{state.preview && (
					<ElImageViewer
						closeOnPressEscape
						hideOnClickModal
						teleported
						onClose={() => (state.preview = false)}
						urlList={state.previewList}
					/>
				)}
			</Fragment>
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
			/** @description 手动移除文件。 file 和 rawFile 已被合并。 rawFile 将在 v2.2.0 中移除 */
			handleRemove: computed(() => uploadRef.value?.handleRemove),
			/** @description 加载状态 */
			loading,
			/** @description 文件集合 */
			fileList,
			/** @description 预览 */
			preview: computed(() => state.preview),
			/** @description 预览集合 */
			previewList: computed(() => state.previewList),
		});
	},
});
