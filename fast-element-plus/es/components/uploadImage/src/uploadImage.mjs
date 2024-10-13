import { defineComponent, computed, reactive, ref, createVNode, Fragment, withDirectives, mergeProps, withModifiers, createTextVNode, resolveDirective } from "vue";
import { ZoomIn, Edit, Delete, UploadFilled } from "@element-plus/icons-vue";
import { useUpload } from "../../upload/src/useUpload.mjs";
import "../../../constants/index.mjs";
import { FastApp } from "../../../settings/index.mjs";
import "../../../utils/index.mjs";
import { uploadProps, ElUpload, ElIcon, ElImageViewer } from "element-plus";
import { isString, isArray, isNumber } from "lodash-unified";
import { FaMimeType } from "../../../constants/mime.mjs";
import { definePropType, useProps } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { stringUtil } from "../../../utils/string.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
const faUploadImageProps = {
  ...uploadProps,
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
    type: definePropType([String, Number]),
    default: 2048
  },
  /** @description 图片上传地址 */
  uploadUrl: {
    type: String,
    default: () => FastApp.state.upload.url
  },
  /** @description 宽度 */
  width: {
    type: definePropType([String, Number]),
    default: 150
  },
  /** @description 高度 */
  height: {
    type: definePropType([String, Number]),
    default: 150
  },
  /** @description 文件类型 */
  fileType: Number
};
const faUploadImageEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isArray(value),
  /** @description v-model:fileList 回调 */
  "update:fileList": (value) => isArray(value),
  /** @description 改变 */
  change: (value) => isString(value) || isArray(value)
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
      uploadUrl: props.uploadUrl
    });
    const disabled = computed(() => {
      return props.disabled || (formContext == null ? void 0 : formContext.disabled);
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
      })
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
      "style": state.style,
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
    }), [[resolveDirective("loading"), loading.value]]), state.preview ? createVNode(ElImageViewer, {
      "closeOnPressEscape": true,
      "hideOnClickModal": true,
      "teleported": true,
      "onClose": () => state.preview = false,
      "urlList": state.previewList
    }, null) : null]));
    return useExpose(expose, {
      ...computed(() => {
        var _a, _b, _c, _d, _e;
        return {
          /** @description cancel upload request */
          abort: (_a = uploadRef.value) == null ? void 0 : _a.abort,
          /** @description upload the file list manually */
          submit: (_b = uploadRef.value) == null ? void 0 : _b.submit,
          /** @description clear the file list  */
          clearFiles: (_c = uploadRef.value) == null ? void 0 : _c.clearFiles,
          /** @description select the file manually */
          handleStart: (_d = uploadRef.value) == null ? void 0 : _d.handleStart,
          /** @description remove the file manually */
          handleRemove: (_e = uploadRef.value) == null ? void 0 : _e.handleRemove
        };
      }).value,
      /** @description 加载状态 */
      loading,
      /** @description 文件集合 */
      fileList,
      /** @description 预览 */
      preview: state.preview,
      /** @description 预览集合 */
      previewList: state.previewList
    });
  }
});
export {
  UploadImage as default,
  faUploadImageEmits,
  faUploadImageProps
};
//# sourceMappingURL=uploadImage.mjs.map
