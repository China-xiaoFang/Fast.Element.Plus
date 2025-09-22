import { Fragment, computed, defineComponent, h, inject, resolveComponent, watch } from "vue";
import { ElIcon, ElImage, ElMessage, ElTableColumn, ElTag, ElText, dayjs, useGlobalSize } from "element-plus";
import { CopyDocument } from "@element-plus/icons-vue";
import FaImage from "@fast-element-plus/components/image";
import { consoleError, dateUtil, definePropType, makeSlots, stringUtil, useProps, useRender } from "@fast-china/utils";
import { isNumber, isObject, isString } from "lodash-unified";
import artwork from "../images/artwork.png";
import notImage from "../images/notImage.png";
import { tableUtil } from "../utils/table";
import { getTableDefaultSlots } from "./table.type";
import { enumMapKey, tableStateKey } from "./useTable";
import type { FaTableColumnCtx, FaTableColumnDateFormat, FaTableColumnType, FaTableDefaultSlotsResult, FaTableEnumColumnType } from "./table.type";
import type { TableColumnCtx } from "element-plus";
import type { ComputedRef, PropType, VNode } from "vue";

type DefaultRow = any;

export const tableColumnProps = {
	/**
	 * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
	 */
	type: {
		type: String,
		default: "default",
	},
	/**
	 * @description column label
	 */
	label: String,
	/**
	 * @description class name of cells in the column
	 */
	className: String,
	/**
	 * @description class name of the label of this column
	 */
	labelClassName: String,
	/**
	 * @description
	 */
	property: String,
	/**
	 * @description field name. You can also use its alias: `property`
	 */
	prop: String,
	/**
	 * @description column width
	 */
	width: {
		type: [String, Number],
		default: "",
	},
	/**
	 * @description column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion
	 */
	minWidth: {
		type: [String, Number],
		default: "",
	},
	/**
	 * @description render function for table header of this column
	 */
	renderHeader: Function as PropType<TableColumnCtx<DefaultRow>["renderHeader"]>,
	/**
	 * @description whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table
	 */
	sortable: {
		type: [Boolean, String],
		default: false,
	},
	/**
	 * @description sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort
	 */
	sortMethod: Function as PropType<TableColumnCtx<DefaultRow>["sortMethod"]>,
	/**
	 * @description specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal
	 */
	sortBy: [String, Function, Array] as PropType<TableColumnCtx<DefaultRow>["sortBy"]>,
	/**
	 * @description whether column width can be resized, works when `border` of `el-table` is `true`
	 */
	resizable: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered
	 */
	columnKey: String,
	/**
	 * @description alignment, the value should be 'left' \/ 'center' \/ 'right'
	 */
	align: String,
	/**
	 * @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right'
	 */
	headerAlign: String,
	/**
	 * @description whether to hide extra content and show them in a tooltip when hovering on the cell
	 */
	showOverflowTooltip: {
		type: [Boolean, Object] as PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>,
		default: undefined,
	},
	/**
	 * @description whether column is fixed at left / right. Will be fixed at left if `true`
	 */
	fixed: [Boolean, String],
	/**
	 * @description function that formats cell content
	 */
	formatter: Function as PropType<TableColumnCtx<DefaultRow>["formatter"]>,
	/**
	 * @description function that determines if a certain row can be selected, works when `type` is 'selection'
	 */
	selectable: Function as PropType<TableColumnCtx<DefaultRow>["selectable"]>,
	/**
	 * @description whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work
	 */
	reserveSelection: Boolean,
	/**
	 * @description data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`
	 */
	filterMethod: Function as PropType<TableColumnCtx<DefaultRow>["filterMethod"]>,
	/**
	 * @description filter value for selected data, might be useful when table header is rendered with `render-header`
	 */
	filteredValue: Array as PropType<TableColumnCtx<DefaultRow>["filteredValue"]>,
	/**
	 * @description an array of data filtering options. For each element in this array, `text` and `value` are required
	 */
	filters: Array as PropType<TableColumnCtx<DefaultRow>["filters"]>,
	/**
	 * @description placement for the filter dropdown
	 */
	filterPlacement: String,
	/**
	 * @description whether data filtering supports multiple options
	 */
	filterMultiple: {
		type: Boolean,
		default: true,
	},
	/**
	 * @description className for the filter dropdown
	 */
	filterClassName: String,
	/**
	 * @description customize indices for each row, works on columns with `type=index`
	 */
	index: [Number, Function] as PropType<TableColumnCtx<DefaultRow>["index"]>,
	/**
	 * @description the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array
	 */
	sortOrders: {
		type: Array as PropType<TableColumnCtx<DefaultRow>["sortOrders"]>,
		default: (): TableColumnCtx<DefaultRow>["sortOrders"] => {
			return ["ascending", "descending", null];
		},
		validator: (val: TableColumnCtx<unknown>["sortOrders"]): boolean => {
			return val.every((order: string) => ["ascending", "descending", null].includes(order));
		},
	},
};

