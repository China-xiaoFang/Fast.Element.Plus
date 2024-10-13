import { defineComponent, computed, reactive, ref, createVNode, Fragment, withDirectives, mergeProps, createTextVNode, resolveDirective } from "vue";
import { Plus, ZoomIn, Edit, Delete } from "@element-plus/icons-vue";
import { useUpload } from "../../upload/src/useUpload.mjs";
import "../../../constants/index.mjs";
import { FastApp } from "../../../settings/index.mjs";
import "../../../utils/index.mjs";
import { uploadProps, ElUpload, ElIcon, ElImageViewer } from "element-plus";
import { isString, isArray } from "lodash-unified";
import { FaMimeType } from "../../../constants/mime.mjs";
import { definePropType, useProps } from "../../../utils/vue/props.mjs";
import { makeSlots } from "../../../utils/vue/slots.mjs";
import { stringUtil } from "../../../utils/string.mjs";
import { useRender } from "../../../utils/vue/useRender.mjs";
import { useExpose } from "../../../utils/vue/expose.mjs";
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
    type: definePropType([String, Number]),
    default: 2048
  },
  /** @description 图片上传地址 */
  uploadUrl: {
    type: String,
    default: () => FastApp.state.upload.url
  },
  /** @description 文件类型 */
  fileType: Number
};
const faUploadImagesEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isArray(value),
  /** @description v-model:fileList 回调 */
  "update:fileList": (value) => isArray(value),
  /** @description 改变 */
  change: (value) => isString(value) || isArray(value)
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
      uploadUrl: props.uploadUrl
    });
    const disabled = computed(() => {
      return props.disabled || (formContext == null ? void 0 : formContext.disabled);
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
  UploadImages as default,
  faUploadImagesEmits,
  faUploadImagesProps
};
//# sourceMappingURL=uploadImages.mjs.map
