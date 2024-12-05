import React, { useState } from 'react';
import { View, Text, Switch, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { styles } from './styles';
import { setUnit } from '../../redux/slice/weatherSlice';

const SettingsScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const unit = useAppSelector((state) => state.weather.unit);
  const [isCelsius, setIsCelsius] = useState(unit === 'celsius');

  const toggleUnit = () => {
    dispatch(setUnit(!isCelsius ? 'celsius' : 'fahrenheit'));
    setIsCelsius(!isCelsius);

  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <Text style={styles.label}>Temperature Unit</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.unitText}>{isCelsius ? 'Celsius' : 'Fahrenheit'}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isCelsius ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleUnit}
              value={isCelsius}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingsScreen;
