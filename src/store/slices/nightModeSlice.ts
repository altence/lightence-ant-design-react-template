import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

interface NightModeState {
  isNightMode: boolean;
  nightTime: number[];
}

const currentNightTimeJSON = localStorage.getItem('nightTime');
const currentNightTime: number[] = currentNightTimeJSON
  ? (JSON.parse(currentNightTimeJSON) as number[])
  : DEFAULT_NIGHT_MODE_INTERVAL;

const isNightMode = localStorage.getItem('nightMode') === 'true';

localStorage.setItem('nightTime', JSON.stringify(currentNightTime));
localStorage.setItem('nightMode', JSON.stringify(isNightMode));

const initialState: NightModeState = {
  isNightMode,
  nightTime: currentNightTime,
};

export const setNightMode = createAction<PrepareAction<boolean>>('nightMode/setNightMode', (isNightMode) => {
  localStorage.setItem('nightMode', JSON.stringify(isNightMode));

  return {
    payload: isNightMode,
  };
});

export const setNightTime = createAction<PrepareAction<number[]>>('nightMode/setNightTime', (nightTime) => {
  localStorage.setItem('nightTime', JSON.stringify(nightTime));

  return {
    payload: nightTime,
  };
});

export const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNightMode, (state, action) => {
      state.isNightMode = action.payload;
    });
    builder.addCase(setNightTime, (state, action) => {
      state.nightTime = action.payload;
    });
  },
});

export default nightModeSlice.reducer;
