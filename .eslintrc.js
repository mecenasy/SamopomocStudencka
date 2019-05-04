module.exports = {
   parser: 'typescript-eslint-parser',
   parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
         modules: true,
         experimentalObjectRestSpread: true,
         binaryLiterals: true,
         objectLiteralShorthandProperties: true,
         generators: true,
      },
   },
   plugins: [
      'react',
      'jsx-a11y',
      'import',
      'only-warn',
   ],
   extends: [
      'eslint:recommended',
      'eslint-config-airbnb',
      'plugin:react/all',
      'plugin:jsx-a11y/strict',
      'plugin:import/errors',
      'plugin:import/warnings',
   ],
   settings: {
      react: {
         version: 'detect',
      },
   },
   rules: {
      'lines-between-class-members': [1, 'always', { exceptAfterSingleLine: true }],
      'no-extra-semi': 0,
      'space-infix-ops': 0,
      'consistent-return': 0,
      'newline-per-chained-call': 0,
      'no-bitwise': 0, // jest w tslint
      'no-param-reassign': 0, // jest w tslint
      'prefer-destructuring': 0, // pomyslec czy da sie to zrobic madrze
      'react/destructuring-assignment': 0, // again ... co zrobic
      'no-unused-vars': 0, // ehh problem z importami rzeczy pod typy tylko ....
      // jakas regula zabraniajaca spreadowania prevState
      'prefer-template': 0,
      // ############## import
      'react/jsx-handler-names': [
         1,
         {
            eventHandlerPrefix: 'on',
            eventHandlerPropPrefix: 'on',
         },
      ],
      'import/no-extraneous-dependencies': [
         1,
         {
            devDependencies: [
               '**/Playground.tsx',
               '**/eslint-config.js',
               '**/*.spec.ts',
               '**/*.spec.tsx',
            ],
         },
      ],
      'import/no-unresolved': 'off',
      'import/first': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 0, // hummmmm
      'import/named': 'off',
      // ####################
      'max-len': [
         1,
         249,
         {
            ignoreComments: true,
            ignoreStrings: true,
         },
      ],
      'no-use-before-define': 0,
      'function-paren-newline': 0,
      'object-curly-newline': 0,
      'arrow-parens': 0,
      'react/jsx-curly-brace-presence': 0, // [1, {"children": "never", "props": "always"}],
      'react/no-set-state': 0,
      'react/no-access-state-in-setstate': 1,
      'react/prop-types': 0,
      'react/sort-comp': [
         1,
         {
            order: [
               'lifecycle',
               'everything-else',
               'render',
            ],
         },
      ],
      'react/require-optimization': 0,
      indent: 0,
      // off for now because of `ESLint: Cannot read property 'loc' of undefined`
      // indent: [
      //    1,
      //    3,
      //    {
      //       SwitchCase: 1,
      //       VariableDeclarator: 1,
      //       outerIIFEBody: 1,
      //       // MemberExpression: null,
      //       FunctionDeclaration: {
      //          parameters: 1,
      //          body: 1,
      //       },
      //       FunctionExpression: {
      //          parameters: 1,
      //          body: 1,
      //       },
      //       CallExpression: {
      //          arguments: 1,
      //       },
      //       ArrayExpression: 1,
      //       ObjectExpression: 1,
      //       ImportDeclaration: 1,
      //       flatTernaryExpressions: false,
      //       ignoredNodes: [
      //          'JSXElement',
      //          'JSXElement *',
      //       ],
      //    },
      // ],
      'no-confusing-arrow': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-syntax': 'off',
      'no-restricted-imports': [
         1,
         {
            paths: ['lodash'],
         },
      ],
      'react/jsx-sort-props': [
         1,
         {
            noSortAlphabetically: true,
            callbacksLast: true,
            shorthandFirst: true,
            reservedFirst: true,
         },
      ],
      radix: 0,
      'no-plusplus': 0,
      'no-unused-expressions': 0,
      'no-console': 0, // zdecydowac czy es czy ts lint
      // sprawdzic ustawienia "padded-blocks"
      'no-prototype-builtins': 0,
      'react/button-has-type': 0, // arek?????
      'one-var': 0,
      'one-var-declaration-per-line': 0,
      'react/jsx-boolean-value': 0,
      'react/boolean-prop-naming': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/jsx-no-literals': 0,
      'react/no-array-index-key': 0,
      'jsx-a11y/anchor-is-valid': 0, // airbnb tyz ma
      'jsx-a11y/click-events-have-key-events': 0, // airbnb
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/alt-text': 0, // airbnb
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/accessible-emoji': 0,
      'react/jsx-filename-extension': [
         1,
         {
            extensions: [
               '.jsx',
               '.tsx',
            ],
         },
      ],
      'linebreak-style': 'off',
      'react/jsx-indent': [
         1,
         3,
      ],
      'react/jsx-max-depth': 0,
      'react/jsx-indent-props': [
         1,
         3,
      ],
      'react/jsx-sort-default-props': 0,
      'react/jsx-child-element-spacing': 1,
      'react/jsx-tag-spacing': [
         1,
         {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            beforeClosing: 'never',
            afterOpening: 'never',
         },
      ],
      'react/jsx-fragments': 1,
      'react/no-unescaped-entities': [1, { forbid: ['>', '}'] }],
      'react/no-danger': 0,
      'no-undef': 0,
   },
};
