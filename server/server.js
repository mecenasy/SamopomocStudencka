const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const menuRoute = require('./Routes/menu');
const searchRoute = require('./Routes/search');
const supportDataRoute = require('./Routes/supportData');
const filesRoute = require('./Routes/files');

const app = express();

app.use(fileUpload());

app.use(cors());

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   next();
});

app.use(menuRoute);
app.use(supportDataRoute);
app.use(searchRoute);
app.use(filesRoute);

app.listen(4001, () => {
   console.log('Server express is running port 4001');
});
