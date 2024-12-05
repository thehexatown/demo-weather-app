import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { getWeatherByCoordinates } from '../../service/weather/weather';
import { navigate } from '../../navigation/MainNavigator';
import routes from '../../constants/routes';
import Geolocation from '@react-native-community/geolocation';
import cities from '../../assets/cities/cities.json'
import { styles } from './styles';
import { SuggestionItemProps } from '../../utils/types';
import { SvgSettings } from '../../assets/svg';

const HomeScreen: React.FC = () => {
  const allCities = cities?.cities;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearchChange = async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const filteredCities = allCities.filter((city) =>
      city.toLowerCase().startsWith(query.toLowerCase())
    );
    setSuggestions(filteredCities);
  };

  const handleCitySelect = (city: string) => {
    navigate(routes.DETAIL_SCREEN, { city });
  };

  const handleCurrentLocation = async () => {
    Geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log("cordinates", latitude, longitude)
      const data = await getWeatherByCoordinates(latitude, longitude);
      navigate(routes.DETAIL_SCREEN, { weatherData: data });
    });
  };

  const navigateSettings = () => {
    navigate(routes.SETTINGS_SCREEN)
  }

  const SuggestionItem: React.FC<SuggestionItemProps> = ({ item, onSelect }) => {
    return (
      <TouchableOpacity
        style={styles.suggestionButtonStyle}
        onPress={() => onSelect(item)}
      >
        <Text style={styles.suggestion}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity onPress={navigateSettings} style={styles.settingButtonStyle}>
          <SvgSettings />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search for a city"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
        <FlatList
          data={suggestions}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <SuggestionItem item={item} onSelect={handleCitySelect} />
          )}
        />
        <TouchableOpacity style={styles.locationButton} onPress={handleCurrentLocation}>
          <Text style={styles.locationButtonText}>Use Current Location</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
