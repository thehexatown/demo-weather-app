import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import weatherSlice from './slice/weatherSlice';

// Combine reducers
const reducers = combineReducers({
  weather: weatherSlice,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weather'],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer here
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

// Create the persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export {persistor, store};
