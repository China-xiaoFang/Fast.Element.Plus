"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),l=require("../../../settings/index.js");require("../../../utils/index.js");const a=require("@vueuse/core"),i=require("decimal.js"),u=require("element-plus"),r=require("lodash-unified"),t=require("../../../utils/upload.js"),n=require("../../../utils/console.js");exports.useUpload=(s,o,d,c,p)=>{const m=a.useVModel(d,"fileList",c,{passive:!0}),v=e.ref(!1),f=e.inject(u.formContextKey,void 0),g=e.inject(u.formItemContextKey,void 0),h=new i.Decimal(1024),$=new i.Decimal(r.isNumber(null==p?void 0:p.maxSize)?null==p?void 0:p.maxSize:Number(null==p?void 0:p.maxSize)),x=$.div(h),y=()=>{if(m.value.length>0)if(r.isString(d.modelValue))c("update:modelValue",m.value[0].url),c("change",m.value[0].url);else if(d.multiple){const e=m.value.map((e=>e.url));c("update:modelValue",e),c("change",e)}else c("update:modelValue",m.value[0].url),c("change",m.value[0].url);else c("update:modelValue",null),c("change",null)};return e.watch((()=>d.modelValue),(e=>{if(e)if(r.isArray(e))m.value=e.map((e=>{const l=m.value.find((l=>l.url===e));return{name:"",status:"success",uid:(null==l?void 0:l.uid)??u.genFileId(),url:e}}));else{const l=m.value.find((l=>l.url===e));m.value=[{name:"",status:"success",uid:(null==l?void 0:l.uid)??u.genFileId(),url:e}]}}),{immediate:!0}),{fileList:m,loading:v,formContext:f,formItemContext:g,maxSizeMB:x,handleValue:y,handleHttpRequest:async e=>{let a;d.data&&(a=t.uploadUtil.getPropsData(e.file,d.data));const i=(null==p?void 0:p.uploadUrl)??l.FastApp.state.upload.url;if(!i)return u.ElMessage.error(`上传${o}地址不能为空`),void n.consoleError(s,`上传${o}地址 “uploadUrl” 不能为空`);v.value=!0;try{const l=await t.uploadUtil.uploadFile(i,e.file,e.filename,a);e.onSuccess(l)}finally{v.value=!1}},handleOnSuccess:(e,l,a)=>{e&&(!d.multiple&&a.length>1&&a.shift(),l.url=e,y(),(null==g?void 0:g.prop)&&(null==f||f.validateField([g.prop])),u.ElMessage.success("上传成功"),d.onSuccess&&d.onSuccess(e,l,a))},handleOnError:(e,l,a)=>{u.ElNotification({message:`【${l.name}】${o}上传失败，请您重新上传`,type:"error"}),d.onError&&d.onError(e,l,a)},handleOnExceed:(e,l)=>{u.ElMessage.warning(`最多只能上传 ${d.limit} 个${o}，请移除后再进行上传`),d.onExceed&&d.onExceed(e,l)},handleOnUpload:e=>{if(new i.Decimal(e.size).div(h).greaterThan($))return n.consoleWarn(s,`【${e.name}】${o}上传大小不能超过 ${x.toString()}MB`),u.ElMessage.warning(`【${e.name}】${o}上传大小不能超过 ${x.toString()}MB`),!1;const l="type"in e?e.type:e.raw.type;if(d.accept&&d.accept.split(",").every((e=>e!==l))){const e=t.uploadUtil.detectFileType(d.accept);return n.consoleError(s,`只允许上传【${e}】格式的${o}`),u.ElMessage.error(`只允许上传【${e}】格式的${o}`),!1}}}};
//# sourceMappingURL=useUpload.js.map
