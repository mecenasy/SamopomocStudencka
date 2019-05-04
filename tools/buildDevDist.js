const fs = require('fs');
const path = require('path');


const distPath = './build/dev-dist/';
const cb = (err) => {
   if (err) throw err;
};

fs.createReadStream('./tools/api/apiServer.js').pipe(fs.createWriteStream(path.join(distPath, 'apiServer.js')));
fs.createReadStream('./tools/api/db.js').pipe(fs.createWriteStream(path.join(distPath, 'db.js')));

fs.createReadStream('./tools/build-templates/dev-dist/package.json').pipe(fs.createWriteStream(path.join(distPath, 'package.json')));
fs.createReadStream('./tools/build-templates/dev-dist/.deployment').pipe(fs.createWriteStream(path.join(distPath, '.deployment')));
fs.createReadStream('./tools/build-templates/dev-dist/deploy.cmd').pipe(fs.createWriteStream(path.join(distPath, 'deploy.cmd')));
