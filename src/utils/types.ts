import {RouteProp} from '@react-navigation/native';

export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Unit = 'celsius' | 'fahrenheit';

export interface WeatherState {
  unit: Unit;
}

export type RootStackParamList = {
  DetailScreen: {
    city: string;
    weatherData: WeatherResponse;
  };
};

export type WeatherScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailScreen'
>;

export interface SuggestionItemProps {
  item: string;
  onSelect: (city: string) => void;
}
