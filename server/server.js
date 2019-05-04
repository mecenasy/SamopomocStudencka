const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const fileUpload = require('express-fileupload');

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

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: 'http://localhost:3001',
});

app.get('/menu', async (req, res) => {
   const data = await axiosInstance.get('/menu');
   res.status(200).json(data.data);
});

app.get('/supportData/:id', async (req, res) => {
   const data = await axiosInstance.get('/supportData/' + req.params.id);
   res.status(200).json(data.data);
});

app.get('/supportData', async (req, res) => {
   const data = await axiosInstance.get('/supportData');
   res.status(200).json(data.data);
});

app.get('/search/:searchText', async (req, res) => {
   const data = await axiosInstance.get('/search/' + req.params.searchText);
   res.status(200).json(data.data);
});

app.post('/files', async (req, res, next) => {
   const file = req.files.file;
   const pathFile = path.join(__dirname, '/Files/', file.name);

   fs.writeFile(pathFile, file.data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
   });

   const body = req.body;
   const data = await axiosInstance.post('/supportData', { ...body, link: file.name });
   res.status(200);
});

app.get('/files/:fileName', (req, res, next) => {
   const pathFile = path.join(__dirname, '/Files/', req.params.fileName);

   return new Promise((resolve, reject) => {
      if (fs.existsSync(pathFile)) {
         return resolve(pathFile);
      }
      return reject('File was not found.');
   })
      .then((p) => {
         res.download(p);
      })
      .catch((e) => {
         res.status(400).send({
            message: e,
         });
      });
});


app.listen(4001, () => {
   console.log('Server express is running port 4001');
});
