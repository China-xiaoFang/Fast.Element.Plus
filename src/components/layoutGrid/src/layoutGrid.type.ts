/** 响应式布局断点；从 xs 到 xl 依次表示最小、小、中、大和最大容器。 */
export type FaLayoutGridBreakPoint = "xs" | "sm" | "md" | "lg" | "xl";

/** 布局项在不同断点下的栅格跨度。 */
export interface FaLayoutGridItemResponsive {
	span?: number;
	offset?: number;
}
