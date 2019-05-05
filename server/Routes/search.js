const express = require('express');
const axios = require('axios');

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: 'http://localhost:3001',
});

const router = express.Router();

router.get('/search/:searchText', async (req, res) => {
   const data = await axiosInstance.get('/search/' + req.params.searchText);
   res.status(200).json(data.data);
});

module.exports = router;
