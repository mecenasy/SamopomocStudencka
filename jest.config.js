module.exports = {
   transform: {
      // '^.+\\es.js': 'babel-jest',
      /* needs following packages in package.json devDependencies
         "babel-cli"
         "babel-jest"
         "babel-preset-es2015"
       */
      '^.+\\.tsx?$': 'ts-jest',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/filePathMock.js',
   },
   testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
   moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'json',
   ],
   moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.svg\\?inline$': '<rootDir>/__mocks__/svgMockModule.js',
      '(.*)\\.svg\\?external$': '$1.svg',
      '^~(\\\\|/)(.*)$': '<rootDir>/src/$2',
      // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
   },
   setupTestFrameworkScriptFile: '<rootDir>/jest.enzyme.config.ts',
   setupFiles: [
      '<rootDir>/__mocks__/shims.js',
      '<rootDir>/jest.enzyme.config.ts',
      '<rootDir>/__mocks__/webpackDefines.js',
      '<rootDir>/__mocks__/localstorage.js',
   ],
   cacheDirectory: '<rootDir>/.jest-cache',
   coveragePathIgnorePatterns: [
      '/*.svg',
      '/node_modules/',
   ],
   "snapshotSerializers": [
      "enzyme-to-json/serializer"
   ],
   watchPathIgnorePatterns: ['backstop_data'],
   reporters: ['default', 'jest-html-reporter', 'jest-junit'],
};
