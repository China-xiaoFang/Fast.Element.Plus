import { reactive } from "vue";
const fastOptions = reactive({
  warnPageNum: 15,
  storageCrypto: true,
  axios: {
    baseUrl: void 0,
    timeout: 6e4,
    requestCipher: true
  },
  table: {
    showSearch: true,
    hideImage: true,
    dataSearchRange: "Past3D"
  }
});
const merge = (target, source) => {
  for (const key in source) {
    const value = source[key];
    if (value !== void 0 && value != null) {
      if (typeof value === "object") {
        target[key] = merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
};
const setFastOptions = (options) => {
  merge(fastOptions, options);
};
export {
  fastOptions,
  setFastOptions
};
//# sourceMappingURL=index.mjs.map
