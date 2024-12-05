import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { ReduxProvider } from './src/redux/provider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store';


function App() {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
