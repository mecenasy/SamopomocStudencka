declare module 'styled-theming' {

   import { ThemeProps } from 'styled-components';

   export type Themed<T, V, P = T> = any;
   export type ThemeValues<T extends { [index: string]: string }, K extends keyof T, V = string> = Partial<Record<T[K], V | Themed<T, V>>>;

   export type ThemeFunction<T extends {}, K extends keyof T, V = string, P = T> =
      (
         name: K,
         values: ThemeValues<T, K>,
      ) => Themed<T, V>;

   function theme<T extends {}, K extends keyof T, V = string, P = T>(
      name: K,
      values: ThemeValues<T, K>
   ): Themed<T, V, P>;

   export default theme;

}
