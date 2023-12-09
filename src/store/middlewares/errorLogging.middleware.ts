import { isRejectedWithValue, Middleware, PayloadAction } from '@reduxjs/toolkit';
import { notificationController } from '@app/controllers/notificationController';
import { notification } from 'antd';

const openErrorNotification = notificationController(notification).error;

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
  const typedAction = action as PayloadAction<string>;

  if (isRejectedWithValue(typedAction)) {
    openErrorNotification({ message: typedAction.payload });
  }

  return next(action);
};
