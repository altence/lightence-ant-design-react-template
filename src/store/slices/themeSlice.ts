import { ThemeType } from '@app/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  value: ThemeType;
}

const initialState: ThemeState = {
  value: 'dark',
};

export const themeSlice = createSlice({
  name: 'nightMode',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
