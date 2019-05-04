declare module 'styled-theming' {

   import { ThemeProps } from 'styled-components';

   // export type Themed<T, V, P = T> = (props: Partial<ThemeProps<T>> & P) => V;
   export type Themed<T, V, P = T> = any;
   // export type Theme = { [key: string]: string; };
   export type ThemeValues<T extends {[index: string]: string}, K extends keyof T, V = string> = Partial<Record<T[K], V | Themed<T, V>>>;

   export type ThemeFunction<T extends {}, K extends keyof T, V = string, P = T> =
      (
         name: K,
         values: ThemeValues<T, K>,
      ) => Themed<T, V>;

   // export interface ThemeFunction2<T extends Theme, V = string, U = ObjectToDiscUnion<T>, K = U[keyof U]>{
   //    (
   //       name: K,
   //       values: ThemeValues<T, K>
   //    ): Partial<values & { type: name }> | Themed<T, V>
   // };

   function theme<T extends {}, K extends keyof T, V = string, P = T>(
      name: K,
      values: ThemeValues<T, K>
   ): Themed<T, V, P>;

   export default theme;

}
