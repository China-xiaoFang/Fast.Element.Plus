import { App } from 'vue';
import { FastAppOptions } from './settings';
export declare const INSTALLED_KEY: unique symbol;
export declare const makeInstaller: () => {
    version: string;
    install: (app: App, options?: FastAppOptions) => void;
};
