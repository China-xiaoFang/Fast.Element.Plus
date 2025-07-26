import { FaContextMenuData } from './contextMenu.type';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 数据 */
    data: {
        type: import('vue').PropType<FaContextMenuData[]>;
        default: () => any[];
    };
}>, {
    /** @description 是否显示 */
    visible: import('vue').ComputedRef<boolean>;
    /** @description 打开菜单 */
    open: (axis?: {
        x: number;
        y: number;
    }) => void;
    /** @description 关闭菜单 */
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    /** @description 点击事件 */
    click: (event: MouseEvent, data: FaContextMenuData) => boolean;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 数据 */
    data: {
        type: import('vue').PropType<FaContextMenuData[]>;
        default: () => any[];
    };
}>> & Readonly<{
    onClick?: (event: MouseEvent, data: FaContextMenuData) => any;
}>, {
    data: FaContextMenuData[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
