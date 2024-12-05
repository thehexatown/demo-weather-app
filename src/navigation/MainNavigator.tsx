import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  ParamListBase,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import routes from '../constants/routes';
import SplashScreen from '../screen/SplashScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import SettingsScreen from '../screen/SettingsScreen';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef<ParamListBase>();
export function navigate(
  name: keyof ParamListBase,
  params?: ParamListBase[keyof ParamListBase],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(
  name: keyof ParamListBase,
  params?: ParamListBase[keyof ParamListBase],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
}
function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routes.SPLASH_SCREEN}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
        <Stack.Screen name={routes.SETTINGS_SCREEN} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
