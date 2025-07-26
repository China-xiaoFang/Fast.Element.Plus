export { INSTALLED_KEY } from './make-installer';
export * as FastElementPlus from './components';
export * from './components';
export * from './constants';
export * from './directives';
export * from './hooks';
export { Decimal } from 'decimal.js';
declare const installer: {
    version: string;
    install: (app: import('vue').App) => void;
};
export declare const install: (app: import('vue').App) => void;
export declare const version: string;
export default installer;
