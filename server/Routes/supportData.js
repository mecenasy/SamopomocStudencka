const express = require('express');
const axios = require('axios');

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: 'http://localhost:3001',
});

const router = express.Router();


router.get('/supportData/:id', async (req, res) => {
   const data = await axiosInstance.get('/supportData/' + req.params.id);
   res.status(200).json(data.data);
});

router.get('/supportData', async (req, res) => {
   const data = await axiosInstance.get('/supportData');
   res.status(200).json(data.data);
});

module.exports = router;
