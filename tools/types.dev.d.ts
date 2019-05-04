// import { Action } from "redux";

/**
 * Type declerations for global development variables
 */

interface Window {
   // A hack for the Redux DevTools Chrome extension.
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
   __INITIAL_STATE__?: any;
   __NEWWEB_FRONTEND_VERSION?: string;
   __NEWWEB_SSR_VERSION?: string;
}

interface ObjectConstructor {
   assign(target: any, ...sources: any[]): any;
}

declare module '*.json' {
   const value: any;
   export default value;
}

declare type HybridPageId = 'ProductPage' | 'HotShotPage' | 'ListingPage';

declare const HYBRID_RELEASE: boolean;
declare const SERVER_BUILD: boolean;
declare const RESOURCES_PUBLIC_PATH: boolean;
declare const DEV: boolean;
declare const SHOP_ID: 'xkom' | 'alto';
declare const HYBRID_PAGES: HybridPageId[];

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.svg?inline';
declare module '*.svg?external';

// generic type manipulation helpers
type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type LooseOmit<T, K extends string> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type Overwrite<T, U> = Omit<T, Extract<keyof T, keyof U>> & U;
// found on GitHub but previously contained also "Class" which couldn't be referenced, not sure if it's any good
type DeepRequired<T, U extends object | undefined = undefined> =
  T extends object
    ? { [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function> ? NonNullable<T[P]> : DeepRequired<NonNullable<T[P]>, U>; }
    : T;

// application helpers
type StyledInnerRef<T> = (instance: T) => void;
type PropsOfComponent<C extends React.ComponentType> = C extends React.ComponentType<infer P> ? P : never;

type GenericId = string;

type GetAction<A extends { type: any }, T extends A['type']> = Extract<A, { type: T }>;

type PromiseReturnType<P extends Promise<any>> = P extends Promise<infer T> ? T : never;
type AsyncFnReturnType<F extends (...args: any[]) => Promise<any>> = PromiseReturnType<ReturnType<F>>;
