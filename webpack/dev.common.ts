import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import StatsPlugin from 'stats-webpack-plugin';
import IgnoreNotFoundExportPlugin from './plugins/IgnoreNotFoundExportPlugin';

import commonLoadersFactory from './commonLoaders';

const ES5 = process.env.ES5 === 'true';

console.log('ES5 =', ES5);

const commonLoaders = commonLoadersFactory({ isServer: false, dev: true, es5: ES5 });

const config = {
   mode: 'development',

   entry: [
      ...(ES5 ? ['@babel/polyfill'] : []),
      path.resolve(__dirname, '../src/setupHotLoader'),
      path.resolve(__dirname, '../src/index'),
   ],

   output: {
      filename: 'app.js',
      chunkFilename: '[name]-[chunkhash:8].js',
      path: path.resolve(__dirname, '../FILL_LATER'),
      publicPath: '/',
   },

   target: 'web',

   resolve: {
      // Which files axtensions are automatically checked when using "import" statement
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
         '~': path.resolve(__dirname, '../src'),
      },
   },

   resolveLoader: {
      modules: [path.resolve(__dirname, '../node_modules')],
   },

   module: {
      rules: [
         commonLoaders.tsx,
         commonLoaders.tsxHot,
         { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader', exclude: [/node_modules/] },
         commonLoaders.scss,
         commonLoaders.pngEtc,
         commonLoaders.svg,
      ],
   },

   optimization: {
      noEmitOnErrors: true, // NoEmitOnErrorsPlugin
      concatenateModules: true, // ModuleConcatenationPlugin,
      splitChunks: {
         chunks: 'all',
         name: 'vendors',
      },
   },

   plugins: [
      ...(process.env.ANALYZE_BUNDLE === 'true' ? [new BundleAnalyzerPlugin(), new StatsPlugin('../webpack-stats.json')] : []),
      new ForkTsCheckerWebpackPlugin({
         tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, '../src/index.html'),
         inject: true,
      }),
      new webpack.DefinePlugin({
         HYBRID_RELEASE: JSON.stringify(process.env.HYBRID_RELEASE ? JSON.parse(process.env.HYBRID_RELEASE) : false),
         SERVER_BUILD: JSON.stringify(false),
         SHOP_ID: JSON.stringify(process.env.SHOP_ID || 'xkom'),
         DEV: JSON.stringify(true),
      }),
      new Dotenv(),
      new IgnoreNotFoundExportPlugin(),
   ],

   devServer: {
      contentBase: path.resolve(__dirname, '../src'),
      // host: '0.0.0.0', // use if you want to access your playground from other device through network
      // disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      open: true,
      compress: true,
      watchOptions: {
         ignored: /node_modules/,
      },
   },
};

export default config;
