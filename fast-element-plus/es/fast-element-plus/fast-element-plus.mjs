import FastElementPlusIconsVue from "@fast-element-plus/icons-vue";
import FastElementPlusComponents from "./component.mjs";
import FastElementPlusDirectives from "./directive.mjs";
const installFastElementPlus = (app) => {
  app.use(FastElementPlusIconsVue);
  FastElementPlusComponents.forEach((c) => app.use(c));
  FastElementPlusDirectives.forEach((d) => app.use(d));
};
export {
  installFastElementPlus
};
//# sourceMappingURL=fast-element-plus.mjs.map
