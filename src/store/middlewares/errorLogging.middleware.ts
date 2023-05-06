import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { notificationController } from '@app/controllers/notificationController';
import { notification } from 'antd';

const openErrorNotification = notificationController(notification).error;

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    openErrorNotification({ message: action.payload });
  }

  return next(action);
};
