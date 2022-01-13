import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@app/store/userSlice';
import authSlice from '@app/store/authSlice';
import { errorLoggingMiddleware } from '@app/store/middlewares/errorLogging.middleware';

export const store = configureStore({
  reducer: { user: userSlice, auth: authSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLoggingMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
