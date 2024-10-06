"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("../settings/index.js");require("./index.js");const s=require("axios"),t=require("element-plus"),a=require("lodash-unified"),o=require("./crypto.js"),r=require("./console.js"),i=require("./storage.js"),n="HTTP_CACHE_",l={cancelDuplicateRequest:!0,loading:!1,cache:!1,ignoreError:!1,getMethodCacheHandle:!0,simpleDataFormat:!0,showErrorMessage:!0,showCodeMessage:!0,showSuccessMessage:!1,autoDownloadFile:!0},c={fullscreen:!0,lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.7)"},d={cancelDuplicate:"重复请求，自动取消！",offLine:"您断网了！",fileDownloadError:"文件下载失败或此文件不存在！",302:"接口重定向了！",400:"参数不正确！",401:"您没有权限操作（令牌、用户名、密码错误）！",403:"您的访问是被禁止的！",404:"请求的资源不存在！",405:"请求的格式不正确！",408:"请求超时！",409:"系统已存在相同数据！",410:"请求的资源被永久删除，且不会再得到的！",422:"当创建一个对象时，发生一个验证错误！",429:"请求过于频繁，请稍后再试！",500:"服务器内部错误！",501:"服务未实现！",502:"网关错误！",503:"服务不可用，服务器暂时过载或维护！",504:"服务暂时无法访问，请稍后再试！",505:"HTTP版本不受支持！",default:"请求错误！",ERR_NETWORK:"网关错误，服务不可用，服务器暂时过载或维护！"},p=new Map,u={target:null,count:0},m=e=>{e.loading&&u.count>0&&u.count--,0===u.count&&(u.target.close(),u.target=null)},g=e=>{if(p.has(e)){p.get(e)(e),p.delete(e)}},v=(e,s=500,t,a,o)=>e.simpleDataFormat?Promise.resolve({success:!1,code:s,message:t,data:a,timestamp:Date.now(),response:o}):Promise.resolve(o);let h=!1;const f=a=>{r.consoleLog("axiosUtil",`当前版本 ${a}`),s.get(`/version.json?_=${Date.now()}`).then((s=>{if("development"!==e.FastApp.state.env&&a!==s.data.version){if(h)return;h=!0,r.consoleLog("axiosUtil",`发现新版本 ${s.data.version}`),t.ElMessageBox.confirm(`发现新版本 ${s.data.version}，是否立即更新？`,{type:"warning",confirmButtonText:"更新",closeOnClickModal:!1}).then((()=>{r.consoleLog("axiosUtil",`更新版本 ${s.data.version}`),window.location.reload()})).catch((()=>{h=!1,r.consoleWarn("axiosUtil",`取消更新版本 ${s.data.version}`),t.ElMessage.warning({message:"您取消了更新，将在十分钟后再次进行提示！"})}))}})).then((e=>{r.consoleError("axiosUtil","检测版本更新错误。",e)}))},E={request:(h,f)=>{const E={...l,...h};if(E.cache&&"GET"===E.method.toUpperCase()&&E.simpleDataFormat){if(E.params)return r.consoleWarn("axiosUtil","如果使用 Http Cache，则不能存在任何 'params' 参数"),v(E,405,"如果使用 Http Cache，则不能存在任何 'params' 参数",new Error("如果使用 Http Cache，则不能存在任何 'params' 参数"));const e=`${n}${E.url}`,s=i.Local.get(e);if(s)return Promise.resolve(s)}else E.cache=!1;const w=(e=>{let{data:s}=e;const{url:t,method:o,params:r}=e;return a.isString(s)&&(s=JSON.parse(s)),[t,o,JSON.stringify(r),JSON.stringify(s)].join("&")})(h),x=(new Date).getTime(),T=s.create({baseURL:e.FastApp.state.axios.baseUrl,timeout:e.FastApp.state.axios.timeout,headers:{"Gejia-DeviceID":window.deviceId,"Gejia-DeviceType":"Web"},responseType:"json"});T.interceptors.request.use((a=>{if(g(w),E.cancelDuplicateRequest&&((e,t)=>{t.cancelToken=t.cancelToken||new s.CancelToken((s=>{p.has(e)||p.set(e,s)}))})(w,a),e.FastApp.state.axios.interceptors.request&&e.FastApp.state.axios.interceptors.request(a),E.loading&&(u.count++,1===u.count&&(f={...c,...f},u.target=t.ElLoading.service(f))),e.FastApp.state.axios.requestCipher){let e=a.params||a.data;const s=JSON.stringify(e);if(null!=s&&""!=s&&"{}"!=s){r.consoleDebug("axiosUtil",`HTTP request data("${a.url}")`,e);switch(e={data:o.cryptoUtil.aes.encrypt(s,`${x}`,`FIV${x}`),timestamp:x},a.method.toUpperCase()){case"GET":case"DELETE":case"HEAD":a.params=e;break;case"POST":case"PUT":case"PATCH":a.data=e;break;case"OPTIONS":case"CONNECT":case"TRACE":throw new Error("This request mode is not supported.")}a.headers["Fast-Request-Encipher"]="true"}}else"GET"===a.method.toUpperCase()&&(a.params=a.params||{},a.params._=x);return a}),(e=>v(E,500,"应用程序内部错误！",e))),T.interceptors.response.use((s=>{if(g(w),E.loading&&m(E),E.ignoreError)return Promise.resolve(s);if(e.FastApp.state.axios.interceptors.response)try{const t=e.FastApp.state.axios.interceptors.response(s);if(null!=t&&null!=t)return Promise.resolve(t)}catch(l){return E.ignoreError?Promise.resolve(s):v(E,500,"应用程序内部错误！",l)}switch(s.config.responseType){case"blob":return 200===s.status?(E.autoDownloadFile&&(e=>{const s=new Blob([e.data],{type:"application/octet-stream;charset=UTF-8"}),t=e.headers["content-disposition"],a=new RegExp("filename=([^;]+\\.[^\\.;]+);*").exec(t)[1],o=document.createElement("a"),r=window.URL.createObjectURL(s);o.style.display="none",o.href=r,o.download=decodeURI(a.replace(/^["](.*)["]$/g,"$1")),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)})(s),Promise.resolve(s)):(t.ElMessage.error(d.fileDownloadError),Promise.reject(s));case"json":{const l=s.data,c=s.data,d=(null==c?void 0:c.code)??s.status;if(d<200||d>299||!(null==c?void 0:c.success)){if(E.showCodeMessage)return(null==c?void 0:c.message)&&(a.isObject(null==c?void 0:c.message)?t.ElMessage.error(JSON.stringify(null==c?void 0:c.message)):t.ElMessage.error(null==c?void 0:c.message)),v(E,d,l.message??"服务器内部错误！",(null==c?void 0:c.data)??l,s);if(e.FastApp.state.axios.requestCipher&&(null==c?void 0:c.data)&&(c.data=o.cryptoUtil.aes.decrypt(c.data,`${c.timestamp}`,`FIV${c.timestamp}`),a.isString(c.data)&&c.data.startsWith('"')&&c.data.endsWith('"')&&(c.data=c.data.replace(/"/g,"")),r.consoleDebug("axiosUtil",`HTTP response data("${s.config.url}")`,c.data)),E.cache){const e=`${n}${E.url}`;i.Local.set(e,(null==c?void 0:c.data)??l,1440)}return E.simpleDataFormat?Promise.resolve({...(null==c?void 0:c.data)??l,response:s}):Promise.resolve(s)}}break;default:return E.simpleDataFormat?Promise.resolve({...s.data,response:s}):Promise.resolve(s)}}),(a=>{if((null==a?void 0:a.config)&&g(null==a?void 0:a.config),E.loading&&m(E),s.isCancel(a)||r.consoleError("axiosUtil",d.cancelDuplicate,a),e.FastApp.state.axios.interceptors.responseError)try{const s=e.FastApp.state.axios.interceptors.responseError(a);if(null!=s&&null!=s)return Promise.reject(s)}catch(o){return v(E,500,"应用程序内部错误！",o)}return E.showErrorMessage&&(e=>{var a,o,r,i,n;if(s.isCancel(e))return;let l="";if(window.navigator.onLine){const s=(null==(o=null==(a=null==e?void 0:e.response)?void 0:a.data)?void 0:o.code)||(null==(r=null==e?void 0:e.response)?void 0:r.status)||(null==e?void 0:e.code)||"default";l=(null==(n=null==(i=null==e?void 0:e.response)?void 0:i.data)?void 0:n.message)||d[s]}else l=d.offLine;t.ElMessage.error(l)})(a),v(E,500,"服务器内部错误！",a)}))},deleteHttpCache:()=>{i.Local.removeByPrefix(n)},checkVersionUpdate:(e,s=6e5)=>{f(e),setInterval((()=>{f(e)}),s)}};exports.HTTP_CACHE_KEY=n,exports.axiosUtil=E;
//# sourceMappingURL=axios.js.map
