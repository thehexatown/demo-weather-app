import axios from 'axios';
import {
  RAPIDAPI_HOST,
  RAPIDAPI_KEY,
  WEATHER_API_URL,
} from '../constants/constants';

const BASE_URL = WEATHER_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': RAPIDAPI_KEY,
    'x-rapidapi-host': RAPIDAPI_HOST,
  },
});

export default axiosInstance;
