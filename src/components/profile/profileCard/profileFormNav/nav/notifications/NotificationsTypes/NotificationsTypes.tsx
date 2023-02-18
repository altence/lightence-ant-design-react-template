import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { CheckboxColumn } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/CheckboxColumn/CheckboxColumn';
import { Option } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/interfaces';
import * as S from './NotificationsTypes.styles';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { notificationController } from '@app/controllers/notificationController';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';

interface Notifications {
  1: string[];
  2: string[];
  3: string[];
}

export const NotificationsTypes: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [checkedElements, setCheckedElements] = useState<Notifications>({
    1: [],
    2: [],
    3: [],
  });

  const [isTriggered, setTriggered] = useState(false);

  const options: Option[] = [
    {
      id: 1,
      header: t('common.email'),
      headerRender: (text, props) => <BaseCheckbox {...props}>{text}</BaseCheckbox>,
      data: [
        'emailMessages',
        'emailMentions',
        'emailReminders',
        'emailAllNews',
        'emailImportantNews',
        'emailActionRequired',
      ],
      dataRender: (text) => <BaseCheckbox value={text} />,
    },
    {
      id: 2,
      header: t('profile.nav.notifications.push'),
      headerRender: (text, props) => <BaseCheckbox {...props}>{text}</BaseCheckbox>,
      data: ['pushMessages', 'pushMentions', 'pushReminders', 'pushAllNews', 'pushImportantNews', 'pushActionRequired'],
      dataRender: (text) => <BaseCheckbox value={text} />,
    },
    {
      id: 3,
      header: t('profile.nav.notifications.SMS'),
      headerRender: (text, props) => <BaseCheckbox {...props}>{text}</BaseCheckbox>,
      data: ['smsMessages', 'smsMentions', 'smsReminders', 'smsAllNews', 'smsImportantNews', 'smsActionRequired'],
      dataRender: (text) => <BaseCheckbox value={text} />,
    },
    {
      id: 4,
      header: t('profile.nav.notifications.activities'),
      data: [
        t('profile.nav.notifications.directMessages'),
        t('profile.nav.notifications.mentions'),
        t('profile.nav.notifications.reminders'),
        t('profile.nav.notifications.allNews'),
        t('profile.nav.notifications.importantNews'),
        t('profile.nav.notifications.actionRequired'),
      ],
    },
  ];

  const handleCheck = useCallback(
    (mode: number) => (list: CheckboxValueType[]) => {
      setCheckedElements({ ...checkedElements, [mode]: list });
    },
    [checkedElements],
  );

  const onCancel = useCallback(() => {
    setTriggered(false);
  }, [setTriggered]);

  const onFinish = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTriggered(false);
      notificationController.success({ message: t('common.success') });
      console.log(checkedElements);
    }, 1000);
  }, [setTriggered, checkedElements, t]);

  return (
    <BaseButtonsForm
      name="notifications"
      onFinish={onFinish}
      isFieldsChanged={isTriggered}
      setFieldsChanged={setTriggered}
      footer={<BaseButtonsGroup loading={isLoading} onCancel={onCancel} />}
    >
      <S.Wrapper>
        {options.map((item) => (
          <CheckboxColumn key={item.id} column={item} handleCheck={handleCheck(item.id)} setTriggered={setTriggered} />
        ))}
      </S.Wrapper>
    </BaseButtonsForm>
  );
};
