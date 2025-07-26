import { FaTableChangeColumnsCtx } from './table.type';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 改变 */
    change: {
        type: import('vue').PropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>;
    };
}>, {
    /** @description 打开 */
    open: () => void;
    /** @description 列改变 */
    change: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 改变 */
    change: {
        type: import('vue').PropType<(columns: FaTableChangeColumnsCtx[]) => Promise<void>>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
