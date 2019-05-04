import serve from 'webpack-serve';
import parseArgv from 'minimist';

import config from './dev';

export const runDevServer = async () => {
   const argv = parseArgv(process.argv.slice(2));
   delete argv._;

   const result = await serve(argv, { config, hotClient: false, port: 8080 });
   return new Promise<typeof result>((resolve, reject) => {
      result.on('build-finished', () => { resolve(result); });
   });
};
