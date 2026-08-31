import { Fragment, computed, defineComponent, reactive, ref, withModifiers } from "vue";
import { Delete, Edit, UploadFilled, ZoomIn } from "@element-plus/icons-vue";
import { ElIcon, ElImageViewer, ElUpload, uploadProps } from "element-plus";
import { isArray, isNull, isString } from "lodash-unified";
import { FaMimeType } from "../../../constants";
import { addCssUnit, definePropType, makeSlots, randomString, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import { useUpload } from "../../upload/src/useUpload";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile, uploadListTypes } from "element-plus";

/** FaUploadImage 的运行时 Props 定义。 */
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
	modelValue: definePropType<string | string[] | null>([String, Array]),
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

/** FaUploadImage 的运行时 Emits 定义。 */
export const faUploadImageEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string | string[] | null): boolean => isString(value) || isArray(value) || isNull(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
};

/** FaUploadImage 的插槽参数。 */
export interface FaUploadImageSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaUploadImage",
	props: faUploadImageProps,
	emits: faUploadImageEmits,
	slots: makeSlots<FaUploadImageSlots>(),
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
		} = useUpload<string | string[]>("FaUploadImage", "图片", props, emit, {
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

		const state = reactive({
			uploadKey: `fa-upload-image__${randomString(8)}`,
			preview: false,
			previewList: withDefineType<string[]>([]),
		});

		const uploadRef = ref<UploadInstance>();
		const httpRequest = computed(() => (props.httpRequest === uploadProps.httpRequest.default ? handleHttpRequest : props.httpRequest));

		const handleEdit = (): void => {
			const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
			uploadInputEl?.dispatchEvent(new MouseEvent("click"));
		};

		const handlePreview = (): void => {
			const fileUrl = fileList.value[0]?.url;
			if (!fileUrl) return;
			state.previewList = [fileUrl];
			state.preview = true;
		};

		const handleRemove = (): void => {
			const file = fileList.value[0];
			if (file) uploadRef.value?.handleRemove(file as UploadFile);
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
			"onRemove",
		]);

		useRender(() => (
			<Fragment>
				<ElUpload
					{...elUploadProps.value}
					ref={uploadRef}
					class={["fa-upload-image", state.uploadKey]}
					style={{
						"--width": addCssUnit(props.width),
						"--height": addCssUnit(props.height),
					}}
					vLoading={loading.value}
					vModel:fileList={fileList.value}
					disabled={disabled.value}
					httpRequest={httpRequest.value}
					beforeUpload={handleBeforeUpload}
					onExceed={handleOnExceed}
					onSuccess={handleOnSuccess}
					onError={handleOnError}
					onRemove={handleOnRemove}
				>
					{{
						default: () =>
							fileList.value.length > 0 ? (
								<Fragment>
									<img class="el-upload-list__item-thumbnail" src={fileList.value[0]?.url} />
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
						tip: () => <div class="el-upload__tip">file with a size less than {maxSizeMB.value.toString()}MB</div>,
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
			/** @description 手动移除文件。file 和 rawFile 已被合并。 */
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