type FaTableColumnSlotsResult = {
	/** @description slots为表格内容的时候才会返回 */
	row?: any;
	/** @description slot为表头内容的时候返回 'TableColumnCtx<any>' 否则返回 'FaTableColumnCtx' */
	column?: TableColumnCtx<any> | FaTableColumnCtx;
	$index?: number;
};

type FaTableColumnDefaultSlots = {
	[key: string]: FaTableDefaultSlotsResult & FaTableColumnSlotsResult;
};

type FaTableColumnSlots = {
	/** @description 默认内容插槽 */
	default: FaTableDefaultSlotsResult & { row: any; column: FaTableColumnCtx; $index: number };
	/** @description 自定义表头的内容 */
	header: FaTableDefaultSlotsResult & { column: FaTableColumnCtx; $index: number };
	/** @description 自定义 filter 图标 */
	filterIcon: FaTableDefaultSlotsResult & { filterOpened: boolean };
} & FaTableColumnDefaultSlots;

export default defineComponent({
	name: "FaTableColumn",
	props: {
		...tableColumnProps,
		/**
		 * @description type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon
		 */
		type: {
			type: definePropType<FaTableColumnType>(String),
			default: "default",
		},
		/**
		 * @description column width
		 */
		width: {
			type: [String, Number],
			default: "auto",
		},
		/** @description alignment, the value should be 'left' \/ 'center' \/ 'right' */
		align: {
			type: String,
			default: "left",
		},
		/** @description alignment of the table header. If omitted, the value of the above `align` attribute will be applied, the value should be 'left' \/ 'center' \/ 'right' */
		headerAlign: {
			type: String,
			default: "left",
		},
		/** @description 是否显示在表格当中 */
		show: Boolean,
		/** @description 小页面的宽度，如果为空，则继承默认宽度 */
		smallWidth: {
			type: [String, Number],
		},
		/** @description 自适应宽度 */
		autoWidth: Boolean,
		/** @description 插槽名称 */
		slot: String,
		/** @description 表格头部插槽名称 */
		headerSlot: String,
		/** @description 自定义表头内容渲染（tsx语法） */
		headerRender: {
			type: definePropType<({ column, $index }: { column: TableColumnCtx<any>; $index: number } & FaTableDefaultSlotsResult) => VNode[]>(
				Function
			),
		},
		/** @description 自定义单元格内容渲染（tsx语法） */
		render: {
			type: definePropType<
				({ row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number } & FaTableDefaultSlotsResult) => VNode[]
			>(Function),
		},
		/** @description 多级表头 */
		_children: {
			type: definePropType<FaTableColumnCtx[]>(Array),
		},
		/** @description 复制 */
		copy: Boolean,
		/** @description 是否为 Link Button */
		link: Boolean,
		/** @description 合并行字段 */
		spanProp: String,
		/** @description Link 按钮的点击事件，优先级最高 */
		click: {
			type: definePropType<({ row, $index }: { row: any; $index?: number }) => void>(Function),
		},
		/** @description 点击Emits事件回调 */
		clickEmit: String,
		/** @description 显示时间格式化字符串 */
		dateFix: Boolean,
		/** @description 显示在页面中的日期格式 */
		dateFormat: {
			type: definePropType<FaTableColumnDateFormat>(String),
		},
		/** @description 是否是标签展示 */
		tag: Boolean,
		/** @description 枚举类型（渲染值的字典） */
		enum: {
			type: definePropType<FaTableEnumColumnType>([Array, Function]),
		},
		/** @description 数据删除字段，如果为 true 会显示遮罩层 */
		dataDeleteField: String,
		/** @description 制单信息计算 */
		submitInfoField: {
			type: definePropType<{ submitClerkName?: string; submitTime?: string }>(Object),
			default: () => ({
				submitClerkName: "createdUserName",
				submitTime: "createdTime",
			}),
		},
	},
	emits: {
		/** @description 图片预览 */
		imagePreview: (url: string): boolean => isString(url),
		/** @description 自定义单元格点击事件 */
		customCellClick: (emitName: string, { row, column, $index }: { row: any; column: FaTableColumnCtx; $index: number }): boolean =>
			isString(emitName) && isObject(row) && isObject(column) && isNumber($index),
	},
	slots: makeSlots<FaTableColumnSlots>(),
	setup(props, { slots, emit }) {
		const _globalSize = useGlobalSize();
		const tableState = inject(tableStateKey);
		const enumMap = inject(enumMapKey);

		const columnCtx = computed(() => props as unknown as FaTableColumnCtx);

		const renderCellData = ({ row }: { row: any }): any => {
			let enumKey = props.prop;
			if (isString(props.enum)) {
				enumKey = props.enum;
			}
			const enumData = enumMap.get(enumKey);
			if (enumData) {
				return tableUtil.filterEnum(tableUtil.handleRowAccordingToProp(row, props.prop), enumData);
			} else {
				return tableUtil.formatValue(tableUtil.handleRowAccordingToProp(row, props.prop));
			}
		};

		const getTagType = ({ row }: { row: any }): any => {
			let enumKey = props.prop;
			if (isString(props.enum)) {
				enumKey = props.enum;
			}
			const enumData = enumMap.get(enumKey);
			return tableUtil.filterEnum(tableUtil.handleRowAccordingToProp(row, props.prop), enumData, null, "tag") as any;
		};

		const getWidth = (defAttr: string): string | number => {
			if (props.autoWidth) {
				return computed(() => {
					const findInfo = tableState.autoColumnWidth.find((f) => f.prop === props.prop);
					if (findInfo) {
						return `${findInfo.width}px`;
					}
					return "auto";
				}).value;
			}
			if (_globalSize.value === "small") {
				return props.smallWidth ?? props.width ?? props.minWidth ?? defAttr ?? "auto";
			}
			return props.width ?? props.minWidth ?? defAttr ?? "auto";
		};

		const autoWidthHeaderRender = (el: VNode[]): VNode[] => {
			if (props.autoWidth) {
				return (
					<div class={["fa-table__auto-width-column__cell-header", `__fa-table__auto-width-column__cell-header__${props.prop}`]}>{el}</div>
				);
			} else {
				return el;
			}
		};

		const headerRender = ({ column, $index }: { column: TableColumnCtx<any>; $index: number }): VNode[] => {
			if (props.headerRender) {
				return autoWidthHeaderRender(props.headerRender({ column, $index, ...getTableDefaultSlots(tableState) }));
			} else if (props.headerSlot) {
				return autoWidthHeaderRender(
					slots[props.headerSlot] && slots[props.headerSlot]({ column, $index, ...getTableDefaultSlots(tableState) })
				);
			} else {
				return autoWidthHeaderRender(<span>{props.label}</span>);
			}
		};

		const autoWidthRender = (el: VNode[]): VNode[] => {
			if (props.autoWidth) {
				return <div class={["fa-table__auto-width-column__cell", `__fa-table__auto-width-column__cell__${props.prop}`]}>{el}</div>;
			} else {
				return el;
			}
		};

		const handleCopyClick = async (value): Promise<void> => {
			try {
				await stringUtil.copy(String(value));
				ElMessage({
					type: "success",
					message: "复制成功",
				});
			} catch (error) {
				consoleError("FaTableColumn", error);
				ElMessage({
					type: "error",
					message: "复制失败",
				});
			}
		};

		const copyRender = (value, copy?: boolean): VNode[] => {
			return (
				(props.copy || copy) &&
				value && (
					<ElIcon class="fa__copy-icon" title="复制" onClick={() => handleCopyClick(value)}>
						<CopyDocument />
					</ElIcon>
				)
			);
		};

		const formatterRender = (row: any, column: TableColumnCtx<any>, cellValue: any, index: number): any => {
			if (column.formatter) {
				return column.formatter(row, column, cellValue, index);
			} else {
				return cellValue;
			}
		};

		const defaultRender = ({ row, column, $index }: { row: any; column: TableColumnCtx<any>; $index: number }): VNode[] => {
			if (props.type === "submitInfo") {
				const submitClerkName = row[props.submitInfoField?.submitClerkName ?? "createdUserName"];
				const submitTime = row[props.submitInfoField?.submitTime ?? "createdTime"];
				return (
					<Fragment>
						<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title={submitTime}>
							{submitClerkName && <span style="margin-right: 5px;">{submitClerkName}</span>}
							<span>{submitTime}</span>
						</div>
						{submitTime && (
							<ElTag type="info" round effect="light" size="small">
								{dateUtil.dateTimeFix(String(submitTime))}
							</ElTag>
						)}
					</Fragment>
				);
			} else if (props.tag) {
				const renderValue = formatterRender(row, column, renderCellData({ row }), $index);
				return (
					<Fragment>
						{copyRender(renderValue)}
						{renderValue ? <ElTag type={getTagType({ row })}>{renderValue}</ElTag> : null}
					</Fragment>
				);
			} else if (props.type === "date" || props.type === "time" || props.type === "dateTime") {
				let dateFormat;
				switch (props.type) {
					case "date":
						dateFormat = "YYYY-MM-DD";
						break;
					case "time":
						dateFormat = "HH:mm:ss";
						break;
					case "dateTime":
						dateFormat = "YYYY-MM-DD HH:mm:ss";
						break;
				}
				const renderValue = row[props.prop]
					? formatterRender(row, column, dayjs(row[props.prop]).format(props.dateFormat ?? dateFormat), $index)
					: null;
				return (
					<Fragment>
						{copyRender(renderValue)}
						{renderValue}
						{props.dateFix && renderValue && (
							<Fragment>
								<br />
								<ElTag type="info" round effect="light" size="small">
									{dateUtil.dateTimeFix(String(renderValue))}
								</ElTag>
							</Fragment>
						)}
					</Fragment>
				);
			} else if (
				props.type === "d2" ||
				props.type === "d4" ||
				props.type === "d6" ||
				props.type === "gd2" ||
				props.type === "gd4" ||
				props.type === "gd6"
			) {
				const renderValue = row[props.prop];
				if (renderValue) {
					if (isNumber(renderValue)) {
						let useGrouping = false;
						let maximumFractionDigits: number;
						switch (props.type) {
							case "d2":
								maximumFractionDigits = 2;
								break;
							case "d4":
								maximumFractionDigits = 4;
								break;
							case "d6":
								maximumFractionDigits = 6;
								break;
							case "gd2":
								maximumFractionDigits = 2;
								useGrouping = true;
								break;
							case "gd4":
								maximumFractionDigits = 4;
								useGrouping = true;
								break;
							case "gd6":
								maximumFractionDigits = 6;
								useGrouping = true;
								break;
						}
						return renderValue.toLocaleString("zh-CN", {
							minimumFractionDigits: 2,
							maximumFractionDigits,
							useGrouping,
						}) as any;
					}
				}
				return renderValue;
			} else if (props.link) {
				const renderValue = formatterRender(row, column, row[props.prop], $index);
				return autoWidthRender(
					<Fragment>
						{copyRender(renderValue)}
						{renderValue && (
							<ElText
								class={"el-link is-hover-underline fa-table__link-column__text"}
								onClick={() => {
									// 数据删除拦截点击
									if (props.dataDeleteField && row[props.dataDeleteField] === true) return;
									if (props.click) {
										props.click({ row, $index });
									} else {
										emit("customCellClick", props.clickEmit, {
											row,
											column: columnCtx.value,
											$index,
										});
									}
								}}
							>
								{renderValue}
							</ElText>
						)}
					</Fragment>
				);
			} else if (props.render) {
				return autoWidthRender(props.render({ row, column: columnCtx.value, $index, ...getTableDefaultSlots(tableState) }));
			} else if (props.slot) {
				return autoWidthRender(
					slots[props.slot] && slots[props.slot]({ row, column: columnCtx.value, $index, ...getTableDefaultSlots(tableState) })
				);
			} else {
				const renderValue = formatterRender(row, column, row[props.prop], $index);
				return autoWidthRender(
					<Fragment>
						{copyRender(renderValue)}
						{renderValue}
					</Fragment>
				);
			}
		};

		let elTableColumnProps: ComputedRef<TableColumnCtx<any>> = useProps(props, tableColumnProps, [
			"type",
			"width",
			"minWidth",
			"sortable",
			"sortOrders",
			"resizable",
			"showOverflowTooltip",
		]) as unknown as ComputedRef<TableColumnCtx<any>>;

		watch(
			() => props,
			() => {
				elTableColumnProps = useProps(props, tableColumnProps, [
					"type",
					"minWidth",
					"sortable",
					"sortOrders",
					"resizable",
					"showOverflowTooltip",
				]) as unknown as ComputedRef<TableColumnCtx<any>>;
			}
		);

		useRender(() => (
			<Fragment>
				{
					// 如果有配置多级表头的数据，则递归该组件
					props._children?.length ? (
						<ElTableColumn
							{...elTableColumnProps.value}
							minWidth={getWidth("auto")}
							sortable={props.sortable ? "custom" : false}
							sortOrders={props.sortOrders ?? ["descending", "ascending", null]}
							resizable={props.resizable && !props.autoWidth}
							showOverflowTooltip={(props.showOverflowTooltip ?? true) && !props.autoWidth && !props.type}
						>
							{{
								header: ({ column, $index }: { column: TableColumnCtx<any>; $index: number }) => headerRender({ column, $index }),
								default: () =>
									props._children.map((col: FaTableColumnCtx) =>
										h(
											resolveComponent("FaTableColumn"),
											{
												...col,
											},
											slots
										)
									),
							}}
						</ElTableColumn>
					) : props.type === "image" ? (
						<ElTableColumn
							{...elTableColumnProps.value}
							align="center"
							className="fa-table__image-column"
							minWidth="50px"
							sortable={false}
							resizable={false}
							showOverflowTooltip={false}
						>
							{{
								header: ({ column, $index }: { column: TableColumnCtx<any>; $index: number }) => headerRender({ column, $index }),
								default: ({ row }: { row: any; column: TableColumnCtx<any>; $index: number }) =>
									row[props.prop] ? (
										tableState.hideImage ? (
											<ElImage
												class="fa-image"
												lazy
												src={artwork}
												fit="cover"
												previewSrcList={[row[props.prop]]}
												closeOnPressEscape
												hideOnClickModal
												previewTeleported
											/>
										) : (
											<FaImage lazy src={row[props.prop]} fit="cover" original />
										)
									) : (
										<ElImage class="fa-image" lazy src={notImage} fit="cover" />
									),
							}}
						</ElTableColumn>
					) : (
						// 其他正常的列
						<ElTableColumn
							{...elTableColumnProps.value}
							minWidth={getWidth("auto")}
							sortable={props.sortable ? "custom" : false}
							sortOrders={props.sortOrders ?? ["descending", "ascending", null]}
							resizable={props.resizable && !props.autoWidth}
							showOverflowTooltip={(props.showOverflowTooltip ?? true) && !props.autoWidth && !props.type}
						>
							{{
								header: ({ column, $index }: { column: TableColumnCtx<any>; $index: number }) => headerRender({ column, $index }),
								default: ({ row, column, $index }: { row: any; column: TableColumnCtx<any>; $index: number }) =>
									defaultRender({ row, column, $index }),
							}}
						</ElTableColumn>
					)
				}
			</Fragment>
		));
	},
});
