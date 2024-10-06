/**
 * 构建预依赖的包
 */
const peerDependencies = ["axios", "element-plus", "vue", "vue-router"];

/**
 * 构建删除包
 */
const removedDevDependencies = [
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
	"@vueuse/core": "VueUse",
	"crypto-js": "CryptoJS",
	"decimal.js": "Decimal",
	lodash: "_",
	"lodash-es": "_",
	"lodash-unified": "_",
	screenfull: "screenfull",
	sortablejs: "Sortable",

	axios: "axios",
	"element-plus": "ElementPlus",
	// pinia: "Pinia",
	// "pinia-plugin-persistedstate": "piniaPluginPersistedstate",
	vue: "Vue",
	"vue-router": "VueRouter",
};

export { peerDependencies, removedDevDependencies, globalDependenciesMapping };
