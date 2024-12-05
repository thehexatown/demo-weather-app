import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

export const getPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This app needs access to your location to provide weather services.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    Geolocation.requestAuthorization();
  } else {
    Geolocation.requestAuthorization();
  }
};
export const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      return {position};
    },
    error => {
      console.error('Error getting location:', error);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
