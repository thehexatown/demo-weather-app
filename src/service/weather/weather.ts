import {kelvinToFahrenheit} from '../../utils/functions';
import axiosInstance from '../axiosInstance';

export const getWeatherByCity = async (cityName: string) => {
  try {
    const response = await axiosInstance.get(`/${cityName}/EN`);

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data by city:', error);
    throw error;
  }
};

export const getWeatherByCoordinates = async (lat: number, lon: number) => {
  try {
    const response = await axiosInstance.get(`/latlon/${lat}/${lon}`);
    console.log('response', response?.data);
    const weatherData = response.data;
    if (weatherData?.main?.temp) {
      weatherData.main.temp = kelvinToFahrenheit(weatherData.main.temp);
    }
    if (weatherData?.main?.feels_like) {
      weatherData.main.feels_like = kelvinToFahrenheit(
        weatherData.main.feels_like,
      );
    }
    if (weatherData?.main?.temp_min) {
      weatherData.main.temp_min = kelvinToFahrenheit(weatherData.main.temp_min);
    }
    if (weatherData?.main?.temp_max) {
      weatherData.main.temp_max = kelvinToFahrenheit(weatherData.main.temp_max);
    }

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
