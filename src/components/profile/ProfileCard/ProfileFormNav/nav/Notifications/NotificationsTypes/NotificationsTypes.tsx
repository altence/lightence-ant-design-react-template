import React, { useCallback, useState } from 'react';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../../../common/Form/Form';
import { Option } from './interfaces';
import { CheckboxColumn } from './CheckboxColumn/CheckboxColumn';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import * as S from './NotificationsTypes.styles';
import { updateNotifications } from 'api/users.api';

interface Notifications {
  1: string[];
  2: string[];
  3: string[];
}

export const NotificationsTypes: React.FC = () => {
  const { t } = useTranslation();
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
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: [
        'emailMessages',
        'emailMentions',
        'emailReminders',
        'emailAllNews',
        'emailImportantNews',
        'emailActionRequired',
      ],
      dataRender: (text) => <Checkbox value={text} />,
    },
    {
      id: 2,
      header: t('profile.nav.notifications.push'),
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: ['pushMessages', 'pushMentions', 'pushReminders', 'pushAllNews', 'pushImportantNews', 'pushActionRequired'],
      dataRender: (text) => <Checkbox value={text} />,
    },
    {
      id: 3,
      header: t('profile.nav.notifications.SMS'),
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: ['smsMessages', 'smsMentions', 'smsReminders', 'smsAllNews', 'smsImportantNews', 'smsActionRequired'],
      dataRender: (text) => <Checkbox value={text} />,
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
    setTriggered(false);

    return await updateNotifications(checkedElements);
  }, [setTriggered, checkedElements]);

  return (
    <Form name="notifications" onCancel={onCancel} onFinish={onFinish} trigger={isTriggered}>
      <S.Wrapper>
        {options.map((item) => (
          <CheckboxColumn key={item.id} column={item} handleCheck={handleCheck(item.id)} setTriggered={setTriggered} />
        ))}
      </S.Wrapper>
    </Form>
  );
};
