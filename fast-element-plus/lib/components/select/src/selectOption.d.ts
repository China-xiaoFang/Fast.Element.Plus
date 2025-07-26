import { ElSelectorOutput } from './select.type';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /** @description 绑定值，优先级比 data 高 */
    value: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description 显示值，优先级比 data 高 */
    label: StringConstructor;
    /** @description 禁用值，优先级比 data 高 */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    /** @description 子节点，优先级比 data 高 */
    children: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
    };
    /** @description 下拉框数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }>;
        default: () => ElSelectorOutput;
    };
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: BooleanConstructor;
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /** @description 绑定值，优先级比 data 高 */
    value: {
        type: import('vue').PropType<string | number | boolean | object>;
        default: any;
    };
    /** @description 显示值，优先级比 data 高 */
    label: StringConstructor;
    /** @description 禁用值，优先级比 data 高 */
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    /** @description 子节点，优先级比 data 高 */
    children: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }[]>;
    };
    /** @description 下拉框数据 */
    data: {
        type: import('vue').PropType<{
            [key: string]: any;
            label?: string;
            value?: any;
            data?: any;
            hide?: boolean;
            disabled?: boolean;
            children?: /*elided*/ any[];
        }>;
        default: () => ElSelectorOutput;
    };
    /** @description 更多细节，只有使用slot的时候有用 */
    moreDetail: BooleanConstructor;
}>> & Readonly<{}>, {
    data: {
        [key: string]: any;
        label?: string;
        value?: any;
        data?: any;
        hide?: boolean;
        disabled?: boolean;
        children?: /*elided*/ any[];
    };
    disabled: boolean;
    value: string | number | boolean | object;
    moreDetail: boolean;
}, import('vue').SlotsType<Partial<import('@fast-china/utils').MakeSlots<{
    /** @description 默认内容插槽 */
    default: ElSelectorOutput | any;
}>>>, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
