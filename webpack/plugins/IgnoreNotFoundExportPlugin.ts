// stolen from https://github.com/TypeStrong/ts-loader/issues/653#issuecomment-390889335

import ModuleDependencyWarning from 'webpack/lib/ModuleDependencyWarning';

export default class IgnoreNotFoundExportPlugin {
   // eslint-disable-next-line class-methods-use-this
   apply(compiler: any) {
      const messageRegExp = /export '.*'( \(reexported as '.*'\))? was not found in/;
      const doneHook = (stats: any) => {
         stats.compilation.warnings = stats.compilation.warnings.filter((warn: any) => {
            if (warn instanceof ModuleDependencyWarning && messageRegExp.test(warn.message)) {
               return false;
            }
            return true;
         });
      };
      if (compiler.hooks) {
         compiler.hooks.done.tap('IgnoreNotFoundExportPlugin', doneHook);
      } else {
         compiler.plugin('done', doneHook);
      }
   }
};
