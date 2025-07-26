/**
 * 构建预依赖的包
 */
const peerDependencies = {
	"@element-plus/icons-vue": "ElementPlusIconsVue",
	"@fast-china/utils": "FastUtils",
	"@fast-element-plus/icons-vue": "FastElementPlusIconsVue",
	"element-plus": "ElementPlus",
	vue: "Vue",
};

/**
 * 构建全局包
 */
const globalDependenciesMapping = {
	"@vueuse/core": "VueUse",
	"decimal.js": "Decimal",
	lodash: "_",
	"lodash-es": "_",
	"lodash-unified": "_",
	screenfull: "screenfull",
	sortablejs: "Sortable",
};

export { peerDependencies, globalDependenciesMapping };
