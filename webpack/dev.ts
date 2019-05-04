import path from 'path';
import webpack from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

import commonConfig from './dev.common';

const config = {
   mode: commonConfig.mode,

   entry: [
      ...commonConfig.entry,
   ],

   output: {
      ...commonConfig.output,
      path: path.resolve(__dirname, '../dist'), // Note: Physical files are only output by the production build task `npm run build`.
   },

   target: commonConfig.target,

   devtool: 'inline-source-map', // TODO: There are also "source-map" and "eval-source-map", check the differences

   resolve: commonConfig.resolve,
   resolveLoader: commonConfig.resolveLoader,

   module: {
      rules: [
         ...commonConfig.module.rules,
         { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }, // is this really being used?
         { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' }, // is this really being used?
         { test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }, // is this really being used?
      ],
   },
   optimization: {
      ...commonConfig.optimization,
      namedModules: true, // NamedModulesPlugin()
   },
   plugins: [
      ...commonConfig.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /pl/),
      new webpack.HotModuleReplacementPlugin(),
      new CircularDependencyPlugin({
         exclude: /a\.js|node_modules/,
      }),
   ],
   devServer: commonConfig.devServer,
};

if (process.env.BROWSER_SYNC) {
   config.plugins.push(
      new BrowserSyncPlugin({
         host: 'localhost',
         port: 9000,
         proxy: 'http://localhost:8080',
      }),
   );
}

export default config;
