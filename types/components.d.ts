// For this project development
import "@vue/runtime-core";

// GlobalComponents for Volar
declare module "@vue/runtime-core" {
	export interface GlobalComponents {
		FaAvatar: (typeof import("fast-element-plus"))["FaAvatar"];
		FaButton: (typeof import("fast-element-plus"))["FaButton"];
		FaCarNumber: (typeof import("fast-element-plus"))["FaCarNumber"];
		FaContextMenu: (typeof import("fast-element-plus"))["FaContextMenu"];
		FaDialog: (typeof import("fast-element-plus"))["FaDialog"];
		FaDrawer: (typeof import("fast-element-plus"))["FaDrawer"];
		FaForm: (typeof import("fast-element-plus"))["FaForm"];
		FaFormItem: (typeof import("fast-element-plus"))["FaFormItem"];
		FaFormItemTip: (typeof import("fast-element-plus"))["FaFormItemTip"];
		FaIcon: (typeof import("fast-element-plus"))["FaIcon"];
		FaImage: (typeof import("fast-element-plus"))["FaImage"];
		FaLayoutGrid: (typeof import("fast-element-plus"))["FaLayoutGrid"];
		FaLayoutGridItem: (typeof import("fast-element-plus"))["FaLayoutGridItem"];
		FaSelect: (typeof import("fast-element-plus"))["FaSelect"];
		FaSelectOption: (typeof import("fast-element-plus"))["FaSelectOption"];
		FaSelectPage: (typeof import("fast-element-plus"))["FaSelectPage"];
		FaSelectV2: (typeof import("fast-element-plus"))["FaSelectV2"];
		FaTable: (typeof import("fast-element-plus"))["FaTable"];
		FaTableColumn: (typeof import("fast-element-plus"))["FaTableColumn"];
		FaTree: (typeof import("fast-element-plus"))["FaTree"];
		FaTreeSelect: (typeof import("fast-element-plus"))["FaTreeSelect"];
		FaUpload: (typeof import("fast-element-plus"))["FaUpload"];
		FaUploadImage: (typeof import("fast-element-plus"))["FaUploadImage"];
		FaUploadImages: (typeof import("fast-element-plus"))["FaUploadImages"];
	}

	export interface GlobalDirectives {
		/**
		 * 复制指令
		 * @description 点击元素时自动复制指定内容到剪贴板
		 * @param value - 要复制的文本内容或数字
		 * @example
		 * ```vue
		 * <!-- 复制文本 -->
		 * <el-button v-copy="'复制的内容'">复制</el-button>
		 *
		 * <!-- 复制数字 -->
		 * <span v-copy="123456">点击复制订单号</span>
		 *
		 * <!-- 复制变量 -->
		 * <div v-copy="userInfo.email">复制邮箱</div>
		 * ```
		 */
		vCopy: Directive<HTMLElement, string | number>;

		/**
		 * 防抖指令
		 * @description 防止短时间内重复触发点击事件，默认延迟 500ms
		 * @param value - 防抖延迟时间（毫秒），或要执行的函数
		 * @example
		 * ```vue
		 * <el-button v-debounce @click="handleSubmit">提交</el-button>
		 * ```
		 */
		vDebounce: Directive<HTMLElement, string | number>;

		/**
		 * 拖拽指令
		 * @description 使元素可以在页面内自由拖拽移动
		 * @example
		 * ```vue
		 * <!-- 基础拖拽 -->
		 * <div v-draggable class="draggable-box">拖动我</div>
		 *
		 * <!-- 配合弹窗使用 -->
		 * <el-dialog v-draggable title="可拖拽对话框">
		 *   <p>对话框内容</p>
		 * </el-dialog>
		 *
		 * <!-- 拖拽卡片 -->
		 * <el-card v-draggable>
		 *   <template #header>可拖拽卡片</template>
		 *   卡片内容
		 * </el-card>
		 * ```
		 */
		vDraggable: Directive<HTMLElement>;

		/**
		 * 图标复制指令
		 * @description 在元素左侧侧显示复制图标，点击图标复制指定内容
		 * @param value - 要复制的文本内容或数字
		 * @example
		 * ```vue
		 * <!-- 文本后显示复制图标 -->
		 * <span v-iconCopy="'API Key:  abc123'">API Key: abc123</span>
		 *
		 * <!-- 复制订单号 -->
		 * <div v-iconCopy="orderNo">订单号: {{ orderNo }}</div>
		 *
		 * <!-- 复制手机号 -->
		 * <p v-iconCopy="userInfo.phone">{{ userInfo.phone }}</p>
		 * ```
		 */
		vIconCopy: Directive<HTMLElement, string | number>;

		/**
		 * 长按指令
		 * @description 长按元素触发指定事件，默认长按 500ms 触发
		 * @param value - 长按触发的回调函数
		 * @example
		 * ```vue
		 * <!-- 长按删除 -->
		 * <el-button v-longpress="handleDelete">长按删除</el-button>
		 *
		 * <!-- 长按显示菜单 -->
		 * <div v-longpress="showContextMenu">长按显示菜单</div>
		 *
		 * <!-- 长按执行操作 -->
		 * <li v-longpress="(e) => handleLongPress(item, e)">
		 *   {{ item.name }}
		 * </li>
		 * ```
		 */
		vLongpress: Directive<HTMLElement, (event: MouseEvent | TouchEvent) => void>;

		/**
		 * 节流指令
		 * @description 限制事件触发频率，在指定时间内只执行一次，默认间隔 1000ms
		 * @param value - 节流执行的函数
		 * @example
		 * ```vue
		 * <!-- 节流点击 -->
		 * <el-button v-throttle="handleClick">点击</el-button>
		 *
		 * <!-- 滚动节流 -->
		 * <div v-throttle="handleScroll" @scroll="handleScroll">
		 *   滚动内容
		 * </div>
		 *
		 * <!-- 输入节流 -->
		 * <el-input v-throttle="handleInput" @input="handleInput" />
		 * ```
		 */
		vThrottle: Directive<HTMLElement, (...args: any[]) => void>;
	}
}

export {};
