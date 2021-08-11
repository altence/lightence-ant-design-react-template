import React from 'react';
import { BarChartOutlined, CalendarOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { Card } from '../../common/Card/Card';
import { patientTimeline } from '../../../constants/patientTimeline';
import * as S from './PatientTimelineCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientTimelineCard: React.FC = () => {
  return (
    <Card title="Patient timeline" padding="0.875rem 1.25rem">
      <S.Wrapper>
        {patientTimeline.map((item, index) => (
          <S.Item key={item.id}>
            <S.IconWrapper isActive={item.isActive}>{icons[index]}</S.IconWrapper>
            <S.InfoWrapper>
              <S.Title isActive={item.isActive}>{item.title}</S.Title>
              <S.DateWrapper>
                <CalendarOutlined />
                <S.Text>{item.date}</S.Text>
              </S.DateWrapper>
              <S.Description>{item.description}</S.Description>
            </S.InfoWrapper>
          </S.Item>
        ))}
      </S.Wrapper>
    </Card>
  );
};
