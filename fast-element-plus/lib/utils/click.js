"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});let e=null,t=!1;const o={debounce:(t,o=500)=>(...l)=>{e&&clearTimeout(e),e=setTimeout((()=>{t(...l)}),o)},throttle:(e,o=500)=>(...l)=>{t||(t=!0,e(...l),setTimeout((()=>{t=!1}),o))}};exports.clickUtil=o;
//# sourceMappingURL=click.js.map
