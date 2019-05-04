const jsonServer = require('json-server');
const data = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(data());

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);


server.use((req, res, next) => {
   const path = req.url.split('/');
   if (path[1] === 'supportData' && path[2]) {
      const supportData = router.db.get('supportData');

      const filteredData = supportData.filter((item) => (
         item.type === path[2]));
      res.status(200).jsonp(filteredData);
   } else {
      next();
   }
});

server.use((req, res, next) => {
   const path = req.url.split('/');
   if (path[1] === 'search' && path[2]) {
      const supportData = router.db.get('supportData');
      const filteredData = supportData.filter((item) => (
         item.title.toLowerCase().includes(path[2].toLowerCase())),
      );
      res.status(200).jsonp(filteredData);
   } else {
      next();
   }
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
   console.log('JSON Server is running port 3001');
});
