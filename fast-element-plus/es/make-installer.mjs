import { setFastOptions } from "./settings/index.mjs";
import "./utils/index.mjs";
import { installElementPlus } from "./element-plus.mjs";
import { installFastElementPlus } from "./fast-element-plus.mjs";
import { fastElementPlusVersion } from "./version.mjs";
import { errorHandler } from "./utils/errorHandler.mjs";
import { makeIdentity } from "./utils/deviceId.mjs";
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
const makeInstaller = () => {
  const install = (app, options) => {
    if (app[INSTALLED_KEY]) return;
    app[INSTALLED_KEY] = true;
    app.config.errorHandler = errorHandler;
    makeIdentity();
    if (options) {
      setFastOptions(options);
    }
    installElementPlus(app);
    installFastElementPlus(app);
  };
  return {
    version: fastElementPlusVersion,
    install
  };
};
export {
  INSTALLED_KEY,
  makeInstaller
};
//# sourceMappingURL=make-installer.mjs.map
