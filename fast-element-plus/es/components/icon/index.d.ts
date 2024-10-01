import { ExtractPropTypes } from 'vue';
import { faIconProps, default as Icon } from './src/icon';
export declare const FaIcon: import('../../utils').TSXWithInstall<import('vue').DefineComponent<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: boolean;
    };
    size: import('vue').PropType<number | string>;
    color: StringConstructor;
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: boolean;
    };
    size: import('vue').PropType<number | string>;
    color: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default FaIcon;
export type GIconInstance = InstanceType<typeof Icon>;
export type GIconProps = ExtractPropTypes<typeof faIconProps>;
