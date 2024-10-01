"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),t=require("lodash-es");exports.useProps=(o,r,s,u)=>o?e.computed((()=>{const e=r?t.omit(r,s??[]):{};return{...t.pick(o,Object.keys(e)),...u??{}}})):e.computed((()=>({})));
//# sourceMappingURL=props.js.map
