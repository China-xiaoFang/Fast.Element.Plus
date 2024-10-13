import { ref, inject, watch } from "vue";
import { FastApp } from "../../../settings/index.mjs";
import "../../../utils/index.mjs";
import { useVModel } from "@vueuse/core";
import { Decimal } from "decimal.js";
import { formContextKey, formItemContextKey, ElMessage, ElNotification, genFileId } from "element-plus";
import { isNumber, isString, isArray } from "lodash-unified";
import { uploadUtil } from "../../../utils/upload.mjs";
import { consoleError, consoleWarn } from "../../../utils/console.mjs";
const useUpload = (componentName, fileTypeName, props, emit, data) => {
  const fileList = useVModel(props, "fileList", emit, { passive: true });
  const loading = ref(false);
  const formContext = inject(formContextKey, void 0);
  const formItemContext = inject(formItemContextKey, void 0);
  const mbNum = new Decimal(1024);
  const maxSizeKB = new Decimal(isNumber(data == null ? void 0 : data.maxSize) ? data == null ? void 0 : data.maxSize : Number(data == null ? void 0 : data.maxSize));
  const maxSizeMB = maxSizeKB.div(mbNum);
  const handleValue = () => {
    if (fileList.value.length > 0) {
      if (isString(props.modelValue)) {
        emit("update:modelValue", fileList.value[0].url);
        emit("change", fileList.value[0].url);
      } else {
        if (props.multiple) {
          const value = fileList.value.map((m) => m.url);
          emit("update:modelValue", value);
          emit("change", value);
        } else {
          emit("update:modelValue", fileList.value[0].url);
          emit("change", fileList.value[0].url);
        }
      }
    } else {
      emit("update:modelValue", null);
      emit("change", null);
    }
  };
  const handleHttpRequest = async (options) => {
    let propsData;
    if (props.data) {
      propsData = uploadUtil.getPropsData(options.file, props.data);
    }
    const uploadUrl = (data == null ? void 0 : data.uploadUrl) ?? FastApp.state.upload.url;
    if (!uploadUrl) {
      ElMessage.error(`上传${fileTypeName}地址不能为空`);
      consoleError(componentName, `上传${fileTypeName}地址 “uploadUrl” 不能为空`);
      return;
    }
    loading.value = true;
    try {
      const fileUrl = await uploadUtil.uploadFile(uploadUrl, options.file, options.filename, propsData);
      options.onSuccess(fileUrl);
    } finally {
      loading.value = false;
    }
  };
  const handleOnSuccess = (fileUrl, uploadFile, uploadFiles) => {
    if (!fileUrl) return;
    if (!props.multiple && uploadFiles.length > 1) {
      uploadFiles.shift();
    }
    uploadFile.url = fileUrl;
    handleValue();
    (formItemContext == null ? void 0 : formItemContext.prop) && (formContext == null ? void 0 : formContext.validateField([formItemContext.prop]));
    ElMessage.success("上传成功");
    props.onSuccess && props.onSuccess(fileUrl, uploadFile, uploadFiles);
  };
  const handleOnError = (error, uploadFile, uploadFiles) => {
    ElNotification({
      message: `【${uploadFile.name}】${fileTypeName}上传失败，请您重新上传`,
      type: "error"
    });
    props.onError && props.onError(error, uploadFile, uploadFiles);
  };
  const handleOnExceed = (files, uploadFiles) => {
    ElMessage.warning(`最多只能上传 ${props.limit} 个${fileTypeName}，请移除后再进行上传`);
    props.onExceed && props.onExceed(files, uploadFiles);
  };
  const handleOnUpload = (file) => {
    const fileSizeKB = new Decimal(file.size).div(mbNum);
    if (fileSizeKB.greaterThan(maxSizeKB)) {
      consoleWarn(componentName, `【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.toString()}MB`);
      ElMessage.warning(`【${file.name}】${fileTypeName}上传大小不能超过 ${maxSizeMB.toString()}MB`);
      return false;
    }
    const fileType = "type" in file ? file.type : file.raw.type;
    if (props.accept && props.accept.split(",").every((e) => e !== fileType)) {
      const uploadFileNames = uploadUtil.detectFileType(props.accept);
      consoleError(componentName, `只允许上传【${uploadFileNames}】格式的${fileTypeName}`);
      ElMessage.error(`只允许上传【${uploadFileNames}】格式的${fileTypeName}`);
      return false;
    }
  };
  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        if (isArray(newValue)) {
          fileList.value = newValue.map((m) => {
            const find = fileList.value.find((f) => f.url === m);
            return {
              name: "",
              status: "success",
              uid: (find == null ? void 0 : find.uid) ?? genFileId(),
              url: m
            };
          });
        } else {
          const find = fileList.value.find((f) => f.url === newValue);
          fileList.value = [
            {
              name: "",
              status: "success",
              uid: (find == null ? void 0 : find.uid) ?? genFileId(),
              url: newValue
            }
          ];
        }
      }
    },
    {
      immediate: true
    }
  );
  return {
    fileList,
    loading,
    formContext,
    formItemContext,
    maxSizeMB,
    handleValue,
    handleHttpRequest,
    handleOnSuccess,
    handleOnError,
    handleOnExceed,
    handleOnUpload
  };
};
export {
  useUpload
};
//# sourceMappingURL=useUpload.mjs.map
