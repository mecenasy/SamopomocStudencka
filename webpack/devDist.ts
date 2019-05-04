import * as path from 'path';
import * as webpack from 'webpack';

import commonConfig from './dev.common';

const config = {
   mode: commonConfig.mode,

   entry: [
      ...commonConfig.entry,
   ],

   output: {
      ...commonConfig.output,
      path: path.resolve(__dirname, '../build/dev-dist/app'), // Note: Physical files are only output by the production build task `npm run build`.
   },

   target: commonConfig.target,

   devtool: 'source-map', // TODO: There are also "source-map" and "eval-source-map", check the differences

   resolve: commonConfig.resolve,
   resolveLoader: commonConfig.resolveLoader,

   module: {
      rules: [
         ...commonConfig.module.rules,
      ],
   },
   optimization: { ...commonConfig.optimization },

   plugins: [
      ...commonConfig.plugins,
      new webpack.NormalModuleReplacementPlugin(
         /apiConfig\.ts/,
         require.resolve('../src/api/apiConfig.dev-dist.ts'),
      ),
   ],
};

export default config;
