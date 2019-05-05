const axios = require('axios');

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: 'http://localhost:3001',
});

module.export = axiosInstance;
