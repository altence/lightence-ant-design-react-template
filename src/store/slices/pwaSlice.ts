import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  event: null,
  isPWASupported: false,
  isStandalone: window.matchMedia('(display-mode: standalone)').matches,
};

export const pwaSlice = createSlice({
  name: 'pwa',
  initialState,
  reducers: {
    addDeferredPrompt: (state, action) => {
      state.event = action.payload;
      state.isPWASupported = true;
    },
  },
});

export const { addDeferredPrompt } = pwaSlice.actions;

export default pwaSlice.reducer;
