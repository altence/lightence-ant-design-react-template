import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

interface NightModeState {
  isNightMode: boolean;
  nightTime: number[];
}

const initialState: NightModeState = {
  isNightMode: false,
  nightTime: DEFAULT_NIGHT_MODE_INTERVAL,
};

export const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState,
  reducers: {
    setNightMode: (state, action: PayloadAction<boolean>) => {
      state.isNightMode = action.payload;
    },
    setNightTime: (state, action: PayloadAction<number[]>) => {
      state.nightTime = action.payload;
    },
  },
});

export const { setNightMode, setNightTime } = nightModeSlice.actions;

export default nightModeSlice.reducer;
