"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),require("./index.js");const e=require("crypto-js"),t=require("./console.js"),r={aes:{encrypt:(t,r,n,s=e.mode.CBC)=>t?(r.length<32&&(r=r.padEnd(32,"f")),r.length>32&&(r=r.substring(0,32)),n.length<16&&(n=n.padEnd(16,"f")),n.length>16&&(n=n.substring(0,16)),e.AES.encrypt(t,e.enc.Utf8.parse(r),{iv:e.enc.Utf8.parse(n),mode:s}).toString()):t,decrypt(r,n,s,o=e.mode.CBC){if(!r)return null;n.length<32&&(n=n.padEnd(32,"f")),n.length>32&&(n=n.substring(0,32)),s.length<16&&(s=s.padEnd(16,"f")),s.length>16&&(s=s.substring(0,16));const c=e.AES.decrypt(r,e.enc.Utf8.parse(n),{iv:e.enc.Utf8.parse(s),mode:o});try{const t=c.toString(e.enc.Utf8);return JSON.parse(t)}catch(p){return t.consoleError("AESCrypto",p),null}}}};exports.cryptoUtil=r;
//# sourceMappingURL=crypto.js.map
