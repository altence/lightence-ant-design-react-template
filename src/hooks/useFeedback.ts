import { App } from 'antd';

import { notificationController } from '@app/controllers/notificationController';
import { ModalType, modalController } from '@app/controllers/modalController';

export const useFeedback = (): Omit<ReturnType<typeof App.useApp>, 'modal'> & {
  modal: ModalType;
} => {
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
    },
  };
};
