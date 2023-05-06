import { App } from 'antd';

import { notificationController } from '@app/controllers/notificationController';
import { modalController } from '@app/controllers/modalController';

export const useFeedback = (): ReturnType<typeof App.useApp> => {
  const { message, notification, modal } = App.useApp();

  return {
    message,
    notification: {
      ...notificationController(notification),
      destroy: notification.destroy,
      open: notification.open,
    },
    modal: {
      ...modalController(modal),
      confirm: modal.confirm,
    },
  };
};
