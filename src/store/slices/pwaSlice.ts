import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressiveWebAppState {
  event: Event | null;
  isPWASupported: boolean;
  isStandalone: boolean;
}

const initialState: ProgressiveWebAppState = {
  event: null,
  isPWASupported: false,
  isStandalone: window.matchMedia('(display-mode: standalone)').matches,
};

export const pwaSlice = createSlice({
  name: 'pwa',
  initialState,
  reducers: {
    addDeferredPrompt: (state, { payload }: PayloadAction<Event>) => {
      state.event = payload;
      state.isPWASupported = true;
    },
  },
});

export const { addDeferredPrompt } = pwaSlice.actions;

export default pwaSlice.reducer;
