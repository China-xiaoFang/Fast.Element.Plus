import { defineComponent, computed, reactive, ref, createVNode, Fragment, withDirectives, mergeProps, createTextVNode, resolveDirective } from "vue";
import { uploadProps, ElUpload, ElIcon, ElImageViewer } from "element-plus";
import { ZoomIn, Edit, Delete, Plus } from "@element-plus/icons-vue";
import { useUpload } from "../../upload/src/useUpload.mjs";
import "../../../constants/index.mjs";
import { definePropType, stringUtil, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isString, isArray, isNull } from "lodash-unified";
import { FaMimeType } from "../../../constants/mime.mjs";
const faUploadImagesProps = {
  ...uploadProps,
  /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
  accept: {
    type: String,
    default: () => FaMimeType.Image
  },
  /** @description type of file list */
  listType: {
    type: definePropType(String),
    default: "picture-card"
  },
  /** @description whether uploading multiple files is permitted */
  multiple: {
    type: Boolean,
    default: true
  },
  /** @description maximum number of uploads allowed */
  limit: {
    type: Number,
    default: 9
  },
  /** @description v-model绑定值 */
  modelValue: definePropType([String, Array]),
  /** @description 大小限制，单位kb */
  maxSize: {
    type: [String, Number],
    default: 2048
  },
  /** @description 图片上传接口，优先级最高 */
  uploadApi: {
    type: definePropType(Function)
  },
  /** @description 图片上传地址 */
  uploadUrl: String
};
const faUploadImagesEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isArray(value) || isNull(value),
  /** @description v-model:fileList 回调 */
  "update:fileList": (value) => isArray(value),
  /** @description 改变 */
  change: (value) => isString(value) || isArray(value) || isNull(value)
};
const UploadImages = /* @__PURE__ */ defineComponent({
  name: "FaUploadImages",
  props: faUploadImagesProps,
  emits: faUploadImagesEmits,
  slots: makeSlots(),
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
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
      handleOnUpload
    } = useUpload("FaUploadImages", "图片", props, emit, {
      maxSize: props.maxSize,
      uploadApi: props.uploadApi,
      uploadUrl: props.uploadUrl
    });
    const disabled = computed(() => {
      return props.disabled || formContext?.disabled;
    });
    const state = reactive({
      uploadKey: `fa-upload-images__${stringUtil.generateRandomString(8)}`,
      preview: false,
      previewIndex: -1,
      previewList: []
    });
    const uploadRef = ref();
    const handleEdit = () => {
      const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
      uploadInputEl && uploadInputEl.dispatchEvent(new MouseEvent("click"));
    };
    const handlePreview = (uploadFile) => {
      state.previewIndex = fileList.value.findIndex((f) => f.url === uploadFile.url);
      state.previewList = fileList.value.map((m) => m.url);
      state.preview = true;
    };
    const handleRemove = (index) => {
      fileList.value.splice(index, 1);
      handleValue();
    };
    const handleBeforeUpload = (rawFile) => {
      if (!handleOnUpload(rawFile)) {
        return false;
      }
      if (props.beforeUpload) {
        return props.beforeUpload(rawFile);
      }
      return true;
    };
    const elUploadProps = useProps(props, uploadProps, ["fileList", "disabled", "httpRequest", "beforeUpload", "onExceed", "onSuccess", "onError"]);
    useRender(() => createVNode(Fragment, null, [withDirectives(createVNode(ElUpload, mergeProps(elUploadProps.value, {
      "ref": uploadRef,
      "class": ["fa-upload-images", state.uploadKey, {
        "fa-upload-images__hidden-upload": fileList.value.length >= props.limit
      }],
      "fileList": fileList.value,
      "onUpdate:fileList": ($event) => fileList.value = $event,
      "disabled": disabled.value,
      "httpRequest": handleHttpRequest,
      "beforeUpload": handleBeforeUpload,
      "onExceed": handleOnExceed,
      "onSuccess": handleOnSuccess,
      "onError": handleOnError
    }), {
      default: () => fileList.value.length < props.limit && slots.default ? slots.default() : createVNode(ElIcon, null, {
        default: () => [createVNode(Plus, null, null)]
      }),
      tip: () => createVNode("div", {
        "class": "el-upload__tip"
      }, [createTextVNode("files with a size less than "), maxSizeMB.toString(), createTextVNode("MB")]),
      file: ({
        file,
        index
      }) => createVNode("div", null, [createVNode("img", {
        "class": "el-upload-list__item-thumbnail",
        "src": file.url
      }, null), createVNode("span", {
        "class": "el-upload-list__item-actions"
      }, [createVNode("span", {
        "class": "el-upload-list__item-preview",
        "onClick": () => handlePreview(file),
        "title": "查看"
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(ZoomIn, null, null)]
      })]), !disabled.value && createVNode(Fragment, null, [createVNode("span", {
        "class": "el-upload-list__item-icon",
        "onClick": handleEdit,
        "title": "编辑"
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(Edit, null, null)]
      })]), createVNode("span", {
        "class": "el-upload-list__item-icon",
        "onClick": () => handleRemove(index),
        "title": "删除"
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(Delete, null, null)]
      })])])])])
    }), [[resolveDirective("loading"), loading.value]]), state.preview && createVNode(ElImageViewer, {
      "closeOnPressEscape": true,
      "hideOnClickModal": true,
      "teleported": true,
      "onClose": () => state.preview = false,
      "urlList": state.previewList
    }, null)]));
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
      previewList: computed(() => state.previewList)
    });
  }
});
export {
  UploadImages as default,
  faUploadImagesEmits,
  faUploadImagesProps
};
//# sourceMappingURL=uploadImages.mjs.map
