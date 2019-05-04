import axios from 'axios';
import * as apiConfig from './apiConfig';
import { enhanceAxiosInstance } from './apiTools';

const axiosInstance = enhanceAxiosInstance(axios.create({
   responseType: 'json',
   baseURL: apiConfig.basePath,
}));

export default axiosInstance;
