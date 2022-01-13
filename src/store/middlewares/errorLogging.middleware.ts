import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { notificationController } from '@app/controllers/notificationController';

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    notificationController.error({ message: action.payload });
  }

  return next(action);
};
