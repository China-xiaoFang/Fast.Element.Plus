export { INSTALLED_KEY } from './make-installer';
export * as FastElementPlus from './components';
export * from './components';
export * from './constants';
export * from './directives';
export * from './hooks';
export * from './settings';
export * from './stores';
export * from './utils';
declare const installer: {
    version: string;
    install: (app: import('vue').App, options?: import('./settings').FastOptions) => void;
};
export declare const install: (app: import('vue').App, options?: import('./settings').FastOptions) => void;
export declare const version: string;
export default installer;
