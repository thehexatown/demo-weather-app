import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Unit, WeatherState} from '../../utils/types';

const initialState: WeatherState = {
  unit: 'celsius',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setUnit: (state, action: PayloadAction<Unit>) => {
      state.unit = action.payload;
    },
  },
});

export const {setUnit} = weatherSlice.actions;
export default weatherSlice.reducer;
