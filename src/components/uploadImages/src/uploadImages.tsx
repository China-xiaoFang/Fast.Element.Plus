import { Fragment, computed, defineComponent, reactive, ref } from "vue";
import { Delete, Edit, Plus, ZoomIn } from "@element-plus/icons-vue";
import { ElIcon, ElImageViewer, ElUpload, uploadProps } from "element-plus";
import { isArray, isNull } from "lodash-unified";
import { FaMimeType } from "../../../constants";
import { definePropType, makeSlots, randomString, useExpose, useProps, useRender, withDefineType } from "../../../utils";
import { useUpload } from "../../upload/src/useUpload";
import type { UploadFile, UploadInstance, UploadProps, UploadUserFile, uploadListTypes } from "element-plus";

/** FaUploadImages 的运行时 Props 定义。 */
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
	modelValue: definePropType<string[] | null>([Array]),
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
};

/** FaUploadImages 的运行时 Emits 定义。 */
export const faUploadImagesEmits = {
	/** @description v-model 回调 */
	"update:modelValue": (value: string[] | null): boolean => isArray(value) || isNull(value),
	/** @description v-model:fileList 回调 */
	"update:fileList": (value: UploadUserFile[]): boolean => isArray(value),
};

/** FaUploadImages 的插槽参数。 */
export interface FaUploadImagesSlots extends Record<string, unknown> {
	/** @description 默认内容插槽 */
	default: never;
}

export default defineComponent({
	name: "FaUploadImages",
	props: faUploadImagesProps,
	emits: faUploadImagesEmits,
	slots: makeSlots<FaUploadImagesSlots>(),
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
		} = useUpload<string[]>("FaUploadImages", "图片", props, emit, {
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
			uploadKey: `fa-upload-images__${randomString(8)}`,
			preview: false,
			previewIndex: -1,
			previewList: withDefineType<string[]>([]),
		});

		const uploadRef = ref<UploadInstance>();
		const httpRequest = computed(() => (props.httpRequest === uploadProps.httpRequest.default ? handleHttpRequest : props.httpRequest));

		const handleEdit = (): void => {
			const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
			uploadInputEl?.dispatchEvent(new MouseEvent("click"));
		};

		const handlePreview = (uploadFile: UploadFile): void => {
			state.previewIndex = fileList.value.findIndex((f) => f.url === uploadFile.url);
			state.previewList = fileList.value.flatMap((item) => (item.url ? [item.url] : []));
			state.preview = true;
		};

		const handleRemove = (index: number): void => {
			const file = fileList.value[index];
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
			"multiple",
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
					class={["fa-upload-images", state.uploadKey, { "fa-upload-images__hidden-upload": fileList.value.length >= props.limit }]}
					vLoading={loading.value}
					vModel:fileList={fileList.value}
					multiple={true}
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
							fileList.value.length < props.limit && slots.default ? (
								slots.default()
							) : (
								<ElIcon>
									<Plus />
								</ElIcon>
							),
						tip: () => <div class="el-upload__tip">files with a size less than {maxSizeMB.value.toString()}MB</div>,
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
				{state.preview && (
					<ElImageViewer
						closeOnPressEscape
						hideOnClickModal
						teleported
						initialIndex={Math.max(state.previewIndex, 0)}
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
