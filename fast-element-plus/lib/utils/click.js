"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});let e=null,t=!1;const o={debounce(t,o=500){clearTimeout(e),e=setTimeout((()=>{t()}),o)},throttle(e,o=500){t||(t=!0,e(),setTimeout((()=>{t=!1}),o))}};exports.clickUtil=o;
//# sourceMappingURL=click.js.map
