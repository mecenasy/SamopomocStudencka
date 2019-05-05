const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: 'http://localhost:3001',
});

const router = express.Router();

router.post('/files', async (req, res) => {
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

router.get('/files/:fileName', async (req, res) => {
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

module.exports = router;
