import path from 'path';

// IMPORTANT: do not use process.env here!

const svgoLoaderConfig = ({ removeDimensions }) => ({
   loader: 'svgo-loader',
   options: {
      plugins: [
         { removeViewBox: false }, { removeDimensions },
      ],
   },
});

export default ({ isServer = false, dev = true, es5 = false } = {}) => ({
   tsxHot: {
      test: !es5 ? /\.tsx?$/ : /\.[jt]sx?$/,
      exclude: /node_modules/,
      enforce: 'post',
      loaders: [
         {
            loader: 'babel-loader',
            options: {
               babelrc: false,
               plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  ...(!isServer && dev ? [
                     'react-hot-loader/babel',
                  ] : []),
               ],
            },
         },
      ],
   },
   tsx: {
      test: !es5 ? /\.tsx?$/ : /\.[jt]sx?$/,
      // exclude: !es5 ? /node_modules/ : /node_modules(\/|\\)(?!(camelcase-keys|camelcase|map-obj|quick-lru))/,
      exclude: !es5 ? /node_modules/ : undefined,
      loaders: [
         {
            loader: 'babel-loader',
            options: {
               babelrc: false,
               presets: [
                  [
                     '@babel/env',
                     !isServer
                     ? {
                        targets: es5
                           ? {
                              safari: 10,
                              edge: 16,
                              ie: 11,
                              browsers: ['last 2 versions'],
                           }
                           : {
                              esmodules: true,
                           },
                     }
                     : {
                        targets: {
                           node: 'current',
                        },
                        modules: 'cjs',
                     },
                  ],
               ],
               // sourceType: 'unambiguous',
               plugins: [
                  // ...(!isServer && es5 ? [
                     // ['@babel/plugin-transform-runtime', {
                     //    corejs: false,
                     //    helpers: true,
                     //    regenerator: true,
                     //    useESModules: true,
                     // }],
                  // ] : []),
                  '@babel/plugin-syntax-dynamic-import',
                  '@babel/plugin-proposal-object-rest-spread',
                  'react-loadable/babel',
                  ['babel-plugin-styled-components', {
                     ssr: true,
                     displayName: dev,
                     fileName: dev,
                  }],
               ],
            },
         },
         {
            loader: 'ts-loader',
            options: {
               configFile: path.resolve(__dirname, '../tsconfig.json'),
               // disable type checker - we will use it in fork plugin
               transpileOnly: true,
            },
         },
      ],
   },
   scss: {
      test: /\.scss$/,
      loaders: [
         'style-loader?sourceMap',
         'css-loader',
         'resolve-url-loader',
         { loader: 'sass-loader', options: { sourceMap: true, includePaths: [path.resolve(__dirname, '../src')] } },
      ],
   },
   pngEtc: {
      test: /\.(jpe?g|png|woff|woff2|eot|ttf)$/,
      loader: 'url-loader',
      options: {
         limit: 1000,
         name: '[hash:16].[ext]',
         fallback: 'file-loader',
         emitFile: !isServer, // config for fallback loader
      },
   },
   svg: {
      test: /\.svg$/,
      oneOf: [
         {
            resourceQuery: /inline/, // foo.svg?inline
            loaders: [
               'svg-inline-loader?classPrefix=__prefix-[sha512:hash:hex:5]&removeSVGTagAttrs=false',
               svgoLoaderConfig({ removeDimensions: true }),
            ],
         },
         {
            resourceQuery: /external/, // foo.svg?external
            loaders: [
               {
                  loader: 'file-loader',
                  options: {
                     emitFile: !isServer,
                     name: '[hash:16].[ext]',
                  },
               },
               svgoLoaderConfig({ removeDimensions: false }),
            ],
         },
         {
            loaders: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 1000,
                     name: '[hash:16].[ext]',
                     fallback: 'file-loader',
                     emitFile: !isServer, // config for fallback loader
                  },
               },
               svgoLoaderConfig({ removeDimensions: false }),
            ],
         },
      ],
   },
});
