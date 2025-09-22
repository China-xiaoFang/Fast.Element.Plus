import { defineComponent, computed, reactive, ref, createVNode, Fragment, withDirectives, mergeProps, createTextVNode, withModifiers, resolveDirective } from "vue";
import { uploadProps, ElUpload, ElIcon, ElImageViewer } from "element-plus";
import { ZoomIn, Edit, Delete, UploadFilled } from "@element-plus/icons-vue";
import { useUpload } from "../../upload/src/useUpload.mjs";
import "../../../constants/index.mjs";
import { definePropType, stringUtil, useProps, useRender, addUnit, useExpose, makeSlots } from "@fast-china/utils";
import { isString, isArray, isNull } from "lodash-unified";
import { FaMimeType } from "../../../constants/mime.mjs";
const faUploadImageProps = {
  ...uploadProps,
  /** @description whether to activate drag and drop mode */
  drag: {
    type: Boolean,
    default: true
  },
  /** @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true` */
  accept: {
    type: String,
    default: () => FaMimeType.Image
  },
  /** @description type of file list */
  listType: {
    type: definePropType(String),
    default: "picture"
  },
  /** @description whether to show the uploaded file list */
  showFileList: {
    type: Boolean,
    default: false
  },
  /** @description v-model绑定值 */
  modelValue: String,
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
  uploadUrl: String,
  /** @description 宽度 */
  width: {
    type: [String, Number],
    default: 150
  },
  /** @description 高度 */
  height: {
    type: [String, Number],
    default: 150
  }
};
const faUploadImageEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isArray(value) || isNull(value),
  /** @description v-model:fileList 回调 */
  "update:fileList": (value) => isArray(value),
  /** @description 改变 */
  change: (value) => isString(value) || isArray(value) || isNull(value)
};
const UploadImage = /* @__PURE__ */ defineComponent({
  name: "FaUploadImage",
  props: faUploadImageProps,
  emits: faUploadImageEmits,
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
    } = useUpload("FaUploadImage", "图片", props, emit, {
      maxSize: props.maxSize,
      uploadApi: props.uploadApi,
      uploadUrl: props.uploadUrl
    });
    const disabled = computed(() => {
      return props.disabled || formContext?.disabled;
    });
    const state = reactive({
      uploadKey: `fa-upload-image__${stringUtil.generateRandomString(8)}`,
      preview: false,
      previewList: []
    });
    const uploadRef = ref();
    const handleEdit = () => {
      const uploadInputEl = document.querySelector(`.${state.uploadKey} .el-upload__input`);
      uploadInputEl && uploadInputEl.dispatchEvent(new MouseEvent("click"));
    };
    const handlePreview = () => {
      state.previewList = [fileList.value[0].url];
      state.preview = true;
    };
    const handleRemove = () => {
      fileList.value = [];
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
      "class": ["fa-upload-image", state.uploadKey],
      "style": {
        "--width": addUnit(props.width),
        "--height": addUnit(props.height)
      },
      "fileList": fileList.value,
      "onUpdate:fileList": ($event) => fileList.value = $event,
      "disabled": disabled.value,
      "httpRequest": handleHttpRequest,
      "beforeUpload": handleBeforeUpload,
      "onExceed": handleOnExceed,
      "onSuccess": handleOnSuccess,
      "onError": handleOnError
    }), {
      default: () => fileList.value.length > 0 ? createVNode(Fragment, null, [createVNode("img", {
        "class": "el-upload-list__item-thumbnail",
        "src": fileList.value[0].url
      }, null), createVNode("span", {
        "class": "el-upload-list__item-actions",
        "onClick": withModifiers(() => {
          return;
        }, ["stop"])
      }, [createVNode("span", {
        "class": "el-upload-list__item-icon",
        "onClick": () => handlePreview(),
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
        "onClick": () => handleRemove(),
        "title": "删除"
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(Delete, null, null)]
      })])])])]) : slots.default ? slots.default() : createVNode(Fragment, null, [createVNode(ElIcon, {
        "class": "el-icon--upload"
      }, {
        default: () => [createVNode(UploadFilled, null, null)]
      }), createVNode("div", {
        "class": "el-upload__text"
      }, [createTextVNode("Drop file here "), createVNode("br", null, null), createVNode("em", null, [createTextVNode("click to upload")])])]),
      tip: () => createVNode("div", {
        "class": "el-upload__tip"
      }, [createTextVNode("file with a size less than "), maxSizeMB.toString(), createTextVNode("MB")])
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
  UploadImage as default,
  faUploadImageEmits,
  faUploadImageProps
};
//# sourceMappingURL=uploadImage.mjs.map
