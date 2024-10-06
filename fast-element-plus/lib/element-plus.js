"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@element-plus/icons-vue");require("./hooks/index.js"),require("./utils/index.js");const o=require("element-plus"),t=require("./hooks/useOverlay/index.js"),l=require("./utils/vue/func.js"),n=require("./utils/console.js"),r=require("./utils/errorHandler.js");function s(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e)for(const t in e)if("default"!==t){const l=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,l.get?l:{enumerable:!0,get:()=>e[t]})}return o.default=e,Object.freeze(o)}const u=s(e);o.ElDialog.props={...o.ElDialog.props,draggable:{type:Boolean,default:!0}},o.ElInput.props={...o.ElInput.props,showWordLimit:{type:Boolean,default:!0}};const i=(e,s,u)=>{if((null==(s=s??{})?void 0:s.title)||(s.title="温馨提示"),null==(null==s?void 0:s.draggable)&&(s.draggable=!0),(null==s?void 0:s.cancelButtonText)||(s.cancelButtonText="取消"),(null==s?void 0:s.confirmButtonText)||(s.confirmButtonText="确定"),null==(null==s?void 0:s.closeOnClickModal)&&(s.closeOnClickModal=!1),null==(null==s?void 0:s.closeOnPressEscape)&&(s.closeOnPressEscape=!1),null!=(null==s?void 0:s.beforeClose)){const e=s.beforeClose,o=(null==s?void 0:s.confirmButtonText)??"确定",u=(null==s?void 0:s.showCancelButton)??!1;s.beforeClose=(s,i,c)=>{if("confirm"===s){t.useOverlay.show(0),i.confirmButtonLoading=!0,i.showCancelButton=!1,i.confirmButtonText="加载中...";const a=()=>{i.confirmButtonLoading=!1,i.showCancelButton=u,i.confirmButtonText=o,t.useOverlay.hide()},d=()=>{a(),c()};l.execAsyncFunction(e,s,i,d).then((()=>{d()})).catch((e=>{n.consoleError("MessageBox",e),a(),r.errorHandler(e)}))}else c()}}switch(u){case"alert":break;case"confirm":case"prompt":null==(null==s?void 0:s.showCancelButton)&&(s.showCancelButton=!0)}return o.ElMessageBox(Object.assign({message:e},s,{boxType:u}))};o.ElMessageBox.alert=(e,o)=>i(e,o,"alert"),o.ElMessageBox.prompt=(e,o)=>i(e,o,"prompt"),o.ElMessageBox.confirm=(e,o)=>i(e,o,"confirm");exports.installElementPlus=e=>{for(const[o,t]of Object.entries(u))e.component(`el-icon-${o}`,t);e.use(o)};
//# sourceMappingURL=element-plus.js.map
