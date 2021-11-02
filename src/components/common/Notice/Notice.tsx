import React, { useMemo } from 'react';
import { Space } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, WarningFilled } from '@ant-design/icons';
import * as S from './Notice.styles';

const icons = {
  info: <InfoCircleFilled />,
  success: <CheckCircleFilled />,
  warning: <ExclamationCircleFilled />,
  error: <WarningFilled />,
};

export type NoticeType = 'info' | 'mention' | 'success' | 'warning' | 'error';

interface NoticeProps {
  type: NoticeType;
  title: React.ReactNode;
  description?: React.ReactNode;
  mentionIcon?: React.ReactNode;
}

export const Notice: React.FC<NoticeProps> = ({ type, mentionIcon, title, description }) => {
  const Icon = useMemo(() => Object.entries(icons).find((el) => el[0] === type)?.[1] || icons.warning, [type]);

  return (
    <S.SpaceWrapper type={type} align="start" size="middle">
      {mentionIcon ? <S.NoticeIcon src={mentionIcon} alt="User icon" /> : Icon}
      <Space direction="vertical">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </Space>
    </S.SpaceWrapper>
  );
};
