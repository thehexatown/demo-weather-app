import React, { useState } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { useAppSelector } from '../../redux/store';
import { getWeatherByCity } from '../../service/weather/weather';
import { styles } from './styles';
import { WeatherResponse, WeatherScreenRouteProp } from '../../utils/types';
import { useRoute } from '@react-navigation/native';
import { convertToCelsius, formatUnixTimestamp } from '../../utils/functions';

const DetailScreen: React.FC = () => {
  const route = useRoute<WeatherScreenRouteProp>();
  const { city, weatherData } = route.params;
  const [weather, setWeather] = useState<WeatherResponse | null>(weatherData || null);
  const unit = useAppSelector((state) => state.weather.unit);
  React.useEffect(() => {
    if (!weather && city) {
      getWeatherByCity(city).then((data) => setWeather(data));
    }
  }, [city, weather]);

  if (!weather) return <View style={styles.loadingView}><ActivityIndicator /></View>;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.cityName}>{weather?.name || city}</Text>
        </View>

        {/* Date and Weather Section */}
        <View style={styles.weatherSection}>
          <Text style={styles.date}>{formatUnixTimestamp(weather?.dt)}</Text>
          <Text style={styles.weatherDescription}>{weather?.weather[0]?.description}</Text>
          <Text style={styles.temperature}>{unit === 'celsius' ? convertToCelsius(weather?.main?.temp) : weather?.main?.temp}°</Text>
        </View>

        {/* Daily Summary Section */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>Daily Summary</Text>
          <Text style={styles.summaryText}>
            Now it seems that {unit === 'celsius' ? convertToCelsius(weather?.main?.temp_min) : Math.round(weather?.main?.temp_min)}°, in fact {unit === 'celsius' ? convertToCelsius(weather?.main?.temp_max) : weather?.main?.temp_max}°.
            It's humid now because of the heavy rain. Today, the temperature is felt in the range
            from {unit === 'celsius' ? convertToCelsius(weather?.main.feels_like) : weather?.main.feels_like}° to {unit === 'celsius' ? convertToCelsius(weather?.main.temp_max) : weather?.main.temp_max}°.
          </Text>
        </View>

        {/* Footer Info Section */}
        <View style={styles.footerSection}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{Math.round(weather?.wind?.speed)} km/h</Text>
            <Text style={styles.infoLabel}>Wind</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{weather?.main?.humidity}%</Text>
            <Text style={styles.infoLabel}>Humidity</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>{Math.round(weather?.visibility / 1000)} km</Text>
            <Text style={styles.infoLabel}>Visibility</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;
