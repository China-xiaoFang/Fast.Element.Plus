import { defineComponent, computed, ref, withDirectives, createVNode, mergeProps, Fragment, createTextVNode, resolveDirective } from "vue";
import { uploadProps, ElUpload, ElIcon } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
import { definePropType, useProps, useRender, useExpose, makeSlots } from "@fast-china/utils";
import { isString, isArray, isNull } from "lodash-unified";
import { useUpload } from "./useUpload.mjs";
const faUploadProps = {
  ...uploadProps,
  /** @description whether to activate drag and drop mode */
  drag: {
    type: Boolean,
    default: true
  },
  /** @description maximum number of uploads allowed */
  limit: {
    type: Number,
    default: 1
  },
  /** @description v-model绑定值 */
  modelValue: definePropType([String, Array]),
  /** @description 大小限制，单位kb */
  maxSize: {
    type: definePropType([String, Number]),
    default: 5120
  },
  /** @description 图片上传接口，优先级最高 */
  uploadApi: {
    type: definePropType(Function)
  },
  /** @description 图片上传地址 */
  uploadUrl: String
};
const faUploadEmits = {
  /** @description v-model 回调 */
  "update:modelValue": (value) => isString(value) || isArray(value) || isNull(value),
  /** @description v-model:fileList 回调 */
  "update:fileList": (value) => isArray(value),
  /** @description 改变 */
  change: (value) => isString(value) || isArray(value) || isNull(value)
};
const Upload = /* @__PURE__ */ defineComponent({
  name: "FaUpload",
  props: faUploadProps,
  emits: faUploadEmits,
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
      handleHttpRequest,
      handleOnSuccess,
      handleOnError,
      handleOnExceed,
      handleOnUpload
    } = useUpload("FaUpload", "文件", props, emit, {
      maxSize: props.maxSize,
      uploadApi: props.uploadApi,
      uploadUrl: props.uploadUrl
    });
    const disabled = computed(() => {
      return props.disabled || formContext?.disabled;
    });
    const uploadRef = ref();
    const handleOnChange = (uploadFile, uploadFiles) => {
      if (uploadFile.status !== "ready") return;
      if (!handleOnUpload(uploadFile)) {
        fileList.value = fileList.value.slice(0, -1);
      } else {
        props.onChange && props.onChange(uploadFile, uploadFiles);
      }
    };
    const elUploadProps = useProps(props, uploadProps, ["fileList", "disabled", "httpRequest", "onExceed", "onSuccess", "onError", "onChange"]);
    useRender(() => withDirectives(createVNode(ElUpload, mergeProps(elUploadProps.value, {
      "ref": uploadRef,
      "class": "fa-upload",
      "fileList": fileList.value,
      "onUpdate:fileList": ($event) => fileList.value = $event,
      "disabled": disabled.value,
      "httpRequest": handleHttpRequest,
      "onExceed": handleOnExceed,
      "onSuccess": handleOnSuccess,
      "onError": handleOnError,
      "onChange": handleOnChange
    }), {
      default: () => slots.default ? slots.default() : createVNode(Fragment, null, [createVNode(ElIcon, {
        "class": "el-icon--upload"
      }, {
        default: () => [createVNode(UploadFilled, null, null)]
      }), createVNode("div", {
        "class": "el-upload__text"
      }, [createTextVNode("Drop file here or "), createVNode("em", null, [createTextVNode("click to upload")])])]),
      ...slots.trigger && {
        trigger: () => slots.trigger()
      },
      tip: () => slots.tip ? slots.tip() : createVNode(Fragment, null, [createVNode("div", {
        "class": "el-upload__tip"
      }, [createTextVNode("files with a size less than "), maxSizeMB.toString(), createTextVNode("MB")]), !props.showFileList && fileList.value.length > 0 && createVNode("div", {
        "class": "el-upload__tip"
      }, [fileList.value.map((item, index) => createVNode(Fragment, null, [item.name, fileList.value.length <= index && createVNode("br", null, null)]))])]),
      ...slots.file && {
        file: ({
          file,
          index
        }) => slots.file({
          file,
          index
        })
      }
    }), [[resolveDirective("loading"), loading.value]]));
    return useExpose(expose, {
      /** @description 取消上传请求 */
      abort: computed(() => uploadRef.value?.abort),
      /** @description 手动上传文件列表 */
      submit: computed(() => uploadRef.value?.submit),
      /** @description 清空已上传的文件列表（该方法不支持在 before-upload 中调用） */
      clearFiles: computed(() => uploadRef.value?.clearFiles),
      /** @description 手动选择文件 */
      handleStart: computed(() => uploadRef.value?.handleStart),
      /** @description 手动移除文件。 file 和rawFile 已被合并。 rawFile 将在 v2.2.0 中移除 */
      handleRemove: computed(() => uploadRef.value?.handleRemove),
      /** @description 加载状态 */
      loading,
      /** @description 文件集合 */
      fileList
    });
  }
});
export {
  Upload as default,
  faUploadEmits,
  faUploadProps
};
//# sourceMappingURL=upload.mjs.map
