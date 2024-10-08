declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;

declare type Recordable<T = any> = Record<string, T>;

declare module 'element-plus/dist/locale/zh-cn.mjs';

interface Window {}
