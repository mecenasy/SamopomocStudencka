import React, { ComponentType } from 'react';

const withoutProps = <BP extends string>(blacklist: BP[] = []) => {
   const clean = cleanProps<BP>(blacklist);

   return <P extends {}>(WrappedComponent: ComponentType<P>) => {
      // tslint:disable-next-line:no-unnecessary-local-variable
      const ComponentWithStrippedProps = (props: P) => {
         const next = clean<P>(props);

         return <WrappedComponent {...next} />;
      };

      return ComponentWithStrippedProps;
   };
};

export const cleanProps = <BP extends string>(blacklist: BP[]) => <P extends {}>(props: P): LooseOmit<P, BP> => {
   const newProps: any = { ...(props as any) }; // FIXME: remove cast to any when this gets fixed: https://github.com/Microsoft/TypeScript/issues/14409 (see also PR: https://github.com/Microsoft/TypeScript/pull/13288)
   for (const key of blacklist) {
      delete newProps[key];
   }
   return newProps as LooseOmit<P, BP>;
};

export default withoutProps;
