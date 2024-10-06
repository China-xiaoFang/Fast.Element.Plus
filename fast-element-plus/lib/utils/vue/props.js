"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),t=require("lodash-unified");exports.useProps=(o,r,u,s)=>o?e.computed((()=>{const e=r?t.omit(r,u??[]):{};return{...t.pick(o,Object.keys(e)),...s??{}}})):e.computed((()=>({})));
//# sourceMappingURL=props.js.map
