import { setConfig, cold } from 'react-hot-loader';

setConfig({
   logLevel: 'debug',
   onComponentRegister: (type, name, file) => file.indexOf('node_modules') > 0 && cold(type), // excludes hot reloading on all things in node_modules
});
