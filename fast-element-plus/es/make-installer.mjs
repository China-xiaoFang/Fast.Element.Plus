import FastElementPlusComponents from "./component.mjs";
import FastElementPlusDirectives from "./directive.mjs";
import { installElementPlus } from "./element-plus.mjs";
import { version } from "./version.mjs";
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
const makeInstaller = () => {
  const install = (app) => {
    if (app[INSTALLED_KEY]) return;
    app[INSTALLED_KEY] = true;
    installElementPlus(app);
    FastElementPlusComponents.forEach((c) => app.use(c));
    FastElementPlusDirectives.forEach((d) => app.use(d));
  };
  return {
    version,
    install
  };
};
export {
  INSTALLED_KEY,
  makeInstaller
};
//# sourceMappingURL=make-installer.mjs.map
