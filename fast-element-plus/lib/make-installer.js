"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./settings/index.js");require("./utils/index.js");const r=require("./element-plus.js"),s=require("./fast-element-plus.js"),t=require("./version.js"),l=require("./utils/errorHandler.js"),i=require("./utils/deviceId.js"),n=Symbol("INSTALLED_KEY");exports.INSTALLED_KEY=n,exports.makeInstaller=()=>({version:t.fastElementPlusVersion,install:(t,o)=>{t[n]||(t[n]=!0,t.config.errorHandler=l.errorHandler,i.makeIdentity(),o&&e.setFastOptions(o),r.installElementPlus(t),s.installFastElementPlus(t))}});
//# sourceMappingURL=make-installer.js.map
