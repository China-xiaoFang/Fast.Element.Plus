/**
 * 构建预依赖的包
 */
const peerDependencies = ["@element-plus/icons-vue", "@fast-element-plus/icons-vue", "axios", "element-plus", "pinia", "vue", "vue-router"];

/**
 * 构建忽略包
 */
const ignoredDevDependencies = ["@vueuse/core", "crypto-js", "decimal.js", "lodash-es", "pinia-plugin-persistedstate", "screenfull", "sortablejs"];

/**
 * 构建删除包
 */
const removedDevDependencies = [
	"@types/crypto-js",
	"@types/lodash-es",
	"@typescript-eslint/eslint-plugin",
	"@typescript-eslint/parser",
	"@vitejs/plugin-vue",
	"@vitejs/plugin-vue-jsx",
	"@vue/tsconfig",
	"eslint",
	"eslint-config-prettier",
	"eslint-define-config",
	"eslint-plugin-import",
	"eslint-plugin-prettier",
	"eslint-plugin-vue",
	"prettier",
	"sass",
	"terser",
	"tsx",
	"typescript",
	"vite",
	"vite-plugin-dts",
	"vue-eslint-parser",
	"vue-tsc",
];

/**
 * 构建全局包
 */
const globalDependenciesMapping = {
	"@element-plus/icons-vue": "ElementPlusIconsVue",
	"@fast-element-plus/icons-vue": "FastElementPlusIconsVue",
	axios: "axios",
	"element-plus": "ElementPlus",
	pinia: "Pinia",
	vue: "Vue",
	"vue-router": "VueRouter",

	"@vueuse/core": "VueUse",
	"crypto-js": "CryptoJS",
	"lodash-es": "LodashES",
	"pinia-plugin-persistedstate": "piniaPluginPersistedstate",
	screenfull: "screenfull",
	sortablejs: "Sortable",
};

export { peerDependencies, ignoredDevDependencies, removedDevDependencies, globalDependenciesMapping };
