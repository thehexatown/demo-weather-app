import { View } from 'react-native';
import React, { useEffect } from 'react';
import { replace } from '../../navigation/MainNavigator';
import routes from '../../constants/routes';
import { styles } from './styles';
import { getPermission } from '../../utils/permission';

const SplashScreen = () => {

  useEffect(() => {
    getPermission()
    setTimeout(() => {
      replace(routes.HOME_SCREEN);
    }, 2000);

  }, []);

  return (
    <View style={styles.container}>

    </View>
  );
};

export default SplashScreen;
