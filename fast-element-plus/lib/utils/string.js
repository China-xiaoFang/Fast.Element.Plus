"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("lodash-unified"),t={getGreet(){const e=(new Date).getHours();let t="";return t=e<5?"夜深了，注意身体哦！":e<9?"早上好！欢迎回来！":e<12?"上午好！欢迎回来！":e<14?"中午好！欢迎回来！":e<18?"下午好！欢迎回来！":e<24?"晚上好！欢迎回来！":"您好！欢迎回来！",t},objectToQueryString(e){let t="";for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(""!==t&&(t+="&"),t+=`${encodeURIComponent(o)}=${encodeURIComponent(e[o])}`);return t},getUrlParams(e){const t=/[?&][^=?&]+=[^?&]+/g,o={};let n;for(;null!==(n=t.exec(e));){const[e,t]=n[0].substring(1).split("=");o[e]=decodeURIComponent(t)}return o},isJson:o=>!!e.isString(o)&&(o=o.replace(/\s/g,"").replace(/\n|\r/,""),/^\{(.*?)\}$/.test(o)?/"(.*?)":(.*?)/g.test(o):!!/^\[(.*?)\]$/.test(o)&&o.replace(/^\[/,"").replace(/\]$/,"").replace(/},{/g,"}\n{").split(/\n/).map((e=>t.isJson(e))).reduce(((e,t)=>!!t))),generateRandomString(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let o="";for(let n=0;n<e;n++){const e=Math.floor(62*Math.random());o+=t.charAt(e)}return o},generateUUID(){let e="";for(let t=0;t<32;t++){const o=16*Math.random()|0;8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=(12===t?4:16===t?3&o|8:o).toString(16)}return e},async copy(e){if((null==navigator?void 0:navigator.clipboard)&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.opacity="0",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.remove()}}};exports.stringUtil=t;
//# sourceMappingURL=string.js.map
